import './style.css';
import MapIcon from './location-icon.svg';
import ClockIcon from './clock-icon.svg';
import AboutIcon from './about-icon.svg';

let minWidth = window.matchMedia("(min-width: 320px)")
let maxWidth = window.matchMedia("(min-width: 1000px)")

let about = document.querySelector('.about h2');
let hours = document.querySelector('.hours h2');
let location = document.querySelector('.location h2');

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

about.append(aboutIcon);
hours.append(clockIcon);
location.append(mapIcon);