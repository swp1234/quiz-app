// 퀴즈 데이터 (저작권 걱정 없는 상식 문제 100개)
// 난이도 비율: 쉬움(10개) : 보통(50개) : 어려움(40개) = 1:5:4
// 카테고리: 일반상식, 과학, 역사, 지리, 경제, 문학/예술, IT/기술, 언어/문화, 생활/건강

const quizData = [
    // ========================================
    // [쉬움] 10문제 - 워밍업용
    // ========================================
    {
        question: "대한민국의 수도는?",
        answers: ["서울", "부산", "인천", "대전"],
        correct: 0,
        difficulty: "easy",
        category: "지리",
        explanation: "서울은 대한민국의 수도이자 최대 도시입니다. 조선시대부터 현재까지 500년 이상 수도 역할을 하고 있습니다."
    },
    {
        question: "태양계에서 가장 큰 행성은?",
        answers: ["지구", "화성", "목성", "토성"],
        correct: 2,
        difficulty: "easy",
        category: "과학",
        explanation: "목성은 태양계에서 가장 큰 행성으로, 질량은 지구의 약 318배입니다. 주로 수소와 헬륨으로 이루어져 있습니다."
    },
    {
        question: "한글을 창제한 왕은?",
        answers: ["세종대왕", "태조", "정조", "영조"],
        correct: 0,
        difficulty: "easy",
        category: "역사",
        explanation: "세종대왕은 조선 제4대 왕으로, 1443년 훈민정음(한글)을 창제했습니다. 백성을 위한 쉬운 문자를 만들었습니다."
    },
    {
        question: "물의 화학식은?",
        answers: ["H2O", "CO2", "O2", "NaCl"],
        correct: 0,
        category: "과학",
        explanation: "H2O는 수소 원자 2개와 산소 원자 1개로 이루어진 물 분자입니다.",
        difficulty: "easy"
    },
    {
        question: "1년은 몇 개월인가?",
        answers: ["10개월", "11개월", "12개월", "13개월"],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "세계에서 가장 높은 산은?",
        answers: ["K2", "에베레스트", "킬리만자로", "몽블랑"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "일본의 수도는?",
        answers: ["오사카", "도쿄", "교토", "나고야"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "빨강, 노랑, 파랑을 무엇이라 하는가?",
        answers: ["보조색", "삼원색", "혼합색", "무채색"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "지구는 태양 주위를 약 며칠에 한 바퀴 도는가?",
        answers: ["30일", "100일", "365일", "500일"],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "대한민국 국기의 이름은?",
        answers: ["태극기", "성조기", "일장기", "유니언잭"],
        correct: 0,
        difficulty: "easy"
    },

    // ========================================
    // [보통] 50문제 - 중심 문제
    // ========================================
    
    // 일반상식 (보통) - 10문제
    {
        question: "대한민국 헌법 제1조 1항의 내용은?",
        answers: ["대한민국은 민주공화국이다", "모든 권력은 국민으로부터 나온다", "대한민국의 수도는 서울이다", "대한민국의 영토는 한반도와 그 부속도서로 한다"],
        correct: 0,
        difficulty: "normal"
    },
    {
        question: "올림픽 오륜기의 5가지 색이 아닌 것은?",
        answers: ["빨강", "보라", "파랑", "노랑"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "국제연합(UN) 본부가 위치한 도시는?",
        answers: ["제네바", "뉴욕", "파리", "런던"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "FIFA 월드컵은 몇 년마다 개최되는가?",
        answers: ["2년", "4년", "6년", "8년"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "대한민국 국회의원의 임기는 몇 년인가?",
        answers: ["3년", "4년", "5년", "6년"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "대한민국 대통령의 임기는 몇 년인가?",
        answers: ["4년", "5년", "6년", "7년"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "G7(주요 7개국) 회원국이 아닌 나라는?",
        answers: ["캐나다", "이탈리아", "한국", "프랑스"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "세계에서 가장 많이 사용되는 언어(모국어 기준)는?",
        answers: ["영어", "중국어(만다린)", "스페인어", "힌디어"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "그리니치 표준시(GMT) 기준으로 한국은 몇 시간 빠른가?",
        answers: ["6시간", "7시간", "8시간", "9시간"],
        correct: 3,
        difficulty: "normal"
    },
    {
        question: "나토(NATO)의 정식 명칭은?",
        answers: ["북대서양조약기구", "유럽연합군", "국제평화유지군", "서방동맹기구"],
        correct: 0,
        difficulty: "normal"
    },

    // 과학 (보통) - 10문제
    {
        question: "인체에서 가장 큰 장기는?",
        answers: ["간", "폐", "피부", "대장"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "지구 대기의 약 78%를 차지하는 기체는?",
        answers: ["산소", "질소", "이산화탄소", "아르곤"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "상대성 이론을 발표한 과학자는?",
        answers: ["뉴턴", "갈릴레오", "아인슈타인", "호킹"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "혈액형 중 만능 공혈자(누구에게나 수혈 가능)는?",
        answers: ["A형", "B형", "O형", "AB형"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "주기율표에서 가장 가벼운 원소는?",
        answers: ["헬륨", "수소", "리튬", "탄소"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "반도체의 주원료가 되는 원소는?",
        answers: ["구리", "실리콘", "알루미늄", "철"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "달에서의 중력은 지구의 약 몇 분의 1인가?",
        answers: ["1/3", "1/6", "1/9", "1/12"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "빛의 속도는 초당 약 몇 km인가?",
        answers: ["약 10만 km", "약 20만 km", "약 30만 km", "약 40만 km"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "DNA의 이중나선 구조를 발견한 과학자는?",
        answers: ["아인슈타인", "왓슨과 크릭", "다윈", "뉴턴"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "인체에서 가장 단단한 조직은?",
        answers: ["뼈", "손톱", "치아 에나멜", "연골"],
        correct: 2,
        difficulty: "normal"
    },

    // 역사 (보통) - 8문제
    {
        question: "제2차 세계대전이 끝난 년도는?",
        answers: ["1943년", "1944년", "1945년", "1946년"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "프랑스 혁명이 일어난 년도는?",
        answers: ["1689년", "1789년", "1889년", "1799년"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "임진왜란 때 거북선을 만든 장군은?",
        answers: ["강감찬", "을지문덕", "이순신", "김유신"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "대한민국 임시정부가 수립된 도시는?",
        answers: ["서울", "상하이", "중경", "블라디보스토크"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "베를린 장벽이 무너진 년도는?",
        answers: ["1987년", "1989년", "1991년", "1993년"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "6.25 전쟁의 휴전협정이 체결된 년도는?",
        answers: ["1951년", "1952년", "1953년", "1954년"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "고조선을 건국한 인물은?",
        answers: ["주몽", "단군왕검", "온조", "혁거세"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "조선의 마지막 왕은?",
        answers: ["고종", "순종", "철종", "헌종"],
        correct: 1,
        difficulty: "normal"
    },

    // 경제 (보통) - 6문제
    {
        question: "GDP는 무엇의 약자인가?",
        answers: ["Gross Domestic Product", "General Development Plan", "Global Domestic Policy", "Government Department Program"],
        correct: 0,
        difficulty: "normal"
    },
    {
        question: "인플레이션의 반대 현상은?",
        answers: ["스태그플레이션", "디플레이션", "하이퍼인플레이션", "리플레이션"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "대한민국의 중앙은행은?",
        answers: ["국민은행", "우리은행", "한국은행", "기업은행"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "주식의 '시가총액'이란?",
        answers: ["하루 거래금액", "주가 × 발행주식수", "회사 자산 총액", "연간 매출액"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "환율이 오르면 수출기업에게는?",
        answers: ["유리하다", "불리하다", "영향 없다", "상황에 따라 다르다"],
        correct: 0,
        difficulty: "normal"
    },
    {
        question: "복리 이자의 특징은?",
        answers: ["원금에만 이자가 붙는다", "이자에도 이자가 붙는다", "이자가 일정하다", "이자가 감소한다"],
        correct: 1,
        difficulty: "normal"
    },

    // IT/기술 (보통) - 6문제
    {
        question: "WWW은 무엇의 약자인가?",
        answers: ["World Wide Web", "World Wireless Web", "Western World Web", "Worldwide Wired Web"],
        correct: 0,
        difficulty: "normal"
    },
    {
        question: "1바이트(Byte)는 몇 비트(Bit)인가?",
        answers: ["4비트", "8비트", "16비트", "32비트"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "CPU의 역할은?",
        answers: ["데이터 저장", "연산 및 제어", "그래픽 처리", "네트워크 연결"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "HTTPS에서 S는 무엇을 의미하는가?",
        answers: ["Speed", "Secure", "Simple", "Standard"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "오픈소스 운영체제가 아닌 것은?",
        answers: ["Linux", "Ubuntu", "Android", "Windows"],
        correct: 3,
        difficulty: "normal"
    },
    {
        question: "프로그래밍 언어가 아닌 것은?",
        answers: ["Python", "Java", "HTML", "C++"],
        correct: 2,
        difficulty: "normal"
    },

    // 지리/문화 (보통) - 5문제
    {
        question: "세계에서 면적이 가장 큰 나라는?",
        answers: ["미국", "캐나다", "중국", "러시아"],
        correct: 3,
        difficulty: "normal"
    },
    {
        question: "사하라 사막이 위치한 대륙은?",
        answers: ["아시아", "아프리카", "남아메리카", "오세아니아"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "유럽연합(EU) 본부가 위치한 도시는?",
        answers: ["파리", "베를린", "브뤼셀", "암스테르담"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "한반도의 동쪽에 있는 바다는?",
        answers: ["황해", "동해", "남해", "북해"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "아마존 강이 흐르는 주요 국가는?",
        answers: ["아르헨티나", "브라질", "칠레", "멕시코"],
        correct: 1,
        difficulty: "normal"
    },

    // 생활/건강 (보통) - 5문제
    {
        question: "성인의 정상 혈압 범위(수축기)는?",
        answers: ["90 미만", "120 미만", "140 미만", "160 미만"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "음주 후 알코올이 분해되는 주요 장기는?",
        answers: ["위장", "간", "신장", "폐"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "대한민국 법정 성인 나이는 만 몇 세인가?",
        answers: ["18세", "19세", "20세", "21세"],
        correct: 1,
        difficulty: "normal"
    },
    {
        question: "비타민 D가 부족하면 생기기 쉬운 질환은?",
        answers: ["야맹증", "괴혈병", "골다공증", "각기병"],
        correct: 2,
        difficulty: "normal"
    },
    {
        question: "화상을 입었을 때 첫 응급처치로 올바른 것은?",
        answers: ["된장 바르기", "흐르는 찬물에 식히기", "얼음 직접 대기", "버터 바르기"],
        correct: 1,
        difficulty: "normal"
    },

    // ========================================
    // [어려움] 40문제 - 도전 문제
    // ========================================

    // 일반상식 (어려움) - 8문제
    {
        question: "노벨상에 포함되지 않는 분야는?",
        answers: ["경제학", "수학", "문학", "평화"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "UN 안전보장이사회 상임이사국이 아닌 나라는?",
        answers: ["미국", "영국", "독일", "중국"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "세계 3대 영화제가 아닌 것은?",
        answers: ["칸 영화제", "베를린 영화제", "베니스 영화제", "토론토 영화제"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "국제단위계(SI)에서 전류의 기본 단위는?",
        answers: ["볼트", "옴", "암페어", "와트"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "OECD 회원국 수는 약 몇 개국인가?",
        answers: ["20개국", "30개국", "38개국", "50개국"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "세계무역기구(WTO)의 본부가 위치한 도시는?",
        answers: ["뉴욕", "파리", "제네바", "브뤼셀"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "IMF(국제통화기금)의 특별인출권(SDR)에 포함되지 않는 통화는?",
        answers: ["미국 달러", "유로", "일본 엔", "스위스 프랑"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "유네스코(UNESCO) 세계문화유산이 가장 많은 나라는?",
        answers: ["중국", "이탈리아", "스페인", "프랑스"],
        correct: 1,
        difficulty: "hard"
    },

    // 과학 (어려움) - 10문제
    {
        question: "우라늄의 원자번호는?",
        answers: ["82", "86", "92", "94"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "태양계에서 자전 방향이 다른 행성은?",
        answers: ["수성", "금성", "화성", "목성"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "물 분자(H₂O)에서 수소와 산소의 결합각은 약 몇 도인가?",
        answers: ["약 90도", "약 104.5도", "약 120도", "약 180도"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "인간 게놈에는 약 몇 개의 유전자가 있는가?",
        answers: ["약 2천 개", "약 2만 개", "약 20만 개", "약 200만 개"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "블랙홀의 경계면을 무엇이라 하는가?",
        answers: ["특이점", "사건의 지평선", "슈바르츠실트 반경", "광자권"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "플랑크 상수의 단위는?",
        answers: ["J·s", "N·m", "kg·m/s", "W/m²"],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "엔트로피 법칙과 관련된 열역학 법칙은?",
        answers: ["열역학 제0법칙", "열역학 제1법칙", "열역학 제2법칙", "열역학 제3법칙"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "CRISPR-Cas9 기술의 주요 용도는?",
        answers: ["단백질 합성", "유전자 편집", "세포 분열 촉진", "바이러스 치료"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "힉스 입자가 발견된 입자가속기의 이름은?",
        answers: ["SLAC", "Tevatron", "LHC", "RHIC"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "미토콘드리아 DNA는 누구에게서 유전되는가?",
        answers: ["아버지", "어머니", "양쪽 모두", "무작위"],
        correct: 1,
        difficulty: "hard"
    },

    // 역사 (어려움) - 7문제
    {
        question: "로마제국이 동서로 분열된 년도는?",
        answers: ["295년", "395년", "495년", "595년"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "세계 최초로 문자를 사용한 문명은?",
        answers: ["이집트 문명", "메소포타미아 문명", "인더스 문명", "황하 문명"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "러시아 혁명이 일어난 년도는?",
        answers: ["1905년", "1917년", "1923년", "1929년"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "신라가 삼국을 통일한 세기는?",
        answers: ["5세기", "6세기", "7세기", "8세기"],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "마그나 카르타(대헌장)가 제정된 년도는?",
        answers: ["1115년", "1215년", "1315년", "1415년"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "고려의 수도였던 개경의 현재 위치는?",
        answers: ["서울", "개성", "평양", "경주"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "한글이 반포된 년도는?",
        answers: ["1443년", "1446년", "1449년", "1452년"],
        correct: 1,
        difficulty: "hard"
    },

    // 경제 (어려움) - 5문제
    {
        question: "주식시장에서 '곰(Bear)'은 무엇을 의미하는가?",
        answers: ["상승장", "하락장", "횡보장", "폭등장"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "금리를 결정하는 한국은행의 회의 명칭은?",
        answers: ["이사회", "금융통화위원회", "경제정책회의", "통화조정위원회"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "코스피(KOSPI) 지수가 처음 시작한 기준점은?",
        answers: ["10", "100", "1000", "10000"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "양적완화(QE)의 주요 목적은?",
        answers: ["인플레이션 억제", "시중 유동성 확대", "환율 방어", "재정적자 해소"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "PER(주가수익비율)이 높다는 것은?",
        answers: ["주가가 저평가", "주가가 고평가", "수익이 높음", "배당이 높음"],
        correct: 1,
        difficulty: "hard"
    },

    // IT/기술 (어려움) - 5문제
    {
        question: "클라우드 컴퓨팅의 3대 서비스 모델이 아닌 것은?",
        answers: ["IaaS", "PaaS", "SaaS", "DaaS"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "AI(인공지능)의 하위 분야가 아닌 것은?",
        answers: ["머신러닝", "딥러닝", "자연어처리", "블록체인"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "IP 주소 중 IPv4는 몇 비트로 구성되는가?",
        answers: ["16비트", "32비트", "64비트", "128비트"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "비트코인의 합의 알고리즘은?",
        answers: ["PoS", "PoW", "DPoS", "PoA"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "TCP/IP 모델에서 전송 계층의 프로토콜이 아닌 것은?",
        answers: ["TCP", "UDP", "HTTP", "SCTP"],
        correct: 2,
        difficulty: "hard"
    },

    // 문학/예술 (어려움) - 5문제
    {
        question: "'죄와 벌'의 저자는?",
        answers: ["톨스토이", "도스토예프스키", "푸시킨", "체호프"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "'별이 빛나는 밤에'를 그린 화가는?",
        answers: ["피카소", "고흐", "모네", "렘브란트"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "베토벤의 교향곡 9번의 별명은?",
        answers: ["영웅", "전원", "운명", "합창"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "'1984'를 쓴 작가는?",
        answers: ["올더스 헉슬리", "조지 오웰", "레이 브래드버리", "아이작 아시모프"],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "인상주의 화가가 아닌 사람은?",
        answers: ["모네", "르누아르", "피카소", "드가"],
        correct: 2,
        difficulty: "hard"
    }
];
