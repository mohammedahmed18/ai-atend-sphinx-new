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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/dashboard-3.init.js":
/*!************************************************!*\
  !*** ./resources/js/pages/dashboard-3.init.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\nAuthor: CoderThemes\nWebsite: https://coderthemes.com/\nContact: support@coderthemes.com\nFile: Dashboard init\n*/\n!function ($) {\n  \"use strict\";\n\n  var ChartJs = function ChartJs() {\n    this.$body = $(\"body\"), this.charts = [];\n  };\n\n  ChartJs.prototype.respChart = function (selector, type, data, options) {\n    // get selector by context\n    var ctx = selector.get(0).getContext(\"2d\"); //default config\n\n    Chart.defaults.global.defaultFontColor = \"#8391a2\";\n    Chart.defaults.scale.gridLines.color = \"#8391a2\"; // pointing parent container to make chart js inherit its width\n\n    var container = $(selector).parent(); // this function produce the responsive Chart JS\n\n    function generateChart() {\n      // make chart width fit with its container\n      var ww = selector.attr('width', $(container).width());\n      var chart;\n\n      switch (type) {\n        case 'Line':\n          chart = new Chart(ctx, {\n            type: 'line',\n            data: data,\n            options: options\n          });\n          break;\n\n        case 'Doughnut':\n          chart = new Chart(ctx, {\n            type: 'doughnut',\n            data: data,\n            options: options\n          });\n          break;\n\n        case 'Pie':\n          chart = new Chart(ctx, {\n            type: 'pie',\n            data: data,\n            options: options\n          });\n          break;\n\n        case 'Bar':\n          chart = new Chart(ctx, {\n            type: 'bar',\n            data: data,\n            options: options\n          });\n          break;\n\n        case 'Radar':\n          chart = new Chart(ctx, {\n            type: 'radar',\n            data: data,\n            options: options\n          });\n          break;\n\n        case 'PolarArea':\n          chart = new Chart(ctx, {\n            data: data,\n            type: 'polarArea',\n            options: options\n          });\n          break;\n      }\n\n      return chart;\n    }\n\n    ; // run function - render chart at first load\n\n    return generateChart();\n  }, // init various charts and returns\n  ChartJs.prototype.initCharts = function () {\n    var charts = [];\n    var defaultColors = [\"#1abc9c\", \"#f1556c\", \"#4a81d4\", \"#e3eaef\"];\n\n    if ($('#revenue-chart').length > 0) {\n      var dataColors = $(\"#revenue-chart\").data('colors');\n      var colors = dataColors ? dataColors.split(\",\") : defaultColors.concat();\n      var lineChart = {\n        labels: [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"],\n        datasets: [{\n          label: \"Current Week\",\n          backgroundColor: hexToRGB(colors[0], 0.3),\n          borderColor: colors[0],\n          data: [32, 42, 42, 62, 52, 75, 62]\n        }, {\n          label: \"Previous Week\",\n          fill: true,\n          backgroundColor: 'transparent',\n          borderColor: colors[1],\n          borderDash: [5, 5],\n          data: [42, 58, 66, 93, 82, 105, 92]\n        }]\n      };\n      var lineOpts = {\n        maintainAspectRatio: false,\n        legend: {\n          display: false\n        },\n        tooltips: {\n          intersect: false\n        },\n        hover: {\n          intersect: true\n        },\n        plugins: {\n          filler: {\n            propagate: false\n          }\n        },\n        scales: {\n          xAxes: [{\n            reverse: true,\n            gridLines: {\n              color: \"rgba(0,0,0,0.05)\"\n            }\n          }],\n          yAxes: [{\n            ticks: {\n              stepSize: 20\n            },\n            display: true,\n            borderDash: [5, 5],\n            gridLines: {\n              color: \"rgba(0,0,0,0)\",\n              fontColor: '#fff'\n            }\n          }]\n        }\n      };\n      charts.push(this.respChart($(\"#revenue-chart\"), 'Line', lineChart, lineOpts));\n    } //barchart\n\n\n    if ($('#projections-actuals-chart').length > 0) {\n      var dataColors = $(\"#projections-actuals-chart\").data('colors');\n      var colors = dataColors ? dataColors.split(\",\") : defaultColors.concat();\n      var barChart = {\n        // labels: [\"01\", \"02\", \"03\", \"04\", \"05\", \"06\", \"07\", \"08\", \"09\", \"10\", \"11\", \"12\"],\n        labels: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n        datasets: [{\n          label: \"Sales Analytics\",\n          backgroundColor: colors[0],\n          borderColor: colors[0],\n          hoverBackgroundColor: colors[0],\n          hoverBorderColor: colors[0],\n          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],\n          barPercentage: 0.7,\n          categoryPercentage: 0.5\n        }, {\n          label: \"Dollar Rate\",\n          backgroundColor: colors[1],\n          borderColor: colors[1],\n          hoverBackgroundColor: colors[1],\n          hoverBorderColor: colors[1],\n          data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],\n          barPercentage: 0.7,\n          categoryPercentage: 0.5\n        }]\n      };\n      var barOpts = {\n        maintainAspectRatio: false,\n        legend: {\n          display: false\n        },\n        scales: {\n          yAxes: [{\n            gridLines: {\n              display: false\n            },\n            stacked: false,\n            ticks: {\n              stepSize: 20\n            }\n          }],\n          xAxes: [{\n            stacked: false,\n            gridLines: {\n              color: \"rgba(0,0,0,0.01)\"\n            }\n          }]\n        }\n      };\n      charts.push(this.respChart($(\"#projections-actuals-chart\"), 'Bar', barChart, barOpts));\n    }\n\n    return charts;\n  }, //initializing various components and plugins\n  ChartJs.prototype.init = function () {\n    var $this = this; // font\n\n    Chart.defaults.global.defaultFontFamily = 'Nunito,sans-serif'; // init charts\n\n    $this.charts = this.initCharts(); // enable resizing matter\n\n    $(window).on('resize', function (e) {\n      $.each($this.charts, function (index, chart) {\n        try {\n          chart.destroy();\n        } catch (err) {}\n      });\n      $this.charts = $this.initCharts();\n    });\n  }, //init flotchart\n  $.ChartJs = new ChartJs(), $.ChartJs.Constructor = ChartJs;\n}(window.jQuery), //initializing ChartJs\nfunction ($) {\n  \"use strict\";\n\n  $.ChartJs.init();\n}(window.jQuery);\n/* utility function */\n\nfunction hexToRGB(hex, alpha) {\n  var r = parseInt(hex.slice(1, 3), 16),\n      g = parseInt(hex.slice(3, 5), 16),\n      b = parseInt(hex.slice(5, 7), 16);\n\n  if (alpha) {\n    return \"rgba(\" + r + \", \" + g + \", \" + b + \", \" + alpha + \")\";\n  } else {\n    return \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZGFzaGJvYXJkLTMuaW5pdC5qcz9lMzBmIl0sIm5hbWVzIjpbIiQiLCJDaGFydEpzIiwiJGJvZHkiLCJjaGFydHMiLCJwcm90b3R5cGUiLCJyZXNwQ2hhcnQiLCJzZWxlY3RvciIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsImN0eCIsImdldCIsImdldENvbnRleHQiLCJDaGFydCIsImRlZmF1bHRzIiwiZ2xvYmFsIiwiZGVmYXVsdEZvbnRDb2xvciIsInNjYWxlIiwiZ3JpZExpbmVzIiwiY29sb3IiLCJjb250YWluZXIiLCJwYXJlbnQiLCJnZW5lcmF0ZUNoYXJ0Iiwid3ciLCJhdHRyIiwid2lkdGgiLCJjaGFydCIsImluaXRDaGFydHMiLCJkZWZhdWx0Q29sb3JzIiwibGVuZ3RoIiwiZGF0YUNvbG9ycyIsImNvbG9ycyIsInNwbGl0IiwiY29uY2F0IiwibGluZUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImhleFRvUkdCIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwiYm9yZGVyRGFzaCIsImxpbmVPcHRzIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImxlZ2VuZCIsImRpc3BsYXkiLCJ0b29sdGlwcyIsImludGVyc2VjdCIsImhvdmVyIiwicGx1Z2lucyIsImZpbGxlciIsInByb3BhZ2F0ZSIsInNjYWxlcyIsInhBeGVzIiwicmV2ZXJzZSIsInlBeGVzIiwidGlja3MiLCJzdGVwU2l6ZSIsImZvbnRDb2xvciIsInB1c2giLCJiYXJDaGFydCIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsImJhclBlcmNlbnRhZ2UiLCJjYXRlZ29yeVBlcmNlbnRhZ2UiLCJiYXJPcHRzIiwic3RhY2tlZCIsImluaXQiLCIkdGhpcyIsImRlZmF1bHRGb250RmFtaWx5Iiwid2luZG93Iiwib24iLCJlIiwiZWFjaCIsImluZGV4IiwiZGVzdHJveSIsImVyciIsIkNvbnN0cnVjdG9yIiwialF1ZXJ5IiwiaGV4IiwiYWxwaGEiLCJyIiwicGFyc2VJbnQiLCJzbGljZSIsImciLCJiIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQVFBLENBQUUsVUFBVUEsQ0FBVixFQUFhO0FBQ1g7O0FBRUEsTUFBSUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBWTtBQUN0QixTQUFLQyxLQUFMLEdBQWFGLENBQUMsQ0FBQyxNQUFELENBQWQsRUFDSSxLQUFLRyxNQUFMLEdBQWMsRUFEbEI7QUFFSCxHQUhEOztBQUtBRixTQUFPLENBQUNHLFNBQVIsQ0FBa0JDLFNBQWxCLEdBQThCLFVBQVVDLFFBQVYsRUFBb0JDLElBQXBCLEVBQTBCQyxJQUExQixFQUFnQ0MsT0FBaEMsRUFBeUM7QUFFbkU7QUFDQSxRQUFJQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLENBQWIsRUFBZ0JDLFVBQWhCLENBQTJCLElBQTNCLENBQVYsQ0FIbUUsQ0FLbkU7O0FBQ0FDLFNBQUssQ0FBQ0MsUUFBTixDQUFlQyxNQUFmLENBQXNCQyxnQkFBdEIsR0FBeUMsU0FBekM7QUFDQUgsU0FBSyxDQUFDQyxRQUFOLENBQWVHLEtBQWYsQ0FBcUJDLFNBQXJCLENBQStCQyxLQUEvQixHQUF1QyxTQUF2QyxDQVBtRSxDQVNuRTs7QUFDQSxRQUFJQyxTQUFTLEdBQUdwQixDQUFDLENBQUNNLFFBQUQsQ0FBRCxDQUFZZSxNQUFaLEVBQWhCLENBVm1FLENBWW5FOztBQUVBLGFBQVNDLGFBQVQsR0FBeUI7QUFDckI7QUFDQSxVQUFJQyxFQUFFLEdBQUdqQixRQUFRLENBQUNrQixJQUFULENBQWMsT0FBZCxFQUF1QnhCLENBQUMsQ0FBQ29CLFNBQUQsQ0FBRCxDQUFhSyxLQUFiLEVBQXZCLENBQVQ7QUFDQSxVQUFJQyxLQUFKOztBQUNBLGNBQVFuQixJQUFSO0FBQ0ksYUFBSyxNQUFMO0FBQ0ltQixlQUFLLEdBQUcsSUFBSWIsS0FBSixDQUFVSCxHQUFWLEVBQWU7QUFBRUgsZ0JBQUksRUFB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QUFsQixDQURoQjtBQUFBLE1BRUlFLENBQUMsR0FBR0gsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBRmhCOztBQUlBLE1BQUlILEtBQUosRUFBVztBQUNQLFdBQU8sVUFBVUMsQ0FBVixHQUFjLElBQWQsR0FBcUJHLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDQyxDQUFoQyxHQUFvQyxJQUFwQyxHQUEyQ0wsS0FBM0MsR0FBbUQsR0FBMUQ7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLFNBQVNDLENBQVQsR0FBYSxJQUFiLEdBQW9CRyxDQUFwQixHQUF3QixJQUF4QixHQUErQkMsQ0FBL0IsR0FBbUMsR0FBMUM7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2Rhc2hib2FyZC0zLmluaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxuQXV0aG9yOiBDb2RlclRoZW1lc1xuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxuRmlsZTogRGFzaGJvYXJkIGluaXRcbiovXG5cbiEgZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBDaGFydEpzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRib2R5ID0gJChcImJvZHlcIiksXG4gICAgICAgICAgICB0aGlzLmNoYXJ0cyA9IFtdXG4gICAgfTtcblxuICAgIENoYXJ0SnMucHJvdG90eXBlLnJlc3BDaGFydCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgdHlwZSwgZGF0YSwgb3B0aW9ucykge1xuXG4gICAgICAgIC8vIGdldCBzZWxlY3RvciBieSBjb250ZXh0XG4gICAgICAgIHZhciBjdHggPSBzZWxlY3Rvci5nZXQoMCkuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBjb25maWdcbiAgICAgICAgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250Q29sb3IgPSBcIiM4MzkxYTJcIjtcbiAgICAgICAgQ2hhcnQuZGVmYXVsdHMuc2NhbGUuZ3JpZExpbmVzLmNvbG9yID0gXCIjODM5MWEyXCI7XG4gICAgICAgIFxuICAgICAgICAvLyBwb2ludGluZyBwYXJlbnQgY29udGFpbmVyIHRvIG1ha2UgY2hhcnQganMgaW5oZXJpdCBpdHMgd2lkdGhcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoc2VsZWN0b3IpLnBhcmVudCgpO1xuXG4gICAgICAgIC8vIHRoaXMgZnVuY3Rpb24gcHJvZHVjZSB0aGUgcmVzcG9uc2l2ZSBDaGFydCBKU1xuXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2hhcnQoKSB7XG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0IHdpZHRoIGZpdCB3aXRoIGl0cyBjb250YWluZXJcbiAgICAgICAgICAgIHZhciB3dyA9IHNlbGVjdG9yLmF0dHIoJ3dpZHRoJywgJChjb250YWluZXIpLndpZHRoKCkpO1xuICAgICAgICAgICAgdmFyIGNoYXJ0O1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTGluZSc6XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgeyB0eXBlOiAnbGluZScsIGRhdGE6IGRhdGEsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RvdWdobnV0JzpcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7IHR5cGU6ICdkb3VnaG51dCcsIGRhdGE6IGRhdGEsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BpZSc6XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgeyB0eXBlOiAncGllJywgZGF0YTogZGF0YSwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQmFyJzpcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7IHR5cGU6ICdiYXInLCBkYXRhOiBkYXRhLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdSYWRhcic6XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgeyB0eXBlOiAncmFkYXInLCBkYXRhOiBkYXRhLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQb2xhckFyZWEnOlxuICAgICAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBDaGFydChjdHgsIHsgZGF0YTogZGF0YSwgdHlwZTogJ3BvbGFyQXJlYScsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgICAgICB9O1xuICAgICAgICAvLyBydW4gZnVuY3Rpb24gLSByZW5kZXIgY2hhcnQgYXQgZmlyc3QgbG9hZFxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVDaGFydCgpO1xuICAgIH0sXG4gICAgICAgIC8vIGluaXQgdmFyaW91cyBjaGFydHMgYW5kIHJldHVybnNcbiAgICAgICAgQ2hhcnRKcy5wcm90b3R5cGUuaW5pdENoYXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjaGFydHMgPSBbXTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0Q29sb3JzID0gW1wiIzFhYmM5Y1wiLCBcIiNmMTU1NmNcIiwgXCIjNGE4MWQ0XCIsIFwiI2UzZWFlZlwiXTtcblxuICAgICAgICAgICAgaWYgKCQoJyNyZXZlbnVlLWNoYXJ0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhQ29sb3JzID0gJChcIiNyZXZlbnVlLWNoYXJ0XCIpLmRhdGEoJ2NvbG9ycycpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xvcnMgPSBkYXRhQ29sb3JzPyBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKSA6IGRlZmF1bHRDb2xvcnMuY29uY2F0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGluZUNoYXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDdXJyZW50IFdlZWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaGV4VG9SR0IoY29sb3JzWzBdLCAwLjMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMiwgNDIsIDQyLCA2MiwgNTIsIDc1LCA2Ml1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUHJldmlvdXMgV2Vla1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbNSwgNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbNDIsIDU4LCA2NiwgOTMsIDgyLCAxMDUsIDkyXVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB2YXIgbGluZU9wdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwwLDAsMC4wNSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFs1LCA1XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNoYXJ0cy5wdXNoKHRoaXMucmVzcENoYXJ0KCQoXCIjcmV2ZW51ZS1jaGFydFwiKSwgJ0xpbmUnLCBsaW5lQ2hhcnQsIGxpbmVPcHRzKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vYmFyY2hhcnRcbiAgICAgICAgICAgIGlmICgkKCcjcHJvamVjdGlvbnMtYWN0dWFscy1jaGFydCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUNvbG9ycyA9ICQoXCIjcHJvamVjdGlvbnMtYWN0dWFscy1jaGFydFwiKS5kYXRhKCdjb2xvcnMnKTtcbiAgICAgICAgICAgICAgICB2YXIgY29sb3JzID0gZGF0YUNvbG9ycz8gZGF0YUNvbG9ycy5zcGxpdChcIixcIikgOiBkZWZhdWx0Q29sb3JzLmNvbmNhdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJhckNoYXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbHM6IFtcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIiwgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2FsZXMgQW5hbHl0aWNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogY29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA4OSwgNDAsIDMyLCA2NSwgNTksIDgwLCA4MV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyUGVyY2VudGFnZTogMC43LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UGVyY2VudGFnZTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEb2xsYXIgUmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiBjb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzg5LCA0MCwgMzIsIDY1LCA1OSwgODAsIDgxLCA1NiwgODksIDQwLCA2NSwgNTldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhclBlcmNlbnRhZ2U6IDAuNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVBlcmNlbnRhZ2U6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGJhck9wdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNoYXJ0cy5wdXNoKHRoaXMucmVzcENoYXJ0KCQoXCIjcHJvamVjdGlvbnMtYWN0dWFscy1jaGFydFwiKSwgJ0JhcicsIGJhckNoYXJ0LCBiYXJPcHRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hhcnRzO1xuICAgICAgICB9LFxuICAgICAgICAvL2luaXRpYWxpemluZyB2YXJpb3VzIGNvbXBvbmVudHMgYW5kIHBsdWdpbnNcbiAgICAgICAgQ2hhcnRKcy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAvLyBmb250XG4gICAgICAgICAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPSAnTnVuaXRvLHNhbnMtc2VyaWYnO1xuXG4gICAgICAgICAgICAvLyBpbml0IGNoYXJ0c1xuICAgICAgICAgICAgJHRoaXMuY2hhcnRzID0gdGhpcy5pbml0Q2hhcnRzKCk7XG5cbiAgICAgICAgICAgIC8vIGVuYWJsZSByZXNpemluZyBtYXR0ZXJcbiAgICAgICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goJHRoaXMuY2hhcnRzLCBmdW5jdGlvbiAoaW5kZXgsIGNoYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHRoaXMuY2hhcnRzID0gJHRoaXMuaW5pdENoYXJ0cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9pbml0IGZsb3RjaGFydFxuICAgICAgICAkLkNoYXJ0SnMgPSBuZXcgQ2hhcnRKcywgJC5DaGFydEpzLkNvbnN0cnVjdG9yID0gQ2hhcnRKc1xufSh3aW5kb3cualF1ZXJ5KSxcblxuLy9pbml0aWFsaXppbmcgQ2hhcnRKc1xuZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAkLkNoYXJ0SnMuaW5pdCgpXG59KHdpbmRvdy5qUXVlcnkpO1xuXG4vKiB1dGlsaXR5IGZ1bmN0aW9uICovXG5cbmZ1bmN0aW9uIGhleFRvUkdCKGhleCwgYWxwaGEpIHtcbiAgICB2YXIgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLFxuICAgICAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXG4gICAgICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcblxuICAgIGlmIChhbHBoYSkge1xuICAgICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/dashboard-3.init.js\n");

/***/ }),

/***/ 16:
/*!******************************************************!*\
  !*** multi ./resources/js/pages/dashboard-3.init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\ai-attend-sphinx\resources\js\pages\dashboard-3.init.js */"./resources/js/pages/dashboard-3.init.js");


/***/ })

/******/ });