import { createHeaderBox } from './boxes';
import { createImgBox } from './boxes';
import crepe from './menu-items/crepe.jpg';
import oysters from './menu-items/oysters.jpg';
import pasta from './menu-items/pasta.jpg';
import salad from './menu-items/salad.jpg';
import tulip from './menu-items/tulip.jpg';


export function createMenu(){
    const menu = document.createElement('div');
        menu.classList.add('menu');

    const crepeBox = createImgBox(crepe ,'Delicious poppy seed crepes, soft and aromatic','Crepes with poppy seeds');
    const pastaBox = createImgBox(pasta,'Our delicate handcrafted fetuccine with unicorn truffle','Pasta with edible flowers');
    const oystersBox = createImgBox(oysters,'Fresh oysters, raised by local mermaids','Oyster platter with pink salt');
    const tulipBox = createImgBox(tulip, 'Our house specialty, tulips! There are no words to describe these, only a deep meaningful gaze of wonder','tulip on a plate');
    const saladBox = createImgBox(salad, 'Fresh herb salad with arugula','Salad');

    menu.appendChild(crepeBox);
    menu.appendChild(pastaBox);
    menu.appendChild(oystersBox);
    menu.appendChild(tulipBox);
    menu.appendChild(saladBox);

    return menu;
}
