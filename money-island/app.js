/* ==========================================================================
   app.js — 갤러리, 챕터 필터링, 한/영 전환, 라이트박스, 스크롤 모션 완성본
   ========================================================================== */

let currentLang = "ko";
let currentChapter = "all";
let allPhotos = [];
let visiblePhotos = [];
let lightboxIndex = 0;

const galleryGrid = document.getElementById("galleryGrid");
const chapterNote = document.getElementById("chapterNote");
const statementContent = document.getElementById("statementContent");
const diptychContainer = document.getElementById("diptychContainer");
const langToggle = document.getElementById("langToggle");

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbPlate = document.getElementById("lbPlate");
const lbRef = document.getElementById("lbRef");
const lbDesc = document.getElementById("lbDesc");

// 1) 스크롤 등장 관찰자 (init보다 먼저 선언)
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
    revealObserver.observe(el);
  });
}

// 2) 상단 측량 눈금 스크롤 진행선
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = `${percent}%`;
});

// 3) 한/영 텍스트 렌더링
function renderLanguage() {
  const dict = SITE_TEXT[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  statementContent.innerHTML = dict.statementParagraphs
    .map((p) => `<p>${p}</p>`)
    .join("");
  langToggle.textContent = currentLang === "ko" ? "EN" : "KO";
}

// 4) 갤러리 렌더링
function renderGallery() {
  visiblePhotos =
    currentChapter === "all"
      ? [...allPhotos]
      : allPhotos.filter((p) => p.chapter === currentChapter);

  chapterNote.textContent = CHAPTER_NOTES[currentChapter] || "";

  galleryGrid.innerHTML = visiblePhotos
    .map(
      (item, idx) => `
      <article class="plate-card reveal" data-idx="${idx}">
        <div class="plate-thumb-wrap">
          <img src="${item.thumb || item.image}" alt="${item.desc}" loading="lazy" />
        </div>
        <div class="plate-meta">
          <span class="mono-meta">${item.plate}</span>
          <span class="mono-meta">${item.ref || ""}</span>
        </div>
        <p class="plate-desc">${item.desc || ""}</p>
      </article>
    `
    )
    .join("");

  galleryGrid.querySelectorAll(".plate-card").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(Number(card.getAttribute("data-idx")));
    });
  });

  observeReveals();
}

// 5) Diptych 렌더링
function renderDiptychs() {
  diptychContainer.innerHTML = DIPTYCHS.map(
    (d) => `
    <div class="diptych-block reveal">
      <div class="diptych-block-head">
        <span class="mono-meta">${d.title}</span>
        <span class="mono-meta">${d.tag}</span>
      </div>
      <div class="diptych-pair">
        <figure class="diptych-item">
          <img src="images/full/${d.left.file}" alt="${d.left.caption}" loading="lazy" />
          <figcaption>${d.left.caption}</figcaption>
        </figure>
        <figure class="diptych-item">
          <img src="images/full/${d.right.file}" alt="${d.right.caption}" loading="lazy" />
          <figcaption>${d.right.caption}</figcaption>
        </figure>
      </div>
    </div>
  `
  ).join("");

  observeReveals();
}

// 6) 라이트박스 제어
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const item = visiblePhotos[lightboxIndex];
  if (!item) return;
  lbImg.src = item.image;
  lbImg.alt = item.desc || "";
  lbPlate.textContent = `${item.plate}  |  인천 중구 운북동 [지번]`;
  lbRef.textContent = item.ref ? `Ref. ${item.ref}` : "";
  lbDesc.textContent = item.desc || "";
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + visiblePhotos.length) % visiblePhotos.length;
  updateLightbox();
}

// 7) 버튼·키보드 이벤트 연결
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentChapter = btn.getAttribute("data-chapter");
    renderGallery();
  });
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ko" ? "en" : "ko";
  renderLanguage();
});

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => stepLightbox(-1));
document.getElementById("lbNext").addEventListener("click", () => stepLightbox(1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

// 8) 초기 실행 (photo.json 불러오기)
async function init() {
  renderLanguage();
  renderDiptychs();
  try {
    let res = await fetch("photo.json");
    if (!res.ok) res = await fetch("photos.json");
    const data = await res.json();
    allPhotos = data.items || [];
    renderGallery();
  } catch (err) {
    console.error("JSON 로딩 오류:", err);
  }
}

init();
