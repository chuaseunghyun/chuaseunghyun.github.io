/* ==========================================================================
   archive-docs.js — 물리적 서류철(Folder Binder) 아코디언 모션 UI (CSS 내장)
   ========================================================================== */

const ARCHIVE_DOCS = [
  {
    id: "DOC.01",
    tabLabel: "01 · Prepared Ground",
    title: "미단시티 조성 팜플렛 (유보지 공급목록) & 경제자유구역개발지침 제12조",
    meta: "인천도시공사 · 산업통상자원부고시 제2018-188호",
    quote: "“유보지1(1278-3, 76,410.5㎡) · 공급시기 2025년 이후 — 자연환경을 보호하고 쾌적한 생활환경을 제공하여야 한다.”",
    pdf: "docs/midan-pamphlet.pdf",
    images: [
      { src: "docs/cadastral.png", caption: "미단시티 일대 지적편집도 (예단포항 · 자연녹지 · 중심상업 구획)" }
    ],
    excerpt: [
      "• 공급대상 토지목록(유보지용지): 지번 1278-3 (면적 76,410.5㎡, 건폐율 60%, 용적률 250%, 최고층수 제한없음, 공급시기 2025년 이후)",
      "• 경제자유구역개발지침 제12조(환경보전계획): 경제자유구역을 환경적으로 건전한 국제도시로 조성함으로써 자연환경을 보호하고 내·외국인에게 쾌적한 생활환경을 제공하여야 한다."
    ]
  },
  {
    id: "DOC.02",
    tabLabel: "02 · Unoccupied Order",
    title: "경제자유구역개발지침 제9조(주요 기반시설계획) · 제13조(공원·녹지계획)",
    meta: "산업통상자원부고시 제2018-188호 (2018.10.18.)",
    quote: "“기반시설은 그 종류, 규모 및 질적 수준 등이 경제자유구역 안에 거주하는 내·외국인의 삶의 질을 높일 수 있도록 설치하여야 한다.”",
    pdf: "docs/fez-guideline.pdf",
    images: [
      { src: "docs/zoning.png", caption: "미단시티 용도지역 부각 지도 (중심상업 · 일반상업 · 공원용지 · 빨간 복합리조트 부지)" }
    ],
    excerpt: [
      "• 제9조(주요 기반시설계획): 기반시설은 그 종류, 규모 및 질적 수준 등이 경제자유구역 안에 거주하는 내·외국인의 삶의 질을 높일 수 있도록 개발의 목표에 부합하게 설치하여야 한다.",
      "• 제13조(공원·녹지계획): 내·외국인에게 쾌적한 생활환경을 제공할 수 있도록 공원·녹지시설과 보행자도로, 자전거도로 등을 결합하여 건강생태회랑을 적용하여야 한다."
    ]
  },
  {
    id: "DOC.03",
    tabLabel: "03 · Suspended Structures",
    title: "미단시티 조성 팜플렛 & 지구단위계획 결정(변경, 24차)",
    meta: "미단시티 개발계획 · 지구단위계획 결정서 (2024.12.)",
    quote: "“한국판 라스베가스를 목표로 하는 카지노 복합리조트 개발 추진 중” — 지구단위계획 결정(변경, 24차)",
    pdf: "docs/midan-district-plan.pdf",
    images: [
      { src: "docs/rendering.webp", caption: "공식 조감도 (Blueprint) — 미단시티 카지노 복합리조트 완성 예상도" },
      { src: "docs/tower-wide.jpg", caption: "실제 현장 (Reality) — 2020년 공사 중단 이후 멈춰 선 동일 2개 타워 골조 원경" }
    ],
    excerpt: [
      "• 미단시티 조성 팜플렛 p.1: ‘금빛 석양과 미래를 담은 테라스 같은 휴양도시’, ‘한국판 라스베가스를 목표로 하는 카지노 복합리조트 개발 추진 중’.",
      "• 지구단위계획 결정(변경, 24차, 2024.12.): 도시기반시설 배치·규모 및 획지·필지·건폐율·용적률에 관한 24차 변경 결정 조서."
    ]
  },
  {
    id: "DOC.04",
    tabLabel: "04 · Edges of Capital",
    title: "미단시티 조성 팜플렛 (입지·가치) & 건축법 시행령 별표 1",
    meta: "인천 영종국제도시 · 건축법 시행령 [별표 1] 용도별 건축물의 종류",
    quote: "“파라다이스시티, 인스파이어복합리조트, 한상드림아일랜드 등 추진 · 영종하늘도시와 동일 생활권”",
    pdf: "docs/building-act-table1.pdf",
    images: [
      { src: "docs/zoning.png", caption: "미단시티 외곽 경계 및 주거·상업·녹지 인접 구획" }
    ],
    excerpt: [
      "• 탁월한 입지(팜플렛 p.1): 인천국제공항과 인접하며 영종하늘도시와 동일 생활권으로 우수한 생활기반 시설 공유. 제3연륙교 및 영종해안순환도로 착공으로 확대되는 교통망.",
      "• 탐나는 가치(팜플렛 p.1): 외국기업에 대한 세제 혜택 제공, 부동산 투자이민제 실시로 외국인 투자 활성화, 제2여객터미널 개항으로 유입인구 대폭 증가 전망."
    ]
  }
];

function injectBinderStyles() {
  if (document.getElementById("binder-ui-styles")) return;
  const style = document.createElement("style");
  style.id = "binder-ui-styles";
  style.textContent = `
    .binder-stack {
      display: flex;
      flex-direction: column;
      margin-top: 28px;
      padding-top: 12px;
    }

    .binder-folder {
      position: relative;
      margin-top: 24px; /* 기존 -10px → 24px로 여유 있게 띄우기 */
      transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .binder-folder:first-child { margin-top: 0; }
    .binder-folder:not(.is-open):hover {
      transform: translateY(-6px);
      z-index: 5;
    }
    .binder-folder.is-open {
      margin-top: 28px;    /* 기존 8px → 28px */
      margin-bottom: 28px; /* 기존 18px → 28px */
      z-index: 10;
    }

    .binder-folder:first-child { margin-top: 0; }
    .binder-folder:not(.is-open):hover {
      transform: translateY(-6px);
      z-index: 5;
    }
    .binder-folder.is-open {
      margin-top: 8px;
      margin-bottom: 18px;
      z-index: 10;
    }

    /* 폴더 상단 인덱스 탭 (살짝씩 어긋나게 배치) */
    .binder-tab {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 7px 18px 6px;
      border: 1px solid #d2cfc7;
      border-bottom: none;
      border-radius: 6px 6px 0 0;
      background: var(--folder-bg, #f4f1ea);
      font-family: ui-monospace, Menlo, monospace;
      font-size: 11.5px;
      letter-spacing: 0.04em;
      color: #555450;
      margin-left: var(--tab-offset, 0px);
      position: relative;
      top: 1px;
      cursor: pointer;
      transition: background 0.25s ease, color 0.25s ease;
    }
    .binder-folder.is-open .binder-tab {
      background: #ffffff;
      color: #1a1a1a;
      border-color: #1a1a1a;
      font-weight: 600;
    }

    /* 폴더 본체 카드 */
    .binder-card {
      background: var(--folder-bg, #f4f1ea);
      border: 1px solid #d2cfc7;
      border-radius: 0 6px 6px 6px;
      box-shadow: 0 -2px 10px rgba(26, 26, 26, 0.04);
      transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
    }
    .binder-folder.is-open .binder-card {
      background: #ffffff;
      border-color: #1a1a1a;
      box-shadow: 0 14px 36px rgba(26, 26, 26, 0.08);
    }

    /* 폴더 클릭 헤더 */
    .binder-trigger {
      width: 100%;
      background: transparent;
      border: none;
      padding: 20px 26px;
      text-align: left;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: #1a1a1a;
      font-family: inherit;
    }

    .binder-trigger-text { flex: 1; }
    .binder-quote {
      font-size: 15.5px;
      font-weight: 500;
      line-height: 1.5;
      color: #1a1a1a;
      margin-bottom: 4px;
    }
    .binder-sub {
      font-family: ui-monospace, Menlo, monospace;
      font-size: 11.5px;
      color: #7c7a74;
    }

    /* + / - 회전 아이콘 */
    .binder-plus {
      width: 28px;
      height: 28px;
      border: 1px solid #cbc8c0;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: ui-monospace, Menlo, monospace;
      font-size: 16px;
      color: #555450;
      flex-shrink: 0;
      transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.25s ease, color 0.25s ease;
    }
    .binder-folder.is-open .binder-plus {
      transform: rotate(45deg);
      background: #1a1a1a;
      border-color: #1a1a1a;
      color: #faf9f7;
    }

    /* 부드러운 아코디언 펼침 모션 (grid-template-rows 트릭) */
    .binder-panel {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .binder-folder.is-open .binder-panel {
      grid-template-rows: 1fr;
    }

    .binder-panel-inner {
      overflow: hidden;
    }

    /* 안쪽 서류 시트 */
    .binder-sheet {
      padding: 0 26px 28px;
      border-top: 1px dashed #dcdad5;
      margin-top: 2px;
      padding-top: 22px;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.35s ease 0.1s, transform 0.4s ease 0.1s;
    }
    .binder-folder.is-open .binder-sheet {
      opacity: 1;
      transform: translateY(0);
    }

    .sheet-grid {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 28px;
      align-items: start;
    }
    .sheet-grid:has(.sheet-images:empty) {grid-template-columns: 1fr;}

    .sheet-images {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .sheet-images figure { margin: 0; }
    .sheet-images img {
      width: 100%;
      border: 1px solid #dcdad5;
      background: #f5f4f0;
    }
    .sheet-images figcaption {
      margin-top: 6px;
      font-family: ui-monospace, Menlo, monospace;
      font-size: 11px;
      color: #7c7a74;
    }

    .sheet-meta {
      font-family: ui-monospace, Menlo, monospace;
      font-size: 11.5px;
      color: #7c7a74;
      margin-bottom: 12px;
    }
    .sheet-excerpt p {
      font-size: 14px;
      line-height: 1.7;
      color: #3a3936;
      margin-bottom: 12px;
    }

    .sheet-pdf-btn {
      display: inline-block;
      margin-top: 10px;
      padding: 11px 18px;
      border: 1px solid #1a1a1a;
      color: #1a1a1a;
      text-decoration: none;
      font-family: ui-monospace, Menlo, monospace;
      font-size: 12px;
      letter-spacing: 0.03em;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .sheet-pdf-btn:hover {
      background: #1a1a1a;
      color: #faf9f7;
    }

    @media (max-width: 780px) {
      .binder-tab { margin-left: 0 !important; }
      .binder-trigger { padding: 16px 18px; }
      .binder-sheet { padding: 18px; }
      .sheet-grid { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);
}

function initArchivalDocs() {
  const host = document.getElementById("archival-docs");
  if (!host) return;

  injectBinderStyles();

  const paperTones = ["#f6f4ee", "#f1eee7", "#ece8df", "#e7e3d9"];

  host.innerHTML = `
    <div class="container">
      <p class="eyebrow mono-meta">05 · ARCHIVAL BINDER</p>
      <h2>공문서 · 지적도 바인더</h2>
      <p class="section-desc">종이 위의 개발 계획과 지표면의 현실을 서류철처럼 묶었습니다. 각 폴더 탭을 누르면 안쪽의 도면·조감도와 원본 PDF가 펼쳐집니다.</p>

      <div class="binder-stack">
        ${ARCHIVE_DOCS.map((doc, idx) => `
          <div class="binder-folder" style="--folder-bg: ${paperTones[idx]}; --tab-offset: ${idx * 26}px;">
            <div class="binder-tab" data-toggle="${idx}">
              <span>${doc.id}</span>
              <span>${doc.tabLabel}</span>
            </div>
            <div class="binder-card">
              <button class="binder-trigger" type="button" data-toggle="${idx}" aria-expanded="false">
                <div class="binder-trigger-text">
                  <p class="binder-quote">${doc.quote}</p>
                  <span class="binder-sub">${doc.title}</span>
                </div>
                <span class="binder-plus">+</span>
              </button>
              <div class="binder-panel">
                <div class="binder-panel-inner">
                  <div class="binder-sheet">
                    <div class="sheet-grid">
                      <div class="sheet-images">
                        ${doc.images.map(img => `
                          <figure>
                            <img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.parentElement.style.display='none'" />
                            <figcaption>${img.caption}</figcaption>
                          </figure>
                        `).join("")}
                      </div>
                      <div class="sheet-info">
                        <p class="sheet-meta">${doc.meta}</p>
                        <div class="sheet-excerpt">
                          ${doc.excerpt.map(line => `<p>${line}</p>`).join("")}
                        </div>
                        <a href="${doc.pdf}" target="_blank" rel="noopener" class="sheet-pdf-btn">원본 PDF 새 창에서 열기 ↗</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const folders = host.querySelectorAll(".binder-folder");
  host.querySelectorAll("[data-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = Number(el.dataset.toggle);
      const target = folders[idx];
      const willOpen = !target.classList.contains("is-open");
      folders.forEach((f) => {
        f.classList.remove("is-open");
        f.querySelector(".binder-trigger").setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        target.classList.add("is-open");
        target.querySelector(".binder-trigger").setAttribute("aria-expanded", "true");
      }
    });
  });
}

initArchivalDocs();
