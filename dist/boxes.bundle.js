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
/* harmony export */   createTxtBox: () => (/* binding */ createTxtBox)
/* harmony export */ });
//create factory functions to create a variety of textboxes, titleboxes, headings, etc

function createHeaderBox(something){
    const container = document.createElement('div');
        container.classList.add('heading');
        
    const txt = document.createElement('h1');
        txt.innerText = something; 
        container.appendChild(txt);

    
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

    return container; 
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/boxes.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ib3hlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBmYWN0b3J5IGZ1bmN0aW9ucyB0byBjcmVhdGUgYSB2YXJpZXR5IG9mIHRleHRib3hlcywgdGl0bGVib3hlcywgaGVhZGluZ3MsIGV0Y1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyQm94KHNvbWV0aGluZyl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgIFxuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHR4dC5pbm5lclRleHQgPSBzb21ldGhpbmc7IFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHh0KTtcblxuICAgIFxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUeHRCb3goYmlnVGV4dCwgc21hbGxUZXh0KXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R4dC1ib3gnKTtcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gYmlnVGV4dDtcbiAgICBjb25zdCB0eHQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0eHQuaW5uZXJUZXh0ID0gc21hbGxUZXh0O1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7IFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==