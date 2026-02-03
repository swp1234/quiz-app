// 지식 퀴즈 앱 - 2026 디자인 버전

// 앱 상태 관리
let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

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

// 결과 메시지
const resultMessages = {
    excellent: ['완벽해요! 천재시네요! 🧠', '대단해요! 지식왕입니다! 👑', '놀라워요! 만점이에요! 🌟'],
    good: ['잘했어요! 훌륭합니다! 👏', '대단해요! 거의 다 맞혔어요! 💪', '멋져요! 실력이 뛰어나네요! ✨'],
    average: ['좋아요! 조금만 더 노력하면 돼요! 📚', '괜찮아요! 다음엔 더 잘할 거예요! 💫', '나쁘지 않아요! 계속 도전하세요! 🎯'],
    poor: ['아쉬워요! 다시 도전해보세요! 🔄', '괜찮아요! 공부하고 다시 도전! 📖', '포기하지 마세요! 연습이 답이에요! 💪']
};

// 초기화
function init() {
    // 퀴즈 데이터 셔플 및 10개 선택
    selectedQuestions = shuffleArray([...quizData]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
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

    // 모든 버튼 비활성화
    buttons.forEach(btn => btn.disabled = true);

    // 정답 확인
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        updateScore();
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }

    // 다음 문제로 이동 (1.2초 후)
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1200);
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
    let grade, gradeText, icon, messages;
    
    if (score === 10) {
        grade = 'grade-excellent';
        gradeText = '🏆 만점! 천재!';
        icon = '🎉';
        messages = resultMessages.excellent;
    } else if (score >= 7) {
        grade = 'grade-good';
        gradeText = '⭐ 훌륭해요!';
        icon = '🥳';
        messages = resultMessages.good;
    } else if (score >= 4) {
        grade = 'grade-average';
        gradeText = '👍 좋아요!';
        icon = '😊';
        messages = resultMessages.average;
    } else {
        grade = 'grade-poor';
        gradeText = '💪 다시 도전!';
        icon = '😅';
        messages = resultMessages.poor;
    }
    
    // UI 업데이트
    resultIcon.textContent = icon;
    resultMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
    scoreGrade.className = `score-grade ${grade}`;
    scoreGrade.textContent = gradeText;
}

// 퀴즈 재시작
function restartQuiz() {
    resultScreen.classList.add('hidden');
    quizArea.classList.remove('hidden');
    init();
}

// 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', init);
