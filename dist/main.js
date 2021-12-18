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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/HeaderFont.ttf */ "./src/fonts/HeaderFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BodyFont.TTF */ "./src/fonts/BodyFont.TTF"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background.jpg */ "./src/imgs/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HeaderFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'BodyFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nh1, h2, h3{\n    font-family: 'HeaderFont';\n}\n\np, button{\n    font-family: 'BodyFont';\n}\n\nbody{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3em;\n}\n\n.header{\n    height: 25%;\n    width: 100%;\n    background-color: rgba(223, 137, 46);\n    /* display: flex;\n    flex-direction: column; */\n    /* align-items: center;\n    justify-content: center; */\n    padding: 1em 0;\n}\n\n.title,\n.contact-title{\n    text-align: center;\n    color: #382a1e;\n    font-weight: bold;\n}\n\n.nav-bar{\n    top: 10px;\n    width: 100%;\n    padding: 0 1em;\n    /* display: flex; */\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1em; \n}\n\nbutton{\n    grid-column: span 1;\n    border: none;\n    border: solid 0.75px black;\n    background-color: rgba(223, 137, 46);\n    border-radius: 5px;\n    padding: .15em;\n    position: relative;\n    transition: transform 400ms;\n}\n\nbutton:not(.active):hover{\n    transform: translatey(10px);\n    cursor: pointer;\n}\n\n.active{\n    border: solid #893914;\n    border-radius: 8px;\n}\n\n\n.card{\n    min-height: 60%; \n    height:100%;   \n    color: #382a1e;\n    background-color: rgba(223, 137, 46, 0.9);\n    border-radius: 1em;\n    text-align: center;\n    padding: 1em;\n    margin: 1em 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n@media(min-width: 320px) {\n    .title {\n        font-size: calc(50px + 70 * ((100vw - 320px) / 680));\n    }\n    button{\n        font-size: calc(32px + 24 * ((100vw - 320px) / 680));\n    }\n    .contact-title{\n        font-size: calc(36px + 36 * ((100vw - 320px) / 680));\n    }\n    .active{\n        border-width: calc(4px + 10 * ((100vw - 320px) / 680));\n    }\n    .card{\n        width: calc(70% + 16 * ((100vw - 320px) / 680));\n    }\n    .subheader,\n    .name{\n        font-size: calc(24px + 24 * ((100vw - 320px) / 680));\n    }\n    .body{\n        font-size: calc(16px + 24 * ((100vw - 320px) / 680));\n    }\n    .item-pic{\n        width: calc(100px + 250 * ((100vw - 320px) / 680));\n    }\n}\n@media (min-width: 1000px) {\n    .title {\n        font-size: 120px;\n    }\n    button{\n        font-size: 56px;\n    }\n    .contact-title{\n        font-size: 72px;\n    }\n    .active{\n        border-width: 14px;\n    }\n    .subheader,\n    .name {\n        font-size: 48px;\n    }\n    .body {\n        font-size: 40px;\n    }\n    .item-pic{\n        width: 350px;\n    }\n} \n\n.subheader{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .25em;\n}\n\n.icon{\n    padding-bottom: 5px;\n}\n\n.hours .body{\n    line-height: 1.5;\n}\n\n.menu-container{\n    display: flex;\n    flex-direction: column;\n    gap: 3em;\n}\n\n.item{\n    display: flex;\n    gap: 1em;\n    text-align: start;\n\n}\n\n.descripton{\n    display: flex;\n    flex-direction: column;\n}\n\n.item-pic{\n    align-self:flex-start;\n}\n\n.contact-title{\n    text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,4CAAkC;AACtC;;AAEA;IACI,uBAAuB;IACvB,4CAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yDAA4C;IAC5C,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,WAAW;IACX,oCAAoC;IACpC;6BACyB;IACzB;8BAC0B;IAC1B,cAAc;AAClB;;AAEA;;IAEI,kBAAkB;IAClB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,qCAAqC;IACrC,QAAQ;AACZ;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,0BAA0B;IAC1B,oCAAoC;IACpC,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;;AAGA;IACI,eAAe;IACf,WAAW;IACX,cAAc;IACd,yCAAyC;IACzC,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI;QACI,oDAAoD;IACxD;IACA;QACI,oDAAoD;IACxD;IACA;QACI,oDAAoD;IACxD;IACA;QACI,sDAAsD;IAC1D;IACA;QACI,+CAA+C;IACnD;IACA;;QAEI,oDAAoD;IACxD;IACA;QACI,oDAAoD;IACxD;IACA;QACI,kDAAkD;IACtD;AACJ;AACA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;;QAEI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,iBAAiB;;AAErB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["*,\n*::before,\n*::after{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HeaderFont';\n    src: url('./fonts/HeaderFont.ttf');\n}\n\n@font-face {\n    font-family: 'BodyFont';\n    src: url('./fonts/BodyFont.TTF');\n}\n\nh1, h2, h3{\n    font-family: 'HeaderFont';\n}\n\np, button{\n    font-family: 'BodyFont';\n}\n\nbody{\n    background-image: url(./imgs/background.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3em;\n}\n\n.header{\n    height: 25%;\n    width: 100%;\n    background-color: rgba(223, 137, 46);\n    /* display: flex;\n    flex-direction: column; */\n    /* align-items: center;\n    justify-content: center; */\n    padding: 1em 0;\n}\n\n.title,\n.contact-title{\n    text-align: center;\n    color: #382a1e;\n    font-weight: bold;\n}\n\n.nav-bar{\n    top: 10px;\n    width: 100%;\n    padding: 0 1em;\n    /* display: flex; */\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1em; \n}\n\nbutton{\n    grid-column: span 1;\n    border: none;\n    border: solid 0.75px black;\n    background-color: rgba(223, 137, 46);\n    border-radius: 5px;\n    padding: .15em;\n    position: relative;\n    transition: transform 400ms;\n}\n\nbutton:not(.active):hover{\n    transform: translatey(10px);\n    cursor: pointer;\n}\n\n.active{\n    border: solid #893914;\n    border-radius: 8px;\n}\n\n\n.card{\n    min-height: 60%; \n    height:100%;   \n    color: #382a1e;\n    background-color: rgba(223, 137, 46, 0.9);\n    border-radius: 1em;\n    text-align: center;\n    padding: 1em;\n    margin: 1em 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n@media(min-width: 320px) {\n    .title {\n        font-size: calc(50px + 70 * ((100vw - 320px) / 680));\n    }\n    button{\n        font-size: calc(32px + 24 * ((100vw - 320px) / 680));\n    }\n    .contact-title{\n        font-size: calc(36px + 36 * ((100vw - 320px) / 680));\n    }\n    .active{\n        border-width: calc(4px + 10 * ((100vw - 320px) / 680));\n    }\n    .card{\n        width: calc(70% + 16 * ((100vw - 320px) / 680));\n    }\n    .subheader,\n    .name{\n        font-size: calc(24px + 24 * ((100vw - 320px) / 680));\n    }\n    .body{\n        font-size: calc(16px + 24 * ((100vw - 320px) / 680));\n    }\n    .item-pic{\n        width: calc(100px + 250 * ((100vw - 320px) / 680));\n    }\n}\n@media (min-width: 1000px) {\n    .title {\n        font-size: 120px;\n    }\n    button{\n        font-size: 56px;\n    }\n    .contact-title{\n        font-size: 72px;\n    }\n    .active{\n        border-width: 14px;\n    }\n    .subheader,\n    .name {\n        font-size: 48px;\n    }\n    .body {\n        font-size: 40px;\n    }\n    .item-pic{\n        width: 350px;\n    }\n} \n\n.subheader{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .25em;\n}\n\n.icon{\n    padding-bottom: 5px;\n}\n\n.hours .body{\n    line-height: 1.5;\n}\n\n.menu-container{\n    display: flex;\n    flex-direction: column;\n    gap: 3em;\n}\n\n.item{\n    display: flex;\n    gap: 1em;\n    text-align: start;\n\n}\n\n.descripton{\n    display: flex;\n    flex-direction: column;\n}\n\n.item-pic{\n    align-self:flex-start;\n}\n\n.contact-title{\n    text-decoration: underline;\n}"],"sourceRoot":""}]);
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

/***/ "./src/contactPageLoad.js":
/*!********************************!*\
  !*** ./src/contactPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactPage)
/* harmony export */ });
function loadContactPage(){
    let content = document.querySelector('#content');

    let card = document.createElement('div');
    card.className = 'card';

    let contactHeader = document.createElement('h1');
    contactHeader.className = 'contact-title';
    contactHeader.textContent = 'CONTACT US';

    let emailSubheader = document.createElement('h2');
    emailSubheader.className = 'subheader';
    emailSubheader.textContent = 'Email:';

    let emailBody = document.createElement('p');
    emailBody.className = 'body';
    emailBody.textContent = 'JapsWingShop@FakeEmail.ca';
    
    let phoneSubheader = document.createElement('h2');
    phoneSubheader.className = 'subheader';
    phoneSubheader.textContent = 'Phone:';

    let phoneBody = document.createElement('p');
    phoneBody.className = 'body';
    phoneBody.textContent = '905-123-4567';

    let inPersonSubheader = document.createElement('h2');
    inPersonSubheader.className = 'subheader';
    inPersonSubheader.textContent = 'Come See Us In Person:';

    let inPersonBody = document.createElement('p');
    inPersonBody.className = 'body';
    inPersonBody.textContent = '21 Park Lane Circle, Toronto, ON, M3B 1Z8';

    card.append(contactHeader, emailSubheader, emailBody, phoneSubheader, phoneBody, inPersonSubheader, inPersonBody);
    content.append(card);

        //---- SETTING ACTIVE BUTTON --------//
    let mainPageBtn = document.querySelector('.main-page');
    let contactPageBtn = document.querySelector('.contact-page');
    let menuPageBtn = document.querySelector('.menu-page');

    mainPageBtn.classList.remove('active');
    contactPageBtn.classList.add('active');
    menuPageBtn.classList.remove('active');

}

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
/* harmony import */ var _imgs_location_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/location-icon.svg */ "./src/imgs/location-icon.svg");
/* harmony import */ var _imgs_clock_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/clock-icon.svg */ "./src/imgs/clock-icon.svg");
/* harmony import */ var _imgs_about_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/about-icon.svg */ "./src/imgs/about-icon.svg");




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

    aboutIcon.className = 'icon';
    clockIcon.className = 'icon';
    mapIcon.className = 'icon';

    aboutIcon.src = _imgs_about_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
    clockIcon.src = _imgs_clock_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    mapIcon.src = _imgs_location_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    
    if (minWidth.matches){
        aboutIcon.style.width = 'calc(24px + 24 * ((100vw - 320px) / 680))'
        clockIcon.style.width = 'calc(24px + 24 * ((100vw - 320px) / 680))'
        mapIcon.style.width = 'calc(24px + 24 * ((100vw - 320px) / 680))'
    } else if(maxWidth.matches){
        aboutIcon.style.width = '48px';
        mapIcon.style.width = '48px';
        clockIcon.style.width = '48px';
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

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/chicken-wings.jpg */ "./src/imgs/chicken-wings.jpg");
/* harmony import */ var _imgs_french_fries_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/french-fries.jpg */ "./src/imgs/french-fries.jpg");
/* harmony import */ var _imgs_soup_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/soup.jpg */ "./src/imgs/soup.jpg");
/* harmony import */ var _imgs_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/pasta.jpg */ "./src/imgs/pasta.jpg");





let menu = [
    {
        name: 'Chicken Wings',
        price: '$10.99',
        description: '12 Traditional Chicken Wings with no breading. Tossed in our secret homemade Buffalo Sauce.',
        source: _imgs_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_0__
    },
    {
        name: 'Crispy Fries',
        price: '$6.99',
        description: 'Homemade, double fried, extra crispy French Fries. Seasoned with in-house special seasoning.',
        source: _imgs_french_fries_jpg__WEBPACK_IMPORTED_MODULE_1__
    },
    {
        name: 'Soup',
        price: '$8.99',
        description: 'Daily Special Soup served with a side of Garlic Bread, cooked to perfection and basted in butter.',
        source: _imgs_soup_jpg__WEBPACK_IMPORTED_MODULE_2__
    },
    {
        name: 'Penne Pasta',
        price: '$14.99',
        description: 'Classic Penne Pasta from Rome made with tomato garlic sauce, cherry tomatoes, and basil.',
        source: _imgs_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__
    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/menuPageLoad.js":
/*!*****************************!*\
  !*** ./src/menuPageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");


function loadMenuPage(){
    let content = document.querySelector('#content');

    let card = document.createElement('div');
    card.className = 'card';

    let menuHeader = document.createElement('h1');
    menuHeader.className = 'contact-title';
    menuHeader.textContent = 'MENU';

    card.append(menuHeader, populateMenu(_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"]));

    content.append(card);
}

function populateMenu(itemList){

    let menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    for (let item of itemList){

        let foodItem = document.createElement('div');
        foodItem.className='item';

        let itemImage = document.createElement('img');
        itemImage.className = 'item-pic';
        itemImage.src = item.source;

        let description = document.createElement('div');
        description.className = 'description';

        let itemName = document.createElement('h2');
        itemName.className = 'name'
        itemName.innerHTML = `${item.name} <br> ${item.price}`;
        
        let itemText = document.createElement('p');
        itemText.className = 'body';
        itemText.textContent = item.description;

        description.append(itemName, itemText);
        foodItem.append(itemImage, description);

        menuContainer.append(foodItem);
    }
    return menuContainer;
    
}

/***/ }),

/***/ "./src/fonts/BodyFont.TTF":
/*!********************************!*\
  !*** ./src/fonts/BodyFont.TTF ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31541b8a40bff7bbe0f6.TTF";

/***/ }),

/***/ "./src/fonts/HeaderFont.ttf":
/*!**********************************!*\
  !*** ./src/fonts/HeaderFont.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afe15adf392c769f566b.ttf";

/***/ }),

/***/ "./src/imgs/about-icon.svg":
/*!*********************************!*\
  !*** ./src/imgs/about-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fb72e2802a9bb384b06.svg";

/***/ }),

/***/ "./src/imgs/background.jpg":
/*!*********************************!*\
  !*** ./src/imgs/background.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9a399b12ae6f0b91ebd.jpg";

/***/ }),

/***/ "./src/imgs/chicken-wings.jpg":
/*!************************************!*\
  !*** ./src/imgs/chicken-wings.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "859a89b141c90d3e869d.jpg";

/***/ }),

/***/ "./src/imgs/clock-icon.svg":
/*!*********************************!*\
  !*** ./src/imgs/clock-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0f515ca3e80d6e71388.svg";

/***/ }),

/***/ "./src/imgs/french-fries.jpg":
/*!***********************************!*\
  !*** ./src/imgs/french-fries.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2540ca32f059e6b1f5a6.jpg";

/***/ }),

/***/ "./src/imgs/location-icon.svg":
/*!************************************!*\
  !*** ./src/imgs/location-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "583d37a71c344c90cc1f.svg";

/***/ }),

/***/ "./src/imgs/pasta.jpg":
/*!****************************!*\
  !*** ./src/imgs/pasta.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20fb44acfc21bacdabbf.jpg";

/***/ }),

/***/ "./src/imgs/soup.jpg":
/*!***************************!*\
  !*** ./src/imgs/soup.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b76e4565a2e68590b22c.jpg";

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
/* harmony import */ var _contactPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPageLoad */ "./src/contactPageLoad.js");
/* harmony import */ var _menuPageLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPageLoad */ "./src/menuPageLoad.js");






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
        (0,_contactPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })
    menuPageBtn.addEventListener('click', function(){
        while (content.lastElementChild.className!=='header'){
            content.removeChild(content.lastChild);
        }
        (0,_menuPageLoad__WEBPACK_IMPORTED_MODULE_4__["default"])();
    })
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLG1FQUFtRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLGdCQUFnQixnQ0FBZ0MsMkRBQTJELEdBQUcsZ0JBQWdCLDhCQUE4QiwyREFBMkQsR0FBRyxlQUFlLGdDQUFnQyxHQUFHLGNBQWMsOEJBQThCLEdBQUcsU0FBUyx3RUFBd0UsbUNBQW1DLDZCQUE2QixHQUFHLGFBQWEsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZUFBZSxHQUFHLFlBQVksa0JBQWtCLGtCQUFrQiwyQ0FBMkMsdUJBQXVCLDhCQUE4QiwrQkFBK0IsK0JBQStCLHVCQUF1QixHQUFHLDRCQUE0Qix5QkFBeUIscUJBQXFCLHdCQUF3QixHQUFHLGFBQWEsZ0JBQWdCLGtCQUFrQixxQkFBcUIsd0JBQXdCLHNCQUFzQiw0Q0FBNEMsZ0JBQWdCLEdBQUcsV0FBVywwQkFBMEIsbUJBQW1CLGlDQUFpQywyQ0FBMkMseUJBQXlCLHFCQUFxQix5QkFBeUIsa0NBQWtDLEdBQUcsOEJBQThCLGtDQUFrQyxzQkFBc0IsR0FBRyxZQUFZLDRCQUE0Qix5QkFBeUIsR0FBRyxZQUFZLHVCQUF1QixxQkFBcUIscUJBQXFCLGdEQUFnRCx5QkFBeUIseUJBQXlCLG1CQUFtQixvQkFBb0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsOEJBQThCLGNBQWMsK0RBQStELE9BQU8sYUFBYSwrREFBK0QsT0FBTyxxQkFBcUIsK0RBQStELE9BQU8sY0FBYyxpRUFBaUUsT0FBTyxZQUFZLDBEQUEwRCxPQUFPLDZCQUE2QiwrREFBK0QsT0FBTyxZQUFZLCtEQUErRCxPQUFPLGdCQUFnQiw2REFBNkQsT0FBTyxHQUFHLDhCQUE4QixjQUFjLDJCQUEyQixPQUFPLGFBQWEsMEJBQTBCLE9BQU8scUJBQXFCLDBCQUEwQixPQUFPLGNBQWMsNkJBQTZCLE9BQU8sOEJBQThCLDBCQUEwQixPQUFPLGFBQWEsMEJBQTBCLE9BQU8sZ0JBQWdCLHVCQUF1QixPQUFPLElBQUksZUFBZSxvQkFBb0IsMEJBQTBCLDhCQUE4QixpQkFBaUIsR0FBRyxVQUFVLDBCQUEwQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxvQkFBb0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsVUFBVSxvQkFBb0IsZUFBZSx3QkFBd0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLGNBQWMsNEJBQTRCLEdBQUcsbUJBQW1CLGlDQUFpQyxHQUFHLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxtREFBbUQsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxnQkFBZ0IsZ0NBQWdDLHlDQUF5QyxHQUFHLGdCQUFnQiw4QkFBOEIsdUNBQXVDLEdBQUcsZUFBZSxnQ0FBZ0MsR0FBRyxjQUFjLDhCQUE4QixHQUFHLFNBQVMsbURBQW1ELG1DQUFtQyw2QkFBNkIsR0FBRyxhQUFhLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGVBQWUsR0FBRyxZQUFZLGtCQUFrQixrQkFBa0IsMkNBQTJDLHVCQUF1Qiw4QkFBOEIsK0JBQStCLCtCQUErQix1QkFBdUIsR0FBRyw0QkFBNEIseUJBQXlCLHFCQUFxQix3QkFBd0IsR0FBRyxhQUFhLGdCQUFnQixrQkFBa0IscUJBQXFCLHdCQUF3QixzQkFBc0IsNENBQTRDLGdCQUFnQixHQUFHLFdBQVcsMEJBQTBCLG1CQUFtQixpQ0FBaUMsMkNBQTJDLHlCQUF5QixxQkFBcUIseUJBQXlCLGtDQUFrQyxHQUFHLDhCQUE4QixrQ0FBa0Msc0JBQXNCLEdBQUcsWUFBWSw0QkFBNEIseUJBQXlCLEdBQUcsWUFBWSx1QkFBdUIscUJBQXFCLHFCQUFxQixnREFBZ0QseUJBQXlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDhCQUE4QixjQUFjLCtEQUErRCxPQUFPLGFBQWEsK0RBQStELE9BQU8scUJBQXFCLCtEQUErRCxPQUFPLGNBQWMsaUVBQWlFLE9BQU8sWUFBWSwwREFBMEQsT0FBTyw2QkFBNkIsK0RBQStELE9BQU8sWUFBWSwrREFBK0QsT0FBTyxnQkFBZ0IsNkRBQTZELE9BQU8sR0FBRyw4QkFBOEIsY0FBYywyQkFBMkIsT0FBTyxhQUFhLDBCQUEwQixPQUFPLHFCQUFxQiwwQkFBMEIsT0FBTyxjQUFjLDZCQUE2QixPQUFPLDhCQUE4QiwwQkFBMEIsT0FBTyxhQUFhLDBCQUEwQixPQUFPLGdCQUFnQix1QkFBdUIsT0FBTyxJQUFJLGVBQWUsb0JBQW9CLDBCQUEwQiw4QkFBOEIsaUJBQWlCLEdBQUcsVUFBVSwwQkFBMEIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLFVBQVUsb0JBQW9CLGVBQWUsd0JBQXdCLEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsR0FBRyxjQUFjLDRCQUE0QixHQUFHLG1CQUFtQixpQ0FBaUMsR0FBRyxtQkFBbUI7QUFDN3lRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzlDZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUIrQztBQUNEO0FBQ0E7O0FBRS9CO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpREFBUztBQUM3QixvQkFBb0IsaURBQVM7QUFDN0Isa0JBQWtCLG9EQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHb0Q7QUFDRjtBQUNmO0FBQ0U7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVk7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFXO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBSTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUs7QUFDckI7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ1c7O0FBRWY7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsa0RBQUk7O0FBRTdDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVyxPQUFPLFdBQVc7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNxQjtBQUNBO0FBQ007QUFDTjs7QUFFMUM7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCLElBQUkseURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQixLQUFLO0FBQ0wsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3RQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jcmVhdGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWFpblBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51UGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0hlYWRlckZvbnQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Cb2R5Rm9udC5UVEZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRlckZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHlGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5oMSwgaDIsIGgze1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRlckZvbnQnO1xcbn1cXG5cXG5wLCBidXR0b257XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keUZvbnQnO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzZW07XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi50aXRsZSxcXG4uY29udGFjdC10aXRsZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzM4MmExZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uYXYtYmFye1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxZW07IFxcbn1cXG5cXG5idXR0b257XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjc1cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMzcsIDQ2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAuMTVlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XFxufVxcblxcbmJ1dHRvbjpub3QoLmFjdGl2ZSk6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgxMHB4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgICBib3JkZXI6IHNvbGlkICM4OTM5MTQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuXFxuLmNhcmR7XFxuICAgIG1pbi1oZWlnaHQ6IDYwJTsgXFxuICAgIGhlaWdodDoxMDAlOyAgIFxcbiAgICBjb2xvcjogIzM4MmExZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYsIDAuOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG5AbWVkaWEobWluLXdpZHRoOiAzMjBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDUwcHggKyA3MCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICBidXR0b257XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMzJweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5jb250YWN0LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDM2cHggKyAzNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiBjYWxjKDRweCArIDEwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgd2lkdGg6IGNhbGMoNzAlICsgMTYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLnN1YmhlYWRlcixcXG4gICAgLm5hbWV7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMjRweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5ib2R5e1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuaXRlbS1waWN7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDBweCArIDI1MCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xcbiAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgfVxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNHB4O1xcbiAgICB9XFxuICAgIC5zdWJoZWFkZXIsXFxuICAgIC5uYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgfVxcbiAgICAuYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIH1cXG4gICAgLml0ZW0tcGlje1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICB9XFxufSBcXG5cXG4uc3ViaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVlbTtcXG59XFxuXFxuLmljb257XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5ob3VycyAuYm9keXtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNlbTtcXG59XFxuXFxuLml0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG5cXG59XFxuXFxuLmRlc2NyaXB0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtLXBpY3tcXG4gICAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5REFBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDOzZCQUN5QjtJQUN6Qjs4QkFDMEI7SUFDMUIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJO1FBQ0ksb0RBQW9EO0lBQ3hEO0lBQ0E7UUFDSSxvREFBb0Q7SUFDeEQ7SUFDQTtRQUNJLG9EQUFvRDtJQUN4RDtJQUNBO1FBQ0ksc0RBQXNEO0lBQzFEO0lBQ0E7UUFDSSwrQ0FBK0M7SUFDbkQ7SUFDQTs7UUFFSSxvREFBb0Q7SUFDeEQ7SUFDQTtRQUNJLG9EQUFvRDtJQUN4RDtJQUNBO1FBQ0ksa0RBQWtEO0lBQ3REO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0hlYWRlckZvbnQudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQm9keUZvbnQuVFRGJyk7XFxufVxcblxcbmgxLCBoMiwgaDN7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxufVxcblxcbnAsIGJ1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5Rm9udCc7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzZW07XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi50aXRsZSxcXG4uY29udGFjdC10aXRsZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzM4MmExZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uYXYtYmFye1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxZW07IFxcbn1cXG5cXG5idXR0b257XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjc1cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMzcsIDQ2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAuMTVlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XFxufVxcblxcbmJ1dHRvbjpub3QoLmFjdGl2ZSk6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgxMHB4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgICBib3JkZXI6IHNvbGlkICM4OTM5MTQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuXFxuLmNhcmR7XFxuICAgIG1pbi1oZWlnaHQ6IDYwJTsgXFxuICAgIGhlaWdodDoxMDAlOyAgIFxcbiAgICBjb2xvcjogIzM4MmExZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYsIDAuOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG5AbWVkaWEobWluLXdpZHRoOiAzMjBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDUwcHggKyA3MCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICBidXR0b257XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMzJweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5jb250YWN0LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDM2cHggKyAzNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiBjYWxjKDRweCArIDEwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgd2lkdGg6IGNhbGMoNzAlICsgMTYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLnN1YmhlYWRlcixcXG4gICAgLm5hbWV7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMjRweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5ib2R5e1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuaXRlbS1waWN7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDBweCArIDI1MCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xcbiAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgfVxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNHB4O1xcbiAgICB9XFxuICAgIC5zdWJoZWFkZXIsXFxuICAgIC5uYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgfVxcbiAgICAuYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIH1cXG4gICAgLml0ZW0tcGlje1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICB9XFxufSBcXG5cXG4uc3ViaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVlbTtcXG59XFxuXFxuLmljb257XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5ob3VycyAuYm9keXtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNlbTtcXG59XFxuXFxuLml0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG5cXG59XFxuXFxuLmRlc2NyaXB0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtLXBpY3tcXG4gICAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuXG4gICAgbGV0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbnRhY3QtdGl0bGUnO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XG5cbiAgICBsZXQgZW1haWxTdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGVtYWlsU3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIGVtYWlsU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ0VtYWlsOic7XG5cbiAgICBsZXQgZW1haWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsQm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgZW1haWxCb2R5LnRleHRDb250ZW50ID0gJ0phcHNXaW5nU2hvcEBGYWtlRW1haWwuY2EnO1xuICAgIFxuICAgIGxldCBwaG9uZVN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVTdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgcGhvbmVTdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnUGhvbmU6JztcblxuICAgIGxldCBwaG9uZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVCb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBwaG9uZUJvZHkudGV4dENvbnRlbnQgPSAnOTA1LTEyMy00NTY3JztcblxuICAgIGxldCBpblBlcnNvblN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5QZXJzb25TdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgaW5QZXJzb25TdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnQ29tZSBTZWUgVXMgSW4gUGVyc29uOic7XG5cbiAgICBsZXQgaW5QZXJzb25Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluUGVyc29uQm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgaW5QZXJzb25Cb2R5LnRleHRDb250ZW50ID0gJzIxIFBhcmsgTGFuZSBDaXJjbGUsIFRvcm9udG8sIE9OLCBNM0IgMVo4JztcblxuICAgIGNhcmQuYXBwZW5kKGNvbnRhY3RIZWFkZXIsIGVtYWlsU3ViaGVhZGVyLCBlbWFpbEJvZHksIHBob25lU3ViaGVhZGVyLCBwaG9uZUJvZHksIGluUGVyc29uU3ViaGVhZGVyLCBpblBlcnNvbkJvZHkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNhcmQpO1xuXG4gICAgICAgIC8vLS0tLSBTRVRUSU5HIEFDVElWRSBCVVRUT04gLS0tLS0tLS0vL1xuICAgIGxldCBtYWluUGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcbiAgICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1wYWdlJyk7XG4gICAgbGV0IG1lbnVQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFnZScpO1xuXG4gICAgbWFpblBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY29udGFjdFBhZ2VCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgbWVudVBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSkFQUyBXSU5HIFNIT1BcIjtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuXG4gICAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc05hbWUgPSAnbmF2LWJhcic7XG5cbiAgICBsZXQgbWFpblBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtYWluUGFnZUJ0bi5jbGFzc05hbWUgPSAnbWFpbi1wYWdlJztcbiAgICBtYWluUGFnZUJ0bi50ZXh0Q29udGVudCA9ICdNYWluJztcblxuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RQYWdlQnRuLmNsYXNzTmFtZSA9ICdjb250YWN0LXBhZ2UnO1xuICAgIGNvbnRhY3RQYWdlQnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgbGV0IG1lbnVQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudVBhZ2VCdG4uY2xhc3NOYW1lID0gJ21lbnUtcGFnZSc7XG4gICAgbWVudVBhZ2VCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBuYXZCYXIuYXBwZW5kKG1haW5QYWdlQnRuLCBjb250YWN0UGFnZUJ0biwgbWVudVBhZ2VCdG4pO1xuXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgbmF2QmFyKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xufSIsImltcG9ydCBNYXBJY29uIGZyb20gJy4vaW1ncy9sb2NhdGlvbi1pY29uLnN2Zyc7XG5pbXBvcnQgQ2xvY2tJY29uIGZyb20gJy4vaW1ncy9jbG9jay1pY29uLnN2Zyc7XG5pbXBvcnQgQWJvdXRJY29uIGZyb20gJy4vaW1ncy9hYm91dC1pY29uLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNYWluUGFnZSgpe1xuICAgIC8vLS0tLSBMT0FESU5HIERPTSBFTEVNRU5UUyAtLS0tLS0tLS8vXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0LmNsYXNzTmFtZSA9ICdhYm91dCc7XG5cbiAgICBsZXQgYWJvdXRTdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFib3V0U3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIGFib3V0U3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ0FCT1VUJztcblxuICAgIGxldCBhYm91dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRCb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBhYm91dEJvZHkudGV4dENvbnRlbnQgPSAnSmFwcyBXaW5nIFNob3Agc3BlY2lhbGl6ZXMgaW4gYSB2YXJpZXR5IG9mIGFtYXppbmcgZnJpZWQgZm9vZHMuICAgIEZlYXR1cmluZyB0aGUgbW9zdCBGbGF2b3VyZnVsIHdpbmdzLCB0aGUgY3Jpc3BpZXN0IGZyaWVzLCBhbmQgdGhlIHRhc3RpZXN0IGNoaWNrZW4gbnVnZ2V0cy4nO1xuXG4gICAgYWJvdXQuYXBwZW5kKGFib3V0U3ViaGVhZGVyLCBhYm91dEJvZHkpO1xuXG4gICAgbGV0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnMuY2xhc3NOYW1lID0gJ2hvdXJzJztcblxuICAgIGxldCBob3Vyc1N1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG91cnNTdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgaG91cnNTdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnSE9VUlMnO1xuICAgIFxuICAgIGxldCBob3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNCb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBob3Vyc0JvZHkuaW5uZXJIVE1MID0gJ01PTjogMTBBTS0xMFBNIDxicj4gVFVFOiAxMEFNLTEwUE0gPGJyPiBXRUQ6IDEwQU0tMTBQTSA8YnI+IFRIVVI6IDEwQU0tMTBQTSA8YnI+IEZSSTogMTJQTS0xMkFNIDxicj4gU0FUOiAxMlBNLTEyQU0gPGJyPiBTVU46IENMT1NFRCc7XG5cbiAgICBob3Vycy5hcHBlbmQoaG91cnNTdWJoZWFkZXIsIGhvdXJzQm9keSk7XG5cbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbi5jbGFzc05hbWUgPSAnbG9jYXRpb24nO1xuXG4gICAgbGV0IGxvY2F0aW9uU3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsb2NhdGlvblN1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBsb2NhdGlvblN1YmhlYWRlci50ZXh0Q29udGVudCA9ICdMT0NBVElPTic7XG4gICAgXG4gICAgbGV0IGxvY2F0aW9uQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvbkJvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIGxvY2F0aW9uQm9keS5pbm5lckhUTUwgPSAnMjEgUGFyayBMYW5lIENpcmNsZSwgVG9yb250bywgT04sIE0zQiAxWjgnO1xuXG4gICAgbG9jYXRpb24uYXBwZW5kKGxvY2F0aW9uU3ViaGVhZGVyLCBsb2NhdGlvbkJvZHkpO1xuXG4gICAgY2FyZC5hcHBlbmQoYWJvdXQsIGhvdXJzLCBsb2NhdGlvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZChjYXJkKTtcblxuXG4gICAgLy8tLS0tIExPQURJTkcgSUNPTlMgLS0tLS0tLS0vL1xuICAgIGxldCBtaW5XaWR0aCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMzIwcHgpXCIpO1xuICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAwMHB4KVwiKTtcbiAgICBcbiAgICBsZXQgYWJvdXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0IGgyJyk7XG4gICAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VycyBoMicpO1xuICAgIGxldCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24gaDInKTtcbiAgICBcbiAgICBsZXQgYWJvdXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGNsb2NrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBtYXBJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBhYm91dEljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgIGNsb2NrSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgbWFwSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG5cbiAgICBhYm91dEljb24uc3JjID0gQWJvdXRJY29uO1xuICAgIGNsb2NrSWNvbi5zcmMgPSBDbG9ja0ljb247XG4gICAgbWFwSWNvbi5zcmMgPSBNYXBJY29uO1xuICAgIFxuICAgIGlmIChtaW5XaWR0aC5tYXRjaGVzKXtcbiAgICAgICAgYWJvdXRJY29uLnN0eWxlLndpZHRoID0gJ2NhbGMoMjRweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpJ1xuICAgICAgICBjbG9ja0ljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSknXG4gICAgICAgIG1hcEljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSknXG4gICAgfSBlbHNlIGlmKG1heFdpZHRoLm1hdGNoZXMpe1xuICAgICAgICBhYm91dEljb24uc3R5bGUud2lkdGggPSAnNDhweCc7XG4gICAgICAgIG1hcEljb24uc3R5bGUud2lkdGggPSAnNDhweCc7XG4gICAgICAgIGNsb2NrSWNvbi5zdHlsZS53aWR0aCA9ICc0OHB4JztcbiAgICB9XG4gICAgXG4gICAgYWJvdXRUZXh0LmFwcGVuZChhYm91dEljb24pO1xuICAgIGhvdXJzVGV4dC5hcHBlbmQoY2xvY2tJY29uKTtcbiAgICBsb2NhdGlvblRleHQuYXBwZW5kKG1hcEljb24pO1xuXG4gICAgLy8tLS0tIFNFVFRJTkcgQUNUSVZFIEJVVFRPTiAtLS0tLS0tLS8vXG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBhZ2UnKTtcbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG5cbiAgICBtYWluUGFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb250YWN0UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxufSIsImltcG9ydCBDaGlja2VuV2luZ3MgZnJvbSAnLi9pbWdzL2NoaWNrZW4td2luZ3MuanBnJztcbmltcG9ydCBGcmVuY2hGcmllcyBmcm9tICcuL2ltZ3MvZnJlbmNoLWZyaWVzLmpwZyc7XG5pbXBvcnQgU291cCBmcm9tICcuL2ltZ3Mvc291cC5qcGcnO1xuaW1wb3J0IFBhc3RhIGZyb20gJy4vaW1ncy9wYXN0YS5qcGcnO1xuXG5sZXQgbWVudSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDaGlja2VuIFdpbmdzJyxcbiAgICAgICAgcHJpY2U6ICckMTAuOTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzEyIFRyYWRpdGlvbmFsIENoaWNrZW4gV2luZ3Mgd2l0aCBubyBicmVhZGluZy4gVG9zc2VkIGluIG91ciBzZWNyZXQgaG9tZW1hZGUgQnVmZmFsbyBTYXVjZS4nLFxuICAgICAgICBzb3VyY2U6IENoaWNrZW5XaW5nc1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ3Jpc3B5IEZyaWVzJyxcbiAgICAgICAgcHJpY2U6ICckNi45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSG9tZW1hZGUsIGRvdWJsZSBmcmllZCwgZXh0cmEgY3Jpc3B5IEZyZW5jaCBGcmllcy4gU2Vhc29uZWQgd2l0aCBpbi1ob3VzZSBzcGVjaWFsIHNlYXNvbmluZy4nLFxuICAgICAgICBzb3VyY2U6IEZyZW5jaEZyaWVzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTb3VwJyxcbiAgICAgICAgcHJpY2U6ICckOC45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGFpbHkgU3BlY2lhbCBTb3VwIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBHYXJsaWMgQnJlYWQsIGNvb2tlZCB0byBwZXJmZWN0aW9uIGFuZCBiYXN0ZWQgaW4gYnV0dGVyLicsXG4gICAgICAgIHNvdXJjZTogU291cFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGVubmUgUGFzdGEnLFxuICAgICAgICBwcmljZTogJyQxNC45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBQZW5uZSBQYXN0YSBmcm9tIFJvbWUgbWFkZSB3aXRoIHRvbWF0byBnYXJsaWMgc2F1Y2UsIGNoZXJyeSB0b21hdG9lcywgYW5kIGJhc2lsLicsXG4gICAgICAgIHNvdXJjZTogUGFzdGFcbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51SXRlbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICBsZXQgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUhlYWRlci5jbGFzc05hbWUgPSAnY29udGFjdC10aXRsZSc7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9ICdNRU5VJztcblxuICAgIGNhcmQuYXBwZW5kKG1lbnVIZWFkZXIsIHBvcHVsYXRlTWVudShtZW51KSk7XG5cbiAgICBjb250ZW50LmFwcGVuZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51KGl0ZW1MaXN0KXtcblxuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudS1jb250YWluZXInO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtTGlzdCl7XG5cbiAgICAgICAgbGV0IGZvb2RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb2RJdGVtLmNsYXNzTmFtZT0naXRlbSc7XG5cbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1hZ2UuY2xhc3NOYW1lID0gJ2l0ZW0tcGljJztcbiAgICAgICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uc291cmNlO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nO1xuXG4gICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9ICduYW1lJ1xuICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBgJHtpdGVtLm5hbWV9IDxicj4gJHtpdGVtLnByaWNlfWA7XG4gICAgICAgIFxuICAgICAgICBsZXQgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZChpdGVtTmFtZSwgaXRlbVRleHQpO1xuICAgICAgICBmb29kSXRlbS5hcHBlbmQoaXRlbUltYWdlLCBkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmQoZm9vZEl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbiAgICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2NyZWF0ZUhlYWRlcic7XG5pbXBvcnQgbG9hZE1haW5QYWdlIGZyb20gJy4vbWFpblBhZ2VMb2FkJztcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0UGFnZUxvYWQnO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tICcuL21lbnVQYWdlTG9hZCc7XG5cbmNvbnN0IExvYWRXZWJwYWdlID0gKGZ1bmN0aW9uKCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgbG9hZE1haW5QYWdlKCk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGxldCBtYWluUGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcbiAgICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1wYWdlJyk7XG4gICAgbGV0IG1lbnVQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFnZScpO1xuXG4gICAgbWFpblBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSE9PSdoZWFkZXInKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRNYWluUGFnZSgpO1xuICAgIH0pXG4gICAgY29udGFjdFBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSE9PSdoZWFkZXInKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRDb250YWN0UGFnZSgpO1xuICAgIH0pXG4gICAgbWVudVBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTmFtZSE9PSdoZWFkZXInKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xuICAgIH0pXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9