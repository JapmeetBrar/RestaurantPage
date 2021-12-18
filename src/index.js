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
        content.removeChild(document.querySelector('.card'));
        loadMainPage();
    })
    contactPageBtn.addEventListener('click', function(){
        content.removeChild(document.querySelector('.card'));
        loadContactPage();
    })
    menuPageBtn.addEventListener('click', function(){
        content.removeChild(document.querySelector('.card'));
        loadMenuPage();
    })
})()