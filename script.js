// Update these values when project screenshots, hosted URLs, or profiles are ready.
const portfolioRepositoryUrl = "https://github.com/ismailuG/ismailug";
const portfolioData = {
  projects: [
    {
      name: "Nini's Corner",
      category: "Food & Hospitality",
      description: "A modern restaurant website featuring an inviting visual experience, interactive menu browsing, and an order cart with a WhatsApp checkout flow.",
      technologies: ["HTML", "CSS", "JavaScript"],
      screenshotPath: "nini.png",
      screenshotAvailable: true,
      localPreviewPath: "./nini/index.html",
      liveWebsiteUrl: "ADD_NINI_CORNER_LIVE_WEBSITE_URL",
      githubUrl: "REPLACE_WITH_NINI_CORNER_GITHUB_REPOSITORY_URL",
      theme: "restaurant",
      mark: "N",
      note: "WhatsApp checkout needs the restaurant's number configured in nini/script.js. Add a real screenshot at assets/images/nini-corner-preview.png."
    },
    {
      name: "SkyCast",
      category: "Weather Technology",
      description: "A responsive weather application that lets users search for locations and explore current conditions, hourly weather, and a 7-day forecast.",
      technologies: ["HTML", "CSS", "JavaScript", "Open-Meteo API"],
      screenshotPath: "weather.png",
      screenshotAvailable: true,
      localPreviewPath: "./ugg/index.html",
      liveWebsiteUrl: "ADD_ATMOS_LIVE_WEBSITE_URL",
      githubUrl: "REPLACE_WITH_ATMOS_GITHUB_REPOSITORY_URL",
      theme: "sky",
      mark: "A",
      note: "The local app is currently branded SkyCast and uses Open-Meteo. Add a real screenshot at assets/images/atmos-preview.png."
    },
    {
      name: "MILA",
      category: "Fashion & E-commerce",
      description: "A contemporary fashion storefront featuring modest fashion, footwear, scarves, and traditional clothing, with interactive product browsing and a demo shopping bag.",
      technologies: ["HTML", "CSS", "JavaScript"],
      screenshotPath: "mila.png",
      screenshotAvailable: true,
      localPreviewPath: "./milla/index.html",
      liveWebsiteUrl: "ADD_MILA_LIVE_WEBSITE_URL",
      githubUrl: "REPLACE_WITH_MILA_GITHUB_REPOSITORY_URL",
      theme: "fashion",
      mark: "M",
      note: "The catalogue and checkout are demo content; WhatsApp ordering needs configuration in milla/app.js. Add a real screenshot at assets/images/mila-preview.png."
    },
    {
      name: "God'sown Gadget",
      category: "Electronics E-commerce Website",
      description: "A modern electronics shopping platform designed to help customers discover smartphones, laptops, smartwatches, audio devices, and everyday tech accessories. Features a premium shopping experience with product browsing, search, filtering, and cart functionality, with a foundation for future secure online payments.",
      technologies: ["HTML", "CSS", "JavaScript"],
      screenshotPath: "gad.png",
      screenshotAvailable: true,
      localPreviewPath: "./gadget/index.html",
      previewLabel: "VIEW PROJECT",
      theme: "gadget",
      mark: "GG",
      note: "Opens the local demo. Checkout does not process payments; secure online payments are not configured."
    }
  ],
  contact: {
    email: "talkismail607@gmail.com",
    github: "https://github.com/ismailuG",
    linkedin: "REPLACE_WITH_LINKEDIN_PROFILE_URL",
    whatsapp: "2347084468807c:\Users\HP\Downloads\nini src.png c:\Users\HP\Downloads\milla src.png c:\Users\HP\Downloads\gad src.png c:\Users\HP\Downloads\weather src.png"
  }
};

const placeholderValues = new Set([
  "ADD_SCREENSHOT_PATH",
  "REPLACE_WITH_LIVE_URL",
  "REPLACE_WITH_GITHUB_URL",
  "REPLACE_WITH_PORTFOLIO_REPOSITORY_URL",
  "ADD_EMAIL_ADDRESS",
  "REPLACE_WITH_GITHUB_PROFILE_URL",
  "REPLACE_WITH_LINKEDIN_PROFILE_URL",
  "ADD_WHATSAPP_NUMBER"
]);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function isConfigured(value) {
  return Boolean(value) && !placeholderValues.has(value) && !value.startsWith("REPLACE_") && !value.startsWith("ADD_");
}

function projectVisual(project) {
  if (project.screenshotAvailable) {
    return `<img class="project-screenshot" src="${escapeHtml(project.screenshotPath)}" alt="Screenshot of ${escapeHtml(project.name)}" loading="lazy">`;
  }

  return `<div class="project-art" data-theme="${escapeHtml(project.theme)}" role="img" aria-label="Screenshot placeholder for ${escapeHtml(project.name)}">
    <div class="art-placeholder"><span class="art-placeholder-mark" aria-hidden="true">${escapeHtml(project.mark)}</span><p class="art-placeholder-name">${escapeHtml(project.name)}</p><p class="art-placeholder-caption">Project screenshot placeholder</p></div>
  </div><span class="screenshot-note">SCREENSHOT TO BE ADDED</span>`;
}

function projectAction(url, label, options = {}) {
  if (!isConfigured(url)) {
    return `<button class="project-link is-disabled" type="button" disabled>${label}<small>ADD REPOSITORY URL</small></button>`;
  }

  const target = options.local ? "" : ' target="_blank" rel="noopener noreferrer"';
  return `<a class="project-link" href="${escapeHtml(url)}"${target}>${label}<span aria-hidden="true">↗</span></a>`;
}

function projectCard(project, index) {
  const technologies = project.technologies.map((technology) => `<li>${escapeHtml(technology)}</li>`).join("");
  const sourceCodeAction = isConfigured(project.githubUrl)
    ? projectAction(project.githubUrl, "VIEW SOURCE CODE")
    : "";

  return `<article class="project-card reveal">
    <div class="project-visual">${projectVisual(project)}</div>
    <div class="project-info">
      <div class="project-meta"><span>${escapeHtml(project.category)}</span><span class="project-number">${String(index + 1).padStart(2, "0")} / ${String(portfolioData.projects.length).padStart(2, "0")}</span></div>
      <h3>${escapeHtml(project.name)}</h3>
      <p class="project-description">${escapeHtml(project.description)}</p>
      <ul class="technology-list" aria-label="Technologies">${technologies}</ul>
      <div class="project-actions">${projectAction(project.localPreviewPath, project.previewLabel || "LIVE PREVIEW", { local: true })}${sourceCodeAction}</div>
      <p class="project-note">${escapeHtml(project.note)}</p>
    </div>
  </article>`;
}

function contactLink(label, value, href, placeholder) {
  const content = isConfigured(value)
    ? `<a class="contact-option-value" href="${escapeHtml(href)}">${escapeHtml(label === "WhatsApp" ? "Message on WhatsApp" : label === "Email" ? value : "View profile")} <span aria-hidden="true">↗</span></a>`
    : `<span class="contact-option-value is-placeholder">${escapeHtml(placeholder)}</span>`;

  return `<div class="contact-option"><span class="contact-option-label">${escapeHtml(label)}</span>${content}</div>`;
}

function renderContact() {
  const { email, github, linkedin, whatsapp } = portfolioData.contact;
  const emailCta = document.querySelector("#email-cta");
  if (isConfigured(email)) {
    emailCta.href = `mailto:${email}`;
    emailCta.textContent = "Start a conversation";
    emailCta.insertAdjacentHTML("beforeend", ' <span aria-hidden="true">↗</span>');
  } else {
    emailCta.setAttribute("aria-disabled", "true");
  }

  const whatsappUrl = isConfigured(whatsapp) ? `https://wa.me/${whatsapp.replace(/\D/g, "")}` : "";
  document.querySelector("#contact-options").innerHTML = [
    contactLink("Email", email, `mailto:${email}`, "Add email in script.js"),
    contactLink("GitHub", github, github, "Add profile URL in script.js"),
    contactLink("LinkedIn", linkedin, linkedin, "Add profile URL in script.js"),
    contactLink("WhatsApp", whatsapp, whatsappUrl, "Add number in script.js")
  ].join("");

  const footerSocials = [
    { label: "GitHub", value: github, href: github },
    { label: "LinkedIn", value: linkedin, href: linkedin },
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "WhatsApp", value: whatsapp, href: whatsappUrl }
  ];
  document.querySelector("#footer-socials").innerHTML = footerSocials.map(({ label, value, href }) =>
    isConfigured(value)
      ? `<a href="${escapeHtml(href)}"${label === "Email" ? "" : ' target="_blank" rel="noopener noreferrer"'}>${escapeHtml(label)}<span aria-hidden="true"> ↗</span></a>`
      : `<span class="footer-social-placeholder" aria-label="${escapeHtml(label)} profile not configured">${escapeHtml(label)}<small> not set</small></span>`
  ).join("");
}

document.querySelector("#project-list").innerHTML = portfolioData.projects.map(projectCard).join("");
renderContact();
document.querySelector("#current-year").textContent = new Date().getFullYear();

const repositoryCta = document.querySelector("#portfolio-repository-cta");
if (isConfigured(portfolioRepositoryUrl)) {
  repositoryCta.innerHTML = `<a class="button button-muted" href="${escapeHtml(portfolioRepositoryUrl)}" target="_blank" rel="noopener noreferrer">GitHub Repository <span aria-hidden="true">↗</span></a>`;
} else {
  repositoryCta.innerHTML = '<button class="button button-muted" type="button" disabled title="Replace REPLACE_WITH_PORTFOLIO_REPOSITORY_URL in script.js">GitHub Repository <span aria-hidden="true">↗</span></button>';
}

document.querySelector("#profile-photo").addEventListener("error", (event) => {
  event.currentTarget.hidden = true;
  document.querySelector("#portrait-placeholder").hidden = false;
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  primaryNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

document.addEventListener("error", (event) => {
  if (event.target instanceof HTMLImageElement && event.target.classList.contains("project-screenshot")) {
    const project = event.target.closest(".project-visual");
    const name = event.target.alt.replace(/^Screenshot of /, "");
    project.innerHTML = `<div class="project-art" role="img" aria-label="Screenshot placeholder for ${escapeHtml(name)}"><div class="art-placeholder"><span class="art-placeholder-mark" aria-hidden="true">uG</span><p class="art-placeholder-name">${escapeHtml(name)}</p><p class="art-placeholder-caption">Screenshot unavailable</p></div></div><span class="screenshot-note">SCREENSHOT TO BE ADDED</span>`;
  }
}, true);