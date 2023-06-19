const navBtn = document.querySelector(".nav_btn");
const headerLinks = document.querySelector(".nav__header-ul");
const navHeaderLoginUl = document.querySelector(".nav__header-login--ul");
const closeBtn = document.querySelector("#close");

const navLinks = document.querySelectorAll(".nav__header-li");

const hideLinks = () => {
  headerLinks.style.transform = "translate(-100%)";
  navHeaderLoginUl.style.transform = "translate(-100%)";
};

const showLinks = () => {
  headerLinks.style.transform = "translate(0)";
  navHeaderLoginUl.style.transform = "translate(0)";
};

navBtn.addEventListener("click", () => {
  showLinks();
  closeBtn.classList.add("active__btn");
});

closeBtn.addEventListener("click", () => {
  hideLinks();
  closeBtn.classList.remove("active__btn");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 896) {
      hideLinks();
      closeBtn.classList.remove("active__btn");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 896) {
    showLinks();
  }
  if (window.innerWidth < 896) {
    hideLinks();
  }
});
/* search button*/

const searchBtn = document.getElementById("searchBtn");
// const headerLinks = document.querySelector(".nav__header-ul");
const headerSearch = document.querySelector(".header__search");
const clearBtn = document.querySelector(".header__search-icon2");
const clearInput = document.querySelector("#search");
const internalSearchBtn = document.querySelector(".header__search-icon1");

searchBtn.addEventListener("click", () => {
  headerSearch.style.display = "block";
  searchBtn.style.display = "none";
  headerLinks.classList.add("nav__header-ul--toggle");
});

clearBtn.addEventListener("click", () => {
  clearInput.value = "";
});

internalSearchBtn.addEventListener("click", () => {
  headerSearch.style.display = "none";
  searchBtn.style.display = "inline";
  headerLinks.classList.remove("nav__header-ul--toggle");
});

// Swiper

var swiper = new Swiper(".mySwiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  nextButton: "#js-prev1",
  prevButton: "#js-next1",
});

// accordion

const acc_buttons = document.querySelectorAll(".accordion__header");
const acc_contents = document.querySelectorAll(".accordion__body");
const traveling = document.querySelector(".traveling__holder");

acc_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
      }
    });
    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

traveling.addEventListener("click", (e) => {
  if (!e.target.matches(".accordion__header")) {
    acc_buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    acc_contents.forEach((acc) => {
      acc.classList.remove("active");
    });
  }
});

// set year in copyright

const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
