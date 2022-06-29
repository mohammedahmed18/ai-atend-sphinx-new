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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/tabledit.init.js":
/*!*********************************************!*\
  !*** ./resources/js/pages/tabledit.init.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Edit table init js\r\n*/\n!function ($) {\n  \"use strict\";\n\n  var EditableTable = function EditableTable() {};\n\n  EditableTable.prototype.init = function () {\n    $(\"#inline-editable\").Tabledit({\n      inputClass: 'form-control form-control-sm',\n      editButton: false,\n      deleteButton: false,\n      columns: {\n        identifier: [0, \"id\"],\n        editable: [[1, \"col1\"], [2, \"col2\"], [3, \"col3\"], [4, \"col4\"], [6, \"col6\"]]\n      }\n    }), $(\"#btn-editable\").Tabledit({\n      buttons: {\n        edit: {\n          \"class\": 'btn btn-success',\n          html: '<span class=\"mdi mdi-pencil\"></span>',\n          action: 'edit'\n        }\n      },\n      inputClass: 'form-control form-control-sm',\n      deleteButton: false,\n      saveButton: false,\n      autoFocus: false,\n      columns: {\n        identifier: [0, \"id\"],\n        editable: [[1, \"col1\"], [2, \"col2\"], [3, \"col3\"], [4, \"col4\"], [6, \"col6\"]]\n      }\n    });\n  }, $.EditableTable = new EditableTable(), $.EditableTable.Constructor = EditableTable;\n}(window.jQuery), //initializing \nfunction ($) {\n  \"use strict\";\n\n  $.EditableTable.init();\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdGFibGVkaXQuaW5pdC5qcz8zNzYzIl0sIm5hbWVzIjpbIiQiLCJFZGl0YWJsZVRhYmxlIiwicHJvdG90eXBlIiwiaW5pdCIsIlRhYmxlZGl0IiwiaW5wdXRDbGFzcyIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iLCJjb2x1bW5zIiwiaWRlbnRpZmllciIsImVkaXRhYmxlIiwiYnV0dG9ucyIsImVkaXQiLCJodG1sIiwiYWN0aW9uIiwic2F2ZUJ1dHRvbiIsImF1dG9Gb2N1cyIsIkNvbnN0cnVjdG9yIiwid2luZG93IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQVFBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1Q7O0FBRUEsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXLENBQUUsQ0FBakM7O0FBRUFBLGVBQWEsQ0FBQ0MsU0FBZCxDQUF3QkMsSUFBeEIsR0FBK0IsWUFBWTtBQUV2Q0gsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JJLFFBQXRCLENBQStCO0FBQzNCQyxnQkFBVSxFQUFFLDhCQURlO0FBRTNCQyxnQkFBVSxFQUFFLEtBRmU7QUFHM0JDLGtCQUFZLEVBQUUsS0FIYTtBQUkzQkMsYUFBTyxFQUFFO0FBQ0xDLGtCQUFVLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixDQURQO0FBRUxDLGdCQUFRLEVBQUUsQ0FDTixDQUFDLENBQUQsRUFBSSxNQUFKLENBRE0sRUFFTixDQUFDLENBQUQsRUFBSSxNQUFKLENBRk0sRUFHTixDQUFDLENBQUQsRUFBSSxNQUFKLENBSE0sRUFJTixDQUFDLENBQUQsRUFBSSxNQUFKLENBSk0sRUFLTixDQUFDLENBQUQsRUFBSSxNQUFKLENBTE07QUFGTDtBQUprQixLQUEvQixHQWdCQVYsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksUUFBbkIsQ0FBNEI7QUFDeEJPLGFBQU8sRUFBRTtBQUNMQyxZQUFJLEVBQUU7QUFDRixtQkFBTyxpQkFETDtBQUVGQyxjQUFJLEVBQUUsc0NBRko7QUFHRkMsZ0JBQU0sRUFBRTtBQUhOO0FBREQsT0FEZTtBQVF4QlQsZ0JBQVUsRUFBRSw4QkFSWTtBQVN4QkUsa0JBQVksRUFBRSxLQVRVO0FBVXhCUSxnQkFBVSxFQUFFLEtBVlk7QUFXeEJDLGVBQVMsRUFBRSxLQVhhO0FBWXhCUixhQUFPLEVBQUU7QUFDTEMsa0JBQVUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLENBRFA7QUFFTEMsZ0JBQVEsRUFBRSxDQUNOLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FETSxFQUVOLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FGTSxFQUdOLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FITSxFQUlOLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FKTSxFQUtOLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FMTTtBQUZMO0FBWmUsS0FBNUIsQ0FoQkE7QUF1Q0gsR0F6Q0QsRUEwQ0FWLENBQUMsQ0FBQ0MsYUFBRixHQUFrQixJQUFJQSxhQUFKLEVBMUNsQixFQTBDcUNELENBQUMsQ0FBQ0MsYUFBRixDQUFnQmdCLFdBQWhCLEdBQThCaEIsYUExQ25FO0FBNENILENBakRBLENBaURDaUIsTUFBTSxDQUFDQyxNQWpEUixDQUFELEVBbURBO0FBQ0EsVUFBU25CLENBQVQsRUFBWTtBQUNSOztBQUNBQSxHQUFDLENBQUNDLGFBQUYsQ0FBZ0JFLElBQWhCO0FBQ0gsQ0FIRCxDQUdFZSxNQUFNLENBQUNDLE1BSFQsQ0FwREEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvdGFibGVkaXQuaW5pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRlbXBsYXRlIE5hbWU6IFVib2xkIC0gUmVzcG9uc2l2ZSBCb290c3RyYXAgNCBBZG1pbiBEYXNoYm9hcmRcclxuQXV0aG9yOiBDb2RlclRoZW1lc1xyXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cclxuQ29udGFjdDogc3VwcG9ydEBjb2RlcnRoZW1lcy5jb21cclxuRmlsZTogRWRpdCB0YWJsZSBpbml0IGpzXHJcbiovXHJcblxyXG4hZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIEVkaXRhYmxlVGFibGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgIEVkaXRhYmxlVGFibGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJChcIiNpbmxpbmUtZWRpdGFibGVcIikuVGFibGVkaXQoe1xyXG4gICAgICAgICAgICBpbnB1dENsYXNzOiAnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScsXHJcbiAgICAgICAgICAgIGVkaXRCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWxldGVCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBbMCwgXCJpZFwiXSxcclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzEsIFwiY29sMVwiXSxcclxuICAgICAgICAgICAgICAgICAgICBbMiwgXCJjb2wyXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIFszLCBcImNvbDNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzQsIFwiY29sNFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBbNiwgXCJjb2w2XCJdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgJChcIiNidG4tZWRpdGFibGVcIikuVGFibGVkaXQoe1xyXG4gICAgICAgICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4gYnRuLXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6ICc8c3BhbiBjbGFzcz1cIm1kaSBtZGktcGVuY2lsXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZWRpdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5wdXRDbGFzczogJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nLFxyXG4gICAgICAgICAgICBkZWxldGVCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBzYXZlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgY29sdW1uczoge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogWzAsIFwiaWRcIl0sXHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxLCBcImNvbDFcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzIsIFwiY29sMlwiXSxcclxuICAgICAgICAgICAgICAgICAgICBbMywgXCJjb2wzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIFs0LCBcImNvbDRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzYsIFwiY29sNlwiXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAkLkVkaXRhYmxlVGFibGUgPSBuZXcgRWRpdGFibGVUYWJsZSwgJC5FZGl0YWJsZVRhYmxlLkNvbnN0cnVjdG9yID0gRWRpdGFibGVUYWJsZVxyXG5cclxufSh3aW5kb3cualF1ZXJ5KSxcclxuXHJcbi8vaW5pdGlhbGl6aW5nIFxyXG5mdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICQuRWRpdGFibGVUYWJsZS5pbml0KClcclxufSh3aW5kb3cualF1ZXJ5KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/tabledit.init.js\n");

/***/ }),

/***/ 52:
/*!***************************************************!*\
  !*** multi ./resources/js/pages/tabledit.init.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\tabledit.init.js */"./resources/js/pages/tabledit.init.js");


/***/ })

/******/ });