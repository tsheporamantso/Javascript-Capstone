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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hover_like_icon.svg */ \"./img/hover_like_icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/like_icon.svg */ \"./img/like_icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Google font */\\r\\n\\r\\n/* page reset styles */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --font-mont: \\\"Montserrat\\\", sans-serif;\\r\\n  --clr-dark: #fff, sans-serif;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.flex-row {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.flex-column {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 1rem 0.2rem;\\r\\n  gap: 2rem;\\r\\n  background-color: #54146d;\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n  align-items: center;\\r\\n  transition: all 0.3s ease-in-out;\\r\\n  position: fixed;\\r\\n  width: 7rem;\\r\\n  left: -7rem;\\r\\n  height: 100%;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.nav__item {\\r\\n  width: max-content;\\r\\n}\\r\\n\\r\\n.open {\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n.hamburger {\\r\\n  position: absolute;\\r\\n  top: 1rem;\\r\\n  right: -2.5rem;\\r\\n}\\r\\n\\r\\n.hamburger:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.hamburger span {\\r\\n  display: block;\\r\\n  background-color: black;\\r\\n  margin: 0.4rem 0;\\r\\n  height: 0.4rem;\\r\\n  width: 2.1rem;\\r\\n  border-radius: 0.15rem;\\r\\n  transition: 0.3s all ease-in-out;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.change.first-bar {\\r\\n  top: 0.8rem;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.change.second-bar {\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.change.third-bar {\\r\\n  bottom: 0.755rem;\\r\\n  transform: rotate(-45deg);\\r\\n}\\r\\n\\r\\n.brand__name b {\\r\\n  font-size: 1.5rem;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-style: italic;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.item_number {\\r\\n  border-radius: 50%;\\r\\n  background-color: #ecd718;\\r\\n  color: white;\\r\\n  padding: 0.1rem 0.5rem;\\r\\n  position: absolute;\\r\\n  margin-top: -1.2rem;\\r\\n  margin-left: 2rem;\\r\\n}\\r\\n\\r\\n.nav__menu {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 3rem;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.nav__menu li {\\r\\n  cursor: pointer;\\r\\n  border-bottom: 2px solid transparent;\\r\\n  transition: border 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.nav__menu li:hover {\\r\\n  cursor: pointer;\\r\\n  border-bottom: 2px solid #ecd718;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.icon__hot {\\r\\n  padding: 0.7rem 0.6rem;\\r\\n  background-color: #ecd718;\\r\\n  border-radius: 50%;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  font-size: 0.7em;\\r\\n  font-weight: 600;\\r\\n  box-shadow: 0.7rem 0.7rem 1rem rgba(185, 184, 184, 0.6);\\r\\n}\\r\\n\\r\\n.icon__like {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  opacity: 0.15;\\r\\n  background-repeat: no-repeat;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.2s ease-in-out;\\r\\n  color: transparent;\\r\\n  padding: 0.1rem 1rem;\\r\\n}\\r\\n\\r\\n.icon__like:hover {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  opacity: 0.4;\\r\\n}\\r\\n\\r\\n.icon__like:active {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  object-fit: cover;\\r\\n  border-radius: 20px;\\r\\n  width: 40vw;\\r\\n  height: 50vw;\\r\\n  margin: 0.7rem;\\r\\n  transition: 0.3s all ease-in-out;\\r\\n}\\r\\n\\r\\n.food__icon {\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.food__item {\\r\\n  align-items: center;\\r\\n  width: 70vw;\\r\\n  justify-content: center;\\r\\n  border-radius: 2rem;\\r\\n  padding: 2rem;\\r\\n  gap: 0.5rem;\\r\\n  transition: all 0.4s ease-in-out;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.shift .food__item {\\r\\n  margin-left: 7rem;\\r\\n  width: 60vw;\\r\\n}\\r\\n\\r\\n.food__item:hover {\\r\\n  background-color: #fff;\\r\\n  border-radius: 2rem;\\r\\n  box-shadow: 0.05rem 0.05rem 1rem rgba(185, 184, 184, 0.6);\\r\\n}\\r\\n\\r\\n.food__image {\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.food__name,\\r\\n.food__area {\\r\\n  text-transform: uppercase;\\r\\n  font-size: 0.8rem;\\r\\n  font-weight: 550;\\r\\n  width: 120%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: white;\\r\\n  border-radius: 2rem;\\r\\n  border: 1px solid black;\\r\\n  cursor: pointer;\\r\\n  color: black;\\r\\n  font-size: 0.75rem;\\r\\n  font-weight: bold;\\r\\n  padding: 8px 18px;\\r\\n  transition: 0.3s all ease-in-out;\\r\\n  margin-top: 0.5rem;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: #ecd718;\\r\\n  color: white;\\r\\n  border: 1px solid transparent;\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  scale: 0.75;\\r\\n}\\r\\n\\r\\n.foods__container {\\r\\n  background-color: rgb(253, 249, 243);\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(1, 1fr);\\r\\n  gap: 1.75rem;\\r\\n  padding: 1rem;\\r\\n  place-items: center;\\r\\n}\\r\\n\\r\\n/* comment popUp */\\r\\n.model {\\r\\n  display: none;\\r\\n  background-color: rgba(221, 221, 221, 0.455);\\r\\n  backdrop-filter: blur(3px);\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  position: fixed;\\r\\n  z-index: 999;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n.model__content::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.model__name {\\r\\n  text-align: center;\\r\\n  font-weight: 500;\\r\\n  color: #c9b71b;\\r\\n}\\r\\n\\r\\n.model__prop {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  grid-column-gap: 20px;\\r\\n  padding: 1rem 0;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.model__item {\\r\\n  font-family: var(--font-mont);\\r\\n  font-size: 15px;\\r\\n  font-weight: 300;\\r\\n  color: rgb(255, 253, 253);\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.span__content {\\r\\n  color: #c9b71b;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\nfooter a {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.span__content a {\\r\\n  color: #c9b71b;\\r\\n}\\r\\n\\r\\n.span__content a:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  float: right;\\r\\n  display: block;\\r\\n  border: none;\\r\\n  position: relative;\\r\\n  bottom: 10px;\\r\\n  left: -50px;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.close:hover {\\r\\n  background: none;\\r\\n  color: black;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.x__btn {\\r\\n  font-size: 4rem;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n/* model comment */\\r\\n.form__title {\\r\\n  font-family: var(--font-mont);\\r\\n  text-align: center;\\r\\n  color: rgb(216, 189, 189);\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.post__comment {\\r\\n  margin-top: 14px;\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.post__comment__title {\\r\\n  font-family: var(--font-mont);\\r\\n  font-weight: 400;\\r\\n  color: rgb(255, 255, 255);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.listed__comment {\\r\\n  font-family: var(--font-mont);\\r\\n  font-size: 15px;\\r\\n  color: #c9b71b;\\r\\n  font-weight: 500;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n/* model form */\\r\\n.comment__form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  padding-top: 2rem;\\r\\n}\\r\\n\\r\\n.input__field {\\r\\n  padding: 0.5rem;\\r\\n  font-family: var(--font-mont);\\r\\n  border-radius: 10px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.input__field:focus {\\r\\n  outline: none;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.form__btn {\\r\\n  width: fit-content;\\r\\n  padding: 0.5rem 0.8rem;\\r\\n}\\r\\n\\r\\n/* footer */\\r\\nfooter {\\r\\n  margin-top: auto;\\r\\n  background-color: rgb(32, 32, 32);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  color: white;\\r\\n  font-size: 0.6rem;\\r\\n}\\r\\n\\r\\n.footer__brand span,\\r\\n.footer__brand b {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.creator {\\r\\n  font-weight: 400;\\r\\n  color: #c9b71b;\\r\\n}\\r\\n\\r\\n.creator strong {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n/* pop */\\r\\n\\r\\n.img {\\r\\n  object-fit: cover;\\r\\n  border-radius: 20px;\\r\\n  background-color: rgb(241, 232, 232);\\r\\n  width: 90%;\\r\\n  height: 50%;\\r\\n  margin: 0.7rem;\\r\\n  transition: 0.3s all ease-in-out;\\r\\n}\\r\\n\\r\\n.pop-windo {\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  top: 200%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  width: 90%;\\r\\n  height: 90vh;\\r\\n  border-radius: 1rem;\\r\\n  background-color: #440e4c;\\r\\n  transition: 0.3s all ease-in-out;\\r\\n  padding: 1rem;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n.chat {\\r\\n  width: max-content;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.pop-windo::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.slide {\\r\\n  top: 50%;\\r\\n}\\r\\n\\r\\n.food__description {\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.food__information {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n/* pop */\\r\\n\\r\\n/* form message */\\r\\n\\r\\n.message {\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n  animation: slideDown 0.3s linear;\\r\\n}\\r\\n\\r\\n.success,\\r\\n.danger {\\r\\n  line-height: 0;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.success {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.danger {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  body {\\r\\n    overflow-x: hidden;\\r\\n  }\\r\\n\\r\\n  nav {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    padding: 1rem 2rem;\\r\\n    position: static;\\r\\n    width: 100vw;\\r\\n  }\\r\\n\\r\\n  .hamburger {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .nav__menu {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    gap: 3rem;\\r\\n  }\\r\\n\\r\\n  .foods__container {\\r\\n    background-color: rgb(253, 249, 243);\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n\\r\\n  .food__item {\\r\\n    width: 40vw;\\r\\n  }\\r\\n\\r\\n  .shift .food__item {\\r\\n    margin-left: 0;\\r\\n    width: 40vw;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    width: 25vw;\\r\\n    height: 40vw;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 1200px) {\\r\\n  .foods__container {\\r\\n    background-color: rgb(253, 249, 243);\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(4, 1fr);\\r\\n  }\\r\\n\\r\\n  .food__item {\\r\\n    width: 20vw;\\r\\n  }\\r\\n\\r\\n  .shift .food__item {\\r\\n    width: 20vw;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    width: 12.5vw;\\r\\n    height: 20vw;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_renderLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderLikes.js */ \"./src/modules/renderLikes.js\");\n/* harmony import */ var _modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/allItemsCounter.js */ \"./src/modules/allItemsCounter.js\");\n/* harmony import */ var _modules_addLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _modules_renderFoodItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderFoodItems.js */ \"./src/modules/renderFoodItems.js\");\n/* harmony import */ var _modules_displayPop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayPop.js */ \"./src/modules/displayPop.js\");\n/* harmony import */ var _modules_postComment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/postComment.js */ \"./src/modules/postComment.js\");\n\n\n\n\n\n\n\n\n\n\nconst bodyEl = document.querySelector('body');\nconst foodContainerEl = document.querySelector('main');\nconst hamburgerEl = document.querySelector('.hamburger');\nconst navEl = document.querySelector('nav');\nconst barsEl = document.getElementsByClassName('bar');\nconst itemsNumberEl = document.querySelector('.item_number');\n\nitemsNumberEl.innerHTML = (0,_modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst toggleNav = () => {\n  hamburgerEl.addEventListener('click', () => {\n    navEl.classList.toggle('open');\n    [...barsEl].forEach((item) => {\n      item.classList.toggle('change');\n    });\n    foodContainerEl.classList.toggle('shift');\n  });\n};\nconst model = document.querySelector('.model');\nconst pop = document.querySelector('.pop-windo');\n\nfoodContainerEl.addEventListener('click', async (e) => {\n  if (e.target.className === 'icon__like') {\n    await (0,_modules_addLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.parentNode.id);\n    (0,_modules_renderLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  } else if (e.target.className === 'pop-window') {\n    const { id } = e.target.parentNode.childNodes[1].childNodes[3];\n    (0,_modules_displayPop_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id);\n\n    setTimeout(() => {\n      pop.classList.add('slide');\n    }, 100);\n\n    model.style.display = 'block';\n\n    pop.addEventListener('click', (e) => {\n      if (e.target.className === 'chat') {\n        e.preventDefault();\n        let username = document.querySelector('input').value;\n        let comment = document.querySelector('textarea').value;\n        const successMsg = document.querySelector('.success');\n        const dangerMsg = document.querySelector('.danger');\n\n        if (username === '' || comment === '') {\n          dangerMsg.style.display = 'block';\n          setTimeout(() => {\n            dangerMsg.style.display = 'none';\n          }, 1500);\n          return;\n        }\n\n        const { id } = e.target.parentNode.parentNode;\n        const commentObj = {\n          item_id: id,\n          comment,\n          username,\n        };\n        (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(commentObj);\n\n        document.querySelector('input').value = '';\n        document.querySelector('textarea').value = '';\n\n        successMsg.style.display = 'block';\n\n        setTimeout(() => {\n          dangerMsg.style.display = 'none';\n          successMsg.style.display = 'none';\n          username = '';\n          comment = '';\n        }, 1000);\n      }\n    });\n\n    bodyEl.addEventListener('click', (e) => {\n      if (e.target.className === 'x__btn' || e.target.className === 'model') {\n        pop.classList.remove('slide');\n        setTimeout(() => {\n          model.style.display = 'none';\n        }, 400);\n      }\n    });\n  }\n});\n\n(0,_modules_renderFoodItems_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\ntoggleNav();\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n\n\nconst addLikes = async (id) => {\n  const like = {\n    item_id: id,\n    likes: 1,\n  };\n  await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.likeApiEndPoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(like),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/allItemsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/allItemsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = () => {\n  const allCards = document.querySelectorAll('.foods__container').length;\n  let sum = 0;\n\n  for (let i = 0; i <= allCards; i += 1) {\n    sum = i;\n  }\n  const mealTitle = document.querySelector('#recipe');\n  mealTitle.innerHTML = `Meals(${sum})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/allItemsCounter.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentBaseApi\": () => (/* binding */ commentBaseApi),\n/* harmony export */   \"foodBaseUrl\": () => (/* binding */ foodBaseUrl),\n/* harmony export */   \"likeApiEndPoint\": () => (/* binding */ likeApiEndPoint)\n/* harmony export */ });\n/* harmony import */ var _foodItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodItems.js */ \"./src/modules/foodItems.js\");\n\n\nconst commentApiKey = 'KTRp7FI3FBVZYfboByZV';\nconst commentBaseApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentApiKey}/comments`;\nconst likeKey = 'o3ZbADYRisQBifGzcDCQ';\nconst likeURL = 'https://us-central1-involvement-api.cloudfunctions.net';\n\nconst likeApiEndPoint = `${likeURL}/capstoneApi/apps/${likeKey}/likes`;\n\nconst foodURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';\n\nconst foodBaseUrl = [];\n\n_foodItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n  foodBaseUrl.push(`${foodURL}=${item}`);\n});\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/countComment.js":
/*!*************************************!*\
  !*** ./src/modules/countComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounters = () => {\n  const counter = [];\n  let totalCount = 0;\n  const commentCounter = document.querySelectorAll('.post__comment');\n  const postCount = document.querySelector('.post__comment__title span');\n  commentCounter.forEach(async (each) => {\n    counter.push(each.children);\n  });\n  counter.forEach((count) => {\n    totalCount = count.length;\n    postCount.innerHTML = `(${totalCount})`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounters);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/countComment.js?");

/***/ }),

/***/ "./src/modules/displayPop.js":
/*!***********************************!*\
  !*** ./src/modules/displayPop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\n\nconst pop = document.querySelector('.pop-windo');\nconst foodContainerEl = document.querySelector('.foods__container');\n\nconst displayPop = (id) => {\n  let markup = '';\n  _config_js__WEBPACK_IMPORTED_MODULE_0__.foodBaseUrl.forEach(async (item) => {\n    try {\n      const res = await fetch(item);\n      const data = await res.json();\n      if (!res.ok) {\n        foodContainerEl.innerHTML = 'Server Down';\n      }\n\n      data.meals.forEach((item) => {\n        if (item.idMeal === id) {\n          markup += `\n          <div class=\"model__container\">\n          <button class=\"close\" type=\"button\">\n            <span class=\"x__btn\">×</span>\n          </button>\n        </div>\n          <div class=\"flex-column food__description model__head\">\n          \n              <img class=\"img\" src=\"${item.strMealThumb}\" alt=\"\">\n              <h2 class=\"model__name\">${item.strMeal}</h2>\n              <ul class=\"model__prop\">\n                <li class=\"model__item\">\n                  <span>Category: </span>\n                  <span class=\"span__content\">${item.strCategory}</span>\n                </li>\n                  <li class=\"model__item\">\n                    <span>Area: </span>\n                    <span class=\"span__content\">${item.strArea}</span>\n                  </li>\n                  <li class=\"model__item\">\n                    <span>Tags: </span>\n                    <span class=\"span__content\">${item.strIngredient10}</span>\n                  </li>\n                  <li class=\"model__item\">\n                    <span>Source: </span>\n                    <span class=\"span__content\"><a href=\"${item.strYoutube}\">YouTube</a></span>\n                  </li>\n                </ul>\n          </div>\n\n          <div class=\"comment__container\" id=${item.idMeal}>\n          <h2 class=\"post__comment__title\">Comments<span></span></h2>\n             <div class=\"comments\">\n              <div class=\"comments__item post__comment\"> \n              </div>\n             </div>\n             <form class=\"comment__form\">\n              <input class=\"input__field\" type=\"text\" id=\"name\" placeholder=\"Your name\">\n              <textarea class=\"input__field\" id=\"input\" cols=\"30\" rows=\"10\" placeholder=\"Your insight\"></textarea>\n             <button class=\"chat\">Send</button> \n             <div class=\"message\">\n             <p class=\"success\">Form successfully submited</p>\n             <p class=\"danger\">Please fill in the form</p>\n           </div>\n             </form>\n             \n          </div>\n      </section>`;\n          pop.innerHTML = markup;\n          (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n        }\n      });\n    } catch (err) {\n      foodContainerEl.innerHTML = err;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPop);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/displayPop.js?");

/***/ }),

/***/ "./src/modules/foodItems.js":
/*!**********************************!*\
  !*** ./src/modules/foodItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst foodItems = ['Arrabiata', 'Pizza', 'Shawarma', 'Burger', 'Salmon Prawn Risotto', 'Steak Diane', 'Soup', 'Lentils', 'Tandoori chicken', 'Noodles'];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodItems);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/foodItems.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n/* harmony import */ var _countComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countComment.js */ \"./src/modules/countComment.js\");\n\n\n\nconst getComments = async (id) => {\n  const commentEl = document.querySelector('.comments__item');\n  let markup = '';\n  try {\n    const res = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.commentBaseApi}?item_id=${id}`);\n    const data = await res.json();\n    data.forEach((comment) => {\n      markup += `\n            <li class=\"listed__comment\">\n            <span class=\"date\">${comment.creation_date} > </span>\n            <span class=\"name\"> >  ${comment.username}:</span>\n            <span class=\"comment\">${comment.comment}</span>\n            </li>\n             `;\n    });\n    commentEl.innerHTML = markup;\n    (0,_countComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return 'done';\n  } catch (err) {\n    return err;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\n\nconst postComment = async (commentObj) => {\n  try {\n    const res = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.commentBaseApi, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(commentObj),\n    });\n    if (!res) {\n      return res;\n    }\n\n    (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentObj.item_id);\n    return 'done';\n  } catch (err) {\n    return err;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/renderFoodItems.js":
/*!****************************************!*\
  !*** ./src/modules/renderFoodItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n/* harmony import */ var _renderLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderLikes.js */ \"./src/modules/renderLikes.js\");\n\n\n\nconst foodContainerEl = document.querySelector('.foods__container');\n\nconst renderFoodItems = async () => {\n  let markup = '';\n\n  _config_js__WEBPACK_IMPORTED_MODULE_0__.foodBaseUrl.forEach(async (item) => {\n    try {\n      const res = await fetch(item);\n      const data = await res.json();\n      if (!res.ok) {\n        foodContainerEl.innerHTML = 'Server Down';\n      }\n\n      data.meals.forEach((item) => {\n        markup += `\n            <section class=\"food__item flex-column\">\n            <div class=\"food__icon flex-row\">\n            <span class=\"icon__hot\">HOT</span>\n            <span class=\"icon\" id=${item.idMeal}>\n            <span class=\"icon__like\"></span>\n            <span class=\"like__count\"></span>\n            </span>\n            </div>\n            <div class=\"food__image\">\n            <img src=\"${item.strMealThumb}\" alt=\"asdf\"></div>\n            <p class=\"food__name\">${item.strMeal}</p>\n            <p class=\"food__area\">${item.strArea}</p>\n            <button class=\"pop-window\">Comments</button>\n            </section>`;\n        foodContainerEl.innerHTML = markup;\n        (0,_renderLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.idMeal);\n        return 'done';\n      });\n    } catch (err) {\n      foodContainerEl.innerHTML = err;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFoodItems);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/renderFoodItems.js?");

/***/ }),

/***/ "./src/modules/renderLikes.js":
/*!************************************!*\
  !*** ./src/modules/renderLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n\n\nconst likeCountEl = document.getElementsByClassName('like__count');\n\nconst renderLikes = async () => {\n  try {\n    const res = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.likeApiEndPoint);\n    const data = await res.json();\n    const likeCount = [...likeCountEl];\n    data.forEach(async (item) => {\n      likeCount.forEach((itemid) => {\n        if (item.item_id === itemid.parentNode.id) {\n          itemid.innerHTML = item.likes;\n        }\n      });\n    });\n  } catch (err) {\n    likeCountEl.item = err;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLikes);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/renderLikes.js?");

/***/ }),

/***/ "./img/hover_like_icon.svg":
/*!*********************************!*\
  !*** ./img/hover_like_icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3c8d9cd3b1b32df8b8a.svg\";\n\n//# sourceURL=webpack://javascript-capstone-project/./img/hover_like_icon.svg?");

/***/ }),

/***/ "./img/like_icon.svg":
/*!***************************!*\
  !*** ./img/like_icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2050e51e4666954803e9.svg\";\n\n//# sourceURL=webpack://javascript-capstone-project/./img/like_icon.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;