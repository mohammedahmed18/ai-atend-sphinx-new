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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/crm-leads.init.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/crm-leads.init.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Leads init js\r\n*/\n!function ($) {\n  \"use strict\";\n\n  var LeadsCharts = function LeadsCharts() {}; //creates Stacked chart\n\n\n  LeadsCharts.prototype.createStackedChart = function (element, data, xkey, ykeys, labels, lineColors) {\n    Morris.Bar({\n      element: element,\n      data: data,\n      dataLabels: false,\n      xkey: xkey,\n      ykeys: ykeys,\n      stacked: true,\n      labels: labels,\n      hideHover: 'auto',\n      resize: true,\n      //defaulted to true\n      gridLineColor: 'rgba(65, 80, 95, 0.07)',\n      barSizeRatio: 0.2,\n      barColors: lineColors\n    });\n  }, LeadsCharts.prototype.init = function () {\n    //creating Stacked chart\n    var $stckedData = [{\n      y: '2012',\n      a: 75,\n      b: 65\n    }, {\n      y: '2013',\n      a: 50,\n      b: 40\n    }, {\n      y: '2014',\n      a: 75,\n      b: 65\n    }, {\n      y: '2015',\n      a: 50,\n      b: 40\n    }, {\n      y: '2016',\n      a: 75,\n      b: 65\n    }, {\n      y: '2017',\n      a: 100,\n      b: 90\n    }, {\n      y: '2018',\n      a: 80,\n      b: 65\n    }];\n    var colors = ['#4a81d4', '#e3eaef'];\n    var dataColors = $(\"#leads-statics\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    this.createStackedChart('leads-statics', $stckedData, 'y', ['a', 'b'], [\"Won Leads\", \"Lost Leads\"], colors);\n  }, //init\n  $.LeadsCharts = new LeadsCharts(), $.LeadsCharts.Constructor = LeadsCharts;\n}(window.jQuery), //initializing \nfunction ($) {\n  \"use strict\";\n\n  $.LeadsCharts.init();\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY3JtLWxlYWRzLmluaXQuanM/OWM3OCJdLCJuYW1lcyI6WyIkIiwiTGVhZHNDaGFydHMiLCJwcm90b3R5cGUiLCJjcmVhdGVTdGFja2VkQ2hhcnQiLCJlbGVtZW50IiwiZGF0YSIsInhrZXkiLCJ5a2V5cyIsImxhYmVscyIsImxpbmVDb2xvcnMiLCJNb3JyaXMiLCJCYXIiLCJkYXRhTGFiZWxzIiwic3RhY2tlZCIsImhpZGVIb3ZlciIsInJlc2l6ZSIsImdyaWRMaW5lQ29sb3IiLCJiYXJTaXplUmF0aW8iLCJiYXJDb2xvcnMiLCJpbml0IiwiJHN0Y2tlZERhdGEiLCJ5IiwiYSIsImIiLCJjb2xvcnMiLCJkYXRhQ29sb3JzIiwic3BsaXQiLCJDb25zdHJ1Y3RvciIsIndpbmRvdyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFRQSxDQUFDLFVBQVNBLENBQVQsRUFBWTtBQUNUOztBQUVBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVcsQ0FBRSxDQUEvQixDQUhTLENBS1Q7OztBQUNBQSxhQUFXLENBQUNDLFNBQVosQ0FBc0JDLGtCQUF0QixHQUE0QyxVQUFTQyxPQUFULEVBQWtCQyxJQUFsQixFQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxNQUFyQyxFQUE2Q0MsVUFBN0MsRUFBeUQ7QUFDakdDLFVBQU0sQ0FBQ0MsR0FBUCxDQUFXO0FBQ1BQLGFBQU8sRUFBRUEsT0FERjtBQUVQQyxVQUFJLEVBQUVBLElBRkM7QUFHUE8sZ0JBQVUsRUFBRSxLQUhMO0FBSVBOLFVBQUksRUFBRUEsSUFKQztBQUtQQyxXQUFLLEVBQUVBLEtBTEE7QUFNUE0sYUFBTyxFQUFFLElBTkY7QUFPUEwsWUFBTSxFQUFFQSxNQVBEO0FBUVBNLGVBQVMsRUFBRSxNQVJKO0FBU1BDLFlBQU0sRUFBRSxJQVREO0FBU087QUFDZEMsbUJBQWEsRUFBRSx3QkFWUjtBQVdQQyxrQkFBWSxFQUFFLEdBWFA7QUFZUEMsZUFBUyxFQUFFVDtBQVpKLEtBQVg7QUFjSCxHQWZELEVBaUJBUixXQUFXLENBQUNDLFNBQVosQ0FBc0JpQixJQUF0QixHQUE2QixZQUFXO0FBRXBDO0FBQ0EsUUFBSUMsV0FBVyxHQUFJLENBQ2Y7QUFBRUMsT0FBQyxFQUFFLE1BQUw7QUFBYUMsT0FBQyxFQUFFLEVBQWhCO0FBQXFCQyxPQUFDLEVBQUU7QUFBeEIsS0FEZSxFQUVmO0FBQUVGLE9BQUMsRUFBRSxNQUFMO0FBQWFDLE9BQUMsRUFBRSxFQUFoQjtBQUFxQkMsT0FBQyxFQUFFO0FBQXhCLEtBRmUsRUFHZjtBQUFFRixPQUFDLEVBQUUsTUFBTDtBQUFhQyxPQUFDLEVBQUUsRUFBaEI7QUFBcUJDLE9BQUMsRUFBRTtBQUF4QixLQUhlLEVBSWY7QUFBRUYsT0FBQyxFQUFFLE1BQUw7QUFBYUMsT0FBQyxFQUFFLEVBQWhCO0FBQXFCQyxPQUFDLEVBQUU7QUFBeEIsS0FKZSxFQUtmO0FBQUVGLE9BQUMsRUFBRSxNQUFMO0FBQWFDLE9BQUMsRUFBRSxFQUFoQjtBQUFxQkMsT0FBQyxFQUFFO0FBQXhCLEtBTGUsRUFNZjtBQUFFRixPQUFDLEVBQUUsTUFBTDtBQUFhQyxPQUFDLEVBQUUsR0FBaEI7QUFBcUJDLE9BQUMsRUFBRTtBQUF4QixLQU5lLEVBT2Y7QUFBRUYsT0FBQyxFQUFFLE1BQUw7QUFBYUMsT0FBQyxFQUFFLEVBQWhCO0FBQW9CQyxPQUFDLEVBQUU7QUFBdkIsS0FQZSxDQUFuQjtBQVNBLFFBQUlDLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBVyxTQUFYLENBQWI7QUFDTixRQUFJQyxVQUFVLEdBQUd6QixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssSUFBcEIsQ0FBeUIsUUFBekIsQ0FBakI7O0FBQ0EsUUFBSW9CLFVBQUosRUFBZ0I7QUFDZkQsWUFBTSxHQUFHQyxVQUFVLENBQUNDLEtBQVgsQ0FBaUIsR0FBakIsQ0FBVDtBQUNBOztBQUNLLFNBQUt2QixrQkFBTCxDQUF3QixlQUF4QixFQUF5Q2lCLFdBQXpDLEVBQXNELEdBQXRELEVBQTJELENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBM0QsRUFBdUUsQ0FBQyxXQUFELEVBQWMsWUFBZCxDQUF2RSxFQUFvR0ksTUFBcEc7QUFDSCxHQW5DRCxFQW9DQTtBQUNBeEIsR0FBQyxDQUFDQyxXQUFGLEdBQWdCLElBQUlBLFdBQUosRUFyQ2hCLEVBcUNpQ0QsQ0FBQyxDQUFDQyxXQUFGLENBQWMwQixXQUFkLEdBQTRCMUIsV0FyQzdEO0FBc0NILENBNUNBLENBNENDMkIsTUFBTSxDQUFDQyxNQTVDUixDQUFELEVBOENBO0FBQ0EsVUFBUzdCLENBQVQsRUFBWTtBQUNSOztBQUNBQSxHQUFDLENBQUNDLFdBQUYsQ0FBY2tCLElBQWQ7QUFDSCxDQUhELENBR0VTLE1BQU0sQ0FBQ0MsTUFIVCxDQS9DQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9jcm0tbGVhZHMuaW5pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRlbXBsYXRlIE5hbWU6IFVib2xkIC0gUmVzcG9uc2l2ZSBCb290c3RyYXAgNCBBZG1pbiBEYXNoYm9hcmRcclxuQXV0aG9yOiBDb2RlclRoZW1lc1xyXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cclxuQ29udGFjdDogc3VwcG9ydEBjb2RlcnRoZW1lcy5jb21cclxuRmlsZTogTGVhZHMgaW5pdCBqc1xyXG4qL1xyXG5cclxuIWZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBMZWFkc0NoYXJ0cyA9IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgLy9jcmVhdGVzIFN0YWNrZWQgY2hhcnRcclxuICAgIExlYWRzQ2hhcnRzLnByb3RvdHlwZS5jcmVhdGVTdGFja2VkQ2hhcnQgID0gZnVuY3Rpb24oZWxlbWVudCwgZGF0YSwgeGtleSwgeWtleXMsIGxhYmVscywgbGluZUNvbG9ycykge1xyXG4gICAgICAgIE1vcnJpcy5CYXIoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiBmYWxzZSxcclxuICAgICAgICAgICAgeGtleTogeGtleSxcclxuICAgICAgICAgICAgeWtleXM6IHlrZXlzLFxyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgaGlkZUhvdmVyOiAnYXV0bycsXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSwgLy9kZWZhdWx0ZWQgdG8gdHJ1ZVxyXG4gICAgICAgICAgICBncmlkTGluZUNvbG9yOiAncmdiYSg2NSwgODAsIDk1LCAwLjA3KScsXHJcbiAgICAgICAgICAgIGJhclNpemVSYXRpbzogMC4yLFxyXG4gICAgICAgICAgICBiYXJDb2xvcnM6IGxpbmVDb2xvcnNcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgTGVhZHNDaGFydHMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy9jcmVhdGluZyBTdGFja2VkIGNoYXJ0XHJcbiAgICAgICAgdmFyICRzdGNrZWREYXRhICA9IFtcclxuICAgICAgICAgICAgeyB5OiAnMjAxMicsIGE6IDc1LCAgYjogNjV9LFxyXG4gICAgICAgICAgICB7IHk6ICcyMDEzJywgYTogNTAsICBiOiA0MH0sXHJcbiAgICAgICAgICAgIHsgeTogJzIwMTQnLCBhOiA3NSwgIGI6IDY1fSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNScsIGE6IDUwLCAgYjogNDB9LFxyXG4gICAgICAgICAgICB7IHk6ICcyMDE2JywgYTogNzUsICBiOiA2NX0sXHJcbiAgICAgICAgICAgIHsgeTogJzIwMTcnLCBhOiAxMDAsIGI6IDkwfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxOCcsIGE6IDgwLCBiOiA2NX1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbJyM0YTgxZDQnLCcjZTNlYWVmJ107XHJcblx0XHR2YXIgZGF0YUNvbG9ycyA9ICQoXCIjbGVhZHMtc3RhdGljc1wiKS5kYXRhKCdjb2xvcnMnKTtcclxuXHRcdGlmIChkYXRhQ29sb3JzKSB7XHJcblx0XHRcdGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xyXG5cdFx0fVxyXG4gICAgICAgIHRoaXMuY3JlYXRlU3RhY2tlZENoYXJ0KCdsZWFkcy1zdGF0aWNzJywgJHN0Y2tlZERhdGEsICd5JywgWydhJywgJ2InXSwgW1wiV29uIExlYWRzXCIsIFwiTG9zdCBMZWFkc1wiXSwgY29sb3JzKTtcclxuICAgIH0sXHJcbiAgICAvL2luaXRcclxuICAgICQuTGVhZHNDaGFydHMgPSBuZXcgTGVhZHNDaGFydHMsICQuTGVhZHNDaGFydHMuQ29uc3RydWN0b3IgPSBMZWFkc0NoYXJ0c1xyXG59KHdpbmRvdy5qUXVlcnkpLFxyXG5cclxuLy9pbml0aWFsaXppbmcgXHJcbmZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgJC5MZWFkc0NoYXJ0cy5pbml0KCk7XHJcbn0od2luZG93LmpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/crm-leads.init.js\n");

/***/ }),

/***/ 11:
/*!****************************************************!*\
  !*** multi ./resources/js/pages/crm-leads.init.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\crm-leads.init.js */"./resources/js/pages/crm-leads.init.js");


/***/ })

/******/ });