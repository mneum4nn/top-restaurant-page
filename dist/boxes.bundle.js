"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["boxes"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/boxes.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYm94ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jcmVhdGUgZmFjdG9yeSBmdW5jdGlvbnMgdG8gY3JlYXRlIGEgdmFyaWV0eSBvZiB0ZXh0Ym94ZXMsIHRpdGxlYm94ZXMsIGhlYWRpbmdzLCBldGNcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlckJveChzb21ldGhpbmcpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgICAgICBcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0eHQuaW5uZXJUZXh0ID0gc29tZXRoaW5nOyBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR4dCk7XG5cbiAgICBjb25zb2xlLmxvZygnSGVhZGVyIGNyZWF0ZWQnKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHh0Qm94KGJpZ1RleHQsIHNtYWxsVGV4dCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eHQtYm94Jyk7XG4gICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgICAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IGJpZ1RleHQ7XG4gICAgY29uc3QgdHh0ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdHh0LmlubmVyVGV4dCA9IHNtYWxsVGV4dDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR4dCk7XG5cbiAgICBjb25zb2xlLmxvZygnQm94IGNyZWF0ZWQnKTtcbiAgICByZXR1cm4gY29udGFpbmVyOyBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZ0JveCAoaW1nTmFtZSwgZGVzYyl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctYm94Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nTmFtZX0pYDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9