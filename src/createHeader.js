import OdinLogo from "./imgs/odin-logo.svg";

export default function createHeader() {
  let content = document.querySelector("#content");

  let header = document.createElement("div");
  header.className = "header";

  let title = document.createElement("h1");
  title.textContent = "JAPS WING SHOP";
  title.className = "title";

  let navBar = document.createElement("div");
  navBar.className = "nav-bar";

  let mainPageBtn = document.createElement("button");
  mainPageBtn.className = "main-page";
  mainPageBtn.textContent = "Main";

  let contactPageBtn = document.createElement("button");
  contactPageBtn.className = "contact-page";
  contactPageBtn.textContent = "Contact";

  let menuPageBtn = document.createElement("button");
  menuPageBtn.className = "menu-page";
  menuPageBtn.textContent = "Menu";

  navBar.append(mainPageBtn, contactPageBtn, menuPageBtn);

  header.append(title, navBar);

  let footer = document.createElement("div");
  footer.className = "footer";

  let odinRefContainer = document.createElement("div");
  odinRefContainer.className = "footer-text";

  let odinRefText = document.createElement("p");
  odinRefText.textContent = "Created as a part of TheOdinProject Curriculum";

  let odinRefLink = document.createElement("a");
  odinRefLink.href = "https://www.theodinproject.com/";

  let odinLogo = new Image();
  odinLogo.className = "odin-icon";
  odinLogo.src = OdinLogo;

  odinRefLink.append(odinLogo);

  odinRefContainer.append(odinRefText, odinRefLink);

  let githubRefContainer = document.createElement("div");
  githubRefContainer.className = "footer-text";

  let githubRefText = document.createElement("p");
  githubRefText.textContent = "Copyright © 2021 JapmeetBrar";

  let githubRefLink = document.createElement("a");
  githubRefLink.href = "https://github.com/JapmeetBrar/";
  githubRefLink.className = "fa fa-github";

  githubRefContainer.append(githubRefText, githubRefLink);

  footer.append(odinRefContainer, githubRefContainer);

  content.append(header);
  content.append(footer);
}
