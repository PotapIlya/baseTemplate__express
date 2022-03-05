/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.app = void 0;\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar router_1 = __webpack_require__(/*! ./router */ \"./router/index.ts\");\r\n// const cors = require('cors');\r\n// const cookieParser = require('cookie-parser');\r\n// const router = require('./routes/index')\r\n// const errorMiddleware = require('./middleware/errorMiddleware')\r\n//\r\nvar app = express();\r\nexports.app = app;\r\napp.use(router_1.allRoutes);\r\n\n\n//# sourceURL=webpack://basetemplate__express/./app.ts?");

/***/ }),

/***/ "./router/index.ts":
/*!*************************!*\
  !*** ./router/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.allRoutes = void 0;\r\nvar main_1 = __webpack_require__(/*! ./main */ \"./router/main.ts\");\r\nexports.allRoutes = [\r\n    main_1.router, //add\r\n];\r\n\n\n//# sourceURL=webpack://basetemplate__express/./router/index.ts?");

/***/ }),

/***/ "./router/main.ts":
/*!************************!*\
  !*** ./router/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.router = void 0;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar router = express();\r\nexports.router = router;\r\nvar mainController_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/controllers/mainController'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nrouter.get('/', mainController_1.mainController.get);\r\nrouter.get('/create', mainController_1.mainController.create);\r\nrouter.post('/', mainController_1.mainController.store);\r\nrouter.get('/:id', mainController_1.mainController.show);\r\nrouter.get('/:id/edit', mainController_1.mainController.edit);\r\nrouter.put('/', mainController_1.mainController.update);\r\nrouter.delete('/:id', mainController_1.mainController.destroy);\r\n\n\n//# sourceURL=webpack://basetemplate__express/./router/main.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_1 = __webpack_require__(/*! ./app */ \"./app.ts\");\r\nvar PORT = process.env.PORT || 7000;\r\napp_1.app.listen(PORT, function () { console.log('Server listening on http://localhost:' + PORT); });\r\n\n\n//# sourceURL=webpack://basetemplate__express/./server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.ts");
/******/ 	
/******/ })()
;