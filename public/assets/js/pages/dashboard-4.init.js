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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/dashboard-4.init.js":
/*!************************************************!*\
  !*** ./resources/js/pages/dashboard-4.init.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Dashboard 4 init\r\n*/\n!function ($) {\n  \"use strict\";\n\n  var Dashboard4 = function Dashboard4() {}; //creates Bar chart\n\n\n  Dashboard4.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {\n    Morris.Bar({\n      element: element,\n      data: data,\n      xkey: xkey,\n      ykeys: ykeys,\n      labels: labels,\n      dataLabels: false,\n      hideHover: 'auto',\n      resize: true,\n      //defaulted to true\n      gridLineColor: 'rgba(65, 80, 95, 0.07)',\n      barSizeRatio: 0.2,\n      barColors: lineColors\n    });\n  }, //creates area chart with dotted\n  Dashboard4.prototype.createAreaChartDotted = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {\n    Morris.Area({\n      element: element,\n      pointSize: 3,\n      lineWidth: 1,\n      data: data,\n      xkey: xkey,\n      ykeys: ykeys,\n      labels: labels,\n      dataLabels: false,\n      hideHover: 'auto',\n      pointFillColors: Pfillcolor,\n      pointStrokeColors: Pstockcolor,\n      resize: true,\n      smooth: false,\n      gridLineColor: 'rgba(65, 80, 95, 0.07)',\n      lineColors: lineColors\n    });\n  }, //creates Donut chart\n  Dashboard4.prototype.createDonutChart = function (element, data, colors) {\n    Morris.Donut({\n      element: element,\n      data: data,\n      barSize: 0.2,\n      resize: true,\n      //defaulted to true\n      colors: colors,\n      backgroundColor: 'transparent'\n    });\n  }, Dashboard4.prototype.init = function () {\n    //creating bar chart\n    var $barData = [{\n      y: '2012',\n      a: 87\n    }, {\n      y: '2013',\n      a: 75\n    }, {\n      y: '2014',\n      a: 50\n    }, {\n      y: '2015',\n      a: 75\n    }, {\n      y: '2016',\n      a: 50\n    }, {\n      y: '2017',\n      a: 38\n    }, {\n      y: '2018',\n      a: 72\n    }];\n    var colors = ['#02c0ce'];\n    var dataColors = $(\"#statistics-chart\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    this.createBarChart('statistics-chart', $barData, 'y', ['a'], [\"Statistics\"], colors); //creating area chart with dotted\n\n    var $areaDotData = [{\n      y: '2012',\n      a: 10,\n      b: 20\n    }, {\n      y: '2013',\n      a: 75,\n      b: 65\n    }, {\n      y: '2014',\n      a: 50,\n      b: 40\n    }, {\n      y: '2015',\n      a: 75,\n      b: 65\n    }, {\n      y: '2016',\n      a: 50,\n      b: 40\n    }, {\n      y: '2017',\n      a: 75,\n      b: 65\n    }, {\n      y: '2018',\n      a: 90,\n      b: 60\n    }];\n    var colors = ['#4a81d4', \"#e3eaef\"];\n    var dataColors = $(\"#income-amounts\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    this.createAreaChartDotted('income-amounts', 0, 0, $areaDotData, 'y', ['a', 'b'], [\"Bitcoin\", \"Litecoin\"], ['#ffffff'], ['#999999'], colors); //creating donut chart\n\n    var $donutData = [{\n      label: \" Total Sales \",\n      value: 12\n    }, {\n      label: \" Campaign Send\",\n      value: 30\n    }, {\n      label: \" Daily Sales \",\n      value: 20\n    }];\n    var colors = ['#4fc6e1', '#6658dd', '#ebeff2'];\n    var dataColors = $(\"#lifetime-sales\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    this.createDonutChart('lifetime-sales', $donutData, colors);\n  }, //init\n  $.Dashboard4 = new Dashboard4(), $.Dashboard4.Constructor = Dashboard4;\n}(window.jQuery), //initializing \nfunction ($) {\n  \"use strict\";\n\n  $.Dashboard4.init();\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkLTQuaW5pdC5qcz81ZGE3Il0sIm5hbWVzIjpbIiQiLCJEYXNoYm9hcmQ0IiwicHJvdG90eXBlIiwiY3JlYXRlQmFyQ2hhcnQiLCJlbGVtZW50IiwiZGF0YSIsInhrZXkiLCJ5a2V5cyIsImxhYmVscyIsImxpbmVDb2xvcnMiLCJNb3JyaXMiLCJCYXIiLCJkYXRhTGFiZWxzIiwiaGlkZUhvdmVyIiwicmVzaXplIiwiZ3JpZExpbmVDb2xvciIsImJhclNpemVSYXRpbyIsImJhckNvbG9ycyIsImNyZWF0ZUFyZWFDaGFydERvdHRlZCIsInBvaW50U2l6ZSIsImxpbmVXaWR0aCIsIlBmaWxsY29sb3IiLCJQc3RvY2tjb2xvciIsIkFyZWEiLCJwb2ludEZpbGxDb2xvcnMiLCJwb2ludFN0cm9rZUNvbG9ycyIsInNtb290aCIsImNyZWF0ZURvbnV0Q2hhcnQiLCJjb2xvcnMiLCJEb251dCIsImJhclNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbml0IiwiJGJhckRhdGEiLCJ5IiwiYSIsImRhdGFDb2xvcnMiLCJzcGxpdCIsIiRhcmVhRG90RGF0YSIsImIiLCIkZG9udXREYXRhIiwibGFiZWwiLCJ2YWx1ZSIsIkNvbnN0cnVjdG9yIiwid2luZG93IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQVFBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1Q7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVyxDQUFFLENBQTlCLENBSFMsQ0FLVDs7O0FBQ0FBLFlBQVUsQ0FBQ0MsU0FBWCxDQUFxQkMsY0FBckIsR0FBdUMsVUFBU0MsT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0JDLElBQXhCLEVBQThCQyxLQUE5QixFQUFxQ0MsTUFBckMsRUFBNkNDLFVBQTdDLEVBQXlEO0FBQzVGQyxVQUFNLENBQUNDLEdBQVAsQ0FBVztBQUNQUCxhQUFPLEVBQUVBLE9BREY7QUFFUEMs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c0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBEYXNoYm9hcmQgNCBpbml0XHJcbiovXHJcblxyXG4hZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIERhc2hib2FyZDQgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgIC8vY3JlYXRlcyBCYXIgY2hhcnRcclxuICAgIERhc2hib2FyZDQucHJvdG90eXBlLmNyZWF0ZUJhckNoYXJ0ICA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRhdGEsIHhrZXksIHlrZXlzLCBsYWJlbHMsIGxpbmVDb2xvcnMpIHtcclxuICAgICAgICBNb3JyaXMuQmFyKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgeGtleTogeGtleSxcclxuICAgICAgICAgICAgeWtleXM6IHlrZXlzLFxyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YUxhYmVsczogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVIb3ZlcjogJ2F1dG8nLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWUsIC8vZGVmYXVsdGVkIHRvIHRydWVcclxuICAgICAgICAgICAgZ3JpZExpbmVDb2xvcjogJ3JnYmEoNjUsIDgwLCA5NSwgMC4wNyknLFxyXG4gICAgICAgICAgICBiYXJTaXplUmF0aW86IDAuMixcclxuICAgICAgICAgICAgYmFyQ29sb3JzOiBsaW5lQ29sb3JzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vY3JlYXRlcyBhcmVhIGNoYXJ0IHdpdGggZG90dGVkXHJcbiAgICBEYXNoYm9hcmQ0LnByb3RvdHlwZS5jcmVhdGVBcmVhQ2hhcnREb3R0ZWQgPSBmdW5jdGlvbihlbGVtZW50LCBwb2ludFNpemUsIGxpbmVXaWR0aCwgZGF0YSwgeGtleSwgeWtleXMsIGxhYmVscywgUGZpbGxjb2xvciwgUHN0b2NrY29sb3IsIGxpbmVDb2xvcnMpIHtcclxuICAgICAgICBNb3JyaXMuQXJlYSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHBvaW50U2l6ZTogMyxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICB4a2V5OiB4a2V5LFxyXG4gICAgICAgICAgICB5a2V5czogeWtleXMsXHJcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUhvdmVyOiAnYXV0bycsXHJcbiAgICAgICAgICAgIHBvaW50RmlsbENvbG9yczogUGZpbGxjb2xvcixcclxuICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcnM6IFBzdG9ja2NvbG9yLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWUsXHJcbiAgICAgICAgICAgIHNtb290aDogZmFsc2UsXHJcbiAgICAgICAgICAgIGdyaWRMaW5lQ29sb3I6ICdyZ2JhKDY1LCA4MCwgOTUsIDAuMDcpJyxcclxuICAgICAgICAgICAgbGluZUNvbG9yczogbGluZUNvbG9yc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgICAgICBcclxuICAgIC8vY3JlYXRlcyBEb251dCBjaGFydFxyXG4gICAgRGFzaGJvYXJkNC5wcm90b3R5cGUuY3JlYXRlRG9udXRDaGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRhdGEsIGNvbG9ycykge1xyXG4gICAgICAgIE1vcnJpcy5Eb251dCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGJhclNpemU6IDAuMixcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlLCAvL2RlZmF1bHRlZCB0byB0cnVlXHJcbiAgICAgICAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBEYXNoYm9hcmQ0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpbmcgYmFyIGNoYXJ0XHJcbiAgICAgICAgdmFyICRiYXJEYXRhICA9IFtcclxuICAgICAgICAgICAgeyB5OiAnMjAxMicsIGE6IDg3fSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxMycsIGE6IDc1fSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNCcsIGE6IDUwfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNScsIGE6IDc1fSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNicsIGE6IDUwfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNycsIGE6IDM4fSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxOCcsIGE6IDcyfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzAyYzBjZSddO1xyXG5cdFx0dmFyIGRhdGFDb2xvcnMgPSAkKFwiI3N0YXRpc3RpY3MtY2hhcnRcIikuZGF0YSgnY29sb3JzJyk7XHJcblx0XHRpZiAoZGF0YUNvbG9ycykge1xyXG5cdFx0XHRjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcclxuXHRcdH1cclxuICAgICAgICB0aGlzLmNyZWF0ZUJhckNoYXJ0KCdzdGF0aXN0aWNzLWNoYXJ0JywgJGJhckRhdGEsICd5JywgWydhJ10sIFtcIlN0YXRpc3RpY3NcIl0sIGNvbG9ycyk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpbmcgYXJlYSBjaGFydCB3aXRoIGRvdHRlZFxyXG4gICAgICAgIHZhciAkYXJlYURvdERhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgeTogJzIwMTInLCBhOiAxMCwgYjogMjAgfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxMycsIGE6IDc1LCAgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNCcsIGE6IDUwLCAgYjogNDAgfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNScsIGE6IDc1LCAgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNicsIGE6IDUwLCAgYjogNDAgfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxNycsIGE6IDc1LCAgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiAnMjAxOCcsIGE6IDkwLCBiOiA2MCB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgY29sb3JzID0gWycjNGE4MWQ0JywgXCIjZTNlYWVmXCJdO1xyXG5cdFx0dmFyIGRhdGFDb2xvcnMgPSAkKFwiI2luY29tZS1hbW91bnRzXCIpLmRhdGEoJ2NvbG9ycycpO1xyXG5cdFx0aWYgKGRhdGFDb2xvcnMpIHtcclxuXHRcdFx0Y29sb3JzID0gZGF0YUNvbG9ycy5zcGxpdChcIixcIik7XHJcblx0XHR9XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBcmVhQ2hhcnREb3R0ZWQoJ2luY29tZS1hbW91bnRzJywgMCwgMCwgJGFyZWFEb3REYXRhLCAneScsIFsnYScsICdiJ10sIFtcIkJpdGNvaW5cIixcIkxpdGVjb2luXCJdLFsnI2ZmZmZmZiddLFsnIzk5OTk5OSddLCBjb2xvcnMpO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW5nIGRvbnV0IGNoYXJ0XHJcbiAgICAgICAgdmFyICRkb251dERhdGEgPSBbXHJcbiAgICAgICAgICAgIHtsYWJlbDogXCIgVG90YWwgU2FsZXMgXCIsIHZhbHVlOiAxMn0sXHJcbiAgICAgICAgICAgIHtsYWJlbDogXCIgQ2FtcGFpZ24gU2VuZFwiLCB2YWx1ZTogMzB9LFxyXG4gICAgICAgICAgICB7bGFiZWw6IFwiIERhaWx5IFNhbGVzIFwiLCB2YWx1ZTogMjB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgY29sb3JzID0gWycjNGZjNmUxJywnIzY2NThkZCcsICcjZWJlZmYyJ107XHJcblx0XHR2YXIgZGF0YUNvbG9ycyA9ICQoXCIjbGlmZXRpbWUtc2FsZXNcIikuZGF0YSgnY29sb3JzJyk7XHJcblx0XHRpZiAoZGF0YUNvbG9ycykge1xyXG5cdFx0XHRjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcclxuXHRcdH1cclxuICAgICAgICB0aGlzLmNyZWF0ZURvbnV0Q2hhcnQoJ2xpZmV0aW1lLXNhbGVzJywgJGRvbnV0RGF0YSwgY29sb3JzKTtcclxuICAgIH0sXHJcbiAgICAvL2luaXRcclxuICAgICQuRGFzaGJvYXJkNCA9IG5ldyBEYXNoYm9hcmQ0LCAkLkRhc2hib2FyZDQuQ29uc3RydWN0b3IgPSBEYXNoYm9hcmQ0XHJcbn0od2luZG93LmpRdWVyeSksXHJcblxyXG4vL2luaXRpYWxpemluZyBcclxuZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAkLkRhc2hib2FyZDQuaW5pdCgpO1xyXG59KHdpbmRvdy5qUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/dashboard-4.init.js\n");

/***/ }),

/***/ 17:
/*!******************************************************!*\
  !*** multi ./resources/js/pages/dashboard-4.init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\dashboard-4.init.js */"./resources/js/pages/dashboard-4.init.js");


/***/ })

/******/ });