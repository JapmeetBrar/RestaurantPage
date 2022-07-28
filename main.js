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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"HeaderFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: \"BodyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nh1,\nh2,\nh3 {\n  font-family: \"HeaderFont\";\n}\n\np,\nbutton {\n  font-family: \"BodyFont\";\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 3em;\n}\n\n.header {\n  height: 25%;\n  width: 100%;\n  background-color: rgba(223, 137, 46);\n  /* display: flex;\n    flex-direction: column; */\n  /* align-items: center;\n    justify-content: center; */\n  padding: 1em 0;\n}\n\n.footer {\n  height: 10%;\n  width: 100%;\n  background-color: rgba(223, 137, 46);\n  display: flex;\n  justify-content: space-between;\n  padding: 0.15em 1em;\n}\n\n.title,\n.contact-title {\n  text-align: center;\n  color: #382a1e;\n  font-weight: bold;\n}\n\n.nav-bar {\n  top: 10px;\n  width: 100%;\n  padding: 0 1em;\n  /* display: flex; */\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1em;\n}\n\nbutton {\n  grid-column: span 1;\n  border: none;\n  border: solid 0.75px black;\n  background-color: rgba(223, 137, 46);\n  border-radius: 5px;\n  padding: 0.15em;\n  position: relative;\n  transition: transform 400ms;\n}\n\nbutton:not(.active):hover {\n  transform: translatey(10px);\n  cursor: pointer;\n}\n\n.active {\n  border: solid #893914;\n  border-radius: 8px;\n}\n\n.card {\n  min-height: 60%;\n  height: 100%;\n  color: #382a1e;\n  background-color: rgba(223, 137, 46, 0.9);\n  border-radius: 1em;\n  text-align: center;\n  padding: 1em;\n  margin: 1em 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n@media (min-width: 320px) {\n  .title {\n    font-size: calc(50px + 70 * ((100vw - 320px) / 680));\n  }\n  button {\n    font-size: calc(32px + 24 * ((100vw - 320px) / 680));\n  }\n  .contact-title {\n    font-size: calc(36px + 36 * ((100vw - 320px) / 680));\n  }\n  .active {\n    border-width: calc(4px + 10 * ((100vw - 320px) / 680));\n  }\n  .card {\n    width: calc(70% + 16 * ((100vw - 320px) / 680));\n  }\n  .subheader,\n  .name {\n    font-size: calc(24px + 24 * ((100vw - 320px) / 680));\n  }\n  .icon {\n    width: calc(24px + 24 * ((100vw - 320px) / 680));\n  }\n  .body {\n    font-size: calc(16px + 24 * ((100vw - 320px) / 680));\n  }\n  .item-pic {\n    width: calc(100px + 250 * ((100vw - 320px) / 680));\n  }\n  .footer-text {\n    font-size: calc(12px + 8 * ((100vw - 320px) / 680));\n  }\n  .odin-icon {\n    width: calc(12px + 8 * ((100vw - 320px) / 680));\n  }\n}\n@media (min-width: 1000px) {\n  .title {\n    font-size: 120px;\n  }\n  button {\n    font-size: 56px;\n  }\n  .contact-title {\n    font-size: 72px;\n  }\n  .active {\n    border-width: 14px;\n  }\n  .subheader,\n  .name {\n    font-size: 48px;\n  }\n  .icon {\n    width: 48px;\n  }\n  .body {\n    font-size: 40px;\n  }\n  .item-pic {\n    width: 350px;\n  }\n  .footer-text {\n    font-size: 20px;\n  }\n  .odin-icon {\n    width: 20;\n  }\n}\n\n.subheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25em;\n}\n\n.icon {\n  padding-bottom: 5px;\n}\n\n.hours .body {\n  line-height: 1.5;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 3em;\n}\n\n.item {\n  display: flex;\n  gap: 1em;\n  text-align: start;\n}\n\n.descripton {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-pic {\n  align-self: flex-start;\n}\n\n.contact-title {\n  text-decoration: underline;\n}\n\n.footer-text {\n  display: flex;\n  gap: 0.25em;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n.fa-github {\n  color: black;\n}\n\n.fa-github:hover,\n.odin-icon:hover {\n  opacity: 0.7;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,4CAAgC;AAClC;;AAEA;;;EAGE,yBAAyB;AAC3B;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,yDAA4C;EAC5C,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC;6BAC2B;EAC3B;8BAC4B;EAC5B,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,qCAAqC;EACrC,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,cAAc;EACd,yCAAyC;EACzC,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE;IACE,oDAAoD;EACtD;EACA;IACE,oDAAoD;EACtD;EACA;IACE,oDAAoD;EACtD;EACA;IACE,sDAAsD;EACxD;EACA;IACE,+CAA+C;EACjD;EACA;;IAEE,oDAAoD;EACtD;EACA;IACE,gDAAgD;EAClD;EACA;IACE,oDAAoD;EACtD;EACA;IACE,kDAAkD;EACpD;EACA;IACE,mDAAmD;EACrD;EACA;IACE,+CAA+C;EACjD;AACF;AACA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,kBAAkB;EACpB;EACA;;IAEE,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,SAAS;EACX;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,YAAY;AACd","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"HeaderFont\";\n  src: url(\"./fonts/HeaderFont.ttf\");\n}\n\n@font-face {\n  font-family: \"BodyFont\";\n  src: url(\"./fonts/BodyFont.TTF\");\n}\n\nh1,\nh2,\nh3 {\n  font-family: \"HeaderFont\";\n}\n\np,\nbutton {\n  font-family: \"BodyFont\";\n}\n\nbody {\n  background-image: url(./imgs/background.jpg);\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 3em;\n}\n\n.header {\n  height: 25%;\n  width: 100%;\n  background-color: rgba(223, 137, 46);\n  /* display: flex;\n    flex-direction: column; */\n  /* align-items: center;\n    justify-content: center; */\n  padding: 1em 0;\n}\n\n.footer {\n  height: 10%;\n  width: 100%;\n  background-color: rgba(223, 137, 46);\n  display: flex;\n  justify-content: space-between;\n  padding: 0.15em 1em;\n}\n\n.title,\n.contact-title {\n  text-align: center;\n  color: #382a1e;\n  font-weight: bold;\n}\n\n.nav-bar {\n  top: 10px;\n  width: 100%;\n  padding: 0 1em;\n  /* display: flex; */\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1em;\n}\n\nbutton {\n  grid-column: span 1;\n  border: none;\n  border: solid 0.75px black;\n  background-color: rgba(223, 137, 46);\n  border-radius: 5px;\n  padding: 0.15em;\n  position: relative;\n  transition: transform 400ms;\n}\n\nbutton:not(.active):hover {\n  transform: translatey(10px);\n  cursor: pointer;\n}\n\n.active {\n  border: solid #893914;\n  border-radius: 8px;\n}\n\n.card {\n  min-height: 60%;\n  height: 100%;\n  color: #382a1e;\n  background-color: rgba(223, 137, 46, 0.9);\n  border-radius: 1em;\n  text-align: center;\n  padding: 1em;\n  margin: 1em 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n@media (min-width: 320px) {\n  .title {\n    font-size: calc(50px + 70 * ((100vw - 320px) / 680));\n  }\n  button {\n    font-size: calc(32px + 24 * ((100vw - 320px) / 680));\n  }\n  .contact-title {\n    font-size: calc(36px + 36 * ((100vw - 320px) / 680));\n  }\n  .active {\n    border-width: calc(4px + 10 * ((100vw - 320px) / 680));\n  }\n  .card {\n    width: calc(70% + 16 * ((100vw - 320px) / 680));\n  }\n  .subheader,\n  .name {\n    font-size: calc(24px + 24 * ((100vw - 320px) / 680));\n  }\n  .icon {\n    width: calc(24px + 24 * ((100vw - 320px) / 680));\n  }\n  .body {\n    font-size: calc(16px + 24 * ((100vw - 320px) / 680));\n  }\n  .item-pic {\n    width: calc(100px + 250 * ((100vw - 320px) / 680));\n  }\n  .footer-text {\n    font-size: calc(12px + 8 * ((100vw - 320px) / 680));\n  }\n  .odin-icon {\n    width: calc(12px + 8 * ((100vw - 320px) / 680));\n  }\n}\n@media (min-width: 1000px) {\n  .title {\n    font-size: 120px;\n  }\n  button {\n    font-size: 56px;\n  }\n  .contact-title {\n    font-size: 72px;\n  }\n  .active {\n    border-width: 14px;\n  }\n  .subheader,\n  .name {\n    font-size: 48px;\n  }\n  .icon {\n    width: 48px;\n  }\n  .body {\n    font-size: 40px;\n  }\n  .item-pic {\n    width: 350px;\n  }\n  .footer-text {\n    font-size: 20px;\n  }\n  .odin-icon {\n    width: 20;\n  }\n}\n\n.subheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25em;\n}\n\n.icon {\n  padding-bottom: 5px;\n}\n\n.hours .body {\n  line-height: 1.5;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 3em;\n}\n\n.item {\n  display: flex;\n  gap: 1em;\n  text-align: start;\n}\n\n.descripton {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-pic {\n  align-self: flex-start;\n}\n\n.contact-title {\n  text-decoration: underline;\n}\n\n.footer-text {\n  display: flex;\n  gap: 0.25em;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n.fa-github {\n  color: black;\n}\n\n.fa-github:hover,\n.odin-icon:hover {\n  opacity: 0.7;\n}\n"],"sourceRoot":""}]);
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

    let header = document.querySelector('.header');
    
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
    
    header.after(card);

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
/* harmony import */ var _imgs_odin_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/odin-logo.svg */ "./src/imgs/odin-logo.svg");


function createHeader() {
  let content = document.querySelector("#content");

  let header = document.createElement("div");
  header.className = "header";

  let title = document.createElement("h1");
  title.textContent = "JAPS WING SHOP";
  title.className = "title";

  let navBar = document.createElement("div");
  navBar.className = "nav-bar";

  let mainPageBtn = document.createElement("button");
  mainPageBtn.className = "main-page";
  mainPageBtn.textContent = "Main";

  let contactPageBtn = document.createElement("button");
  contactPageBtn.className = "contact-page";
  contactPageBtn.textContent = "Contact";

  let menuPageBtn = document.createElement("button");
  menuPageBtn.className = "menu-page";
  menuPageBtn.textContent = "Menu";

  navBar.append(mainPageBtn, contactPageBtn, menuPageBtn);

  header.append(title, navBar);

  let footer = document.createElement("div");
  footer.className = "footer";

  let odinRefContainer = document.createElement("div");
  odinRefContainer.className = "footer-text";

  let odinRefText = document.createElement("p");
  odinRefText.textContent = "Created as a part of TheOdinProject Curriculum";

  let odinRefLink = document.createElement("a");
  odinRefLink.href = "https://www.theodinproject.com/";

  let odinLogo = new Image();
  odinLogo.className = "odin-icon";
  odinLogo.src = _imgs_odin_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

  odinRefLink.append(odinLogo);

  odinRefContainer.append(odinRefText, odinRefLink);

  let githubRefContainer = document.createElement("div");
  githubRefContainer.className = "footer-text";

  let githubRefText = document.createElement("p");
  githubRefText.textContent = "Copyright © 2021 JapmeetBrar";

  let githubRefLink = document.createElement("a");
  githubRefLink.href = "https://github.com/JapmeetBrar/";
  githubRefLink.className = "fa fa-github";

  githubRefContainer.append(githubRefText, githubRefLink);

  footer.append(odinRefContainer, githubRefContainer);

  content.append(header);
  content.append(footer);
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

    let header = document.querySelector('.header');

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

    header.after(card);

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
    
    // if (minWidth.matches){
    //     aboutIcon.style.width = 'calc(24px + 24 * ((100vw - 320px) / 680))'
    //     clockIcon.style.width = 'calc(24px + 24 * ((100vw - 320px) / 680))'
    //     mapIcon.style.width = 'calc(24px + 24 * ((100vw - 320px) / 680))'
    // } else if(maxWidth.matches){
    //     aboutIcon.style.width = '48px';
    //     mapIcon.style.width = '48px';
    //     clockIcon.style.width = '48px';
    // }
    
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

    let header = document.querySelector('.header');
    
    let card = document.createElement('div');
    card.className = 'card';

    let menuHeader = document.createElement('h1');
    menuHeader.className = 'contact-title';
    menuHeader.textContent = 'MENU';

    card.append(menuHeader, populateMenu(_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"]));

    header.after(card);

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

/***/ "./src/imgs/odin-logo.svg":
/*!********************************!*\
  !*** ./src/imgs/odin-logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991d749280cf85d37011.svg";

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






const LoadWebpage = (function () {
  let content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  let iconLink = document.createElement("link");
  iconLink.rel = "stylesheet";
  iconLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  document.head.appendChild(iconLink);

  (0,_createHeader__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_mainPageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();

  let mainPageBtn = document.querySelector(".main-page");
  let contactPageBtn = document.querySelector(".contact-page");
  let menuPageBtn = document.querySelector(".menu-page");

  mainPageBtn.addEventListener("click", function () {
    content.removeChild(document.querySelector(".card"));
    (0,_mainPageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  contactPageBtn.addEventListener("click", function () {
    content.removeChild(document.querySelector(".card"));
    (0,_contactPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  menuPageBtn.addEventListener("click", function () {
    content.removeChild(document.querySelector(".card"));
    (0,_menuPageLoad__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNxQjtBQUNBO0FBQ007QUFDTjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSx5REFBWTtBQUNkLEVBQUUseURBQVk7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSw0REFBZTtBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUkseURBQVk7QUFDaEIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NyZWF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tYWluUGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSGVhZGVyRm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0JvZHlGb250LlRURlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWFkZXJGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZHlGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWFkZXJGb250XFxcIjtcXG59XFxuXFxucCxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2R5Rm9udFxcXCI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogM2VtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogMjUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0Nik7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBwYWRkaW5nOiAxZW0gMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuMTVlbSAxZW07XFxufVxcblxcbi50aXRsZSxcXG4uY29udGFjdC10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzM4MmExZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICB0b3A6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjc1cHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0Nik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjE1ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XFxufVxcblxcbmJ1dHRvbjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwcHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJvcmRlcjogc29saWQgIzg5MzkxNDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWluLWhlaWdodDogNjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICMzODJhMWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTM3LCA0NiwgMC45KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg1MHB4ICsgNzAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICBidXR0b24ge1xcbiAgICBmb250LXNpemU6IGNhbGMoMzJweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgLmNvbnRhY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMzZweCArIDM2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgLmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogY2FsYyg0cHggKyAxMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG4gIC5jYXJkIHtcXG4gICAgd2lkdGg6IGNhbGMoNzAlICsgMTYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICAuc3ViaGVhZGVyLFxcbiAgLm5hbWUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMjRweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgLmljb24ge1xcbiAgICB3aWR0aDogY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICAuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICAuaXRlbS1waWMge1xcbiAgICB3aWR0aDogY2FsYygxMDBweCArIDI1MCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG4gIC5mb290ZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG4gIC5vZGluLWljb24ge1xcbiAgICB3aWR0aDogY2FsYygxMnB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxMjBweDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gIH1cXG4gIC5jb250YWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgfVxcbiAgLmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogMTRweDtcXG4gIH1cXG4gIC5zdWJoZWFkZXIsXFxuICAubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gIH1cXG4gIC5pY29uIHtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICB9XFxuICAuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH1cXG4gIC5pdGVtLXBpYyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gIH1cXG4gIC5mb290ZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIC5vZGluLWljb24ge1xcbiAgICB3aWR0aDogMjA7XFxuICB9XFxufVxcblxcbi5zdWJoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC4yNWVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaG91cnMgLmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzZW07XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uZGVzY3JpcHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0tcGljIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4yNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyLFxcbi5vZGluLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQWdDO0FBQ2xDOztBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseURBQTRDO0VBQzVDLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDOzZCQUMyQjtFQUMzQjs4QkFDNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRTtJQUNFLG9EQUFvRDtFQUN0RDtFQUNBO0lBQ0Usb0RBQW9EO0VBQ3REO0VBQ0E7SUFDRSxvREFBb0Q7RUFDdEQ7RUFDQTtJQUNFLHNEQUFzRDtFQUN4RDtFQUNBO0lBQ0UsK0NBQStDO0VBQ2pEO0VBQ0E7O0lBRUUsb0RBQW9EO0VBQ3REO0VBQ0E7SUFDRSxnREFBZ0Q7RUFDbEQ7RUFDQTtJQUNFLG9EQUFvRDtFQUN0RDtFQUNBO0lBQ0Usa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSxtREFBbUQ7RUFDckQ7RUFDQTtJQUNFLCtDQUErQztFQUNqRDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWFkZXJGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0hlYWRlckZvbnQudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2R5Rm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Cb2R5Rm9udC5UVEZcXFwiKTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWFkZXJGb250XFxcIjtcXG59XFxuXFxucCxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2R5Rm9udFxcXCI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDNlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMzcsIDQ2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjE1ZW0gMWVtO1xcbn1cXG5cXG4udGl0bGUsXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzODJhMWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgMC43NXB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC4xNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xcbn1cXG5cXG5idXR0b246bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgxMHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBib3JkZXI6IHNvbGlkICM4OTM5MTQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDYwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjMzgyYTFlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDEzNywgNDYsIDAuOSk7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoNTBweCArIDcwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDMycHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG4gIC5jb250YWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDM2cHggKyAzNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG4gIC5hY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IGNhbGMoNHB4ICsgMTAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICAuY2FyZCB7XFxuICAgIHdpZHRoOiBjYWxjKDcwJSArIDE2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgLnN1YmhlYWRlcixcXG4gIC5uYW1lIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAyNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXG4gIH1cXG4gIC5pY29uIHtcXG4gICAgd2lkdGg6IGNhbGMoMjRweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgLmJvZHkge1xcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcbiAgfVxcbiAgLml0ZW0tcGljIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwcHggKyAyNTAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICAuZm9vdGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDggKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxuICAub2Rpbi1pY29uIHtcXG4gICAgd2lkdGg6IGNhbGMoMTJweCArIDggKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XFxuICB9XFxuICBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICB9XFxuICAuY29udGFjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gIH1cXG4gIC5hY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IDE0cHg7XFxuICB9XFxuICAuc3ViaGVhZGVyLFxcbiAgLm5hbWUge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICB9XFxuICAuaWNvbiB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgfVxcbiAgLmJvZHkge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICB9XFxuICAuaXRlbS1waWMge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICB9XFxuICAuZm9vdGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAub2Rpbi1pY29uIHtcXG4gICAgd2lkdGg6IDIwO1xcbiAgfVxcbn1cXG5cXG4uc3ViaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuMjVlbTtcXG59XFxuXFxuLmljb24ge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhvdXJzIC5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM2VtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmRlc2NyaXB0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtLXBpYyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMjVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlcixcXG4ub2Rpbi1pY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgIGxldCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0SGVhZGVyLmNsYXNzTmFtZSA9ICdjb250YWN0LXRpdGxlJztcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xuXG4gICAgbGV0IGVtYWlsU3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbWFpbFN1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBlbWFpbFN1YmhlYWRlci50ZXh0Q29udGVudCA9ICdFbWFpbDonO1xuXG4gICAgbGV0IGVtYWlsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbEJvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIGVtYWlsQm9keS50ZXh0Q29udGVudCA9ICdKYXBzV2luZ1Nob3BARmFrZUVtYWlsLmNhJztcbiAgICBcbiAgICBsZXQgcGhvbmVTdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBob25lU3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIHBob25lU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ1Bob25lOic7XG5cbiAgICBsZXQgcGhvbmVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lQm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgcGhvbmVCb2R5LnRleHRDb250ZW50ID0gJzkwNS0xMjMtNDU2Nyc7XG5cbiAgICBsZXQgaW5QZXJzb25TdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGluUGVyc29uU3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIGluUGVyc29uU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbWUgU2VlIFVzIEluIFBlcnNvbjonO1xuXG4gICAgbGV0IGluUGVyc29uQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpblBlcnNvbkJvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xuICAgIGluUGVyc29uQm9keS50ZXh0Q29udGVudCA9ICcyMSBQYXJrIExhbmUgQ2lyY2xlLCBUb3JvbnRvLCBPTiwgTTNCIDFaOCc7XG5cbiAgICBjYXJkLmFwcGVuZChjb250YWN0SGVhZGVyLCBlbWFpbFN1YmhlYWRlciwgZW1haWxCb2R5LCBwaG9uZVN1YmhlYWRlciwgcGhvbmVCb2R5LCBpblBlcnNvblN1YmhlYWRlciwgaW5QZXJzb25Cb2R5KTtcbiAgICBcbiAgICBoZWFkZXIuYWZ0ZXIoY2FyZCk7XG5cbiAgICAgICAgLy8tLS0tIFNFVFRJTkcgQUNUSVZFIEJVVFRPTiAtLS0tLS0tLS8vXG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBhZ2UnKTtcbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG5cbiAgICBtYWluUGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBjb250YWN0UGFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBtZW51UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxufSIsImltcG9ydCBPZGluTG9nbyBmcm9tIFwiLi9pbWdzL29kaW4tbG9nby5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSkFQUyBXSU5HIFNIT1BcIjtcbiAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuXG4gIGxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuY2xhc3NOYW1lID0gXCJuYXYtYmFyXCI7XG5cbiAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpblBhZ2VCdG4uY2xhc3NOYW1lID0gXCJtYWluLXBhZ2VcIjtcbiAgbWFpblBhZ2VCdG4udGV4dENvbnRlbnQgPSBcIk1haW5cIjtcblxuICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0UGFnZUJ0bi5jbGFzc05hbWUgPSBcImNvbnRhY3QtcGFnZVwiO1xuICBjb250YWN0UGFnZUJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGxldCBtZW51UGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVQYWdlQnRuLmNsYXNzTmFtZSA9IFwibWVudS1wYWdlXCI7XG4gIG1lbnVQYWdlQnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgbmF2QmFyLmFwcGVuZChtYWluUGFnZUJ0biwgY29udGFjdFBhZ2VCdG4sIG1lbnVQYWdlQnRuKTtcblxuICBoZWFkZXIuYXBwZW5kKHRpdGxlLCBuYXZCYXIpO1xuXG4gIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NOYW1lID0gXCJmb290ZXJcIjtcblxuICBsZXQgb2RpblJlZkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9kaW5SZWZDb250YWluZXIuY2xhc3NOYW1lID0gXCJmb290ZXItdGV4dFwiO1xuXG4gIGxldCBvZGluUmVmVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBvZGluUmVmVGV4dC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBhcyBhIHBhcnQgb2YgVGhlT2RpblByb2plY3QgQ3VycmljdWx1bVwiO1xuXG4gIGxldCBvZGluUmVmTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBvZGluUmVmTGluay5ocmVmID0gXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCI7XG5cbiAgbGV0IG9kaW5Mb2dvID0gbmV3IEltYWdlKCk7XG4gIG9kaW5Mb2dvLmNsYXNzTmFtZSA9IFwib2Rpbi1pY29uXCI7XG4gIG9kaW5Mb2dvLnNyYyA9IE9kaW5Mb2dvO1xuXG4gIG9kaW5SZWZMaW5rLmFwcGVuZChvZGluTG9nbyk7XG5cbiAgb2RpblJlZkNvbnRhaW5lci5hcHBlbmQob2RpblJlZlRleHQsIG9kaW5SZWZMaW5rKTtcblxuICBsZXQgZ2l0aHViUmVmQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2l0aHViUmVmQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyLXRleHRcIjtcblxuICBsZXQgZ2l0aHViUmVmVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBnaXRodWJSZWZUZXh0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMSBKYXBtZWV0QnJhclwiO1xuXG4gIGxldCBnaXRodWJSZWZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YlJlZkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0phcG1lZXRCcmFyL1wiO1xuICBnaXRodWJSZWZMaW5rLmNsYXNzTmFtZSA9IFwiZmEgZmEtZ2l0aHViXCI7XG5cbiAgZ2l0aHViUmVmQ29udGFpbmVyLmFwcGVuZChnaXRodWJSZWZUZXh0LCBnaXRodWJSZWZMaW5rKTtcblxuICBmb290ZXIuYXBwZW5kKG9kaW5SZWZDb250YWluZXIsIGdpdGh1YlJlZkNvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmQoZm9vdGVyKTtcbn1cbiIsImltcG9ydCBNYXBJY29uIGZyb20gJy4vaW1ncy9sb2NhdGlvbi1pY29uLnN2Zyc7XG5pbXBvcnQgQ2xvY2tJY29uIGZyb20gJy4vaW1ncy9jbG9jay1pY29uLnN2Zyc7XG5pbXBvcnQgQWJvdXRJY29uIGZyb20gJy4vaW1ncy9hYm91dC1pY29uLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNYWluUGFnZSgpe1xuICAgIC8vLS0tLSBMT0FESU5HIERPTSBFTEVNRU5UUyAtLS0tLS0tLS8vXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuXG4gICAgbGV0IGFib3V0U3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dFN1YmhlYWRlci5jbGFzc05hbWUgPSAnc3ViaGVhZGVyJztcbiAgICBhYm91dFN1YmhlYWRlci50ZXh0Q29udGVudCA9ICdBQk9VVCc7XG5cbiAgICBsZXQgYWJvdXRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0Qm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgYWJvdXRCb2R5LnRleHRDb250ZW50ID0gJ0phcHMgV2luZyBTaG9wIHNwZWNpYWxpemVzIGluIGEgdmFyaWV0eSBvZiBhbWF6aW5nIGZyaWVkIGZvb2RzLiAgICBGZWF0dXJpbmcgdGhlIG1vc3QgRmxhdm91cmZ1bCB3aW5ncywgdGhlIGNyaXNwaWVzdCBmcmllcywgYW5kIHRoZSB0YXN0aWVzdCBjaGlja2VuIG51Z2dldHMuJztcblxuICAgIGFib3V0LmFwcGVuZChhYm91dFN1YmhlYWRlciwgYWJvdXRCb2R5KTtcblxuICAgIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTmFtZSA9ICdob3Vycyc7XG5cbiAgICBsZXQgaG91cnNTdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvdXJzU3ViaGVhZGVyLmNsYXNzTmFtZSA9ICdzdWJoZWFkZXInO1xuICAgIGhvdXJzU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ0hPVVJTJztcbiAgICBcbiAgICBsZXQgaG91cnNCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzQm9keS5jbGFzc05hbWUgPSAnYm9keSc7XG4gICAgaG91cnNCb2R5LmlubmVySFRNTCA9ICdNT046IDEwQU0tMTBQTSA8YnI+IFRVRTogMTBBTS0xMFBNIDxicj4gV0VEOiAxMEFNLTEwUE0gPGJyPiBUSFVSOiAxMEFNLTEwUE0gPGJyPiBGUkk6IDEyUE0tMTJBTSA8YnI+IFNBVDogMTJQTS0xMkFNIDxicj4gU1VOOiBDTE9TRUQnO1xuXG4gICAgaG91cnMuYXBwZW5kKGhvdXJzU3ViaGVhZGVyLCBob3Vyc0JvZHkpO1xuXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcblxuICAgIGxldCBsb2NhdGlvblN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25TdWJoZWFkZXIuY2xhc3NOYW1lID0gJ3N1YmhlYWRlcic7XG4gICAgbG9jYXRpb25TdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnTE9DQVRJT04nO1xuICAgIFxuICAgIGxldCBsb2NhdGlvbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25Cb2R5LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICBsb2NhdGlvbkJvZHkuaW5uZXJIVE1MID0gJzIxIFBhcmsgTGFuZSBDaXJjbGUsIFRvcm9udG8sIE9OLCBNM0IgMVo4JztcblxuICAgIGxvY2F0aW9uLmFwcGVuZChsb2NhdGlvblN1YmhlYWRlciwgbG9jYXRpb25Cb2R5KTtcblxuICAgIGNhcmQuYXBwZW5kKGFib3V0LCBob3VycywgbG9jYXRpb24pO1xuXG4gICAgaGVhZGVyLmFmdGVyKGNhcmQpO1xuXG4gICAgLy8tLS0tIExPQURJTkcgSUNPTlMgLS0tLS0tLS0vL1xuICAgIGxldCBtaW5XaWR0aCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMzIwcHgpXCIpO1xuICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAwMHB4KVwiKTtcbiAgICBcbiAgICBsZXQgYWJvdXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0IGgyJyk7XG4gICAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VycyBoMicpO1xuICAgIGxldCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24gaDInKTtcbiAgICBcbiAgICBsZXQgYWJvdXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGNsb2NrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBtYXBJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBhYm91dEljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgIGNsb2NrSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgbWFwSWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG5cbiAgICBhYm91dEljb24uc3JjID0gQWJvdXRJY29uO1xuICAgIGNsb2NrSWNvbi5zcmMgPSBDbG9ja0ljb247XG4gICAgbWFwSWNvbi5zcmMgPSBNYXBJY29uO1xuICAgIFxuICAgIC8vIGlmIChtaW5XaWR0aC5tYXRjaGVzKXtcbiAgICAvLyAgICAgYWJvdXRJY29uLnN0eWxlLndpZHRoID0gJ2NhbGMoMjRweCArIDI0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpJ1xuICAgIC8vICAgICBjbG9ja0ljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSknXG4gICAgLy8gICAgIG1hcEljb24uc3R5bGUud2lkdGggPSAnY2FsYygyNHB4ICsgMjQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSknXG4gICAgLy8gfSBlbHNlIGlmKG1heFdpZHRoLm1hdGNoZXMpe1xuICAgIC8vICAgICBhYm91dEljb24uc3R5bGUud2lkdGggPSAnNDhweCc7XG4gICAgLy8gICAgIG1hcEljb24uc3R5bGUud2lkdGggPSAnNDhweCc7XG4gICAgLy8gICAgIGNsb2NrSWNvbi5zdHlsZS53aWR0aCA9ICc0OHB4JztcbiAgICAvLyB9XG4gICAgXG4gICAgYWJvdXRUZXh0LmFwcGVuZChhYm91dEljb24pO1xuICAgIGhvdXJzVGV4dC5hcHBlbmQoY2xvY2tJY29uKTtcbiAgICBsb2NhdGlvblRleHQuYXBwZW5kKG1hcEljb24pO1xuXG4gICAgLy8tLS0tIFNFVFRJTkcgQUNUSVZFIEJVVFRPTiAtLS0tLS0tLS8vXG4gICAgbGV0IG1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuICAgIGxldCBjb250YWN0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBhZ2UnKTtcbiAgICBsZXQgbWVudVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG5cbiAgICBtYWluUGFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb250YWN0UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxufSIsImltcG9ydCBDaGlja2VuV2luZ3MgZnJvbSAnLi9pbWdzL2NoaWNrZW4td2luZ3MuanBnJztcbmltcG9ydCBGcmVuY2hGcmllcyBmcm9tICcuL2ltZ3MvZnJlbmNoLWZyaWVzLmpwZyc7XG5pbXBvcnQgU291cCBmcm9tICcuL2ltZ3Mvc291cC5qcGcnO1xuaW1wb3J0IFBhc3RhIGZyb20gJy4vaW1ncy9wYXN0YS5qcGcnO1xuXG5sZXQgbWVudSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDaGlja2VuIFdpbmdzJyxcbiAgICAgICAgcHJpY2U6ICckMTAuOTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzEyIFRyYWRpdGlvbmFsIENoaWNrZW4gV2luZ3Mgd2l0aCBubyBicmVhZGluZy4gVG9zc2VkIGluIG91ciBzZWNyZXQgaG9tZW1hZGUgQnVmZmFsbyBTYXVjZS4nLFxuICAgICAgICBzb3VyY2U6IENoaWNrZW5XaW5nc1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ3Jpc3B5IEZyaWVzJyxcbiAgICAgICAgcHJpY2U6ICckNi45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSG9tZW1hZGUsIGRvdWJsZSBmcmllZCwgZXh0cmEgY3Jpc3B5IEZyZW5jaCBGcmllcy4gU2Vhc29uZWQgd2l0aCBpbi1ob3VzZSBzcGVjaWFsIHNlYXNvbmluZy4nLFxuICAgICAgICBzb3VyY2U6IEZyZW5jaEZyaWVzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTb3VwJyxcbiAgICAgICAgcHJpY2U6ICckOC45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGFpbHkgU3BlY2lhbCBTb3VwIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBHYXJsaWMgQnJlYWQsIGNvb2tlZCB0byBwZXJmZWN0aW9uIGFuZCBiYXN0ZWQgaW4gYnV0dGVyLicsXG4gICAgICAgIHNvdXJjZTogU291cFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGVubmUgUGFzdGEnLFxuICAgICAgICBwcmljZTogJyQxNC45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBQZW5uZSBQYXN0YSBmcm9tIFJvbWUgbWFkZSB3aXRoIHRvbWF0byBnYXJsaWMgc2F1Y2UsIGNoZXJyeSB0b21hdG9lcywgYW5kIGJhc2lsLicsXG4gICAgICAgIHNvdXJjZTogUGFzdGFcbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51SXRlbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpe1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgIGxldCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGVyLmNsYXNzTmFtZSA9ICdjb250YWN0LXRpdGxlJztcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuXG4gICAgY2FyZC5hcHBlbmQobWVudUhlYWRlciwgcG9wdWxhdGVNZW51KG1lbnUpKTtcblxuICAgIGhlYWRlci5hZnRlcihjYXJkKTtcblxuICAgIC8vLS0tLSBTRVRUSU5HIEFDVElWRSBCVVRUT04gLS0tLS0tLS0vL1xuICAgIGxldCBtYWluUGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcbiAgICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1wYWdlJyk7XG4gICAgbGV0IG1lbnVQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFnZScpO1xuICAgIFxuICAgIG1haW5QYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG1lbnVQYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAgICBcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51KGl0ZW1MaXN0KXtcblxuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudS1jb250YWluZXInO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtTGlzdCl7XG5cbiAgICAgICAgbGV0IGZvb2RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb2RJdGVtLmNsYXNzTmFtZT0naXRlbSc7XG5cbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1hZ2UuY2xhc3NOYW1lID0gJ2l0ZW0tcGljJztcbiAgICAgICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uc291cmNlO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nO1xuXG4gICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9ICduYW1lJ1xuICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBgJHtpdGVtLm5hbWV9IDxicj4gJHtpdGVtLnByaWNlfWA7XG4gICAgICAgIFxuICAgICAgICBsZXQgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTmFtZSA9ICdib2R5JztcbiAgICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZChpdGVtTmFtZSwgaXRlbVRleHQpO1xuICAgICAgICBmb29kSXRlbS5hcHBlbmQoaXRlbUltYWdlLCBkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmQoZm9vZEl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbiAgICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2NyZWF0ZUhlYWRlclwiO1xuaW1wb3J0IGxvYWRNYWluUGFnZSBmcm9tIFwiLi9tYWluUGFnZUxvYWRcIjtcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFBhZ2VMb2FkXCI7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlTG9hZFwiO1xuXG5jb25zdCBMb2FkV2VicGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGxldCBpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBpY29uTGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgaWNvbkxpbmsuaHJlZiA9XG4gICAgXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI7XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29uTGluayk7XG5cbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGxvYWRNYWluUGFnZSgpO1xuXG4gIGxldCBtYWluUGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1wYWdlXCIpO1xuICBsZXQgY29udGFjdFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtcGFnZVwiKTtcbiAgbGV0IG1lbnVQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXBhZ2VcIik7XG5cbiAgbWFpblBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKSk7XG4gICAgbG9hZE1haW5QYWdlKCk7XG4gIH0pO1xuICBjb250YWN0UGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpKTtcbiAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgfSk7XG4gIG1lbnVQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIikpO1xuICAgIGxvYWRNZW51UGFnZSgpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=