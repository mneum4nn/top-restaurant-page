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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2JveGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIGZhY3RvcnkgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhIHZhcmlldHkgb2YgdGV4dGJveGVzLCB0aXRsZWJveGVzLCBoZWFkaW5ncywgZXRjXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXJCb3goc29tZXRoaW5nKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgXG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdHh0LmlubmVyVGV4dCA9IHNvbWV0aGluZzsgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBjcmVhdGVkJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVR4dEJveChiaWdUZXh0LCBzbWFsbFRleHQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHh0LWJveCcpO1xuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICAgICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBiaWdUZXh0O1xuICAgIGNvbnN0IHR4dCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHR4dC5pbm5lclRleHQgPSBzbWFsbFRleHQ7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0JveCBjcmVhdGVkJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjsgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWdCb3ggKGltZ05hbWUsIGRlc2Mpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ05hbWV9KWA7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==