document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.querySelectorAll(".tag-filter[data-filter]").forEach((filterBar) => {
  const grid = filterBar.nextElementSibling;
  const cards = [...grid.querySelectorAll(".cert-card")];

  const tags = [...new Set(
    cards.flatMap((card) => [...card.querySelectorAll(".cert-tags .tag")].map((t) => t.textContent.trim()))
  )].sort();

  const makeButton = (label, tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tag-filter-btn";
    btn.textContent = label;
    btn.dataset.tag = tag;
    return btn;
  };

  const allBtn = makeButton("All", "");
  allBtn.classList.add("active");
  filterBar.appendChild(allBtn);
  tags.forEach((tag) => filterBar.appendChild(makeButton(tag, tag)));

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".tag-filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".tag-filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tag = btn.dataset.tag;
    cards.forEach((card) => {
      const cardTags = [...card.querySelectorAll(".cert-tags .tag")].map((t) => t.textContent.trim());
      card.style.display = !tag || cardTags.includes(tag) ? "" : "none";
    });
  });
});
