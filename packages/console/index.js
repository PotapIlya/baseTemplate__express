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

/***/ "./packages/console/index.ts":
/*!***********************************!*\
  !*** ./packages/console/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commander */ \"commander\");\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _templates_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/controller */ \"./packages/console/templates/controller.ts\");\n/* harmony import */ var _templates_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/route */ \"./packages/console/templates/route.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nvar Console = /** @class */ (function () {\r\n    function Console() {\r\n        console.log('Start console...');\r\n        Console.createFile(Console.initConsole());\r\n        console.log('End console...');\r\n    }\r\n    Console.initConsole = function () {\r\n        var program = new commander__WEBPACK_IMPORTED_MODULE_0__.Command();\r\n        program\r\n            .option('-c, --controller <type>', 'Controller name')\r\n            .addHelpText('after', \"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440: node app.js -p res/function -n fileName -a potap -v PIRS-2-XXX\");\r\n        program.parse(process.argv);\r\n        return program.opts();\r\n    };\r\n    Console.createFile = function (commands) {\r\n        var lengthCommandController = commands.controller.split('/').length;\r\n        var fileName = lengthCommandController ? commands.controller.split('/')[lengthCommandController - 1] : commands.controller;\r\n        // create controller\r\n        fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync(\"controllers/\".concat(commands.controller, \"Controller.ts\"), (0,_templates_controller__WEBPACK_IMPORTED_MODULE_1__.templateController)({\r\n            fileName: fileName\r\n        }));\r\n        // create route\r\n        Promise.resolve(fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync(\"router/\".concat(fileName, \".ts\"), (0,_templates_route__WEBPACK_IMPORTED_MODULE_2__.routeController)({\r\n            path: commands.controller,\r\n            fileName: fileName\r\n        }))).then(function () {\r\n            // update route\r\n            var data = fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync('./router/index.ts', {\r\n                encoding: 'utf8'\r\n            }).replace('//add', \"\\n\".concat(fileName, \", //add\"));\r\n            data = \"import { router as \".concat(fileName, \" } from './\").concat(fileName, \"';\\n\") + data;\r\n            fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync(\"./router/index.ts\", data);\r\n        });\r\n    };\r\n    return Console;\r\n}());\r\nnew Console();\r\n\n\n//# sourceURL=webpack://basetemplate__express/./packages/console/index.ts?");

/***/ }),

/***/ "./packages/console/templates/controller.ts":
/*!**************************************************!*\
  !*** ./packages/console/templates/controller.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"templateController\": () => (/* binding */ templateController)\n/* harmony export */ });\nvar templateController = function (args) {\r\n    var fileName = args.fileName;\r\n    return \"import { Request, Response } from 'express';\\n\\nclass \".concat(fileName, \"Controller {\\n\\n    constructor() {\\n        //\\n    }\\n\\n    static get(req : Request, res : Response) : Response {\\n        return res.status(200).json('get')\\n    }\\n\\n    static create(req : Request, res : Response) : Response {\\n        return  res.status(200).json('create')\\n    }\\n\\n    static store(req : Request, res : Response) : Response{\\n        return  res.status(200).json('store')\\n    }\\n\\n    static show(req : Request, res : Response) : Response{\\n        return  res.status(200).json('show -' + req.params.id)\\n    }\\n\\n    static edit(req : Request, res : Response) : Response{\\n        return  res.status(200).json('edit -' + req.params.id)\\n    }\\n\\n    static update(req : Request, res : Response) : Response{\\n        return  res.status(200).json('update')\\n    }\\n\\n    static destroy(req : Request, res : Response) : Response{\\n        return  res.status(200).json('destroy')\\n    }\\n\\n}\\n\\nexport {\\n    \").concat(fileName, \"Controller\\n}\");\r\n};\r\n\n\n//# sourceURL=webpack://basetemplate__express/./packages/console/templates/controller.ts?");

/***/ }),

/***/ "./packages/console/templates/route.ts":
/*!*********************************************!*\
  !*** ./packages/console/templates/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routeController\": () => (/* binding */ routeController)\n/* harmony export */ });\nvar routeController = function (args) {\r\n    var fileName = args.fileName, path = args.path;\r\n    return \"import * as express from 'express';\\nconst router = express();\\n\\nimport { \".concat(fileName, \"Controller } from '../controllers/\").concat(path, \"Controller'\\n\\nrouter.get('/\").concat(fileName, \"', \").concat(fileName, \"Controller.get );\\nrouter.get('/\").concat(fileName, \"/create', \").concat(fileName, \"Controller.create );\\nrouter.post('/\").concat(fileName, \"', \").concat(fileName, \"Controller.store );\\nrouter.get('/\").concat(fileName, \"/:id', \").concat(fileName, \"Controller.show );\\nrouter.get('/\").concat(fileName, \"/:id/edit', \").concat(fileName, \"Controller.edit );\\nrouter.put('/\").concat(fileName, \"/', \").concat(fileName, \"Controller.update );\\nrouter.delete('/\").concat(fileName, \"/:id', \").concat(fileName, \"Controller.destroy );\\n\\nexport {\\n    router\\n}\");\r\n};\r\n\n\n//# sourceURL=webpack://basetemplate__express/./packages/console/templates/route.ts?");

/***/ }),

/***/ "commander":
/*!***************************************!*\
  !*** external "require('commander')" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require('commander');

/***/ }),

/***/ "fs":
/*!********************************!*\
  !*** external "require('fs')" ***!
  \********************************/
/***/ ((module) => {

module.exports = require('fs');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./packages/console/index.ts");
/******/ 	
/******/ })()
;