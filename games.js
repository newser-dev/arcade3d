// ─────────────────────────────────────────────────────────────
// 게임 등록부
// 새 게임 추가 방법:
//   1. games/<폴더이름>/index.html 로 게임을 넣는다
//   2. 아래 배열에 항목을 하나 추가한다
// path 를 비워두면 "출시 예정" 카드로 표시된다.
// titleEn/descEn 은 한국어(ko) 외 언어에서 표시된다.
// ─────────────────────────────────────────────────────────────
const GAMES = [
  {
    id: 'wing-dodge-3d',
    title: '윙 닷지 3D',
    titleEn: 'Wing Dodge 3D',
    emoji: '🪽',
    desc: '사방에서 튀어나오는 장애물을 피해 날아라! 4개 월드 · 별 상점 · 15개 언어',
    descEn: 'Dodge obstacles closing in from all sides! 4 worlds · star shop · 15 languages',
    tags: ['클래식', '아케이드'],
    color1: '#70c5ce',
    color2: '#3d92cf',
    path: 'games/wing-dodge-3d/index.html',
  },
  {
    id: 'bounceball3d',
    title: '3D 바운스볼',
    titleEn: 'Bounce Ball 3D',
    emoji: '🔴',
    desc: '별을 모두 모아 EXIT까지! 가시·스프링·부서지는 블록 — 스테이지 클리어 액션',
    descEn: 'Collect every star and reach the EXIT! Spikes, springs, crumbling blocks — stage-clear action',
    tags: ['클래식', '퍼즐'],
    color1: '#ff6b6b',
    color2: '#c0392b',
    path: 'games/bounceball3d/index.html',
  },
  {
    id: 'skybounce3d',
    title: '스카이 바운스 3D',
    titleEn: 'Sky Bounce 3D',
    emoji: '☁️',
    desc: '쉴 새 없이 튀는 공을 조종해 발판을 밟고 하늘 끝까지! 무한 상승 아케이드',
    descEn: 'Steer a bouncing ball up the platforms, higher and higher! Endless climbing arcade',
    tags: ['아케이드'],
    color1: '#ffd76e',
    color2: '#ff8c42',
    path: 'games/skybounce3d/index.html',
  },
  {
    id: 'snake3d',
    title: '3D 스네이크',
    titleEn: 'Snake 3D',
    emoji: '🐍',
    desc: '카메라가 뱀 뒤를 따라간다! 좌우 회전만으로 먹이를 모으는 뱀 시점 스네이크',
    descEn: 'The camera rides behind the snake — turn left and right to collect food',
    tags: ['클래식'],
    color1: '#7bd88f',
    color2: '#2e8b57',
    path: 'games/snake3d/index.html',
  },
  {
    id: 'breakout3d',
    title: '3D 벽돌깨기',
    titleEn: 'Breakout 3D',
    emoji: '🧱',
    desc: '공을 튕겨 벽돌을 부수자 — 3D로 부활 예정',
    descEn: 'Bounce the ball and smash the bricks — reborn in 3D (coming soon)',
    tags: ['클래식'],
    color1: '#ff9a5b',
    color2: '#d84b2a',
    path: '', // 출시 예정
  },
];

// 포털 공용: 언어 목록(게임과 동일) + 현재 언어 읽기/저장
const ARCADE_LANGS = [
  ['en', 'English'], ['ko', '한국어'], ['ja', '日本語'], ['zh', '中文'],
  ['es', 'Español'], ['pt', 'Português'], ['fr', 'Français'], ['de', 'Deutsch'],
  ['ru', 'Русский'], ['it', 'Italiano'], ['id', 'Bahasa Indonesia'],
  ['vi', 'Tiếng Việt'], ['th', 'ภาษาไทย'], ['tr', 'Türkçe'], ['hi', 'हिन्दी'],
];
function arcadeGetLang() {
  let l = localStorage.getItem('arcade-lang') || localStorage.getItem('flappy3d-lang');
  if (!l) {
    const nav = (navigator.language || 'en').toLowerCase();
    l = ARCADE_LANGS.map(x => x[0]).find(c => nav.startsWith(c)) || 'en';
  }
  if (!ARCADE_LANGS.some(x => x[0] === l)) l = 'en';
  return l;
}
function arcadeSetLang(l) {
  localStorage.setItem('arcade-lang', l);
  localStorage.setItem('flappy3d-lang', l); // 윙닷지 인게임 언어 동기화
}
