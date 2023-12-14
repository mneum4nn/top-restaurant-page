import _ from 'lodash';

import { createForm } from './delivery';
import { createHomePage }  from'./home';


console.log("I'm working");

function tabHandler (tabID){
    let newPage;

    //empty out previous page
    while (content.firstChild) {
        content.removeChild(parentElement.firstChild);
    }
    //remove tab color from previously selected page
        const prevSelected = document.querySelector('.selected');
            prevSelected.style.backgroundColor = 'blue' ;
            prevSelected.classList.remove('selected');
    //set new selected tab's color
        const curSelected = document.getElementById(tabID);
            curSelected.style.backgroundColor = 'red';
            curSelected.classList.add('selected');
    
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
    
    const homeTab = document.getElementById('home');
    const menuTab = document.geteElementById('menu');
    const deliveryTab = document.getElementById('delivery');

    homeTab.addEventListener('click', () => {
        const id = homeTab.id;
        const page = tabHandler(id);
        content.appendChild(page);
    });
    menuTab.addEventListener('click', () => {
        const id = homeTab.id;
        const page = tabHandler(id);
        content.appendChild(page);
    });    
    deliveryTab.addEventListener('click', () => {
        const id = homeTab.id;
        const page = tabHandler(id);
        content.appendChild(page);
    });

});
