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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/foo-tables.init.js":
/*!***********************************************!*\
  !*** ./resources/js/pages/foo-tables.init.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Foo tables init js\r\n*/\n$(window).on('load', function () {\n  // Row Toggler\n  // -----------------------------------------------------------------\n  $('#demo-foo-row-toggler').footable(); // Accordion\n  // -----------------------------------------------------------------\n\n  $('#demo-foo-accordion').footable().on('footable_row_expanded', function (e) {\n    $('#demo-foo-accordion tbody tr.footable-detail-show').not(e.row).each(function () {\n      $('#demo-foo-accordion').data('footable').toggleDetail(this);\n    });\n  }); // Pagination\n  // -----------------------------------------------------------------\n\n  $('#demo-foo-pagination').footable();\n  $('#demo-show-entries').change(function (e) {\n    e.preventDefault();\n    var pageSize = $(this).val();\n    $('#demo-foo-pagination').data('page-size', pageSize);\n    $('#demo-foo-pagination').trigger('footable_initialized');\n  }); // Filtering\n  // -----------------------------------------------------------------\n\n  var filtering = $('#demo-foo-filtering');\n  filtering.footable().on('footable_filtering', function (e) {\n    var selected = $('#demo-foo-filter-status').find(':selected').val();\n    e.filter += e.filter && e.filter.length > 0 ? ' ' + selected : selected;\n    e.clear = !e.filter;\n  }); // Filter status\n\n  $('#demo-foo-filter-status').change(function (e) {\n    e.preventDefault();\n    filtering.trigger('footable_filter', {\n      filter: $(this).val()\n    });\n  }); // Search input\n\n  $('#demo-foo-search').on('input', function (e) {\n    e.preventDefault();\n    filtering.trigger('footable_filter', {\n      filter: $(this).val()\n    });\n  }); // Add & Remove Row\n  // -----------------------------------------------------------------\n\n  var addrow = $('#demo-foo-addrow');\n  addrow.footable().on('click', '.demo-delete-row', function () {\n    //get the footable object\n    var footable = addrow.data('footable'); //get the row we are wanting to delete\n\n    var row = $(this).parents('tr:first'); //delete the row\n\n    footable.removeRow(row);\n  }); // Search input\n\n  $('#demo-input-search2').on('input', function (e) {\n    e.preventDefault();\n    addrow.trigger('footable_filter', {\n      filter: $(this).val()\n    });\n  }); // Add Row Button\n\n  $('#demo-btn-addrow').click(function () {\n    //get the footable object\n    var footable = addrow.data('footable'); //build up the row we are wanting to add\n\n    var newRow = '<tr><td style=\"text-align: center;\"><button class=\"demo-delete-row btn btn-danger btn-xs btn-icon\"><i class=\"fa fa-times\"></i></button></td><td>Adam</td><td>Doe</td><td>Traffic Court Referee</td><td>22 Jun 1972</td><td><span class=\"badge label-table badge-success   \">Active</span></td></tr>'; //add it\n\n    footable.appendRow(newRow);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZm9vLXRhYmxlcy5pbml0LmpzPzU3OTMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwiZm9vdGFibGUiLCJlIiwibm90Iiwicm93IiwiZWFjaCIsImRhdGEiLCJ0b2dnbGVEZXRhaWwiLCJjaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VTaXplIiwidmFsIiwidHJpZ2dlciIsImZpbHRlcmluZyIsInNlbGVjdGVkIiwiZmluZCIsImZpbHRlciIsImxlbmd0aCIsImNsZWFyIiwiYWRkcm93IiwicGFyZW50cyIsInJlbW92ZVJvdyIsImNsaWNrIiwibmV3Um93IiwiYXBwZW5kUm93Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQVFBQSxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFXO0FBRTVCO0FBQ0E7QUFDQUYsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJHLFFBQTNCLEdBSjRCLENBTTVCO0FBQ0E7O0FBQ0FILEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxRQUF6QixHQUFvQ0QsRUFBcEMsQ0FBdUMsdUJBQXZDLEVBQWdFLFVBQVNFLENBQVQsRUFBWTtBQUN4RUosS0FBQyxDQUFDLG1EQUFELENBQUQsQ0FBdURLLEdBQXZELENBQTJERCxDQUFDLENBQUNFLEdBQTdELEVBQWtFQyxJQUFsRSxDQUF1RSxZQUFXO0FBQzlFUCxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlEsSUFBekIsQ0FBOEIsVUFBOUIsRUFBMENDLFlBQTFDLENBQXVELElBQXZEO0FBQ0gsS0FGRDtBQUdILEdBSkQsRUFSNEIsQ0FjNUI7QUFDQTs7QUFDQVQsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJHLFFBQTFCO0FBQ0FILEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCVSxNQUF4QixDQUErQixVQUFVTixDQUFWLEVBQWE7QUFDeENBLEtBQUMsQ0FBQ08s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QUFtQkQsTUFBbkI7QUFDSCxHQVZEO0FBV0gsQ0EvRUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvZm9vLXRhYmxlcy5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBGb28gdGFibGVzIGluaXQganNcclxuKi9cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIFJvdyBUb2dnbGVyXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgJCgnI2RlbW8tZm9vLXJvdy10b2dnbGVyJykuZm9vdGFibGUoKTtcclxuXHJcbiAgICAvLyBBY2NvcmRpb25cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAkKCcjZGVtby1mb28tYWNjb3JkaW9uJykuZm9vdGFibGUoKS5vbignZm9vdGFibGVfcm93X2V4cGFuZGVkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJyNkZW1vLWZvby1hY2NvcmRpb24gdGJvZHkgdHIuZm9vdGFibGUtZGV0YWlsLXNob3cnKS5ub3QoZS5yb3cpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyNkZW1vLWZvby1hY2NvcmRpb24nKS5kYXRhKCdmb290YWJsZScpLnRvZ2dsZURldGFpbCh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBhZ2luYXRpb25cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAkKCcjZGVtby1mb28tcGFnaW5hdGlvbicpLmZvb3RhYmxlKCk7XHJcbiAgICAkKCcjZGVtby1zaG93LWVudHJpZXMnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHBhZ2VTaXplID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAkKCcjZGVtby1mb28tcGFnaW5hdGlvbicpLmRhdGEoJ3BhZ2Utc2l6ZScsIHBhZ2VTaXplKTtcclxuICAgICAgICAkKCcjZGVtby1mb28tcGFnaW5hdGlvbicpLnRyaWdnZXIoJ2Zvb3RhYmxlX2luaXRpYWxpemVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXJpbmdcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgZmlsdGVyaW5nID0gJCgnI2RlbW8tZm9vLWZpbHRlcmluZycpO1xyXG4gICAgZmlsdGVyaW5nLmZvb3RhYmxlKCkub24oJ2Zvb3RhYmxlX2ZpbHRlcmluZycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gJCgnI2RlbW8tZm9vLWZpbHRlci1zdGF0dXMnKS5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICBlLmZpbHRlciArPSAoZS5maWx0ZXIgJiYgZS5maWx0ZXIubGVuZ3RoID4gMCkgPyAnICcgKyBzZWxlY3RlZCA6IHNlbGVjdGVkO1xyXG4gICAgICAgIGUuY2xlYXIgPSAhZS5maWx0ZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgc3RhdHVzXHJcbiAgICAkKCcjZGVtby1mb28tZmlsdGVyLXN0YXR1cycpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmaWx0ZXJpbmcudHJpZ2dlcignZm9vdGFibGVfZmlsdGVyJywge2ZpbHRlcjogJCh0aGlzKS52YWwoKX0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2VhcmNoIGlucHV0XHJcbiAgICAkKCcjZGVtby1mb28tc2VhcmNoJykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZmlsdGVyaW5nLnRyaWdnZXIoJ2Zvb3RhYmxlX2ZpbHRlcicsIHtmaWx0ZXI6ICQodGhpcykudmFsKCl9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBBZGQgJiBSZW1vdmUgUm93XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGFkZHJvdyA9ICQoJyNkZW1vLWZvby1hZGRyb3cnKTtcclxuICAgIGFkZHJvdy5mb290YWJsZSgpLm9uKCdjbGljaycsICcuZGVtby1kZWxldGUtcm93JywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vZ2V0IHRoZSBmb290YWJsZSBvYmplY3RcclxuICAgICAgICB2YXIgZm9vdGFibGUgPSBhZGRyb3cuZGF0YSgnZm9vdGFibGUnKTtcclxuXHJcbiAgICAgICAgLy9nZXQgdGhlIHJvdyB3ZSBhcmUgd2FudGluZyB0byBkZWxldGVcclxuICAgICAgICB2YXIgcm93ID0gJCh0aGlzKS5wYXJlbnRzKCd0cjpmaXJzdCcpO1xyXG5cclxuICAgICAgICAvL2RlbGV0ZSB0aGUgcm93XHJcbiAgICAgICAgZm9vdGFibGUucmVtb3ZlUm93KHJvdyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZWFyY2ggaW5wdXRcclxuICAgICQoJyNkZW1vLWlucHV0LXNlYXJjaDInKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhZGRyb3cudHJpZ2dlcignZm9vdGFibGVfZmlsdGVyJywge2ZpbHRlcjogJCh0aGlzKS52YWwoKX0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIFJvdyBCdXR0b25cclxuICAgICQoJyNkZW1vLWJ0bi1hZGRyb3cnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy9nZXQgdGhlIGZvb3RhYmxlIG9iamVjdFxyXG4gICAgICAgIHZhciBmb290YWJsZSA9IGFkZHJvdy5kYXRhKCdmb290YWJsZScpO1xyXG5cclxuICAgICAgICAvL2J1aWxkIHVwIHRoZSByb3cgd2UgYXJlIHdhbnRpbmcgdG8gYWRkXHJcbiAgICAgICAgdmFyIG5ld1JvdyA9ICc8dHI+PHRkIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPjxidXR0b24gY2xhc3M9XCJkZW1vLWRlbGV0ZS1yb3cgYnRuIGJ0bi1kYW5nZXIgYnRuLXhzIGJ0bi1pY29uXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L3RkPjx0ZD5BZGFtPC90ZD48dGQ+RG9lPC90ZD48dGQ+VHJhZmZpYyBDb3VydCBSZWZlcmVlPC90ZD48dGQ+MjIgSnVuIDE5NzI8L3RkPjx0ZD48c3BhbiBjbGFzcz1cImJhZGdlIGxhYmVsLXRhYmxlIGJhZGdlLXN1Y2Nlc3MgICBcIj5BY3RpdmU8L3NwYW4+PC90ZD48L3RyPic7XHJcblxyXG4gICAgICAgIC8vYWRkIGl0XHJcbiAgICAgICAgZm9vdGFibGUuYXBwZW5kUm93KG5ld1Jvdyk7XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/foo-tables.init.js\n");

/***/ }),

/***/ 23:
/*!*****************************************************!*\
  !*** multi ./resources/js/pages/foo-tables.init.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\foo-tables.init.js */"./resources/js/pages/foo-tables.init.js");


/***/ })

/******/ });