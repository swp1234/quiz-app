// 지식 퀴즈 앱 - 2026 디자인 버전

// 앱 상태 관리
let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let wrongAnswers = [];
let categoryStats = {};
let highScore = 0;
let totalGamesPlayed = 0;
let questionTimer = null;
let timeLeft = 0;
const TIME_PER_QUESTION = 15; // seconds
const QUESTIONS_PER_GAME = 10;

// DOM 요소
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const scoreElement = document.getElementById('score');
const questionNumberElement = document.getElementById('question-number');
const quizArea = document.getElementById('quiz-area');
const resultScreen = document.getElementById('result-screen');
const finalScoreElement = document.getElementById('final-score');
const progressFill = document.getElementById('progress-fill');
const questionBadge = document.getElementById('question-badge');
const resultIcon = document.getElementById('result-icon');
const resultMessage = document.getElementById('result-message');
const scoreGrade = document.getElementById('score-grade');

// 언어 선택 UI
const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const langOptions = document.querySelectorAll('.lang-option');

// 언어 선택 이벤트
if (langToggle) {
    langToggle.addEventListener('click', () => {
        langMenu.classList.toggle('hidden');
    });
}

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector') && langMenu) {
        langMenu.classList.add('hidden');
    }
});

langOptions.forEach(option => {
    option.addEventListener('click', async () => {
        const lang = option.getAttribute('data-lang');
        await i18n.setLanguage(lang);

        // 활성 언어 표시
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        langMenu.classList.add('hidden');

        // 현재 화면 상태 유지하며 재렌더링
        if (resultScreen && !resultScreen.classList.contains('hidden')) {
            showCategoryStats();
            showWrongAnswers();
        }
    });
});

// localStorage 로드
function loadSavedData() {
    try {
        highScore = parseInt(localStorage.getItem('quiz_highScore')) || 0;
        totalGamesPlayed = parseInt(localStorage.getItem('quiz_totalGames')) || 0;
    } catch (e) {
        highScore = 0;
        totalGamesPlayed = 0;
    }
}

// localStorage 저장
function saveGameData() {
    try {
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('quiz_highScore', highScore);
        }
        totalGamesPlayed++;
        localStorage.setItem('quiz_totalGames', totalGamesPlayed);
    } catch (e) {}
}

// 초기화
async function init() {
    // quizData 로드 확인
    if (typeof quizData === 'undefined' || !quizData || quizData.length === 0) {
        console.error('quizData not loaded.');
        if (questionText) questionText.textContent = i18n ? i18n.t('quiz.loading') : 'Loading...';
        setTimeout(() => {
            if (typeof quizData !== 'undefined' && quizData && quizData.length > 0) {
                init();
            } else {
                if (questionText) questionText.textContent = i18n ? i18n.t('quiz.loadError') : 'Failed to load quiz data.';
            }
        }, 500);
        return;
    }

    // i18n 초기화 확인
    try {
        if (typeof i18n !== 'undefined') {
            await i18n.loadTranslations(i18n.getCurrentLanguage());
            i18n.updateUI();

            const currentLang = i18n.getCurrentLanguage();
            const activeLangBtn = document.querySelector(`[data-lang="${currentLang}"]`);
            if (activeLangBtn) activeLangBtn.classList.add('active');
        }
    } catch (e) {
        console.warn('i18n init failed:', e);
    }

    // localStorage에서 데이터 로드
    loadSavedData();

    // 퀴즈 데이터 셔플 및 선택
    selectedQuestions = shuffleArray([...quizData]).slice(0, QUESTIONS_PER_GAME);
    currentQuestion = 0;
    score = 0;
    wrongAnswers = [];
    categoryStats = {};
    updateScore();
    updateProgress();
    loadQuestion();
}

// 배열 셔플 함수 (Fisher-Yates)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 문제 로드
function loadQuestion() {
    if (!selectedQuestions || selectedQuestions.length === 0) {
        console.error('selectedQuestions is empty.');
        if (questionText) questionText.textContent = i18n ? i18n.t('quiz.loading') : 'Loading...';
        return;
    }

    if (currentQuestion >= selectedQuestions.length) {
        showResults();
        return;
    }

    const question = selectedQuestions[currentQuestion];

    if (!question || !question.question) {
        console.error('Question data not found.');
        currentQuestion++;
        loadQuestion();
        return;
    }

    // 문제 배지 업데이트
    questionBadge.textContent = `Q${currentQuestion + 1}`;

    // 문제 텍스트 업데이트
    questionText.textContent = question.question;
    answersContainer.innerHTML = '';

    // 답변 버튼 생성
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });

    // 문제 번호 업데이트
    questionNumberElement.textContent = currentQuestion + 1;

    // 프로그레스 바 업데이트
    updateProgress();

    // Start timer
    startTimer();
}

// Timer functions
function startTimer() {
    clearInterval(questionTimer);
    timeLeft = TIME_PER_QUESTION;
    updateTimerDisplay();

    questionTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    let timerEl = document.getElementById('question-timer');
    if (!timerEl) {
        timerEl = document.createElement('div');
        timerEl.id = 'question-timer';
        timerEl.style.cssText = 'text-align:center;margin-bottom:12px;';
        const quizHeader = document.querySelector('.quiz-header');
        if (quizHeader) {
            quizHeader.after(timerEl);
        } else {
            const appHeader = document.querySelector('.app-header');
            if (appHeader) appHeader.after(timerEl);
        }
    }
    const pct = (timeLeft / TIME_PER_QUESTION) * 100;
    const color = timeLeft <= 5 ? '#e74c3c' : timeLeft <= 10 ? '#f39c12' : '#27ae60';
    timerEl.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;justify-content:center;">
            <div style="flex:1;max-width:200px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
                <div style="width:${pct}%;height:100%;background:${color};border-radius:3px;transition:width 0.3s ease,background 0.3s;"></div>
            </div>
            <span style="font-size:14px;font-weight:700;color:${color};min-width:28px;">${timeLeft}s</span>
        </div>
    `;
}

function handleTimeout() {
    const question = selectedQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    // Mark correct answer
    if (buttons[question.correct]) {
        buttons[question.correct].classList.add('correct');
    }

    // Track wrong answer
    const category = question.category || i18n.t('premium.other');
    if (!categoryStats[category]) {
        categoryStats[category] = { correct: 0, total: 0 };
    }
    categoryStats[category].total++;
    wrongAnswers.push({
        question: question.question,
        yourAnswer: i18n.t('quiz.timeout'),
        correctAnswer: question.answers[question.correct],
        explanation: question.explanation || i18n.t('explanation.noExplanation'),
        category: category
    });

    // Proceed to next question
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1500);
}

// 프로그레스 바 업데이트
function updateProgress() {
    const total = selectedQuestions.length || QUESTIONS_PER_GAME;
    const progress = ((currentQuestion + 1) / total) * 100;
    progressFill.style.width = `${progress}%`;
}

// 답변 선택
function selectAnswer(selectedIndex) {
    clearInterval(questionTimer);
    const question = selectedQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = selectedIndex === question.correct;

    // 모든 버튼 비활성화
    buttons.forEach(btn => btn.disabled = true);

    // 카테고리 통계 업데이트
    const category = question.category || i18n.t('premium.other');
    if (!categoryStats[category]) {
        categoryStats[category] = { correct: 0, total: 0 };
    }
    categoryStats[category].total++;
    if (isCorrect) {
        categoryStats[category].correct++;
    }

    // 정답 확인
    if (isCorrect) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        updateScore();
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');

        // 오답 저장
        wrongAnswers.push({
            question: question.question,
            yourAnswer: question.answers[selectedIndex],
            correctAnswer: question.answers[question.correct],
            explanation: question.explanation || i18n.t('explanation.noExplanation'),
            category: category
        });
    }

    // 해설 표시 (1초 후)
    setTimeout(() => {
        showExplanation(isCorrect, question);
    }, 1000);
}

// 해설 표시
function showExplanation(isCorrect, question) {
    const modal = document.getElementById('explanation-modal');
    const title = document.getElementById('explanation-title');
    const text = document.getElementById('explanation-text');

    title.textContent = isCorrect ? i18n.t('explanation.correct') : i18n.t('explanation.wrong');
    title.style.color = isCorrect ? '#4caf50' : '#e74c3c';

    const explanation = question.explanation || i18n.t('explanation.noExplanation');
    text.textContent = `${i18n.t('explanation.answer')}: ${question.answers[question.correct]}\n\n${explanation}`;

    modal.classList.remove('hidden');
}

// 해설 닫기
function closeExplanation() {
    const modal = document.getElementById('explanation-modal');
    modal.classList.add('hidden');

    // 다음 문제로 이동
    currentQuestion++;

    // 5문제마다 전면 광고 표시 (마지막 문제 제외)
    if (currentQuestion > 0 && currentQuestion % 5 === 0 && currentQuestion < selectedQuestions.length) {
        showInterstitialAd().then(() => {
            loadQuestion();
        });
    } else {
        loadQuestion();
    }
}

// 점수 업데이트
function updateScore() {
    scoreElement.textContent = score;
}

// 결과 표시
function showResults() {
    clearInterval(questionTimer);
    const timerEl = document.getElementById('question-timer');
    if (timerEl) timerEl.remove();
    quizArea.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;

    // 게임 데이터 저장
    saveGameData();

    // 점수에 따른 등급 및 메시지
    let grade, gradeText, icon, messagesKey;

    if (score === QUESTIONS_PER_GAME) {
        grade = 'grade-excellent';
        gradeText = i18n.t('results.grades.excellent');
        icon = '🎉';
        messagesKey = 'excellent';
    } else if (score >= 7) {
        grade = 'grade-good';
        gradeText = i18n.t('results.grades.good');
        icon = '🥳';
        messagesKey = 'good';
    } else if (score >= 4) {
        grade = 'grade-average';
        gradeText = i18n.t('results.grades.average');
        icon = '😊';
        messagesKey = 'average';
    } else {
        grade = 'grade-poor';
        gradeText = i18n.t('results.grades.poor');
        icon = '😅';
        messagesKey = 'poor';
    }

    // UI 업데이트
    resultIcon.textContent = icon;
    const messages = i18n.t(`results.messages.${messagesKey}`);
    if (Array.isArray(messages) && messages.length > 0) {
        resultMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
    } else {
        resultMessage.textContent = typeof messages === 'string' ? messages : '';
    }
    scoreGrade.className = `score-grade ${grade}`;
    scoreGrade.textContent = gradeText;

    // 카테고리별 통계 표시
    showCategoryStats();

    // 오답 노트 표시
    showWrongAnswers();
}

// 카테고리별 통계 표시
function showCategoryStats() {
    const container = document.getElementById('category-stats');

    if (Object.keys(categoryStats).length === 0) {
        container.innerHTML = '';
        return;
    }

    let html = `<h3 style="margin-top: 2rem; margin-bottom: 1rem; color: #667eea;">${i18n.t('results.categoryStats')}</h3>`;
    html += '<div style="display: grid; gap: 0.5rem;">';

    for (const [category, stats] of Object.entries(categoryStats)) {
        const percentage = Math.round((stats.correct / stats.total) * 100);
        html += `
            <div style="background: rgba(102, 126, 234, 0.1); padding: 1rem; border-radius: 12px; border-left: 4px solid #667eea;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 600;">${category}</span>
                    <span style="color: #667eea; font-weight: 700;">${stats.correct}/${stats.total} (${percentage}%)</span>
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// 오답 노트 표시
function showWrongAnswers() {
    const container = document.getElementById('wrong-answers');

    if (wrongAnswers.length === 0) {
        container.innerHTML = `<p style="margin-top: 2rem; color: #4caf50; font-weight: 600;">${i18n.t('results.allCorrect')}</p>`;
        return;
    }

    let html = `<h3 style="margin-top: 2rem; margin-bottom: 1rem; color: #e74c3c;">${i18n.t('results.wrongAnswers')}</h3>`;
    html += '<div style="display: grid; gap: 1rem;">';

    wrongAnswers.forEach((item, index) => {
        html += `
            <div style="background: rgba(231, 76, 60, 0.05); padding: 1rem; border-radius: 12px; border-left: 4px solid #e74c3c;">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">${index + 1}. ${item.question}</div>
                <div style="font-size: 0.9rem; margin-bottom: 0.5rem;">
                    <span style="color: #e74c3c;">${i18n.t('wrongNote.yourAnswer')}: ${item.yourAnswer}</span><br>
                    <span style="color: #4caf50;">${i18n.t('wrongNote.correctAnswer')}: ${item.correctAnswer}</span>
                </div>
                <div style="font-size: 0.85rem; color: #666; background: rgba(255,255,255,0.5); padding: 0.5rem; border-radius: 8px; margin-top: 0.5rem;">
                    💡 ${item.explanation}
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// 퀴즈 재시작
async function restartQuiz() {
    resultScreen.classList.add('hidden');
    quizArea.classList.remove('hidden');
    await init();
}

// 전면 광고 표시
function showInterstitialAd() {
    return new Promise((resolve) => {
        const adOverlay = document.getElementById('interstitial-ad');
        const closeBtn = document.getElementById('close-ad');
        const countdown = document.getElementById('countdown');

        adOverlay.classList.remove('hidden');
        closeBtn.disabled = true;

        let seconds = 5;
        const closeText = i18n.t('ads.close') || 'Close';
        countdown.textContent = seconds;
        closeBtn.textContent = `${closeText} (${seconds})`;

        const timer = setInterval(() => {
            seconds--;
            countdown.textContent = seconds;
            closeBtn.textContent = `${closeText} (${seconds})`;

            if (seconds <= 0) {
                clearInterval(timer);
                closeBtn.disabled = false;
                closeBtn.textContent = closeText;

                closeBtn.onclick = () => {
                    adOverlay.classList.add('hidden');
                    closeBtn.textContent = `${closeText} (5)`;
                    resolve();
                };
            }
        }, 1000);
    });
}

// 프리미엄 분석 콘텐츠 생성
function generatePremiumAnalysis() {
    const totalQuestions = selectedQuestions.length;
    const correctRate = Math.round((score / totalQuestions) * 100);

    // 카테고리별 분석
    const sortedCategories = Object.entries(categoryStats).sort((a, b) => {
        const rateA = a[1].correct / a[1].total;
        const rateB = b[1].correct / b[1].total;
        return rateB - rateA;
    });

    let strongCategories = [];
    let weakCategories = [];

    sortedCategories.forEach(([cat, stats]) => {
        const rate = Math.round((stats.correct / stats.total) * 100);
        if (rate >= 70) strongCategories.push(cat);
        else weakCategories.push(cat);
    });

    // 학습 추천
    let studyTips = [];
    if (weakCategories.length > 0) {
        studyTips.push(`📚 <strong>${weakCategories.join(', ')}</strong> ${i18n.t('premium.weakAreaTip')}`);
    }
    if (strongCategories.length > 0) {
        studyTips.push(`💪 <strong>${strongCategories.join(', ')}</strong> ${i18n.t('premium.strongAreaTip')}`);
    }

    // 오답 패턴 분석
    let patternAnalysis = '';
    if (wrongAnswers.length > 0) {
        const wrongCategories = {};
        wrongAnswers.forEach(w => {
            wrongCategories[w.category] = (wrongCategories[w.category] || 0) + 1;
        });
        const mostWrong = Object.entries(wrongCategories).sort((a, b) => b[1] - a[1])[0];
        patternAnalysis = `${i18n.t('premium.mostWrongArea')}: <strong>${mostWrong[0]}</strong> (${mostWrong[1]}${i18n.t('premium.questionUnit')})`;
    }

    // 레벨 평가
    let level, levelDesc;
    if (correctRate >= 90) {
        level = i18n.t('premium.levels.master');
        levelDesc = i18n.t('premium.levels.masterDesc');
    } else if (correctRate >= 70) {
        level = i18n.t('premium.levels.expert');
        levelDesc = i18n.t('premium.levels.expertDesc');
    } else if (correctRate >= 50) {
        level = i18n.t('premium.levels.intermediate');
        levelDesc = i18n.t('premium.levels.intermediateDesc');
    } else {
        level = i18n.t('premium.levels.beginner');
        levelDesc = i18n.t('premium.levels.beginnerDesc');
    }

    // 게임 통계
    let statsHtml = `
        <div class="premium-stats-grid">
            <div class="premium-stat">
                <div class="premium-stat-value">${totalGamesPlayed}</div>
                <div class="premium-stat-label">${i18n.t('premium.totalGames')}</div>
            </div>
            <div class="premium-stat">
                <div class="premium-stat-value">${highScore}/${QUESTIONS_PER_GAME}</div>
                <div class="premium-stat-label">${i18n.t('premium.highScore')}</div>
            </div>
            <div class="premium-stat">
                <div class="premium-stat-value">${correctRate}%</div>
                <div class="premium-stat-label">${i18n.t('premium.correctRate')}</div>
            </div>
        </div>
    `;

    let html = `
        <div class="premium-analysis">
            <div class="premium-level">
                <div class="premium-level-badge">${level}</div>
                <p>${levelDesc}</p>
            </div>

            ${statsHtml}

            <div class="premium-section-block">
                <h4>${i18n.t('premium.categoryAnalysis')}</h4>
                ${sortedCategories.map(([cat, stats]) => {
                    const rate = Math.round((stats.correct / stats.total) * 100);
                    const barColor = rate >= 70 ? '#00d26a' : rate >= 40 ? '#ffd93d' : '#ff6b6b';
                    return `
                        <div class="premium-category-bar">
                            <div class="bar-label">
                                <span>${cat}</span>
                                <span>${stats.correct}/${stats.total} (${rate}%)</span>
                            </div>
                            <div class="bar-track">
                                <div class="bar-fill" style="width: ${rate}%; background: ${barColor};"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            ${studyTips.length > 0 ? `
            <div class="premium-section-block">
                <h4>${i18n.t('premium.studyRecommendation')}</h4>
                <ul class="premium-tips">
                    ${studyTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${patternAnalysis ? `
            <div class="premium-section-block">
                <h4>${i18n.t('premium.wrongPatternAnalysis')}</h4>
                <p>${patternAnalysis}</p>
                ${wrongAnswers.length > 0 ? `
                <div class="premium-wrong-detail">
                    ${wrongAnswers.map((w, i) => `
                        <div class="wrong-item">
                            <div class="wrong-q">${i + 1}. ${w.question}</div>
                            <div class="wrong-a">❌ ${w.yourAnswer} → ✅ ${w.correctAnswer}</div>
                            <div class="wrong-tip">💡 ${w.explanation}</div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
            ` : ''}
        </div>
    `;

    return html;
}

// 프리미엄 분석 표시
function showPremiumAnalysis() {
    showInterstitialAd().then(() => {
        const premiumModal = document.getElementById('premium-modal');
        const premiumBody = document.getElementById('premium-body');
        premiumBody.innerHTML = generatePremiumAnalysis();
        premiumModal.classList.remove('hidden');
    });
}

// Service Worker 등록
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.log('SW registration failed:', err));
    }
}

// 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', async () => {
    // i18n과 quizData 로드 확인 (재시도 로직 개선)
    let retryCount = 0;
    const maxRetries = 10;

    function checkDependencies() {
        if (typeof i18n !== 'undefined' && typeof quizData !== 'undefined') {
            return true;
        }
        return false;
    }

    async function startApp() {
        try {
            if (!checkDependencies()) {
                retryCount++;
                if (retryCount < maxRetries) {
                    setTimeout(startApp, 200);
                    return;
                }
                console.error('Dependencies failed to load after retries');
                const questionTextEl = document.getElementById('question-text');
                if (questionTextEl) questionTextEl.textContent = 'Failed to load. Please refresh.';
                return;
            }

            await init();
            registerServiceWorker();

            // 프리미엄 분석 버튼
            const premiumBtn = document.getElementById('premium-analysis-btn');
            if (premiumBtn) {
                premiumBtn.addEventListener('click', showPremiumAnalysis);
            }

            // 프리미엄 모달 닫기
            const premiumClose = document.getElementById('premium-close');
            if (premiumClose) {
                premiumClose.addEventListener('click', () => {
                    document.getElementById('premium-modal').classList.add('hidden');
                });
            }

            // Theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', savedTheme);
                themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
                themeToggle.addEventListener('click', () => {
                    const current = document.documentElement.getAttribute('data-theme');
                    const next = current === 'light' ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('theme', next);
                    themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
                });
            }
        } catch(e) {
            console.error('Init error:', e);
        } finally {
            const loader = document.getElementById('app-loader');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => loader.remove(), 300);
            }
        }
    }

    await startApp();
});
