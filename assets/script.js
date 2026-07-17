const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Récupérer la catégorie demandée
      const filterValue = this.dataset.filter;

      // Gestion du bouton actif
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      // Filtrage des images
      galleryItems.forEach((item) => {
        if (filterValue === "all") {
          item.classList.remove("d-none");
        } else if (item.classList.contains(filterValue)) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);

[...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Récupérer la catégorie demandée
      const filterValue = this.dataset.filter;

      // Gestion du bouton actif
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      // Filtrage des images
      galleryItems.forEach((item) => {
        if (filterValue === "all") {
          item.classList.remove("d-none");
        } else if (item.classList.contains(filterValue)) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });
});

//bugdet

const steps = document.querySelectorAll(".step");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("previous");

const progressBar = document.getElementById("progressBar");

const answers = document.querySelectorAll(".wedding-input");

const result = document.getElementById("result");

const budget = document.getElementById("budget");

let currentStep = 0;

function updateStep() {
  steps.forEach((step) => {
    step.classList.remove("active");
  });

  steps[currentStep].classList.add("active");

  let progress = ((currentStep + 1) / steps.length) * 100;

  progressBar.style.width = progress + "%";

  progressBar.innerHTML = Math.round(progress) + "%";

  prevBtn.disabled = currentStep === 0;

  if (currentStep === steps.length - 1) {
    nextBtn.innerHTML = "Voir mon estimation";
  } else {
    nextBtn.innerHTML = "Suivant →";
  }
}

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;

    updateStep();
  } else {
    calculateBudget();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;

    updateStep();
  }
});

function calculateBudget() {
  let total = 0;

  answers.forEach((answer) => {
    total += Number(answer.value);
  });

  steps.forEach((step) => {
    step.classList.remove("active");
  });

  result.classList.remove("d-none");

  nextBtn.style.display = "none";

  prevBtn.style.display = "none";

  budget.textContent = total.toLocaleString();

  progressBar.style.width = "100%";

  progressBar.textContent = "Terminé";
}

updateStep();

//end bugdet
