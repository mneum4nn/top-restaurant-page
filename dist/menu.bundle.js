"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["menu"],{

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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _boxes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxes */ "./src/boxes.js");
/* harmony import */ var _menu_items_crepe_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/crepe.jpg */ "./src/menu-items/crepe.jpg");
/* harmony import */ var _menu_items_oysters_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items/oysters.jpg */ "./src/menu-items/oysters.jpg");
/* harmony import */ var _menu_items_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-items/pasta.jpg */ "./src/menu-items/pasta.jpg");









function createMenu(){
    const menu = document.createElement('div');
        menu.classList.add('menu');

    const title = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createHeaderBox)('our menu');

    const crepeBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_crepe_jpg__WEBPACK_IMPORTED_MODULE_1__ ,'Delicious poppy seed crepes, soft and aromatic','Crepes with poppy seeds');
    const pastaBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__,'Our delicate handcrafted fetuccine with unicorn truffle','Pasta with edible flowers');
    const oystersBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_oysters_jpg__WEBPACK_IMPORTED_MODULE_2__,'Fresh oysters, raised by local mermaids','Oyster platter with pink salt');
    const tulipBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Our house specialty, tulips! There are no words to describe these, only a deep meaningful gaze of wonder','tulip on a plate');
    const saladBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Fresh herb salad with arugula','Salad');

    menu.appendChild(title);
    menu.appendChild(crepeBox);
    menu.appendChild(pastaBox);
    menu.appendChild(oystersBox);
    menu.appendChild(tulipBox);
    menu.appendChild(saladBox);

    return menu;
}


/***/ }),

/***/ "./src/menu-items/crepe.jpg":
/*!**********************************!*\
  !*** ./src/menu-items/crepe.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60431a43fac6a9d22bc5.jpg";

/***/ }),

/***/ "./src/menu-items/oysters.jpg":
/*!************************************!*\
  !*** ./src/menu-items/oysters.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab33b90b8263d8e06bb6.jpg";

/***/ }),

/***/ "./src/menu-items/pasta.jpg":
/*!**********************************!*\
  !*** ./src/menu-items/pasta.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afa251abb50721fbef17.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkMwQztBQUNIO0FBQ0k7QUFDSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR3BDO0FBQ1A7QUFDQTs7QUFFQSxrQkFBa0IsdURBQWU7O0FBRWpDLHFCQUFxQixvREFBWSxDQUFDLGtEQUFLO0FBQ3ZDLHFCQUFxQixvREFBWSxDQUFDLGtEQUFLO0FBQ3ZDLHVCQUF1QixvREFBWSxDQUFDLG9EQUFPO0FBQzNDLHFCQUFxQixvREFBWSxDQUFDLGtEQUFLO0FBQ3ZDLHFCQUFxQixvREFBWSxDQUFDLGtEQUFLOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYm94ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIGZhY3RvcnkgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhIHZhcmlldHkgb2YgdGV4dGJveGVzLCB0aXRsZWJveGVzLCBoZWFkaW5ncywgZXRjXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXJCb3goc29tZXRoaW5nKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgXG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdHh0LmlubmVyVGV4dCA9IHNvbWV0aGluZzsgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBjcmVhdGVkJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVR4dEJveChiaWdUZXh0LCBzbWFsbFRleHQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHh0LWJveCcpO1xuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICAgICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBiaWdUZXh0O1xuICAgIGNvbnN0IHR4dCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHR4dC5pbm5lclRleHQgPSBzbWFsbFRleHQ7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0JveCBjcmVhdGVkJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjsgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWdCb3ggKGltZ05hbWUsIGRlc2Mpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ05hbWV9KWA7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCB7IGNyZWF0ZUhlYWRlckJveCB9IGZyb20gJy4vYm94ZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW1nQm94IH0gZnJvbSAnLi9ib3hlcyc7XG5pbXBvcnQgY3JlcGUgZnJvbSAnLi9tZW51LWl0ZW1zL2NyZXBlLmpwZyc7XG5pbXBvcnQgb3lzdGVycyBmcm9tICcuL21lbnUtaXRlbXMvb3lzdGVycy5qcGcnO1xuaW1wb3J0IHBhc3RhIGZyb20gJy4vbWVudS1pdGVtcy9wYXN0YS5qcGcnO1xuaW1wb3J0IHNhbGFkIGZyb20gJy4vbWVudS1pdGVtcy9wYXN0YS5qcGcnO1xuaW1wb3J0IHR1bGlwIGZyb20gJy4vbWVudS1pdGVtcy9wYXN0YS5qcGcnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSGVhZGVyQm94KCdvdXIgbWVudScpO1xuXG4gICAgY29uc3QgY3JlcGVCb3ggPSBjcmVhdGVJbWdCb3goY3JlcGUgLCdEZWxpY2lvdXMgcG9wcHkgc2VlZCBjcmVwZXMsIHNvZnQgYW5kIGFyb21hdGljJywnQ3JlcGVzIHdpdGggcG9wcHkgc2VlZHMnKTtcbiAgICBjb25zdCBwYXN0YUJveCA9IGNyZWF0ZUltZ0JveChwYXN0YSwnT3VyIGRlbGljYXRlIGhhbmRjcmFmdGVkIGZldHVjY2luZSB3aXRoIHVuaWNvcm4gdHJ1ZmZsZScsJ1Bhc3RhIHdpdGggZWRpYmxlIGZsb3dlcnMnKTtcbiAgICBjb25zdCBveXN0ZXJzQm94ID0gY3JlYXRlSW1nQm94KG95c3RlcnMsJ0ZyZXNoIG95c3RlcnMsIHJhaXNlZCBieSBsb2NhbCBtZXJtYWlkcycsJ095c3RlciBwbGF0dGVyIHdpdGggcGluayBzYWx0Jyk7XG4gICAgY29uc3QgdHVsaXBCb3ggPSBjcmVhdGVJbWdCb3godHVsaXAsICdPdXIgaG91c2Ugc3BlY2lhbHR5LCB0dWxpcHMhIFRoZXJlIGFyZSBubyB3b3JkcyB0byBkZXNjcmliZSB0aGVzZSwgb25seSBhIGRlZXAgbWVhbmluZ2Z1bCBnYXplIG9mIHdvbmRlcicsJ3R1bGlwIG9uIGEgcGxhdGUnKTtcbiAgICBjb25zdCBzYWxhZEJveCA9IGNyZWF0ZUltZ0JveChzYWxhZCwgJ0ZyZXNoIGhlcmIgc2FsYWQgd2l0aCBhcnVndWxhJywnU2FsYWQnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlcGVCb3gpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGFzdGFCb3gpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQob3lzdGVyc0JveCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0dWxpcEJveCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzYWxhZEJveCk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==