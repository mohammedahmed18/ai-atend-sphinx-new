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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/widgets.init.js":
/*!********************************************!*\
  !*** ./resources/js/pages/widgets.init.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Widgets init js\r\n*/\n$(document).ready(function () {\n  var DrawSparkline = function DrawSparkline() {\n    // Line Chart\n    var colors = ['#00acc1', '#f1556c'];\n    var dataColors = $(\"#lifetime-sales\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#lifetime-sales').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {\n      type: 'line',\n      width: \"100%\",\n      height: '220',\n      chartRangeMax: 50,\n      lineColor: colors[0],\n      fillColor: hexToRGB(colors[0], 0.3),\n      highlightLineColor: 'rgba(0,0,0,.1)',\n      highlightSpotColor: 'rgba(0,0,0,.2)',\n      maxSpotColor: false,\n      minSpotColor: false,\n      spotColor: false,\n      lineWidth: 1\n    });\n    $('#lifetime-sales').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {\n      type: 'line',\n      width: \"100%\",\n      height: '220',\n      chartRangeMax: 40,\n      lineColor: colors[1],\n      fillColor: hexToRGB(colors[1], 0.3),\n      composite: true,\n      highlightLineColor: 'rgba(0,0,0,.1)',\n      highlightSpotColor: 'rgba(0,0,0,.2)',\n      maxSpotColor: false,\n      minSpotColor: false,\n      spotColor: false,\n      lineWidth: 1\n    }); // Bar Chart\n\n    var colors = ['#00acc1'];\n    var dataColors = $(\"#income-amounts\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#income-amounts').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {\n      type: 'bar',\n      height: '220',\n      barWidth: '10',\n      barSpacing: '3',\n      barColor: colors\n    }); // Pie Chart\n\n    var colors = ['#00acc1', '#4b88e4', '#e3eaef', '#fd7e14'];\n    var dataColors = $(\"#total-users\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#total-users').sparkline([20, 40, 30, 10], {\n      type: 'pie',\n      width: '220',\n      height: '220',\n      sliceColors: colors\n    });\n  };\n\n  DrawSparkline();\n  var resizeChart;\n  $(window).resize(function (e) {\n    clearTimeout(resizeChart);\n    resizeChart = setTimeout(function () {\n      DrawSparkline();\n    }, 300);\n  });\n});\n/* utility function */\n\nfunction hexToRGB(hex, alpha) {\n  var r = parseInt(hex.slice(1, 3), 16),\n      g = parseInt(hex.slice(3, 5), 16),\n      b = parseInt(hex.slice(5, 7), 16);\n\n  if (alpha) {\n    return \"rgba(\" + r + \", \" + g + \", \" + b + \", \" + alpha + \")\";\n  } else {\n    return \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2lkZ2V0cy5pbml0LmpzP2I5YzkiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJEcmF3U3BhcmtsaW5lIiwiY29sb3JzIiwiZGF0YUNvbG9ycyIsImRhdGEiLCJzcGxpdCIsInNwYXJrbGluZSIsInR5cGUiLCJ3aWR0aCIsImhlaWdodCIsImNoYXJ0UmFuZ2VNYXgiLCJsaW5lQ29sb3IiLCJmaWxsQ29sb3IiLCJoZXhUb1JHQiIsImhpZ2hsaWdodExpbmVDb2xvciIsImhpZ2hsaWdodFNwb3RDb2xvciIsIm1heFNwb3RDb2xvciIsIm1pblNwb3RDb2xvciIsInNwb3RDb2xvciIsImxpbmVXaWR0aCIsImNvbXBvc2l0ZSIsImJhcldpZHRoIiwiYmFyU3BhY2luZyIsImJhckNvbG9yIiwic2xpY2VDb2xvcnMiLCJyZXNpemVDaGFydCIsIndpbmRvdyIsInJlc2l6ZSIsImUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGV4IiwiYWxwaGEiLCJyIiwicGFyc2VJbnQiLCJzbGljZSIsImciLCJiIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU9BQSxDQUFDLENBQUVDLFFBQUYsQ0FBRCxDQUFjQyxLQUFkLENBQW9CLFlBQVc7QUFFM0IsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBYjtBQUNBLFFBQUlDLFVBQVUsR0FBR0wsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJNLElBQXJCLENBQTBCLFFBQTFCLENBQWpCOztBQUNBLFFBQUlELFVBQUosRUFBZ0I7QUFDWkQsWUFBTSxHQUFHQyxVQUFVLENBQUNFLEtBQVgsQ0FBaUIsR0FBakIsQ0FBVDtBQUNIOztBQUNEUCxLQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsU0FBckIsQ0FBK0IsQ0FBQyxDQUFELEVBQUksRUFB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Q0FBVCxHQUFhLElBQWIsR0FBb0JHLENBQXBCLEdBQXdCLElBQXhCLEdBQStCQyxDQUEvQixHQUFtQyxHQUExQztBQUNIO0FBQ0oiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvd2lkZ2V0cy5pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBXaWRnZXRzIGluaXQganNcclxuKi9cclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgdmFyIERyYXdTcGFya2xpbmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBMaW5lIENoYXJ0XHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzAwYWNjMScsICcjZjE1NTZjJ107XHJcbiAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI2xpZmV0aW1lLXNhbGVzXCIpLmRhdGEoJ2NvbG9ycycpO1xyXG4gICAgICAgIGlmIChkYXRhQ29sb3JzKSB7XHJcbiAgICAgICAgICAgIGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbGlmZXRpbWUtc2FsZXMnKS5zcGFya2xpbmUoWzAsIDIzLCA0MywgMzUsIDQ0LCA0NSwgNTYsIDM3LCA0MF0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzIyMCcsXHJcbiAgICAgICAgICAgIGNoYXJ0UmFuZ2VNYXg6IDUwLFxyXG4gICAgICAgICAgICBsaW5lQ29sb3I6IGNvbG9yc1swXSxcclxuICAgICAgICAgICAgZmlsbENvbG9yOiBoZXhUb1JHQihjb2xvcnNbMF0sIDAuMyksXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodExpbmVDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICAgICAgICAgICAgaGlnaGxpZ2h0U3BvdENvbG9yOiAncmdiYSgwLDAsMCwuMiknLFxyXG4gICAgICAgICAgICBtYXhTcG90Q29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcG90Q29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2xpZmV0aW1lLXNhbGVzJykuc3BhcmtsaW5lKFsyNSwgMjMsIDI2LCAyNCwgMjUsIDMyLCAzMCwgMjQsIDE5XSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjIwJyxcclxuICAgICAgICAgICAgY2hhcnRSYW5nZU1heDogNDAsXHJcbiAgICAgICAgICAgIGxpbmVDb2xvcjogY29sb3JzWzFdLFxyXG4gICAgICAgICAgICBmaWxsQ29sb3I6IGhleFRvUkdCKGNvbG9yc1sxXSwgMC4zKSxcclxuICAgICAgICAgICAgY29tcG9zaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWdobGlnaHRMaW5lQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodFNwb3RDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcclxuICAgICAgICAgICAgbWF4U3BvdENvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbWluU3BvdENvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhciBDaGFydFxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbJyMwMGFjYzEnXTtcclxuICAgICAgICB2YXIgZGF0YUNvbG9ycyA9ICQoXCIjaW5jb21lLWFtb3VudHNcIikuZGF0YSgnY29sb3JzJyk7XHJcbiAgICAgICAgaWYgKGRhdGFDb2xvcnMpIHtcclxuICAgICAgICAgICAgY29sb3JzID0gZGF0YUNvbG9ycy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNpbmNvbWUtYW1vdW50cycpLnNwYXJrbGluZShbMywgNiwgNywgOCwgNiwgNCwgNywgMTAsIDEyLCA3LCA0LCA5LCAxMiwgMTMsIDExLCAxMl0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzIyMCcsXHJcbiAgICAgICAgICAgIGJhcldpZHRoOiAnMTAnLFxyXG4gICAgICAgICAgICBiYXJTcGFjaW5nOiAnMycsXHJcbiAgICAgICAgICAgIGJhckNvbG9yOiBjb2xvcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUGllIENoYXJ0XHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzAwYWNjMScsJyM0Yjg4ZTQnLCcjZTNlYWVmJywnI2ZkN2UxNCddO1xyXG4gICAgICAgIHZhciBkYXRhQ29sb3JzID0gJChcIiN0b3RhbC11c2Vyc1wiKS5kYXRhKCdjb2xvcnMnKTtcclxuICAgICAgICBpZiAoZGF0YUNvbG9ycykge1xyXG4gICAgICAgICAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3RvdGFsLXVzZXJzJykuc3BhcmtsaW5lKFsyMCwgNDAsIDMwLCAxMF0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjIwJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjIwJyxcclxuICAgICAgICAgICAgc2xpY2VDb2xvcnM6IGNvbG9yc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgRHJhd1NwYXJrbGluZSgpO1xyXG4gICAgXHJcbiAgICB2YXIgcmVzaXplQ2hhcnQ7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZUNoYXJ0KTtcclxuICAgICAgICByZXNpemVDaGFydCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIERyYXdTcGFya2xpbmUoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyogdXRpbGl0eSBmdW5jdGlvbiAqL1xyXG5cclxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4LCBhbHBoYSkge1xyXG4gICAgdmFyIHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSxcclxuICAgICAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXHJcbiAgICAgICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xyXG5cclxuICAgIGlmIChhbHBoYSkge1xyXG4gICAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/widgets.init.js\n");

/***/ }),

/***/ 60:
/*!**************************************************!*\
  !*** multi ./resources/js/pages/widgets.init.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\widgets.init.js */"./resources/js/pages/widgets.init.js");


/***/ })

/******/ });