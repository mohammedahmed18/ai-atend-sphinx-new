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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/loading-btn.init.js":
/*!************************************************!*\
  !*** ./resources/js/pages/loading-btn.init.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Loading Button init js\r\n*/\n// Bind normal buttons\nLadda.bind('.ladda-button', {\n  timeout: 2000\n}); // Bind progress buttons and simulate loading progress\n\nLadda.bind('.progress-demo .ladda-button', {\n  callback: function callback(instance) {\n    var progress = 0;\n    var interval = setInterval(function () {\n      progress = Math.min(progress + Math.random() * 0.1, 1);\n      instance.setProgress(progress);\n\n      if (progress === 1) {\n        instance.stop();\n        clearInterval(interval);\n      }\n    }, 200);\n  }\n}); // You can control loading explicitly using the JavaScript API\n// as outlined below:\n// var l = Ladda.create( document.querySelector( 'button' ) );\n// l.start();\n// l.stop();\n// l.toggle();\n// l.isLoading();\n// l.setProgress( 0-1 );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvbG9hZGluZy1idG4uaW5pdC5qcz9lMDQ5Il0sIm5hbWVzIjpbIkxhZGRhIiwiYmluZCIsInRpbWVvdXQiLCJjYWxsYmFjayIsImluc3RhbmNlIiwicHJvZ3Jlc3MiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiTWF0aCIsIm1pbiIsInJhbmRvbSIsInNldFByb2dyZXNzIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBUUM7QUFDQUEsS0FBSyxDQUFDQyxJQUFOLENBQVksZUFBWixFQUE2QjtBQUFFQyxTQUFPLEVBQUU7QUFBWCxDQUE3QixFLENBRUE7O0FBQ0FGLEtBQUssQ0FBQ0MsSUFBTixDQUFZLDhCQUFaLEVBQTRDO0FBQ3hDRSxVQUFRLEVBQUUsa0JBQVVDLFFBQVYsRUFBcUI7QUFDM0IsUUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxRQUFJQyxRQUFRLEdBQUdDLFdBQVcsQ0FBRSxZQUFXO0FBQ25DRixjQUFRLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxDQUFVSixRQUFRLEdBQUdHLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUFyQyxFQUEwQyxDQUExQyxDQUFYO0FBQ0FOLGNBQVEsQ0FBQ08sV0FBVCxDQUFzQk4sUUFBdEI7O0FBRUEsVUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQXFCO0FBQ2pCRCxnQkFBUSxDQUFDUSxJQUFUO0FBQ0FDLHFCQUFhLENBQUVQLFFBQUYsQ0FBYjtBQUNIO0FBQ0osS0FSeUIsRUFRdkIsR0FSdUIsQ0FBMUI7QUFTSDtBQVp1QyxDQUE1QyxFLENBZUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9sb2FkaW5nLWJ0bi5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBMb2FkaW5nIEJ1dHRvbiBpbml0IGpzXHJcbiovXHJcblxyXG4gLy8gQmluZCBub3JtYWwgYnV0dG9uc1xyXG4gTGFkZGEuYmluZCggJy5sYWRkYS1idXR0b24nLCB7IHRpbWVvdXQ6IDIwMDAgfSApO1xyXG5cclxuIC8vIEJpbmQgcHJvZ3Jlc3MgYnV0dG9ucyBhbmQgc2ltdWxhdGUgbG9hZGluZyBwcm9ncmVzc1xyXG4gTGFkZGEuYmluZCggJy5wcm9ncmVzcy1kZW1vIC5sYWRkYS1idXR0b24nLCB7XHJcbiAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgdmFyIHByb2dyZXNzID0gMDtcclxuICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbiggcHJvZ3Jlc3MgKyBNYXRoLnJhbmRvbSgpICogMC4xLCAxICk7XHJcbiAgICAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9ncmVzcyggcHJvZ3Jlc3MgKTtcclxuXHJcbiAgICAgICAgICAgICBpZiggcHJvZ3Jlc3MgPT09IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoIGludGVydmFsICk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sIDIwMCApO1xyXG4gICAgIH1cclxuIH0gKTtcclxuXHJcbiAvLyBZb3UgY2FuIGNvbnRyb2wgbG9hZGluZyBleHBsaWNpdGx5IHVzaW5nIHRoZSBKYXZhU2NyaXB0IEFQSVxyXG4gLy8gYXMgb3V0bGluZWQgYmVsb3c6XHJcblxyXG4gLy8gdmFyIGwgPSBMYWRkYS5jcmVhdGUoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdidXR0b24nICkgKTtcclxuIC8vIGwuc3RhcnQoKTtcclxuIC8vIGwuc3RvcCgpO1xyXG4gLy8gbC50b2dnbGUoKTtcclxuIC8vIGwuaXNMb2FkaW5nKCk7XHJcbiAvLyBsLnNldFByb2dyZXNzKCAwLTEgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/loading-btn.init.js\n");

/***/ }),

/***/ 41:
/*!******************************************************!*\
  !*** multi ./resources/js/pages/loading-btn.init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\loading-btn.init.js */"./resources/js/pages/loading-btn.init.js");


/***/ })

/******/ });