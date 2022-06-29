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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/form-wizard.init.js":
/*!************************************************!*\
  !*** ./resources/js/pages/form-wizard.init.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Form wizard init js\r\n*/\n$(document).ready(function () {\n  \"use strict\";\n\n  $('#basicwizard').bootstrapWizard();\n  $('#progressbarwizard').bootstrapWizard({\n    onTabShow: function onTabShow(tab, navigation, index) {\n      var $total = navigation.find('li').length;\n      var $current = index + 1;\n      var $percent = $current / $total * 100;\n      $('#progressbarwizard').find('.bar').css({\n        width: $percent + '%'\n      });\n    }\n  });\n  $('#btnwizard').bootstrapWizard({\n    'nextSelector': '.button-next',\n    'previousSelector': '.button-previous',\n    'firstSelector': '.button-first',\n    'lastSelector': '.button-last'\n  });\n  $('#rootwizard').bootstrapWizard({\n    'onNext': function onNext(tab, navigation, index) {\n      var form = $($(tab).data(\"targetForm\"));\n\n      if (form) {\n        form.addClass('was-validated');\n\n        if (form[0].checkValidity() === false) {\n          event.preventDefault();\n          event.stopPropagation();\n          return false;\n        }\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZm9ybS13aXphcmQuaW5pdC5qcz9kMjEwIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYm9vdHN0cmFwV2l6YXJkIiwib25UYWJTaG93IiwidGFiIiwibmF2aWdhdGlvbiIsImluZGV4IiwiJHRvdGFsIiwiZmluZCIsImxlbmd0aCIsIiRjdXJyZW50IiwiJHBlcmNlbnQiLCJjc3MiLCJ3aWR0aCIsImZvcm0iLCJkYXRhIiwiYWRkQ2xhc3MiLCJjaGVja1ZhbGlkaXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFRQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCOztBQUVBRixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCRyxlQUFsQjtBQUVBSCxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkcsZUFBeEIsQ0FBd0M7QUFDcENDLGFBQVMsRUFBRSxtQkFBVUMsR0FBVixFQUFlQyxVQUFmLEVBQTJCQyxLQUEzQixFQUFrQztBQUN6QyxVQUFJQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixJQUFoQixFQUFzQkMsTUFBbkM7QUFDQSxVQUFJQyxRQUFRLEdBQUdKLEtBQUssR0FBRyxDQUF2QjtBQUNBLFVBQUlLLFFBQVEsR0FBSUQsUUFBUSxHQUFHSCxNQUFaLEdBQXNCLEdBQXJDO0FBQ0FSLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCUyxJQUF4QixDQUE2QixNQUE3QixFQUFxQ0ksR0FBckMsQ0FBeUM7QUFBRUMsYUFBSyxFQUFFRixRQUFRLEdBQUc7QUFBcEIsT0FBekM7QUFDSDtBQU5tQyxHQUF4QztBQVNBWixHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCRyxlQUFoQixDQUFnQztBQUFFLG9CQUFnQixjQUFsQjtBQUFrQyx3QkFBb0Isa0JBQXREO0FBQTBFLHFCQUFpQixlQUEzRjtBQUE0RyxvQkFBZ0I7QUFBNUgsR0FBaEM7QUFFQUgsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkcsZUFBakIsQ0FBaUM7QUFDN0IsY0FBVSxnQkFBVUUsR0FBVixFQUFlQyxVQUFmLEVBQTJCQyxLQUEzQixFQUFrQztBQUN4QyxVQUFJUSxJQUFJLEdBQUdmLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDSyxHQUFELENBQUQsQ0FBT1csSUFBUCxDQUFZLFlBQVosQ0FBRCxDQUFaOztBQUNBLFVBQUlELElBQUosRUFBVTtBQUNOQSxZQUFJLENBQUNFLFFBQUwsQ0FBYyxlQUFkOztBQUNBLFlBQUlGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUcsYUFBUixPQUE0QixLQUFoQyxFQUF1QztBQUNuQ0MsZUFBSyxDQUFDQyxjQUFOO0FBQ0FELGVBQUssQ0FBQ0UsZUFBTjtBQUNBLGlCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7QUFYNEIsR0FBakM7QUFhSCxDQTdCRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9mb3JtLXdpemFyZC5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBGb3JtIHdpemFyZCBpbml0IGpzXHJcbiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKCcjYmFzaWN3aXphcmQnKS5ib290c3RyYXBXaXphcmQoKTtcclxuXHJcbiAgICAkKCcjcHJvZ3Jlc3NiYXJ3aXphcmQnKS5ib290c3RyYXBXaXphcmQoe1xyXG4gICAgICAgIG9uVGFiU2hvdzogZnVuY3Rpb24gKHRhYiwgbmF2aWdhdGlvbiwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyICR0b3RhbCA9IG5hdmlnYXRpb24uZmluZCgnbGknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciAkY3VycmVudCA9IGluZGV4ICsgMTtcclxuICAgICAgICAgICAgdmFyICRwZXJjZW50ID0gKCRjdXJyZW50IC8gJHRvdGFsKSAqIDEwMDtcclxuICAgICAgICAgICAgJCgnI3Byb2dyZXNzYmFyd2l6YXJkJykuZmluZCgnLmJhcicpLmNzcyh7IHdpZHRoOiAkcGVyY2VudCArICclJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnRud2l6YXJkJykuYm9vdHN0cmFwV2l6YXJkKHsgJ25leHRTZWxlY3Rvcic6ICcuYnV0dG9uLW5leHQnLCAncHJldmlvdXNTZWxlY3Rvcic6ICcuYnV0dG9uLXByZXZpb3VzJywgJ2ZpcnN0U2VsZWN0b3InOiAnLmJ1dHRvbi1maXJzdCcsICdsYXN0U2VsZWN0b3InOiAnLmJ1dHRvbi1sYXN0JyB9KTtcclxuXHJcbiAgICAkKCcjcm9vdHdpemFyZCcpLmJvb3RzdHJhcFdpemFyZCh7XHJcbiAgICAgICAgJ29uTmV4dCc6IGZ1bmN0aW9uICh0YWIsIG5hdmlnYXRpb24sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtID0gJCgkKHRhYikuZGF0YShcInRhcmdldEZvcm1cIikpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hZGRDbGFzcygnd2FzLXZhbGlkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/form-wizard.init.js\n");

/***/ }),

/***/ 32:
/*!******************************************************!*\
  !*** multi ./resources/js/pages/form-wizard.init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\form-wizard.init.js */"./resources/js/pages/form-wizard.init.js");


/***/ })

/******/ });