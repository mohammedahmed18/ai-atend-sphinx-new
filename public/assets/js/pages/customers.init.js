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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/customers.init.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/customers.init.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Customers Init Js\r\n*/\n$(document).ready(function () {\n  \"use strict\"; // Default Datatable\n\n  $(\"#customers-datatable\").DataTable({\n    language: {\n      paginate: {\n        previous: \"<i class='mdi mdi-chevron-left'>\",\n        next: \"<i class='mdi mdi-chevron-right'>\"\n      },\n      info: \"Showing customers _START_ to _END_ of _TOTAL_\",\n      lengthMenu: \"Display <select class='custom-select custom-select-sm ml-1 mr-1'>\" + '<option value=\"10\">10</option>' + '<option value=\"20\">20</option>' + '<option value=\"-1\">All</option>' + \"</select> customers\"\n    },\n    pageLength: 10,\n    columns: [{\n      orderable: false,\n      render: function render(data, type, row, meta) {\n        if (type === \"display\") {\n          data = '<div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input dt-checkboxes\"><label class=\"custom-control-label\">&nbsp;</label></div>';\n        }\n\n        return data;\n      },\n      checkboxes: {\n        selectRow: true,\n        selectAllRender: '<div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input dt-checkboxes\"><label class=\"custom-control-label\">&nbsp;</label></div>'\n      }\n    }, {\n      orderable: true\n    }, {\n      orderable: true\n    }, {\n      orderable: true\n    }, {\n      orderable: true\n    }, {\n      orderable: true\n    }, {\n      orderable: true\n    }, {\n      orderable: false\n    }],\n    select: {\n      style: \"multi\"\n    },\n    order: [[5, \"asc\"]],\n    drawCallback: function drawCallback() {\n      $(\".dataTables_paginate > .pagination\").addClass(\"pagination-rounded\");\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY3VzdG9tZXJzLmluaXQuanM/OWUxZiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsImxhbmd1YWdlIiwicGFnaW5hdGUiLCJwcmV2aW91cyIsIm5leHQiLCJpbmZvIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwicmVuZGVyIiwiZGF0YSIsInR5cGUiLCJyb3ciLCJtZXRhIiwiY2hlY2tib3hlcyIsInNlbGVjdFJvdyIsInNlbGVjdEFsbFJlbmRlciIsInNlbGVjdCIsInN0eWxlIiwib3JkZXIiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFRQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLGVBRHlCLENBR3pCOztBQUNBRixHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkcsU0FBMUIsQ0FBb0M7QUFDbENDLFlBQVEsRUFBRTtBQUNSQyxjQUFRLEVBQUU7QUFDUkMsZ0JBQVEsRUFBRSxrQ0FERjtBQUVSQyxZQUFJLEVBQUU7QUFGRSxPQURGO0FBS1JDLFVBQUksRUFBRSwrQ0FMRTtBQU1SQyxnQkFBVSxFQUNSLHNFQUNBLGdDQURBLEdBRUEsZ0NBRkEsR0FHQSxpQ0FIQSxHQUlBO0FBWE0sS0FEd0I7QUFjbENDLGNBQVUsRUFBRSxFQWRzQjtBQWVsQ0MsV0FBTyxFQUFFLENBQ1A7QUFDRUMsZUFBUyxFQUFFLEtBRGI7QUFFRUMsWUFBTSxFQUFFLGdCQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUJDLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQztBQUN0QyxZQUFJRixJQUFJLEtBQUssU0FBYixFQUF3QjtBQUN0QkQsY0FBSSxHQUNGLHdLQURGO0FBRUQ7O0FBQ0QsZUFBT0EsSUFBUDtBQUNELE9BUkg7QUFTRUksZ0JBQVUsRUFBRTtBQUNWQyxpQkFBUyxFQUFFLElBREQ7QUFFVkMsdUJBQWUsRUFDYjtBQUhRO0FBVGQsS0FETyxFQWdCUDtBQUFFUixlQUFTLEVBQUU7QUFBYixLQWhCTyxFQWlCUDtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQWpCTyxFQWtCUDtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQWxCTyxFQW1CUDtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQW5CTyxFQW9CUDtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQXBCTyxFQXFCUDtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQXJCTyxFQXNCUDtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQXRCTyxDQWZ5QjtBQXVDbENTLFVBQU0sRUFBRTtBQUNOQyxXQUFLLEVBQUU7QUFERCxLQXZDMEI7QUEwQ2xDQyxTQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxLQUFKLENBQUQsQ0ExQzJCO0FBMkNsQ0MsZ0JBQVksRUFBRSx3QkFBVztBQUN2QnhCLE9BQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDeUIsUUFBeEMsQ0FBaUQsb0JBQWpEO0FBQ0Q7QUE3Q2lDLEdBQXBDO0FBK0NELENBbkRIIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2N1c3RvbWVycy5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBDdXN0b21lcnMgSW5pdCBKc1xyXG4qL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICBcclxuICAgIC8vIERlZmF1bHQgRGF0YXRhYmxlXHJcbiAgICAkKFwiI2N1c3RvbWVycy1kYXRhdGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICBwYWdpbmF0ZToge1xyXG4gICAgICAgICAgcHJldmlvdXM6IFwiPGkgY2xhc3M9J21kaSBtZGktY2hldnJvbi1sZWZ0Jz5cIixcclxuICAgICAgICAgIG5leHQ6IFwiPGkgY2xhc3M9J21kaSBtZGktY2hldnJvbi1yaWdodCc+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluZm86IFwiU2hvd2luZyBjdXN0b21lcnMgX1NUQVJUXyB0byBfRU5EXyBvZiBfVE9UQUxfXCIsXHJcbiAgICAgICAgbGVuZ3RoTWVudTpcclxuICAgICAgICAgIFwiRGlzcGxheSA8c2VsZWN0IGNsYXNzPSdjdXN0b20tc2VsZWN0IGN1c3RvbS1zZWxlY3Qtc20gbWwtMSBtci0xJz5cIiArXHJcbiAgICAgICAgICAnPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj4nICtcclxuICAgICAgICAgICc8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPicgK1xyXG4gICAgICAgICAgJzxvcHRpb24gdmFsdWU9XCItMVwiPkFsbDwvb3B0aW9uPicgK1xyXG4gICAgICAgICAgXCI8L3NlbGVjdD4gY3VzdG9tZXJzXCJcclxuICAgICAgfSxcclxuICAgICAgcGFnZUxlbmd0aDogMTAsXHJcbiAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCByb3csIG1ldGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZGlzcGxheVwiKSB7XHJcbiAgICAgICAgICAgICAgZGF0YSA9XHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0IGR0LWNoZWNrYm94ZXNcIj48bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiPiZuYnNwOzwvbGFiZWw+PC9kaXY+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjaGVja2JveGVzOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdFJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0QWxsUmVuZGVyOlxyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgZHQtY2hlY2tib3hlc1wiPjxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCI+Jm5ic3A7PC9sYWJlbD48L2Rpdj4nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UgfVxyXG4gICAgICBdLFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBzdHlsZTogXCJtdWx0aVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiBbWzUsIFwiYXNjXCJdXSxcclxuICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLmRhdGFUYWJsZXNfcGFnaW5hdGUgPiAucGFnaW5hdGlvblwiKS5hZGRDbGFzcyhcInBhZ2luYXRpb24tcm91bmRlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/customers.init.js\n");

/***/ }),

/***/ 13:
/*!****************************************************!*\
  !*** multi ./resources/js/pages/customers.init.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\customers.init.js */"./resources/js/pages/customers.init.js");


/***/ })

/******/ });