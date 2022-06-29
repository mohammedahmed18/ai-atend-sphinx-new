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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/create-project.init.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/create-project.init.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: File uploads init js\r\n*/\n// Dropzone\n!function ($) {\n  \"use strict\";\n\n  var FileUpload = function FileUpload() {\n    this.$body = $(\"body\");\n  };\n  /* Initializing */\n\n\n  FileUpload.prototype.init = function () {\n    // Disable auto discovery\n    Dropzone.autoDiscover = false;\n    $('[data-plugin=\"dropzone\"]').each(function () {\n      var actionUrl = $(this).attr('action');\n      var previewContainer = $(this).data('previewsContainer');\n      var opts = {\n        url: actionUrl\n      };\n\n      if (previewContainer) {\n        opts['previewsContainer'] = previewContainer;\n      }\n\n      var uploadPreviewTemplate = $(this).data(\"uploadPreviewTemplate\");\n\n      if (uploadPreviewTemplate) {\n        opts['previewTemplate'] = $(uploadPreviewTemplate).html();\n      }\n\n      var dropzoneEl = $(this).dropzone(opts);\n    });\n  }, //init fileupload\n  $.FileUpload = new FileUpload(), $.FileUpload.Constructor = FileUpload;\n}(window.jQuery), //initializing FileUpload\nfunction ($) {\n  \"use strict\";\n\n  $.FileUpload.init();\n}(window.jQuery); // Select 2\n\n$('[data-toggle=\"select2\"]').select2(); //Flat picker\n\n$('[data-toggle=\"flatpicker\"]').flatpickr({\n  altInput: true,\n  altFormat: \"F j, Y\",\n  dateFormat: \"Y-m-d\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY3JlYXRlLXByb2plY3QuaW5pdC5qcz8yYzVkIl0sIm5hbWVzIjpbIiQiLCJGaWxlVXBsb2FkIiwiJGJvZHkiLCJwcm90b3R5cGUiLCJpbml0IiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJlYWNoIiwiYWN0aW9uVXJsIiwiYXR0ciIsInByZXZpZXdDb250YWluZXIiLCJkYXRhIiwib3B0cyIsInVybCIsInVwbG9hZFByZXZpZXdUZW1wbGF0ZSIsImh0bWwiLCJkcm9wem9uZUVsIiwiZHJvcHpvbmUiLCJDb25zdHJ1Y3RvciIsIndpbmRvdyIsImpRdWVyeSIsInNlbGVjdDIiLCJmbGF0cGlja3IiLCJhbHRJbnB1dCIsImFsdEZvcm1hdCIsImRhdGVGb3JtYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBU0E7QUFDQSxDQUFDLFVBQVVBLENBQVYsRUFBYTtBQUNWOztBQUVBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekIsU0FBS0MsS0FBTCxHQUFhRixDQUFDLENBQUMsTUFBRCxDQUFkO0FBQ0gsR0FGRDtBQUtBOzs7QUFDQUMsWUFBVSxDQUFDRSxTQUFYLENBQXFCQyxJQUFyQixHQUE0QixZQUFZO0FBQ3BDO0FBRUFDLFlBQVEsQ0FBQ0MsWUFBVCxHQUF3QixLQUF4QjtBQUVBTixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qk8sSUFBOUIsQ0FBbUMsWUFBWTtBQUMzQyxVQUFJQyxTQUFTLEdBQUdSLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixDQUFhLFFBQWIsQ0FBaEI7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBR1YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsbUJBQWIsQ0FBdkI7QUFFQSxVQUFJQyxJQUFJLEdBQUc7QUFBRUMsV0FBRyxFQUFFTDtBQUFQLE9BQVg7O0FBQ0EsVUFBSUUsZ0JBQUosRUFBc0I7QUFDbEJFLFlBQUksQ0FBQyxtQkFBRCxDQUFKLEdBQTRCRixnQkFBNUI7QUFDSDs7QUFFRCxVQUFJSSxxQkFBcUIsR0FBR2QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsdUJBQWIsQ0FBNUI7O0FBQ0EsVUFBSUcscUJBQUosRUFBMkI7QUFDdkJGLFlBQUksQ0FBQyxpQkFBRCxDQUFKLEdBQTBCWixDQUFDLENBQUNjLHFCQUFELENBQUQsQ0FBeUJDLElBQXpCLEVBQTFCO0FBQ0g7O0FBRUQsVUFBSUMsVUFBVSxHQUFHaEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsUUFBUixDQUFpQkwsSUFBakIsQ0FBakI7QUFFSCxLQWhCRDtBQWlCSCxHQXRCRCxFQXdCSTtBQUNBWixHQUFDLENBQUNDLFVBQUYsR0FBZSxJQUFJQSxVQUFKLEVBekJuQixFQXlCbUNELENBQUMsQ0FBQ0MsVUFBRixDQUFhaUIsV0FBYixHQUEyQmpCLFVBekI5RDtBQTJCSCxDQXBDQSxDQW9DQ2tCLE1BQU0sQ0FBQ0MsTUFwQ1IsQ0FBRCxFQXNDQTtBQUNBLFVBQVVwQixDQUFWLEVBQWE7QUFDYjs7QUFDSUEsR0FBQyxDQUFDQyxVQUFGLENBQWFHLElBQWI7QUFDSCxDQUhELENBR0VlLE1BQU0sQ0FBQ0MsTUFIVCxDQXZDQSxDLENBNENBOztBQUNBcEIsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJxQixPQUE3QixHLENBRUE7O0FBQ0FyQixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3NCLFNBQWhDLENBQTBDO0FBQ3RDQyxVQUFRLEVBQUUsSUFENEI7QUFFdENDLFdBQVMsRUFBRSxRQUYyQjtBQUd0Q0MsWUFBVSxFQUFFO0FBSDBCLENBQTFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NyZWF0ZS1wcm9qZWN0LmluaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBVYm9sZCAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDQgQWRtaW4gRGFzaGJvYXJkXHJcbkF1dGhvcjogQ29kZXJUaGVtZXNcclxuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXHJcbkNvbnRhY3Q6IHN1cHBvcnRAY29kZXJ0aGVtZXMuY29tXHJcbkZpbGU6IEZpbGUgdXBsb2FkcyBpbml0IGpzXHJcbiovXHJcblxyXG5cclxuLy8gRHJvcHpvbmVcclxuIWZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgRmlsZVVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRib2R5ID0gJChcImJvZHlcIilcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qIEluaXRpYWxpemluZyAqL1xyXG4gICAgRmlsZVVwbG9hZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEaXNhYmxlIGF1dG8gZGlzY292ZXJ5XHJcblxyXG4gICAgICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wbHVnaW49XCJkcm9wem9uZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9uVXJsID0gJCh0aGlzKS5hdHRyKCdhY3Rpb24nKVxyXG4gICAgICAgICAgICB2YXIgcHJldmlld0NvbnRhaW5lciA9ICQodGhpcykuZGF0YSgncHJldmlld3NDb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRzID0geyB1cmw6IGFjdGlvblVybH07XHJcbiAgICAgICAgICAgIGlmIChwcmV2aWV3Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRzWydwcmV2aWV3c0NvbnRhaW5lciddID0gcHJldmlld0NvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHVwbG9hZFByZXZpZXdUZW1wbGF0ZSA9ICQodGhpcykuZGF0YShcInVwbG9hZFByZXZpZXdUZW1wbGF0ZVwiKTtcclxuICAgICAgICAgICAgaWYgKHVwbG9hZFByZXZpZXdUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgb3B0c1sncHJldmlld1RlbXBsYXRlJ10gPSAkKHVwbG9hZFByZXZpZXdUZW1wbGF0ZSkuaHRtbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZHJvcHpvbmVFbCA9ICQodGhpcykuZHJvcHpvbmUob3B0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAgICAgLy9pbml0IGZpbGV1cGxvYWRcclxuICAgICAgICAkLkZpbGVVcGxvYWQgPSBuZXcgRmlsZVVwbG9hZCwgJC5GaWxlVXBsb2FkLkNvbnN0cnVjdG9yID0gRmlsZVVwbG9hZFxyXG5cclxufSh3aW5kb3cualF1ZXJ5KSxcclxuXHJcbi8vaW5pdGlhbGl6aW5nIEZpbGVVcGxvYWRcclxuZnVuY3Rpb24gKCQpIHtcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAkLkZpbGVVcGxvYWQuaW5pdCgpXHJcbn0od2luZG93LmpRdWVyeSk7XHJcblxyXG4vLyBTZWxlY3QgMlxyXG4kKCdbZGF0YS10b2dnbGU9XCJzZWxlY3QyXCJdJykuc2VsZWN0MigpO1xyXG5cclxuLy9GbGF0IHBpY2tlclxyXG4kKCdbZGF0YS10b2dnbGU9XCJmbGF0cGlja2VyXCJdJykuZmxhdHBpY2tyKHtcclxuICAgIGFsdElucHV0OiB0cnVlLFxyXG4gICAgYWx0Rm9ybWF0OiBcIkYgaiwgWVwiLFxyXG4gICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/create-project.init.js\n");

/***/ }),

/***/ 9:
/*!*********************************************************!*\
  !*** multi ./resources/js/pages/create-project.init.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\create-project.init.js */"./resources/js/pages/create-project.init.js");


/***/ })

/******/ });