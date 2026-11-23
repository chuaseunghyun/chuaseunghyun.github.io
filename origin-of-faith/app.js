/* ==========================================================================
   app.js — 『믿음의 근원』 한/영 작업노트 전환, 10컷 갤러리, 라이트박스, 스크롤 모션
   ========================================================================== */

const SITE_TEXT = {
  ko: {
    navStatement: "Statement",
    navPlates: "Plates",
    eyebrow: "02 · PHOTOGRAPHY ARCHIVE · 2024 – 2026",
    title: "믿음의 근원",
    subtitle: "텅 빈 한국 성당 열 곳의 제대를 정면으로 마주하며 기록한 믿음의 공간과 빛",
    statementLabel: "ARTIST STATEMENT",
    platesLabel: "PLATES · 01 – 11",
    statementParagraphs: [
      "인간은 수 세기 동안 보이지 않는 것을 믿기 위해 최선을 다해왔다. 제단과 사제, 손안의 작은 묵주와 상징, 그리고 발을 딛는 땅 위에 세워진 성전에 이르기까지, 믿음은 늘 구체적인 형태를 빌려 세상에 남았다.",
      "나는 여러 종교 가운데 한국 천주교의 공간에 집중한다. 조선 후기, 믿는다는 사실 하나만으로 생명을 잃어야 했던 뼈아픈 박해의 역사를 견뎌 내며 한국 천주교는 이 땅의 종교로서 자리매김했다. 그 치열한 시간의 흔적은 오늘날 각기 다른 시대의 얼굴을 한 성당 건축 곳곳에서 고요히 배어 나온다.",
      "텅 빈 성당의 중앙에 서면, 화려한 상징 너머로 고요한 빛의 흔적과 무거운 감정이 나를 짓누른다. 같은 거리와 정면의 시선으로 열 곳의 제대를 마주하며, 신자와 비신자를 가리지 않고 찾아오는 그 묵직한 울림의 근원을 기록한다."
    ]
  },
  en: {
    navStatement: "Statement",
    navPlates: "Plates",
    eyebrow: "02 · PHOTOGRAPHY ARCHIVE · 2024 – 2026",
    title: "Origin of Faith",
    subtitle: "Each empty Catholic sanctuaries in Korea, photographed head-on from the central aisle",
    statementLabel: "ARTIST STATEMENT",
    platesLabel: "PLATES · 01 – 11",
    statementParagraphs: [
      "For centuries, humanity has strived to believe in the unseen. From altars and priests to a small rosary held in the hand, symbols, and sanctuaries built upon the earth, faith has always taken tangible form to endure in the physical world.",
      "Among the many religious traditions in Korea, I focus on the spaces of Korean Catholicism. Having endured a painful history of persecution during the late Joseon dynasty—when belief alone cost lives—Korean Catholicism took deep root in this land. Traces of that fierce history quietly permeate the architecture of its churches across different eras.",
      "Standing at the center of an empty sanctuary, beyond the ornate symbols, traces of quiet light and a heavy, unspoken weight press upon me. Facing each altars from the same distance and frontal perspective, I record the source of that profound resonance—an experience that arrives regardless of whether one believes."
    ]
  }
};

let currentLang = "ko";
let photos = [];
let lightboxIndex = 0;

const galleryGrid = document.getElementById("galleryGrid");
const statementContent = document.getElementById("statementContent");
const langToggle = document.getElementById("langToggle");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbPlate = document.getElementById("lbPlate");
const lbDesc = document.getElementById("lbDesc");

// 1) 스크롤 등장 모션
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

// 2) 상단 2px 스크롤 진행선
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = `${percent}%`;
});

// 3) 한/영 텍스트 전환
function renderLanguage() {
  const dict = SITE_TEXT[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  statementContent.innerHTML = dict.statementParagraphs
    .map((p) => `<p>${p}</p>`)
    .join("");
  langToggle.textContent = currentLang === "ko" ? "EN" : "KO";
}

// 4) 10컷 갤러리 렌더링
function renderGallery() {
  galleryGrid.innerHTML = photos
    .map(
      (item, idx) => `
      <article class="plate-card reveal" data-idx="${idx}">
        <div class="plate-thumb-wrap">
          <img src="${item.image}" alt="${item.desc || item.plate}" loading="lazy" />
        </div>
        <div class="plate-meta">
          <span class="mono">${item.plate}</span>
          <span class="mono">${item.ref || ""}</span>
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

// 5) 라이트박스 제어
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
  const item = photos[lightboxIndex];
  if (!item) return;
  lbImg.src = item.image;
  lbImg.alt = item.desc || item.plate;
  lbPlate.textContent = item.plate;
  lbDesc.textContent = item.desc || "";
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + photos.length) % photos.length;
  updateLightbox();
}

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

// 6) 초기 실행
async function init() {
  renderLanguage();
  observeReveals();
  try {
    const res = await fetch("photo.json");
    const data = await res.json();
    photos = data.items || [];
    renderGallery();
  } catch (err) {
    console.error("photo.json 로딩 오류:", err);
  }
}

init();
