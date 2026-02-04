// 지식 퀴즈 앱 - 2026 디자인 버전

// 앱 상태 관리
let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let wrongAnswers = [];
let categoryStats = {};

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
langToggle.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
});

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
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
        if (!resultScreen.classList.contains('hidden')) {
            showCategoryStats();
            showWrongAnswers();
        }
    });
});

// 초기화
async function init() {
    // i18n 초기화
    await i18n.loadTranslations(i18n.getCurrentLanguage());
    i18n.updateUI();

    // 현재 언어 활성화 표시
    const currentLang = i18n.getCurrentLanguage();
    document.querySelector(`[data-lang="${currentLang}"]`)?.classList.add('active');

    // 퀴즈 데이터 셔플 및 10개 선택
    selectedQuestions = shuffleArray([...quizData]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    wrongAnswers = [];
    categoryStats = {};
    updateScore();
    updateProgress();
    loadQuestion();
}

// 배열 셔플 함수
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
    if (currentQuestion >= selectedQuestions.length) {
        showResults();
        return;
    }

    const question = selectedQuestions[currentQuestion];
    
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
}

// 프로그레스 바 업데이트
function updateProgress() {
    const progress = ((currentQuestion + 1) / 10) * 100;
    progressFill.style.width = `${progress}%`;
}

// 답변 선택
function selectAnswer(selectedIndex) {
    const question = selectedQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = selectedIndex === question.correct;

    // 모든 버튼 비활성화
    buttons.forEach(btn => btn.disabled = true);

    // 카테고리 통계 업데이트
    const category = question.category || '기타';
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
            explanation: question.explanation || '해설이 없습니다.',
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
    loadQuestion();
}

// 점수 업데이트
function updateScore() {
    scoreElement.textContent = score;
}

// 결과 표시
function showResults() {
    quizArea.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;

    // 점수에 따른 등급 및 메시지
    let grade, gradeText, icon, messagesKey;

    if (score === 10) {
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
    resultMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
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
function restartQuiz() {
    resultScreen.classList.add('hidden');
    quizArea.classList.remove('hidden');
    init();
}

// 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', async () => {
    await init();
});
