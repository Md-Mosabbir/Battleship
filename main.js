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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: none;\n  list-style: none;\n}\n:root {\n  --neutral-black: #000;\n  --neutral-white: #fff;\n}\n\n.board-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.all-letters {\n  display: flex;\n  gap: 2px;\n  padding-left: 20px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 60px);\n  grid-template-rows: repeat(10, 60px);\n  gap: 2px;\n}\n.letter {\n  width: 60px;\n  height: 25px;\n  text-align: center;\n}\n.cell {\n  width: 60px;\n  height: 60px;\n  background-color: #fff;\n  border: 1px solid #999;\n}\n.number-and-grid {\n  display: flex;\n}\n.all-numbers {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.number {\n  height: 60px;\n  width: 20px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n#playerBoard .number-and-grid > div:nth-child(2) {\n  position: relative;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/components/ship.js\");\n\n\nfunction Gameboard() {\n  // Todo: Create a function to push 5 ships and returns the array.\n\n  function createShips() {\n    const ships = []\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Aircraft-Carrier', 5))\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Battleship', 4))\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submarine-1', 3))\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submarine-2', 3))\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Destroyer', 2))\n\n    return ships\n  }\n  // Todo: Create a function to assign boundary and returns the array.\n\n  function assignBoundary(arr) {\n    //* Make a copy of the array\n    const array = [...arr]\n\n    //* Iterate over ships for the coordinates and push it to the boundary property\n    array.map((ships) => {\n      ships.boundary = []\n      //* Add boundary around the ships\n      // Top\n      if (ships.orientation === 'vertical') {\n        const bottom = [ships.coordinates[0][0], ships.coordinates[0][1] - 1]\n        const top = [\n          ships.coordinates[ships.lengthShips - 1][0],\n          ships.coordinates[ships.lengthShips - 1][1] + 1,\n        ]\n        const cornerB1 = [bottom[0] - 1, bottom[1]]\n        const cornerB2 = [bottom[0] + 1, bottom[1]]\n        const cornerT1 = [top[0] - 1, top[1]]\n        const cornerT2 = [top[0] + 1, top[1]]\n        ships.boundary.push(bottom, cornerB1, cornerB2, top, cornerT1, cornerT2)\n\n        ships.coordinates.map((coords) =>\n          ships.boundary.push(\n            coords,\n            [coords[0] + 1, coords[1]],\n            [coords[0] - 1, coords[1]]\n          )\n        )\n      } else if (ships.orientation === 'horizontal') {\n        const left = [ships.coordinates[0][0] - 1, ships.coordinates[0][1]]\n        const right = [\n          ships.coordinates[ships.lengthShips - 1][0] + 1,\n          ships.coordinates[ships.lengthShips - 1][1],\n        ]\n        const cornerB1 = [left[0], left[1] - 1]\n        const cornerB2 = [left[0], left[1] + 1]\n        const cornerT1 = [right[0], right[1] - 1]\n        const cornerT2 = [right[0], right[1] + 1]\n        ships.boundary.push(left, cornerB1, cornerB2, right, cornerT1, cornerT2)\n\n        ships.coordinates.map((coords) =>\n          ships.boundary.push(\n            coords,\n            [coords[0], coords[1] + 1],\n            [coords[0], coords[1] - 1]\n          )\n        )\n      }\n    })\n    return array\n  }\n\n  // Todo: assign coordinates\n  function setCoordinates(arr, index, x, y) {\n    const array = [...arr]\n    const ship = array[index]\n\n    const updatedShip = { ...ship, coordinates: [], boundary: [] }\n\n    if (ship.orientation === 'vertical') {\n      for (let c = 0; c < ship.lengthShips; c++) {\n        updatedShip.coordinates.push([x, y + c])\n      }\n    } else if (ship.orientation === 'horizontal') {\n      for (let d = 0; d < ship.lengthShips; d++) {\n        updatedShip.coordinates.push([x + d, y])\n      }\n    }\n    array[index] = updatedShip\n    return array\n  }\n\n  function changeOrientation(arr, i) {\n    const array = [...arr]\n    const ship = array[i]\n\n    if (ship.orientation === 'vertical') {\n      ship.orientation = 'horizontal'\n    } else if (ship.orientation === 'horizontal') {\n      ship.orientation = 'vertical'\n    }\n\n    return array\n  }\n  function matchBoundary(arr, i) {\n    const array = [...arr]\n    const ship = array[i]\n    for (let ships = 0; ships < array.length; ships++) {\n      for (let b = 0; b < array[ships].boundary.length; b++) {\n        const coordinate = array[ships].boundary[b]\n        const found = ship.coordinates.some(\n          (itm) => itm.toString() === coordinate.toString()\n        )\n        if (found) {\n          return true\n        }\n      }\n    }\n    return false\n  }\n  function transgress(arr, i) {\n    const array = [...arr]\n    const ship = array[i]\n    return ship.coordinates.some((coords) => {\n      const x = coords[0]\n      const y = coords[1]\n      return x < 0 || x > 10 || y < 0 || y > 10\n    })\n  }\n\n  function assignCoordinates(arr, i, x, y) {\n    const temporaryChange = setCoordinates([...arr], i, x, y)\n\n    if (\n      matchBoundary(temporaryChange, i) === false &&\n      transgress(temporaryChange, i) === false\n    ) {\n      const boundary = assignBoundary(temporaryChange)\n      return boundary\n    }\n    return arr // Return the original array when conditions are met\n  }\n\n  function assignOrientation(arr, i) {\n    const array = [...arr]\n    const temporaryChange = changeOrientation(array, i)\n    const ship = temporaryChange[i]\n    const anchor = ship.coordinates[0]\n    const finalReturn = assignCoordinates(\n      temporaryChange,\n      i,\n      anchor[0],\n      anchor[1]\n    )\n\n    if (\n      matchBoundary(temporaryChange, i) === false &&\n      transgress(temporaryChange, i) === false\n    ) {\n      return finalReturn\n    }\n    return arr\n  }\n\n  // Todo:  Create random coordinate that !match boundaries\n  function createRandomCoordinate(arr) {\n    const array = [...arr]\n    let x\n    let y\n    let isValid\n\n    do {\n      x = Math.floor(Math.random() * 10)\n      y = Math.floor(Math.random() * 10)\n\n      // eslint-disable-next-line arrow-body-style, no-loop-func\n      isValid = array.some((ship) => {\n        return ship.boundary.some(\n          (bCoords) => bCoords[0] === x && bCoords[1] === y\n        )\n      })\n    } while (!isValid)\n\n    return [x, y]\n  }\n\n  // Todo: random Orientation\n\n  // Function to get a random orientation\n\n  function randomOrientation(arr) {\n    const array = arr.map((ship) => ({ ...ship })) // Create a shallow copy\n    const orientations = ['vertical', 'horizontal']\n\n    for (let i = 0; i < array.length; i++) {\n      const randomIndex = Math.floor(Math.random() * 2) // Generate 0 or 1\n      array[i].orientation = orientations[randomIndex]\n    }\n\n    return array\n  }\n\n  // Todo: Function to assign random coordinates to all ships\n\n  function setRandomCoordinates(arr) {\n    const array = arr.map((ship) => {\n      const updatedShip = { ...ship, coordinates: [], boundary: [] }\n      const [x, y] = createRandomCoordinate(arr)\n      if (ship.orientation === 'vertical') {\n        for (let c = 0; c < ship.lengthShips; c++) {\n          updatedShip.coordinates.push([x, y + c])\n        }\n      } else if (ship.orientation === 'horizontal') {\n        for (let d = 0; d < ship.lengthShips; d++) {\n          updatedShip.coordinates.push([x + d, y])\n        }\n      }\n      return updatedShip\n    })\n\n    return array\n  }\n\n  function assignRandomCoordinates(arr) {\n    const setOrientation = randomOrientation(arr)\n    const setCoorAndBoundary = setRandomCoordinates(setOrientation)\n\n    return setCoorAndBoundary\n  }\n\n  // Todo: delete destroyed ship\n  function destroyShip(arr) {\n    // Use the filter function to remove sunk ships from the array\n    const updatedShips = arr.filter((ship) => !ship.isSunk())\n\n    return updatedShips\n  }\n  // Todo: Missed attack manager\n\n  // Todo: recieveAttack()\n  function recieveAttack(arr, x, y, missedArray) {\n    const array = [...arr]\n\n    // Check if any ship's coordinate matches (x, y)\n    const isMatch = array.find((ship) =>\n      ship.coordinates.some((coords) => coords[0] === x && coords[1] === y)\n    )\n\n    if (isMatch) {\n      // Assuming hit() marks the ship as hit\n      isMatch.hit()\n      const updatedShips = destroyShip(array, isMatch) // Assuming destroyShip() removes the destroyed ship\n      return updatedShips\n    }\n\n    // If there is no match, add the missed attack coordinates to the missedArray\n    missedArray.push([x, y])\n\n    return array\n  }\n\n  // Todo: track destroyed ship\n  function trackShips(arr) {\n    const array = [...arr]\n\n    if (array.length === 0) {\n      return true\n    }\n  }\n  function getShips(arr) {\n    return [...arr].length\n  }\n\n  return {\n    createShips,\n    assignOrientation,\n    assignCoordinates,\n    recieveAttack,\n    trackShips,\n    getShips,\n    assignRandomCoordinates,\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/components/gameboard.js?");

/***/ }),

/***/ "./src/components/grids.js":
/*!*********************************!*\
  !*** ./src/components/grids.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// A  function creating grid of 10 x 10\nfunction createGrid(idOfBoard) {\n  const board = document.getElementById(idOfBoard)\n  //* container fo  ABCDEFJ\n  const letterDiv = document.createElement('div')\n  letterDiv.classList.add('all-letters')\n\n  const letters = 'ABCDEFGHIJ'\n  const lettersArray = letters.split('')\n  lettersArray.forEach((letter) => {\n    const displayLetter = document.createElement('div')\n    displayLetter.classList.add('letter')\n    displayLetter.textContent = letter\n    letterDiv.appendChild(displayLetter)\n  })\n  board.appendChild(letterDiv)\n\n  //* Two  and grid + numbers\n  const content = document.createElement('div')\n  content.classList.add('number-and-grid')\n\n  // numbers\n\n  const numbers = document.createElement('div')\n  numbers.classList.add('all-numbers')\n\n  for (let number = 9; number > -1; number--) {\n    const displayNumber = document.createElement('div')\n    displayNumber.classList.add('number')\n    displayNumber.textContent = number\n    numbers.appendChild(displayNumber)\n  }\n  content.appendChild(numbers)\n\n  // grid\n  const grid = document.createElement('div')\n  grid.classList.add('grid')\n\n  for (let y = 9; y > -1; y--) {\n    for (let x = 0; x < 10; x++) {\n      const cell = document.createElement('div')\n      cell.className = 'cell'\n      cell.setAttribute('data-x', x)\n      cell.setAttribute('data-y', y)\n      grid.appendChild(cell)\n    }\n  }\n  content.appendChild(grid)\n\n  board.appendChild(content)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGrid);\n\n\n//# sourceURL=webpack://battleship/./src/components/grids.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(\n  name,\n  lengthShips,\n  hits = 0,\n\n  sunk = false\n) {\n  function hit() {\n    return ++hits\n  }\n  function isSunk() {\n    if (lengthShips === hits) {\n      sunk = true\n    }\n    return sunk\n  }\n\n  return {\n    name,\n    hit,\n    isSunk,\n    lengthShips,\n    orientation: 'vertical',\n    coordinates: [],\n    boundary: [],\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/components/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gameboard */ \"./src/components/gameboard.js\");\n/* harmony import */ var _components_grids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grids */ \"./src/components/grids.js\");\n\n\n\n\n(0,_components_grids__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('playerBoard')\n;(0,_components_grids__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('enemyBoard')\n\nconst exGameboard = (0,_components_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\nlet testShips = exGameboard.createShips()\n// testShips = exGameboard.assignRandomCoordinates(testShips)\n\n// testShips.forEach((ship) => {\n//   //* Create box based on their length\n//   const shipBlock = document.createElement('div')\n//   shipBlock.classList.add('ship')\n//   shipBlock.id = `${ship.name}`\n\n//   shipBlock.style.width = `${ship.lengthShips * 62}px`\n//   shipBlock.style.height = '60px'\n//   shipBlock.style.backgroundColor = 'beige'\n//   shipBlock.style.position = 'absolute'\n//   shipBlock.style.left = `${ship.coordinates[0][0] * 62}px`\n//   shipBlock.style.bottom = `${ship.coordinates[0][1] * 62}px`\n//   shipBlock.style.transformOrigin = '60px -2px'\n//   if (ship.orientation === 'vertical') {\n//     shipBlock.style.transform = 'rotate(90deg)'\n//   }\n//   shipBlock.style.backgroundSize = 'cover'\n//   document.querySelector('.grid').appendChild(shipBlock)\n// })\nconsole.log(testShips)\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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