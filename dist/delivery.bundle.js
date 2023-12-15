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
        container.classList.add('img-box');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEMwQzs7QUFFbkM7O0FBRVAsZ0JBQWdCLHVEQUFlO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYm94ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9kZWxpdmVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBmYWN0b3J5IGZ1bmN0aW9ucyB0byBjcmVhdGUgYSB2YXJpZXR5IG9mIHRleHRib3hlcywgdGl0bGVib3hlcywgaGVhZGluZ3MsIGV0Y1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyQm94KHNvbWV0aGluZyl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgIFxuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHR4dC5pbm5lclRleHQgPSBzb21ldGhpbmc7IFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHh0KTtcblxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgY3JlYXRlZCcpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUeHRCb3goYmlnVGV4dCwgc21hbGxUZXh0KXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R4dC1ib3gnKTtcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gYmlnVGV4dDtcbiAgICBjb25zdCB0eHQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0eHQuaW5uZXJUZXh0ID0gc21hbGxUZXh0O1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHh0KTtcblxuICAgIGNvbnNvbGUubG9nKCdCb3ggY3JlYXRlZCcpO1xuICAgIHJldHVybiBjb250YWluZXI7IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nQm94IChpbWdOYW1lLCBkZXNjKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1ib3gnKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWdOYW1lfSlgO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXJCb3ggfSBmcm9tICcuL2JveGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0gKCl7XG5cbiAgICBsZXQgdGl0bGUgPSBjcmVhdGVIZWFkZXJCb3goJ1dhbnQgdG8gb3JkZXIgZnJvbSB1cz8nKTsgXG4gICAgbGV0IGZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRlbGl2ZXJ5Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZGVsaXZlcnlGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxpdmVyeScpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAvL2ZpcnN0IG5hbWVcbiAgICAgICAgY29uc3QgZk5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBmTkxhYmVsLnRleHRDb250ZW50PSdGaXJzdCBOYW1lJztcbiAgICAgICAgY29uc3QgZk5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmTklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgICAgIGZOSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZpcnN0TmFtZScpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQoZk5MYWJlbCk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChmTklucHV0KTtcbiAgICAgICAgLy9sYXN0IG5hbWUgXG4gICAgICAgIGNvbnN0IGxOTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbE5MYWJlbC50ZXh0Q29udGVudD0nTGFzdCBOYW1lJztcbiAgICAgICAgY29uc3QgbE5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBsTklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgICAgIGxOSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhc3ROYW1lJyk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChsTkxhYmVsKTtcbiAgICAgICAgZGVsaXZlcnlGb3JtLmFwcGVuZENoaWxkKGxOSW5wdXQpO1xuICAgICAgICAvL2FkZHJlc3NcbiAgICAgICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgYWRkTGFiZWwudGV4dENvbnRlbnQ9J0FkZHJlc3MnO1xuICAgICAgICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgICAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRyZXNzJyk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChhZGRMYWJlbCk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChhZGRJbnB1dCk7XG4gICAgICAgIC8vb3JkZXIgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3Qgb3JkZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBvcmRlckxhYmVsLnRleHRDb250ZW50PSdPcmRlciBEZXNjcmlwdGlvbic7XG4gICAgICAgIGNvbnN0IG9yZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgb3JkZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc0Jyk7XG4gICAgICAgICAgICBvcmRlcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdvcmRlcicpO1xuICAgICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kQ2hpbGQob3JkZXJMYWJlbCk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChvcmRlcklucHV0KTtcbiAgICAgICAgLy8gYSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkZWxpdmVyeUZvcm0pO1xuICAgIHJldHVybiB0aXRsZSwgZm9ybUJveDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=