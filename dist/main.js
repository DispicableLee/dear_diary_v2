/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/page */ \"./src/scripts/page.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"loaded\");\n  const main = document.getElementById('main');\n  const page = new _scripts_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  main.appendChild(page);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7QUFJakNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBSTtFQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3JCLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLE1BQU1DLElBQUksR0FBRyxJQUFJUCxxREFBSSxDQUFDSyxJQUFJLENBQUM7RUFDM0JBLElBQUksQ0FBQ0csV0FBVyxDQUFDRCxJQUFJLENBQUM7QUFFMUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVhcl9kaWFyeV92Mi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCIuL3NjcmlwdHMvcGFnZVwiXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UobWFpbilcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhZ2UpXG4gICAgXG59KSJdLCJuYW1lcyI6WyJQYWdlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsInBhZ2UiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/page.js":
/*!*****************************!*\
  !*** ./src/scripts/page.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Page {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>its alive!</h1>\";\n    this.ele.addEventListener('click', this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = 'Ouch';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVdBLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxxQkFBcUI7SUFFMUMsSUFBSSxDQUFDRCxHQUFHLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25FO0VBRUFELFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0gsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxNQUFNO0VBQzNDO0FBRUo7QUFFQSwrREFBZVIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlYXJfZGlhcnlfdjIvLi9zcmMvc2NyaXB0cy9wYWdlLmpzPzc5NzkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFnZXtcbiAgICBjb25zdHJ1Y3RvcihlbGUpe1xuICAgICAgICB0aGlzLmVsZSA9IGVsZVxuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5pdHMgYWxpdmUhPC9oMT5cIlxuXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICdPdWNoJ1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/page.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;