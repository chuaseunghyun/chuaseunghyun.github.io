/* ==========================================================================
   app.js — 갤러리 렌더링, 챕터 필터링, 한/영 전환, 라이트박스 동작
   ========================================================================== */

let currentLang = "ko";
let currentChapter = "all";
let visiblePhotos = [...PHOTOS];
let lightboxIndex = 0;

const galleryGrid = document.getElementById("galleryGrid");
const chapterNote = document.getElementById("chapterNote");
const statementContent = document.getElementById("statementContent");
const diptychContainer = document.getElementById("diptychContainer");
const langToggle = document.getElementById("langToggle");

// 라이트박스 요소
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbPlate = document.getElementById("lbPlate");
const lbRef = document.getElementById("lbRef");
const lbDesc = document.getElementById("lbDesc");

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

function renderGallery() {
  visiblePhotos =
    currentChapter === "all"
      ? [...PHOTOS]
      : PHOTOS.filter((p) => p.chapter === currentChapter);

  chapterNote.textContent = CHAPTER_NOTES[currentChapter] || "";

  galleryGrid.innerHTML = visiblePhotos
    .map(
      (item, idx) => `
      <article class="plate-card" data-idx="${idx}">
        <div class="plate-thumb-wrap">
          <img src="images/thumbs/${item.file}" alt="${item.desc}" loading="lazy" />
        </div>
        <div class="plate-meta">
          <span class="mono-meta">${item.plate} · ${item.file.replace(".jpg", "")}</span>
          <span class="mono-meta">${item.ref}</span>
        </div>
        <p class="plate-desc">${item.desc}</p>
      </article>
    `
    )
    .join("");

  galleryGrid.querySelectorAll(".plate-card").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(Number(card.getAttribute("data-idx")));
    });
  });
}

function renderDiptychs() {
  diptychContainer.innerHTML = DIPTYCHS.map(
    (d) => `
    <div class="diptych-block">
      <div class="diptych-block-head">
        <span class="mono-meta">${d.title}</span>
        <span class="mono-meta">${d.tag}</span>
      </div>
      <div class="diptych-pair">
        <figure class="diptych-item">
          <img src="images/full/${d.left.file}" alt="${d.left.caption}" loading="lazy" data-file="${d.left.file}" />
          <figcaption>${d.left.caption}</figcaption>
        </figure>
        <figure class="diptych-item">
          <img src="images/full/${d.right.file}" alt="${d.right.caption}" loading="lazy" data-file="${d.right.file}" />
          <figcaption>${d.right.caption}</figcaption>
        </figure>
      </div>
    </div>
  `
  ).join("");
}

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
  lbImg.src = `images/full/${item.file}`;
  lbImg.alt = item.desc;
  lbPlate.textContent = `${item.plate}  |  ${item.file.replace(".jpg", "")}  |  인천 중구 운북동 [지번]`;
  lbRef.textContent = `Ref. ${item.ref}`;
  lbDesc.textContent = item.desc;
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + visiblePhotos.length) % visiblePhotos.length;
  updateLightbox();
}

// 이벤트 연결
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

// 초기 화면 실행
renderLanguage();
renderGallery();
renderDiptychs();
