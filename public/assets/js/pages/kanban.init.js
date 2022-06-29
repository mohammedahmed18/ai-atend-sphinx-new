/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/kanban.init.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/kanban.init.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Kanban Board init js\r\n*/\n!function ($) {\n  \"use strict\";\n\n  var KanbanBoard = function KanbanBoard() {\n    this.$body = $(\"body\");\n  }; //initializing various charts and components\n\n\n  KanbanBoard.prototype.init = function () {\n    $('.tasklist').each(function () {\n      Sortable.create($(this)[0], {\n        group: 'shared',\n        animation: 150,\n        ghostClass: 'bg-ghost'\n      });\n    });\n  }, //init KanbanBoard\n  $.KanbanBoard = new KanbanBoard(), $.KanbanBoard.Constructor = KanbanBoard;\n}(window.jQuery), //initializing KanbanBoard\nfunction ($) {\n  \"use strict\";\n\n  $.KanbanBoard.init();\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMva2FuYmFuLmluaXQuanM/MzkwMiJdLCJuYW1lcyI6WyIkIiwiS2FuYmFuQm9hcmQiLCIkYm9keSIsInByb3RvdHlwZSIsImluaXQiLCJlYWNoIiwiU29ydGFibGUiLCJjcmVhdGUiLCJncm91cCIsImFuaW1hdGlvbiIsImdob3N0Q2xhc3MiLCJDb25zdHJ1Y3RvciIsIndpbmRvdyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFRQSxDQUFFLFVBQVNBLENBQVQsRUFBWTtBQUNiOztBQUVBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVc7QUFDNUIsU0FBS0MsS0FBTCxHQUFhRixDQUFDLENBQUMsTUFBRCxDQUFkO0FBQ0EsR0FGRCxDQUhhLENBT2I7OztBQUNBQyxhQUFXLENBQUNFLFNBQVosQ0FBc0JDLElBQXRCLEdBQTZCLFlBQVc7QUFDdkNKLEtBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUssSUFBZixDQUFvQixZQUFZO0FBQy9CQyxjQUFRLENBQUNDLE1BQVQsQ0FBZ0JQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLENBQWhCLEVBQTRCO0FBQzNCUSxhQUFLLEVBQUUsUUFEb0I7QUFFM0JDLGlCQUFTLEVBQUUsR0FGZ0I7QUFHM0JDLGtCQUFVLEVBQUU7QUFIZSxPQUE1QjtBQU1BLEtBUEQ7QUFRQSxHQVRELEVBV0E7QUFDQVYsR0FBQyxDQUFDQyxXQUFGLEdBQWdCLElBQUlBLFdBQUosRUFaaEIsRUFZaUNELENBQUMsQ0FBQ0MsV0FBRixDQUFjVSxXQUFkLEdBQ2pDVixXQWJBO0FBZUEsQ0F2QkMsQ0F1QkFXLE1BQU0sQ0FBQ0MsTUF2QlAsQ0FBRixFQXlCQTtBQUNBLFVBQVNiLENBQVQsRUFBWTtBQUNYOztBQUNBQSxHQUFDLENBQUNDLFdBQUYsQ0FBY0csSUFBZDtBQUNBLENBSEQsQ0FHRVEsTUFBTSxDQUFDQyxNQUhULENBMUJBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2thbmJhbi5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBLYW5iYW4gQm9hcmQgaW5pdCBqc1xyXG4qL1xyXG5cclxuISBmdW5jdGlvbigkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHZhciBLYW5iYW5Cb2FyZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy4kYm9keSA9ICQoXCJib2R5XCIpXHJcblx0fTtcclxuXHJcblx0Ly9pbml0aWFsaXppbmcgdmFyaW91cyBjaGFydHMgYW5kIGNvbXBvbmVudHNcclxuXHRLYW5iYW5Cb2FyZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnRhc2tsaXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFNvcnRhYmxlLmNyZWF0ZSgkKHRoaXMpWzBdLCB7XHJcblx0XHRcdFx0Z3JvdXA6ICdzaGFyZWQnLFxyXG5cdFx0XHRcdGFuaW1hdGlvbjogMTUwLFxyXG5cdFx0XHRcdGdob3N0Q2xhc3M6ICdiZy1naG9zdCdcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSk7XHRcclxuXHR9LFxyXG5cclxuXHQvL2luaXQgS2FuYmFuQm9hcmRcclxuXHQkLkthbmJhbkJvYXJkID0gbmV3IEthbmJhbkJvYXJkLCAkLkthbmJhbkJvYXJkLkNvbnN0cnVjdG9yID1cclxuXHRLYW5iYW5Cb2FyZFxyXG5cclxufSh3aW5kb3cualF1ZXJ5KSxcclxuXHJcbi8vaW5pdGlhbGl6aW5nIEthbmJhbkJvYXJkXHJcbmZ1bmN0aW9uKCQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHQkLkthbmJhbkJvYXJkLmluaXQoKVxyXG59KHdpbmRvdy5qUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/kanban.init.js\n");

/***/ }),

/***/ 40:
/*!*************************************************!*\
  !*** multi ./resources/js/pages/kanban.init.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\kanban.init.js */"./resources/js/pages/kanban.init.js");


/***/ })

/******/ });