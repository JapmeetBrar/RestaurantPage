import './style.css';
import createHeader from './createHeader';
import loadMainPage from './mainPageLoad';
import loadContactPage from './contactPageLoad';
import loadMenuPage from './menuPageLoad';

const LoadWebpage = (function(){
    createHeader();
    loadMainPage();
    let content = document.querySelector('#content');
    let mainPageBtn = document.querySelector('.main-page');
    let contactPageBtn = document.querySelector('.contact-page');
    let menuPageBtn = document.querySelector('.menu-page');

    mainPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        loadMainPage();
    })
    contactPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        loadContactPage();
    })
    menuPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        loadMenuPage();
    })
})()