/* ==========================================================================
   photos.js — 사진 목록 · 캡션 · 작업 노트 데이터 파일
   ★ 나중에 새 사진을 추가하거나 캡션을 수정할 때 이 파일만 고치시면 됩니다!
   ========================================================================== */

const SITE_TEXT = {
  ko: {
    brandSub: "21세기 골드러쉬의 지형학",
    navStatement: "Statement",
    navArchive: "Archive",
    navDiptychs: "Diptychs",
    navMap: "Index Map",
    heroSubtitle: "21세기 골드러쉬의 지형학 — Topography of a 21st-Century Gold Rush",
    statementHeading: "작업 노트",
    archiveHeading: "지형 아카이브",
    diptychHeading: "이폭 대조 (Diptychs)",
    diptychDesc: "방치된 지표면·골조와 완벽히 유지되는 유휴 인프라를 나란히 배치해 21세기 골드러쉬의 구조적 모순을 드러냅니다.",
    mapHeading: "촬영 구역 인덱스 맵",
    mapLocation: "인천광역시 중구 운북동 일대 (구 미단시티 / 현 골든테라시티)",
    statementParagraphs: [
      "인천 영종도는 국제공항을 기점으로 대규모 간척과 도시 구획이 반복되어 온 인공 지형이다. 미단시티(현 골든테라시티) 일대는 복합리조트와 배후 단지를 전제로 도로, 신호등, 주차장, 조경, 건축 골조가 차례로 구축되었으나, 핵심 사업이 2020년 중단된 이후 장기간 유예된 상태로 남아 있다.",
      "이 작업은 '21세기 골드러쉬'라 불릴 법한 투기적 자본의 쇄도와 그 흔적을 비극적 폐허로 연출하거나 도덕적으로 고발하지 않는다. 대신 신지형학(New Topographics)과 데드팬(Deadpan)의 태도를 빌려, 감정의 개입을 최소화한 눈높이와 거리에서 지표면의 물리적 사실을 측량하듯 기록한다.",
      "파란 방수포로 덮인 절토지, 통행량 없이 매끈하게 유지되는 왕복 교차로, 규격대로 묶인 가로수, 그리고 습지 너머로 서 있는 거대 건축물까지—이곳에는 '방치'와 '과잉 관리'가 동시에 존재한다. 작가의 판단을 비워 둔 건조한 화면 위에서, 계획과 현실 사이에 멈춰 선 땅의 구조가 스스로 드러나기를 의도한다."
    ]
  },
  en: {
    brandSub: "Topography of a 21st-Century Gold Rush",
    navStatement: "Statement",
    navArchive: "Archive",
    navDiptychs: "Diptychs",
    navMap: "Index Map",
    heroSubtitle: "Topography of a 21st-Century Gold Rush — Yeongjongdo, Incheon",
    statementHeading: "Artist Statement",
    archiveHeading: "Topographic Archive",
    diptychHeading: "Diptychs",
    diptychDesc: "Pairing abandoned earthworks and suspended frames with impeccably maintained empty infrastructure reveals the structural contradiction of speculative development.",
    mapHeading: "Survey Index Map",
    mapLocation: "Unbuk-dong, Jung-gu, Incheon (Midan City / Golden Terra City)",
    statementParagraphs: [
      "Yeongjongdo in Incheon is an artificial terrain shaped by repeated land reclamation and speculative zoning around its international airport. Across Midan City (now Golden Terra City), roads, traffic signals, parking lots, landscaping, and concrete frames were built in anticipation of an integrated resort, yet key developments have remained suspended since construction halted in 2020.",
      "Rather than dramatizing this site as a romantic ruin or passing moral judgment, this series adopts the detached, deadpan stance of New Topographics. Working from a neutral eye level and measured distance, the camera surveys the physical residue left on the ground by a 21st-century gold rush.",
      "Tarpaulin-covered earthworks, spotless empty intersections, neatly staked street trees, and distant resort complexes across wetlands reveal a landscape where abandonment and over-maintenance coexist—transferring the act of judgment from the photographer to the viewer."
    ]
  }
};

const CHAPTER_NOTES = {
  all: "전체 25컷 · 지면(01) → 인프라(02) → 유예된 골조(03) → 경계와 대치(04) 순으로 배열된 신지형학 시퀀스입니다.",
  "01": "01. Prepared Ground — 개발을 전제로 깎이고 덮인 간척지와 파란 방수포 지층 (Ref. 조 딜 · 로버트 애덤스)",
  "02": "02. Unoccupied Order — 사람이 부재한 공간에서 완벽히 유지·관리되는 도로와 유휴 시설 (Ref. 스티븐 쇼어 · 데드팬)",
  "03": "03. Suspended Structures — 2020년 중단된 복합리조트 골조의 기하학적 단면과 측량 표식 (Ref. 루이스 볼츠 · 베허 부부)",
  "04": "04. Edges of Capital — 습지·수변 지평선 너머로 병풍처럼 선 고밀도 아파트와 리조트 단지 (Ref. 로버트 애덤스 · 거스키)"
};

// ★ 사진 목록: 새 사진을 추가할 때 아래 { ... } 블록을 복사해 파일명과 설명만 바꾸면 됩니다.
const PHOTOS = [
  { plate: "Plate 01", file: "MONEYISLND_034.jpg", chapter: "01", ref: "Robert Adams", desc: "평탄화된 매립지 원경 — 개발을 기다리는 빈 대지의 수평선" },
  { plate: "Plate 02", file: "MONEYISLND_040.jpg", chapter: "01", ref: "Joe Deal", desc: "파란 방수포 조각이 흩어진 광활한 절토지" },
  { plate: "Plate 03", file: "MONEYISLND_045.jpg", chapter: "01", ref: "Lewis Baltz", desc: "정면 수평으로 분할된 방수포 흙둑과 잡초" },
  { plate: "Plate 04", file: "MONEYISLND_048.jpg", chapter: "01", ref: "Joe Deal", desc: "파헤쳐진 구덩이와 방수포 지층 — 멈춘 토목 현장" },
  { plate: "Plate 05", file: "MONEYISLND_050.jpg", chapter: "01", ref: "Joe Deal", desc: "계단식으로 절토된 토사와 파란 비닐의 기하학적 지형" },
  { plate: "Plate 06", file: "MONEYISLND_044.jpg", chapter: "01", ref: "Stephen Shore", desc: "비포장도로 옆 뒷면만 보이는 표지판" },

  { plate: "Plate 07", file: "MONEYISLND_047.jpg", chapter: "02", ref: "Stephen Shore", desc: "차단벽 너머 신호등과 텅 빈 교차로" },
  { plate: "Plate 08", file: "MONEYISLND_054.jpg", chapter: "02", ref: "Stephen Shore", desc: "차 한 대 없는 완벽한 왕복 횡단보도" },
  { plate: "Plate 09", file: "MONEYISLND_055.jpg", chapter: "02", ref: "Stephen Shore", desc: "텅 빈 교차로 아스팔트 위 원형 타이어 스키드 마크" },
  { plate: "Plate 10", file: "MONEYISLND_053.jpg", chapter: "02", ref: "Deadpan", desc: "지지대에 묶여 반듯하게 정렬된 가로수" },
  { plate: "Plate 11", file: "MONEYISLND_057.jpg", chapter: "02", ref: "Stephen Shore", desc: "끝없이 펼쳐진 평탄한 자갈 공터와 수평선 너머의 리조트" },
  { plate: "Plate 12", file: "MONEYISLND_058.jpg", chapter: "02", ref: "Stephen Shore", desc: "미세한 시점 이동으로 반복되는 광활한 공허의 스케일" },
  { plate: "Plate 13", file: "MONEYISLND_063.jpg", chapter: "02", ref: "Frontality", desc: "공터 한가운데 홀로 서 있는 T04 주차 구역 표지판" },
  { plate: "Plate 14", file: "MONEYISLND_066.jpg", chapter: "02", ref: "Frontality", desc: "정면 대칭 구도로 포착한 비어 있는 진입로와 표지판" },
  { plate: "Plate 15", file: "MONEYISLND_070.jpg", chapter: "02", ref: "Stephen Shore", desc: "인적 없는 공터 옆 말끔하게 관리되는 공용 화장실·관리동" },

  { plate: "Plate 16", file: "MONEYISLND_012.jpg", chapter: "03", ref: "Lewis Baltz", desc: "노출 콘크리트 기둥 격자와 찢어진 파란 안전망" },
  { plate: "Plate 17", file: "MONEYISLND_014.jpg", chapter: "03", ref: "Lewis Baltz", desc: "붉은 철골 하부와 반복되는 콘크리트 프레임" },
  { plate: "Plate 18", file: "MONEYISLND_015.jpg", chapter: "03", ref: "Lewis Baltz", desc: "콘크리트 격자 사이 늘어진 파란 안전망" },
  { plate: "Plate 19", file: "MONEYISLND_019.jpg", chapter: "03", ref: "Lewis Baltz", desc: "녹슨 외장 철골 프레임의 수평적 리듬" },
  { plate: "Plate 20", file: "MONEYISLND_020.jpg", chapter: "03", ref: "Lewis Baltz", desc: "노출 콘크리트 기둥에 부착된 흑백 측량 타겟 마크" },

  { plate: "Plate 21", file: "MONEYISLND_026.jpg", chapter: "04", ref: "Robert Adams", desc: "넓은 습지·초지 지평선 너머로 늘어선 영종 아파트 군집" },
  { plate: "Plate 22", file: "MONEYISLND_027.jpg", chapter: "04", ref: "Robert Adams", desc: "수평적 거리감을 유지한 채 자연과 고밀도 주거지를 병치" },
  { plate: "Plate 23", file: "MONEYISLND_071.jpg", chapter: "04", ref: "Robert Adams", desc: "평탄한 잔디 언덕 너머 돔과 주황빛 거대 리조트 건축물" },
  { plate: "Plate 24", file: "MONEYISLND_073.jpg", chapter: "04", ref: "Robert Adams", desc: "수변 너머 수평으로 길게 놓인 완성된 복합리조트 단지" },
  { plate: "Plate 25", file: "MONEYISLND_083.jpg", chapter: "04", ref: "Robert Adams", desc: "갈대밭과 수면 너머 원경 — 담담한 마무리" }
];

const DIPTYCHS = [
  {
    title: "DIPTYCH A · ABANDONMENT & OVER-MAINTENANCE",
    tag: "데드팬 대조 배치",
    left: { file: "MONEYISLND_045.jpg", caption: "A-1 · 파란 방수포로 덮인 채 방치된 절토지 (MONEYISLND_045)" },
    right: { file: "MONEYISLND_054.jpg", caption: "A-2 · 티끌 없이 완벽히 포장된 텅 빈 횡단보도 (MONEYISLND_054)" }
  },
  {
    title: "DIPTYCH B · STALLED CAPITAL & MAINTAINED FACADE",
    tag: "데드팬 대조 배치",
    left: { file: "MONEYISLND_015.jpg", caption: "B-1 · 찢어진 안전망이 걸린 채 6년째 멈춘 골조 (MONEYISLND_015)" },
    right: { file: "MONEYISLND_070.jpg", caption: "B-2 · 인근 공터에서 말끔히 관리되는 공용 관리동 (MONEYISLND_070)" }
  }
];
