import "./style.css";
import createHeader from "./createHeader";
import loadMainPage from "./mainPageLoad";
import loadContactPage from "./contactPageLoad";
import loadMenuPage from "./menuPageLoad";

const LoadWebpage = (function () {
  let content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  let iconLink = document.createElement("link");
  iconLink.rel = "stylesheet";
  iconLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  document.head.appendChild(iconLink);

  createHeader();
  loadMainPage();

  let mainPageBtn = document.querySelector(".main-page");
  let contactPageBtn = document.querySelector(".contact-page");
  let menuPageBtn = document.querySelector(".menu-page");

  mainPageBtn.addEventListener("click", function () {
    content.removeChild(document.querySelector(".card"));
    loadMainPage();
  });
  contactPageBtn.addEventListener("click", function () {
    content.removeChild(document.querySelector(".card"));
    loadContactPage();
  });
  menuPageBtn.addEventListener("click", function () {
    content.removeChild(document.querySelector(".card"));
    loadMenuPage();
  });
})();
