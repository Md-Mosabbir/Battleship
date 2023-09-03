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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Exo+2:wght@600&family=Roboto:wght@300&family=Rubik+Iso&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  list-style: none;\r\n}\r\n\r\n:root {\r\n  --cell-size: 46px;\r\n  --layout-number: calc(var(--cell-size) - 40px);\r\n  --number-and-grid-width: 20px;\r\n\r\n  /* *-------Colours------*  */\r\n  --neutral-white: #fff;\r\n  --neutral-black: #000;\r\n\r\n  --grid-bg-color: hsl(194, 100%, 50%);\r\n  --nav-bg-color: #312e2b;\r\n  --nav-content-color: rgba(0, 0, 0, 0.514);\r\n  --name-bg-color: rgb(68, 68, 68);\r\n\r\n  /* *-------Font-------*  */\r\n  --primary-font-family: 'Exo 2', sans-serif;\r\n  --labels-font-family: 'Black Ops One', cursive;\r\n  --title-font-family: 'Rubik Iso', cursive;\r\n  --name-font-family: 'Roboto', sans-serif;\r\n\r\n  /* *-------Font Size-------*  */\r\n\r\n  --label-font-size: 1.05rem;\r\n  --name-font-size: 1rem;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n\r\n  gap: 3rem;\r\n  place-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ! -----------------------The letters of the board -----------------------------------------*/\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n.all-letters {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, var(--cell-size));\r\n  gap: 2px;\r\n  padding-left: var(--number-and-grid-width);\r\n  font-weight: 900;\r\n}\r\n\r\n.letter {\r\n  width: var(--cell-size);\r\n  font-family: var(--labels-font-family);\r\n  font-size: var(--label-font-size);\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 25px;\r\n}\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* !-----------------------The numbers of the board -----------------------------------------*/\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n.number-and-grid {\r\n  display: grid;\r\n  grid-template-columns: var(--number-and-grid-width) 1fr;\r\n}\r\n.all-numbers {\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 1fr);\r\n\r\n  font-weight: 900;\r\n}\r\n.number {\r\n  font-family: var(--labels-font-family);\r\n  font-size: var(--label-font-size);\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* !-----------------------The GRID of the board -----------------------------------------*/\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template: repeat(10, var(--cell-size)) / repeat(10, var(--cell-size));\r\n\r\n  gap: 2px;\r\n}\r\n\r\n.cell {\r\n  width: 100%;\r\n  aspect-ratio: 1/1;\r\n  background-color: hsl(194, 100%, 50%);\r\n}\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* !-----------------------NAV BAR ------------------------------------------------------------*/\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\nnav {\r\n  display: grid;\r\n  grid-template-rows: 10% auto 1fr;\r\n  border: 1px solid var(--neutral-black);\r\n  background-color: var(--nav-bg-color);\r\n\r\n  min-width: calc(20rem + 2vw);\r\n  max-width: 32rem;\r\n  padding: 2rem;\r\n  border-radius: 0.75rem;\r\n}\r\nmain {\r\n  width: fit-content;\r\n}\r\nnav h1 {\r\n  font-family: var(--title-font-family);\r\n  color: var(--neutral-white);\r\n  font-size: 2rem;\r\n}\r\n\r\nnav button,\r\nnav input {\r\n  font-family: 'Exo 2', sans-serif;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  padding: 1.2em 1em;\r\n  margin-block: 0.5em;\r\n  border-radius: 0.75rem;\r\n  text-align: left;\r\n\r\n  border: 1px solid var(--nav-content-color);\r\n  background-color: hsla(0, 0%, 0%, 0.72);\r\n  color: var(--neutral-white);\r\n  box-shadow: inset 0 -0.1rem 0 0 var(--nav-content-color);\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  justify-content: center;\r\n}\r\n\r\nnav input::placeholder {\r\n  color: #ffffff59;\r\n}\r\n\r\nnav button:hover {\r\n  background-color: #000;\r\n  scale: 1.001;\r\n}\r\n\r\n#start {\r\n  background-color: #008000;\r\n  padding: 1.5em 2em;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n#start:active {\r\n  background-color: greenyellow;\r\n  color: #000;\r\n}\r\nnav button:active {\r\n  background-color: greenyellow;\r\n  color: #000;\r\n}\r\n.game-on {\r\n  width: 100%;\r\n}\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* !-----------------------IN GAME -  GRIDS ------------------------------------------------------------*/\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n.span-width {\r\n  grid-column: 1 / span 2;\r\n}\r\n\r\n.both-divs {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n}\r\n.board-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n/* !-----------------------NAMES ------------------------------------------------------------*/\r\n\r\n.name-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  gap: 2rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.name-container > div {\r\n  background-color: var(--name-bg-color);\r\n  font-family: var(--name-font-family);\r\n  font-size: var(--name-font-family);\r\n  padding: 0.35em 0.62em;\r\n  border: 1px solid rgba(0, 0, 0, 0.349);\r\n  color: #fff;\r\n  border-radius: 1rem;\r\n}\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* !----------------------- Gameover ------------------------------------------------------------*/\r\n/* ----------------------------------------------------------------------------------------- */\r\n#gameover-container {\r\n  background-color: var(--nav-bg-color);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#gameover {\r\n  min-width: 50%;\r\n  min-height: 20rem;\r\n  background-color: #008000;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n#gameover h1 {\r\n  font-family: var(--labels-font-family);\r\n  font-size: 2.5rem;\r\n}\r\n\r\n#gameover p {\r\n  font-size: 1.5rem;\r\n  color: var(--neutral-white);\r\n  background-color: var(--neutral-black);\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n/* ----------------------------------------------------------------------------------------- */\r\n/* ----------------------------------------------------------------------------------------- */\r\n\r\nfooter {\r\n  font-family: var(--name-font-family);\r\n  background-color: #333;\r\n  width: 100%;\r\n  height: 70%;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.bottom {\r\n  align-self: end;\r\n}\r\n\r\nfooter p {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfooter ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nfooter li {\r\n  font-size: 1rem;\r\n  margin: 5px 0;\r\n}\r\n\r\n/* Link Styles */\r\nfooter a {\r\n  color: var(--grid-bg-color);\r\n  text-decoration: none;\r\n  transition: color 0.3s;\r\n  font-size: 0.8rem;\r\n}\r\n\r\nfooter a:hover {\r\n  color: #007bff;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 1150px) {\r\n  :root {\r\n    --cell-size: 32px;\r\n  }\r\n  nav {\r\n    min-width: 40rem;\r\n    margin-bottom: 25rem;\r\n    margin-inline: 2rem;\r\n  }\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  :root {\r\n    --cell-size: 32px;\r\n    --label-font-size: 0.8rem;\r\n    --name-font-family: 0.8rem;\r\n  }\r\n  nav {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  :root {\r\n    --cell-size: 27px;\r\n    --number-and-grid-width: 15px;\r\n    --label-font-size: 0.7rem;\r\n    --name-font-family: 0.4rem;\r\n  }\r\n  .letter {\r\n    place-items: center;\r\n  }\r\n  .number {\r\n    justify-content: flex-end;\r\n  }\r\n  .number-and-grid {\r\n    gap: 0.5rem;\r\n  }\r\n  #gameover h1 {\r\n    font-size: 2rem;\r\n  }\r\n  #gameover p {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/gameOver.js":
/*!************************************!*\
  !*** ./src/components/gameOver.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction gameOver(player, computer) {\r\n  //* Use the player.gameover() for if statement\r\n\r\n  function content(person) {\r\n    const gameoverContainer = document.createElement('div')\r\n    gameoverContainer.id = 'gameover-container'\r\n\r\n    const gameover = document.createElement('div')\r\n    gameover.id = 'gameover'\r\n\r\n    const winnerHeader = document.createElement('h1')\r\n\r\n    winnerHeader.textContent = 'Gameover'\r\n\r\n    const winnerName = document.createElement('p')\r\n    winnerName.textContent = `${person.name} is the Winner!`\r\n\r\n    gameover.appendChild(winnerHeader)\r\n    gameover.appendChild(winnerName)\r\n    gameoverContainer.appendChild(gameover)\r\n    document.body.appendChild(gameoverContainer)\r\n  }\r\n  if (player.gameOver() === true) {\r\n    content(player)\r\n  } else if (computer.gameOver() === true) {\r\n    content(computer)\r\n  }\r\n\r\n  //* create the ui with retry and new game button\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameOver);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/gameOver.js?");

/***/ }),

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/components/ship.js\");\n\r\n\r\nfunction Gameboard() {\r\n  // Todo: Create a function to push 5 ships and returns the array.\r\n\r\n  function createShips() {\r\n    const ships = []\r\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Aircraft-Carrier', 5))\r\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Battleship', 4))\r\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submarine-1', 3))\r\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submarine-2', 3))\r\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Destroyer', 2))\r\n\r\n    return ships\r\n  }\r\n  // Todo: Create a function to assign boundary and returns the array.\r\n\r\n  function assignBoundary(arr, i) {\r\n    //* Make a copy of the array\r\n    const array = [...arr]\r\n    const ships = array[i]\r\n\r\n    //* Iterate over ships for the coordinates and push it to the boundary property\r\n\r\n    ships.boundary = []\r\n    //* Add boundary around the ships\r\n    // Top\r\n    if (ships.orientation === 'vertical') {\r\n      const bottom = [ships.coordinates[0][0], ships.coordinates[0][1] - 1]\r\n      const top = [\r\n        ships.coordinates[ships.lengthShips - 1][0],\r\n        ships.coordinates[ships.lengthShips - 1][1] + 1,\r\n      ]\r\n      const cornerB1 = [bottom[0] - 1, bottom[1]]\r\n      const cornerB2 = [bottom[0] + 1, bottom[1]]\r\n      const cornerT1 = [top[0] - 1, top[1]]\r\n      const cornerT2 = [top[0] + 1, top[1]]\r\n      ships.boundary.push(bottom, cornerB1, cornerB2, top, cornerT1, cornerT2)\r\n\r\n      ships.coordinates.map((coords) =>\r\n        ships.boundary.push(\r\n          coords,\r\n          [coords[0] + 1, coords[1]],\r\n          [coords[0] - 1, coords[1]]\r\n        )\r\n      )\r\n    } else if (ships.orientation === 'horizontal') {\r\n      const left = [ships.coordinates[0][0] - 1, ships.coordinates[0][1]]\r\n      const right = [\r\n        ships.coordinates[ships.lengthShips - 1][0] + 1,\r\n        ships.coordinates[ships.lengthShips - 1][1],\r\n      ]\r\n      const cornerB1 = [left[0], left[1] - 1]\r\n      const cornerB2 = [left[0], left[1] + 1]\r\n      const cornerT1 = [right[0], right[1] - 1]\r\n      const cornerT2 = [right[0], right[1] + 1]\r\n      ships.boundary.push(left, cornerB1, cornerB2, right, cornerT1, cornerT2)\r\n\r\n      ships.coordinates.map((coords) =>\r\n        ships.boundary.push(\r\n          coords,\r\n          [coords[0], coords[1] + 1],\r\n          [coords[0], coords[1] - 1]\r\n        )\r\n      )\r\n    }\r\n\r\n    return array\r\n  }\r\n\r\n  // Todo: assign coordinates\r\n  function setCoordinates(arr, index, x, y) {\r\n    const array = [...arr]\r\n    const ship = array[index]\r\n\r\n    const updatedShip = { ...ship, coordinates: [], boundary: [] }\r\n\r\n    if (ship.orientation === 'vertical') {\r\n      for (let c = 0; c < ship.lengthShips; c++) {\r\n        updatedShip.coordinates.push([x, y + c])\r\n      }\r\n    } else if (ship.orientation === 'horizontal') {\r\n      for (let d = 0; d < ship.lengthShips; d++) {\r\n        updatedShip.coordinates.push([x + d, y])\r\n      }\r\n    }\r\n    array[index] = updatedShip\r\n    return array\r\n  }\r\n\r\n  function changeOrientation(arr, i) {\r\n    const array = [...arr]\r\n    const ship = array[i]\r\n\r\n    if (ship.orientation === 'vertical') {\r\n      ship.orientation = 'horizontal'\r\n    } else if (ship.orientation === 'horizontal') {\r\n      ship.orientation = 'vertical'\r\n    }\r\n\r\n    return array\r\n  }\r\n  function matchBoundary(arr, i) {\r\n    const ship = arr[i]\r\n\r\n    for (let ships = 0; ships < arr.length; ships++) {\r\n      if (ships !== i) {\r\n        // Avoid checking the same ship\r\n        const otherShip = arr[ships]\r\n\r\n        for (let b = 0; b < otherShip.boundary.length; b++) {\r\n          const coordinate = otherShip.boundary[b]\r\n\r\n          // Check if any of the ship's coordinates match the boundary\r\n          const found = ship.coordinates.some(\r\n            (itm) => itm.toString() === coordinate.toString()\r\n          )\r\n\r\n          if (found) {\r\n            return true\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    return false\r\n  }\r\n\r\n  function transgress(arr, i) {\r\n    const array = [...arr]\r\n    const ship = array[i]\r\n    return ship.coordinates.some((coords) => {\r\n      const x = coords[0]\r\n      const y = coords[1]\r\n      return x < 0 || x > 9 || y < 0 || y > 9\r\n    })\r\n  }\r\n\r\n  function assignCoordinates(arr, i, x, y) {\r\n    const temporaryChange = setCoordinates(arr, i, x, y)\r\n\r\n    if (\r\n      matchBoundary(temporaryChange, i) === false &&\r\n      transgress(temporaryChange, i) === false\r\n    ) {\r\n      const boundary = assignBoundary(temporaryChange, i)\r\n      return boundary\r\n    }\r\n\r\n    return arr // Return the original array when conditions are met\r\n  }\r\n\r\n  function assignOrientation(arr, i) {\r\n    const array = [...arr]\r\n    const temporaryChange = changeOrientation(array, i)\r\n    const ship = temporaryChange[i]\r\n    const anchor = ship.coordinates[0]\r\n    const finalReturn = assignCoordinates(\r\n      temporaryChange,\r\n      i,\r\n      anchor[0],\r\n      anchor[1]\r\n    )\r\n\r\n    if (temporaryChange[i].coordinates === finalReturn[i].coordinates) {\r\n      const returnShip = changeOrientation(temporaryChange, i)\r\n      return returnShip // Return the modified array with coordinates assigned and conditions met\r\n    }\r\n\r\n    return finalReturn\r\n\r\n    // Return the original array when conditions are not met\r\n  }\r\n\r\n  // Todo:  Create random coordinate that !match boundaries\r\n\r\n  // Todo: random Orientation\r\n\r\n  // Function to get a random orientation\r\n  function randomOrientation(arr) {\r\n    const array = arr.map((ship) => ({\r\n      ...ship,\r\n      boundary: [],\r\n      coordinates: [],\r\n    })) // Reset boundary for each ship\r\n    const orientations = ['vertical', 'horizontal']\r\n\r\n    for (let i = 0; i < array.length; i++) {\r\n      const randomIndex = Math.floor(Math.random() * 2) // Generate 0 or 1\r\n      array[i].orientation = orientations[randomIndex]\r\n    }\r\n\r\n    return array\r\n  }\r\n\r\n  // Todo: delete destroyed ship\r\n  function destroyShip(arr) {\r\n    // Use the filter function to remove sunk ships from the array\r\n    const updatedShips = arr.filter((ship) => !ship.isSunk())\r\n\r\n    return updatedShips\r\n  }\r\n  // Todo: Missed attack manager\r\n  function matchCoords(array, a, b) {\r\n    return [...array].some((ship) =>\r\n      ship.coordinates.some((coords) => coords[0] === a && coords[1] === b)\r\n    )\r\n  }\r\n  // Todo: recieveAttack()\r\n  function recieveAttack(arr, x, y, missedArray) {\r\n    const array = [...arr]\r\n\r\n    // Check if any ship's coordinate matches (x, y)\r\n    const isMatch = array.find((ship) =>\r\n      ship.coordinates.some((coords) => coords[0] === x && coords[1] === y)\r\n    )\r\n\r\n    if (isMatch) {\r\n      // Assuming hit() marks the ship as hit\r\n      isMatch.hit()\r\n      const updatedShips = destroyShip(array, isMatch) // Assuming destroyShip() removes the destroyed ship\r\n      return updatedShips\r\n    }\r\n\r\n    // If there is no match, add the missed attack coordinates to the missedArray\r\n    missedArray.push([x, y])\r\n\r\n    return array\r\n  }\r\n\r\n  // Todo: track destroyed ship\r\n  function trackShips(arr) {\r\n    const array = [...arr]\r\n\r\n    if (array.length === 0) {\r\n      return true\r\n    }\r\n    return false\r\n  }\r\n  function getShips(arr) {\r\n    return [...arr].length\r\n  }\r\n\r\n  // Todo: Function to assign random coordinates to all ships\r\n\r\n  function createRandomCoordinate(arr, shipIndex) {\r\n    const array = [...arr]\r\n    const index = array[shipIndex]\r\n    let x\r\n    let y\r\n    let isMatchBoundary\r\n\r\n    do {\r\n      if (index.orientation === 'vertical') {\r\n        x = Math.floor(Math.random() * 10)\r\n        y = Math.floor(Math.random() * (10 - index.lengthShips))\r\n      } else if (index.orientation === 'horizontal') {\r\n        x = Math.floor(Math.random() * (10 - index.lengthShips))\r\n        y = Math.floor(Math.random() * 10)\r\n      }\r\n\r\n      // eslint-disable-next-line no-loop-func\r\n      isMatchBoundary = array.some((ships) =>\r\n        ships.boundary.some(\r\n          (boundary) => boundary[0] === x && boundary[1] === y\r\n        )\r\n      )\r\n    } while (isMatchBoundary)\r\n\r\n    return [x, y]\r\n  }\r\n\r\n  function assignRandomCoordinates(arr) {\r\n    let isValid = false\r\n\r\n    while (!isValid) {\r\n      let newArray = randomOrientation([...arr])\r\n\r\n      for (let index = 0; index < arr.length; index++) {\r\n        const [x, y] = createRandomCoordinate(newArray, index)\r\n        newArray = assignCoordinates(newArray, index, x, y)\r\n\r\n        if (matchBoundary(newArray, index) || transgress(newArray, index)) {\r\n          isValid = false\r\n          break\r\n        } else {\r\n          isValid = true\r\n        }\r\n      }\r\n\r\n      // Check if any ship in newArray has an empty array of coordinates\r\n      if (isValid) {\r\n        const hasEmptyCoordinates = newArray.some(\r\n          (ship) => ship.coordinates.length === 0\r\n        )\r\n        if (hasEmptyCoordinates) {\r\n          isValid = false\r\n          continue // Continue the while loop\r\n        } else {\r\n          arr = newArray\r\n        }\r\n      }\r\n    }\r\n\r\n    return arr // Return the modified array after assigning coordinates to all ships\r\n  }\r\n\r\n  return {\r\n    createShips,\r\n    matchCoords,\r\n    assignOrientation,\r\n    assignCoordinates,\r\n    assignRandomCoordinates,\r\n    recieveAttack,\r\n    trackShips,\r\n    getShips,\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/gameboard.js?");

/***/ }),

/***/ "./src/components/grids.js":
/*!*********************************!*\
  !*** ./src/components/grids.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// A  function creating grid of 10 x 10\r\nfunction createGrid(idOfBoard) {\r\n  const board = document.getElementById(idOfBoard)\r\n  //* container fo  ABCDEFJ\r\n  const letterDiv = document.createElement('div')\r\n  letterDiv.classList.add('all-letters')\r\n\r\n  const letters = 'ABCDEFGHIJ'\r\n  const lettersArray = letters.split('')\r\n  lettersArray.forEach((letter) => {\r\n    const displayLetter = document.createElement('div')\r\n    displayLetter.classList.add('letter')\r\n    displayLetter.textContent = letter\r\n    letterDiv.appendChild(displayLetter)\r\n  })\r\n  board.appendChild(letterDiv)\r\n\r\n  //* Two  and grid + numbers\r\n  const content = document.createElement('div')\r\n  content.classList.add('number-and-grid')\r\n\r\n  // numbers\r\n\r\n  const numbers = document.createElement('div')\r\n  numbers.classList.add('all-numbers')\r\n\r\n  for (let number = 9; number > -1; number--) {\r\n    const displayNumber = document.createElement('div')\r\n    displayNumber.classList.add('number')\r\n    displayNumber.textContent = number\r\n    numbers.appendChild(displayNumber)\r\n  }\r\n  content.appendChild(numbers)\r\n\r\n  // grid\r\n  const grid = document.createElement('div')\r\n  grid.classList.add('grid')\r\n  grid.id = `${idOfBoard}-grid`\r\n  grid.style.position = 'relative'\r\n\r\n  for (let y = 9; y > -1; y--) {\r\n    for (let x = 0; x < 10; x++) {\r\n      const cell = document.createElement('div')\r\n      cell.className = `${idOfBoard}-cell`\r\n      cell.classList.add('cell')\r\n      cell.setAttribute('data-x', x)\r\n      cell.setAttribute('data-y', y)\r\n      grid.appendChild(cell)\r\n    }\r\n  }\r\n  content.appendChild(grid)\r\n\r\n  board.appendChild(content)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGrid);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/grids.js?");

/***/ }),

/***/ "./src/components/initialGameSetup.js":
/*!********************************************!*\
  !*** ./src/components/initialGameSetup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _grids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grids */ \"./src/components/grids.js\");\n/* harmony import */ var _shipsUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipsUI */ \"./src/components/shipsUI.js\");\n/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match */ \"./src/components/match.js\");\n\r\n\r\n\r\n\r\nfunction initialGameSetup(\r\n  playerShips,\r\n  playerSea,\r\n\r\n  computerShips,\r\n  computerSea\r\n) {\r\n  let currentSet = 0\r\n  ;(0,_grids__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('playerBoard')\r\n\r\n  const updateShipDisplay = () => {\r\n    if (window.innerWidth <= 1150) {\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else if (window.innerWidth <= 750) {\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else if (window.innerWidth <= 400) {\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else {\r\n      // Default state or larger screens\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    }\r\n  }\r\n\r\n  // Add a window resize event listener to trigger the update\r\n  window.addEventListener('resize', updateShipDisplay)\r\n\r\n  updateShipDisplay()\r\n\r\n  const playerBoard = document.getElementById('playerBoard-grid')\r\n\r\n  const buttons = document.querySelector('.buttons')\r\n  const randomButton = document.createElement('button')\r\n  randomButton.id = 'randomizer'\r\n  randomButton.textContent = 'Randomise'\r\n  const appearance = document.createElement('button')\r\n  appearance.id = 'appearance'\r\n  appearance.textContent = 'Appearance'\r\n  const startButton = document.createElement('button')\r\n  startButton.id = 'start'\r\n  startButton.textContent = 'Start'\r\n  const playerOneInputContainer = document.getElementById('Player1')\r\n  const playerTwoInputContainer = document.getElementById('Player2')\r\n  const playerOneInput = document.createElement('input')\r\n  playerOneInput.id = 'Player-One'\r\n  playerOneInput.placeholder = 'Player-One'\r\n\r\n  const playerTwoInput = document.createElement('input')\r\n  playerTwoInput.id = 'Player-Two'\r\n  playerTwoInput.placeholder = 'Player-Two'\r\n\r\n  // Initialize random ship positions and display them\r\n  randomButton.addEventListener('click', () => {\r\n    // Generate new random ship positions and display them\r\n    const newRandom = playerSea.assignRandomCoordinates(playerShips)\r\n    ;(0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newRandom, 'playerBoard-grid', currentSet)\r\n\r\n    // Update the 'random' variable to the new positions\r\n    playerShips = newRandom\r\n  })\r\n\r\n  appearance.addEventListener('click', () => {\r\n    if (currentSet === 1) {\r\n      currentSet = 0\r\n      ;(0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else if (currentSet === 0) {\r\n      currentSet = 1\r\n      ;(0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    }\r\n  })\r\n\r\n  startButton.addEventListener('click', () => {\r\n    const playerOne = document.getElementById('Player-One')\r\n    const playerTwo = document.getElementById('Player-Two')\r\n    if (playerOne.value !== '' && playerTwo.value !== '') {\r\n      const nameOne = playerOne.value\r\n      const nameTwo = playerTwo.value\r\n      const player = document.getElementById('playerBoard')\r\n      const enemy = document.getElementById('enemyBoard')\r\n\r\n      const nav = document.querySelector('nav')\r\n      const main = document.querySelector('main')\r\n\r\n      player.textContent = ''\r\n      enemy.textContent = ''\r\n      main.classList.add('game-on')\r\n      main.classList.add('span-width')\r\n      nav.remove()\r\n\r\n      ;(0,_match__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n        nameOne,\r\n        playerShips,\r\n        playerSea,\r\n        currentSet,\r\n        nameTwo,\r\n        computerShips,\r\n        computerSea\r\n      )\r\n    }\r\n  })\r\n  playerOneInputContainer.appendChild(playerOneInput)\r\n  playerTwoInputContainer.appendChild(playerTwoInput)\r\n  buttons.appendChild(startButton)\r\n  buttons.appendChild(appearance)\r\n  buttons.appendChild(randomButton)\r\n\r\n  playerBoard.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('ship')) {\r\n      const index = e.target.getAttribute('data-ship-index')\r\n\r\n      const changeIt = playerSea.assignOrientation(playerShips, index)\r\n      ;(0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(changeIt, 'playerBoard-grid', currentSet)\r\n      playerShips = changeIt\r\n    }\r\n  })\r\n  let draggedShip = null\r\n\r\n  playerBoard.addEventListener('dragover', (e) => {\r\n    e.preventDefault() // Prevent the default behavior that disallows dropping\r\n  })\r\n\r\n  playerBoard.addEventListener('dragstart', (e) => {\r\n    if (e.target.classList.contains('ship')) {\r\n      draggedShip = e.target\r\n    }\r\n  })\r\n\r\n  playerBoard.addEventListener('drop', (e) => {\r\n    if (draggedShip) {\r\n      const rootStyles = getComputedStyle(document.documentElement)\r\n      const cellSize = rootStyles.getPropertyValue('--cell-size')\r\n      const size = parseInt(cellSize, 10)\r\n      const shipIndex = draggedShip.getAttribute('data-ship-index')\r\n      const offsetX = e.clientX - playerBoard.getBoundingClientRect().left\r\n      const offsetY = e.clientY - playerBoard.getBoundingClientRect().top\r\n      // Calculate grid coordinates based on offsetX and offsetY\r\n      const cellWidth = size\r\n      const cellHeight = size\r\n\r\n      // Adjusting for the gap and calculate the grid coordinates\r\n      const x = Math.floor((offsetX + 1) / cellWidth) // Adding 1 to account for the gap\r\n\r\n      // Reverse the y calculation to ensure it starts from the bottom\r\n      const y = Math.floor(\r\n        (playerBoard.clientHeight - offsetY + 1) / cellHeight\r\n      )\r\n      // Assign the new coordinates to the ship\r\n      const updatedShips = playerSea.assignCoordinates(\r\n        playerShips,\r\n        shipIndex,\r\n        x,\r\n        y\r\n      )\r\n      ;(0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(updatedShips, 'playerBoard-grid', currentSet)\r\n      playerShips = updatedShips\r\n      // Clear the draggedShip reference\r\n      draggedShip = null\r\n    }\r\n  })\r\n  playerBoard.addEventListener('touchstart', (e) => {\r\n    e.preventDefault()\r\n    if (e.target.classList.contains('ship')) {\r\n      draggedShip = e.target\r\n    }\r\n  })\r\n  playerBoard.addEventListener('touchmove', (e) => {\r\n    e.preventDefault()\r\n  })\r\n\r\n  playerBoard.addEventListener('touchend', (e) => {\r\n    if (draggedShip) {\r\n      const rootStyles = getComputedStyle(document.documentElement)\r\n      const cellSize = rootStyles.getPropertyValue('--cell-size')\r\n      const size = parseInt(cellSize, 10)\r\n      const shipIndex = draggedShip.getAttribute('data-ship-index')\r\n      const touch = e.changedTouches[0] // Use e.changedTouches instead of e.touches\r\n      const offsetX = touch.clientX - playerBoard.getBoundingClientRect().left\r\n      const offsetY = touch.clientY - playerBoard.getBoundingClientRect().top\r\n      // Calculate grid coordinates based on offsetX and offsetY\r\n      const cellWidth = size\r\n      const cellHeight = size\r\n\r\n      // Adjusting for the gap and calculate the grid coordinates\r\n      const x = Math.floor((offsetX + 1) / cellWidth) // Adding 1 to account for the gap\r\n\r\n      // Reverse the y calculation to ensure it starts from the bottom\r\n      const y = Math.floor(\r\n        (playerBoard.clientHeight - offsetY + 1) / cellHeight\r\n      )\r\n\r\n      // Assign the new coordinates to the ship\r\n      const updatedShips = playerSea.assignCoordinates(\r\n        playerShips,\r\n        shipIndex,\r\n        x,\r\n        y\r\n      )\r\n      ;(0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(updatedShips, 'playerBoard-grid', currentSet)\r\n      playerShips = updatedShips\r\n      // Clear the draggedShip reference\r\n      draggedShip = null\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialGameSetup);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/initialGameSetup.js?");

/***/ }),

/***/ "./src/components/match.js":
/*!*********************************!*\
  !*** ./src/components/match.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _grids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grids */ \"./src/components/grids.js\");\n/* harmony import */ var _shipsUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipsUI */ \"./src/components/shipsUI.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/components/player.js\");\n/* harmony import */ var _gameOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameOver */ \"./src/components/gameOver.js\");\n\r\n\r\n\r\n\r\n\r\nfunction game(\r\n  playerName,\r\n  playerShips,\r\n  playerSea,\r\n  currentSet,\r\n  computerName,\r\n  computerShips,\r\n  computerSea\r\n) {\r\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerName, computerSea, computerShips, true)\r\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(computerName, playerSea, playerShips, false)\r\n\r\n  function createName() {\r\n    const boardContainer = document.querySelector('.board-container')\r\n    const nameDiv = document.createElement('div')\r\n    nameDiv.classList.add('name-container')\r\n    const firstPlayerNameDiv = document.createElement('div')\r\n    const firstPlayerName = document.createElement('h2')\r\n    firstPlayerName.textContent = `${player.name}`\r\n    firstPlayerName.classList.add('player-one-name')\r\n\r\n    const secondPlayerNameDiv = document.createElement('div')\r\n    const secondPlayerName = document.createElement('h2')\r\n    secondPlayerName.textContent = `${computer.name}`\r\n    secondPlayerName.classList.add('player-two-name')\r\n\r\n    firstPlayerNameDiv.appendChild(firstPlayerName)\r\n    secondPlayerNameDiv.appendChild(secondPlayerName)\r\n\r\n    nameDiv.appendChild(firstPlayerNameDiv)\r\n    nameDiv.appendChild(secondPlayerNameDiv)\r\n\r\n    boardContainer.appendChild(nameDiv)\r\n  }\r\n  createName()\r\n\r\n  ;(0,_grids__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('playerBoard')\r\n  ;(0,_grids__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('enemyBoard')\r\n\r\n  const updateShipDisplay = () => {\r\n    if (window.innerWidth <= 1150) {\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else if (window.innerWidth <= 750) {\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else if (window.innerWidth <= 400) {\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    } else {\r\n      // Default state or larger screens\r\n      (0,_shipsUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerShips, 'playerBoard-grid', currentSet)\r\n    }\r\n  }\r\n\r\n  // Add a window resize event listener to trigger the update\r\n  window.addEventListener('resize', updateShipDisplay)\r\n\r\n  // Initial ship display\r\n  updateShipDisplay()\r\n\r\n  const enemyBoardCell = document.querySelectorAll('.enemyBoard-cell')\r\n  const playerBoardCell = document.querySelectorAll('.playerBoard-cell')\r\n\r\n  function displayComputer(e, x, y) {\r\n    const cell = e.target\r\n\r\n    if (player.matchCoords(x, y) === true) {\r\n      cell.style.backgroundColor = 'red'\r\n    } else {\r\n      cell.style.backgroundColor = 'green'\r\n    }\r\n  }\r\n\r\n  function displayPlayer() {\r\n    const attacks = computer.checkAttacks()\r\n    const missed = computer.getMissed()\r\n\r\n    playerBoardCell.forEach((cell) => {\r\n      const x = parseInt(cell.dataset.x, 10)\r\n      const y = parseInt(cell.dataset.y, 10)\r\n\r\n      // Check if the cell's coordinates are in the attacks array\r\n      if (\r\n        attacks.some(([attackX, attackY]) => attackX === x && attackY === y)\r\n      ) {\r\n        cell.style.backgroundColor = 'red'\r\n      }\r\n\r\n      // Check if the cell's coordinates are in the missed array\r\n      if (missed.some(([missedX, missedY]) => missedX === x && missedY === y)) {\r\n        cell.style.backgroundColor = 'green'\r\n      }\r\n    })\r\n  }\r\n\r\n  function turn(e, one, x, y, two) {\r\n    //* When I click the func will make sure IS the player turn true THEN\r\n\r\n    if (one.state === true) {\r\n      one.attack(x, y)\r\n\r\n      displayComputer(e, x, y)\r\n      ;(0,_gameOver__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player, computer)\r\n\r\n      enemyBoardCell.forEach((cell) => {\r\n        cell.style.pointerEvents = 'none'\r\n      })\r\n      setTimeout(() => {\r\n        two.autoMoves()\r\n\r\n        // Todo: displayAttack\r\n        displayPlayer()\r\n        ;(0,_gameOver__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player, computer)\r\n\r\n        enemyBoardCell.forEach((cell) => {\r\n          cell.style.pointerEvents = 'auto'\r\n        })\r\n      }, 700)\r\n    }\r\n\r\n    //* Attack then AI will attack then turn return to as it is\r\n  }\r\n\r\n  enemyBoardCell.forEach((cell) => {\r\n    cell.addEventListener(\r\n      'click',\r\n      (e) => {\r\n        const x = parseInt(e.target.dataset.x, 10)\r\n        const y = parseInt(e.target.dataset.y, 10)\r\n        turn(e, player, x, y, computer)\r\n      },\r\n      { once: true }\r\n    )\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/match.js?");

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-loop-func */\r\nfunction Player(name, enemyGameboard, enemyShips, state) {\r\n  let storeEnemy = enemyShips\r\n  const missedArray = []\r\n\r\n  const randomMovesStorage = []\r\n\r\n  function gameOver() {\r\n    return enemyGameboard.trackShips(storeEnemy)\r\n  }\r\n  function attack(x, y) {\r\n    const attacked = enemyGameboard.recieveAttack(storeEnemy, x, y, missedArray)\r\n    storeEnemy = attacked\r\n  }\r\n\r\n  // AI method\r\n\r\n  function randomMoves() {\r\n    let x\r\n    let y\r\n    let isValid\r\n\r\n    do {\r\n      x = Math.floor(Math.random() * 10)\r\n      y = Math.floor(Math.random() * 10)\r\n\r\n      // Check if the generated coordinates already exist in randomMovesStorage\r\n      // eslint-disable-next-line no-loop-func\r\n      isValid = !randomMovesStorage.some(\r\n        (coord) => coord[0] === x && coord[1] === y\r\n      )\r\n    } while (!isValid)\r\n\r\n    // Store the generated coordinates in randomMovesStorage\r\n    randomMovesStorage.push([x, y])\r\n\r\n    return [x, y]\r\n  }\r\n\r\n  function autoMoves() {\r\n    const [x, y] = randomMoves()\r\n\r\n    const setAttack = attack(x, y)\r\n    return setAttack\r\n  }\r\n  function getMissed() {\r\n    return missedArray\r\n  }\r\n  function checkAttacks() {\r\n    const array = [...randomMovesStorage]\r\n    const hits = array.filter((randomMove) => {\r\n      const [x, y] = randomMove\r\n      return storeEnemy.some((ship) =>\r\n        ship.coordinates.some((coord) => coord[0] === x && coord[1] === y)\r\n      )\r\n    })\r\n\r\n    return hits\r\n  }\r\n\r\n  function matchCoords(x, y) {\r\n    return enemyGameboard.matchCoords(enemyShips, x, y)\r\n  }\r\n\r\n  return {\r\n    name,\r\n    attack,\r\n    gameOver,\r\n    autoMoves,\r\n    getMissed,\r\n    matchCoords,\r\n    state,\r\n    checkAttacks,\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/player.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(\r\n  name,\r\n  lengthShips,\r\n  hits = 0,\r\n\r\n  sunk = false\r\n) {\r\n  function hit() {\r\n    return ++hits\r\n  }\r\n  function isSunk() {\r\n    if (lengthShips === hits) {\r\n      sunk = true\r\n    }\r\n    return sunk\r\n  }\r\n\r\n  return {\r\n    name,\r\n    hit,\r\n    isSunk,\r\n    lengthShips,\r\n    orientation: 'vertical',\r\n    coordinates: [],\r\n    boundary: [],\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/ship.js?");

/***/ }),

/***/ "./src/components/shipsUI.js":
/*!***********************************!*\
  !*** ./src/components/shipsUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_colourful_shade_Aircraft_Carrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/colourful-shade/Aircraft-Carrier.png */ \"./src/assets/images/colourful-shade/Aircraft-Carrier.png\");\n/* harmony import */ var _assets_images_colourful_shade_Battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/colourful-shade/Battleship.png */ \"./src/assets/images/colourful-shade/Battleship.png\");\n/* harmony import */ var _assets_images_colourful_shade_Submarine_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/colourful-shade/Submarine-1.png */ \"./src/assets/images/colourful-shade/Submarine-1.png\");\n/* harmony import */ var _assets_images_colourful_shade_Submarine_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/colourful-shade/Submarine-2.png */ \"./src/assets/images/colourful-shade/Submarine-2.png\");\n/* harmony import */ var _assets_images_colourful_shade_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/colourful-shade/Destroyer.png */ \"./src/assets/images/colourful-shade/Destroyer.png\");\n/* harmony import */ var _assets_images_shadow_shade_Aircraft_Carrier_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/shadow-shade/Aircraft-Carrier.png */ \"./src/assets/images/shadow-shade/Aircraft-Carrier.png\");\n/* harmony import */ var _assets_images_shadow_shade_Battleship_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/shadow-shade/Battleship.png */ \"./src/assets/images/shadow-shade/Battleship.png\");\n/* harmony import */ var _assets_images_shadow_shade_Submarine_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/shadow-shade/Submarine-1.png */ \"./src/assets/images/shadow-shade/Submarine-1.png\");\n/* harmony import */ var _assets_images_shadow_shade_Submarine_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/shadow-shade/Submarine-2.png */ \"./src/assets/images/shadow-shade/Submarine-2.png\");\n/* harmony import */ var _assets_images_shadow_shade_Destroyer_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/shadow-shade/Destroyer.png */ \"./src/assets/images/shadow-shade/Destroyer.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction displayShips(ships, board, appearance = 0) {\r\n  const shipSet = [\r\n    [\r\n      _assets_images_colourful_shade_Aircraft_Carrier_png__WEBPACK_IMPORTED_MODULE_0__,\r\n      _assets_images_colourful_shade_Battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n      _assets_images_colourful_shade_Submarine_1_png__WEBPACK_IMPORTED_MODULE_2__,\r\n      _assets_images_colourful_shade_Submarine_2_png__WEBPACK_IMPORTED_MODULE_3__,\r\n      _assets_images_colourful_shade_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__,\r\n    ],\r\n    [\r\n      _assets_images_shadow_shade_Aircraft_Carrier_png__WEBPACK_IMPORTED_MODULE_5__,\r\n      _assets_images_shadow_shade_Battleship_png__WEBPACK_IMPORTED_MODULE_6__,\r\n      _assets_images_shadow_shade_Submarine_1_png__WEBPACK_IMPORTED_MODULE_7__,\r\n      _assets_images_shadow_shade_Submarine_2_png__WEBPACK_IMPORTED_MODULE_8__,\r\n      _assets_images_shadow_shade_Destroyer_png__WEBPACK_IMPORTED_MODULE_9__,\r\n    ],\r\n  ]\r\n\r\n  const playerDiv = document.getElementById(board)\r\n\r\n  const shipDivs = playerDiv.querySelectorAll('.ship')\r\n  shipDivs.forEach((shipDiv) => {\r\n    shipDiv.remove()\r\n  })\r\n\r\n  ships.forEach((ship, index) => {\r\n    const shipDiv = document.createElement('div')\r\n    shipDiv.id = `${ship.name}`\r\n    shipDiv.style.border = '2px solid rgba(0, 0, 0, 0.41)'\r\n    shipDiv.style.display = 'flex'\r\n    shipDiv.style.justifyContent = 'center'\r\n    shipDiv.style.alignItems = 'center'\r\n\r\n    const image = document.createElement('img')\r\n\r\n    image.style.transform = 'scaleX(-1) '\r\n    image.src = `${shipSet[appearance][index]}`\r\n    image.style.pointerEvents = 'none'\r\n    shipDiv.appendChild(image)\r\n\r\n    // Add a data attribute with the index of the ship\r\n    shipDiv.setAttribute('data-ship-index', index)\r\n    shipDiv.setAttribute('draggable', 'true')\r\n    shipDiv.classList.add('ship')\r\n    shipDiv.style.position = 'absolute'\r\n\r\n    const rootStyles = getComputedStyle(document.documentElement)\r\n    const cellSize = rootStyles.getPropertyValue('--cell-size')\r\n    const size = parseInt(cellSize, 10)\r\n\r\n    // Assuming cellSize is obtained correctly as a string like \"40px\"\r\n    // and it represents the size in pixels\r\n\r\n    shipDiv.style.left = `${ship.coordinates[0][0] * (size + 2)}px`\r\n    shipDiv.style.bottom = `${ship.coordinates[0][1] * (size + 2)}px`\r\n\r\n    if (ship.orientation === 'vertical') {\r\n      image.style.width = `${ship.lengthShips * (size - 10)}px`\r\n      image.style.height = `${size}`\r\n\r\n      image.style.transform = 'rotate(90deg) scaleY(-1)'\r\n      // image.style.transform = 'scaleX(-1)'\r\n\r\n      shipDiv.style.width = `${cellSize}`\r\n      shipDiv.style.height = `${ship.lengthShips * (size + 2) - 2}px`\r\n    } else {\r\n      shipDiv.style.height = `${cellSize}`\r\n      shipDiv.style.width = `${ship.lengthShips * (size + 2) - 2}px`\r\n\r\n      image.style.width = `${ship.lengthShips * (size - 10)}px`\r\n      image.style.height = `${size}`\r\n    }\r\n\r\n    playerDiv.appendChild(shipDiv)\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShips);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/shipsUI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gameboard */ \"./src/components/gameboard.js\");\n/* harmony import */ var _components_initialGameSetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/initialGameSetup */ \"./src/components/initialGameSetup.js\");\n\r\n\r\n\r\n\r\n\r\nconst heroBoard = (0,_components_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nconst villanBoard = (0,_components_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\nconst heroShips = heroBoard.createShips()\r\nconst villanShips = villanBoard.createShips()\r\n\r\n// eslint-disable-next-line prefer-const\r\nlet playerRandom = heroBoard.assignRandomCoordinates(heroShips)\r\n// eslint-disable-next-line prefer-const\r\nlet villanRandom = villanBoard.assignRandomCoordinates(villanShips)\r\n\r\n;(0,_components_initialGameSetup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerRandom, heroBoard, villanRandom, villanBoard)\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/assets/images/colourful-shade/Aircraft-Carrier.png":
/*!****************************************************************!*\
  !*** ./src/assets/images/colourful-shade/Aircraft-Carrier.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7403d26c23196b2cc31.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/colourful-shade/Aircraft-Carrier.png?");

/***/ }),

/***/ "./src/assets/images/colourful-shade/Battleship.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/colourful-shade/Battleship.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94f36624938775384ad9.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/colourful-shade/Battleship.png?");

/***/ }),

/***/ "./src/assets/images/colourful-shade/Destroyer.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/colourful-shade/Destroyer.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bcf96687d09723703a6c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/colourful-shade/Destroyer.png?");

/***/ }),

/***/ "./src/assets/images/colourful-shade/Submarine-1.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/colourful-shade/Submarine-1.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a16a9d4177eb60b84fc6.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/colourful-shade/Submarine-1.png?");

/***/ }),

/***/ "./src/assets/images/colourful-shade/Submarine-2.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/colourful-shade/Submarine-2.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a16a9d4177eb60b84fc6.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/colourful-shade/Submarine-2.png?");

/***/ }),

/***/ "./src/assets/images/shadow-shade/Aircraft-Carrier.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/shadow-shade/Aircraft-Carrier.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39e0b673c14d3f224360.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/shadow-shade/Aircraft-Carrier.png?");

/***/ }),

/***/ "./src/assets/images/shadow-shade/Battleship.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/shadow-shade/Battleship.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21977729ee903555a4ab.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/shadow-shade/Battleship.png?");

/***/ }),

/***/ "./src/assets/images/shadow-shade/Destroyer.png":
/*!******************************************************!*\
  !*** ./src/assets/images/shadow-shade/Destroyer.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4e04bc135075970a031.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/shadow-shade/Destroyer.png?");

/***/ }),

/***/ "./src/assets/images/shadow-shade/Submarine-1.png":
/*!********************************************************!*\
  !*** ./src/assets/images/shadow-shade/Submarine-1.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0bb6ecb3b2be1a80b54d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/shadow-shade/Submarine-1.png?");

/***/ }),

/***/ "./src/assets/images/shadow-shade/Submarine-2.png":
/*!********************************************************!*\
  !*** ./src/assets/images/shadow-shade/Submarine-2.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0bb6ecb3b2be1a80b54d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/shadow-shade/Submarine-2.png?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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