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

export function createImgBox (imgSrc, text, altText){
    const container = document.createElement('div');
    const image = document.createElement('img');
        image.src = imgSrc;
        image.alt = altText; // Add a description for accessibility
        image.classList.add('round');

    const description = document.createElement('p');
        description.textContent = textContent;

    container.appendChild(image);
    container.appendChild(text);

    return container;
}