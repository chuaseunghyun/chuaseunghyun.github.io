/* ==========================================================================
   archive-docs.js — 하단 공문서 아카이브 & 오른쪽 서류 서랍(Drawer) 독립 모듈
   ========================================================================== */

const ARCHIVE_DOCS = [
  {
    id: "Doc.01",
    chapter: "01 · Prepared Ground",
    title: "미단시티 조성 팜플렛 (유보지 공급목록) & 경제자유구역개발지침 제12조",
    meta: "인천도시공사 · 산업통상자원부고시 제2018-188호",
    quote: "“유보지1(1278-3, 76,410.5㎡) · 공급시기 2025년 이후 — 자연환경을 보호하고 쾌적한 생활환경을 제공하여야 한다.”",
    pdf: "docs/midan-pamphlet.pdf",
    images: [
      { src: "images/docs/cadastral.png", caption: "미단시티 일대 지적편집도 (예단포항 · 자연녹지 · 중심상업 구획)" }
    ],
    excerpt: [
      "• 공급대상 토지목록(유보지용지): 지번 1278-3 (면적 76,410.5㎡, 건폐율 60%, 용적률 250%, 최고층수 제한없음, 공급시기 2025년 이후)",
      "• 경제자유구역개발지침 제12조(환경보전계획): 경제자유구역을 환경적으로 건전한 국제도시로 조성함으로써 자연환경을 보호하고 내·외국인에게 쾌적한 생활환경을 제공하며 토지이용계획 및 교통처리계획 등과 원활한 연계를 이루도록 하여야 한다."
    ]
  },
  {
    id: "Doc.02",
    chapter: "02 · Unoccupied Order",
    title: "경제자유구역개발지침 제9조(주요 기반시설계획) · 제13조(공원·녹지계획)",
    meta: "산업통상자원부고시 제2018-188호 (2018.10.18.)",
    quote: "“기반시설은 그 종류, 규모 및 질적 수준 등이 경제자유구역 안에 거주하는 내·외국인의 삶의 질을 높일 수 있도록 설치하여야 한다.”",
    pdf: "docs/fez-guideline.pdf",
    images: [
      { src: "images/docs/zoning.png", caption: "미단시티 용도지역 부각 지도 (중심상업 · 일반상업 · 공원용지 · 빨간 복합리조트 부지)" }
    ],
    excerpt: [
      "• 제9조(주요 기반시설계획): 기반시설은 그 종류, 규모 및 질적 수준 등이 경제자유구역 안에 거주하는 내·외국인의 삶의 질을 높일 수 있도록 개발의 목표에 부합하게 설치하여야 한다.",
      "• 제13조(공원·녹지계획): 내·외국인에게 쾌적한 생활환경을 제공할 수 있도록 공원·녹지시설과 보행자도로, 자전거도로 등을 결합하여 건강생태회랑을 적용하여야 한다."
    ]
  },
  {
    id: "Doc.03",
    chapter: "03 · Suspended Structures",
    title: "미단시티 조성 팜플렛 & 지구단위계획 결정(변경, 24차)",
    meta: "미단시티 개발계획 · 지구단위계획 결정서 (2024.12.)",
    quote: "“한국판 라스베가스를 목표로 하는 카지노 복합리조트 개발 추진 중” — 지구단위계획 결정(변경, 24차)",
    pdf: "docs/midan-district-plan.pdf",
    images: [
      { src: "images/docs/rendering.webp", caption: "공식 조감도 (Blueprint) — 미단시티 카지노 복합리조트 완성 예상도" },
      { src: "images/docs/tower-wide.jpg", caption: "실제 현장 (Reality) — 2020년 공사 중단 이후 멈춰 선 동일 2개 타워 골조 원경" }
    ],
    excerpt: [
      "• 미단시티 조성 팜플렛 p.1: ‘금빛 석양과 미래를 담은 테라스 같은 휴양도시’, ‘21세기 관광 문화시대를 선도하는 동북아의 중심지로 육성’, ‘한국판 라스베가스를 목표로 하는 카지노 복합리조트 개발 추진 중’.",
      "• 미단시티 개발계획에 따른 지구단위계획 결정(변경, 24차, 2024.12.): 도시기반시설의 배치와 규모, 획지·필지 및 건축물 용도·건폐율·용적률에 관한 24차 변경 결정 조서."
    ]
  },
  {
    id: "Doc.04",
    chapter: "04 · Edges of Capital",
    title: "미단시티 조성 팜플렛 (입지·가치) & 건축법 시행령 별표 1",
    meta: "인천 영종국제도시 · 건축법 시행령 [별표 1] 용도별 건축물의 종류",
    quote: "“파라다이스시티, 인스파이어복합리조트, 한상드림아일랜드 등 추진 · 영종하늘도시와 동일 생활권”",
    pdf: "docs/building-act-table1.pdf",
    images: [
      { src: "images/docs/zoning.png", caption: "미단시티 외곽 경계 및 주거·상업·녹지 인접 구획" }
    ],
    excerpt: [
      "• 탁월한 입지(팜플렛 p.1): 인천국제공항과 인접하며 영종하늘도시와 동일 생활권으로 우수한 생활기반 시설 공유. 제3연륙교 및 영종해안순환도로 착공으로 확대되는 교통망.",
      "• 탐나는 가치(팜플렛 p.1): 외국기업에 대한 세제 혜택 제공, 부동산 투자이민제 실시로 외국인 투자 활성화, 제2여객터미널 개항으로 유입인구 및 관광객 대폭 증가 전망."
    ]
  }
];

function initArchivalDocs() {
  const host = document.getElementById("archival-docs");
  if (!host) return;

  // 1) 하단 섹션 렌더링
  host.innerHTML = `
    <div class="container">
      <p class="eyebrow mono-meta">05 · ARCHIVAL DOCUMENTS</p>
      <h2>공문서 · 지적도 아카이브</h2>
      <p class="section-desc">종이 위의 개발 계획과 지표면의 실제 풍경 사이의 간극을 보여주는 행정 문서·지적편집도 발췌입니다. 각 항목을 누르면 원문과 도면 서랍이 열립니다.</p>
      <div class="doc-list">
        ${ARCHIVE_DOCS.map((doc, idx) => `
          <button class="doc-row" type="button" data-doc-idx="${idx}">
            <div class="doc-row-head">
              <span class="mono-meta doc-id">${doc.id} · ${doc.chapter}</span>
              <span class="mono-meta doc-open-label">서류·도면 열기 ↗</span>
            </div>
            <p class="doc-quote">${doc.quote}</p>
            <span class="mono-meta doc-source">${doc.title}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  // 2) 오른쪽 서랍(Drawer) DOM 자동 생성
  const backdrop = document.createElement("div");
  backdrop.className = "doc-drawer-backdrop";
  const drawer = document.createElement("aside");
  drawer.className = "doc-drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="doc-drawer-header">
      <span id="drawerMeta" class="mono-meta"></span>
      <button id="drawerClose" class="doc-drawer-close" type="button" aria-label="닫기">×</button>
    </div>
    <div id="drawerBody" class="doc-drawer-body"></div>
  `;
  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  const openDrawer = (idx) => {
    const doc = ARCHIVE_DOCS[idx];
    document.getElementById("drawerMeta").textContent = `${doc.id}  |  ${doc.chapter}`;
    document.getElementById("drawerBody").innerHTML = `
      <h3 class="drawer-title">${doc.title}</h3>
      <p class="mono-meta drawer-sub">${doc.meta}</p>
      <blockquote class="drawer-quote">${doc.quote}</blockquote>
      <div class="drawer-images">
        ${doc.images.map(img => `
          <figure>
            <img src="${img.src}" alt="${img.caption}" />
            <figcaption class="mono-meta">${img.caption}</figcaption>
          </figure>
        `).join("")}
      </div>
      <div class="drawer-excerpt">
        <p class="mono-meta" style="margin-bottom:8px;">EXCERPT</p>
        ${doc.excerpt.map(line => `<p>${line}</p>`).join("")}
        ${doc.pdf ? `<a href="${doc.pdf}" target="_blank" rel="noopener" class="drawer-pdf-btn mono-meta">원본 PDF 새 창에서 열기 ↗</a>` : ""}

      </div>
    `;
    backdrop.classList.add("open");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    backdrop.classList.remove("open");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  host.querySelectorAll(".doc-row").forEach((btn) => {
    btn.addEventListener("click", () => openDrawer(Number(btn.dataset.docIdx)));
  });
  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });
}

initArchivalDocs();
