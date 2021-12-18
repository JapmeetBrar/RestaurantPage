import MapIcon from './location-icon.svg';
import ClockIcon from './clock-icon.svg';
import AboutIcon from './about-icon.svg';

export default function loadMainPage(){
    //---- LOADING DOM ELEMENTS --------//
    let content = document.querySelector('#content');

    let card = document.createElement('div');
    card.className = 'card';

    let about = document.createElement('div');
    about.className = 'about';

    let aboutSubheader = document.createElement('h2');
    aboutSubheader.className = 'subheader';
    aboutSubheader.textContent = 'ABOUT';

    let aboutBody = document.createElement('p');
    aboutBody.className = 'body';
    aboutBody.textContent = 'Japs Wing Shop specializes in a variety of amazing fried foods.    Featuring the most Flavourful wings, the crispiest fries, and the tastiest chicken nuggets.';

    about.append(aboutSubheader, aboutBody);

    let hours = document.createElement('div');
    hours.className = 'hours';

    let hoursSubheader = document.createElement('h2');
    hoursSubheader.className = 'subheader';
    hoursSubheader.textContent = 'HOURS';
    
    let hoursBody = document.createElement('p');
    hoursBody.className = 'body';
    hoursBody.innerHTML = 'MON: 10AM-10PM <br> TUE: 10AM-10PM <br> WED: 10AM-10PM <br> THUR: 10AM-10PM <br> FRI: 12PM-12AM <br> SAT: 12PM-12AM <br> SUN: CLOSED';

    hours.append(hoursSubheader, hoursBody);

    let location = document.createElement('div');
    location.className = 'location';

    let locationSubheader = document.createElement('h2');
    locationSubheader.className = 'subheader';
    locationSubheader.textContent = 'LOCATION';
    
    let locationBody = document.createElement('p');
    locationBody.className = 'body';
    locationBody.innerHTML = '21 Park Lane Circle, Toronto, ON, M3B 1Z8';

    location.append(locationSubheader, locationBody);

    card.append(about, hours, location);

    content.append(card);


    //---- LOADING ICONS --------//
    let minWidth = window.matchMedia("(min-width: 320px)");
    let maxWidth = window.matchMedia("(min-width: 1000px)");
    
    let aboutText = document.querySelector('.about h2');
    let hoursText = document.querySelector('.hours h2');
    let locationText = document.querySelector('.location h2');
    
    let aboutIcon = new Image();
    let clockIcon = new Image();
    let mapIcon = new Image();
    
    aboutIcon.src = AboutIcon;
    clockIcon.src = ClockIcon;
    mapIcon.src = MapIcon;
    
    if (minWidth.matches){
        aboutIcon.style.width = 'calc(24px + 8 * ((100vw - 320px) / 680))'
        clockIcon.style.width = 'calc(24px + 8 * ((100vw - 320px) / 680))'
        mapIcon.style.width = 'calc(24px + 8 * ((100vw - 320px) / 680))'
    } else if(maxWidth.matches){
        aboutIcon.style.width = '32px';
        mapIcon.style.width = '32px';
        clockIcon.style.width = '32px';
    }
    
    aboutText.append(aboutIcon);
    hoursText.append(clockIcon);
    locationText.append(mapIcon);

    //---- SETTING ACTIVE BUTTON --------//
    let mainPageBtn = document.querySelector('.main-page');
    let contactPageBtn = document.querySelector('.contact-page');
    let menuPageBtn = document.querySelector('.menu-page');

    mainPageBtn.classList.add('active');
    contactPageBtn.classList.remove('active');
    menuPageBtn.classList.remove('active');
}