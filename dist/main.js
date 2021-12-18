/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! HeaderFont.ttf */ "./src/HeaderFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! BodyFont.TTF */ "./src/BodyFont.TTF"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HeaderFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'BodyFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nh1, h2, h3{\n    font-family: 'HeaderFont';\n}\n\np, button{\n    font-family: 'BodyFont';\n}\n\nbody{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3em;\n}\n\n.header{\n    height: 25%;\n    width: 100%;\n    background-color: rgba(223, 137, 46);\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em 0;\n}\n\n.title{\n    text-align: center;\n    color: #382a1e;\n    font-weight: bold;\n}\n\n\n@media(min-width: 320px) {\n\n}\n@media (min-width: 1000px) {\n\n} \n\n.nav-bar{\n    top: 10px;\n    width: 100%;\n    padding: 0 1em;\n    /* display: flex; */\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1em; \n}\n\nbutton{\n    grid-column: span 1;\n    border: none;\n    border: solid 0.75px black;\n    background-color: rgba(223, 137, 46);\n    border-radius: 5px;\n    padding: .15em;\n    position: relative;\n    transition: transform 300ms;\n}\n\nbutton:hover{\n    transform: translatey(6px);\n}\n\n.active{\n    border: solid #893914;\n    border-radius: 8px;\n}\n\n\n.card{\n    min-height: 60%; \n    height:100%;   \n    color: #382a1e;\n    background-color: rgba(223, 137, 46, 0.9);\n    border-radius: 1em;\n    text-align: center;\n    padding: 1em;\n    margin: 1em 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n\n\n}\n\n@media(min-width: 320px) {\n    .title {\n        font-size: calc(50px + 70 * ((100vw - 320px) / 680));\n    }\n    button{\n        font-size: calc(32px + 24 * ((100vw - 320px) / 680));\n    }\n    .active{\n        border-width: calc(4px + 10 * ((100vw - 320px) / 680));\n    }\n    .card{\n        width: calc(70% + 16 * ((100vw - 320px) / 680));\n    }\n    .subheader{\n        font-size: calc(24px + 8 * ((100vw - 320px) / 680));\n    }\n    .body{\n        font-size: calc(16px + 8 * ((100vw - 320px) / 680));\n    }\n}\n@media (min-width: 1000px) {\n    .title {\n        font-size: 120px;\n    }\n    button{\n        font-size: 56px;\n    }\n    .active{\n        border-width: 14px;\n    }\n    .subheader {\n        font-size: 32px;\n    }\n    .body {\n        font-size: 24px;\n    }\n} \n\n.subheader{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .25em;\n}\n\nimg{\n    padding-bottom: 5px;\n}\n\n.hours .body{\n    line-height: 1.5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,4CAA0B;AAC9B;;AAEA;IACI,uBAAuB;IACvB,4CAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yDAAuC;IACvC,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,WAAW;IACX,oCAAoC;IACpC,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,iBAAiB;AACrB;;;AAGA;;AAEA;AACA;;AAEA;;AAEA;IACI,SAAS;IACT,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,qCAAqC;IACrC,QAAQ;AACZ;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,0BAA0B;IAC1B,oCAAoC;IACpC,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;;AAGA;IACI,eAAe;IACf,WAAW;IACX,cAAc;IACd,yCAAyC;IACzC,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,QAAQ;;;AAGZ;;AAEA;IACI;QACI,oDAAoD;IACxD;IACA;QACI,oDAAoD;IACxD;IACA;QACI,sDAAsD;IAC1D;IACA;QACI,+CAA+C;IACnD;IACA;QACI,mDAAmD;IACvD;IACA;QACI,mDAAmD;IACvD;AACJ;AACA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HeaderFont';\n    src: url('HeaderFont.ttf');\n}\n\n@font-face {\n    font-family: 'BodyFont';\n    src: url('BodyFont.TTF');\n}\n\nh1, h2, h3{\n    font-family: 'HeaderFont';\n}\n\np, button{\n    font-family: 'BodyFont';\n}\n\nbody{\n    background-image: url(./background.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3em;\n}\n\n.header{\n    height: 25%;\n    width: 100%;\n    background-color: rgba(223, 137, 46);\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em 0;\n}\n\n.title{\n    text-align: center;\n    color: #382a1e;\n    font-weight: bold;\n}\n\n\n@media(min-width: 320px) {\n\n}\n@media (min-width: 1000px) {\n\n} \n\n.nav-bar{\n    top: 10px;\n    width: 100%;\n    padding: 0 1em;\n    /* display: flex; */\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1em; \n}\n\nbutton{\n    grid-column: span 1;\n    border: none;\n    border: solid 0.75px black;\n    background-color: rgba(223, 137, 46);\n    border-radius: 5px;\n    padding: .15em;\n    position: relative;\n    transition: transform 300ms;\n}\n\nbutton:hover{\n    transform: translatey(6px);\n}\n\n.active{\n    border: solid #893914;\n    border-radius: 8px;\n}\n\n\n.card{\n    min-height: 60%; \n    height:100%;   \n    color: #382a1e;\n    background-color: rgba(223, 137, 46, 0.9);\n    border-radius: 1em;\n    text-align: center;\n    padding: 1em;\n    margin: 1em 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n\n\n}\n\n@media(min-width: 320px) {\n    .title {\n        font-size: calc(50px + 70 * ((100vw - 320px) / 680));\n    }\n    button{\n        font-size: calc(32px + 24 * ((100vw - 320px) / 680));\n    }\n    .active{\n        border-width: calc(4px + 10 * ((100vw - 320px) / 680));\n    }\n    .card{\n        width: calc(70% + 16 * ((100vw - 320px) / 680));\n    }\n    .subheader{\n        font-size: calc(24px + 8 * ((100vw - 320px) / 680));\n    }\n    .body{\n        font-size: calc(16px + 8 * ((100vw - 320px) / 680));\n    }\n}\n@media (min-width: 1000px) {\n    .title {\n        font-size: 120px;\n    }\n    button{\n        font-size: 56px;\n    }\n    .active{\n        border-width: 14px;\n    }\n    .subheader {\n        font-size: 32px;\n    }\n    .body {\n        font-size: 24px;\n    }\n} \n\n.subheader{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .25em;\n}\n\nimg{\n    padding-bottom: 5px;\n}\n\n.hours .body{\n    line-height: 1.5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createHeader.js":
/*!*****************************!*\
  !*** ./src/createHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(){
    let content = document.querySelector('#content');

    let header = document.createElement('div');
    header.className = 'header';

    let title = document.createElement('h1');
    title.textContent = "JAPS WING SHOP";
    title.className = 'title';

    let navBar = document.createElement('div');
    navBar.className = 'nav-bar';

    let mainPageBtn = document.createElement('button');
    mainPageBtn.className = 'main-page';
    mainPageBtn.textContent = 'Main';

    let contactPageBtn = document.createElement('button');
    contactPageBtn.className = 'contact-page';
    contactPageBtn.textContent = 'Contact';

    let menuPageBtn = document.createElement('button');
    menuPageBtn.className = 'menu-page';
    menuPageBtn.textContent = 'Menu';

    navBar.append(mainPageBtn, contactPageBtn, menuPageBtn);

    header.append(title, navBar);
    
    content.append(header);
}

/***/ }),

/***/ "./src/mainPageLoad.js":
/*!*****************************!*\
  !*** ./src/mainPageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMainPage)
/* harmony export */ });
/* harmony import */ var _location_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-icon.svg */ "./src/location-icon.svg");
/* harmony import */ var _clock_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock-icon.svg */ "./src/clock-icon.svg");
/* harmony import */ var _about_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-icon.svg */ "./src/about-icon.svg");




function loadMainPage(){
    //---- LOADING DOM ELEMENTS --------//
    let content = document.querySelector('#content');

    let card = document.createElement('div');
    card.className = 'card';

    let about = document.createElement('div');
    about.className = 'about';

    let aboutSubheader = document.createElement('h2');
    aboutSubheader.className = 'subheader';
    aboutSubheader.textContent = 'ABOUT';

    let aboutBody = document.createElement('p');
    aboutBody.className = 'body';
    aboutBody.textContent = 'Japs Wing Shop specializes in a variety of amazing fried foods.    Featuring the most Flavourful wings, the crispiest fries, and the tastiest chicken nuggets.';

    about.append(aboutSubheader, aboutBody);

    let hours = document.createElement('div');
    hours.className = 'hours';

    let hoursSubheader = document.createElement('h2');
    hoursSubheader.className = 'subheader';
    hoursSubheader.textContent = 'HOURS';
    
    let hoursBody = document.createElement('p');
    hoursBody.className = 'body';
    hoursBody.innerHTML = 'MON: 10AM-10PM <br> TUE: 10AM-10PM <br> WED: 10AM-10PM <br> THUR: 10AM-10PM <br> FRI: 12PM-12AM <br> SAT: 12PM-12AM <br> SUN: CLOSED';

    hours.append(hoursSubheader, hoursBody);

    let location = document.createElement('div');
    location.className = 'location';

    let locationSubheader = document.createElement('h2');
    locationSubheader.className = 'subheader';
    locationSubheader.textContent = 'LOCATION';
    
    let locationBody = document.createElement('p');
    locationBody.className = 'body';
    locationBody.innerHTML = '21 Park Lane Circle, Toronto, ON, M3B 1Z8';

    location.append(locationSubheader, locationBody);

    card.append(about, hours, location);

    content.append(card);


    //---- LOADING ICONS --------//
    let minWidth = window.matchMedia("(min-width: 320px)");
    let maxWidth = window.matchMedia("(min-width: 1000px)");
    
    let aboutText = document.querySelector('.about h2');
    let hoursText = document.querySelector('.hours h2');
    let locationText = document.querySelector('.location h2');
    
    let aboutIcon = new Image();
    let clockIcon = new Image();
    let mapIcon = new Image();
    
    aboutIcon.src = _about_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
    clockIcon.src = _clock_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    mapIcon.src = _location_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    
    if (minWidth.matches){
        aboutIcon.style.width = 'calc(24px + 8 * ((100vw - 320px) / 680))'
        clockIcon.style.width = 'calc(24px + 8 * ((100vw - 320px) / 680))'
        mapIcon.style.width = 'calc(24px + 8 * ((100vw - 320px) / 680))'
    } else if(maxWidth.matches){
        aboutIcon.style.width = '32px';
        mapIcon.style.width = '32px';
        clockIcon.style.width = '32px';
    }
    
    aboutText.append(aboutIcon);
    hoursText.append(clockIcon);
    locationText.append(mapIcon);

    //---- SETTING ACTIVE BUTTON --------//
    let mainPageBtn = document.querySelector('.main-page');
    let contactPageBtn = document.querySelector('.contact-page');
    let menuPageBtn = document.querySelector('.menu-page');

    mainPageBtn.classList.add('active');
    contactPageBtn.classList.remove('active');
    menuPageBtn.classList.remove('active');
}

/***/ }),

/***/ "./src/BodyFont.TTF":
/*!**************************!*\
  !*** ./src/BodyFont.TTF ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31541b8a40bff7bbe0f6.TTF";

/***/ }),

/***/ "./src/HeaderFont.ttf":
/*!****************************!*\
  !*** ./src/HeaderFont.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afe15adf392c769f566b.ttf";

/***/ }),

/***/ "./src/about-icon.svg":
/*!****************************!*\
  !*** ./src/about-icon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fb72e2802a9bb384b06.svg";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9a399b12ae6f0b91ebd.jpg";

/***/ }),

/***/ "./src/clock-icon.svg":
/*!****************************!*\
  !*** ./src/clock-icon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0f515ca3e80d6e71388.svg";

/***/ }),

/***/ "./src/location-icon.svg":
/*!*******************************!*\
  !*** ./src/location-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "583d37a71c344c90cc1f.svg";

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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader */ "./src/createHeader.js");
/* harmony import */ var _mainPageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPageLoad */ "./src/mainPageLoad.js");





const LoadWebpage = (function(){
    (0,_createHeader__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_mainPageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
    let content = document.querySelector('#content');
    let mainPageBtn = document.querySelector('.main-page');
    let contactPageBtn = document.querySelector('.contact-page');
    let menuPageBtn = document.querySelector('.menu-page');

    mainPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        (0,_mainPageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })
    contactPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        loadContactPage();
    })
    menuPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        loadMenuPage();
    })
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNxQjtBQUNBOzs7QUFHMUM7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCLElBQUkseURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NyZWF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tYWluUGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJIZWFkZXJGb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIkJvZHlGb250LlRURlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keUZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbmgxLCBoMiwgaDN7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxufVxcblxcbnAsIGJ1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5Rm9udCc7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNlbTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0Nik7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi50aXRsZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzM4MmExZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbkBtZWRpYShtaW4td2lkdGg6IDMyMHB4KSB7XFxuXFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG5cXG59IFxcblxcbi5uYXYtYmFye1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxZW07IFxcbn1cXG5cXG5idXR0b257XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjc1cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMzcsIDQ2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAuMTVlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDZweCk7XFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGJvcmRlcjogc29saWQgIzg5MzkxNDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5cXG4uY2FyZHtcXG4gICAgbWluLWhlaWdodDogNjAlOyBcXG4gICAgaGVpZ2h0OjEwMCU7ICAgXFxuICAgIGNvbG9yOiAjMzgyYTFlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0NiwgMC45KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxuXFxuXFxufVxcblxcbkBtZWRpYShtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoNTBweCArIDcwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmFjdGl2ZXtcXG4gICAgICAgIGJvcmRlci13aWR0aDogY2FsYyg0cHggKyAxMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDcwJSArIDE2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5zdWJoZWFkZXJ7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMjRweCArIDggKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmJvZHl7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDggKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxMjBweDtcXG4gICAgfVxcbiAgICBidXR0b257XFxuICAgICAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIH1cXG4gICAgLmFjdGl2ZXtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTRweDtcXG4gICAgfVxcbiAgICAuc3ViaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgfVxcbiAgICAuYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG59IFxcblxcbi5zdWJoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcbn1cXG5cXG5pbWd7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5ob3VycyAuYm9keXtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5REFBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7OztBQUdaOztBQUVBO0lBQ0k7UUFDSSxvREFBb0Q7SUFDeEQ7SUFDQTtRQUNJLG9EQUFvRDtJQUN4RDtJQUNBO1FBQ0ksc0RBQXNEO0lBQzFEO0lBQ0E7UUFDSSwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLG1EQUFtRDtJQUN2RDtJQUNBO1FBQ0ksbURBQW1EO0lBQ3ZEO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRlckZvbnQnO1xcbiAgICBzcmM6IHVybCgnSGVhZGVyRm9udC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keUZvbnQnO1xcbiAgICBzcmM6IHVybCgnQm9keUZvbnQuVFRGJyk7XFxufVxcblxcbmgxLCBoMiwgaDN7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxufVxcblxcbnAsIGJ1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5Rm9udCc7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM2VtO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMzcsIDQ2KTtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLnRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMzgyYTFlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuQG1lZGlhKG1pbi13aWR0aDogMzIwcHgpIHtcXG5cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcblxcbn0gXFxuXFxuLm5hdi1iYXJ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDFlbTsgXFxufVxcblxcbmJ1dHRvbntcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuNzVweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC4xNWVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNnB4KTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYm9yZGVyOiBzb2xpZCAjODkzOTE0O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcblxcbi5jYXJke1xcbiAgICBtaW4taGVpZ2h0OiA2MCU7IFxcbiAgICBoZWlnaHQ6MTAwJTsgICBcXG4gICAgY29sb3I6ICMzODJhMWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMzcsIDQ2LCAwLjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG5cXG5cXG59XFxuXFxuQG1lZGlhKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyg1MHB4ICsgNzAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDMycHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiBjYWxjKDRweCArIDEwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgd2lkdGg6IGNhbGMoNzAlICsgMTYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLnN1YmhlYWRlcntcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuYm9keXtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xcbiAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgfVxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNHB4O1xcbiAgICB9XFxuICAgIC5zdWJoZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB9XFxuICAgIC5ib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcbn0gXFxuXFxuLnN1YmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogLjI1ZW07XFxufVxcblxcbmltZ3tcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhvdXJzIC5ib2R5e1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkpBUFMgV0lORyBTSE9QXCI7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcblxuICAgIGxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NOYW1lID0gJ25hdi1iYXInO1xuXG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWFpblBhZ2VCdG4uY2xhc3NOYW1lID0gJ21haW4tcGFnZSc7XG4gICAgbWFpblBhZ2VCdG4udGV4dENvbnRlbnQgPSAnTWFpbic7XG5cbiAgICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0UGFnZUJ0bi5jbGFzc05hbWUgPSAnY29udGFjdC1wYWdlJztcbiAgICBjb250YWN0UGFnZUJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGxldCBtZW51UGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVQYWdlQnRuLmNsYXNzTmFtZSA9ICdtZW51LXBhZ2UnO1xuICAgIG1lbnVQYWdlQnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgbmF2QmFyLmFwcGVuZChtYWluUGFnZUJ0biwgY29udGFjdFBhZ2VCdG4sIG1lbnVQYWdlQnRuKTtcblxuICAgIGhlYWRlci5hcHBlbmQodGl0bGUsIG5hdkJhcik7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbn0iLCJpbXBvcnQgTWFwSWNvbiBmcm9tICcuL2xvY2F0aW9uLWljb24uc3ZnJztcbmltcG9ydCBDbG9ja0ljb24gZnJvbSAnLi9jbG9jay1pY29uLnN2Zyc7XG5pbXBvcnQgQWJvdXRJY29uIGZyb20gJy4vYWJvdXQtaWNvbi5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWFpblBhZ2UoKXtcbiAgICAvLy0tLS0gTE9BRElORyBET00gRUxFTUVOVFMgLS0tLS0tLS0vL1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuXG4gICAgbGV0IGFib3V0U3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dFN1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBhYm91dFN1YmhlYWRlci50ZXh0Q29udGVudCA9ICdBQk9VVCc7XG5cbiAgICBsZXQgYWJvdXRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0Qm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgYWJvdXRCb2R5LnRleHRDb250ZW50ID0gJ0phcHMgV2luZyBTaG9wIHNwZWNpYWxpemVzIGluIGEgdmFyaWV0eSBvZiBhbWF6aW5nIGZyaWVkIGZvb2RzLiAgICBGZWF0dXJpbmcgdGhlIG1vc3QgRmxhdm91cmZ1bCB3aW5ncywgdGhlIGNyaXNwaWVzdCBmcmllcywgYW5kIHRoZSB0YXN0aWVzdCBjaGlja2VuIG51Z2dldHMuJztcblxuICAgIGFib3V0LmFwcGVuZChhYm91dFN1YmhlYWRlciwgYWJvdXRCb2R5KTtcblxuICAgIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTmFtZSA9ICdob3Vycyc7XG5cbiAgICBsZXQgaG91cnNTdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvdXJzU3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIGhvdXJzU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ0hPVVJTJztcbiAgICBcbiAgICBsZXQgaG91cnNCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzQm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgaG91cnNCb2R5LmlubmVySFRNTCA9ICdNT046IDEwQU0tMTBQTSA8YnI+IFRVRTogMTBBTS0xMFBNIDxicj4gV0VEOiAxMEFNLTEwUE0gPGJyPiBUSFVSOiAxMEFNLTEwUE0gPGJyPiBGUkk6IDEyUE0tMTJBTSA8YnI+IFNBVDogMTJQTS0xMkFNIDxicj4gU1VOOiBDTE9TRUQnO1xuXG4gICAgaG91cnMuYXBwZW5kKGhvdXJzU3ViaGVhZGVyLCBob3Vyc0JvZHkpO1xuXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcblxuICAgIGxldCBsb2NhdGlvblN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25TdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgbG9jYXRpb25TdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnTE9DQVRJT04nO1xuICAgIFxuICAgIGxldCBsb2NhdGlvbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25Cb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBsb2NhdGlvbkJvZHkuaW5uZXJIVE1MID0gJzIxIFBhcmsgTGFuZSBDaXJjbGUsIFRvcm9udG8sIE9OLCBNM0IgMVo4JztcblxuICAgIGxvY2F0aW9uLmFwcGVuZChsb2NhdGlvblN1YmhlYWRlciwgbG9jYXRpb25Cb2R5KTtcblxuICAgIGNhcmQuYXBwZW5kKGFib3V0LCBob3VycywgbG9jYXRpb24pO1xuXG4gICAgY29udGVudC5hcHBlbmQoY2FyZCk7XG5cblxuICAgIC8vLS0tLSBMT0FESU5HIElDT05TIC0tLS0tLS0tLy9cbiAgICBsZXQgbWluV2lkdGggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDMyMHB4KVwiKTtcbiAgICBsZXQgbWF4V2lkdGggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwMDBweClcIik7XG4gICAgXG4gICAgbGV0IGFib3V0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCBoMicpO1xuICAgIGxldCBob3Vyc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cnMgaDInKTtcbiAgICBsZXQgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uIGgyJyk7XG4gICAgXG4gICAgbGV0IGFib3V0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBjbG9ja0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgbWFwSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIFxuICAgIGFib3V0SWNvbi5zcmMgPSBBYm91dEljb247XG4gICAgY2xvY2tJY29uLnNyYyA9IENsb2NrSWNvbjtcbiAgICBtYXBJY29uLnNyYyA9IE1hcEljb247XG4gICAgXG4gICAgaWYgKG1pbldpZHRoLm1hdGNoZXMpe1xuICAgICAgICBhYm91dEljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKSdcbiAgICAgICAgY2xvY2tJY29uLnN0eWxlLndpZHRoID0gJ2NhbGMoMjRweCArIDggKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSknXG4gICAgICAgIG1hcEljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKSdcbiAgICB9IGVsc2UgaWYobWF4V2lkdGgubWF0Y2hlcyl7XG4gICAgICAgIGFib3V0SWNvbi5zdHlsZS53aWR0aCA9ICczMnB4JztcbiAgICAgICAgbWFwSWNvbi5zdHlsZS53aWR0aCA9ICczMnB4JztcbiAgICAgICAgY2xvY2tJY29uLnN0eWxlLndpZHRoID0gJzMycHgnO1xuICAgIH1cbiAgICBcbiAgICBhYm91dFRleHQuYXBwZW5kKGFib3V0SWNvbik7XG4gICAgaG91cnNUZXh0LmFwcGVuZChjbG9ja0ljb24pO1xuICAgIGxvY2F0aW9uVGV4dC5hcHBlbmQobWFwSWNvbik7XG5cbiAgICAvLy0tLS0gU0VUVElORyBBQ1RJVkUgQlVUVE9OIC0tLS0tLS0tLy9cbiAgICBsZXQgbWFpblBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XG4gICAgbGV0IGNvbnRhY3RQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtcGFnZScpO1xuICAgIGxldCBtZW51UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhZ2UnKTtcblxuICAgIG1haW5QYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG1lbnVQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY3JlYXRlSGVhZGVyJztcbmltcG9ydCBsb2FkTWFpblBhZ2UgZnJvbSAnLi9tYWluUGFnZUxvYWQnO1xuXG5cbmNvbnN0IExvYWRXZWJwYWdlID0gKGZ1bmN0aW9uKCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgbG9hZE1haW5QYWdlKCk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGxldCBtYWluUGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcbiAgICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1wYWdlJyk7XG4gICAgbGV0IG1lbnVQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFnZScpO1xuXG4gICAgbWFpblBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSE9PSdoZWFkZXInKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRNYWluUGFnZSgpO1xuICAgIH0pXG4gICAgY29udGFjdFBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSE9PSdoZWFkZXInKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRDb250YWN0UGFnZSgpO1xuICAgIH0pXG4gICAgbWVudVBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSE9PSdoZWFkZXInKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xuICAgIH0pXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9