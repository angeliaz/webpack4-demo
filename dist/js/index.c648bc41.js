/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.less":
/*!***************************!*\
  !*** ./src/css/main.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.less?");

/***/ }),

/***/ "./src/images/newer.png":
/*!******************************!*\
  !*** ./src/images/newer.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/newer.b1a293ab.png\";\n\n//# sourceURL=webpack:///./src/images/newer.png?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _promise_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise/promise.js */ \"./src/js/promise/promise.js\");\n/* harmony import */ var _promise_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promise_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.less */ \"./src/css/main.less\");\n/* harmony import */ var _css_main_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_less__WEBPACK_IMPORTED_MODULE_1__);\n\r\n// import '../css/index.css';\r\n\r\n\r\n// addImage.js\r\nlet smallImg = document.createElement('img')\r\n// 必须 require 进来\r\nsmallImg.src = __webpack_require__(/*! ../images/newer.png */ \"./src/images/newer.png\")\r\n// console.log(smallImg)\r\ndocument.body.appendChild(smallImg)\r\n\r\n/* let bigImg = document.createElement('img')\r\nbigImg.src = require('../images/big.jpeg')\r\ndocument.body.appendChild(bigImg) */\r\n\r\nconsole.log('index');\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/promise/promise.js":
/*!***********************************!*\
  !*** ./src/js/promise/promise.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function dbFuc(db) {\r\n  let docs = [{a:1}, {a:2}, {a:3}];\r\n  let promises = docs.map((doc) => setTimeout(() => {\r\n    // console.log(performance.now())\r\n  }, 1000));\r\n\r\n  let results = [];\r\n  for (let promise of promises) {\r\n    await promise;\r\n  }\r\n  console.log(results);\r\n}\r\ndbFuc();\r\n\r\nfor (let item in [1,2,3]) {\r\n  // console.log(item);\r\n}\r\n\r\nasync function* gen1() {\r\n  yield 'hello';\r\n}\r\nconst genObj = gen1();\r\ngenObj.next().then(x => console.log(x));\r\n\r\nfunction test1(params) {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      resolve(1);\r\n    }, 1000);\r\n  })\r\n}\r\nconst p1 = new Promise(function (resolve, reject) {\r\n  setTimeout(() => {\r\n    console.log('p2');reject(new Error('fail'))\r\n  }, 3000)\r\n})\r\n\r\nconst p2 = new Promise(function (resolve, reject) {\r\n  setTimeout(() => {\r\n    console.log('p1')\r\n    resolve(p1)\r\n  }, 1000)\r\n})\r\n\r\np2\r\n  .then(result => console.log('result', result))\r\n  .catch(error => console.log('error', error))\r\n\r\nlet promise = new Promise(function(resolve, reject) {\r\n  console.log('Promise');\r\n  resolve();\r\n});\r\n\r\npromise.then(function() {\r\n  console.log('resolved.');\r\n});\r\n\r\nnew Promise((resolve, reject) => {\r\n  // throw new Error('test');\r\n  console.log(2222);\r\n  console.log(aaa + 1);\r\n  resolve(11111);\r\n}).then(r => {\r\n  throw new Error('test11');\r\n  console.log(123);\r\n  return 3333;\r\n  // console.log(aaa)\r\n}).catch((err1, err2) => {console.error('err1', err1, err2);return 444})\r\n.then(r2 => {console.log(r2);console.log(r22)})\r\n.catch(err2 => {console.error('err2',err2)})\r\n.finally(res => {console.log('fina', res);})\r\n\r\nconsole.log('end~~~');\n\n//# sourceURL=webpack:///./src/js/promise/promise.js?");

/***/ })

/******/ });