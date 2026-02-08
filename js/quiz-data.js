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
        difficulty: "easy",
        category: "일반상식",
        explanation: "1년은 정확히 12개월로 이루어져 있습니다. 이는 지구가 태양을 한 바퀴 도는 데 걸리는 시간입니다."
    },
    {
        question: "세계에서 가장 높은 산은?",
        answers: ["K2", "에베레스트", "킬리만자로", "몽블랑"],
        correct: 1,
        difficulty: "easy",
        category: "지리",
        explanation: "에베레스트는 세계 최고봉으로 높이가 8,849m입니다. 네팔과 티베트의 경계에 위치해 있습니다."
    },
    {
        question: "일본의 수도는?",
        answers: ["오사카", "도쿄", "교토", "나고야"],
        correct: 1,
        difficulty: "easy",
        category: "지리",
        explanation: "도쿄는 일본의 수도이자 가장 큰 도시입니다. 1868년 메이지 유신 이후 일본의 정치, 경제, 문화의 중심지입니다."
    },
    {
        question: "빨강, 노랑, 파랑을 무엇이라 하는가?",
        answers: ["보조색", "삼원색", "혼합색", "무채색"],
        correct: 1,
        difficulty: "easy",
        category: "과학",
        explanation: "삼원색은 빛의 3가지 기본 색으로, 이 세 색을 혼합하면 모든 색을 만들 수 있습니다."
    },
    {
        question: "지구는 태양 주위를 약 며칠에 한 바퀴 도는가?",
        answers: ["30일", "100일", "365일", "500일"],
        correct: 2,
        difficulty: "easy",
        category: "과학",
        explanation: "지구는 태양을 중심으로 약 365.25일에 한 바퀴 공전합니다. 이를 1년이라고 정의합니다."
    },
    {
        question: "대한민국 국기의 이름은?",
        answers: ["태극기", "성조기", "일장기", "유니언잭"],
        correct: 0,
        difficulty: "easy",
        category: "일반상식",
        explanation: "태극기는 대한민국의 국기입니다. 흰색은 평화를, 빨강과 파랑의 태극은 음양의 조화를 나타냅니다."
    },

    // ========================================
    // [보통] 50문제 - 중심 문제
    // ========================================
    
    // 일반상식 (보통) - 10문제
    {
        question: "대한민국 헌법 제1조 1항의 내용은?",
        answers: ["대한민국은 민주공화국이다", "모든 권력은 국민으로부터 나온다", "대한민국의 수도는 서울이다", "대한민국의 영토는 한반도와 그 부속도서로 한다"],
        correct: 0,
        difficulty: "normal",
        category: "법률/정치",
        explanation: "대한민국 헌법 제1조는 대한민국의 기본 성격을 규정합니다. 민주공화국으로서 국민주권 원칙을 강조합니다."
    },
    {
        question: "올림픽 오륜기의 5가지 색이 아닌 것은?",
        answers: ["빨강", "보라", "파랑", "노랑"],
        correct: 1,
        difficulty: "normal",
        category: "일반상식",
        explanation: "올림픽 오륜기는 5개의 링으로 이루어져 있으며, 색은 파랑, 검정, 빨강, 노랑, 초록입니다. 보라는 포함되지 않습니다."
    },
    {
        question: "국제연합(UN) 본부가 위치한 도시는?",
        answers: ["제네바", "뉴욕", "파리", "런던"],
        correct: 1,
        difficulty: "normal",
        category: "지리/국제관계",
        explanation: "UN 본부는 뉴욕 맨해튼에 위치합니다. 제네바에는 UN 유럽본부가 있습니다."
    },
    {
        question: "FIFA 월드컵은 몇 년마다 개최되는가?",
        answers: ["2년", "4년", "6년", "8년"],
        correct: 1,
        difficulty: "normal",
        category: "스포츠",
        explanation: "FIFA 월드컵은 4년마다 개최됩니다. 가장 최근은 2022년 카타르에서 열렸습니다."
    },
    {
        question: "대한민국 국회의원의 임기는 몇 년인가?",
        answers: ["3년", "4년", "5년", "6년"],
        correct: 1,
        difficulty: "normal",
        category: "법률/정치",
        explanation: "국회의원의 임기는 4년이며, 중임이 가능합니다. 국회는 국민을 대표하는 입법부입니다."
    },
    {
        question: "대한민국 대통령의 임기는 몇 년인가?",
        answers: ["4년", "5년", "6년", "7년"],
        correct: 1,
        difficulty: "normal",
        category: "법률/정치",
        explanation: "대한민국 대통령의 임기는 5년이며, 중임이 불가능합니다. 이는 1987년 현행헌법 제정 이후의 규정입니다."
    },
    {
        question: "G7(주요 7개국) 회원국이 아닌 나라는?",
        answers: ["캐나다", "이탈리아", "한국", "프랑스"],
        correct: 2,
        difficulty: "normal",
        category: "국제관계",
        explanation: "G7 회원국은 미국, 일본, 독일, 영국, 프랑스, 이탈리아, 캐나다입니다. 한국은 G20의 일원입니다."
    },
    {
        question: "세계에서 가장 많이 사용되는 언어(모국어 기준)는?",
        answers: ["영어", "중국어(만다린)", "스페인어", "힌디어"],
        correct: 1,
        difficulty: "normal",
        category: "언어/문화",
        explanation: "중국어(만다린)는 약 9억 명 이상이 모국어로 사용하는 세계 최대 모국어 사용자 언어입니다."
    },
    {
        question: "그리니치 표준시(GMT) 기준으로 한국은 몇 시간 빠른가?",
        answers: ["6시간", "7시간", "8시간", "9시간"],
        correct: 3,
        difficulty: "normal",
        category: "지리",
        explanation: "한국의 표준 시간은 UTC+9입니다. 영국의 GMT(UTC+0)에 비해 9시간 빠릅니다."
    },
    {
        question: "나토(NATO)의 정식 명칭은?",
        answers: ["북대서양조약기구", "유럽연합군", "국제평화유지군", "서방동맹기구"],
        correct: 0,
        difficulty: "normal",
        category: "국제관계",
        explanation: "NATO는 1949년 설립된 군사 동맹입니다. 북대서양조약기구는 30개 이상의 회원국을 포함합니다."
    },

    // 과학 (보통) - 10문제
    {
        question: "인체에서 가장 큰 내부 장기는?",
        answers: ["간", "폐", "신장", "대장"],
        correct: 0,
        difficulty: "normal",
        category: "과학",
        explanation: "간은 인체에서 가장 큰 내부 장기로, 무게는 약 1.5kg입니다. 소화, 해독, 신진대사 등 중요한 역할을 합니다."
    },
    {
        question: "지구 대기의 약 78%를 차지하는 기체는?",
        answers: ["산소", "질소", "이산화탄소", "아르곤"],
        correct: 1,
        difficulty: "normal",
        category: "과학",
        explanation: "질소는 지구 대기의 약 78%를 차지합니다. 산소는 약 21%, 나머지 1%가 아르곤 등 다른 기체입니다."
    },
    {
        question: "상대성 이론을 발표한 과학자는?",
        answers: ["뉴턴", "갈릴레오", "아인슈타인", "호킹"],
        correct: 2,
        difficulty: "normal",
        category: "과학",
        explanation: "아인슈타인은 1905년 특수상대성이론, 1915년 일반상대성이론을 발표했습니다. 이는 현대 물리학의 기초입니다."
    },
    {
        question: "혈액형 중 만능 공혈자(누구에게나 수혈 가능)는?",
        answers: ["A형", "B형", "O형", "AB형"],
        correct: 2,
        difficulty: "normal",
        category: "과학",
        explanation: "O형 RhD 음성 혈액은 누구에게나 수혈할 수 있는 만능 공혈자입니다. AB형 RhD 양성은 만능 수혈자입니다."
    },
    {
        question: "주기율표에서 가장 가벼운 원소는?",
        answers: ["헬륨", "수소", "리튬", "탄소"],
        correct: 1,
        difficulty: "normal",
        category: "과학",
        explanation: "수소는 원자번호 1번으로 가장 가벼운 원소입니다. 우주에서 가장 풍부한 원소이기도 합니다."
    },
    {
        question: "반도체의 주원료가 되는 원소는?",
        answers: ["구리", "실리콘", "알루미늄", "철"],
        correct: 1,
        difficulty: "normal",
        category: "과학/IT",
        explanation: "실리콘은 반도체의 주원료입니다. 모래의 주성분이며, 전자제품의 핵심 재료로 사용됩니다."
    },
    {
        question: "달에서의 중력은 지구의 약 몇 분의 1인가?",
        answers: ["1/3", "1/6", "1/9", "1/12"],
        correct: 1,
        difficulty: "normal",
        category: "과학",
        explanation: "달의 중력은 지구의 약 1/6입니다. 그래서 달에서 체중은 지구의 1/6 정도가 됩니다."
    },
    {
        question: "빛의 속도는 초당 약 몇 km인가?",
        answers: ["약 10만 km", "약 20만 km", "약 30만 km", "약 40만 km"],
        correct: 2,
        difficulty: "normal",
        category: "과학",
        explanation: "빛의 속도는 초당 약 30만 km(정확히 299,792,458 m/s)입니다. 이는 우주에서 최대 속도입니다."
    },
    {
        question: "DNA의 이중나선 구조를 발견한 과학자는?",
        answers: ["아인슈타인", "왓슨과 크릭", "다윈", "뉴턴"],
        correct: 1,
        difficulty: "normal",
        category: "과학",
        explanation: "1953년 왓슨, 크릭, 윌킨스가 DNA의 이중나선 구조를 발견했습니다. 이는 유전자 연구의 기초가 되었습니다."
    },
    {
        question: "인체에서 가장 단단한 조직은?",
        answers: ["뼈", "손톱", "치아 에나멜", "연골"],
        correct: 2,
        difficulty: "normal",
        category: "과학",
        explanation: "치아의 에나멜은 인체에서 가장 단단한 조직입니다. 광물질과 단백질로 이루어져 있습니다."
    },

    // 역사 (보통) - 8문제
    {
        question: "제2차 세계대전이 끝난 년도는?",
        answers: ["1943년", "1944년", "1945년", "1946년"],
        correct: 2,
        difficulty: "normal",
        category: "역사",
        explanation: "제2차 세계대전은 1939년 시작하여 1945년 종료되었습니다. 일본의 항복으로 전쟁이 끝났습니다."
    },
    {
        question: "프랑스 혁명이 일어난 년도는?",
        answers: ["1689년", "1789년", "1889년", "1799년"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "프랑스 혁명은 1789년에 시작되어 봉건제를 폐지하고 민주주의의 기초를 마련했습니다."
    },
    {
        question: "임진왜란 때 거북선을 만든 장군은?",
        answers: ["강감찬", "을지문덕", "이순신", "김유신"],
        correct: 2,
        difficulty: "normal",
        category: "역사",
        explanation: "이순신 장군은 임진왜란(1592~1598) 당시 거북선을 활용하여 해전에서 큰 승리를 거두었습니다."
    },
    {
        question: "대한민국 임시정부가 수립된 도시는?",
        answers: ["서울", "상하이", "중경", "블라디보스토크"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "대한민국 임시정부는 1919년 3·1운동 이후 상하이에 수립되었습니다. 중국의 지원을 받았습니다."
    },
    {
        question: "베를린 장벽이 무너진 년도는?",
        answers: ["1987년", "1989년", "1991년", "1993년"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "베를린 장벽은 1989년 11월에 무너졌습니다. 이는 냉전 종료의 상징이 되었습니다."
    },
    {
        question: "6.25 전쟁의 휴전협정이 체결된 년도는?",
        answers: ["1951년", "1952년", "1953년", "1954년"],
        correct: 2,
        difficulty: "normal",
        category: "역사",
        explanation: "6.25 전쟁의 휴전협정은 1953년 7월 27일에 체결되었습니다. 현재까지 휴전 상태가 지속되고 있습니다."
    },
    {
        question: "고조선을 건국한 인물은?",
        answers: ["주몽", "단군왕검", "온조", "혁거세"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "단군왕검은 기원전 2333년 고조선을 건국했습니다. 한반도 최초의 국가로 알려져 있습니다."
    },
    {
        question: "조선의 마지막 왕은?",
        answers: ["고종", "순종", "철종", "헌종"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "순종은 조선의 마지막 왕입니다. 1910년 한일병합으로 조선은 일본에 병합되었습니다."
    },

    // 경제 (보통) - 6문제
    {
        question: "GDP는 무엇의 약자인가?",
        answers: ["Gross Domestic Product", "General Development Plan", "Global Domestic Policy", "Government Department Program"],
        correct: 0,
        difficulty: "normal",
        category: "경제",
        explanation: "GDP(국내총생산)는 일정 기간 동안 한 국가에서 생산된 모든 최종 상품과 서비스의 가치입니다. 국가 경제 규모를 나타냅니다."
    },
    {
        question: "인플레이션의 반대 현상은?",
        answers: ["스태그플레이션", "디플레이션", "하이퍼인플레이션", "리플레이션"],
        correct: 1,
        difficulty: "normal",
        category: "경제",
        explanation: "디플레이션은 물가가 지속적으로 하락하는 현상입니다. 경제 침체와 함께 발생하며 심각한 경제 문제가 될 수 있습니다."
    },
    {
        question: "대한민국의 중앙은행은?",
        answers: ["국민은행", "우리은행", "한국은행", "기업은행"],
        correct: 2,
        difficulty: "normal",
        category: "경제",
        explanation: "한국은행은 대한민국의 중앙은행으로 금리 결정, 통화 정책, 금융 안정을 담당합니다."
    },
    {
        question: "주식의 '시가총액'이란?",
        answers: ["하루 거래금액", "주가 × 발행주식수", "회사 자산 총액", "연간 매출액"],
        correct: 1,
        difficulty: "normal",
        category: "경제",
        explanation: "시가총액은 주가에 발행주식수를 곱한 값으로, 회사의 시장 가치를 나타냅니다."
    },
    {
        question: "환율이 오르면 수출기업에게는?",
        answers: ["유리하다", "불리하다", "영향 없다", "상황에 따라 다르다"],
        correct: 0,
        difficulty: "normal",
        category: "경제",
        explanation: "환율이 올라가면 자국 화폐 가치가 상대적으로 떨어져 수출품이 더 저렴해져 수출기업에 유리합니다."
    },
    {
        question: "복리 이자의 특징은?",
        answers: ["원금에만 이자가 붙는다", "이자에도 이자가 붙는다", "이자가 일정하다", "이자가 감소한다"],
        correct: 1,
        difficulty: "normal",
        category: "경제",
        explanation: "복리 이자는 원금뿐 아니라 이전 기간의 이자까지 다음 기간 이자 계산 대상이 됩니다. 장기 투자에서 큰 차이를 만듭니다."
    },

    // IT/기술 (보통) - 6문제
    {
        question: "WWW은 무엇의 약자인가?",
        answers: ["World Wide Web", "World Wireless Web", "Western World Web", "Worldwide Wired Web"],
        correct: 0,
        difficulty: "normal",
        category: "IT/기술",
        explanation: "WWW(월드와이드웹)은 1989년 팀 버너스리가 발명했습니다. HTTP 프로토콜을 기반으로 하이퍼텍스트 문서를 전송합니다."
    },
    {
        question: "1바이트(Byte)는 몇 비트(Bit)인가?",
        answers: ["4비트", "8비트", "16비트", "32비트"],
        correct: 1,
        difficulty: "normal",
        category: "IT/기술",
        explanation: "1바이트는 8비트로 이루어져 있습니다. 컴퓨터의 가장 기본적인 저장 단위입니다."
    },
    {
        question: "CPU의 역할은?",
        answers: ["데이터 저장", "연산 및 제어", "그래픽 처리", "네트워크 연결"],
        correct: 1,
        difficulty: "normal",
        category: "IT/기술",
        explanation: "CPU(중앙처리장치)는 컴퓨터의 뇌 역할을 하며 모든 연산과 제어를 담당합니다."
    },
    {
        question: "HTTPS에서 S는 무엇을 의미하는가?",
        answers: ["Speed", "Secure", "Simple", "Standard"],
        correct: 1,
        difficulty: "normal",
        category: "IT/기술",
        explanation: "HTTPS는 보안(Secure)이 강화된 HTTP입니다. SSL/TLS 암호화를 사용하여 안전한 통신을 제공합니다."
    },
    {
        question: "오픈소스 운영체제가 아닌 것은?",
        answers: ["Linux", "Ubuntu", "Android", "Windows"],
        correct: 3,
        difficulty: "normal",
        category: "IT/기술",
        explanation: "Windows는 Microsoft의 상용 운영체제입니다. Linux, Ubuntu, Android는 모두 오픈소스입니다."
    },
    {
        question: "프로그래밍 언어가 아닌 것은?",
        answers: ["Python", "Java", "HTML", "C++"],
        correct: 2,
        difficulty: "normal",
        category: "IT/기술",
        explanation: "HTML은 마크업 언어입니다. Python, Java, C++는 프로그래밍 언어이지만 HTML은 태그로 문서 구조를 정의합니다."
    },

    // 지리/문화 (보통) - 5문제
    {
        question: "세계에서 면적이 가장 큰 나라는?",
        answers: ["미국", "캐나다", "중국", "러시아"],
        correct: 3,
        difficulty: "normal",
        category: "지리",
        explanation: "러시아는 약 1,711만 km²로 세계 최대 면적의 국가입니다. 11개 시간대에 걸쳐 있습니다."
    },
    {
        question: "사하라 사막이 위치한 대륙은?",
        answers: ["아시아", "아프리카", "남아메리카", "오세아니아"],
        correct: 1,
        difficulty: "normal",
        category: "지리",
        explanation: "사하라 사막은 아프리카 북부에 위치한 세계 최대 규모의 사막입니다. 약 900만 km²에 이릅니다."
    },
    {
        question: "유럽연합(EU) 본부가 위치한 도시는?",
        answers: ["파리", "베를린", "브뤼셀", "암스테르담"],
        correct: 2,
        difficulty: "normal",
        category: "지리/국제관계",
        explanation: "EU 본부는 벨기에의 브뤼셀에 위치합니다. 27개 회원국의 정책 결정 중심입니다."
    },
    {
        question: "한반도의 동쪽에 있는 바다는?",
        answers: ["황해", "동해", "남해", "북해"],
        correct: 1,
        difficulty: "normal",
        category: "지리",
        explanation: "동해는 한반도의 동쪽에 있는 바다입니다. 일본은 이를 '일본해'라고 부릅니다."
    },
    {
        question: "아마존 강이 흐르는 주요 국가는?",
        answers: ["아르헨티나", "브라질", "칠레", "멕시코"],
        correct: 1,
        difficulty: "normal",
        category: "지리",
        explanation: "아마존 강은 브라질을 포함한 9개국을 흐르는 세계 최대 규모의 강입니다. 지구의 산소 약 20%를 생산합니다."
    },

    // 생활/건강 (보통) - 5문제
    {
        question: "성인의 정상 혈압 범위(수축기)는?",
        answers: ["90 미만", "120 미만", "140 미만", "160 미만"],
        correct: 1,
        difficulty: "normal",
        category: "생활/건강",
        explanation: "정상 혈압은 수축기 120 미만, 이완기 80 미만입니다. 140/90 이상이면 고혈압으로 진단됩니다."
    },
    {
        question: "음주 후 알코올이 분해되는 주요 장기는?",
        answers: ["위장", "간", "신장", "폐"],
        correct: 1,
        difficulty: "normal",
        category: "생활/건강",
        explanation: "간은 음주 후 알코올을 분해하는 주요 장기입니다. 과도한 음주는 간 손상을 초래합니다."
    },
    {
        question: "대한민국 민법상 성년 나이는 만 몇 세인가?",
        answers: ["17세", "18세", "19세", "20세"],
        correct: 2,
        difficulty: "normal",
        category: "생활/건강",
        explanation: "대한민국 민법상 성년은 만 19세입니다. 2013년 민법 개정으로 기존 만 20세에서 만 19세로 하향되었습니다."
    },
    {
        question: "비타민 D가 부족하면 생기기 쉬운 질환은?",
        answers: ["야맹증", "괴혈병", "골다공증", "각기병"],
        correct: 2,
        difficulty: "normal",
        category: "생활/건강",
        explanation: "비타민 D 부족은 골다공증을 초래합니다. 햇빛 노출과 우유 섭취로 보충할 수 있습니다."
    },
    {
        question: "화상을 입었을 때 첫 응급처치로 올바른 것은?",
        answers: ["된장 바르기", "흐르는 찬물에 식히기", "얼음 직접 대기", "버터 바르기"],
        correct: 1,
        difficulty: "normal",
        category: "생활/건강",
        explanation: "화상 후 즉시 흐르는 찬물에 식혀야 합니다. 최소 10~20분간 식혀야 깊은 화상을 방지할 수 있습니다."
    },

    // ========================================
    // [어려움] 40문제 - 도전 문제
    // ========================================

    // 일반상식 (어려움) - 8문제
    {
        question: "노벨상에 포함되지 않는 분야는?",
        answers: ["경제학", "수학", "문학", "평화"],
        correct: 1,
        difficulty: "hard",
        category: "일반상식",
        explanation: "노벨상은 생리의학, 물리학, 화학, 문학, 평화 5개 분야와 경제학상(1969년 추가)을 포함합니다. 수학상은 없습니다."
    },
    {
        question: "UN 안전보장이사회 상임이사국이 아닌 나라는?",
        answers: ["미국", "영국", "독일", "중국"],
        correct: 2,
        difficulty: "hard",
        category: "국제관계",
        explanation: "UN 안전보장이사회 상임이사국은 미국, 영국, 프랑스, 중국, 러시아입니다. 독일은 비상임이사국입니다."
    },
    {
        question: "세계 3대 영화제가 아닌 것은?",
        answers: ["칸 영화제", "베를린 영화제", "베니스 영화제", "토론토 영화제"],
        correct: 3,
        difficulty: "hard",
        category: "문화/예술",
        explanation: "세계 3대 영화제는 칸, 베를린, 베니스입니다. 토론토는 국제 영화제 중 하나이지만 3대에 포함되지 않습니다."
    },
    {
        question: "국제단위계(SI)에서 전류의 기본 단위는?",
        answers: ["볼트", "옴", "암페어", "와트"],
        correct: 2,
        difficulty: "hard",
        category: "과학",
        explanation: "암페어(A)는 전류의 SI 기본 단위입니다. 1A는 1초에 1쿨롱의 전하가 흐르는 것입니다."
    },
    {
        question: "OECD 회원국 수는 약 몇 개국인가?",
        answers: ["20개국", "30개국", "38개국", "50개국"],
        correct: 2,
        difficulty: "hard",
        category: "국제관계",
        explanation: "OECD(경제협력개발기구)는 2024년 기준 38개 회원국을 보유합니다. 고소득 선진국들이 중심입니다."
    },
    {
        question: "세계무역기구(WTO)의 본부가 위치한 도시는?",
        answers: ["뉴욕", "파리", "제네바", "브뤼셀"],
        correct: 2,
        difficulty: "hard",
        category: "국제관계",
        explanation: "WTO 본부는 스위스의 제네바에 위치합니다. UN의 여러 기구도 제네바에 본부를 두고 있습니다."
    },
    {
        question: "IMF(국제통화기금)의 특별인출권(SDR)에 포함되지 않는 통화는?",
        answers: ["미국 달러", "유로", "일본 엔", "스위스 프랑"],
        correct: 3,
        difficulty: "hard",
        category: "경제",
        explanation: "IMF의 SDR(특별인출권)은 미국 달러, 유로, 일본 엔, 중국 위안, 영국 파운드로 구성됩니다. 스위스 프랑은 포함되지 않습니다."
    },
    {
        question: "유네스코(UNESCO) 세계문화유산이 가장 많은 나라는?",
        answers: ["중국", "이탈리아", "스페인", "프랑스"],
        correct: 1,
        difficulty: "hard",
        category: "문화/예술",
        explanation: "이탈리아는 유네스코 세계문화유산이 약 58개로 가장 많습니다. 로마, 피렌체, 베니스 등 역사 도시들이 다수 포함됩니다."
    },

    // 과학 (어려움) - 10문제
    {
        question: "우라늄의 원자번호는?",
        answers: ["82", "86", "92", "94"],
        correct: 2,
        difficulty: "hard",
        category: "과학",
        explanation: "우라늄(U)의 원자번호는 92입니다. 자연계에서 가장 무거운 원소이며, 핵연료와 핵무기의 주요 재료입니다."
    },
    {
        question: "태양계에서 자전 방향이 다른 행성은?",
        answers: ["수성", "금성", "화성", "목성"],
        correct: 1,
        difficulty: "hard",
        category: "과학",
        explanation: "금성과 천왕성은 다른 행성들과 반대 방향으로 자전합니다. 이를 역행(retrograde rotation)이라고 합니다."
    },
    {
        question: "물 분자(H₂O)에서 수소와 산소의 결합각은 약 몇 도인가?",
        answers: ["약 90도", "약 104.5도", "약 120도", "약 180도"],
        correct: 1,
        difficulty: "hard",
        category: "과학",
        explanation: "물 분자의 결합각은 약 104.5도입니다. 산소의 비결합 전자쌍으로 인한 분자 구조 때문입니다."
    },
    {
        question: "인간 게놈에는 약 몇 개의 유전자가 있는가?",
        answers: ["약 2천 개", "약 2만 개", "약 20만 개", "약 200만 개"],
        correct: 1,
        difficulty: "hard",
        category: "과학",
        explanation: "인간 게놈은 약 2만 개의 유전자를 포함합니다. 2003년 인간게놈프로젝트 완성으로 밝혀졌습니다."
    },
    {
        question: "블랙홀의 경계면을 무엇이라 하는가?",
        answers: ["특이점", "사건의 지평선", "슈바르츠실트 반경", "광자권"],
        correct: 1,
        difficulty: "hard",
        category: "과학",
        explanation: "사건의 지평선(event horizon)은 블랙홀에서 벗어날 수 없는 경계입니다. 이 선 안의 정보는 외부로 나올 수 없습니다."
    },
    {
        question: "플랑크 상수의 단위는?",
        answers: ["J·s", "N·m", "kg·m/s", "W/m²"],
        correct: 0,
        difficulty: "hard",
        category: "과학",
        explanation: "플랑크 상수(h)의 단위는 J·s(줄·초)입니다. 값은 약 6.63×10⁻³⁴ J·s입니다."
    },
    {
        question: "엔트로피 법칙과 관련된 열역학 법칙은?",
        answers: ["열역학 제0법칙", "열역학 제1법칙", "열역학 제2법칙", "열역학 제3법칙"],
        correct: 2,
        difficulty: "hard",
        category: "과학",
        explanation: "열역학 제2법칙은 고립된 계의 엔트로피는 항상 증가한다고 명시합니다. 우주의 무질서는 계속 증가합니다."
    },
    {
        question: "CRISPR-Cas9 기술의 주요 용도는?",
        answers: ["단백질 합성", "유전자 편집", "세포 분열 촉진", "바이러스 치료"],
        correct: 1,
        difficulty: "hard",
        category: "과학",
        explanation: "CRISPR-Cas9는 유전자를 정확하게 편집할 수 있는 기술입니다. 2020년 노벨화학상을 수상했습니다."
    },
    {
        question: "힉스 입자가 발견된 입자가속기의 이름은?",
        answers: ["SLAC", "Tevatron", "LHC", "RHIC"],
        correct: 2,
        difficulty: "hard",
        category: "과학",
        explanation: "힉스 입자는 2012년 CERN의 LHC(대형강입자충돌기)에서 발견되었습니다. 이는 표준모형의 마지막 입자였습니다."
    },
    {
        question: "미토콘드리아 DNA는 누구에게서 유전되는가?",
        answers: ["아버지", "어머니", "양쪽 모두", "무작위"],
        correct: 1,
        difficulty: "hard",
        category: "과학",
        explanation: "미토콘드리아 DNA는 모계 유전됩니다. 난자의 미토콘드리아는 유지되지만 정자의 미토콘드리아는 제거됩니다."
    },

    // 역사 (어려움) - 7문제
    {
        question: "로마제국이 동서로 분열된 년도는?",
        answers: ["295년", "395년", "495년", "595년"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "로마제국은 395년 동로마제국(비잔틴)과 서로마제국으로 분열되었습니다. 서로마는 476년 멸망했습니다."
    },
    {
        question: "세계 최초로 문자를 사용한 문명은?",
        answers: ["이집트 문명", "메소포타미아 문명", "인더스 문명", "황하 문명"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "메소포타미아 문명의 수메르인들이 기원전 3200년경 쐐기 모양의 문자인 설형문자를 사용한 최초의 기록입니다."
    },
    {
        question: "러시아 혁명이 일어난 년도는?",
        answers: ["1905년", "1917년", "1923년", "1929년"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "러시아 혁명은 1917년 두 번의 혁명(2월 혁명과 10월 혁명)으로 이루어졌습니다. 소비에트연방이 수립되었습니다."
    },
    {
        question: "신라가 삼국을 통일한 세기는?",
        answers: ["5세기", "6세기", "7세기", "8세기"],
        correct: 2,
        difficulty: "hard",
        category: "역사",
        explanation: "신라는 660년 백제를 멸망시키고 668년 고구려를 멸망시켜 676년 삼국통일을 완성했습니다."
    },
    {
        question: "마그나 카르타(대헌장)가 제정된 년도는?",
        answers: ["1115년", "1215년", "1315년", "1415년"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "마그나 카르타는 1215년 영국 King John이 귀족들에게 서명한 문서입니다. 민주주의의 기초가 되었습니다."
    },
    {
        question: "고려의 수도였던 개경의 현재 위치는?",
        answers: ["서울", "개성", "평양", "경주"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "고려의 수도 개경은 현재의 개성(북한)입니다. 고려는 918년부터 1392년까지 약 475년간 존속했습니다."
    },
    {
        question: "한글이 반포된 년도는?",
        answers: ["1443년", "1446년", "1449년", "1452년"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "훈민정음(한글)은 1443년 창제되었으나 1446년 세종대왕이 공식적으로 반포했습니다. '백성을 가르치는 바른 소리'라는 의미입니다."
    },

    // 경제 (어려움) - 5문제
    {
        question: "주식시장에서 '곰(Bear)'은 무엇을 의미하는가?",
        answers: ["상승장", "하락장", "횡보장", "폭등장"],
        correct: 1,
        difficulty: "hard",
        category: "경제",
        explanation: "베어마켓(하락장)은 주가가 하락하는 시장을 의미합니다. '불(Bull)'은 상승장, '곰(Bear)'은 하락장입니다."
    },
    {
        question: "금리를 결정하는 한국은행의 회의 명칭은?",
        answers: ["이사회", "금융통화위원회", "경제정책회의", "통화조정위원회"],
        correct: 1,
        difficulty: "hard",
        category: "경제",
        explanation: "금융통화위원회는 한국은행의 금리 결정 최고 의사결정기구입니다. 기준금리를 결정합니다."
    },
    {
        question: "코스피(KOSPI) 지수가 처음 시작한 기준점은?",
        answers: ["10", "100", "1000", "10000"],
        correct: 1,
        difficulty: "hard",
        category: "경제",
        explanation: "KOSPI는 1983년 1월 4일에 출범하였으며 기준값은 100입니다. 한국 주식시장의 종합지수입니다."
    },
    {
        question: "양적완화(QE)의 주요 목적은?",
        answers: ["인플레이션 억제", "시중 유동성 확대", "환율 방어", "재정적자 해소"],
        correct: 1,
        difficulty: "hard",
        category: "경제",
        explanation: "양적완화는 중앙은행이 자산을 매입하여 시중 유동성을 확대하는 통화정책입니다. 경제 침체 시 사용됩니다."
    },
    {
        question: "PER(주가수익비율)이 높다는 것은?",
        answers: ["주가가 저평가", "주가가 고평가", "수익이 높음", "배당이 높음"],
        correct: 1,
        difficulty: "hard",
        category: "경제",
        explanation: "PER이 높으면 주가가 고평가되었을 가능성이 높습니다. PER = 주가 ÷ 주당순이익(EPS)"
    },

    // IT/기술 (어려움) - 5문제
    {
        question: "클라우드 컴퓨팅의 3대 서비스 모델이 아닌 것은?",
        answers: ["IaaS", "PaaS", "SaaS", "DaaS"],
        correct: 3,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "클라우드 3대 서비스 모델은 IaaS(인프라), PaaS(플랫폼), SaaS(소프트웨어)입니다. DaaS는 표준 모델이 아닙니다."
    },
    {
        question: "AI(인공지능)의 하위 분야가 아닌 것은?",
        answers: ["머신러닝", "딥러닝", "자연어처리", "블록체인"],
        correct: 3,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "머신러닝, 딥러닝, 자연어처리는 AI의 하위 분야입니다. 블록체인은 분산 원장 기술로 AI와 별개입니다."
    },
    {
        question: "IP 주소 중 IPv4는 몇 비트로 구성되는가?",
        answers: ["16비트", "32비트", "64비트", "128비트"],
        correct: 1,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "IPv4는 32비트로 구성되어 약 43억 개의 주소를 가질 수 있습니다. IPv6는 128비트입니다."
    },
    {
        question: "비트코인의 합의 알고리즘은?",
        answers: ["PoS", "PoW", "DPoS", "PoA"],
        correct: 1,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "비트코인은 작업증명(PoW, Proof of Work) 합의 알고리즘을 사용합니다. 채굴자들이 복잡한 계산 문제를 풀어야 합니다."
    },
    {
        question: "TCP/IP 모델에서 전송 계층의 프로토콜이 아닌 것은?",
        answers: ["TCP", "UDP", "HTTP", "SCTP"],
        correct: 2,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "TCP, UDP, SCTP는 전송 계층(4계층) 프로토콜입니다. HTTP는 애플리케이션 계층(7계층) 프로토콜입니다."
    },

    // 문학/예술 (어려움) - 5문제
    {
        question: "'죄와 벌'의 저자는?",
        answers: ["톨스토이", "도스토예프스키", "푸시킨", "체호프"],
        correct: 1,
        difficulty: "hard",
        category: "문학/예술",
        explanation: "도스토예프스키의 '죄와 벌'은 1866년 출간된 러시아 문학의 대표작입니다. 범죄의 심리와 도덕을 다룹니다."
    },
    {
        question: "'별이 빛나는 밤에'를 그린 화가는?",
        answers: ["피카소", "고흐", "모네", "렘브란트"],
        correct: 1,
        difficulty: "hard",
        category: "문학/예술",
        explanation: "고흐의 '별이 빛나는 밤에'는 1889년 작품입니다. 아를 정신병원에서 그린 그의 대표작 중 하나입니다."
    },
    {
        question: "베토벤의 교향곡 9번의 별명은?",
        answers: ["영웅", "전원", "운명", "합창"],
        correct: 3,
        difficulty: "hard",
        category: "음악",
        explanation: "베토벤의 교향곡 9번 '합창'은 4악장에서 '환희의 송가'라는 성악 부분이 포함됩니다. 최고의 걸작입니다."
    },
    {
        question: "'1984'를 쓴 작가는?",
        answers: ["올더스 헉슬리", "조지 오웰", "레이 브래드버리", "아이작 아시모프"],
        correct: 1,
        difficulty: "hard",
        category: "문학/예술",
        explanation: "조지 오웰의 '1984'는 1949년 출간된 디스토피아 소설입니다. 전체주의 사회의 공포를 묘사합니다."
    },
    {
        question: "인상주의 화가가 아닌 사람은?",
        answers: ["모네", "르누아르", "피카소", "드가"],
        correct: 2,
        difficulty: "hard",
        category: "문학/예술",
        explanation: "피카소는 입체주의 화가입니다. 모네, 르누아르, 드가는 모두 인상주의 화가들입니다."
    },

    // ========================================
    // [글로벌 확장] 120개 새로운 문제
    // ========================================

    // === 동아시아 (20문제) ===
    {
        question: "일본의 전국시대를 최종 통일한 인물은?",
        answers: ["도요토미 히데요시", "오다 노부나가", "도쿠가와 이에야스", "우에스기 겐신"],
        correct: 0,
        difficulty: "hard",
        category: "역사",
        explanation: "도요토미 히데요시는 1590년 일본 전국시대를 최종 통일했습니다. 오다 노부나가가 통일의 기반을 다졌고, 도요토미가 이를 완성했습니다."
    },
    {
        question: "일본의 와비사비(Wabi-Sabi)는 무엇을 의미하는가?",
        answers: ["화려함", "불완전한 아름다움", "엄격함", "단순함"],
        correct: 1,
        difficulty: "normal",
        category: "문화/예술",
        explanation: "와비사비는 불완전하고 일시적인 것의 아름다움을 나타내는 일본 미학입니다. 수선화도와 다도 문화에 반영됩니다."
    },
    {
        question: "후지산의 높이는 약 몇 미터인가?",
        answers: ["2,776m", "3,120m", "3,776m", "4,120m"],
        correct: 2,
        difficulty: "normal",
        category: "지리",
        explanation: "후지산은 3,776m로 일본의 최고봉입니다. 일본의 상징이자 유네스코 세계유산입니다."
    },
    {
        question: "메이지 유신은 몇 년에 일어났는가?",
        answers: ["1868년", "1875년", "1882년", "1889년"],
        correct: 0,
        difficulty: "hard",
        category: "역사",
        explanation: "메이지 유신은 1868년 일본을 근대화한 개혁입니다. 도쿠가와 막부를 무너뜨리고 천황 중심 체제를 수립했습니다."
    },
    {
        question: "스시의 발상지는 어디인가?",
        answers: ["오사카", "교토", "동경", "나가레"],
        correct: 2,
        difficulty: "normal",
        category: "음식/문화",
        explanation: "현대적 스시는 에도(현재의 도쿄)에서 발전했습니다. 18세기 에도시대에 초밥이 대중화되었습니다."
    },
    {
        question: "중국의 만리장성의 총 길이는 약 몇 km인가?",
        answers: ["약 5,000km", "약 8,000km", "약 12,000km", "약 15,000km"],
        correct: 2,
        difficulty: "normal",
        category: "지리",
        explanation: "중국의 만리장성은 약 13,000km에 이르는 세계 최대 건축물입니다. 몽골의 침입으로부터 방어하기 위해 건설되었습니다."
    },
    {
        question: "중국의 삼국지 시대는 어느 시대인가?",
        answers: ["한나라 말기", "당나라 시대", "송나라 시대", "명나라 시대"],
        correct: 0,
        difficulty: "hard",
        category: "역사",
        explanation: "삼국지 시대(220~280년)는 후한 말기 중국이 위, 촉, 오 3개 국가로 분열된 시대입니다. '삼국지'는 이 시대의 역사소설입니다."
    },
    {
        question: "진시황의 무덤 근처에서 발견된 유명한 유물은?",
        answers: ["만리장성", "병마용", "자금성", "둔황 석굴"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "병마용(테라코타 군대)은 1974년 진시황릉 근처에서 발견된 도자기 전사들입니다. 약 8,000개의 실물 크기 병사 상이 있습니다."
    },
    {
        question: "고대 중국의 조공 체계(朝貢體制)는 어떤 외교 체계인가?",
        answers: ["왕실 독점 무역", "속국이 공물을 바치는 외교 체계", "자유 무역 협정", "군사 동맹 체계"],
        correct: 1,
        difficulty: "hard",
        category: "역사/경제",
        explanation: "조공 체계는 중국 황제에게 주변국이 공물을 바치고, 그 대가로 교역과 외교적 인정을 받는 동아시아 국제 질서였습니다."
    },
    {
        question: "한국의 한복의 주요 특징은 무엇인가?",
        answers: ["복잡한 무늬", "높은 칼라", "곡선의 실루엣", "딱딱한 소재"],
        correct: 2,
        difficulty: "normal",
        category: "문화",
        explanation: "한복은 치마와 저고리의 우아한 곡선 실루엣이 특징입니다. 색상과 자수로 신분과 계절을 표현했습니다."
    },
    {
        question: "한국의 설날 명절에 먹는 전통 음식은?",
        answers: ["송편", "떡국", "비빔밥", "잡채"],
        correct: 1,
        difficulty: "normal",
        category: "문화/전통",
        explanation: "설날에는 떡국을 먹고, 어른들에게 세배를 합니다. 떡국을 먹으면 나이를 한 살 더 먹는다고 합니다. 송편은 추석 명절의 음식입니다."
    },
    {
        question: "김치의 주요 재료는 무엇인가?",
        answers: ["오이와 소금", "배추와 고추", "무와 설탕", "상추와 간장"],
        correct: 1,
        difficulty: "easy",
        category: "음식/문화",
        explanation: "김치는 주로 배추에 고추와 마늘, 젓갈 등을 넣어 만든 한국의 발효음식입니다. 칼슘, 비타민, 유산균이 풍부합니다."
    },
    {
        question: "한국의 반도체 산업을 주도하는 기업은?",
        answers: ["LG전자", "삼성전자", "현대자동차", "포스코"],
        correct: 1,
        difficulty: "normal",
        category: "경제",
        explanation: "삼성전자는 세계 최대 규모의 반도체 메모리 제조업체입니다. 메모리 반도체 시장에서 약 30% 이상의 점유율을 보유합니다."
    },

    // === 남아시아 (15문제) ===
    {
        question: "인도의 국기는?",
        answers: ["노랑-검정-녹색", "주황-흰색-녹색", "빨강-흰색-파랑", "주황-주황-파랑"],
        correct: 1,
        difficulty: "normal",
        category: "지리",
        explanation: "인도 국기는 주황색(용기), 흰색(평화), 녹색(번영)의 수평 줄무늬와 중앙의 파란 법륜으로 구성됩니다."
    },
    {
        question: "힌두교에서 '요가'의 의미는?",
        answers: ["격렬한 운동", "결합/연합", "스트레칭", "명상"],
        correct: 1,
        difficulty: "normal",
        category: "문화/종교",
        explanation: "요가는 산스크리트어로 '결합'을 의미합니다. 신체와 정신의 조화를 추구하는 힌두교 수련법입니다."
    },
    {
        question: "타지마할은 누가 건설했는가?",
        answers: ["악바르 황제", "샤 자한 황제", "아우랑젭 황제", "바부르 황제"],
        correct: 1,
        difficulty: "hard",
        category: "역사/건축",
        explanation: "타지마할은 17세기 무굴제국의 샤 자한 황제가 사망한 아내 뭄타즈 마할을 추도하기 위해 건설했습니다."
    },
    {
        question: "인도의 카레는 몇 종류인가?",
        answers: ["약 5가지", "약 20가지", "약 50가지 이상", "약 100가지"],
        correct: 2,
        difficulty: "normal",
        category: "음식/문화",
        explanation: "인도 카레는 지역과 재료에 따라 무수히 많은 종류가 있습니다. 인도는 카레로 유명한 나라입니다."
    },
    {
        question: "인도의 갠지스강의 길이는 약 몇 km인가?",
        answers: ["약 1,500km", "약 2,000km", "약 2,500km", "약 3,000km"],
        correct: 1,
        difficulty: "normal",
        category: "지리",
        explanation: "갠지스강은 약 2,520km로 인도의 가장 신성한 강입니다. 힌두교인들은 갠지스강을 성모로 숭배합니다."
    },
    {
        question: "인도의 볼리우드(Bollywood)는 무엇인가?",
        answers: ["뮤지컬 장르", "영화산업", "댄스 스타일", "종교 의식"],
        correct: 1,
        difficulty: "normal",
        category: "문화/엔터테인먼트",
        explanation: "볼리우드는 뭄바이(Bombay) 기반의 인도 힌디 영화산업입니다. 할리우드 다음으로 거대한 영화산업입니다."
    },
    {
        question: "인도의 라마누잔은 누구인가?",
        answers: ["철학자", "수학자", "물리학자", "화학자"],
        correct: 1,
        difficulty: "hard",
        category: "과학/역사",
        explanation: "라마누잔은 20세기 인도의 천재 수학자입니다. 기숙사 번호 1729로 유명한 라마누잔-하디 수를 발견했습니다."
    },
    {
        question: "인도의 독립은 몇 년에 이루어졌는가?",
        answers: ["1945년", "1947년", "1949년", "1951년"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "인도는 1947년 8월 15일 영국으로부터 독립했습니다. 마하트마 간디의 비폭력 저항이 주도적 역할을 했습니다."
    },
    {
        question: "간디가 추구한 비폭력 저항의 인도말은?",
        answers: ["사티야그라하", "아하임사", "사르보다야", "스와데시"],
        correct: 0,
        difficulty: "hard",
        category: "역사",
        explanation: "사티야그라하는 '진실 파악'이라는 의미로 간디가 주창한 비폭력 저항의 철학입니다."
    },
    {
        question: "인도의 공용어 수는 약 몇 개인가?",
        answers: ["2개", "10개", "22개", "50개"],
        correct: 2,
        difficulty: "hard",
        category: "언어/문화",
        explanation: "인도 헌법은 22개의 공식 언어를 인정합니다. 실제로 인도에서 사용되는 언어는 1,000개가 넘으며, 힌디어와 영어가 연방 공용어입니다."
    },
    {
        question: "파키스탄의 건국자는?",
        answers: ["무함마드 알리 진나", "아이유브 칸", "지아 울 하크", "벤자민 자르다리"],
        correct: 0,
        difficulty: "hard",
        category: "역사",
        explanation: "무함마드 알리 진나는 파키스탄의 건국자이며 초대 총독입니다. 1947년 인도에서 분리되어 파키스탄이 수립되었습니다."
    },

    // === 유럽 (20문제) ===
    {
        question: "이탈리아 르네상스는 어느 도시에서 시작되었는가?",
        answers: ["로마", "베니스", "피렌체", "나폴리"],
        correct: 2,
        difficulty: "hard",
        category: "역사/문화",
        explanation: "르네상스는 14세기 피렌체에서 시작되었습니다. 메디치 가문의 지원으로 예술과 학문이 발전했습니다."
    },
    {
        question: "레오나르도 다빈치는 무엇으로 가장 유명한가?",
        answers: ["음악", "조각", "회화와 과학", "건축"],
        correct: 2,
        difficulty: "normal",
        category: "문화/역사",
        explanation: "레오나르도 다빈치는 '모나리자'를 그린 화가이면서 과학자, 발명가로도 활동했습니다. 르네상스 인간의 대표입니다."
    },
    {
        question: "미켈란젤로가 그린 천장화는?",
        answers: ["바티칸 박물관", "시스티나 성당", "성 베드로 대성당", "판테온"],
        correct: 1,
        difficulty: "normal",
        category: "문화/예술",
        explanation: "미켈란젤로가 그린 '천지창조'는 시스티나 성당의 천장화입니다. 르네상스 미술의 최고 걸작 중 하나입니다."
    },
    {
        question: "산업혁명이 먼저 시작된 나라는?",
        answers: ["프랑스", "영국", "독일", "벨기에"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "산업혁명은 18세기 후반 영국에서 시작되었습니다. 방직기 발명 등으로 기계화 및 공장 시스템이 확대되었습니다."
    },
    {
        question: "프랑스의 에펠탑이 건설된 년도는?",
        answers: ["1875년", "1889년", "1900년", "1920년"],
        correct: 1,
        difficulty: "normal",
        category: "건축",
        explanation: "에펠탑은 1889년 파리 만국박람회를 기념하여 건설되었습니다. 철 격자 타워로 당시로서는 획기적인 건축물이었습니다."
    },
    {
        question: "독일의 바이마르 공화국이 끝난 년도는?",
        answers: ["1925년", "1930년", "1933년", "1939년"],
        correct: 2,
        difficulty: "hard",
        category: "역사",
        explanation: "바이마르 공화국은 1933년 히틀러의 나치 독재로 종료되었습니다. 나치 독일은 제2차 세계대전을 일으켰습니다."
    },
    {
        question: "러시아의 겨울궁전은 누가 건설했는가?",
        answers: ["피터 대제", "예카테리나 2세", "스탈린", "레닌"],
        correct: 0,
        difficulty: "hard",
        category: "건축/역사",
        explanation: "겨울궁전은 18세기 피터 대제가 상트페테르부르크에 건설한 러시아 황제의 궁전입니다. 혁명 당시 점령당했습니다."
    },
    {
        question: "바이킹은 어느 지역의 해적인가?",
        answers: ["지중해", "북해와 대서양", "검은바다", "발틱해"],
        correct: 1,
        difficulty: "normal",
        category: "역사",
        explanation: "바이킹은 8~11세기 북유럽의 노르만인 해적입니다. 해상 무역로를 장악했고 미대륙까지 항해했습니다."
    },
    {
        question: "노벨상의 상금은 어느 나라의 자산에서 나오는가?",
        answers: ["스웨덴", "덴마크", "노르웨이", "핀란드"],
        correct: 0,
        difficulty: "hard",
        category: "일반상식",
        explanation: "노벨상은 스웨덴의 알프레드 노벨의 유산으로 운영됩니다. 스웨덴 학술원과 노르웨이 의회가 수상자를 선정합니다."
    },
    {
        question: "현재 EU(유럽연합)의 회원국 수는?",
        answers: ["25개국", "27개국", "30개국", "32개국"],
        correct: 1,
        difficulty: "normal",
        category: "국제관계",
        explanation: "EU는 2024년 27개 회원국으로 구성됩니다. 영국은 2020년 브렉시트로 탈퇴했습니다."
    },
    {
        question: "스위스가 사용하는 언어는 몇 개인가?",
        answers: ["1개", "2개", "3개", "4개"],
        correct: 3,
        difficulty: "hard",
        category: "언어/지리",
        explanation: "스위스의 공용어는 독일어(63%), 프랑스어(23%), 이탈리아어(8%), 로만슈어(0.5%)입니다. 지역에 따라 다릅니다."
    },

    // === 아메리카 (15문제) ===
    {
        question: "미국의 독립전쟁이 시작된 년도는?",
        answers: ["1773년", "1775년", "1776년", "1780년"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "미국 독립전쟁은 1775년 렉싱턴 전투로 시작되었습니다. 1776년 독립선언이 채택되었습니다."
    },
    {
        question: "미국의 초대 대통령은?",
        answers: ["토마스 제퍼슨", "조지 워싱턴", "존 애덤스", "제임스 매디슨"],
        correct: 1,
        difficulty: "easy",
        category: "역사",
        explanation: "조지 워싱턴은 1789년 미국의 초대 대통령으로 취임했습니다. 독립전쟁의 총사령관이었습니다."
    },
    {
        question: "실리콘밸리는 미국의 어느 지역에 위치하는가?",
        answers: ["샌프란시스코", "캘리포니아 남부", "텍사스", "뉴욕"],
        correct: 0,
        difficulty: "normal",
        category: "지리",
        explanation: "실리콘밸리는 샌프란시스코 베이 에어리어에 위치합니다. 애플, 구글, 페이스북 등 IT 기업의 본거지입니다."
    },
    {
        question: "할리우드는 미국의 어느 도시에 위치하는가?",
        answers: ["샌프란시스코", "뉴욕", "로스앤젤레스", "시카고"],
        correct: 2,
        difficulty: "normal",
        category: "지리",
        explanation: "할리우드는 로스앤젤레스의 한 지역입니다. 미국 영화 산업의 중심지입니다."
    },
    {
        question: "미국의 NASA는 어떤 기관인가?",
        answers: ["교육부", "우주항공청", "국방부", "과학진흥재단"],
        correct: 1,
        difficulty: "normal",
        category: "과학",
        explanation: "NASA는 미국의 우주항공청입니다. 아폴로 달 착륙, 스페이스 셔틀, 화성탐사를 주도했습니다."
    },
    {
        question: "마추픽추는 어느 나라에 있는가?",
        answers: ["칠레", "아르헨티나", "페루", "에콰도르"],
        correct: 2,
        difficulty: "normal",
        category: "지리",
        explanation: "마추픽추는 페루의 안데스 산맥에 위치한 잉카 유적입니다. 세계 7대 불가사의 중 하나입니다."
    },
    {
        question: "아마존 열대우림은 몇 개의 나라에 걸쳐있는가?",
        answers: ["3개", "5개", "7개", "9개"],
        correct: 3,
        difficulty: "hard",
        category: "지리",
        explanation: "아마존 열대우림은 9개국에 걸쳐있습니다. 브라질이 약 60%를 차지합니다. 지구의 산소 20%를 생산합니다."
    },
    {
        question: "브라질의 카니발의 기원은?",
        answers: ["아프리카 전통", "포르투갈 전통", "원주민 의식", "가톨릭 사순절 전 축제"],
        correct: 3,
        difficulty: "normal",
        category: "문화",
        explanation: "카니발의 기원은 가톨릭의 사순절(Lent) 직전 축제 전통입니다. 브라질에서는 이 전통이 아프리카 문화와 혼합되어 독특한 형태로 발전했습니다."
    },
    {
        question: "축구 월드컵을 가장 많이 우승한 나라는?",
        answers: ["독일", "이탈리아", "브라질", "프랑스"],
        correct: 2,
        difficulty: "normal",
        category: "스포츠",
        explanation: "브라질은 5회의 월드컵 우승(1958, 1962, 1970, 1994, 2002)으로 가장 많습니다."
    },
    {
        question: "멕시코의 데이 오브 더 데드(Day of the Dead)는 무엇인가?",
        answers: ["크리스마스", "죽은 자를 추도하는 축제", "독립일", "수확 축제"],
        correct: 1,
        difficulty: "normal",
        category: "문화",
        explanation: "멕시코의 망자절은 죽은 친척을 추도하는 축제입니다. 11월 1~2일에 열리며 해골 모양의 설탕 과자가 상징입니다."
    },

    // === 중동/아프리카 (10문제) ===
    {
        question: "이집트의 피라미드 중 가장 큰 것은?",
        answers: ["카프레 피라미드", "메넨카우레 피라미드", "쿠푸 피라미드", "지노 피라미드"],
        correct: 2,
        difficulty: "normal",
        category: "건축/역사",
        explanation: "쿠푸 피라미드(대피라미드)는 높이 146m로 고대 세계 7대 불가사의 중 유일하게 남은 건축물입니다."
    },
    {
        question: "이슬람의 5대 기둥에 포함되지 않는 것은?",
        answers: ["할랄 식", "신앙고백", "기도", "자카(기부)"],
        correct: 0,
        difficulty: "hard",
        category: "종교",
        explanation: "이슬람의 5대 기둥은 신앙고백, 기도, 자카, 단식, 순례입니다. 할랄은 음식 규칙입니다."
    },
    {
        question: "사우디아라비아의 국교는?",
        answers: ["기독교", "유대교", "이슬람교", "힌두교"],
        correct: 2,
        difficulty: "easy",
        category: "종교/지리",
        explanation: "사우디아라비아는 이슬람교를 국교로 하는 이슬람 왕국입니다. 메카와 메디나 등 이슬람 성지를 보유합니다."
    },
    {
        question: "사하라 사막의 면적은 약 몇 백만 km²인가?",
        answers: ["약 5백만", "약 7백만", "약 9백만", "약 12백만"],
        correct: 2,
        difficulty: "hard",
        category: "지리",
        explanation: "사하라 사막은 약 900만 km²로 아프리카 북부의 대부분을 차지합니다. 세계 최대 규모의 사막입니다."
    },
    {
        question: "나일강의 길이는 약 몇 km인가?",
        answers: ["약 4,000km", "약 5,500km", "약 6,600km", "약 7,500km"],
        correct: 2,
        difficulty: "normal",
        category: "지리",
        explanation: "나일강은 약 6,650km로 세계 최장의 강입니다. 이집트, 수단 등 아프리카를 가로지르고 있습니다."
    },
    {
        question: "케냐의 동물 대이동(Great Migration)은 언제 일어나는가?",
        answers: ["연중 내내", "우기 시 (6~9월)", "건기 시 (1~3월)", "특정 시기 없음"],
        correct: 1,
        difficulty: "normal",
        category: "자연",
        explanation: "대이동은 우기인 6~9월에 일어납니다. 약 150만 마리의 누와 얼룩말이 탄자니아에서 케냐로 이동합니다."
    },
    {
        question: "에티오피아의 고대 문명은?",
        answers: ["수메르 문명", "악숨 제국", "나바타 왕국", "푼트 왕국"],
        correct: 1,
        difficulty: "hard",
        category: "역사",
        explanation: "악숨 제국은 1~7세기 에티오피아 지역의 고대 문명입니다. 초대 그리스도교 국가 중 하나였습니다."
    },
    {
        question: "남아프리카공화국의 넬슨 만델라는?",
        answers: ["대통령", "독립 운동가", "둘 다", "위의 어느 것도 아님"],
        correct: 2,
        difficulty: "hard",
        category: "역사",
        explanation: "넬슨 만델라는 아파르트헤이트(인종차별)에 항거한 독립 운동가이며, 남아공의 초대 흑인 대통령입니다."
    },
    {
        question: "르완다의 제노사이드(집단학살)가 일어난 년도는?",
        answers: ["1990년", "1992년", "1994년", "1996년"],
        correct: 2,
        difficulty: "hard",
        category: "역사",
        explanation: "르완다 제노사이드는 1994년 4월~6월 약 100일간 약 100만 명이 학살당한 비극입니다."
    },
    {
        question: "커피의 원산지는?",
        answers: ["브라질", "콜롬비아", "에티오피아", "베트남"],
        correct: 2,
        difficulty: "normal",
        category: "음식/지리",
        explanation: "커피는 에티오피아가 원산지입니다. 아라비카 품종이 가장 오래되고 고급으로 여겨집니다."
    },

    // === 과학/기술 최신 (20문제) ===
    {
        question: "AI의 GPT는 무엇의 약자인가?",
        answers: ["General Process Tool", "Generative Pre-trained Transformer", "Global Prediction Technology", "Graphical Processing"],
        correct: 1,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "GPT는 'Generative Pre-trained Transformer'의 약자로, OpenAI의 대형 언어 모델입니다. ChatGPT가 유명합니다."
    },
    {
        question: "양자컴퓨터의 기본 단위는?",
        answers: ["비트", "큐빗", "가우스", "허츠"],
        correct: 1,
        difficulty: "hard",
        category: "과학/기술",
        explanation: "큐빗(quantum bit)은 양자컴퓨터의 기본 정보 단위입니다. 0과 1을 동시에 표현할 수 있습니다."
    },
    {
        question: "제임스웹 우주망원경은 언제 발사되었는가?",
        answers: ["2019년", "2020년", "2021년", "2022년"],
        correct: 2,
        difficulty: "normal",
        category: "과학",
        explanation: "제임스웹 우주망원경은 2021년 12월 25일에 발사되었습니다. 허블 우주망원경의 후계자로 적외선 관측에 특화되어 있습니다."
    },
    {
        question: "SpaceX의 재사용 로켓은?",
        answers: ["팔콘1", "팔콘9", "드래곤", "스타십"],
        correct: 1,
        difficulty: "normal",
        category: "과학/기술",
        explanation: "팔콘9은 SpaceX의 재사용 가능한 발사체입니다. 1단 부스터를 착지시켜 재사용할 수 있습니다."
    },
    {
        question: "mRNA 백신 기술을 개발한 기업은?",
        answers: ["존슨앤존슨", "화이자-바이오앤텍", "아스트라제네카", "모더나"],
        correct: 1,
        difficulty: "normal",
        category: "과학/의학",
        explanation: "화이자와 바이오앤텍은 mRNA 기반 코로나19 백신을 개발했습니다. 모더나도 mRNA 백신을 개발했습니다."
    },
    {
        question: "태양광 전지의 변환 효율이 가장 높은 유형은?",
        answers: ["실리콘", "페로브스카이트", "다중접합", "유기 태양전지"],
        correct: 2,
        difficulty: "hard",
        category: "과학/에너지",
        explanation: "다중접합(multi-junction) 태양전지는 실험실 조건에서 47% 이상의 효율을 달성합니다. 우주선에 사용됩니다."
    },
    {
        question: "탄소 중립(Net Zero)의 목표 연도는?",
        answers: ["2030년", "2050년", "2070년", "2100년"],
        correct: 1,
        difficulty: "normal",
        category: "환경/기후",
        explanation: "대부분의 선진국은 2050년 탄소 중립을 목표로 하고 있습니다. 이는 탄소배출량이 0이 되는 것을 의미합니다."
    },
    {
        question: "인공장기의 가장 가능성이 높은 것은?",
        answers: ["심장", "뇌", "신장", "간"],
        correct: 2,
        difficulty: "hard",
        category: "의학",
        explanation: "신장은 가장 이식이 성공한 장기이며, 인공신장 개발도 진행 중입니다. 혈액 투석 기술이 먼저 상용화되었습니다."
    },
    {
        question: "5G 통신의 밀리미터파(mmWave) 주파수 대역은?",
        answers: ["1GHz 미만", "약 1-6GHz", "약 24-52GHz", "약 100GHz 이상"],
        correct: 2,
        difficulty: "hard",
        category: "IT/기술",
        explanation: "5G는 서브-6GHz 대역과 밀리미터파(24~52GHz) 대역을 사용합니다. 밀리미터파는 초고속 통신이 가능하지만 도달 거리가 짧습니다."
    },
    {
        question: "재생에너지(신재생 에너지)의 주요 종류가 아닌 것은?",
        answers: ["태양광", "풍력", "원자력", "수력"],
        correct: 2,
        difficulty: "normal",
        category: "에너지",
        explanation: "원자력은 재생 불가능 에너지입니다. 재생에너지는 태양광, 풍력, 수력, 지열, 조력 등입니다."
    },

    // === 예술/음악/스포츠 (20문제) ===
    {
        question: "클로드 모네는 주로 어떤 대상을 반복해서 그렸는가?",
        answers: ["풍차", "수련", "들판", "해변"],
        correct: 1,
        difficulty: "normal",
        category: "문화/예술",
        explanation: "모네는 수련이 있는 정원과 계절에 따라 변하는 모습을 여러 번 그렸습니다. 빛의 변화를 표현하려 했습니다."
    },
    {
        question: "파블로 피카소가 창시한 미술 운동은?",
        answers: ["초현실주의", "입체주의", "추상표현주의", "미니멀리즘"],
        correct: 1,
        difficulty: "normal",
        category: "문화/예술",
        explanation: "피카소는 입체주의의 선구자입니다. '아비뇽의 처녀들'은 입체주의의 시작을 알리는 작품입니다."
    },
    {
        question: "모차르트의 교향곡 수는 약 몇 개인가?",
        answers: ["약 20개", "약 41개", "약 60개", "약 100개"],
        correct: 1,
        difficulty: "hard",
        category: "음악",
        explanation: "모차르트는 41개의 번호가 매겨진 교향곡을 작곡했습니다. 전체 작품 수는 약 600개이며, 5세부터 작곡을 시작했습니다."
    },
    {
        question: "비틀즈가 해산한 년도는?",
        answers: ["1968년", "1970년", "1972년", "1974년"],
        correct: 1,
        difficulty: "normal",
        category: "음악",
        explanation: "비틀즈는 1970년 4월 해산했습니다. 20년의 활동 기간 동안 대중음악 역사를 바꿨습니다."
    },
    {
        question: "K-POP 그룹 방탄소년단의 멤버 수는?",
        answers: ["5명", "6명", "7명", "8명"],
        correct: 2,
        difficulty: "easy",
        category: "음악/문화",
        explanation: "방탄소년단(BTS)은 7명의 멤버로 구성된 K-POP 그룹입니다. 전 세계적으로 가장 인기 있는 그룹 중 하나입니다."
    },
    {
        question: "올림픽의 역사에서 가장 많은 금메달을 획득한 선수는?",
        answers: ["우사인 볼트", "마이클 펠프스", "나디아 코마네치", "테네시아 알레바로"],
        correct: 1,
        difficulty: "hard",
        category: "스포츠",
        explanation: "마이클 펠프스는 올림픽에서 23개의 금메달을 획득했습니다. 대부분 수영 종목입니다."
    },
    {
        question: "NBA에서 가장 많은 우승 반지를 획득한 선수는?",
        answers: ["르브론 제임스", "마이클 조던", "빌 러셀", "카림 압둘-자바르"],
        correct: 2,
        difficulty: "hard",
        category: "스포츠",
        explanation: "빌 러셀은 보스턴 셀틱스에서 11번의 NBA 우승을 차지하여 역대 최다 우승 기록을 보유하고 있습니다."
    },
    {
        question: "펠레는 어느 나라의 축구 선수인가?",
        answers: ["아르헨티나", "우루과이", "브라질", "파라과이"],
        correct: 2,
        difficulty: "easy",
        category: "스포츠",
        explanation: "펠레는 브라질의 축구 전설입니다. 3번의 월드컵 우승(1958, 1962, 1970)을 거둔 20세기 최고의 선수로 평가받습니다."
    },
    {
        question: "테니스 그랜드슬램은 몇 개의 대회로 구성되는가?",
        answers: ["2개", "3개", "4개", "5개"],
        correct: 2,
        difficulty: "normal",
        category: "스포츠",
        explanation: "그랜드슬램은 호주 오픈, 프렌치 오픈, 윔블던, US 오픈 4개 대회입니다. 한 해에 모두 우승하면 '캘린더 그랜드슬램'입니다."
    },
    {
        question: "수영에서 가장 빠른 영법은?",
        answers: ["배영", "평영", "자유형", "나비영"],
        correct: 2,
        difficulty: "normal",
        category: "스포츠",
        explanation: "자유형(크롤)은 가장 빠른 영법입니다. 올림픽에서 자유형 종목이 가장 빠른 기록을 냅니다."
    }
];

