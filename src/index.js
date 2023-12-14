import _ from 'lodash';
import { createHeaderBox } from './boxes';
import { createTxtBox } from './boxes';
import { createForm } from './delivery';
import background from './funfetti.jpg';

console.log("I'm working");

function tabHandler (tabID){
    let newPage;

    //empty out previous page
    while (content.firstChild) {
        content.removeChild(parentElement.firstChild);
    }
    
    switch (tabID){
        case 'delivery':
            newPage = createForm ();
            break;
        case 'menu':
            newPage = createMenu ();
            break;
        case 'about':
            newPage = createHomePage();
            break;
    }
    return newPage;
}

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
        content.style.display= 'flex';
        content.style.flexDirection ='column';
    const homepage = createHomePage()
    content.appendChild(homepage);
});
