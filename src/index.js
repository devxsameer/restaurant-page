// index.js
import "./css/main.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
// DOM
const navBtns = document.querySelectorAll(".nav-link");
const contentDiv = document.querySelector("#content");
window.addEventListener("DOMContentLoaded", () => {
  render("home");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentPage = document.querySelector(".nav-link.active");
      if (currentPage.dataset.page != btn.dataset.page) {
        currentPage.classList.remove("active");
        btn.classList.add("active");
        render(btn.dataset.page);
      }
    });
  });
});

function render(page) {
  if (page == "home") {
    contentDiv.innerHTML = home();
  } else if (page == "menu") {
    contentDiv.innerHTML = menu();
  } else {
    contentDiv.innerHTML = about();
  }
}
