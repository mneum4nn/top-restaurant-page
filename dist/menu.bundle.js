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
        container.classList.add('img-box');
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
/* harmony import */ var _menu_items_salad_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-items/salad.jpg */ "./src/menu-items/salad.jpg");
/* harmony import */ var _menu_items_tulip_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-items/tulip.jpg */ "./src/menu-items/tulip.jpg");









function createMenu(){
    const menu = document.createElement('div');
        menu.classList.add('menu');

    const crepeBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_crepe_jpg__WEBPACK_IMPORTED_MODULE_1__ ,'Delicious poppy seed crepes, soft and aromatic','Crepes with poppy seeds');
    const pastaBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__,'Our delicate handcrafted fetuccine with unicorn truffle','Pasta with edible flowers');
    const oystersBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_oysters_jpg__WEBPACK_IMPORTED_MODULE_2__,'Fresh oysters, raised by local mermaids','Oyster platter with pink salt');
    const tulipBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_tulip_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Our house specialty, tulips! There are no words to describe these, only a deep meaningful gaze of wonder','tulip on a plate');
    const saladBox = (0,_boxes__WEBPACK_IMPORTED_MODULE_0__.createImgBox)(_menu_items_salad_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Fresh herb salad with arugula','Salad');

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

module.exports = __webpack_require__.p + "b23c1154cb98a3f51605.jpg";

/***/ }),

/***/ "./src/menu-items/oysters.jpg":
/*!************************************!*\
  !*** ./src/menu-items/oysters.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80b59a4855985a31caf9.jpg";

/***/ }),

/***/ "./src/menu-items/pasta.jpg":
/*!**********************************!*\
  !*** ./src/menu-items/pasta.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "180c92cbce0b4488fe06.jpg";

/***/ }),

/***/ "./src/menu-items/salad.jpg":
/*!**********************************!*\
  !*** ./src/menu-items/salad.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02ba9ca923ee284b6278.jpg";

/***/ }),

/***/ "./src/menu-items/tulip.jpg":
/*!**********************************!*\
  !*** ./src/menu-items/tulip.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0d7a633730dc9d3411e.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDMEM7QUFDSDtBQUNJO0FBQ0k7QUFDSjtBQUNBO0FBQ0E7OztBQUdwQztBQUNQO0FBQ0E7O0FBRUEscUJBQXFCLG9EQUFZLENBQUMsa0RBQUs7QUFDdkMscUJBQXFCLG9EQUFZLENBQUMsa0RBQUs7QUFDdkMsdUJBQXVCLG9EQUFZLENBQUMsb0RBQU87QUFDM0MscUJBQXFCLG9EQUFZLENBQUMsa0RBQUs7QUFDdkMscUJBQXFCLG9EQUFZLENBQUMsa0RBQUs7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYm94ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIGZhY3RvcnkgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhIHZhcmlldHkgb2YgdGV4dGJveGVzLCB0aXRsZWJveGVzLCBoZWFkaW5ncywgZXRjXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXJCb3goc29tZXRoaW5nKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgXG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdHh0LmlubmVyVGV4dCA9IHNvbWV0aGluZzsgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBjcmVhdGVkJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVR4dEJveChiaWdUZXh0LCBzbWFsbFRleHQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHh0LWJveCcpO1xuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICAgICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBiaWdUZXh0O1xuICAgIGNvbnN0IHR4dCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHR4dC5pbm5lclRleHQgPSBzbWFsbFRleHQ7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0JveCBjcmVhdGVkJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjsgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWdCb3ggKGltZ05hbWUsIGRlc2Mpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWJveCcpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ05hbWV9KWA7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCB7IGNyZWF0ZUhlYWRlckJveCB9IGZyb20gJy4vYm94ZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW1nQm94IH0gZnJvbSAnLi9ib3hlcyc7XG5pbXBvcnQgY3JlcGUgZnJvbSAnLi9tZW51LWl0ZW1zL2NyZXBlLmpwZyc7XG5pbXBvcnQgb3lzdGVycyBmcm9tICcuL21lbnUtaXRlbXMvb3lzdGVycy5qcGcnO1xuaW1wb3J0IHBhc3RhIGZyb20gJy4vbWVudS1pdGVtcy9wYXN0YS5qcGcnO1xuaW1wb3J0IHNhbGFkIGZyb20gJy4vbWVudS1pdGVtcy9zYWxhZC5qcGcnO1xuaW1wb3J0IHR1bGlwIGZyb20gJy4vbWVudS1pdGVtcy90dWxpcC5qcGcnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGNyZXBlQm94ID0gY3JlYXRlSW1nQm94KGNyZXBlICwnRGVsaWNpb3VzIHBvcHB5IHNlZWQgY3JlcGVzLCBzb2Z0IGFuZCBhcm9tYXRpYycsJ0NyZXBlcyB3aXRoIHBvcHB5IHNlZWRzJyk7XG4gICAgY29uc3QgcGFzdGFCb3ggPSBjcmVhdGVJbWdCb3gocGFzdGEsJ091ciBkZWxpY2F0ZSBoYW5kY3JhZnRlZCBmZXR1Y2NpbmUgd2l0aCB1bmljb3JuIHRydWZmbGUnLCdQYXN0YSB3aXRoIGVkaWJsZSBmbG93ZXJzJyk7XG4gICAgY29uc3Qgb3lzdGVyc0JveCA9IGNyZWF0ZUltZ0JveChveXN0ZXJzLCdGcmVzaCBveXN0ZXJzLCByYWlzZWQgYnkgbG9jYWwgbWVybWFpZHMnLCdPeXN0ZXIgcGxhdHRlciB3aXRoIHBpbmsgc2FsdCcpO1xuICAgIGNvbnN0IHR1bGlwQm94ID0gY3JlYXRlSW1nQm94KHR1bGlwLCAnT3VyIGhvdXNlIHNwZWNpYWx0eSwgdHVsaXBzISBUaGVyZSBhcmUgbm8gd29yZHMgdG8gZGVzY3JpYmUgdGhlc2UsIG9ubHkgYSBkZWVwIG1lYW5pbmdmdWwgZ2F6ZSBvZiB3b25kZXInLCd0dWxpcCBvbiBhIHBsYXRlJyk7XG4gICAgY29uc3Qgc2FsYWRCb3ggPSBjcmVhdGVJbWdCb3goc2FsYWQsICdGcmVzaCBoZXJiIHNhbGFkIHdpdGggYXJ1Z3VsYScsJ1NhbGFkJyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZXBlQm94KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHBhc3RhQm94KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG95c3RlcnNCb3gpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodHVsaXBCb3gpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2FsYWRCb3gpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=