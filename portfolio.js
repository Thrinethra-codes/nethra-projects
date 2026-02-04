/* function showDetails(sectionId) {
  const sections = document.querySelectorAll('.content-section');

  sections.forEach(section => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'flex';
  }
}

// Show Home section by default
window.onload = function () {
  showDetails('Home');
};*/
function showDetails(sectionId) {
  const sections = document.querySelectorAll(".content-section");

  sections.forEach(section => {
    section.style.display = "none";
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.style.display = "flex";
  }
}

// Default load
window.onload = () => {
  showDetails("Home");
};
