"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["delivery"],{

/***/ "./src/boxes.js":
/*!**********************!*\
  !*** ./src/boxes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeaderBox: () => (/* binding */ createHeaderBox),
/* harmony export */   createImgBox: () => (/* binding */ createImgBox),
/* harmony export */   createTxtBox: () => (/* binding */ createTxtBox)
/* harmony export */ });
//create factory functions to create a variety of textboxes, titleboxes, headings, etc

function createHeaderBox(something){
    const container = document.createElement('div');
        container.classList.add('heading');
        
    const txt = document.createElement('h1');
        txt.innerText = something; 
        container.appendChild(txt);

    console.log('Header created');
    return container;
}

function createTxtBox(bigText, smallText){
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

function createImgBox (imgName, desc){
    const container = document.createElement('div');
        container.style.backgroundImage = `url(${imgName})`;
    const description = document.createElement('p');
        description.textContent = desc;

    container.appendChild(description);

    return container;
}

/***/ }),

/***/ "./src/delivery.js":
/*!*************************!*\
  !*** ./src/delivery.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _boxes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxes */ "./src/boxes.js");


function createForm (){

    let title = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createHeaderBox)('Want to order from us?'); 
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/delivery.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDMEM7O0FBRW5DOztBQUVQLGdCQUFnQix1REFBZTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2JveGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGVsaXZlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jcmVhdGUgZmFjdG9yeSBmdW5jdGlvbnMgdG8gY3JlYXRlIGEgdmFyaWV0eSBvZiB0ZXh0Ym94ZXMsIHRpdGxlYm94ZXMsIGhlYWRpbmdzLCBldGNcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlckJveChzb21ldGhpbmcpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgICAgICBcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0eHQuaW5uZXJUZXh0ID0gc29tZXRoaW5nOyBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR4dCk7XG5cbiAgICBjb25zb2xlLmxvZygnSGVhZGVyIGNyZWF0ZWQnKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHh0Qm94KGJpZ1RleHQsIHNtYWxsVGV4dCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eHQtYm94Jyk7XG4gICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgICAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IGJpZ1RleHQ7XG4gICAgY29uc3QgdHh0ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdHh0LmlubmVyVGV4dCA9IHNtYWxsVGV4dDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR4dCk7XG5cbiAgICBjb25zb2xlLmxvZygnQm94IGNyZWF0ZWQnKTtcbiAgICByZXR1cm4gY29udGFpbmVyOyBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZ0JveCAoaW1nTmFtZSwgZGVzYyl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nTmFtZX0pYDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyQm94IH0gZnJvbSAnLi9ib3hlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtICgpe1xuXG4gICAgbGV0IHRpdGxlID0gY3JlYXRlSGVhZGVyQm94KCdXYW50IHRvIG9yZGVyIGZyb20gdXM/Jyk7IFxuICAgIGxldCBmb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBkZWxpdmVyeUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVsaXZlcnknKTtcbiAgICAgICAgZGVsaXZlcnlGb3JtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgLy9maXJzdCBuYW1lXG4gICAgICAgIGNvbnN0IGZOTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZk5MYWJlbC50ZXh0Q29udGVudD0nRmlyc3QgTmFtZSc7XG4gICAgICAgIGNvbnN0IGZOSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZk5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgICAgICBmTklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaXJzdE5hbWUnKTtcbiAgICAgICAgZGVsaXZlcnlGb3JtLmFwcGVuZENoaWxkKGZOTGFiZWwpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQoZk5JbnB1dCk7XG4gICAgICAgIC8vbGFzdCBuYW1lIFxuICAgICAgICBjb25zdCBsTkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxOTGFiZWwudGV4dENvbnRlbnQ9J0xhc3QgTmFtZSc7XG4gICAgICAgIGNvbnN0IGxOSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgbE5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgICAgICBsTklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdsYXN0TmFtZScpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQobE5MYWJlbCk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChsTklucHV0KTtcbiAgICAgICAgLy9hZGRyZXNzXG4gICAgICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGFkZExhYmVsLnRleHRDb250ZW50PSdBZGRyZXNzJztcbiAgICAgICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICAgICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2FkcmVzcycpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQoYWRkSW5wdXQpO1xuICAgICAgICAvL29yZGVyIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IG9yZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgb3JkZXJMYWJlbC50ZXh0Q29udGVudD0nT3JkZXIgRGVzY3JpcHRpb24nO1xuICAgICAgICBjb25zdCBvcmRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIG9yZGVySW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywnNCcpO1xuICAgICAgICAgICAgb3JkZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnb3JkZXInKTtcbiAgICAgICAgZGVsaXZlcnlGb3JtLmFwcGVuZENoaWxkKG9yZGVyTGFiZWwpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQob3JkZXJJbnB1dCk7XG4gICAgICAgIC8vIGEgc3VibWl0IGJ1dHRvblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCcpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGVsaXZlcnlGb3JtKTtcbiAgICByZXR1cm4gdGl0bGUsIGZvcm1Cb3g7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9