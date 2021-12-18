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

    //---- SETTING ACTIVE BUTTON --------//
    let mainPageBtn = document.querySelector('.main-page');
    let contactPageBtn = document.querySelector('.contact-page');
    let menuPageBtn = document.querySelector('.menu-page');
    
    mainPageBtn.classList.remove('active');
    contactPageBtn.classList.remove('active');
    menuPageBtn.classList.add('active');    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ3FCO0FBQ0E7QUFDTTtBQUNOOztBQUUxQztBQUNBLElBQUkseURBQVk7QUFDaEIsSUFBSSx5REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCLEtBQUs7QUFDTCxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NyZWF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tYWluUGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSGVhZGVyRm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0JvZHlGb250LlRURlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keUZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbmgxLCBoMiwgaDN7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyRm9udCc7XFxufVxcblxcbnAsIGJ1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5Rm9udCc7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNlbTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0Nik7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLnRpdGxlLFxcbi5jb250YWN0LXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMzgyYTFlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hdi1iYXJ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDFlbTsgXFxufVxcblxcbmJ1dHRvbntcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuNzVweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC4xNWVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcztcXG59XFxuXFxuYnV0dG9uOm5vdCguYWN0aXZlKTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwcHgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGJvcmRlcjogc29saWQgIzg5MzkxNDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5cXG4uY2FyZHtcXG4gICAgbWluLWhlaWdodDogNjAlOyBcXG4gICAgaGVpZ2h0OjEwMCU7ICAgXFxuICAgIGNvbG9yOiAjMzgyYTFlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0NiwgMC45KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxufVxcblxcbkBtZWRpYShtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoNTBweCArIDcwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMzZweCArIDM2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5hY3RpdmV7XFxuICAgICAgICBib3JkZXItd2lkdGg6IGNhbGMoNHB4ICsgMTAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgICB3aWR0aDogY2FsYyg3MCUgKyAxNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuc3ViaGVhZGVyLFxcbiAgICAubmFtZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmJvZHl7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5pdGVtLXBpY3tcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHB4ICsgMjUwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XFxuICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICB9XFxuICAgIC5jb250YWN0LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICB9XFxuICAgIC5hY3RpdmV7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDE0cHg7XFxuICAgIH1cXG4gICAgLnN1YmhlYWRlcixcXG4gICAgLm5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB9XFxuICAgIC5ib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgfVxcbiAgICAuaXRlbS1waWN7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgIH1cXG59IFxcblxcbi5zdWJoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhvdXJzIC5ib2R5e1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM2VtO1xcbn1cXG5cXG4uaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcblxcbn1cXG5cXG4uZGVzY3JpcHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0tcGlje1xcbiAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxufVxcblxcbi5jb250YWN0LXRpdGxle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlEQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEM7NkJBQ3lCO0lBQ3pCOzhCQUMwQjtJQUMxQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0k7UUFDSSxvREFBb0Q7SUFDeEQ7SUFDQTtRQUNJLG9EQUFvRDtJQUN4RDtJQUNBO1FBQ0ksb0RBQW9EO0lBQ3hEO0lBQ0E7UUFDSSxzREFBc0Q7SUFDMUQ7SUFDQTtRQUNJLCtDQUErQztJQUNuRDtJQUNBOztRQUVJLG9EQUFvRDtJQUN4RDtJQUNBO1FBQ0ksb0RBQW9EO0lBQ3hEO0lBQ0E7UUFDSSxrREFBa0Q7SUFDdEQ7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlcntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkZXJGb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvSGVhZGVyRm9udC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Cb2R5Rm9udC5UVEYnKTtcXG59XFxuXFxuaDEsIGgyLCBoM3tcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkZXJGb250JztcXG59XFxuXFxucCwgYnV0dG9ue1xcbiAgICBmb250LWZhbWlseTogJ0JvZHlGb250JztcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNlbTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0Nik7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLnRpdGxlLFxcbi5jb250YWN0LXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMzgyYTFlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hdi1iYXJ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDFlbTsgXFxufVxcblxcbmJ1dHRvbntcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuNzVweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC4xNWVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcztcXG59XFxuXFxuYnV0dG9uOm5vdCguYWN0aXZlKTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwcHgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGJvcmRlcjogc29saWQgIzg5MzkxNDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5cXG4uY2FyZHtcXG4gICAgbWluLWhlaWdodDogNjAlOyBcXG4gICAgaGVpZ2h0OjEwMCU7ICAgXFxuICAgIGNvbG9yOiAjMzgyYTFlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0NiwgMC45KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxufVxcblxcbkBtZWRpYShtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoNTBweCArIDcwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygzMnB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMzZweCArIDM2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5hY3RpdmV7XFxuICAgICAgICBib3JkZXItd2lkdGg6IGNhbGMoNHB4ICsgMTAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgICB3aWR0aDogY2FsYyg3MCUgKyAxNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gICAgfVxcbiAgICAuc3ViaGVhZGVyLFxcbiAgICAubmFtZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICAgIH1cXG4gICAgLmJvZHl7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxuICAgIC5pdGVtLXBpY3tcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHB4ICsgMjUwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XFxuICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICB9XFxuICAgIC5jb250YWN0LXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICB9XFxuICAgIC5hY3RpdmV7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDE0cHg7XFxuICAgIH1cXG4gICAgLnN1YmhlYWRlcixcXG4gICAgLm5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB9XFxuICAgIC5ib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgfVxcbiAgICAuaXRlbS1waWN7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgIH1cXG59IFxcblxcbi5zdWJoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhvdXJzIC5ib2R5e1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM2VtO1xcbn1cXG5cXG4uaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcblxcbn1cXG5cXG4uZGVzY3JpcHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0tcGlje1xcbiAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxufVxcblxcbi5jb250YWN0LXRpdGxle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICBsZXQgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdEhlYWRlci5jbGFzc05hbWUgPSAnY29udGFjdC10aXRsZSc7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcblxuICAgIGxldCBlbWFpbFN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZW1haWxTdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgZW1haWxTdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnRW1haWw6JztcblxuICAgIGxldCBlbWFpbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWxCb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBlbWFpbEJvZHkudGV4dENvbnRlbnQgPSAnSmFwc1dpbmdTaG9wQEZha2VFbWFpbC5jYSc7XG4gICAgXG4gICAgbGV0IHBob25lU3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwaG9uZVN1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBwaG9uZVN1YmhlYWRlci50ZXh0Q29udGVudCA9ICdQaG9uZTonO1xuXG4gICAgbGV0IHBob25lQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZUJvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIHBob25lQm9keS50ZXh0Q29udGVudCA9ICc5MDUtMTIzLTQ1NjcnO1xuXG4gICAgbGV0IGluUGVyc29uU3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpblBlcnNvblN1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBpblBlcnNvblN1YmhlYWRlci50ZXh0Q29udGVudCA9ICdDb21lIFNlZSBVcyBJbiBQZXJzb246JztcblxuICAgIGxldCBpblBlcnNvbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5QZXJzb25Cb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBpblBlcnNvbkJvZHkudGV4dENvbnRlbnQgPSAnMjEgUGFyayBMYW5lIENpcmNsZSwgVG9yb250bywgT04sIE0zQiAxWjgnO1xuXG4gICAgY2FyZC5hcHBlbmQoY29udGFjdEhlYWRlciwgZW1haWxTdWJoZWFkZXIsIGVtYWlsQm9keSwgcGhvbmVTdWJoZWFkZXIsIHBob25lQm9keSwgaW5QZXJzb25TdWJoZWFkZXIsIGluUGVyc29uQm9keSk7XG4gICAgY29udGVudC5hcHBlbmQoY2FyZCk7XG5cbiAgICAgICAgLy8tLS0tIFNFVFRJTkcgQUNUSVZFIEJVVFRPTiAtLS0tLS0tLS8vXG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBhZ2UnKTtcbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG5cbiAgICBtYWluUGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBjb250YWN0UGFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBtZW51UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJKQVBTIFdJTkcgU0hPUFwiO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG5cbiAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTmFtZSA9ICduYXYtYmFyJztcblxuICAgIGxldCBtYWluUGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1haW5QYWdlQnRuLmNsYXNzTmFtZSA9ICdtYWluLXBhZ2UnO1xuICAgIG1haW5QYWdlQnRuLnRleHRDb250ZW50ID0gJ01haW4nO1xuXG4gICAgbGV0IGNvbnRhY3RQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdFBhZ2VCdG4uY2xhc3NOYW1lID0gJ2NvbnRhY3QtcGFnZSc7XG4gICAgY29udGFjdFBhZ2VCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51UGFnZUJ0bi5jbGFzc05hbWUgPSAnbWVudS1wYWdlJztcbiAgICBtZW51UGFnZUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIG5hdkJhci5hcHBlbmQobWFpblBhZ2VCdG4sIGNvbnRhY3RQYWdlQnRuLCBtZW51UGFnZUJ0bik7XG5cbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlLCBuYXZCYXIpO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG59IiwiaW1wb3J0IE1hcEljb24gZnJvbSAnLi9pbWdzL2xvY2F0aW9uLWljb24uc3ZnJztcbmltcG9ydCBDbG9ja0ljb24gZnJvbSAnLi9pbWdzL2Nsb2NrLWljb24uc3ZnJztcbmltcG9ydCBBYm91dEljb24gZnJvbSAnLi9pbWdzL2Fib3V0LWljb24uc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1haW5QYWdlKCl7XG4gICAgLy8tLS0tIExPQURJTkcgRE9NIEVMRU1FTlRTIC0tLS0tLS0tLy9cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXQuY2xhc3NOYW1lID0gJ2Fib3V0JztcblxuICAgIGxldCBhYm91dFN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRTdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgYWJvdXRTdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnQUJPVVQnO1xuXG4gICAgbGV0IGFib3V0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dEJvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIGFib3V0Qm9keS50ZXh0Q29udGVudCA9ICdKYXBzIFdpbmcgU2hvcCBzcGVjaWFsaXplcyBpbiBhIHZhcmlldHkgb2YgYW1hemluZyBmcmllZCBmb29kcy4gICAgRmVhdHVyaW5nIHRoZSBtb3N0IEZsYXZvdXJmdWwgd2luZ3MsIHRoZSBjcmlzcGllc3QgZnJpZXMsIGFuZCB0aGUgdGFzdGllc3QgY2hpY2tlbiBudWdnZXRzLic7XG5cbiAgICBhYm91dC5hcHBlbmQoYWJvdXRTdWJoZWFkZXIsIGFib3V0Qm9keSk7XG5cbiAgICBsZXQgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc05hbWUgPSAnaG91cnMnO1xuXG4gICAgbGV0IGhvdXJzU3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBob3Vyc1N1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBob3Vyc1N1YmhlYWRlci50ZXh0Q29udGVudCA9ICdIT1VSUyc7XG4gICAgXG4gICAgbGV0IGhvdXJzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc0JvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIGhvdXJzQm9keS5pbm5lckhUTUwgPSAnTU9OOiAxMEFNLTEwUE0gPGJyPiBUVUU6IDEwQU0tMTBQTSA8YnI+IFdFRDogMTBBTS0xMFBNIDxicj4gVEhVUjogMTBBTS0xMFBNIDxicj4gRlJJOiAxMlBNLTEyQU0gPGJyPiBTQVQ6IDEyUE0tMTJBTSA8YnI+IFNVTjogQ0xPU0VEJztcblxuICAgIGhvdXJzLmFwcGVuZChob3Vyc1N1YmhlYWRlciwgaG91cnNCb2R5KTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTmFtZSA9ICdsb2NhdGlvbic7XG5cbiAgICBsZXQgbG9jYXRpb25TdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxvY2F0aW9uU3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIGxvY2F0aW9uU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcbiAgICBcbiAgICBsZXQgbG9jYXRpb25Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uQm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgbG9jYXRpb25Cb2R5LmlubmVySFRNTCA9ICcyMSBQYXJrIExhbmUgQ2lyY2xlLCBUb3JvbnRvLCBPTiwgTTNCIDFaOCc7XG5cbiAgICBsb2NhdGlvbi5hcHBlbmQobG9jYXRpb25TdWJoZWFkZXIsIGxvY2F0aW9uQm9keSk7XG5cbiAgICBjYXJkLmFwcGVuZChhYm91dCwgaG91cnMsIGxvY2F0aW9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGNhcmQpO1xuXG5cbiAgICAvLy0tLS0gTE9BRElORyBJQ09OUyAtLS0tLS0tLS8vXG4gICAgbGV0IG1pbldpZHRoID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAzMjBweClcIik7XG4gICAgbGV0IG1heFdpZHRoID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMDAwcHgpXCIpO1xuICAgIFxuICAgIGxldCBhYm91dFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQgaDInKTtcbiAgICBsZXQgaG91cnNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJzIGgyJyk7XG4gICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbiBoMicpO1xuICAgIFxuICAgIGxldCBhYm91dEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgY2xvY2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IG1hcEljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGFib3V0SWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgY2xvY2tJY29uLmNsYXNzTmFtZSA9ICdpY29uJztcbiAgICBtYXBJY29uLmNsYXNzTmFtZSA9ICdpY29uJztcblxuICAgIGFib3V0SWNvbi5zcmMgPSBBYm91dEljb247XG4gICAgY2xvY2tJY29uLnNyYyA9IENsb2NrSWNvbjtcbiAgICBtYXBJY29uLnNyYyA9IE1hcEljb247XG4gICAgXG4gICAgaWYgKG1pbldpZHRoLm1hdGNoZXMpe1xuICAgICAgICBhYm91dEljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSknXG4gICAgICAgIGNsb2NrSWNvbi5zdHlsZS53aWR0aCA9ICdjYWxjKDI0cHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKSdcbiAgICAgICAgbWFwSWNvbi5zdHlsZS53aWR0aCA9ICdjYWxjKDI0cHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKSdcbiAgICB9IGVsc2UgaWYobWF4V2lkdGgubWF0Y2hlcyl7XG4gICAgICAgIGFib3V0SWNvbi5zdHlsZS53aWR0aCA9ICc0OHB4JztcbiAgICAgICAgbWFwSWNvbi5zdHlsZS53aWR0aCA9ICc0OHB4JztcbiAgICAgICAgY2xvY2tJY29uLnN0eWxlLndpZHRoID0gJzQ4cHgnO1xuICAgIH1cbiAgICBcbiAgICBhYm91dFRleHQuYXBwZW5kKGFib3V0SWNvbik7XG4gICAgaG91cnNUZXh0LmFwcGVuZChjbG9ja0ljb24pO1xuICAgIGxvY2F0aW9uVGV4dC5hcHBlbmQobWFwSWNvbik7XG5cbiAgICAvLy0tLS0gU0VUVElORyBBQ1RJVkUgQlVUVE9OIC0tLS0tLS0tLy9cbiAgICBsZXQgbWFpblBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XG4gICAgbGV0IGNvbnRhY3RQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtcGFnZScpO1xuICAgIGxldCBtZW51UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhZ2UnKTtcblxuICAgIG1haW5QYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG1lbnVQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG59IiwiaW1wb3J0IENoaWNrZW5XaW5ncyBmcm9tICcuL2ltZ3MvY2hpY2tlbi13aW5ncy5qcGcnO1xuaW1wb3J0IEZyZW5jaEZyaWVzIGZyb20gJy4vaW1ncy9mcmVuY2gtZnJpZXMuanBnJztcbmltcG9ydCBTb3VwIGZyb20gJy4vaW1ncy9zb3VwLmpwZyc7XG5pbXBvcnQgUGFzdGEgZnJvbSAnLi9pbWdzL3Bhc3RhLmpwZyc7XG5cbmxldCBtZW51ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0NoaWNrZW4gV2luZ3MnLFxuICAgICAgICBwcmljZTogJyQxMC45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTIgVHJhZGl0aW9uYWwgQ2hpY2tlbiBXaW5ncyB3aXRoIG5vIGJyZWFkaW5nLiBUb3NzZWQgaW4gb3VyIHNlY3JldCBob21lbWFkZSBCdWZmYWxvIFNhdWNlLicsXG4gICAgICAgIHNvdXJjZTogQ2hpY2tlbldpbmdzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDcmlzcHkgRnJpZXMnLFxuICAgICAgICBwcmljZTogJyQ2Ljk5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdIb21lbWFkZSwgZG91YmxlIGZyaWVkLCBleHRyYSBjcmlzcHkgRnJlbmNoIEZyaWVzLiBTZWFzb25lZCB3aXRoIGluLWhvdXNlIHNwZWNpYWwgc2Vhc29uaW5nLicsXG4gICAgICAgIHNvdXJjZTogRnJlbmNoRnJpZXNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NvdXAnLFxuICAgICAgICBwcmljZTogJyQ4Ljk5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEYWlseSBTcGVjaWFsIFNvdXAgc2VydmVkIHdpdGggYSBzaWRlIG9mIEdhcmxpYyBCcmVhZCwgY29va2VkIHRvIHBlcmZlY3Rpb24gYW5kIGJhc3RlZCBpbiBidXR0ZXIuJyxcbiAgICAgICAgc291cmNlOiBTb3VwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQZW5uZSBQYXN0YScsXG4gICAgICAgIHByaWNlOiAnJDE0Ljk5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDbGFzc2ljIFBlbm5lIFBhc3RhIGZyb20gUm9tZSBtYWRlIHdpdGggdG9tYXRvIGdhcmxpYyBzYXVjZSwgY2hlcnJ5IHRvbWF0b2VzLCBhbmQgYmFzaWwuJyxcbiAgICAgICAgc291cmNlOiBQYXN0YVxuICAgIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJpbXBvcnQgbWVudSBmcm9tICcuL21lbnVJdGVtcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgIGxldCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGVyLmNsYXNzTmFtZSA9ICdjb250YWN0LXRpdGxlJztcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuXG4gICAgY2FyZC5hcHBlbmQobWVudUhlYWRlciwgcG9wdWxhdGVNZW51KG1lbnUpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGNhcmQpO1xuXG4gICAgLy8tLS0tIFNFVFRJTkcgQUNUSVZFIEJVVFRPTiAtLS0tLS0tLS8vXG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBhZ2UnKTtcbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG4gICAgXG4gICAgbWFpblBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY29udGFjdFBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWVudVBhZ2VCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7ICAgIFxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU1lbnUoaXRlbUxpc3Qpe1xuXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LWNvbnRhaW5lcic7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1MaXN0KXtcblxuICAgICAgICBsZXQgZm9vZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vZEl0ZW0uY2xhc3NOYW1lPSdpdGVtJztcblxuICAgICAgICBsZXQgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGl0ZW1JbWFnZS5jbGFzc05hbWUgPSAnaXRlbS1waWMnO1xuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5zb3VyY2U7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbic7XG5cbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gJ25hbWUnXG4gICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGAke2l0ZW0ubmFtZX0gPGJyPiAke2l0ZW0ucHJpY2V9YDtcbiAgICAgICAgXG4gICAgICAgIGxldCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbVRleHQuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgICAgICBpdGVtVGV4dC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKGl0ZW1OYW1lLCBpdGVtVGV4dCk7XG4gICAgICAgIGZvb2RJdGVtLmFwcGVuZChpdGVtSW1hZ2UsIGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZChmb29kSXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xuICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY3JlYXRlSGVhZGVyJztcbmltcG9ydCBsb2FkTWFpblBhZ2UgZnJvbSAnLi9tYWluUGFnZUxvYWQnO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3RQYWdlTG9hZCc7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gJy4vbWVudVBhZ2VMb2FkJztcblxuY29uc3QgTG9hZFdlYnBhZ2UgPSAoZnVuY3Rpb24oKXtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBsb2FkTWFpblBhZ2UoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBhZ2UnKTtcbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG5cbiAgICBtYWluUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lIT09J2hlYWRlcicpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1haW5QYWdlKCk7XG4gICAgfSlcbiAgICBjb250YWN0UGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lIT09J2hlYWRlcicpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgfSlcbiAgICBtZW51UGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lIT09J2hlYWRlcicpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1lbnVQYWdlKCk7XG4gICAgfSlcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=