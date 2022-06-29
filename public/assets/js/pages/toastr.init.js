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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/toastr.init.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/toastr.init.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Toastr init js\r\n*/\n!function ($) {\n  'use strict';\n\n  var NotificationApp = function NotificationApp() {};\n  /**\r\n   * Send Notification\r\n   * @param {*} heading heading text\r\n   * @param {*} body body text\r\n   * @param {*} position position e.g top-right, top-left, bottom-left, etc\r\n   * @param {*} loaderBgColor loader background color\r\n   * @param {*} icon icon which needs to be displayed\r\n   * @param {*} hideAfter automatically hide after seconds\r\n   * @param {*} stack \r\n   */\n\n\n  NotificationApp.prototype.send = function (heading, body, position, loaderBgColor, icon, hideAfter, stack, showHideTransition) {\n    // default      \n    if (!hideAfter) hideAfter = 3000;\n    if (!stack) stack = 1;\n    var options = {\n      heading: heading,\n      text: body,\n      position: position,\n      loaderBg: loaderBgColor,\n      icon: icon,\n      hideAfter: hideAfter,\n      stack: stack\n    };\n    if (showHideTransition) options.showHideTransition = showHideTransition;\n    console.log(options);\n    $.toast().reset('all');\n    $.toast(options);\n  }, $.NotificationApp = new NotificationApp(), $.NotificationApp.Constructor = NotificationApp;\n}(window.jQuery), //initializing main application module\nfunction ($) {\n  \"use strict\"; // notification examples\n\n  $(\"#toastr-one\").on('click', function (e) {\n    $.NotificationApp.send(\"Heads up!\", \"This alert needs your attention, but it is not super important.\", 'top-right', '#3b98b5', 'info');\n  });\n  $(\"#toastr-two\").on('click', function (e) {\n    $.NotificationApp.send(\"Heads up!\", \"Check below fields please.\", 'top-center', '#da8609', 'warning');\n  });\n  $(\"#toastr-three\").on('click', function (e) {\n    $.NotificationApp.send(\"Well Done!\", \"You successfully read this important alert message\", 'top-right', '#5ba035', 'success');\n  });\n  $(\"#toastr-four\").on('click', function (e) {\n    $.NotificationApp.send(\"Oh snap!\", \"Change a few things up and try submitting again.\", 'top-right', '#bf441d', 'error');\n  });\n  $(\"#toastr-five\").on('click', function (e) {\n    $.NotificationApp.send(\"How to contribute?\", ['Fork the repository', 'Improve/extend the functionality', 'Create a pull request'], 'top-right', '#1ea69a', 'info');\n  });\n  $(\"#toastr-six\").on('click', function (e) {\n    $.NotificationApp.send(\"Can I add <em>icons</em>?\", \"Yes! check this <a href='https://github.com/kamranahmedse/jquery-toast-plugin/commits/master'>update</a>.\", 'top-right', '#1ea69a', 'info', false);\n  });\n  $(\"#toastr-seven\").on('click', function (e) {\n    $.NotificationApp.send(\"\", \"Set the `hideAfter` property to false and the toast will become sticky.\", 'top-right', '#1ea69a', '');\n  });\n  $(\"#toastr-eight\").on('click', function (e) {\n    $.NotificationApp.send(\"\", \"Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.\", 'top-right', '#1ea69a', 'info', 3000, 1, 'fade');\n  });\n  $(\"#toastr-nine\").on('click', function (e) {\n    $.NotificationApp.send(\"Slide transition\", \"Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.\", 'top-right', '#1ea69a', 'info', 3000, 1, 'slide');\n  });\n  $(\"#toastr-ten\").on('click', function (e) {\n    $.NotificationApp.send(\"Plain transition\", \"Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.\", 'top-right', '#3b98b5', 'info', 3000, 1, 'plain');\n  });\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdG9hc3RyLmluaXQuanM/ZTQ5YSJdLCJuYW1lcyI6WyIkIiwiTm90aWZpY2F0aW9uQXBwIiwicHJvdG90eXBlIiwic2VuZCIsImhlYWRpbmciLCJib2R5IiwicG9zaXRpb24iLCJsb2FkZXJCZ0NvbG9yIiwiaWNvbiIsImhpZGVBZnRlciIsInN0YWNrIiwic2hvd0hpZGVUcmFuc2l0aW9uIiwib3B0aW9ucyIsInRleHQiLCJsb2FkZXJCZyIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsInJlc2V0IiwiQ29uc3RydWN0b3IiLCJ3aW5kb3ciLCJqUXVlcnkiLCJvbiIsImUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBUUEsQ0FBQyxVQUFTQSxDQUFULEVBQVk7QUFDVDs7QUFFQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVcsQ0FDaEMsQ0FERDtBQUlBOzs7Ozs7Ozs7Ozs7QUFVQUEsaUJBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEJDLElBQTFCLEdBQWlDLFVBQVNDLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQ0MsYUFBbEMsRUFBaURDLElBQWpELEVBQXVEQyxTQUF2RCxFQUFrRUMsS0FBbEUsRUFBeUVDLGtCQUF6RSxFQUE2RjtBQUMxSDtBQUNBLFFBQUksQ0FBQ0YsU0FBTCxFQUNJQSxTQUFTLEdBQUcsSUFBWjtBQUNKLFFBQUksQ0FBQ0MsS0FBTCxFQUNJQSxLQUFLLEdBQUcsQ0FBUjtBQUVKLFFBQUlFLE9BQU8sR0FBRztBQUNWUixhQUFPLEVBQUVBLE9BREM7QUFFVlMsVUFBSSxFQUFFUixJQUZJO0FBR1ZDLGNBQVEsRUFBRUEsUUFIQTtBQUlWUSxjQUFRLEVBQUVQLGFBSkE7QUFLVkMsVUFBSSxFQUFFQSxJQUxJO0FBTVZDLGVBQVMsRUFBRUEsU0FORDtBQU9WQyxXQUFLLEVBQUVBO0FBUEcsS0FBZDtBQVVBLFFBQUdDLGtCQUFILEVBQ0lDLE9BQU8sQ0FBQ0Qs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YSxTQURiLEVBQ3dCLE1BRHhCLEVBQ2dDLElBRGhDLEVBQ3NDLENBRHRDLEVBQ3lDLE1BRHpDO0FBRUgsR0FIRDtBQUtBSCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCc0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZDdkIsS0FBQyxDQUFDQyxlQUFGLENBQWtCRSxJQUFsQixDQUF1QixrQkFBdkIsRUFBMkMsNkZBQTNDLEVBQ0ssV0FETCxFQUNrQixTQURsQixFQUM2QixNQUQ3QixFQUNxQyxJQURyQyxFQUMyQyxDQUQzQyxFQUM4QyxPQUQ5QztBQUVILEdBSEQ7QUFLQUgsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnNCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVVDLENBQVYsRUFBYTtBQUN0Q3ZCLEtBQUMsQ0FBQ0MsZUFBRixDQUFrQkUsSUFBbEIsQ0FBdUIsa0JBQXZCLEVBQTJDLDZGQUEzQyxFQUNDLFdBREQsRUFDYyxTQURkLEVBQ3lCLE1BRHpCLEVBQ2lDLElBRGpDLEVBQ3VDLENBRHZDLEVBQzBDLE9BRDFDO0FBRUgsR0FIRDtBQUlILENBcERELENBb0RFaUIsTUFBTSxDQUFDQyxNQXBEVCxDQS9DQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy90b2FzdHIuaW5pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRlbXBsYXRlIE5hbWU6IFVib2xkIC0gUmVzcG9uc2l2ZSBCb290c3RyYXAgNCBBZG1pbiBEYXNoYm9hcmRcclxuQXV0aG9yOiBDb2RlclRoZW1lc1xyXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cclxuQ29udGFjdDogc3VwcG9ydEBjb2RlcnRoZW1lcy5jb21cclxuRmlsZTogVG9hc3RyIGluaXQganNcclxuKi9cclxuXHJcbiFmdW5jdGlvbigkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIE5vdGlmaWNhdGlvbkFwcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIE5vdGlmaWNhdGlvblxyXG4gICAgICogQHBhcmFtIHsqfSBoZWFkaW5nIGhlYWRpbmcgdGV4dFxyXG4gICAgICogQHBhcmFtIHsqfSBib2R5IGJvZHkgdGV4dFxyXG4gICAgICogQHBhcmFtIHsqfSBwb3NpdGlvbiBwb3NpdGlvbiBlLmcgdG9wLXJpZ2h0LCB0b3AtbGVmdCwgYm90dG9tLWxlZnQsIGV0Y1xyXG4gICAgICogQHBhcmFtIHsqfSBsb2FkZXJCZ0NvbG9yIGxvYWRlciBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgKiBAcGFyYW0geyp9IGljb24gaWNvbiB3aGljaCBuZWVkcyB0byBiZSBkaXNwbGF5ZWRcclxuICAgICAqIEBwYXJhbSB7Kn0gaGlkZUFmdGVyIGF1dG9tYXRpY2FsbHkgaGlkZSBhZnRlciBzZWNvbmRzXHJcbiAgICAgKiBAcGFyYW0geyp9IHN0YWNrIFxyXG4gICAgICovXHJcbiAgICBOb3RpZmljYXRpb25BcHAucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihoZWFkaW5nLCBib2R5LCBwb3NpdGlvbiwgbG9hZGVyQmdDb2xvciwgaWNvbiwgaGlkZUFmdGVyLCBzdGFjaywgc2hvd0hpZGVUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgLy8gZGVmYXVsdCAgICAgIFxyXG4gICAgICAgIGlmICghaGlkZUFmdGVyKVxyXG4gICAgICAgICAgICBoaWRlQWZ0ZXIgPSAzMDAwO1xyXG4gICAgICAgIGlmICghc3RhY2spXHJcbiAgICAgICAgICAgIHN0YWNrID0gMTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IGhlYWRpbmcsXHJcbiAgICAgICAgICAgIHRleHQ6IGJvZHksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICAgICAgbG9hZGVyQmc6IGxvYWRlckJnQ29sb3IsXHJcbiAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgIGhpZGVBZnRlcjogaGlkZUFmdGVyLFxyXG4gICAgICAgICAgICBzdGFjazogc3RhY2tcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZihzaG93SGlkZVRyYW5zaXRpb24pXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2hvd0hpZGVUcmFuc2l0aW9uID0gc2hvd0hpZGVUcmFuc2l0aW9uO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgICAgICAkLnRvYXN0KCkucmVzZXQoJ2FsbCcpO1xyXG4gICAgICAgICQudG9hc3Qob3B0aW9ucyk7XHJcbiAgICB9LFxyXG5cclxuICAgICQuTm90aWZpY2F0aW9uQXBwID0gbmV3IE5vdGlmaWNhdGlvbkFwcCwgJC5Ob3RpZmljYXRpb25BcHAuQ29uc3RydWN0b3IgPSBOb3RpZmljYXRpb25BcHBcclxuXHJcblxyXG59KHdpbmRvdy5qUXVlcnkpLFxyXG4gICAgLy9pbml0aWFsaXppbmcgbWFpbiBhcHBsaWNhdGlvbiBtb2R1bGVcclxuZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBcclxuICAgIC8vIG5vdGlmaWNhdGlvbiBleGFtcGxlc1xyXG5cclxuICAgICQoXCIjdG9hc3RyLW9uZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQuTm90aWZpY2F0aW9uQXBwLnNlbmQoXCJIZWFkcyB1cCFcIiwgXCJUaGlzIGFsZXJ0IG5lZWRzIHlvdXIgYXR0ZW50aW9uLCBidXQgaXQgaXMgbm90IHN1cGVyIGltcG9ydGFudC5cIiwgJ3RvcC1yaWdodCcsICcjM2I5OGI1JywgJ2luZm8nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdG9hc3RyLXR3b1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQuTm90aWZpY2F0aW9uQXBwLnNlbmQoXCJIZWFkcyB1cCFcIiwgXCJDaGVjayBiZWxvdyBmaWVsZHMgcGxlYXNlLlwiLCAndG9wLWNlbnRlcicsICcjZGE4NjA5JywgJ3dhcm5pbmcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdG9hc3RyLXRocmVlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJC5Ob3RpZmljYXRpb25BcHAuc2VuZChcIldlbGwgRG9uZSFcIiwgXCJZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZVwiLCAndG9wLXJpZ2h0JywgJyM1YmEwMzUnLCAnc3VjY2VzcycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiN0b2FzdHItZm91clwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQuTm90aWZpY2F0aW9uQXBwLnNlbmQoXCJPaCBzbmFwIVwiLCBcIkNoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLlwiLCAndG9wLXJpZ2h0JywgJyNiZjQ0MWQnLCAnZXJyb3InKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdG9hc3RyLWZpdmVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkLk5vdGlmaWNhdGlvbkFwcC5zZW5kKFwiSG93IHRvIGNvbnRyaWJ1dGU/XCIsIFtcclxuICAgICAgICAgICAgJ0ZvcmsgdGhlIHJlcG9zaXRvcnknLFxyXG4gICAgICAgICAgICAnSW1wcm92ZS9leHRlbmQgdGhlIGZ1bmN0aW9uYWxpdHknLFxyXG4gICAgICAgICAgICAnQ3JlYXRlIGEgcHVsbCByZXF1ZXN0J1xyXG4gICAgICAgIF0sICd0b3AtcmlnaHQnLCAnIzFlYTY5YScsICdpbmZvJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3RvYXN0ci1zaXhcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkLk5vdGlmaWNhdGlvbkFwcC5zZW5kKFwiQ2FuIEkgYWRkIDxlbT5pY29uczwvZW0+P1wiLCBcIlllcyEgY2hlY2sgdGhpcyA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20va2FtcmFuYWhtZWRzZS9qcXVlcnktdG9hc3QtcGx1Z2luL2NvbW1pdHMvbWFzdGVyJz51cGRhdGU8L2E+LlwiLCBcclxuICAgICAgICAndG9wLXJpZ2h0JywgJyMxZWE2OWEnLCAnaW5mbycsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdG9hc3RyLXNldmVuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJC5Ob3RpZmljYXRpb25BcHAuc2VuZChcIlwiLCBcIlNldCB0aGUgYGhpZGVBZnRlcmAgcHJvcGVydHkgdG8gZmFsc2UgYW5kIHRoZSB0b2FzdCB3aWxsIGJlY29tZSBzdGlja3kuXCIsICd0b3AtcmlnaHQnLCAnIzFlYTY5YScsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdG9hc3RyLWVpZ2h0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJC5Ob3RpZmljYXRpb25BcHAuc2VuZChcIlwiLCBcIlNldCB0aGUgYHNob3dIaWRlVHJhbnNpdGlvbmAgcHJvcGVydHkgdG8gZmFkZXxwbGFpbnxzbGlkZSB0byBhY2hpZXZlIGRpZmZlcmVudCB0cmFuc2l0aW9ucy5cIiwgXHJcbiAgICAgICAgJ3RvcC1yaWdodCcsICcjMWVhNjlhJywgJ2luZm8nLCAzMDAwLCAxLCAnZmFkZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiN0b2FzdHItbmluZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQuTm90aWZpY2F0aW9uQXBwLnNlbmQoXCJTbGlkZSB0cmFuc2l0aW9uXCIsIFwiU2V0IHRoZSBgc2hvd0hpZGVUcmFuc2l0aW9uYCBwcm9wZXJ0eSB0byBmYWRlfHBsYWlufHNsaWRlIHRvIGFjaGlldmUgZGlmZmVyZW50IHRyYW5zaXRpb25zLlwiLFxyXG4gICAgICAgICAgICAgJ3RvcC1yaWdodCcsICcjMWVhNjlhJywgJ2luZm8nLCAzMDAwLCAxLCAnc2xpZGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdG9hc3RyLXRlblwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQuTm90aWZpY2F0aW9uQXBwLnNlbmQoXCJQbGFpbiB0cmFuc2l0aW9uXCIsIFwiU2V0IHRoZSBgc2hvd0hpZGVUcmFuc2l0aW9uYCBwcm9wZXJ0eSB0byBmYWRlfHBsYWlufHNsaWRlIHRvIGFjaGlldmUgZGlmZmVyZW50IHRyYW5zaXRpb25zLlwiLFxyXG4gICAgICAgICAndG9wLXJpZ2h0JywgJyMzYjk4YjUnLCAnaW5mbycsIDMwMDAsIDEsICdwbGFpbicpO1xyXG4gICAgfSk7XHJcbn0od2luZG93LmpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/toastr.init.js\n");

/***/ }),

/***/ 56:
/*!*************************************************!*\
  !*** multi ./resources/js/pages/toastr.init.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohammed\Desktop\ai-attend\resources\js\pages\toastr.init.js */"./resources/js/pages/toastr.init.js");


/***/ })

/******/ });