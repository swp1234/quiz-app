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
// TODO: AdSense 연동 시 활성화
// const interstitialAd = document.getElementById('interstitial-ad');
// const closeAdBtn = document.getElementById('close-ad');

// 초기화
function init() {
    // 퀴즈 데이터 셔플 및 10개 선택
    selectedQuestions = shuffleArray([...quizData]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    updateScore();
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

    questionNumberElement.textContent = currentQuestion + 1;
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

    // 다음 문제로 이동 (1.5초 후)
    setTimeout(() => {
        currentQuestion++;

        // 3문제마다 전면 광고 표시 (AdSense 연동 후 활성화)
        // TODO: AdSense 연동 시 아래 주석 해제
        // if (currentQuestion % 3 === 0 && currentQuestion < selectedQuestions.length) {
        //     showInterstitialAd();
        // } else {
        //     loadQuestion();
        // }

        // 임시: 광고 없이 바로 다음 문제로
        loadQuestion();
    }, 1500);
}

// 점수 업데이트
function updateScore() {
    scoreElement.textContent = score;
}

// TODO: AdSense 연동 시 활성화
// 전면 광고 표시
// function showInterstitialAd() {
//     // 광고 표시 및 닫기 버튼 초기화
//     interstitialAd.classList.remove('hidden');
//     closeAdBtn.classList.add('hidden');
//     closeAdBtn.onclick = null; // 기존 이벤트 제거
//
//     // 3초 후 닫기 버튼 표시
//     setTimeout(() => {
//         closeAdBtn.classList.remove('hidden');
//
//         // 닫기 버튼 클릭 이벤트
//         closeAdBtn.onclick = () => {
//             interstitialAd.classList.add('hidden');
//             closeAdBtn.classList.add('hidden');
//             loadQuestion();
//         };
//     }, 3000);
// }

// 결과 표시
function showResults() {
    quizArea.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreElement.textContent = `${score}/10`;
}

// 퀴즈 재시작
function restartQuiz() {
    resultScreen.classList.add('hidden');
    quizArea.classList.remove('hidden');
    init();
}

// 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', init);
