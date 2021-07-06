/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const mop_up_dom = document.querySelectorAll('[data-mop-up]')\nconst delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4']\nconst second = 2800\nlet is_reverse = true\n\nconst animation = (is_reverse = false) => {\n    const _delays = is_reverse ? delays.reverse() : delays\n    mop_up_dom.forEach((dom, index) => {\n        dom.classList.add(_delays[index])\n        setTimeout(() => {\n            dom.classList.remove(_delays[index])\n        }, second - 100)\n    })\n}\n\nanimation()\nmop_up_dom.forEach((dom) => dom.classList.toggle('run'))\nsetInterval(() => {\n    animation(is_reverse)\n    mop_up_dom.forEach((dom) => dom.classList.toggle('run'))\n    mop_up_dom.forEach((dom) => dom.classList.toggle('run-reverse'))\n    is_reverse = !is_reverse\n}, second)\n\n\n//# sourceURL=webpack://basic/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;