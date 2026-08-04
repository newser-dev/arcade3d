// ─────────────────────────────────────────────────────────────
// 게임 등록부
// 새 게임 추가 방법:
//   1. games/<폴더이름>/index.html 로 게임을 넣는다
//   2. 아래 배열에 항목을 하나 추가한다
// path 를 비워두면 "출시 예정" 카드로 표시된다.
// ─────────────────────────────────────────────────────────────
const GAMES = [
  {
    id: 'wing-dodge-3d',
    title: 'Wing Dodge 3D',
    emoji: '🪽',
    desc: '사방에서 튀어나오는 장애물을 피해 날아라! 4개 월드 · 별 상점 · 15개 언어',
    tags: ['클래식', '아케이드'],
    color1: '#70c5ce',
    color2: '#3d92cf',
    path: 'games/wing-dodge-3d/index.html',
  },
  {
    id: 'bounceball3d',
    title: '3D 바운스볼',
    emoji: '🔴',
    desc: '별을 모두 모아 EXIT까지! 가시·스프링·부서지는 블록 — 스테이지 클리어 액션',
    tags: ['클래식', '퍼즐'],
    color1: '#ff6b6b',
    color2: '#c0392b',
    path: 'games/bounceball3d/index.html',
  },
  {
    id: 'skybounce3d',
    title: '스카이 바운스 3D',
    emoji: '☁️',
    desc: '쉴 새 없이 튀는 공을 조종해 발판을 밟고 하늘 끝까지! 무한 상승 아케이드',
    tags: ['아케이드'],
    color1: '#ffd76e',
    color2: '#ff8c42',
    path: 'games/skybounce3d/index.html',
  },
  {
    id: 'snake3d',
    title: '3D 스네이크',
    emoji: '🐍',
    desc: '먹이를 먹고 길어지는 뱀 — 3D로 부활 예정',
    tags: ['클래식'],
    color1: '#7bd88f',
    color2: '#2e8b57',
    path: '', // 출시 예정
  },
  {
    id: 'breakout3d',
    title: '3D 벽돌깨기',
    emoji: '🧱',
    desc: '공을 튕겨 벽돌을 부수자 — 3D로 부활 예정',
    tags: ['클래식'],
    color1: '#ff9a5b',
    color2: '#d84b2a',
    path: '', // 출시 예정
  },
];
