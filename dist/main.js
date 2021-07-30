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

eval("const mop_up_dom = document.querySelectorAll('[data-mop-up]')\nconst delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4']\nconst second = 2800\nlet is_reverse = true\n\nconst animation = (is_reverse = false) => {\n  const _delays = is_reverse ? delays.reverse() : delays\n  mop_up_dom.forEach((dom, index) => {\n    dom.classList.add(_delays[index])\n    setTimeout(() => {\n      dom.classList.remove(_delays[index])\n    }, second - 100)\n  })\n}\n\nanimation()\nmop_up_dom.forEach(dom => dom.classList.toggle('run'))\nsetInterval(() => {\n  animation(is_reverse)\n  const a = 1\n}, second)\n\nconst canvas = Array.from(document.getElementsByClassName('runway'))\nconsole.log(canvas)\nconst blockWidth = 500\nconst PI2 = Math.PI * 2\n\ncanvas.forEach(c => draw(c))\n\nfunction draw(canvas) {\n  let timer = 0\n  canvas.width = blockWidth\n  canvas.height = blockWidth\n  const ctx = canvas.getContext('2d')\n\n  let gradient = ctx.createLinearGradient(100, 500, 0, 0)\n  gradient.addColorStop(0, 'rgb(237,237,255)')\n  gradient.addColorStop(0.25, 'rgb(180,179,255)')\n  gradient.addColorStop(0.5, 'rgb(108,109,255)')\n  gradient.addColorStop(0.75, 'rgb(106,255,11)')\n  gradient.addColorStop(1, 'rgb(167,171,255)')\n\n  function run() {\n    timer++\n    const start_time = parseInt(timer / 20)\n    drawerCircle({ ctx, start_time })\n\n    requestAnimationFrame(run)\n  }\n  run()\n}\n\nfunction drawerCircle({ ctx, start_time }) {\n  ctx.clearRect(0, 0, blockWidth, blockWidth)\n  // const colors = ['green', 'yellow', 'blue']\n  const angle2 = ((start_time % 50) / 50) * PI2\n  const angle1 = ((start_time % 100) / 100) * PI2\n\n  ctx.save()\n  ctx.beginPath()\n  ctx.translate(250, 250)\n  ctx.rotate(0.5 * Math.PI)\n  // ctx.fillStyle = colors[ratio % 3]\n  // ctx.fillStyle = gradient\n  ctx.arc(0, 0, blockWidth / 3, angle1, angle2)\n  ctx.lineTo(0, 0)\n  ctx.fill()\n  ctx.closePath()\n  ctx.restore()\n}\n\n\n//# sourceURL=webpack://basic/./src/index.js?");

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