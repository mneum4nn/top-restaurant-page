import { createHeaderBox } from './boxes';
import { createImgBox } from './boxes';

export function createMenu(){
    const menu = document.createElement('div');
        menu.classList.add('menu');
    const title = createHeaderBox('our menu');
    const crepe = createImgBox('./menu-items/crepe.jpg','Delicious poppy seed crepes, soft and aromatic','Crepes with poppy seeds');
    const pasta = createImgBox('./menu-items./pasta.jpg','Our delicate handcrafted fetuccine with unicorn truffle','Pasta with edible flowers');
    const oysters = createImgBox('./menu-items/oysters.jpg','Fresh oysters, raised by local mermaids','Oyster platter with pink salt');
    const tulip = createImgBox('./menu-items/tulip.jg', 'Our house specialty, tulips! There are no words to describe these, only a deep meaningful gaze of wonder','tulip on a plate');
    const salad = createImgBox('./menu-items/salad.jpg', 'Fresh herb salad with arugula','Salad');

    menu.appendChild(title);
    menu.appendChild(crepe);
    menu.appendChild(pasta);
    menu.appendChild(oysters);
    menu.appendChild(tulip);
    menu.appendChild(salad);
    return menu;
}
