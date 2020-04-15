(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["functors"] = factory();
	else
		root["functors"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/helpers */ \"./src/helpers/index.js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_helpers__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _src_IO_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/IO/index */ \"./src/IO/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IO\", function() { return _src_IO_index__WEBPACK_IMPORTED_MODULE_1__[\"IO\"]; });\n\n/* harmony import */ var _src_List_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/List/index */ \"./src/List/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return _src_List_index__WEBPACK_IMPORTED_MODULE_2__[\"List\"]; });\n\n/* harmony import */ var _src_Identity_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Identity/index */ \"./src/Identity/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Identity\", function() { return _src_Identity_index__WEBPACK_IMPORTED_MODULE_3__[\"Identity\"]; });\n\n/* harmony import */ var _src_Right_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Right/index */ \"./src/Right/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return _src_Right_index__WEBPACK_IMPORTED_MODULE_4__[\"Right\"]; });\n\n/* harmony import */ var _src_Left_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Left/index */ \"./src/Left/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return _src_Left_index__WEBPACK_IMPORTED_MODULE_5__[\"Left\"]; });\n\n/* harmony import */ var _src_Either_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Either/index */ \"./src/Either/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Either\", function() { return _src_Either_index__WEBPACK_IMPORTED_MODULE_6__[\"Either\"]; });\n\n/* harmony import */ var _src_createCompose_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/createCompose/index */ \"./src/createCompose/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createCompose\", function() { return _src_createCompose_index__WEBPACK_IMPORTED_MODULE_7__[\"createCompose\"]; });\n\n/* harmony import */ var _src_Map_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Map/index */ \"./src/Map/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return _src_Map_index__WEBPACK_IMPORTED_MODULE_8__[\"Map\"]; });\n\n/* harmony import */ var _src_Maybe_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Maybe/index */ \"./src/Maybe/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Maybe\", function() { return _src_Maybe_index__WEBPACK_IMPORTED_MODULE_9__[\"Maybe\"]; });\n\n/* harmony import */ var _src_Task_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Task/index */ \"./src/Task/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rejectedCallback\", function() { return _src_Task_index__WEBPACK_IMPORTED_MODULE_10__[\"rejectedCallback\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return _src_Task_index__WEBPACK_IMPORTED_MODULE_10__[\"Task\"]; });\n\n//helpers\n\n\n//functors\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://functors/./index.js?");

/***/ }),

/***/ "./src/Either/index.js":
/*!*****************************!*\
  !*** ./src/Either/index.js ***!
  \*****************************/
/*! exports provided: Either */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Either\", function() { return Either; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nclass Either {\n  constructor(x) {\n    this.$value = x;\n  }\n  \n  // ----- Pointed (Either a)\n  static of(x) {\n    return new ___WEBPACK_IMPORTED_MODULE_0__[\"Right\"](x);\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Either/index.js?");

/***/ }),

/***/ "./src/IO/index.js":
/*!*************************!*\
  !*** ./src/IO/index.js ***!
  \*************************/
/*! exports provided: IO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IO\", function() { return IO; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nclass IO {\n  constructor(fn) {\n    this.unsafePerformIO = fn;\n  }\n  \n  // [util.inspect.custom]() {\n  //   return 'IO(?)';\n  // }\n  \n  // ----- Pointed IO\n  static of(x) {\n    return new IO(() => x);\n  }\n  \n  // ----- Functor IO\n  map(fn) {\n    return new IO(Object(___WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(fn, this.unsafePerformIO));\n  }\n  \n  // ----- Applicative IO\n  ap(f) {\n    return this.chain(fn => f.map(fn));\n  }\n  \n  // ----- Monad IO\n  chain(fn) {\n    return this.map(fn).join();\n  }\n  \n  join() {\n    return new IO(() => this.unsafePerformIO().unsafePerformIO());\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/IO/index.js?");

/***/ }),

/***/ "./src/Identity/index.js":
/*!*******************************!*\
  !*** ./src/Identity/index.js ***!
  \*******************************/
/*! exports provided: Identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Identity\", function() { return Identity; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nclass Identity {\n  constructor(x) {\n    this.$value = x;\n  }\n  \n  // [util. inspect.custom]() {\n  //   return `Identity(${inspect(this.$value)})`;\n  // }\n  \n  // ----- Pointed Identity\n  static of(x) {\n    return new Identity(x);\n  }\n  \n  // ----- Functor Identity\n  map(fn) {\n    return Identity.of(fn(this.$value));\n  }\n  \n  // ----- Applicative Identity\n  ap(f) {\n    return f.map(this.$value);\n  }\n  \n  // ----- Monad Identity\n  chain(fn) {\n    return this.map(fn).join();\n  }\n  \n  join() {\n    return this.$value;\n  }\n  \n  // ----- Traversable Identity\n  sequence(of) {\n    return this.traverse(of, ___WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n  }\n  \n  traverse(of, fn) {\n    return fn(this.$value).map(Identity.of);\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Identity/index.js?");

/***/ }),

/***/ "./src/Left/index.js":
/*!***************************!*\
  !*** ./src/Left/index.js ***!
  \***************************/
/*! exports provided: Left */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return Left; });\nclass Left {\n  \n  constructor(x) {\n    this.$value = x;\n  }\n  \n  get isLeft() {\n    return true;\n  }\n  \n  get isRight() {\n    return false;\n  }\n  \n  static of(x) {\n    throw new Error('`of` called on class Left (value) instead of Either (type)');\n  }\n  \n  // [util.inspect.custom]() {\n  //   return `Left(${inspect(this.$value)})`;\n  // }\n  \n  // ----- Functor (Either a)\n  map() {\n    return this;\n  }\n  \n  // ----- Applicative (Either a)\n  ap() {\n    return this;\n  }\n  \n  // ----- Monad (Either a)\n  chain() {\n    return this;\n  }\n  \n  join() {\n    return this;\n  }\n  \n  // ----- Traversable (Either a)\n  sequence(of) {\n    return of(this);\n  }\n  \n//eslint-disable-next-line\n  traverse(of, fn) {\n    return of(this);\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Left/index.js?");

/***/ }),

/***/ "./src/List/index.js":
/*!***************************!*\
  !*** ./src/List/index.js ***!
  \***************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nclass List {\n  constructor(xs) {\n    this.$value = xs;\n  }\n  \n  // [util.inspect.custom]() {\n  //   return `List(${inspect(this.$value)})`;\n  // }\n  \n  concat(x) {\n    return new ___WEBPACK_IMPORTED_MODULE_0__[\"Index\"](this.$value.concat(x));\n  }\n  \n  // ----- Pointed List\n  static of(x) {\n    return new ___WEBPACK_IMPORTED_MODULE_0__[\"Index\"]([x]);\n  }\n  \n  // ----- Functor List\n  map(fn) {\n    return new List(this.$value.map(fn));\n  }\n  \n  // ----- Traversable List\n  sequence(of) {\n    return this.traverse(of, ___WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n  }\n  \n  traverse(of, fn) {\n    return this.$value.reduce(\n      (f, a) => fn(a).map(b => bs => bs.concat(b)).ap(f),\n      of(new List([]))\n    );\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/List/index.js?");

/***/ }),

/***/ "./src/Map/index.js":
/*!**************************!*\
  !*** ./src/Map/index.js ***!
  \**************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nclass Map {\n  constructor(x) {\n    this.$value = x;\n  }\n  \n  // [util.inspect.custom]() {\n  //   return `Map(${inspect(this.$value)})`;\n  // }\n  \n  insert(k, v) {\n    const singleton = {};\n    singleton[k] = v;\n    return Map.of(Object.assign({}, this.$value, singleton));\n  }\n  \n  reduceWithKeys(fn, zero) {\n    return Object.keys(this.$value)\n      .reduce((acc, k) => fn(acc, this.$value[k], k), zero);\n  }\n  \n  // ----- Functor (Map a)\n  map(fn) {\n    return this.reduceWithKeys(\n      (m, v, k) => m.insert(k, fn(v)),\n      new Map({})\n    );\n  }\n  \n  // ----- Traversable (Map a)\n  sequence(of) {\n    return this.traverse(of, ___WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n  }\n  \n  traverse(of, fn) {\n    return this.reduceWithKeys(\n      (f, a, k) => fn(a).map(b => m => m.insert(k, b)).ap(f),\n      of(new Map({}))\n    );\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Map/index.js?");

/***/ }),

/***/ "./src/Maybe/index.js":
/*!****************************!*\
  !*** ./src/Maybe/index.js ***!
  \****************************/
/*! exports provided: Maybe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Maybe\", function() { return Maybe; });\n/* harmony import */ var _helpers_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/identity */ \"./src/helpers/identity.js\");\n\n\nclass Maybe {\n  get isNothing() {\n    return this.$value === null || this.$value === undefined;\n  }\n  \n  get isJust() {\n    return !this.isNothing;\n  }\n  \n  constructor(x) {\n    this.$value = x;\n  }\n  \n  // [util.inspect.custom]() {\n  //   return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;\n  // }\n  \n  // ----- Pointed Maybe\n  static of(x) {\n    return new Maybe(x);\n  }\n  \n  // ----- Functor Maybe\n  map(fn) {\n    return this.isNothing ? this : Maybe.of(fn(this.$value));\n  }\n  \n  // ----- Applicative Maybe\n  ap(f) {\n    return this.isNothing ? this : f.map(this.$value);\n  }\n  \n  // ----- Monad Maybe\n  chain(fn) {\n    return this.map(fn).join();\n  }\n  \n  join() {\n    return this.isNothing ? this : this.$value;\n  }\n  \n  // ----- Traversable Maybe\n  sequence(of) {\n    return this.traverse(of, _helpers_identity__WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n  }\n  \n  traverse(of, fn) {\n    return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Maybe/index.js?");

/***/ }),

/***/ "./src/Right/index.js":
/*!****************************!*\
  !*** ./src/Right/index.js ***!
  \****************************/
/*! exports provided: Right */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nclass Right {\n  \n  constructor(x) {\n    this.$value = x;\n  }\n  \n  get isLeft() {\n    return false;\n  }\n  \n  get isRight() {\n    return true;\n  }\n  \n  static of(x) {\n    throw new Error('`of` called on class Right (value) instead of Either (type)');\n  }\n  \n  // [util.inspect.custom]() {\n  //   return `Right(${inspect(this.$value)})`;\n  // }\n  \n  // ----- Functor (Either a)\n  map(fn) {\n    return ___WEBPACK_IMPORTED_MODULE_0__[\"Either\"].of(fn(this.$value));\n  }\n  \n  // ----- Applicative (Either a)\n  ap(f) {\n    return f.map(this.$value);\n  }\n  \n  // ----- Monad (Either a)\n  chain(fn) {\n    return fn(this.$value);\n  }\n  \n  join() {\n    return this.$value;\n  }\n  \n  // ----- Traversable (Either a)\n  sequence(of) {\n    return this.traverse(of, ___WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n  }\n  \n  traverse(of, fn) {\n    fn(this.$value).map(___WEBPACK_IMPORTED_MODULE_0__[\"Either\"].of);\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Right/index.js?");

/***/ }),

/***/ "./src/Task/index.js":
/*!***************************!*\
  !*** ./src/Task/index.js ***!
  \***************************/
/*! exports provided: rejectedCallback, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rejectedCallback\", function() { return rejectedCallback; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"./index.js\");\n\n\nconst rejectedCallback = (x) => (reject, resolve) => reject(x);\n\nclass Task {\n  constructor(fork) {\n    this.fork = fork;\n  }\n  \n  // [util.inspect.custom]() {\n  //   return 'Task(?)';\n  // }\n  \n  static rejected(x) {\n    return new Task(rejectedCallback(x));\n  }\n  \n  // ----- Pointed (Task a)\n  static of(x) {\n    return new Task((_, resolve) => resolve(x));\n  }\n  \n  // ----- Functor (Task a)\n  map(fn) {\n    return new Task((reject, resolve) => this.fork(reject, Object(___WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(resolve, fn)));\n  }\n  \n  // ----- Applicative (Task a)\n  ap(f) {\n    return this.chain(fn => f.map(fn));\n  }\n  \n  // ----- Monad (Task a)\n  chain(fn) {\n    return new Task((reject, resolve) => this.fork(reject, x => fn(x).fork(reject, resolve)));\n  }\n  \n  join() {\n    return this.chain(___WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n  }\n}\n\n\n//# sourceURL=webpack://functors/./src/Task/index.js?");

/***/ }),

/***/ "./src/createCompose/index.js":
/*!************************************!*\
  !*** ./src/createCompose/index.js ***!
  \************************************/
/*! exports provided: createCompose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCompose\", function() { return createCompose; });\n/* harmony import */ var _helpers_curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/curry */ \"./src/helpers/curry.js\");\n\n\nconst createCompose = Object(_helpers_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((F, G) => class Compose {\n  constructor(x) {\n    this.$value = x;\n  }\n  \n  // [util.inspect.custom]() {\n  //   return `Compose(${inspect(this.$value)})`;\n  // }\n  \n  // ----- Pointed (Compose F G)\n  static of(x) {\n    return new Compose(F(G(x)));\n  }\n  \n  // ----- Functor (Compose F G)\n  map(fn) {\n    return new Compose(this.$value.map(x => x.map(fn)));\n  }\n  \n  // ----- Applicative (Compose F G)\n  ap(f) {\n    return f.map(this.$value);\n  }\n});\n\n\n//# sourceURL=webpack://functors/./src/createCompose/index.js?");

/***/ }),

/***/ "./src/helpers/always.js":
/*!*******************************!*\
  !*** ./src/helpers/always.js ***!
  \*******************************/
/*! exports provided: always */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"always\", function() { return always; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/helpers/curry.js\");\n\n\n// always :: a -> b -> a\n\n//eslint-disable-next-line\nconst always = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((a, b) => a);\n\n\n\n//# sourceURL=webpack://functors/./src/helpers/always.js?");

/***/ }),

/***/ "./src/helpers/compose.js":
/*!********************************!*\
  !*** ./src/helpers/compose.js ***!
  \********************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z\nconst compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];\n\n\n//# sourceURL=webpack://functors/./src/helpers/compose.js?");

/***/ }),

/***/ "./src/helpers/curry.js":
/*!******************************!*\
  !*** ./src/helpers/curry.js ***!
  \******************************/
/*! exports provided: curry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return curry; });\n// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c\nfunction curry(fn) {\n  const arity = fn.length;\n  \n  return function $curry(...args) {\n    if (args.length < arity) {\n      return $curry.bind(null, ...args);\n    }\n    \n    return fn.call(null, ...args);\n  };\n}\n\n\n//# sourceURL=webpack://functors/./src/helpers/curry.js?");

/***/ }),

/***/ "./src/helpers/either.js":
/*!*******************************!*\
  !*** ./src/helpers/either.js ***!
  \*******************************/
/*! exports provided: either */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"either\", function() { return either; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/helpers/curry.js\");\n\n\n// either :: (a -> c) -> (b -> c) -> Either a b -> c\nconst either = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((f, g, e) => {\n  if (e.isLeft) {\n    return f(e.$value);\n  }\n  \n  return g(e.$value);\n});\n\n\n//# sourceURL=webpack://functors/./src/helpers/either.js?");

/***/ }),

/***/ "./src/helpers/identity.js":
/*!*********************************!*\
  !*** ./src/helpers/identity.js ***!
  \*********************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n// identity :: x -> x\nconst identity = x => x;\n\n\n//# sourceURL=webpack://functors/./src/helpers/identity.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./always */ \"./src/helpers/always.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"always\", function() { return _always__WEBPACK_IMPORTED_MODULE_0__[\"always\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ \"./src/helpers/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_1__[\"compose\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curry */ \"./src/helpers/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_2__[\"curry\"]; });\n\n/* harmony import */ var _either__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./either */ \"./src/helpers/either.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"either\", function() { return _either__WEBPACK_IMPORTED_MODULE_3__[\"either\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ \"./src/helpers/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_4__[\"identity\"]; });\n\n/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspect */ \"./src/helpers/inspect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inspect\", function() { return _inspect__WEBPACK_IMPORTED_MODULE_5__[\"inspect\"]; });\n\n/* harmony import */ var _left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left */ \"./src/helpers/left.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"left\", function() { return _left__WEBPACK_IMPORTED_MODULE_6__[\"left\"]; });\n\n/* harmony import */ var _liftA2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./liftA2 */ \"./src/helpers/liftA2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"liftA2\", function() { return _liftA2__WEBPACK_IMPORTED_MODULE_7__[\"liftA2\"]; });\n\n/* harmony import */ var _liftA3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liftA3 */ \"./src/helpers/liftA3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"liftA3\", function() { return _liftA3__WEBPACK_IMPORTED_MODULE_8__[\"liftA3\"]; });\n\n/* harmony import */ var _maybe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maybe */ \"./src/helpers/maybe.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"maybe\", function() { return _maybe__WEBPACK_IMPORTED_MODULE_9__[\"maybe\"]; });\n\n/* harmony import */ var _nothing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nothing */ \"./src/helpers/nothing.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nothing\", function() { return _nothing__WEBPACK_IMPORTED_MODULE_10__[\"nothing\"]; });\n\n/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reject */ \"./src/helpers/reject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reject\", function() { return _reject__WEBPACK_IMPORTED_MODULE_11__[\"reject\"]; });\n\n/* harmony import */ var _pointfree_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pointfree-utilities */ \"./src/helpers/pointfree-utilities/index.js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pointfree_utilities__WEBPACK_IMPORTED_MODULE_12__) if([\"always\",\"compose\",\"curry\",\"either\",\"identity\",\"inspect\",\"left\",\"liftA2\",\"liftA3\",\"maybe\",\"nothing\",\"reject\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pointfree_utilities__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n\n\n\n\n\n\n\n\n\n\n\n//pointfree utilities\n\n\n\n//# sourceURL=webpack://functors/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/inspect.js":
/*!********************************!*\
  !*** ./src/helpers/inspect.js ***!
  \********************************/
/*! exports provided: inspect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inspect\", function() { return inspect; });\n// inspect :: a -> String\nconst inspect = (x) => {\n  if (x && typeof x.inspect === 'function') {\n    return x.inspect();\n  }\n  \n  function inspectFn(f) {\n    return f.name ? f.name : f.toString();\n  }\n  \n  function inspectTerm(t) {\n    switch (typeof t) {\n      case 'string':\n        return `'${t}'`;\n      case 'object': {\n        const ts = Object.keys(t).map(k => [k, inspect(t[k])]);\n        return `{${ts.map(kv => kv.join(': ')).join(', ')}}`;\n      }\n      default:\n        return String(t);\n    }\n  }\n  \n  function inspectArgs(args) {\n    return Array.isArray(args) ? `[${args.map(inspect).join(', ')}]` : inspectTerm(args);\n  }\n  \n  return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);\n};\n\n\n//# sourceURL=webpack://functors/./src/helpers/inspect.js?");

/***/ }),

/***/ "./src/helpers/left.js":
/*!*****************************!*\
  !*** ./src/helpers/left.js ***!
  \*****************************/
/*! exports provided: left */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"left\", function() { return left; });\n/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Left */ \"./src/Left/index.js\");\n\n\n// left :: a -> Either a b\nconst left = a => new _Left__WEBPACK_IMPORTED_MODULE_0__[\"Left\"](a);\n\n\n//# sourceURL=webpack://functors/./src/helpers/left.js?");

/***/ }),

/***/ "./src/helpers/liftA2.js":
/*!*******************************!*\
  !*** ./src/helpers/liftA2.js ***!
  \*******************************/
/*! exports provided: liftA2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liftA2\", function() { return liftA2; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/helpers/curry.js\");\n\n\n// liftA2 :: (Applicative f) => (a1 -> a2 -> b) -> f a1 -> f a2 -> f b\nconst liftA2 = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, a1, a2) => a1.map(fn).ap(a2));\n\n\n//# sourceURL=webpack://functors/./src/helpers/liftA2.js?");

/***/ }),

/***/ "./src/helpers/liftA3.js":
/*!*******************************!*\
  !*** ./src/helpers/liftA3.js ***!
  \*******************************/
/*! exports provided: liftA3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liftA3\", function() { return liftA3; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/helpers/curry.js\");\n\n\n// liftA3 :: (Applicative f) => (a1 -> a2 -> a3 -> b) -> f a1 -> f a2 -> f a3 -> f b\nconst liftA3 = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, a1, a2, a3) => a1.map(fn).ap(a2).ap(a3));\n\n\n//# sourceURL=webpack://functors/./src/helpers/liftA3.js?");

/***/ }),

/***/ "./src/helpers/maybe.js":
/*!******************************!*\
  !*** ./src/helpers/maybe.js ***!
  \******************************/
/*! exports provided: maybe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maybe\", function() { return maybe; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/helpers/curry.js\");\n\n\n// maybe :: b -> (a -> b) -> Maybe a -> b\nconst maybe = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((v, f, m) => {\n  if (m.isNothing) {\n    return v;\n  }\n  \n  return f(m.$value);\n});\n\n\n//# sourceURL=webpack://functors/./src/helpers/maybe.js?");

/***/ }),

/***/ "./src/helpers/nothing.js":
/*!********************************!*\
  !*** ./src/helpers/nothing.js ***!
  \********************************/
/*! exports provided: nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nothing\", function() { return nothing; });\n/* harmony import */ var _Maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maybe */ \"./src/Maybe/index.js\");\n\n\n// nothing :: Maybe a\nconst nothing = _Maybe__WEBPACK_IMPORTED_MODULE_0__[\"Maybe\"].of(null);\n\n\n//# sourceURL=webpack://functors/./src/helpers/nothing.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/add.js":
/*!************************************************!*\
  !*** ./src/helpers/pointfree-utilities/add.js ***!
  \************************************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// add :: Number -> Number -> Number\nconst add = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((a, b) => a + b);\n\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/add.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/append.js":
/*!***************************************************!*\
  !*** ./src/helpers/pointfree-utilities/append.js ***!
  \***************************************************/
/*! exports provided: append */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flip */ \"./src/helpers/pointfree-utilities/flip.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/helpers/pointfree-utilities/concat.js\");\n\n\n\n// append :: String -> String -> String\nconst append = Object(_flip__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"]);\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/append.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/chain.js":
/*!**************************************************!*\
  !*** ./src/helpers/pointfree-utilities/chain.js ***!
  \**************************************************/
/*! exports provided: chain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return chain; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// chain :: Monad m => (a -> m b) -> m a -> m b\nconst chain = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, m) => m.chain(fn));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/chain.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/concat.js":
/*!***************************************************!*\
  !*** ./src/helpers/pointfree-utilities/concat.js ***!
  \***************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// concat :: String -> String -> String\nconst concat = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((a, b) => a.concat(b));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/concat.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/eq.js":
/*!***********************************************!*\
  !*** ./src/helpers/pointfree-utilities/eq.js ***!
  \***********************************************/
/*! exports provided: eq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eq\", function() { return eq; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// eq :: Eq a => a -> a -> Boolean\nconst eq = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((a, b) => a === b);\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/eq.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/filter.js":
/*!***************************************************!*\
  !*** ./src/helpers/pointfree-utilities/filter.js ***!
  \***************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// filter :: (a -> Boolean) -> [a] -> [a]\nconst filter = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, xs) => xs.filter(fn));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/filter.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/flip.js":
/*!*************************************************!*\
  !*** ./src/helpers/pointfree-utilities/flip.js ***!
  \*************************************************/
/*! exports provided: flip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return flip; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// flip :: (a -> b -> c) -> b -> a -> c\nconst flip = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, a, b) => fn(b, a));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/flip.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/forEach.js":
/*!****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/forEach.js ***!
  \****************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEach\", function() { return forEach; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// forEach :: (a -> ()) -> [a] -> ()\nconst forEach = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, xs) => xs.forEach(fn));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/forEach.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/head.js":
/*!*************************************************!*\
  !*** ./src/helpers/pointfree-utilities/head.js ***!
  \*************************************************/
/*! exports provided: head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return head; });\n// head :: [a] -> a\nconst head = xs => xs[0];\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/head.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/index.js":
/*!**************************************************!*\
  !*** ./src/helpers/pointfree-utilities/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./src/helpers/pointfree-utilities/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"add\"]; });\n\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ \"./src/helpers/pointfree-utilities/append.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return _append__WEBPACK_IMPORTED_MODULE_1__[\"append\"]; });\n\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chain */ \"./src/helpers/pointfree-utilities/chain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return _chain__WEBPACK_IMPORTED_MODULE_2__[\"chain\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concat */ \"./src/helpers/pointfree-utilities/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_3__[\"concat\"]; });\n\n/* harmony import */ var _eq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eq */ \"./src/helpers/pointfree-utilities/eq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eq\", function() { return _eq__WEBPACK_IMPORTED_MODULE_4__[\"eq\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ \"./src/helpers/pointfree-utilities/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flip */ \"./src/helpers/pointfree-utilities/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_6__[\"flip\"]; });\n\n/* harmony import */ var _forEach__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forEach */ \"./src/helpers/pointfree-utilities/forEach.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"forEach\", function() { return _forEach__WEBPACK_IMPORTED_MODULE_7__[\"forEach\"]; });\n\n/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./head */ \"./src/helpers/pointfree-utilities/head.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return _head__WEBPACK_IMPORTED_MODULE_8__[\"head\"]; });\n\n/* harmony import */ var _intercalate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./intercalate */ \"./src/helpers/pointfree-utilities/intercalate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"intercalate\", function() { return _intercalate__WEBPACK_IMPORTED_MODULE_9__[\"intercalate\"]; });\n\n/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./join */ \"./src/helpers/pointfree-utilities/join.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return _join__WEBPACK_IMPORTED_MODULE_10__[\"join\"]; });\n\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./last */ \"./src/helpers/pointfree-utilities/last.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return _last__WEBPACK_IMPORTED_MODULE_11__[\"last\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map */ \"./src/helpers/pointfree-utilities/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_12__[\"map\"]; });\n\n/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./match */ \"./src/helpers/pointfree-utilities/match.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"match\", function() { return _match__WEBPACK_IMPORTED_MODULE_13__[\"match\"]; });\n\n/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./prop */ \"./src/helpers/pointfree-utilities/prop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prop\", function() { return _prop__WEBPACK_IMPORTED_MODULE_14__[\"prop\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reduce */ \"./src/helpers/pointfree-utilities/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_15__[\"reduce\"]; });\n\n/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./replace */ \"./src/helpers/pointfree-utilities/replace.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"replace\", function() { return _replace__WEBPACK_IMPORTED_MODULE_16__[\"replace\"]; });\n\n/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reverse */ \"./src/helpers/pointfree-utilities/reverse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverse\", function() { return _reverse__WEBPACK_IMPORTED_MODULE_17__[\"reverse\"]; });\n\n/* harmony import */ var _safeHead__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./safeHead */ \"./src/helpers/pointfree-utilities/safeHead.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safeHead\", function() { return _safeHead__WEBPACK_IMPORTED_MODULE_18__[\"safeHead\"]; });\n\n/* harmony import */ var _safeLast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./safeLast */ \"./src/helpers/pointfree-utilities/safeLast.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safeLast\", function() { return _safeLast__WEBPACK_IMPORTED_MODULE_19__[\"safeLast\"]; });\n\n/* harmony import */ var _safeProp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./safeProp */ \"./src/helpers/pointfree-utilities/safeProp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safeProp\", function() { return _safeProp__WEBPACK_IMPORTED_MODULE_20__[\"safeProp\"]; });\n\n/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sequence */ \"./src/helpers/pointfree-utilities/sequence.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sequence\", function() { return _sequence__WEBPACK_IMPORTED_MODULE_21__[\"sequence\"]; });\n\n/* harmony import */ var _sortBy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sortBy */ \"./src/helpers/pointfree-utilities/sortBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sortBy\", function() { return _sortBy__WEBPACK_IMPORTED_MODULE_22__[\"sortBy\"]; });\n\n/* harmony import */ var _split__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./split */ \"./src/helpers/pointfree-utilities/split.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"split\", function() { return _split__WEBPACK_IMPORTED_MODULE_23__[\"split\"]; });\n\n/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./take */ \"./src/helpers/pointfree-utilities/take.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"take\", function() { return _take__WEBPACK_IMPORTED_MODULE_24__[\"take\"]; });\n\n/* harmony import */ var _toLowerCase__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./toLowerCase */ \"./src/helpers/pointfree-utilities/toLowerCase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toLowerCase\", function() { return _toLowerCase__WEBPACK_IMPORTED_MODULE_25__[\"toLowerCase\"]; });\n\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./toString */ \"./src/helpers/pointfree-utilities/toString.js\");\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_toString__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toString__WEBPACK_IMPORTED_MODULE_26__) if([\"add\",\"append\",\"chain\",\"concat\",\"eq\",\"filter\",\"flip\",\"forEach\",\"head\",\"intercalate\",\"join\",\"last\",\"map\",\"match\",\"prop\",\"reduce\",\"replace\",\"reverse\",\"safeHead\",\"safeLast\",\"safeProp\",\"sequence\",\"sortBy\",\"split\",\"take\",\"toLowerCase\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toString__WEBPACK_IMPORTED_MODULE_26__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _toUpperCase__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./toUpperCase */ \"./src/helpers/pointfree-utilities/toUpperCase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toUpperCase\", function() { return _toUpperCase__WEBPACK_IMPORTED_MODULE_27__[\"toUpperCase\"]; });\n\n/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./traverse */ \"./src/helpers/pointfree-utilities/traverse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return _traverse__WEBPACK_IMPORTED_MODULE_28__[\"traverse\"]; });\n\n/* harmony import */ var _unsafePerformIO__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./unsafePerformIO */ \"./src/helpers/pointfree-utilities/unsafePerformIO.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unsafePerformIO\", function() { return _unsafePerformIO__WEBPACK_IMPORTED_MODULE_29__[\"unsafePerformIO\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/index.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/intercalate.js":
/*!********************************************************!*\
  !*** ./src/helpers/pointfree-utilities/intercalate.js ***!
  \********************************************************/
/*! exports provided: intercalate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"intercalate\", function() { return intercalate; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// intercalate :: String -> [String] -> String\nconst intercalate = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((str, xs) => xs.join(str));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/intercalate.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/join.js":
/*!*************************************************!*\
  !*** ./src/helpers/pointfree-utilities/join.js ***!
  \*************************************************/
/*! exports provided: join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n// join :: Monad m => m (m a) -> m a\nconst join = m => m.join();\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/join.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/last.js":
/*!*************************************************!*\
  !*** ./src/helpers/pointfree-utilities/last.js ***!
  \*************************************************/
/*! exports provided: last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return last; });\n// last :: [a] -> a\nconst last = xs => xs[xs.length - 1];\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/last.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/map.js":
/*!************************************************!*\
  !*** ./src/helpers/pointfree-utilities/map.js ***!
  \************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// map :: Functor f => (a -> b) -> f a -> f b\nconst map = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, f) => f.map(fn));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/map.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/match.js":
/*!**************************************************!*\
  !*** ./src/helpers/pointfree-utilities/match.js ***!
  \**************************************************/
/*! exports provided: match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"match\", function() { return match; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// match :: RegExp -> String -> Boolean\nconst match = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((re, str) => re.test(str));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/match.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/prop.js":
/*!*************************************************!*\
  !*** ./src/helpers/pointfree-utilities/prop.js ***!
  \*************************************************/
/*! exports provided: prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prop\", function() { return prop; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// prop :: String -> Object -> a\nconst prop = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((p, obj) => obj[p]);\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/prop.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/reduce.js":
/*!***************************************************!*\
  !*** ./src/helpers/pointfree-utilities/reduce.js ***!
  \***************************************************/
/*! exports provided: reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// reduce :: (b -> a -> b) -> b -> [a] -> b\nconst reduce = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, zero, xs) => xs.reduce(fn, zero));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/reduce.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/replace.js":
/*!****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/replace.js ***!
  \****************************************************/
/*! exports provided: replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replace\", function() { return replace; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// replace :: RegExp -> String -> String -> String\nconst replace = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((re, rpl, str) => str.replace(re, rpl));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/replace.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/reverse.js":
/*!****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/reverse.js ***!
  \****************************************************/
/*! exports provided: reverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverse\", function() { return reverse; });\n// reverse :: [a] -> [a]\nconst reverse = x => (Array.isArray(x) ? x.reverse() : x.split('').reverse().join(''));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/reverse.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/safeHead.js":
/*!*****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/safeHead.js ***!
  \*****************************************************/
/*! exports provided: safeHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeHead\", function() { return safeHead; });\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compose */ \"./src/helpers/compose.js\");\n/* harmony import */ var _Maybe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Maybe */ \"./src/Maybe/index.js\");\n/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head */ \"./src/helpers/pointfree-utilities/head.js\");\n\n\n\n\n// safeHead :: [a] -> Maybe a\nconst safeHead = Object(_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_Maybe__WEBPACK_IMPORTED_MODULE_1__[\"Maybe\"].of, _head__WEBPACK_IMPORTED_MODULE_2__[\"head\"]);\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/safeHead.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/safeLast.js":
/*!*****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/safeLast.js ***!
  \*****************************************************/
/*! exports provided: safeLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeLast\", function() { return safeLast; });\n/* harmony import */ var _Maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Maybe */ \"./src/Maybe/index.js\");\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compose */ \"./src/helpers/compose.js\");\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./last */ \"./src/helpers/pointfree-utilities/last.js\");\n\n\n\n\n// safeLast :: [a] -> Maybe a\nconst safeLast = Object(_compose__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(_Maybe__WEBPACK_IMPORTED_MODULE_0__[\"Maybe\"].of, _last__WEBPACK_IMPORTED_MODULE_2__[\"last\"]);\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/safeLast.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/safeProp.js":
/*!*****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/safeProp.js ***!
  \*****************************************************/
/*! exports provided: safeProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeProp\", function() { return safeProp; });\n/* harmony import */ var _Maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Maybe */ \"./src/Maybe/index.js\");\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compose */ \"./src/helpers/compose.js\");\n/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prop */ \"./src/helpers/pointfree-utilities/prop.js\");\n\n\n\n\n\n// safeProp :: String -> Object -> Maybe a\nconst safeProp = Object(_curry__WEBPACK_IMPORTED_MODULE_1__[\"curry\"])((p, obj) => Object(_compose__WEBPACK_IMPORTED_MODULE_2__[\"compose\"])(_Maybe__WEBPACK_IMPORTED_MODULE_0__[\"Maybe\"].of, Object(_prop__WEBPACK_IMPORTED_MODULE_3__[\"prop\"])(p))(obj));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/safeProp.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/sequence.js":
/*!*****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/sequence.js ***!
  \*****************************************************/
/*! exports provided: sequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sequence\", function() { return sequence; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// sequence :: (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)\nconst sequence = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((of, f) => f.sequence(of));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/sequence.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/sortBy.js":
/*!***************************************************!*\
  !*** ./src/helpers/pointfree-utilities/sortBy.js ***!
  \***************************************************/
/*! exports provided: sortBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortBy\", function() { return sortBy; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// sortBy :: Ord b => (a -> b) -> [a] -> [a]\nconst sortBy = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((fn, xs) => xs.sort((a, b) => {\n  if (fn(a) === fn(b)) {\n    return 0;\n  }\n  \n  return fn(a) > fn(b) ? 1 : -1;\n}));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/sortBy.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/split.js":
/*!**************************************************!*\
  !*** ./src/helpers/pointfree-utilities/split.js ***!
  \**************************************************/
/*! exports provided: split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"split\", function() { return split; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n // split :: String -> String -> [String]\n\nconst split = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((sep, str) => str.split(sep));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/split.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/take.js":
/*!*************************************************!*\
  !*** ./src/helpers/pointfree-utilities/take.js ***!
  \*************************************************/
/*! exports provided: take */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"take\", function() { return take; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n\n// take :: Number -> [a] -> [a]\nconst take = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((n, xs) => xs.slice(0, n));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/take.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/toLowerCase.js":
/*!********************************************************!*\
  !*** ./src/helpers/pointfree-utilities/toLowerCase.js ***!
  \********************************************************/
/*! exports provided: toLowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toLowerCase\", function() { return toLowerCase; });\n// toLowerCase :: String -> String\n\nconst toLowerCase = s => s.toLowerCase();\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/toLowerCase.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/toString.js":
/*!*****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/toString.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// toString :: a -> String\n\nconst toString = String;\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/toString.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/toUpperCase.js":
/*!********************************************************!*\
  !*** ./src/helpers/pointfree-utilities/toUpperCase.js ***!
  \********************************************************/
/*! exports provided: toUpperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toUpperCase\", function() { return toUpperCase; });\n// toUpperCase :: String -> String\n\nconst toUpperCase = s => s.toUpperCase();\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/toUpperCase.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/traverse.js":
/*!*****************************************************!*\
  !*** ./src/helpers/pointfree-utilities/traverse.js ***!
  \*****************************************************/
/*! exports provided: traverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return traverse; });\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/helpers/curry.js\");\n\n// traverse :: (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)\nconst traverse = Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])((of, fn, f) => f.traverse(of, fn));\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/traverse.js?");

/***/ }),

/***/ "./src/helpers/pointfree-utilities/unsafePerformIO.js":
/*!************************************************************!*\
  !*** ./src/helpers/pointfree-utilities/unsafePerformIO.js ***!
  \************************************************************/
/*! exports provided: unsafePerformIO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unsafePerformIO\", function() { return unsafePerformIO; });\n// unsafePerformIO :: IO a -> a\nconst unsafePerformIO = io => io.unsafePerformIO();\n\n\n//# sourceURL=webpack://functors/./src/helpers/pointfree-utilities/unsafePerformIO.js?");

/***/ }),

/***/ "./src/helpers/reject.js":
/*!*******************************!*\
  !*** ./src/helpers/reject.js ***!
  \*******************************/
/*! exports provided: reject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reject\", function() { return reject; });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Task */ \"./src/Task/index.js\");\n\n\n// reject :: a -> Task a b\nconst reject = a => _Task__WEBPACK_IMPORTED_MODULE_0__[\"Task\"].rejected(a);\n\n\n//# sourceURL=webpack://functors/./src/helpers/reject.js?");

/***/ })

/******/ });
});