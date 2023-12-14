import { createHeaderBox } from './boxes';
import { createTxtBox } from './boxes';
import background from './funfetti.jpg';

export function createHomePage(){
    const container = document.createElement('div');
        container.id ='about';
    const pleasance = createHeaderBox('pleasance');
        pleasance.style.backgroundImage = `url(${background})`;
        pleasance.style.backgroundSize = 'cover';
    const aboutUs = createTxtBox('About Us', "We believe in locally sourced magic, and each ingredient included on our menu items was personally cared for by a warlock");
    const hours = createTxtBox('Visit Us','Monday to Friday \n 1AM - 3PM \n Saturdays \n 4PM - 3AM');

    container.appendChild(pleasance);
    container.appendChild(aboutUs);
    container.appendChild(hours);

    return container; 
}

