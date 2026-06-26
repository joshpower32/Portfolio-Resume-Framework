/* =====================================================================
   Personal Portfolio / Resume framework
   ---------------------------------------------------------------------
   Personalise for a client:
   • Name, role, bio, stats, skills, experience, contact — all in index.html.
   • Work projects: edit the WORK array below (title, category, Pexels query).
   • Real images: give a project an `image:` path, or set HERO.portrait to a
     real headshot ("assets/me.jpg") to override the Pexels placeholder.
   • Contact form + CV download: see handlers below (wire to Formspree/Firebase,
     and point resumeDownload at a real PDF).
   ===================================================================== */

const CONFIG = {
  pexelsKey: "4SuTxTJkprUsJAP1CZoSkd412wKx4EuXt7xfK5HzZf9DreiCe8Wv0twm",
  portraitQuery: "professional portrait person",
};

// Work / portfolio pieces — `cat` drives the filter chips
const WORK = [
  { id: "w1", title: "Finch — Banking App",      cat: "Product",  query: "mobile app design" },
  { id: "w2", title: "Tidepool Dashboard",       cat: "Web",      query: "dashboard ui" },
  { id: "w3", title: "Maple Coffee Branding",    cat: "Branding", query: "coffee brand packaging" },
  { id: "w4", title: "Atlas Design System",      cat: "Product",  query: "design system components" },
  { id: "w5", title: "Verde Marketing Site",     cat: "Web",      query: "website design laptop" },
  { id: "w6", title: "Lumen Identity",           cat: "Branding", query: "logo branding mockup" },
];

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// --- SVG fallback (shown while a photo loads / if offline) -------------
function placeholderSVG(seed = 0) {
  const h = (seed * 53 + 230) % 360;
  return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Project image placeholder">
    <defs><linearGradient id="wg${seed}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${h},42%,86%)"/><stop offset="1" stop-color="hsl(${(h+30)%360},36%,78%)"/></linearGradient></defs>
    <rect width="300" height="200" fill="url(#wg${seed})"/>
    <rect x="60" y="55" width="180" height="90" rx="10" fill="#fff" opacity=".6"/>
    <circle cx="150" cy="100" r="22" fill="hsl(${h},55%,60%)" opacity=".8"/>
  </svg>`;
}

// --- Pexels image cache (shared pattern) ------------------------------
const IMG_CACHE_KEY = "portfolio_imgcache";
let imgCache = JSON.parse(localStorage.getItem(IMG_CACHE_KEY) || "{}");
const itemImage = (item) => item.image || imgCache[item.id]?.url || null;

async function fetchPexels(query, orientation = "landscape") {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}`,
    { headers: { Authorization: CONFIG.pexelsKey } }
  );
  if (!res.ok) return null;
  return (await res.json()).photos?.[0] || null;
}

function mediaHTML(item, seed) {
  const url = itemImage(item);
  const credit = imgCache[item.id]?.photographer;
  if (url) return `<img src="${esc(url)}" alt="${esc(item.title)}"${credit ? ` title="Photo: ${esc(credit)} / Pexels"` : ""} loading="lazy">`;
  return placeholderSVG(seed);
}

// --- Hero portrait ------------------------------------------------------
async function loadPortrait() {
  const el = document.getElementById("heroPortrait");
  const cached = imgCache["__portrait"]?.url;
  if (cached) { el.style.backgroundImage = `url("${cached}")`; return; }
  try {
    const photo = await fetchPexels(CONFIG.portraitQuery, "portrait");
    if (photo) {
      imgCache["__portrait"] = { url: photo.src.large, photographer: photo.photographer };
      localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache));
      el.style.backgroundImage = `url("${photo.src.large}")`;
    }
  } catch (_) { /* gradient fallback stays */ }
}

// --- Work grid + filters -----------------------------------------------
const workGrid = document.getElementById("workGrid");
const filtersEl = document.getElementById("workFilters");
let activeCat = "All";

function renderFilters() {
  const cats = ["All", ...new Set(WORK.map((w) => w.cat))];
  filtersEl.innerHTML = cats.map((c) =>
    `<button class="filter-chip ${c === activeCat ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  filtersEl.querySelectorAll(".filter-chip").forEach((b) =>
    b.addEventListener("click", () => { activeCat = b.dataset.cat; renderFilters(); renderWork(); }));
}
function renderWork() {
  const list = WORK.filter((w) => activeCat === "All" || w.cat === activeCat);
  workGrid.innerHTML = list.map((w, i) => `
    <figure class="work-item" data-id="${w.id}" data-full="${esc(itemImage(w) || "")}" tabindex="0" role="button" aria-label="View ${esc(w.title)}">
      ${mediaHTML(w, i + 1)}
      <figcaption class="work-cap"><h3>${esc(w.title)}</h3><span>${esc(w.cat)}</span></figcaption>
    </figure>`).join("");
}
function updateWorkMedia(w) {
  const el = workGrid.querySelector(`.work-item[data-id="${w.id}"]`);
  if (el) {
    el.querySelector("svg, img")?.remove();
    el.insertAdjacentHTML("afterbegin", mediaHTML(w, 1));
    el.dataset.full = itemImage(w) || "";
  }
}

async function hydrateWork() {
  for (const w of WORK) {
    if (itemImage(w)) { updateWorkMedia(w); continue; }
    try {
      const photo = await fetchPexels(w.query);
      if (!photo) continue;
      imgCache[w.id] = { url: photo.src.large, photographer: photo.photographer };
      localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache));
      updateWorkMedia(w);
    } catch (_) { /* keep SVG fallback */ }
  }
}

// --- Lightbox -----------------------------------------------------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
function openLightbox(src, alt) {
  if (!src) return;
  lightboxImg.src = src; lightboxImg.alt = alt || "";
  lightbox.classList.add("show"); document.body.style.overflow = "hidden";
}
function closeLightbox() { lightbox.classList.remove("show"); lightboxImg.src = ""; document.body.style.overflow = ""; }
workGrid.addEventListener("click", (e) => {
  const item = e.target.closest(".work-item");
  if (item) openLightbox(item.dataset.full, item.querySelector("h3")?.textContent);
});
workGrid.addEventListener("keydown", (e) => {
  const item = e.target.closest(".work-item");
  if (item && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLightbox(item.dataset.full, item.querySelector("h3")?.textContent); }
});
lightbox.addEventListener("click", (e) => { if (e.target !== lightboxImg) closeLightbox(); });

// --- Contact form + CV download ----------------------------------------
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // === WIRE UP REAL DELIVERY: Formspree action, or Firebase write =====
  const name = new FormData(e.target).get("name") || "";
  e.target.reset();
  toast(`Thanks ${String(name).split(" ")[0]} — message received! I’ll reply soon.`);
  document.getElementById("contactNote").textContent = "Demo: captured locally. Wire to email/Firebase for real delivery (see README).";
});
document.getElementById("resumeDownload").addEventListener("click", (e) => {
  // Point this at a real PDF: href="assets/jordan-bennett-cv.pdf" download
  e.preventDefault();
  toast("Add your real CV PDF and link it here (see README).");
});

// --- Mobile nav + misc --------------------------------------------------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove("show"); setTimeout(() => (t.hidden = true), 250); }, 3000);
}
document.getElementById("year").textContent = new Date().getFullYear();

// --- Init ---------------------------------------------------------------
renderFilters();
renderWork();
loadPortrait();
hydrateWork();
