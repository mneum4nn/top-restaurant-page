import _ from 'lodash';
import { createHeaderBox } from './boxes';
import { createTxtBox } from './boxes';
import { createPage } from './delivery';
import background from './funfetti.jpg';
console.log("I'm working");

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
        content.style.display= 'flex';
        content.style.flexDirection ='column';

    console.log(content);

    const pleasance = createHeaderBox('pleasance');
        pleasance.style.backgroundImage = `url(${background})`;
        pleasance.style.backgroundSize = 'cover';
    const aboutUs = createTxtBox('About Us', "We believe in locally sourced magic, and each ingredient included on our menu items was personally cared for by a warlock");
    const hours = createTxtBox('Visit Us','Monday to Friday \n 1AM - 3PM \n Saturdays \n 4PM - 3AM');

    content.appendChild(pleasance);
    content.appendChild(aboutUs);
    content.appendChild(hours);


});

