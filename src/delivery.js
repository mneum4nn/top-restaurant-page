import { createHeaderBox } from './boxes';

export function createPage (){

    let title = createHeaderBox('Want to order from us?'); 
    let formBox = document.createElement('div');

    const deliveryForm = document.createElement('form');
        deliveryForm.setAttribute('id','delivery');
        deliveryForm.style.display = 'inline-block';
        //first name
        const fNLabel = document.createElement('label');
            fNLabel.textContent='First Name';
        const fNInput = document.createElement('input');
            fNInput.setAttribute('type','text');
            fNInput.setAttribute('name', 'firstName');
        deliveryForm.appendChild(fNLabel);
        deliveryForm.appendChild(fNInput);
        //last name 
        const lNLabel = document.createElement('label');
            lNLabel.textContent='Last Name';
        const lNInput = document.createElement('input');
            lNInput.setAttribute('type','text');
            lNInput.setAttribute('name', 'lastName');
        deliveryForm.appendChild(lNLabel);
        deliveryForm.appendChild(lNInput);
        //address
        const addLabel = document.createElement('label');
            addLabel.textContent='Address';
        const addInput = document.createElement('input');
            addInput.setAttribute('type','text');
            addInput.setAttribute('name', 'adress');
        deliveryForm.appendChild(addLabel);
        deliveryForm.appendChild(addInput);
        //order description
        const orderLabel = document.createElement('label');
            orderLabel.textContent='Order Description';
        const orderInput = document.createElement('textarea');
            orderInput.setAttribute('rows','4');
            orderInput.setAttribute('name', 'order');
        deliveryForm.appendChild(orderLabel);
        deliveryForm.appendChild(orderInput);
        // a submit button
        const submitButton = document.createElement('input');
            submitButton.setAttribute('type', 'submit');
            submitButton.setAttribute('value', 'Submit');
        deliveryForm.appendChild(submitButton);

    formBox.appendChild(deliveryForm);
    return title, formBox;
}