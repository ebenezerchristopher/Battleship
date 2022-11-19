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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n}\\n\\n#content {\\n  position: relative;\\n  padding: 10px;\\n  width: 100vw;\\n}\\n\\n.playergrid {\\n  display: grid;\\n  width: 100%;\\n  height: 40vh;\\n  grid-template-columns: repeat(10, minmax(0, 1fr));\\n  grid-template-rows: repeat(10, minmax(0, 1fr));\\n}\\n\\n.playergrid > div {\\n  border: 0.1px solid grey;\\n}\\n\\n.playergrid div.blueborder {\\n  border-left: 2px solid blue;\\n  border-right: 2px solid blue;\\n}\\n.playergrid div.bordertop {\\n  border-top: 2px solid blue;\\n}\\n.playergrid div.borderbottom {\\n  border-bottom: 2px solid blue;\\n}\\n\\n.playergrid div.bluebordertop {\\n  border-top: 2px solid blue;\\n  border-bottom: 2px solid blue;\\n}\\n.playergrid div.borderleft {\\n  border-left: 2px solid blue;\\n}\\n.playergrid div.borderright {\\n  border-right: 2px solid blue;\\n}\\n\\n#content .computergrid {\\n  display: grid;\\n  width: 100%;\\n  height: 40vh;\\n  grid-template-columns: repeat(10, minmax(0, 1fr));\\n  grid-template-rows: repeat(10, minmax(0, 1fr));\\n}\\n\\n#content .computergrid > div {\\n  border: 0.1px solid grey;\\n}\\n.column,\\n.row {\\n  position: absolute;\\n  right: 15px;\\n  top: 5px;\\n  height: 20px;\\n  width: 20px;\\n  color: white;\\n  background: green;\\n  text-align: center;\\n  font-weight: 750;\\n  border-radius: 50%;\\n}\\ndiv[data-row][data-column] {\\n  color: red;\\n  text-align: center;\\n  font-weight: 700;\\n  font-size: 120%;\\n  padding: 0px;\\n}\\n.playertext {\\n  font-size: 200;\\n  font-weight: 700;\\n}\\n.computertext {\\n  font-size: 200;\\n  font-weight: 700;\\n  margin-top: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://jest/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://jest/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://jest/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://jest/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://jest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://jest/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://jest/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://jest/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://jest/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://jest/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/columnchecker.js":
/*!******************************!*\
  !*** ./src/columnchecker.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet columnChecker = function (board, row, column) {\n \n  if (row < 3) {\n    let count = 0;\n    let sunk = true;\n    while (count <= 3) {\n      if (!sunk) {\n        return false;\n      }\n      if (board.board[row + count][column] === \"x\") {\n        sunk = true;\n        count += 1;\n      } else {\n        sunk = false;\n        count += 1;\n      }\n    }\n    return sunk;\n  } else if (row > 6) {\n    \n    let count = 0;\n    let sunk = true;\n    while (count <= 3) {\n      if (!sunk) {\n        return false;\n      }\n      if (board.board[row - count][column] === \"x\") {\n        sunk = true;\n        count += 1;\n      } else {\n        sunk = false;\n        count += 1;\n      }\n    }\n    return sunk;\n  } else {\n    \n    let countUp = 0;\n    let countDown = 0;\n    let sunk = true;\n    while (countUp <= 3) {\n      if (!sunk) {\n        break;\n      }\n      if (board.board[row - countUp][column] === \"x\") {\n        sunk = true;\n        countUp += 1;\n      } else {\n        sunk = false;\n        countUp += 1;\n      }\n    }\n    if (sunk) {\n      return sunk;\n    } else {\n      sunk = true;\n      while (countDown <= 3) {\n        if (!sunk) {\n          return false;\n        }\n        if (board.board[row + countDown][column] === \"x\") {\n          sunk = true;\n          countDown += 1;\n        } else {\n          sunk = false;\n          countDown += 1;\n        }\n      }\n    }\n    return sunk;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (columnChecker);\n\n\n//# sourceURL=webpack://jest/./src/columnchecker.js?");

/***/ }),

/***/ "./src/columnplacer.js":
/*!*****************************!*\
  !*** ./src/columnplacer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet columnPlacer = function (board, row, column) {\n  //column -= 1;\n  //row -= 1;\n  let count = 0;\n  let marked = [];\n\n  while (count <= 3) {\n    if (row > 6) {\n      let row1 = row - count;\n      if (board.board[row1][column]) {\n        return marked;\n      }\n      board.board[row1][column] = true;\n      marked.push([row1, column]);\n      count += 1;\n    } else {\n      let row1 = row+count;\n      if (board.board[row1][column]) {\n        return marked;\n      }\n      board.board[row1][column] = true;\n      marked.push([row1, column]);\n      count += 1;\n    }\n  }\n\n  return marked;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (columnPlacer);\n\n\n//# sourceURL=webpack://jest/./src/columnplacer.js?");

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _computerboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerboard.js */ \"./src/computerboard.js\");\n/* harmony import */ var _playerboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerboard.js */ \"./src/playerboard.js\");\n/* harmony import */ var _columnplacer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./columnplacer.js */ \"./src/columnplacer.js\");\n/* harmony import */ var _rowplacer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rowplacer.js */ \"./src/rowplacer.js\");\n/* harmony import */ var _picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picker.js */ \"./src/picker.js\");\n/* harmony import */ var _gridupdate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gridupdate.js */ \"./src/gridupdate.js\");\n\n\n\n\n\n\n\nlet computer = (function () {\n  let orient = [\"column\", \"row\"];\n\n  function play() {\n    let row = Math.round(Math.random() * 9);\n    let column = Math.round(Math.random() * 9);\n    let indicator = (0,_picker_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_playerboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _computerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], row, column);\n\n    (0,_gridupdate_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_playerboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], indicator, row, column);\n  }\n\n  function initialize() {\n    let count = 0;\n    while (count <= 3) {\n      let index = Math.round(Math.random());\n      let row = Math.round(Math.random() * 9);\n      let column = Math.round(Math.random() * 9);\n\n      if (orient[index] === \"column\") {\n        (0,_columnplacer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_computerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], row, column);\n      } else if (orient[index] === \"row\") {\n        (0,_rowplacer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_computerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], row, column);\n      }\n        count += 1;\n    }\n    \n  }\n  return {\n    play,\n    initialize,\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computer);\n\n\n//# sourceURL=webpack://jest/./src/computer.js?");

/***/ }),

/***/ "./src/computerboard.js":
/*!******************************!*\
  !*** ./src/computerboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet computerBoard = (function () {\n  let board = Array.from(Array(10), (x) => [false, false, false, false, false, false, false, false, false, false])\n  let id = 2\n  \n  \n  return {\n    board, \n    id\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerBoard);\n\n//# sourceURL=webpack://jest/./src/computerboard.js?");

/***/ }),

/***/ "./src/computerboardview.js":
/*!**********************************!*\
  !*** ./src/computerboardview.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _playerboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerboard.js */ \"./src/playerboard.js\");\n/* harmony import */ var _columnplacer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnplacer.js */ \"./src/columnplacer.js\");\n/* harmony import */ var _rowplacer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rowplacer.js */ \"./src/rowplacer.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./computer.js */ \"./src/computer.js\");\n\n\n\n\n\n\nlet computerBoardView = function () {\n  let content = document.querySelector(\"#content\");\n  let computerGrid = document.createElement(\"div\");\n  computerGrid.className = \"computergrid\";\n\n  for (let row in _playerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board) {\n    for (let column in _playerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board[row]) {\n      let div = document.createElement(\"div\");\n      div.setAttribute(\"data-row\", row);\n      div.setAttribute(\"data-column\", column);\n\n      div.addEventListener(\"click\", (event) => {\n        let row = Number(event.target.dataset.row);\n        let column = Number(event.target.dataset.column);\n        _player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].play(row, column);\n        _computer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].play();\n      });\n\n      computerGrid.appendChild(div);\n    }\n  }\n  \n  return computerGrid;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerBoardView);\n\n\n//# sourceURL=webpack://jest/./src/computerboardview.js?");

/***/ }),

/***/ "./src/gridupdate.js":
/*!***************************!*\
  !*** ./src/gridupdate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet gridUpdate = function (board, indicator, row, column) {\n  if (board.id === 1) {\n    if (indicator) {\n      let element = document.querySelector(\n        `.playergrid>div[data-row='${row}'][data-column='${column}']`\n      );\n      element.textContent = \"X\";\n    } else if (indicator === null) {\n      let element = document.querySelector(\n        `.playergrid>div[data-row='${row}'][data-column='${column}']`\n      );\n      element.style.backgroundColor = \"lightgrey\";\n    }\n  } else if (board.id === 2) {\n    if (indicator) {\n      let element = document.querySelector(\n        `.computergrid>div[data-row='${row}'][data-column='${column}']`\n      );\n      element.textContent = \"X\";\n    } else if (indicator === null) {\n      let element = document.querySelector(\n        `.computergrid>div[data-row='${row}'][data-column='${column}']`\n      );\n      element.style.backgroundColor = \"lightgrey\";\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridUpdate);\n\n\n//# sourceURL=webpack://jest/./src/gridupdate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playerboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerboard */ \"./src/playerboard.js\");\n/* harmony import */ var _columnplacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnplacer */ \"./src/columnplacer.js\");\n/* harmony import */ var _rowplacer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rowplacer.js */ \"./src/rowplacer.js\");\n/* harmony import */ var _picker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picker.js */ \"./src/picker.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _playerboardview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playerboardview */ \"./src/playerboardview.js\");\n/* harmony import */ var _computerboardview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computerboardview */ \"./src/computerboardview.js\");\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computer.js */ \"./src/computer.js\");\n\n\n\n\n\n\n\n\n\nlet mainContent = document.querySelector(\"#content\");\nlet body = document.querySelector(\"body\");\nbody.onload = (event) => {\n  console.log(\"load\");\n  _computer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].initialize();\n};\nlet playerText = document.createElement(\"div\");\nplayerText.textContent = \"Your Board\";\nplayerText.className = \"playertext\";\nlet computerText = document.createElement(\"div\");\ncomputerText.textContent = \"Computer Board\";\ncomputerText.className = \"computertext\";\n\nlet playerView = (0,_playerboardview__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nlet computerView = (0,_computerboardview__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nmainContent.appendChild(playerView);\nmainContent.appendChild(computerView);\nmainContent.insertBefore(playerText, mainContent.children[0]);\nmainContent.insertBefore(computerText, mainContent.children[3]);\n\n//# sourceURL=webpack://jest/./src/index.js?");

/***/ }),

/***/ "./src/picker.js":
/*!***********************!*\
  !*** ./src/picker.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _columnchecker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnchecker.js */ \"./src/columnchecker.js\");\n/* harmony import */ var _rowchecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rowchecker.js */ \"./src/rowchecker.js\");\n/* harmony import */ var _wintracker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wintracker.js */ \"./src/wintracker.js\");\n\n\n\n\nlet picker = function (board, board2, row, column) {\n  //row -= 1;\n  //column -= 1;\n  let indicator;\n\n  if (board.board[row][column] === true) {\n    board.board[row][column] = \"x\";\n    indicator = true;\n  } else if (board.board[row][column] === \"x\") {\n    indicator = false;\n  } else {\n    indicator = null;\n  }\n\n  if (indicator) {\n    let columnSink;\n    let rowSink;\n    columnSink = (0,_columnchecker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(board, row, column);\n    rowSink = (0,_rowchecker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board, row, column);\n    \n\n    if (columnSink || rowSink) {\n      _wintracker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].track(board2);\n    }\n  }\n\n  return indicator;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (picker);\n\n\n//# sourceURL=webpack://jest/./src/picker.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _computerboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerboard.js */ \"./src/computerboard.js\");\n/* harmony import */ var _playerboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerboard.js */ \"./src/playerboard.js\");\n/* harmony import */ var _picker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picker.js */ \"./src/picker.js\");\n/* harmony import */ var _gridupdate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gridupdate.js */ \"./src/gridupdate.js\");\n\n\n\n\n\n\nlet player = (function () {\n  let orient = [\"column\", \"row\"];\n\n  function play(row, column) {\n    let indicator = (0,_picker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_computerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _playerboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], row, column);\n\n    (0,_gridupdate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_computerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], indicator, row, column);\n  }\n\n  return {\n    play,\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n\n//# sourceURL=webpack://jest/./src/player.js?");

/***/ }),

/***/ "./src/playerboard.js":
/*!****************************!*\
  !*** ./src/playerboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet playerBoard = (function () {\n  let board = Array.from(Array(10), (x) => [false, false, false, false, false, false, false, false, false, false])\n  \n  let id = 1;\n  \n  \n  return {\n    board,\n    id\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerBoard);\n\n//# sourceURL=webpack://jest/./src/playerboard.js?");

/***/ }),

/***/ "./src/playerboardview.js":
/*!********************************!*\
  !*** ./src/playerboardview.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _playerboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerboard.js */ \"./src/playerboard.js\");\n/* harmony import */ var _columnplacer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnplacer.js */ \"./src/columnplacer.js\");\n/* harmony import */ var _rowplacer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rowplacer.js */ \"./src/rowplacer.js\");\n/* harmony import */ var _gridupdate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gridupdate.js */ \"./src/gridupdate.js\");\n/* harmony import */ var _styler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styler.js */ \"./src/styler.js\");\n\n\n\n\n\n\nlet playerBoardView = function () {\n  let content = document.querySelector(\"#content\");\n  let playerGrid = document.createElement(\"div\");\n  playerGrid.className = \"playergrid\";\n  //grid-row toggler\n  let columnRow = document.createElement(\"div\");\n  columnRow.className = \"column\";\n  columnRow.textContent = \"C\";\n  columnRow.addEventListener(\"click\", (event) => {\n    if (event.target.className === \"column\") {\n      event.target.className = \"row\";\n      event.target.textContent = \"R\";\n    } else if (event.target.className === \"row\") {\n      event.target.className = \"column\";\n      event.target.textContent = \"C\";\n    }\n  });\n  content.appendChild(columnRow);\n\n  for (let row in _playerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board) {\n    for (let column in _playerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board[row]) {\n      let div = document.createElement(\"div\");\n      div.setAttribute(\"data-row\", row);\n      div.setAttribute(\"data-column\", column);\n\n      div.addEventListener(\"click\", (event) => {\n        let row = Number(event.target.dataset.row);\n        console.log(row);\n        let column = Number(event.target.dataset.column);\n        if (columnRow.className === \"column\") {\n          (0,_styler_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_columnplacer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_playerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], row, column), \"column\");\n        } else if (columnRow.className === \"row\") {\n          (0,_styler_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_rowplacer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_playerboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], row, column), \"row\");\n        }\n      });\n\n      playerGrid.appendChild(div);\n    }\n  }\n  return playerGrid;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerBoardView);\n\n\n//# sourceURL=webpack://jest/./src/playerboardview.js?");

/***/ }),

/***/ "./src/rowchecker.js":
/*!***************************!*\
  !*** ./src/rowchecker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet rowChecker = function (board, row, column) {\n  \n  if (column < 3) {\n    let count = 0;\n    let sunk = true;\n    while (count <= 3) {\n      if (!sunk) {\n        return false;\n      }\n      if (board.board[row][column + count] === \"x\") {\n        sunk = true;\n        count += 1;\n      } else {\n        sunk = false;\n        count += 1;\n      }\n    }\n    return sunk;\n  } else if (column > 6) {\n    let count = 0;\n    let sunk = true;\n    while (count <= 3) {\n      if (!sunk) {\n        return false;\n      }\n      if (board.board[row][column - count] === \"x\") {\n        sunk = true;\n        count += 1;\n      } else {\n        sunk = false;\n        count += 1;\n      }\n    }\n    return sunk;\n  } else {\n    let countLeft = 0;\n    let countRight = 0;\n    let sunk = true;\n    while (countLeft <= 3) {\n      if (!sunk) {\n        break;\n      }\n      if (board.board[row][column - countLeft] === \"x\") {\n        sunk = true;\n        countLeft += 1;\n      } else {\n        sunk = false;\n        countLeft += 1;\n      }\n    }\n    if (sunk) {\n      return sunk;\n    } else {\n      sunk = true;\n      while (countRight <= 3) {\n        if (!sunk) {\n          return false;\n        }\n        if (board.board[row][column + countRight] === \"x\") {\n          sunk = true;\n          countRight += 1;\n        } else {\n          sunk = false;\n          countRight += 1;\n        }\n      }\n    }\n    return sunk;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rowChecker);\n\n\n//# sourceURL=webpack://jest/./src/rowchecker.js?");

/***/ }),

/***/ "./src/rowplacer.js":
/*!**************************!*\
  !*** ./src/rowplacer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet rowPlacer = function (board, row, column) {\n  let marked = [];\n  let count = 0;\n  while (count <= 3) {\n    if (column > 6) {\n      let column1 = column - count;\n      if (board.board[row][column1]) {\n        return marked;\n      }\n      board.board[row][column1] = true;\n      marked.push([row, column1]);\n      count += 1;\n    } else {\n      let column1 = column + count;\n      if (board.board[row][column1]) {\n        return marked;\n      }\n      board.board[row][column1] = true;\n      marked.push([row, column1]);\n      count += 1;\n    }\n  }\n\n  return marked;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rowPlacer);\n\n\n//# sourceURL=webpack://jest/./src/rowplacer.js?");

/***/ }),

/***/ "./src/styler.js":
/*!***********************!*\
  !*** ./src/styler.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet styler = function (arr, orient) {\n  if (arr.length > 0) {\n    if (orient === \"column\") {\n    for (let e =0;e<arr.length;e++) {\n      console.log(e);\n      let row = arr[e][0];\n      let column = arr[e][1];\n      let element = document.querySelector(\n        `div[data-row='${row}'][data-column='${column}']`\n      );\n      if (e === 0) {\n        element.classList.add(\"bordertop\");\n      }\n      if (e === 3) {\n        element.classList.add(\"borderbottom\");\n      }\n      element.classList.add(\"blueborder\");\n    }\n  } else if (orient === \"row\") {\n    for (let e =0;e<arr.length;e++) {\n      console.log(e);\n      let row = arr[e][0];\n      let column = arr[e][1];\n      let element = document.querySelector(\n        `div[data-row='${row}'][data-column='${column}']`\n      );\n      if (e === 0) {\n        element.classList.add(\"borderleft\");\n      }\n      if (e === 3) {\n        element.classList.add(\"borderright\");\n      }\n      element.classList.add(\"bluebordertop\");\n    }\n  }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styler);\n\n\n//# sourceURL=webpack://jest/./src/styler.js?");

/***/ }),

/***/ "./src/wintracker.js":
/*!***************************!*\
  !*** ./src/wintracker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet winTracker = (function () {\n  let player1 = 0;\n  let player2 = 0;\n\n  let track = function (board) {\n    if (board.id === 1) {\n      player1 += 1;\n    } else if (board.id === 2) {\n      player2 += 1;\n    }\n    if (player1 === 3) {\n      setTimeout(function () {\n        alert(\"Hurray You Won\");\n      }, 1000);\n    } else if (player2 === 3) {\n      setTimeout(function () {\n        alert(\"The Computer Wins\");\n      }, 1000);\n    }\n  };\n  return {\n    track,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (winTracker);\n\n\n//# sourceURL=webpack://jest/./src/wintracker.js?");

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