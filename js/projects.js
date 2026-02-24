// Projects Data
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with real-time inventory management and secure payment processing.",
    tags: ["Python", "Html", "CSS", "C"],
    image: "assets/images/projects/project1.jpg", // Add your project image here
    links: {
      demo: "https://example.com",
      github: "https://github.com/yourusername/project1",
    },
  },
  {
    id: 2,
    title: "Design System Library",
    description:
      "Comprehensive component library with accessible, customizable UI elements for modern web apps.",
    tags: ["TypeScript", "React", "Storybook"],
    image: "assets/images/projects/project2.jpg",
    links: {
      demo: "https://example.com",
      github: "https://github.com/yourusername/project2",
    },
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization platform with interactive charts and AI-powered insights.",
    tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    image: "assets/images/projects/project3.jpg",
    links: {
      demo: "https://example.com",
      github: "https://github.com/yourusername/project3",
    },
  },
];

// Current filter state
let currentFilter = "all";

// Get unique tags for filter buttons
function getUniqueTags() {
  const allTags = PROJECTS.flatMap((project) => project.tags);
  return ["all", ...new Set(allTags.map((tag) => tag.toLowerCase()))];
}

// Filter projects by tag
function filterProjects(tag) {
  currentFilter = tag.toLowerCase();

  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });

  // Filter and render
  const filteredProjects =
    currentFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.tags.some((t) => t.toLowerCase() === currentFilter),
        );

  renderProjects(filteredProjects);
}

// Render filter buttons
function renderFilters() {
  const projectsHeader = document.querySelector(".projects-header");
  if (!projectsHeader) return;

  const filterContainer = document.createElement("div");
  filterContainer.className = "filter-container";
  filterContainer.innerHTML = `
        <div class="filter-buttons">
            ${getUniqueTags()
              .map(
                (tag) => `
                <button 
                    class="filter-btn ${tag === "all" ? "active" : ""}" 
                    data-filter="${tag}"
                    onclick="filterProjects('${tag}')"
                    aria-label="Filter by ${tag}"
                >
                    ${tag.toUpperCase()}
                </button>
            `,
              )
              .join("")}
        </div>
    `;

  projectsHeader.appendChild(filterContainer);
}

// Function to render projects with lazy loading
function renderProjects(projects = PROJECTS) {
  const projectsGrid = document.getElementById("projectsGrid");

  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card" data-tags="${project.tags.join(",").toLowerCase()}">
            ${
              project.image
                ? `
                <img 
                    src="${project.image}" 
                    alt="${project.title}" 
                    class="project-image"
                    loading="lazy"
                    onerror="this.style.display='none'"
                />
            `
                : ""
            }
            <div class="project-number">${String(project.id).padStart(2, "0")}</div>
            <div class="project-content">
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="tag">${tag.toUpperCase()}</span>`).join("")}
                </div>
                <div class="project-links">
                    ${project.links.demo ? `<a href="${project.links.demo}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} demo">Demo →</a>` : ""}
                    ${project.links.github ? `<a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} on GitHub">GitHub →</a>` : ""}
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  // Add fade-in animation
  const cards = projectsGrid.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Initialize projects when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderFilters();
    renderProjects();
  });
} else {
  renderFilters();
  renderProjects();
}
