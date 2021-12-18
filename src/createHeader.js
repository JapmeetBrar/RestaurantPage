export default function createHeader(){
    let content = document.querySelector('#content');

    let header = document.createElement('div');
    header.className = 'header';

    let title = document.createElement('h1');
    title.textContent = "JAPS WING SHOP";
    title.className = 'title';

    let navBar = document.createElement('div');
    navBar.className = 'nav-bar';

    let mainPageBtn = document.createElement('button');
    mainPageBtn.className = 'main-page';
    mainPageBtn.textContent = 'Main';

    let contactPageBtn = document.createElement('button');
    contactPageBtn.className = 'contact-page';
    contactPageBtn.textContent = 'Contact';

    let menuPageBtn = document.createElement('button');
    menuPageBtn.className = 'menu-page';
    menuPageBtn.textContent = 'Menu';

    navBar.append(mainPageBtn, contactPageBtn, menuPageBtn);

    header.append(title, navBar);
    
    content.append(header);
}