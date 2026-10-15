/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Room } from './types';

export const PENSION_INFO = {
  name: "아눅 스테이",
  subName: "우리를 잇는 남해의 쉼, ANUK STAY",
  location: "경상남도 남해군 남면 남서대로 1179-1",
  phone: "010-8742-1596",
  email: "stay@anuk.kr",
  philosophy: `프랑스 영화 <부르고뉴, 기적의 해 (Ce qui nous lie)>에서 영감을 받았습니다. \n영화 속 삼남매가 고향의 오랜 포도밭에서 만나 서서히 서로를 이해하고 연대하듯, \n이곳 남해의 고요한 바다 앞에서 우리를 이어주는 소중한 관계와 시간에 집중하길 바랍니다. \n\n느리게 자라는 나무처럼, 오래 묵을수록 가치를 더하는 와인처럼, \n아눅에서 보낸 시간은 가슴 한편에 고이 녹아들어 따스한 온기로 남을 것입니다.`,
};

export const STORY_SECTIONS = [
  {
    title: "Le Temps (시간)",
    subtitle: "시간이 흘러 비로소 완성되는 것들",
    description: "남해의 잔잔한 파도 소리를 배경 삼아, 바쁘게 흘러가던 도심의 속도를 잠시 잊어봅니다. 하루의 낮과 밤이 교차하는 아름다운 노을을 가만히 바라보며, 나만의 온전한 시간과 마주합니다.",
    image: "/src/assets/images/cequi_pool_villa_4_1783442647864.jpg"
  },
  {
    title: "La Relation (관계)",
    subtitle: "우리를 잇는 따스한 대화와 연결",
    description: "영화 속 장, 줄리에트, 제레미 삼남매가 부르고뉴의 포도밭에서 와인을 빚으며 갈등을 치유하고 하나가 되었듯, 사랑하는 가족, 연인, 혹은 소중한 나 자신과의 끈끈한 유대를 확인하는 공간입니다.",
    image: "/src/assets/images/cequi_pool_villa_2_1783442617946.jpg"
  }
];

export const ROOMS_DATA: Room[] = [
  {
    id: "goyo",
    name: "노을빛 고요동",
    engName: "Goyo Pool Villa",
    title: "노을빛 프라이빗 온수 풀빌라",
    subtitle: "남해 수평선의 찬란한 노을을 품은 프라이빗 대형 온수 인피니티 풀",
    size: "사계절 온수 인피니티 풀 & 파노라마 오션 노을뷰",
    capacity: { standard: 2, max: 4 },
    checkIn: "15:00",
    checkOut: "11:00",
    priceWeekday: 380000,
    priceWeekend: 450000,
    description: "견고하고 안정감 있는 가구 배치가 돋보입니다. 넓은 거실의 통창 밖으로 남해의 수평선과 붉은 노을이 막힘없이 펼쳐지며, 사계절 이용 가능한 프라이빗 온수 인피니티 풀이 바다와 맞닿아 있습니다. 깊은 명상과 완벽한 휴식에 적합하도록 톤 다운된 티크 우드와 가죽 소재로 공간을 채웠습니다.",
    details: [
      "프라이빗 복층 스위트 (침실1 · 거실1 · 욕실2)",
      "사계절 온수 인피니티 풀빌라 (6m×3m)",
      "고해상도 빔프로젝터 & 마샬 스피커",
      "남해 노을 오션뷰 파티오 & 전기 바비큐",
      "최고급 구스다운 침구 세트"
    ],
    amenities: [
      {
        category: "Living & Bed",
        items: ["킹사이즈 베드", "프리미엄 구스 이불/베개", "마샬 프리미엄 블루투스 스피커", "고화질 빔프로젝터", "보드게임", "무선 충전기"]
      },
      {
        category: "Kitchen and Dining",
        items: ["와인 냉장고와 오프너", "캡슐 에스프레소 머신", "발뮤다 토스터기", "식기 세트", "인덕션 & 전자레인지", "와인 글라스 세트"]
      },
      {
        category: "Bath & Spa",
        items: ["이솝(Aesop) 핸드워시/바디워시/샴푸/컨디셔너", "다이슨 에어랩 드라이어", "친환경 대나무 칫솔 세트", "가운 & 타월", "반신욕 소금"]
      }
    ],
    mainImage: "/src/assets/images/cequi_pool_villa_1_1783442590314.jpg",
    galleryImages: [
      "/src/assets/images/cequi_pool_villa_1_1783442590314.jpg",
      "/src/assets/images/cequi_pool_villa_3_1783442630167.jpg",
      "/src/assets/images/cequi_pool_villa_4_1783442647864.jpg",
      "/src/assets/images/cequi_pool_villa_2_1783442617946.jpg"
    ],
    musicTheme: {
      title: "Clair de Lune (달빛)",
      artist: "Claude Debussy",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      cover: "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg"
    }
  },
  {
    id: "heureum",
    name: "편백향 흐름동",
    engName: "Heureum Hinoki Spa",
    title: "편백나무 아웃도어 노천 스파",
    subtitle: "자연 편백나무 향과 잔잔한 파도 소리에 물드는 감성 히노끼 스파 룸",
    size: "자연 편백나무 아웃도어 히노끼 스파 & 바다 정원",
    capacity: { standard: 2, max: 3 },
    checkIn: "15:00",
    checkOut: "11:00",
    priceWeekday: 340000,
    priceWeekend: 410000,
    description: "부드럽고 섬세한 감성을 공간 곳곳에 투영했습니다. 따스한 크림색 리넨 소파와 흙으로 빚은 듯한 도자기 오브제가 포근함을 안겨줍니다. 사방으로 나 있는 정원과 유리 온실 같은 야외 노천탕(Outdoor Spa)은 숲과 맞닿아 있어 피톤치드 가득한 반신욕을 즐길 수 있습니다.",
    details: [
      "프라이빗 스파 룸 (침실1 · 야외스파 · 파우더룸)",
      "편백나무 프라이빗 아웃도어 히노끼 스파",
      "감성 우드 오브제 & 수제 세라믹 머그 세트",
      "프라이빗 가든 & 테라스 라운지",
      "시네마 스크린 & 네추럴 와인 바"
    ],
    amenities: [
      {
        category: "Living & Bed",
        items: ["라지킹 천연 라텍스 침대", "내추럴 리넨 침구류", "프리미엄 블루투스 스피커", "미니 가습기", "스너글 홈 향수", "빔프로젝터"]
      },
      {
        category: "Kitchen and Dining",
        items: ["빈티지 커피 드립 세트", "수제 세라믹 머그 세트", "토스터기", "냉장고", "핸드드립 원두 그라인더", "치즈 보드 세트"]
      },
      {
        category: "Bath & Spa",
        items: ["히노끼 전용 천연 바스 솔트", "이솝 아로마틱 어메니티 패키지", "코튼 이중 거즈 가운", "다이슨 헤어드라이어", "우드 풋 바스"]
      }
    ],
    mainImage: "/src/assets/images/anuk_heureum_main_1783706680494.jpg",
    galleryImages: [
      "/src/assets/images/anuk_heureum_main_1783706680494.jpg",
      "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg",
      "/src/assets/images/cequi_pool_villa_4_1783442647864.jpg",
      "/src/assets/images/cequi_pool_villa_3_1783442630167.jpg"
    ],
    musicTheme: {
      title: "Gymnopédie No.1",
      artist: "Erik Satie",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      cover: "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg"
    }
  },
  {
    id: "yeobaek",
    name: "오션뷰 여백동",
    engName: "Yeobaek Ocean Terrace",
    title: "바우하우스 오션 테라스",
    subtitle: "테라코타 파티오와 감성 서재, 홈카페에서 누리는 비움과 평온의 스테이",
    size: "테라코타 오션뷰 파티오 & 감성 홈카페",
    capacity: { standard: 2, max: 2 },
    checkIn: "15:00",
    checkOut: "11:00",
    priceWeekday: 310000,
    priceWeekend: 370000,
    description: "남해 바다의 절경을 한눈에 담으며 비어있음이 주는 평온함을 느낄 수 있는 공간입니다. 따스한 햇살이 비추는 아침 테라스에서 에스프레소 한 잔과 책 한 권을 펼쳐보세요.",
    details: [
      "프라이빗 테라스 스위트 (침실1 · 테라스1)",
      "테라코타 아웃도어 선셋 오션뷰 파티오",
      "개인 서재 & 프리미엄 도서 큐레이션",
      "바우하우스 디자이너 가구 & 조명",
      "일리 에스프레소 미니 홈카페"
    ],
    amenities: [
      {
        category: "Living & Bed",
        items: ["더블킹 메모리폼 매트리스", "오가닉 코튼 베딩", "마샬 액톤 블루투스 스피커", "큐레이팅 도서 10권", "감성 조명(Artemide)", "포토존 거울"]
      },
      {
        category: "Kitchen and Dining",
        items: ["일리 에스프레소 홈카페 머신", "미니 냉장고", "도자기 오가닉 머그컵", "크래프트 티 컬렉션", "스몰 바 식기류"]
      },
      {
        category: "Bath & Spa",
        items: ["이솝 욕실 어메니티 오가닉 라인", "프로 테라피 헤어드라이어", "아로마 샤워 스티머 타월 세트", "소형 월풀 스파"]
      }
    ],
    mainImage: "/src/assets/images/anuk_yeobaek_main_1783706695225.jpg",
    galleryImages: [
      "/src/assets/images/anuk_yeobaek_main_1783706695225.jpg",
      "/src/assets/images/anuk_hero_sunset_villa_1786457631691.jpg",
      "/src/assets/images/cequi_pool_villa_3_1783442630167.jpg",
      "/src/assets/images/cequi_pool_villa_2_1783442617946.jpg"
    ],
    musicTheme: {
      title: "Je te veux (당신을 원해요)",
      artist: "Erik Satie",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      cover: "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg"
    }
  }
];

export const SPECIAL_EXPERIENCES = [
  {
    id: "pool",
    title: "사계절 온수 인피니티 풀빌라",
    subtitle: "32℃~34℃ 프라이빗 온수 풀",
    description: "32℃~34℃ 사계절 최적 온도가 유지되는 프라이빗 풀에서 남해의 붉은 노을과 석양을 감상할 수 있습니다.",
    image: "/src/assets/images/anuk_exp_pool_1786458966739.jpg"
  },
  {
    id: "breakfast",
    title: "아눅 시그니처 피크닉 조식",
    subtitle: "매일 아침 8시 30분 무료 전달",
    description: "갓 구운 수제 빵과 신선한 계절 과일, 핸드드립 커피가 담긴 오가닉 바구니를 매일 아침 문 앞까지 무료로 배송해 드립니다.",
    image: "/src/assets/images/anuk_organic_breakfast_new_1786647691176.jpg"
  },
  {
    id: "spa",
    title: "천연 편백나무 야외 히노끼 스파",
    subtitle: "피톤치드 가득한 정원 노천탕",
    description: "은은한 편백나무 향과 따뜻한 노천탕에서 파도 소리를 들으며 여행의 피로를 깊게 풀 수 있습니다.",
    image: "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg"
  },
  {
    id: "wine",
    title: "프랑스 부르고뉴 와인 큐레이션",
    subtitle: "오션뷰 테라스 전용 와인 세팅",
    description: "아눅 스테이가 엄선한 프랑스 부르고뉴 피노 누아 와인과 고급 글라스로 테라스의 낭만을 즐기실 수 있습니다.",
    image: "/src/assets/images/anuk_filmic_wine_1786379703140.jpg"
  }
];

export const GALLERY_PHOTOS = [
  { url: "/src/assets/images/cequi_pool_villa_1_1783442590314.jpg", caption: "남해 하늘과 풀빌라의 전경" },
  { url: "/src/assets/images/cequi_pool_villa_2_1783442617946.jpg", caption: "고요(Goyo) 객실의 미니멀 거실" },
  { url: "/src/assets/images/cequi_pool_villa_3_1783442630167.jpg", caption: "흐름(Heureum) 객실의 정원뷰 히노끼" },
  { url: "/src/assets/images/cequi_pool_villa_4_1783442647864.jpg", caption: "여백(Yeobaek) 객실의 따뜻한 아침" },
  { url: "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg", caption: "남해 바다 노을을 닮은 피노누아" }
];

export const WINE_QUESTIONS = [
  {
    id: 1,
    question: "오늘 남해 여행은 누구와 함께이신가요?",
    options: [
      { text: "소중한 반려자와 단둘이 오붓하게", value: "couple" },
      { text: "함께 성장해 온 영혼의 단짝, 평생 지기 친구", value: "friend" },
      { text: "인생의 버팀목이 되어 준 따뜻한 가족", value: "family" },
      { text: "나 자신만을 위한 온전한 고요와 성찰의 여행", value: "solo" }
    ]
  },
  {
    id: 2,
    question: "지금 머릿속에 떠오르는 가장 갈망하는 풍경은?",
    options: [
      { text: "붉은 노을이 찬란히 물드는 가을 저녁 바다", value: "sunset" },
      { text: "눈부신 아침 햇살과 파릇파릇한 싱그러운 나무숲", value: "morning" },
      { text: "밤하늘에 보석을 뿌려놓은 듯한 별과 은하수", value: "stars" },
      { text: "조용히 내리는 빗소리와 차분한 회색빛 공기", value: "rain" }
    ]
  },
  {
    id: 3,
    question: "와인에서 가장 느끼고 싶은 핵심 미각은 어떤 결인가요?",
    options: [
      { text: "딸기와 체리 향이 번지는 깊고 섬세하며 우아한 풍미", value: "fruity" },
      { text: "화사한 꽃잎 향과 은은한 바닐라, 버터의 부드러움", value: "creamy" },
      { text: "있는 그대로 가공 없이 빚어낸 쿰쿰하고 매력적인 야성미", value: "natural" },
      { text: "달콤함보다는 가벼운 산미와 깊고 무거운 탄닌의 조화", value: "bold" }
    ]
  }
];

export const WINE_RECOMMENDATIONS = {
  couple_fruity: {
    name: "도멘 앙리 구주, 부르고뉴 오 코트 드 뉘 (Domaine Henri Gouges)",
    type: "Red Wine (Pinot Noir)",
    description: "사랑하는 이와의 서먹한 거리를 좁히며 오랜 시간 이어주는 우아한 마법 같은 피노 누아입니다. 검붉은 과실의 깊고 부드러운 산도가 온화한 여운을 부릅니다.",
    pairing: "고요 객실의 프라이빗 인피니티 풀 sunset 노을 타임에 추천합니다."
  },
  solo_bold: {
    name: "도멘 장 그리보, 부르고뉴 피노 누아 (Domaine Jean Grivot)",
    type: "Red Wine (Pinot Noir)",
    description: "고독함마저 예술로 승화시키는 진하고 정제된 탄닌을 함유하고 있습니다. 대지에서 올라온 은근한 가죽과 흙냄새가 나 자신과의 내면 깊은 대화를 이끌어냅니다.",
    pairing: "여백 객실에서 잔잔한 오션뷰 테라스 음악을 감상할 때 추천합니다."
  },
  friend_natural: {
    name: "부르고뉴 알리고테 오렌지 퀴베 (Bourgogne Aligoté Orange)",
    type: "Orange Natural Wine",
    description: "있는 그대로의 날것, 오렌지 빛과 활기찬 과실의 향연입니다. 친구와의 묵혀 두었던 수다스러운 수평선 이야기를 한층 빛나게 할 힙하고 멋스러운 와인입니다.",
    pairing: "야외 테라스에서 지글지글 고기가 익어가는 저녁 바비큐에 추천합니다."
  },
  family_creamy: {
    name: "도멘 뒤샤르므, 샤블리 (Domaine Duchesne, Chablis)",
    type: "White Wine (Chardonnay)",
    description: "화사한 흰 꽃과 버터, 신선한 시트러스 향이 가득합니다. 차갑게 칠링하여 가족의 미소를 소중하게 잇는 투명한 아침 햇살과 가장 잘 어울립니다.",
    pairing: "아침 9시에 배송되는 따스한 파머스 오가닉 바구니의 크루아상과 최적입니다."
  },
  default: {
    name: "도멘 포티에, 피노 누아 (Domaine Pottier, Bourgogne)",
    type: "Red Wine (Pinot Noir)",
    description: "신선한 생명력과 따뜻한 감동을 담아낸 정통 부르고뉴 피노누아 와인입니다.",
    pairing: "흐름 객실 아웃도어 노천 스파 중 칠링 음용에 좋습니다."
  }
};
