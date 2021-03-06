/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://mdt-charts/./src/config/config.ts?");

/***/ }),

/***/ "./src/designer/designerConfig.ts":
/*!****************************************!*\
  !*** ./src/designer/designerConfig.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://mdt-charts/./src/designer/designerConfig.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Chart\": () => /* binding */ Chart\n/* harmony export */ });\n/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/engine */ \"./src/engine/engine.ts\");\n/* harmony import */ var _model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/modelBuilder */ \"./src/model/modelBuilder.ts\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.ts\");\n/* harmony import */ var _designer_designerConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designer/designerConfig */ \"./src/designer/designerConfig.ts\");\n\r\n\r\nclass Chart {\r\n    /**\r\n     * @param config Объект конфигуратора\r\n     * @param designerConfig Объект конфигуратора дизайнера\r\n     * @param data Данные\r\n     * @param selectedIds Id выделенных записей\r\n     * @param isResizable Флаг подстройки размера блока графика под родительский элемент\r\n     */\r\n    constructor(config, designerConfig, data, isResizable = false, filterCallback = null, selectedIds = []) {\r\n        this.resizeHandler = this.resizeListener.bind(this);\r\n        Chart.chartCounter++;\r\n        this.config = config;\r\n        this.designerConfig = designerConfig;\r\n        this.data = data;\r\n        this.isResizable = isResizable;\r\n        this.model = (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.assembleModel)(this.config, this.data, this.designerConfig);\r\n        this.engine = new _engine_engine__WEBPACK_IMPORTED_MODULE_0__.default(Chart.chartCounter, filterCallback, selectedIds);\r\n    }\r\n    /**\r\n     * Рендер графика\r\n     * @param parentElement родительский элемент для графика\r\n     */\r\n    render(parentElement) {\r\n        this.parentElement = parentElement;\r\n        this.engine.render(this.model, (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.getPreparedData)(this.model, this.data, this.config), this.parentElement);\r\n        if (this.isResizable)\r\n            this.registerResizeEvent();\r\n    }\r\n    /**\r\n     * Удаление графика со страницы\r\n     */\r\n    destroy() {\r\n        this.engine.destroy();\r\n        if (this.isResizable)\r\n            this.removeResizeEvent();\r\n    }\r\n    /**\r\n     * Обновление графика для новых данных\r\n     * @param data Новые данные\r\n     */\r\n    updateData(data) {\r\n        this.model = (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.assembleModel)(this.config, data, this.designerConfig);\r\n        this.data = data;\r\n        this.engine.updateData(this.model, (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.getPreparedData)(this.model, this.data, this.config));\r\n    }\r\n    /**\r\n     * Изменение размера блока с графиком\r\n     * @param newSize Новый размер\r\n     */\r\n    updateSize(newSize) {\r\n        if (newSize.height)\r\n            this.config.canvas.size.height = newSize.height;\r\n        if (newSize.width)\r\n            this.config.canvas.size.width = newSize.width;\r\n        this.model = (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.assembleModel)(this.config, this.data, this.designerConfig);\r\n        this.engine.updateFullBlock(this.model, (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.getPreparedData)(this.model, this.data, this.config));\r\n    }\r\n    /**\r\n     * Обновление цветов графиков на основе новых базовых цветов\r\n     * @param newColors Новые базовые цвета\r\n     */\r\n    updateColors(newColors) {\r\n        this.designerConfig.chartStyle.baseColors = [...newColors];\r\n        this.model = (0,_model_modelBuilder__WEBPACK_IMPORTED_MODULE_1__.assembleModel)(this.config, this.data, this.designerConfig);\r\n        this.engine.updateColors(this.model);\r\n    }\r\n    registerResizeEvent() {\r\n        window.addEventListener('resize', this.resizeHandler);\r\n    }\r\n    removeResizeEvent() {\r\n        window.removeEventListener('resize', this.resizeHandler);\r\n    }\r\n    resizeListener() {\r\n        this.updateSize({\r\n            height: null,\r\n            width: this.parentElement.offsetWidth\r\n        });\r\n    }\r\n}\r\nChart.chartCounter = 0;\r\n\r\n\r\n\n\n//# sourceURL=webpack://mdt-charts/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/main.ts","vendors-node_modules_chroma-js_chroma_js-node_modules_d3-array_src_max_js-node_modules_d3-arr-c3fc24","src_engine_engine_ts"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmdt_charts"] = self["webpackChunkmdt_charts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;