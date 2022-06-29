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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/crm-dashboard.init.js":
/*!**************************************************!*\
  !*** ./resources/js/pages/crm-dashboard.init.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: CRM Dashboard init\r\n*/\n//\n// Candlestick Chart - 1\n//\nvar colors = ['#6658dd', '#1abc9c'];\nvar dataColors = $(\"#sales-analytics\").data('colors');\n\nif (dataColors) {\n  colors = dataColors.split(\",\");\n}\n\nvar options = {\n  chart: {\n    height: 385,\n    type: 'candlestick'\n  },\n  plotOptions: {\n    candlestick: {\n      colors: {\n        upward: colors[0],\n        downward: colors[1]\n      }\n    }\n  },\n  series: [{\n    data: seriesData\n  }],\n  stroke: {\n    show: true,\n    colors: '#f1f3fa',\n    width: [1, 4]\n  },\n  xaxis: {\n    type: 'datetime'\n  },\n  grid: {\n    borderColor: '#f1f3fa'\n  }\n};\nvar chart = new ApexCharts(document.querySelector(\"#sales-analytics\"), options);\nchart.render(); //\n// Sales Analytics\n//\n\nvar colors = ['#1abc9c', '#4a81d4'];\nvar dataColors = $(\"#deal-analytics\").data('colors');\n\nif (dataColors) {\n  colors = dataColors.split(\",\");\n}\n\nvar options = {\n  series: [{\n    name: 'Won',\n    type: 'column',\n    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]\n  }, {\n    name: 'Loss',\n    type: 'line',\n    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]\n  }],\n  chart: {\n    height: 370,\n    type: 'line'\n  },\n  stroke: {\n    width: [2, 3]\n  },\n  plotOptions: {\n    bar: {\n      columnWidth: '50%'\n    }\n  },\n  colors: colors,\n  dataLabels: {\n    enabled: true,\n    enabledOnSeries: [1]\n  },\n  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],\n  xaxis: {\n    type: 'datetime'\n  },\n  legend: {\n    offsetY: 7\n  },\n  grid: {\n    padding: {\n      bottom: 20\n    }\n  },\n  fill: {\n    type: 'gradient',\n    gradient: {\n      shade: 'light',\n      type: \"horizontal\",\n      shadeIntensity: 0.25,\n      gradientToColors: undefined,\n      inverseColors: true,\n      opacityFrom: 0.75,\n      opacityTo: 0.75,\n      stops: [0, 0, 0]\n    }\n  },\n  yaxis: [{\n    title: {\n      text: 'Net Revenue'\n    }\n  }, {\n    opposite: true,\n    title: {\n      text: 'Number of Sales'\n    }\n  }]\n};\nvar chart = new ApexCharts(document.querySelector(\"#deal-analytics\"), options);\nchart.render(); //\n// Radialbar Chart - 3\n//\n\nvar colors = ['#f1556c'];\nvar dataColors = $(\"#campaigns-ratio-chart\").data('colors');\n\nif (dataColors) {\n  colors = dataColors.split(\",\");\n}\n\nvar options = {\n  chart: {\n    height: 285,\n    type: 'radialBar'\n  },\n  plotOptions: {\n    radialBar: {\n      startAngle: -135,\n      endAngle: 135,\n      dataLabels: {\n        name: {\n          fontSize: '16px',\n          color: undefined,\n          offsetY: 120\n        },\n        value: {\n          offsetY: 76,\n          fontSize: '22px',\n          color: undefined,\n          formatter: function formatter(val) {\n            return val + \"%\";\n          }\n        }\n      }\n    }\n  },\n  fill: {\n    gradient: {\n      enabled: true,\n      shade: 'dark',\n      shadeIntensity: 0.15,\n      inverseColors: false,\n      opacityFrom: 1,\n      opacityTo: 1,\n      stops: [0, 50, 65, 91]\n    }\n  },\n  stroke: {\n    dashArray: 4\n  },\n  colors: colors,\n  series: [67],\n  labels: ['Campaigns Ratio'],\n  responsive: [{\n    breakpoint: 380,\n    options: {\n      chart: {\n        height: 180\n      }\n    }\n  }]\n};\nvar chart = new ApexCharts(document.querySelector(\"#campaigns-ratio-chart\"), options);\nchart.render();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY3JtLWRhc2hib2FyZC5pbml0LmpzP2Q4MTYiXSwibmFtZXMiOlsiY29sb3JzIiwiZGF0YUNvbG9ycyIsIiQiLCJkYXRhIiwic3BsaXQiLCJvcHRpb25zIiwiY2hhcnQiLCJoZWlnaHQiLCJ0eXBlIiwicGxvdE9wdGlvbnMiLCJjYW5kbGVzdGljayIsInVwd2FyZCIsImRvd253YXJkIiwic2VyaWVzIiwic2VyaWVzRGF0YSIsInN0cm9rZSIsInNob3ciLCJ3aWR0aCIsInhheGlzIiwiZ3JpZCIsImJvcmRlckNvbG9yIiwiQXBleENoYXJ0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbmRlciIsIm5hbWUiLCJiYXIiLCJjb2x1bW5XaWR0aCIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwiZW5hYmxlZE9uU2VyaWVzIiwibGFiZWxzIiwibGVnZW5kIiwib2Zmc2V0WSIsInBhZGRpbmciLCJib3R0b20iLCJmaWxsIiwiZ3JhZGllbnQiLCJzaGFkZSIsInNoYWRlSW50ZW5zaXR5IiwiZ3JhZGllbnRUb0NvbG9ycyIsInVuZGVmaW5lZCIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJvcHBvc2l0ZSIsInJhZGlhbEJhciIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsImZvbnRTaXplIiwiY29sb3IiLCJ2YWx1ZSIsImZvcm1hdHRlciIsInZhbCIsImRhc2hBcnJheSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBVyxTQUFYLENBQWI7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCQyxJQUF0QixDQUEyQixRQUEzQixDQUFqQjs7QUFDQSxJ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LEVBQUU7QUFDSEMsY0FBTSxFQUFFO0FBREw7QUFERjtBQUZBLEdBQUQ7QUEzQ0YsQ0FBZDtBQXFEQSxJQUFJRCxLQUFLLEdBQUcsSUFBSWUsVUFBSixDQUNSQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBRFEsRUFFUmxCLE9BRlEsQ0FBWjtBQUtBQyxLQUFLLENBQUNrQixNQUFOIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NybS1kYXNoYm9hcmQuaW5pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRlbXBsYXRlIE5hbWU6IFVib2xkIC0gUmVzcG9uc2l2ZSBCb290c3RyYXAgNCBBZG1pbiBEYXNoYm9hcmRcclxuQXV0aG9yOiBDb2RlclRoZW1lc1xyXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cclxuQ29udGFjdDogc3VwcG9ydEBjb2RlcnRoZW1lcy5jb21cclxuRmlsZTogQ1JNIERhc2hib2FyZCBpbml0XHJcbiovXHJcblxyXG5cclxuLy9cclxuLy8gQ2FuZGxlc3RpY2sgQ2hhcnQgLSAxXHJcbi8vXHJcbnZhciBjb2xvcnMgPSBbJyM2NjU4ZGQnLCcjMWFiYzljJ107XHJcbnZhciBkYXRhQ29sb3JzID0gJChcIiNzYWxlcy1hbmFseXRpY3NcIikuZGF0YSgnY29sb3JzJyk7XHJcbmlmIChkYXRhQ29sb3JzKSB7XHJcbiAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcclxufVxyXG52YXIgb3B0aW9ucyA9IHtcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODUsXHJcbiAgICAgICAgdHlwZTogJ2NhbmRsZXN0aWNrJyxcclxuICAgIH0sXHJcbiAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIGNhbmRsZXN0aWNrOiB7XHJcbiAgICAgICAgICAgIGNvbG9yczoge1xyXG4gICAgICAgICAgICAgICAgdXB3YXJkOiBjb2xvcnNbMF0sXHJcbiAgICAgICAgICAgICAgICBkb3dud2FyZDogY29sb3JzWzFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIGRhdGE6IHNlcmllc0RhdGFcclxuICAgIH1dLFxyXG5cclxuICAgIHN0cm9rZToge1xyXG4gICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgY29sb3JzOiAnI2YxZjNmYScsXHJcbiAgICAgICAgd2lkdGg6IFsxLCA0XVxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lJ1xyXG4gICAgfSxcclxuICAgIGdyaWQ6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNmMWYzZmEnXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYWxlcy1hbmFseXRpY3NcIiksXHJcbiAgICBvcHRpb25zXHJcbik7XHJcblxyXG5jaGFydC5yZW5kZXIoKTtcclxuXHJcbi8vXHJcbi8vIFNhbGVzIEFuYWx5dGljc1xyXG4vL1xyXG52YXIgY29sb3JzID0gWycjMWFiYzljJywgJyM0YTgxZDQnXTtcclxudmFyIGRhdGFDb2xvcnMgPSAkKFwiI2RlYWwtYW5hbHl0aWNzXCIpLmRhdGEoJ2NvbG9ycycpO1xyXG5pZiAoZGF0YUNvbG9ycykge1xyXG5cdGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xyXG59XHJcblxyXG52YXIgb3B0aW9ucyA9IHtcclxuXHRzZXJpZXM6IFt7XHJcblx0XHRuYW1lOiAnV29uJyxcclxuXHRcdHR5cGU6ICdjb2x1bW4nLFxyXG5cdFx0ZGF0YTogWzQ0MCwgNTA1LCA0MTQsIDY3MSwgMjI3LCA0MTMsIDIwMSwgMzUyLCA3NTIsIDMyMCwgMjU3LCAxNjBdXHJcblx0fSwge1xyXG5cdFx0bmFtZTogJ0xvc3MnLFxyXG5cdFx0dHlwZTogJ2xpbmUnLFxyXG5cdFx0ZGF0YTogWzIzLCA0MiwgMzUsIDI3LCA0MywgMjIsIDE3LCAzMSwgMjIsIDIyLCAxMiwgMTZdXHJcblx0fV0sXHJcblx0Y2hhcnQ6IHtcclxuXHRcdGhlaWdodDogMzcwLFxyXG5cdFx0dHlwZTogJ2xpbmUnLFxyXG5cdH0sXHJcblx0c3Ryb2tlOiB7XHJcblx0XHR3aWR0aDogWzIsIDNdXHJcblx0fSxcclxuXHRwbG90T3B0aW9uczoge1xyXG5cdFx0YmFyOiB7XHJcblx0XHRcdGNvbHVtbldpZHRoOiAnNTAlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29sb3JzOiBjb2xvcnMsXHJcblx0ZGF0YUxhYmVsczoge1xyXG5cdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdGVuYWJsZWRPblNlcmllczogWzFdXHJcblx0fSxcclxuXHRsYWJlbHM6IFsnMDEgSmFuIDIwMDEnLCAnMDIgSmFuIDIwMDEnLCAnMDMgSmFuIDIwMDEnLCAnMDQgSmFuIDIwMDEnLCAnMDUgSmFuIDIwMDEnLCAnMDYgSmFuIDIwMDEnLCAnMDcgSmFuIDIwMDEnLCAnMDggSmFuIDIwMDEnLCAnMDkgSmFuIDIwMDEnLCAnMTAgSmFuIDIwMDEnLCAnMTEgSmFuIDIwMDEnLCAnMTIgSmFuIDIwMDEnXSxcclxuXHR4YXhpczoge1xyXG5cdFx0dHlwZTogJ2RhdGV0aW1lJ1xyXG5cdH0sXHJcblx0bGVnZW5kOiB7XHJcbiAgICAgICAgb2Zmc2V0WTogNyxcclxuXHR9LFxyXG5cdGdyaWQ6IHtcclxuXHRcdHBhZGRpbmc6IHtcclxuXHRcdCAgYm90dG9tOiAyMFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZmlsbDoge1xyXG5cdFx0dHlwZTogJ2dyYWRpZW50JyxcclxuXHRcdGdyYWRpZW50OiB7XHJcblx0XHRcdHNoYWRlOiAnbGlnaHQnLFxyXG5cdFx0XHR0eXBlOiBcImhvcml6b250YWxcIixcclxuXHRcdFx0c2hhZGVJbnRlbnNpdHk6IDAuMjUsXHJcblx0XHRcdGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCxcclxuXHRcdFx0aW52ZXJzZUNvbG9yczogdHJ1ZSxcclxuXHRcdFx0b3BhY2l0eUZyb206IDAuNzUsXHJcblx0XHRcdG9wYWNpdHlUbzogMC43NSxcclxuXHRcdFx0c3RvcHM6IFswLCAwLCAwXVxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHlheGlzOiBbe1xyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0dGV4dDogJ05ldCBSZXZlbnVlJyxcclxuXHRcdH0sXHJcblxyXG5cdH0sIHtcclxuXHRcdG9wcG9zaXRlOiB0cnVlLFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0dGV4dDogJ051bWJlciBvZiBTYWxlcydcclxuXHRcdH1cclxuXHR9XVxyXG59O1xyXG5cclxudmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWFsLWFuYWx5dGljc1wiKSwgb3B0aW9ucyk7XHJcbmNoYXJ0LnJlbmRlcigpO1xyXG5cclxuXHJcblxyXG4vL1xyXG4vLyBSYWRpYWxiYXIgQ2hhcnQgLSAzXHJcbi8vXHJcbnZhciBjb2xvcnMgPSBbJyNmMTU1NmMnXTtcclxudmFyIGRhdGFDb2xvcnMgPSAkKFwiI2NhbXBhaWducy1yYXRpby1jaGFydFwiKS5kYXRhKCdjb2xvcnMnKTtcclxuaWYgKGRhdGFDb2xvcnMpIHtcclxuICAgIGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xyXG59XHJcbnZhciBvcHRpb25zID0ge1xyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDI4NSxcclxuICAgICAgICB0eXBlOiAncmFkaWFsQmFyJyxcclxuICAgIH0sXHJcbiAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIHJhZGlhbEJhcjoge1xyXG4gICAgICAgICAgICBzdGFydEFuZ2xlOiAtMTM1LFxyXG4gICAgICAgICAgICBlbmRBbmdsZTogMTM1LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDEyMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogNzYsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgXCIlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZpbGw6IHtcclxuICAgICAgICBncmFkaWVudDoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzaGFkZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMC4xNSxcclxuICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogZmFsc2UsXHJcbiAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAxLFxyXG4gICAgICAgICAgICBvcGFjaXR5VG86IDEsXHJcbiAgICAgICAgICAgIHN0b3BzOiBbMCwgNTAsIDY1LCA5MV1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHN0cm9rZToge1xyXG4gICAgICAgIGRhc2hBcnJheTogNFxyXG4gICAgfSxcclxuICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgc2VyaWVzOiBbNjddLFxyXG4gICAgbGFiZWxzOiBbJ0NhbXBhaWducyBSYXRpbyddLFxyXG4gICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICBicmVha3BvaW50OiAzODAsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn1cclxuXHJcbnZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW1wYWlnbnMtcmF0aW8tY2hhcnRcIiksXHJcbiAgICBvcHRpb25zXHJcbik7XHJcblxyXG5jaGFydC5yZW5kZXIoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/crm-dashboard.init.js\n");

/***/ }),

/***/ 10:
/*!********************************************************!*\
  !*** multi ./resources/js/pages/crm-dashboard.init.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\crm-dashboard.init.js */"./resources/js/pages/crm-dashboard.init.js");


/***/ })

/******/ });