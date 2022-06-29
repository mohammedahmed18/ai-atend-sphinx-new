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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/coming-soon.init.js":
/*!************************************************!*\
  !*** ./resources/js/pages/coming-soon.init.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Coming Soon init js\r\n*/\n$('[data-countdown]').each(function () {\n  var $this = $(this),\n      finalDate = $(this).data('countdown');\n  $this.countdown(finalDate, function (event) {\n    $(this).html(event.strftime('' + '<div class=\"coming-box\">%D <span>Days</span></div> ' + '<div class=\"coming-box\">%H <span>Hours</span></div> ' + '<div class=\"coming-box\">%M <span>Minutes</span></div> ' + '<div class=\"coming-box\">%S <span>Seconds</span></div> '));\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29taW5nLXNvb24uaW5pdC5qcz82NTNkIl0sIm5hbWVzIjpbIiQiLCJlYWNoIiwiJHRoaXMiLCJmaW5hbERhdGUiLCJkYXRhIiwiY291bnRkb3duIiwiZXZlbnQiLCJodG1sIiwic3RyZnRpbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBUUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCQyxJQUF0QixDQUEyQixZQUFZO0FBQ25DLE1BQUlDLEtBQUssR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUFBLE1BQXFCRyxTQUFTLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLFdBQWIsQ0FBakM7QUFDQUYsT0FBSyxDQUFDRyxTQUFOLENBQWdCRixTQUFoQixFQUEyQixVQUFVRyxLQUFWLEVBQWlCO0FBQ3hDTixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsQ0FBYUQsS0FBSyxDQUFDRSxRQUFOLENBQWUsS0FDMUIscURBRDBCLEdBRTFCLHNEQUYwQixHQUcxQix3REFIMEIsR0FJMUIsd0RBSlcsQ0FBYjtBQUtILEdBTkQ7QUFPSCxDQVREIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NvbWluZy1zb29uLmluaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBVYm9sZCAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDQgQWRtaW4gRGFzaGJvYXJkXHJcbkF1dGhvcjogQ29kZXJUaGVtZXNcclxuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXHJcbkNvbnRhY3Q6IHN1cHBvcnRAY29kZXJ0aGVtZXMuY29tXHJcbkZpbGU6IENvbWluZyBTb29uIGluaXQganNcclxuKi9cclxuXHJcbiQoJ1tkYXRhLWNvdW50ZG93bl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksIGZpbmFsRGF0ZSA9ICQodGhpcykuZGF0YSgnY291bnRkb3duJyk7XHJcbiAgICAkdGhpcy5jb3VudGRvd24oZmluYWxEYXRlLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJydcclxuICAgICAgICArICc8ZGl2IGNsYXNzPVwiY29taW5nLWJveFwiPiVEIDxzcGFuPkRheXM8L3NwYW4+PC9kaXY+ICdcclxuICAgICAgICArICc8ZGl2IGNsYXNzPVwiY29taW5nLWJveFwiPiVIIDxzcGFuPkhvdXJzPC9zcGFuPjwvZGl2PiAnXHJcbiAgICAgICAgKyAnPGRpdiBjbGFzcz1cImNvbWluZy1ib3hcIj4lTSA8c3Bhbj5NaW51dGVzPC9zcGFuPjwvZGl2PiAnXHJcbiAgICAgICAgKyAnPGRpdiBjbGFzcz1cImNvbWluZy1ib3hcIj4lUyA8c3Bhbj5TZWNvbmRzPC9zcGFuPjwvZGl2PiAnKSk7XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/coming-soon.init.js\n");

/***/ }),

/***/ 8:
/*!******************************************************!*\
  !*** multi ./resources/js/pages/coming-soon.init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\coming-soon.init.js */"./resources/js/pages/coming-soon.init.js");


/***/ })

/******/ });