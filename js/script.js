const navBtn = document.querySelector(".nav_btn");
const headerLinks = document.querySelector(".nav__header-ul");
const navHeaderLoginUl = document.querySelector(".nav__header-login--ul");
const closeBtn = document.querySelector("#close");

navBtn.addEventListener("click", () => {
  headerLinks.style.transform = "translate(0)";
  navHeaderLoginUl.style.transform = "translate(0)";
  closeBtn.classList.add("active__btn");
});

closeBtn.addEventListener("click", () => {
  headerLinks.style.transform = "translate(-100%)";
  navHeaderLoginUl.style.transform = "translate(-100%)";
  closeBtn.classList.remove("active__btn");
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
