import _ from 'lodash';

import { createForm } from './delivery';
import { createHomePage }  from'./home';
import { createMenu } from './menu';

console.log("I'm working");


document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
        content.style.display= 'flex';
        content.style.flexDirection ='column';

    const homepage = createHomePage()
    content.appendChild(homepage);
    let prevSelected = homepage;
    
    const homeTab = document.getElementById('about');
    const menuTab = document.getElementById('menu');
    const deliveryTab = document.getElementById('delivery');

    function tabHandler (tabID){
        let newPage;

        //empty out previous page
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        //remove tab color from previously selected page
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

    homeTab.addEventListener('click', () => {
        const page = tabHandler(homeTab.id);
        content.appendChild(page);
    });
    menuTab.addEventListener('click', () => {
        const page = tabHandler(menuTab.id);
        content.appendChild(page);
    });    
    deliveryTab.addEventListener('click', () => {
        const page = tabHandler(deliveryTab.id);
        content.appendChild(page);
    });

});
