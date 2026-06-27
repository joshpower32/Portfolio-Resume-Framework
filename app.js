/* =====================================================================
   Personal Portfolio / Resume — SHOWCASE CAROUSEL
   ---------------------------------------------------------------------
   A slideshow of complete portfolio/resume examples across careers.
   Arrow (or dots / keyboard ←→) to slide between PRESETS. Each preset has:
     • accent  — colour triple [brand, dark, soft]
     • style   — visual theme that changes layout/fonts/aesthetic:
                 "editorial" | "noir" | "warm" | "minimal" | "classic" | "bold"
   So every example looks genuinely different, not just recoloured.

   Sell a single example: set CAROUSEL_ENABLED = false, keep one preset,
   personalise its copy, and swap Pexels `query` for the client's real photos
   (set an `image:` on a work item, or replace `portraitQuery`).
   ===================================================================== */

const CONFIG = {
  pexelsKey: "4SuTxTJkprUsJAP1CZoSkd412wKx4EuXt7xfK5HzZf9DreiCe8Wv0twm",
  // === LEAD DELIVERY (set before selling) — free key at https://web3forms.com
  // Enter the client's email, paste the key here. Messages then email the
  // client. Until set, the form opens the visitor's email app as a fallback.
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
};
const CAROUSEL_ENABLED = true;

const PRESETS = [
  {
    id: "designer", label: "Product Designer", style: "editorial", accent: ["#4f46e5", "#3a32c0", "#e8e6fb"],
    name: "Jordan Bennett", role: "Product Designer & Developer",
    lede: "I craft clean, useful digital experiences — from first sketch to shipped product. Currently freelancing and open to new projects.",
    email: "hello@jordanbennett.example", location: "Toronto · Available worldwide", portraitQuery: "professional portrait man",
    about: ["I’m a designer-developer hybrid with eight years building products people enjoy using. I care about clear typography, thoughtful interactions, and interfaces that get out of the way.",
            "When I’m not designing, you’ll find me sketching, shooting film, or hunting for good coffee."],
    stats: [["8+", "Years experience"], ["40+", "Projects shipped"], ["20+", "Happy clients"]],
    skills: ["Product Design", "UI / UX", "Design Systems", "Prototyping", "Front-End Dev", "Webflow", "User Research", "Accessibility"],
    work: [
      { id: "w1", title: "Finch — Banking App", cat: "Product", query: "mobile app design" },
      { id: "w2", title: "Tidepool Dashboard", cat: "Web", query: "dashboard ui" },
      { id: "w3", title: "Maple Coffee Branding", cat: "Branding", query: "coffee brand packaging" },
      { id: "w4", title: "Atlas Design System", cat: "Product", query: "design system components" },
      { id: "w5", title: "Verde Marketing Site", cat: "Web", query: "website design laptop" },
      { id: "w6", title: "Lumen Identity", cat: "Branding", query: "logo branding mockup" }],
    experience: [
      ["2022 — Present", "Freelance Product Designer & Developer", "Self-employed", "Designing and building websites and product interfaces for startups and small businesses."],
      ["2019 — 2022", "Senior Product Designer", "Northwind Labs", "Led design on a B2B SaaS platform; built and maintained the design system."],
      ["2016 — 2019", "UI Designer & Front-End Developer", "Brightside Studio", "Designed and shipped marketing sites and web apps for agency clients."],
      ["2016", "B.Des, Interaction Design", "OCAD University", "Graduated with honours; focus on human-centred design."]],
    quote: "“Jordan took our vague idea and turned it into a product our customers love. Easily the best designer we’ve worked with.”",
    quoteBy: "— Morgan Lee, Founder at Tidepool",
    contact: "Have a project in mind, or just want to say hi? Drop me a line and I’ll get back to you soon.",
  },
  {
    id: "engineer", label: "Software Engineer", style: "noir", accent: ["#22d3ee", "#06b6d4", "#0e3a44"],
    name: "Daniel Okafor", role: "Full-Stack Software Engineer",
    lede: "I build reliable, well-tested web applications end to end — from database to interface. Open to senior and lead roles.",
    email: "daniel@danielokafor.example", location: "Remote · EST", portraitQuery: "software developer portrait",
    about: ["I’m a full-stack engineer with seven years shipping production software. I like clean architecture, good tests, and mentoring other developers.",
            "Comfortable across the stack, happiest solving gnarly problems with a small focused team."],
    stats: [["7 yrs", "Engineering"], ["30+", "Apps shipped"], ["1M+", "Users served"]],
    skills: ["JavaScript / TS", "React", "Node.js", "Python", "PostgreSQL", "AWS", "CI/CD", "System Design"],
    work: [
      { id: "w1", title: "Ledger — Fintech Platform", cat: "Web", query: "code on screen" },
      { id: "w2", title: "Pulse Analytics", cat: "Data", query: "data dashboard analytics" },
      { id: "w3", title: "Courier Mobile App", cat: "Mobile", query: "mobile app development" },
      { id: "w4", title: "Realtime Sync Engine", cat: "Web", query: "software development team" },
      { id: "w5", title: "Infra & Observability", cat: "Data", query: "server room data center" },
      { id: "w6", title: "Secure Auth Service", cat: "Mobile", query: "cybersecurity laptop" }],
    experience: [
      ["2021 — Present", "Senior Software Engineer", "Ledger", "Lead on payments services; mentor a team of four engineers."],
      ["2018 — 2021", "Full-Stack Developer", "Cloudpeak", "Built and scaled core product features."],
      ["2017 — 2018", "Junior Developer", "Beacon Apps", "Front-end and API work for client projects."],
      ["2017", "BSc, Computer Science", "University of Toronto", "Focus on distributed systems."]],
    quote: "“Daniel is the engineer you want on the hard problems. Calm, rigorous, and a genuine force-multiplier for the team.”",
    quoteBy: "— Priya N., Engineering Manager at Ledger",
    contact: "Hiring, or need a build partner? Here’s how to reach me.",
  },
  {
    id: "photographer", label: "Wedding Photographer", style: "warm", accent: ["#c65d6e", "#a4485a", "#f6dde4"],
    name: "Maya Chen", role: "Wedding & Portrait Photographer",
    lede: "I capture honest, timeless moments — weddings, couples, and portraits made to be looked back on for a lifetime.",
    email: "maya@mayachenphoto.example", location: "Hamilton, ON · Travels anywhere", portraitQuery: "female photographer portrait",
    about: ["I’ve been photographing love stories for ten years. My style is natural, warm, and candid — I’d rather catch a real laugh than a posed smile.",
            "Based in Hamilton and always happy to travel for the right story."],
    stats: [["10 yrs", "Behind the lens"], ["150+", "Weddings shot"], ["100%", "5-star reviews"]],
    skills: ["Weddings", "Portraits", "Engagements", "Events", "Natural Light", "Editorial", "Photo Editing", "Albums"],
    work: [
      { id: "w1", title: "Sarah & Tom — Vineyard Wedding", cat: "Weddings", query: "wedding photography" },
      { id: "w2", title: "Golden Hour Engagement", cat: "Engagements", query: "engagement couple photoshoot" },
      { id: "w3", title: "Studio Portraits", cat: "Portraits", query: "portrait photography studio" },
      { id: "w4", title: "Bridal Florals", cat: "Weddings", query: "wedding bouquet bride" },
      { id: "w5", title: "Family Session", cat: "Portraits", query: "family portrait outdoor" },
      { id: "w6", title: "Reception Celebration", cat: "Weddings", query: "wedding reception party" }],
    experience: [
      ["2018 — Present", "Owner & Lead Photographer", "Maya Chen Photography", "Full-service wedding and portrait studio serving Southern Ontario."],
      ["2015 — 2018", "Associate Photographer", "Evergreen Studios", "Second-shooter and editor for 200+ weddings."],
      ["2014 — 2015", "Photography Assistant", "Lumière Photo", "Lighting, set-up, and post-production."],
      ["2014", "Diploma, Photography", "Mohawk College", "Specialised in portraiture and digital editing."]],
    quote: "“Maya made us feel completely at ease, and the photos are beyond anything we imagined.”",
    quoteBy: "— Sarah & Tom, married 2024",
    contact: "Planning a wedding or want a portrait session? Tell me your date and your story.",
  },
  {
    id: "marketer", label: "Marketing Strategist", style: "bold", accent: ["#0e9f6e", "#0b7d56", "#d4f3e6"],
    name: "Marcus Reed", role: "Marketing & Brand Strategist",
    lede: "I help brands find their voice and grow — strategy, campaigns, and content that actually move the numbers.",
    email: "marcus@marcusreed.example", location: "Remote · GTA", portraitQuery: "businessman portrait professional",
    about: ["For nine years I’ve built marketing strategies for everyone from scrappy startups to national brands. I’m equally at home in a spreadsheet and a brainstorm.",
            "I believe great marketing starts with a genuinely clear message."],
    stats: [["9 yrs", "In marketing"], ["3.2x", "Avg. ROI lift"], ["60+", "Brands grown"]],
    skills: ["Brand Strategy", "Content", "SEO / SEM", "Social Media", "Email", "Analytics", "Paid Ads", "Copywriting"],
    work: [
      { id: "w1", title: "Northstar Rebrand", cat: "Branding", query: "brand strategy meeting" },
      { id: "w2", title: "Q4 Growth Campaign", cat: "Campaigns", query: "marketing campaign" },
      { id: "w3", title: "Social Content Engine", cat: "Social", query: "social media content creation" },
      { id: "w4", title: "Lifecycle Email Program", cat: "Campaigns", query: "email marketing laptop" },
      { id: "w5", title: "Brand Voice Guide", cat: "Branding", query: "brand guidelines book" },
      { id: "w6", title: "Influencer Launch", cat: "Social", query: "influencer phone camera" }],
    experience: [
      ["2021 — Present", "Independent Marketing Strategist", "Self-employed", "Fractional marketing lead for growth-stage brands."],
      ["2018 — 2021", "Marketing Manager", "Brightwave Media", "Ran multi-channel campaigns and a team of five."],
      ["2015 — 2018", "Digital Marketing Specialist", "Anchor & Co.", "SEO, paid social, and email."],
      ["2015", "BComm, Marketing", "McMaster University", "Honours, marketing concentration."]],
    quote: "“Marcus rebuilt our entire funnel and tripled our qualified leads in two quarters. He just gets it.”",
    quoteBy: "— Dana W., VP Growth at Northstar",
    contact: "Need a marketing strategy that performs? Let’s talk about your goals.",
  },
  {
    id: "architect", label: "Architect", style: "minimal", accent: ["#9a7b4f", "#7a5f38", "#ece3d4"],
    name: "Sofia Almeida", role: "Architect & Interior Designer",
    lede: "I design spaces that are calm, functional, and built to last — homes and interiors shaped around the people who live in them.",
    email: "studio@sofiaalmeida.example", location: "Toronto · Projects across Ontario", portraitQuery: "architect woman portrait",
    about: ["I lead a small studio focused on residential architecture and interiors. My work is quiet, material-honest, and detail-obsessed.",
            "Licensed architect (OAA) with a love for natural light and good joinery."],
    stats: [["12 yrs", "Designing"], ["75+", "Projects"], ["6", "Design awards"]],
    skills: ["Residential", "Interiors", "Renovations", "3D Modelling", "Permits", "Material Design", "Space Planning", "Sustainability"],
    work: [
      { id: "w1", title: "Ravine House", cat: "Residential", query: "modern architecture house" },
      { id: "w2", title: "Loft Living Room", cat: "Interiors", query: "interior design living room" },
      { id: "w3", title: "Studio Office Fit-out", cat: "Commercial", query: "office interior design" },
      { id: "w4", title: "Concept Model", cat: "Residential", query: "architecture model" },
      { id: "w5", title: "Minimalist Kitchen", cat: "Interiors", query: "minimalist kitchen interior" },
      { id: "w6", title: "Glass Facade", cat: "Commercial", query: "building facade architecture" }],
    experience: [
      ["2019 — Present", "Principal Architect", "Almeida Studio", "Residential and interior projects, concept through construction."],
      ["2014 — 2019", "Project Architect", "Harbour Architects", "Led custom homes and mid-rise interiors."],
      ["2011 — 2014", "Intern Architect", "Field Office", "Drafting, detailing, and permits."],
      ["2011", "M.Arch", "University of Waterloo", "Master of Architecture, with distinction."]],
    quote: "“Sofia understood exactly how we wanted to live. The house feels effortless — every detail considered.”",
    quoteBy: "— The Patel Family, Ravine House",
    contact: "Building or renovating? Share your site and your vision and let’s begin.",
  },
  {
    id: "nurse", label: "Healthcare", style: "classic", accent: ["#0d7d7d", "#0a5e5e", "#cdeaea"],
    name: "Grace Adeyemi", role: "Registered Nurse, BScN",
    lede: "Compassionate, experienced registered nurse with a decade of acute-care and community health experience.",
    email: "grace.adeyemi@example.com", location: "Hamilton, ON", portraitQuery: "nurse portrait professional",
    about: ["I’m a registered nurse with ten years across acute care, emergency, and community health. I’m known for calm under pressure, careful assessment, and genuine patient care.",
            "Seeking a charge-nurse or clinical-educator role where I can lead and mentor."],
    stats: [["10 yrs", "RN experience"], ["3", "Specialty units"], ["BScN", "+ ACLS / CPR"]],
    skills: ["Acute Care", "Emergency", "Patient Assessment", "Medication Admin", "Charge Nurse", "Mentoring", "EMR / Epic", "Care Planning"],
    work: [
      { id: "w1", title: "Emergency Department", cat: "Clinical", query: "hospital corridor" },
      { id: "w2", title: "Community Health Outreach", cat: "Community", query: "healthcare community" },
      { id: "w3", title: "Clinical Mentorship", cat: "Leadership", query: "nurse team meeting" },
      { id: "w4", title: "Acute Care Ward", cat: "Clinical", query: "hospital ward" },
      { id: "w5", title: "Patient Education", cat: "Community", query: "medical consultation" },
      { id: "w6", title: "Charge Nurse Rotation", cat: "Leadership", query: "nurse station hospital" }],
    experience: [
      ["2019 — Present", "Registered Nurse, Emergency", "Hamilton General Hospital", "Triage, acute interventions, and charge-nurse shifts."],
      ["2015 — 2019", "RN, Acute Medicine", "St. Joseph’s Healthcare", "Medical-surgical unit; preceptor for new graduates."],
      ["2013 — 2015", "Community Health Nurse", "Public Health Unit", "Home visits and health education."],
      ["2013", "BScN", "McMaster University", "Bachelor of Science in Nursing."]],
    quote: "“Grace is the nurse you want on your hardest day — skilled, steady, and deeply kind.”",
    quoteBy: "— Dr. S. Mehta, Emergency Physician",
    contact: "For employment references or opportunities, please get in touch.",
  },
  {
    id: "musician", label: "Music Producer", style: "noir", accent: ["#a855f7", "#8b3ee0", "#2a1640"],
    name: "Kai Nakamura", role: "Music Producer & DJ",
    lede: "Beats, mixes, and sets that move rooms. I produce, mix, and perform electronic music — and score for brands and film.",
    email: "kai@kainakamura.example", location: "Toronto · Touring", portraitQuery: "dj music producer",
    about: ["I’ve spent eight years producing and performing electronic music, from club sets to brand soundtracks. Big on mood, texture, and a clean low end.",
            "Open to releases, remixes, sync licensing, and bookings."],
    stats: [["8 yrs", "Producing"], ["50+", "Releases"], ["2M+", "Streams"]],
    skills: ["Production", "Mixing", "Mastering", "DJ Sets", "Sound Design", "Sync / Film", "Ableton", "Remixing"],
    work: [
      { id: "w1", title: "Neon EP", cat: "Releases", query: "music studio mixer" },
      { id: "w2", title: "Warehouse Set", cat: "Live", query: "dj concert lights" },
      { id: "w3", title: "Brand Soundtrack", cat: "Sync", query: "recording studio" },
      { id: "w4", title: "Remix — ‘Drift’", cat: "Releases", query: "vinyl turntable" },
      { id: "w5", title: "Festival Mainstage", cat: "Live", query: "music festival crowd" },
      { id: "w6", title: "Film Score Cue", cat: "Sync", query: "synthesizer keyboard" }],
    experience: [
      ["2020 — Present", "Independent Producer & DJ", "Self-released / labels", "Releases, remixes, sync licensing, and live sets."],
      ["2017 — 2020", "Resident DJ", "Club Aurora", "Weekly residency and event curation."],
      ["2015 — 2017", "Studio Engineer", "Echo Room Studios", "Recording, mixing, and production assistance."],
      ["2015", "Diploma, Audio Production", "Harris Institute", "Music production and engineering."]],
    quote: "“Kai’s production is next-level — the mix is immaculate and the energy is unreal live.”",
    quoteBy: "— Mira L., label A&R",
    contact: "Bookings, remixes, or sync licensing? Reach out with the details.",
  },
  {
    id: "chef", label: "Private Chef", style: "warm", accent: ["#c0492f", "#9a3722", "#f7dccf"],
    name: "Luca Romano", role: "Private Chef & Culinary Consultant",
    lede: "Seasonal, ingredient-led cooking for private dinners, events, and pop-ups — restaurant-quality food at your table.",
    email: "luca@lucaromano.example", location: "Hamilton · Available for events", portraitQuery: "chef portrait kitchen",
    about: ["Trained in Italian kitchens, I cook seasonal menus built around the best local ingredients. From intimate dinners to private events, every plate is made with care.",
            "Have a date and a vibe in mind? Let’s design a menu together."],
    stats: [["14 yrs", "In kitchens"], ["500+", "Events catered"], ["★", "Michelin background"]],
    skills: ["Private Dining", "Event Catering", "Menu Design", "Italian Cuisine", "Seasonal Menus", "Wine Pairing", "Pop-ups", "Classes"],
    work: [
      { id: "w1", title: "Tasting Menu Dinner", cat: "Private Dining", query: "fine dining plate" },
      { id: "w2", title: "Summer Garden Party", cat: "Events", query: "catering buffet food" },
      { id: "w3", title: "Handmade Pasta", cat: "Cuisine", query: "fresh pasta" },
      { id: "w4", title: "Wedding Banquet", cat: "Events", query: "wedding dinner table" },
      { id: "w5", title: "Dessert Course", cat: "Cuisine", query: "plated dessert" },
      { id: "w6", title: "Chef’s Table Pop-up", cat: "Private Dining", query: "chef plating food" }],
    experience: [
      ["2020 — Present", "Private Chef & Consultant", "Self-employed", "Bespoke private dining and culinary consulting."],
      ["2016 — 2020", "Head Chef", "Osteria Lume", "Led a 12-person kitchen; seasonal Italian menu."],
      ["2012 — 2016", "Sous Chef", "La Tavola", "Pasta and sauce station; menu development."],
      ["2012", "Culinary Diploma", "George Brown College", "Italian Culinary Arts."]],
    quote: "“Luca cooked the dinner our guests still talk about. Flawless food and completely stress-free.”",
    quoteBy: "— Helena & Marco, anniversary dinner",
    contact: "Planning a dinner or event? Tell me the date, guest count, and any dietary needs.",
  },
  {
    id: "writer", label: "Writer & Editor", style: "minimal", accent: ["#3f3f46", "#27272a", "#e7e7ea"],
    name: "Eleanor Voss", role: "Freelance Writer & Editor",
    lede: "Words that land. I write and edit clear, compelling copy — articles, brand voice, and long-form — for people with something to say.",
    email: "eleanor@eleanorvoss.example", location: "Remote · Worldwide", portraitQuery: "writer portrait desk",
    about: ["I’ve spent twelve years turning rough ideas into sharp, readable prose for magazines, brands, and authors. I care about clarity, rhythm, and getting it right.",
            "Available for articles, editing, ghostwriting, and brand voice work."],
    stats: [["12 yrs", "Writing"], ["400+", "Pieces published"], ["30+", "Brands & authors"]],
    skills: ["Copywriting", "Editing", "Ghostwriting", "Brand Voice", "Long-form", "SEO Content", "Storytelling", "Proofreading"],
    work: [
      { id: "w1", title: "Feature: The Slow City", cat: "Articles", query: "magazine article" },
      { id: "w2", title: "Brand Voice Guide", cat: "Branding", query: "notebook writing" },
      { id: "w3", title: "Ghostwritten Memoir", cat: "Books", query: "open book pages" },
      { id: "w4", title: "Newsletter Series", cat: "Articles", query: "laptop writing coffee" },
      { id: "w5", title: "Website Copy", cat: "Branding", query: "typography design" },
      { id: "w6", title: "Edited Anthology", cat: "Books", query: "stack of books" }],
    experience: [
      ["2018 — Present", "Freelance Writer & Editor", "Self-employed", "Articles, editing, ghostwriting, and brand voice."],
      ["2014 — 2018", "Senior Editor", "Field Notes Magazine", "Commissioned and edited feature stories."],
      ["2011 — 2014", "Staff Writer", "The Local Review", "Reporting and long-form features."],
      ["2011", "BA, English & Journalism", "Western University", "Honours."]],
    quote: "“Eleanor took my tangled draft and made it sing — without losing my voice. A rare editor.”",
    quoteBy: "— Daniel R., author",
    contact: "Got a writing or editing project? Tell me a bit about it and your timeline.",
  },
  {
    id: "fitness", label: "Fitness Coach", style: "bold", accent: ["#f0612b", "#cf4a18", "#ffe0d2"],
    name: "Tasha Brooks", role: "Personal Trainer & Wellness Coach",
    lede: "Strength, energy, confidence — personalised training and coaching that fits your real life, in person or online.",
    email: "tasha@tashabrooks.example", location: "Hamilton · In-person & online", portraitQuery: "fitness trainer portrait",
    about: ["I help everyday people get strong and feel great with training that actually fits their schedule. No gimmicks — just consistent, smart coaching.",
            "Certified personal trainer and nutrition coach with a decade of experience."],
    stats: [["10 yrs", "Coaching"], ["300+", "Clients coached"], ["4.9★", "Client rating"]],
    skills: ["Strength Training", "Weight Loss", "Online Coaching", "Nutrition", "Mobility", "Group Classes", "Habit Coaching", "Programming"],
    work: [
      { id: "w1", title: "12-Week Strength Program", cat: "Training", query: "weight training gym" },
      { id: "w2", title: "Online Coaching", cat: "Online", query: "home workout" },
      { id: "w3", title: "Bootcamp Classes", cat: "Group", query: "group fitness class" },
      { id: "w4", title: "Mobility & Recovery", cat: "Training", query: "stretching mobility" },
      { id: "w5", title: "Nutrition Plans", cat: "Online", query: "healthy meal prep" },
      { id: "w6", title: "Outdoor Bootcamp", cat: "Group", query: "outdoor workout park" }],
    experience: [
      ["2019 — Present", "Independent Coach", "Self-employed", "In-person and online training and nutrition coaching."],
      ["2015 — 2019", "Senior Trainer", "Iron & Oak Gym", "Personal training and group programming."],
      ["2013 — 2015", "Group Fitness Instructor", "PulseFit", "Led HIIT and strength classes."],
      ["2013", "Certifications", "CSEP / Precision Nutrition", "CPT and nutrition coaching."]],
    quote: "“Tasha got me stronger than I’ve ever been and made it genuinely fun. Best decision I made this year.”",
    quoteBy: "— Jordan P., client of 2 years",
    contact: "Ready to start? Tell me your goals and whether you’d like in-person or online.",
  },
];

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (id) => document.getElementById(id);

// --- SVG fallback -------------------------------------------------------
function placeholderSVG(seed = 0) {
  const h = (seed * 53 + 230) % 360;
  return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image placeholder">
    <defs><linearGradient id="wg${seed}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${h},42%,86%)"/><stop offset="1" stop-color="hsl(${(h+30)%360},36%,78%)"/></linearGradient></defs>
    <rect width="300" height="200" fill="url(#wg${seed})"/>
    <rect x="60" y="55" width="180" height="90" rx="10" fill="#fff" opacity=".6"/>
    <circle cx="150" cy="100" r="22" fill="hsl(${h},55%,60%)" opacity=".8"/></svg>`;
}

// --- Pexels image cache (keyed per preset) ------------------------------
const IMG_CACHE_KEY = "portfolio_imgcache";
let imgCache = JSON.parse(localStorage.getItem(IMG_CACHE_KEY) || "{}");
const keyFor = (presetId, itemId) => `${presetId}:${itemId}`;
const cachedUrl = (k) => imgCache[k]?.url || null;

async function fetchPexels(query, orientation = "landscape") {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}`,
    { headers: { Authorization: CONFIG.pexelsKey } });
  if (!res.ok) return null;
  return (await res.json()).photos?.[0] || null;
}
function mediaHTML(k, fallbackSeed, title) {
  const url = cachedUrl(k);
  const credit = imgCache[k]?.photographer;
  if (url) return `<img src="${esc(url)}" alt="${esc(title)}"${credit ? ` title="Photo: ${esc(credit)} / Pexels"` : ""} loading="lazy">`;
  return placeholderSVG(fallbackSeed);
}

// --- Theme: accent colour + visual style class --------------------------
function applyTheme(p) {
  const r = document.documentElement.style;
  r.setProperty("--brand", p.accent[0]);
  r.setProperty("--brand-dark", p.accent[1]);
  r.setProperty("--brand-soft", p.accent[2]);
  document.body.className = `style-${p.style || "editorial"}`;
}

// --- Render one preset --------------------------------------------------
let activeCat = "All";
function renderPreset(p) {
  applyTheme(p);
  document.title = `${p.name} — ${p.role}`;
  const firstName = esc(p.name.split(" ")[0]);
  const lastName = esc(p.name.split(" ").slice(1).join(" "));
  const brandHTML = `${firstName}&nbsp;${lastName}<span class="brand-dot">.</span>`;
  $("brandName").innerHTML = brandHTML;
  $("brandNameFooter").innerHTML = brandHTML;
  $("pName").textContent = p.name;
  $("pRole").textContent = p.role;
  $("pLede").textContent = p.lede;
  $("pEmailIcon").href = `mailto:${p.email}`;
  $("pEmailFooter").href = `mailto:${p.email}`;

  $("pAbout").innerHTML = `<h2>About me</h2>` + p.about.map((t) => `<p>${esc(t)}</p>`).join("");
  $("pStats").innerHTML = p.stats.map(([n, l]) => `<div class="stat"><b>${esc(n)}</b><small>${esc(l)}</small></div>`).join("");
  $("pSkills").innerHTML = p.skills.map((s) => `<li>${esc(s)}</li>`).join("");

  $("pTimeline").innerHTML = p.experience.map(([date, title, org, desc]) =>
    `<li><div class="tl-date">${esc(date)}</div><div class="tl-body"><h3>${esc(title)}</h3><span class="tl-org">${esc(org)}</span><p>${esc(desc)}</p></div></li>`).join("");

  $("pQuote").textContent = p.quote;
  $("pQuoteBy").textContent = p.quoteBy;
  $("pContactBlurb").textContent = p.contact;
  $("pContactDirect").innerHTML = `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a><br>${esc(p.location)}`;

  activeCat = "All";
  renderFilters(p);
  renderWork(p);
  loadPortrait(p);
  hydrateWork(p);
}

function renderFilters(p) {
  const cats = ["All", ...new Set(p.work.map((w) => w.cat))];
  const el = $("workFilters");
  el.innerHTML = cats.map((c) => `<button class="filter-chip ${c === activeCat ? "active" : ""}" data-cat="${c}">${esc(c)}</button>`).join("");
  el.querySelectorAll(".filter-chip").forEach((b) =>
    b.addEventListener("click", () => { activeCat = b.dataset.cat; renderFilters(p); renderWork(p); }));
}
function renderWork(p) {
  const list = p.work.filter((w) => activeCat === "All" || w.cat === activeCat);
  $("workGrid").innerHTML = list.map((w, i) => {
    const k = keyFor(p.id, w.id);
    return `<figure class="work-item" data-id="${w.id}" data-full="${esc(cachedUrl(k) || "")}" tabindex="0" role="button" aria-label="View ${esc(w.title)}">
      ${mediaHTML(k, i + 1, w.title)}
      <figcaption class="work-cap"><h3>${esc(w.title)}</h3><span>${esc(w.cat)}</span><span class="work-view">View →</span></figcaption></figure>`;
  }).join("");
}
async function hydrateWork(p) {
  // Parallel fetch so all work images arrive together, not one-by-one.
  await Promise.all(p.work.map(async (w) => {
    const k = keyFor(p.id, w.id);
    if (cachedUrl(k)) return;
    try {
      const photo = await fetchPexels(w.query);
      if (!photo) return;
      imgCache[k] = { url: photo.src.large, photographer: photo.photographer };
      localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache));
      if (currentPreset().id !== p.id) return;
      const el = $("workGrid").querySelector(`.work-item[data-id="${w.id}"]`);
      if (el) { el.querySelector("svg, img")?.remove(); el.insertAdjacentHTML("afterbegin", mediaHTML(k, 1, w.title)); el.dataset.full = imgCache[k].url; }
    } catch (_) { /* keep SVG */ }
  }));
}
async function loadPortrait(p) {
  const el = $("heroPortrait");
  const k = keyFor(p.id, "__portrait");
  if (cachedUrl(k)) { el.style.backgroundImage = `url("${cachedUrl(k)}")`; return; }
  el.style.backgroundImage = "";
  try {
    const photo = await fetchPexels(p.portraitQuery, "portrait");
    if (photo) {
      imgCache[k] = { url: photo.src.large, photographer: photo.photographer };
      localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache));
      if (currentPreset().id === p.id) el.style.backgroundImage = `url("${photo.src.large}")`;
    }
  } catch (_) { /* gradient stays */ }
}

// --- Carousel -----------------------------------------------------------
let index = 0;
let animating = false;
const currentPreset = () => PRESETS[index];
const stage = $("stage");

function buildDots() {
  $("scDots").innerHTML = PRESETS.map((p, i) =>
    `<button class="sc-dot ${i === index ? "active" : ""}" data-i="${i}" role="tab" aria-label="${esc(p.label)}" title="${esc(p.label)}"></button>`).join("");
  $("scDots").querySelectorAll(".sc-dot").forEach((d) => d.addEventListener("click", () => goTo(+d.dataset.i)));
}
function updateBar() {
  $("scIndex").textContent = index + 1;
  $("scTotal").textContent = PRESETS.length;
  $("scLabel").textContent = currentPreset().label;
  $("scDots").querySelectorAll(".sc-dot").forEach((d, i) => d.classList.toggle("active", i === index));
}
function goTo(i, dirOverride) {
  const n = PRESETS.length;
  const target = (i + n) % n;
  if (animating) return;
  if (target === index && dirOverride === undefined) return;
  const dir = dirOverride !== undefined ? dirOverride : (target > index ? 1 : -1);
  animating = true;
  index = target;
  stage.style.transition = "opacity .2s ease, transform .2s ease";
  stage.style.opacity = "0";
  stage.style.transform = `translateX(${-dir * 26}px)`;
  setTimeout(() => {
    renderPreset(currentPreset());
    updateBar();
    window.scrollTo({ top: 0, behavior: "auto" });
    stage.style.transition = "none";
    stage.style.transform = `translateX(${dir * 26}px)`;
    void stage.offsetWidth;
    stage.style.transition = "opacity .25s ease, transform .25s ease";
    stage.style.opacity = "1";
    stage.style.transform = "translateX(0)";
    setTimeout(() => { animating = false; }, 260);
  }, 200);
}
const next = () => goTo(index + 1, 1);
const prev = () => goTo(index - 1, -1);

["scNext", "edgeNext"].forEach((id) => $(id).addEventListener("click", next));
["scPrev", "edgePrev"].forEach((id) => $(id).addEventListener("click", prev));
document.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea, select")) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

// --- Lightbox -----------------------------------------------------------
const lightbox = $("lightbox"), lightboxImg = $("lightbox-img");
function openLightbox(src, alt) { if (!src) return; lightboxImg.src = src; lightboxImg.alt = alt || ""; lightbox.classList.add("show"); document.body.style.overflow = "hidden"; }
function closeLightbox() { lightbox.classList.remove("show"); lightboxImg.src = ""; document.body.style.overflow = ""; }
$("workGrid").addEventListener("click", (e) => { const it = e.target.closest(".work-item"); if (it) openLightbox(it.dataset.full, it.querySelector("h3")?.textContent); });
$("workGrid").addEventListener("keydown", (e) => { const it = e.target.closest(".work-item"); if (it && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLightbox(it.dataset.full, it.querySelector("h3")?.textContent); } });
lightbox.addEventListener("click", (e) => { if (e.target !== lightboxImg) closeLightbox(); });

// --- Forms + misc -------------------------------------------------------
const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";
$("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const firstName = String(fd.get("name") || "there").split(" ")[0];
  const recipient = currentPreset().email;
  const btn = form.querySelector('button[type="submit"]');

  if (!CONFIG.web3formsKey || CONFIG.web3formsKey === KEY_PLACEHOLDER) {
    const subject = encodeURIComponent(`New message from your portfolio — ${fd.get("name") || ""}`);
    const body = encodeURIComponent([...fd.entries()].filter(([k]) => k !== "botcheck").map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    toast("Opening your email app to send your message…");
    return;
  }

  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", `🔔 NEW MESSAGE — Portfolio contact from ${fd.get("name") || "website"}`);
  fd.append("from_name", currentPreset().name || "Portfolio");
  btn.disabled = true; const orig = btn.textContent; btn.textContent = "Sending…";
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: fd });
    const data = await res.json();
    if (res.ok && data.success) {
      form.reset();
      toast(`Thanks ${firstName} — message received! I’ll reply soon.`);
      $("contactNote").textContent = "Message sent ✓ — you’ll get a reply by email.";
    } else { throw new Error(data.message || "Send failed"); }
  } catch (_) {
    toast(`Couldn’t send — please email ${recipient}.`);
    $("contactNote").textContent = `Something went wrong. Please email ${recipient} directly.`;
  } finally { btn.disabled = false; btn.textContent = orig; }
});
$("resumeDownload").addEventListener("click", (e) => { e.preventDefault(); toast("Add the client’s real CV PDF and link it here (see README)."); });

const navToggle = $("navToggle"), navLinks = $("navLinks");
navToggle.addEventListener("click", () => { const o = navLinks.classList.toggle("open"); navToggle.setAttribute("aria-expanded", o); });
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

let toastTimer;
function toast(msg) {
  const t = $("toast"); t.textContent = msg; t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove("show"); setTimeout(() => (t.hidden = true), 250); }, 3000);
}
$("year").textContent = new Date().getFullYear();

// --- Init ---------------------------------------------------------------
if (!CAROUSEL_ENABLED) { document.querySelector(".showcase-bar").style.display = "none"; document.querySelectorAll(".edge-arrow").forEach((a) => a.remove()); }
buildDots();
updateBar();
renderPreset(currentPreset());
