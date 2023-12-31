//create factory functions to create a variety of textboxes, titleboxes, headings, etc

export function createHeaderBox(something){
    const container = document.createElement('div');
        container.classList.add('heading');
        
    const txt = document.createElement('h1');
        txt.innerText = something; 
        container.appendChild(txt);

    console.log('Header created');
    return container;
}

export function createTxtBox(bigText, smallText){
    const container = document.createElement('div');
        container.classList.add('txt-box');
    const subtitle = document.createElement('h2');
        subtitle.classList.add('subtitle');
        subtitle.textContent = bigText;
    const txt  = document.createElement('p');
        txt.innerText = smallText;

    container.appendChild(subtitle);
    container.appendChild(txt);

    console.log('Box created');
    return container; 
}

export function createImgBox (imgName, desc){
    const container = document.createElement('div');
        container.classList.add('img-box');
        container.style.backgroundImage = `url(${imgName})`;
    const description = document.createElement('p');
        description.textContent = desc;

    container.appendChild(description);

    return container;
}