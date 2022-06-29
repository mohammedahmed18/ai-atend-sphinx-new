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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/tour.init.js":
/*!*****************************************!*\
  !*** ./resources/js/pages/tour.init.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Tour init js\r\n*/\n$(document).ready(function () {\n  // Define the tour!\n  var tour = {\n    id: \"my-intro\",\n    steps: [{\n      target: \"logo-tour\",\n      title: \"Logo Here\",\n      content: \"You can find here status of user who's currently online.\",\n      placement: 'bottom',\n      yOffset: 10\n    }, {\n      target: 'display-title-tour',\n      title: \"Display Text\",\n      content: \"Click on the button and make sidebar navigation small.\",\n      placement: 'top',\n      zindex: 9999\n    }, {\n      target: 'page-title-tour',\n      title: \"User settings\",\n      content: \"You can edit you profile info here.\",\n      placement: 'bottom',\n      zindex: 999\n    }, {\n      target: 'thankyou-tour',\n      title: \"Thank you !\",\n      content: \"Here you can change theme skins and other features.\",\n      placement: 'top',\n      zindex: 999\n    }],\n    showPrevButton: true\n  }; // Start the tour!\n\n  hopscotch.startTour(tour);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdG91ci5pbml0LmpzP2NlNWYiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0b3VyIiwiaWQiLCJzdGVwcyIsInRhcmdldCIsInRpdGxlIiwiY29udGVudCIsInBsYWNlbWVudCIsInlPZmZzZXQiLCJ6aW5kZXgiLCJzaG93UHJldkJ1dHRvbiIsImhvcHNjb3RjaCIsInN0YXJ0VG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFRQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBRTFCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHO0FBQ1BDLE1BQUUsRUFBRSxVQURHO0FBRVBDLFNBQUssRUFBRSxDQUNIO0FBQ0lDLFlBQU0sRUFBRSxXQURaO0FBRUlDLFdBQUssRUFBRSxXQUZYO0FBR0lDLGFBQU8sRUFBRSwwREFIYjtBQUlJQyxlQUFTLEVBQUUsUUFKZjtBQUtJQyxhQUFPLEVBQUU7QUFMYixLQURHLEVBUUg7QUFDSUosWUFBTSxFQUFFLG9CQURaO0FBRUlDLFdBQUssRUFBRSxjQUZYO0FBR0lDLGFBQU8sRUFBRSx3REFIYjtBQUlJQyxlQUFTLEVBQUUsS0FKZjtBQUtJRSxZQUFNLEVBQUU7QUFMWixLQVJHLEVBZUg7QUFDSUwsWUFBTSxFQUFFLGlCQURaO0FBRUlDLFdBQUssRUFBRSxlQUZYO0FBR0lDLGFBQU8sRUFBRSxxQ0FIYjtBQUlJQyxlQUFTLEVBQUUsUUFKZjtBQUtJRSxZQUFNLEVBQUU7QUFMWixLQWZHLEVBc0JIO0FBQ0lMLFlBQU0sRUFBRSxlQURaO0FBRUlDLFdBQUssRUFBRSxhQUZYO0FBR0lDLGFBQU8sRUFBRSxxREFIYjtBQUlJQyxlQUFTLEVBQUUsS0FKZjtBQUtJRSxZQUFNLEVBQUU7QUFMWixLQXRCRyxDQUZBO0FBZ0NQQyxrQkFBYyxFQUFFO0FBaENULEdBQVgsQ0FIMEIsQ0FzQzFCOztBQUNBQyxXQUFTLENBQUNDLFNBQVYsQ0FBb0JYLElBQXBCO0FBQ0gsQ0F4Q0QiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvdG91ci5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBUb3VyIGluaXQganNcclxuKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBEZWZpbmUgdGhlIHRvdXIhXHJcbiAgICB2YXIgdG91ciA9IHtcclxuICAgICAgICBpZDogXCJteS1pbnRyb1wiLFxyXG4gICAgICAgIHN0ZXBzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJsb2dvLXRvdXJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxvZ28gSGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJZb3UgY2FuIGZpbmQgaGVyZSBzdGF0dXMgb2YgdXNlciB3aG8ncyBjdXJyZW50bHkgb25saW5lLlwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2Rpc3BsYXktdGl0bGUtdG91cicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEaXNwbGF5IFRleHRcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ2xpY2sgb24gdGhlIGJ1dHRvbiBhbmQgbWFrZSBzaWRlYmFyIG5hdmlnYXRpb24gc21hbGwuXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgemluZGV4OiA5OTk5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJ3BhZ2UtdGl0bGUtdG91cicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIHNldHRpbmdzXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIllvdSBjYW4gZWRpdCB5b3UgcHJvZmlsZSBpbmZvIGhlcmUuXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgemluZGV4OiA5OTlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAndGhhbmt5b3UtdG91cicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUaGFuayB5b3UgIVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJIZXJlIHlvdSBjYW4gY2hhbmdlIHRoZW1lIHNraW5zIGFuZCBvdGhlciBmZWF0dXJlcy5cIixcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICB6aW5kZXg6IDk5OVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaG93UHJldkJ1dHRvbjogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTdGFydCB0aGUgdG91ciFcclxuICAgIGhvcHNjb3RjaC5zdGFydFRvdXIodG91cik7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/tour.init.js\n");

/***/ }),

/***/ 57:
/*!***********************************************!*\
  !*** multi ./resources/js/pages/tour.init.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\tour.init.js */"./resources/js/pages/tour.init.js");


/***/ })

/******/ });