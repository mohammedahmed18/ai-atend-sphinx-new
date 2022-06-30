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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/jquery.chat.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/jquery.chat.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\nAuthor: CoderThemes\nWebsite: https://coderthemes.com/\nContact: support@coderthemes.com\nFile: Chat init js\n*/\n!function ($) {\n  \"use strict\";\n\n  var ChatApp = function ChatApp() {\n    this.$body = $(\"body\"), this.$chatInput = $('.chat-input'), this.$chatList = $('.conversation-list'), this.$chatSendBtn = $('.chat-send'), this.$chatForm = $(\"#chat-form\");\n  };\n\n  ChatApp.prototype.save = function () {\n    var chatText = this.$chatInput.val();\n    var chatTime = moment().format(\"h:mm\");\n\n    if (chatText == \"\") {\n      this.$chatInput.focus();\n      return false;\n    } else {\n      $('<li class=\"clearfix odd\"><div class=\"chat-avatar\"><img src=\"../assets/images/users/user-1.jpg\" alt=\"male\"><i>' + chatTime + '</i></div><div class=\"conversation-text\"><div class=\"ctext-wrap\"><i>Dominic</i><p>' + chatText + '</p></div></div></li>').appendTo('.conversation-list');\n      this.$chatInput.focus();\n      this.$chatList.animate({\n        scrollTop: this.$chatList.prop(\"scrollHeight\") + 100\n      }, 1000);\n      return true;\n    }\n  }; // init\n\n\n  ChatApp.prototype.init = function () {\n    var $this = this; //binding keypress event on chat input box - on enter we are adding the chat into chat list - \n\n    $this.$chatInput.keypress(function (ev) {\n      var p = ev.which;\n\n      if (p == 13) {\n        $this.save();\n        return false;\n      }\n    }); //binding send button click\n\n    $this.$chatForm.on('submit', function (ev) {\n      ev.preventDefault();\n      $this.save();\n      $this.$chatInput.val('');\n      setTimeout(function () {\n        $this.$chatForm.removeClass('was-validated');\n      });\n      return false;\n    });\n  }, //init ChatApp\n  $.ChatApp = new ChatApp(), $.ChatApp.Constructor = ChatApp;\n}(window.jQuery), //initializing main application module\nfunction ($) {\n  \"use strict\";\n\n  $.ChatApp.init();\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvanF1ZXJ5LmNoYXQuanM/ZTljNSJdLCJuYW1lcyI6WyIkIiwiQ2hhdEFwcCIsIiRib2R5IiwiJGNoYXRJbnB1dCIsIiRjaGF0TGlzdCIsIiRjaGF0U2VuZEJ0biIsIiRjaGF0Rm9ybSIsInByb3RvdHlwZSIsInNhdmUiLCJjaGF0VGV4dCIsInZhbCIsImNoYXRUaW1lIiwibW9tZW50IiwiZm9ybWF0IiwiZm9jdXMiLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJwcm9wIiwiaW5pdCIsIiR0aGlzIiwia2V5cHJlc3MiLCJldiIsInAiLCJ3aGljaCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsIndpbmRvdyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFRQSxDQUFDLFVBQVNBLENBQVQsRUFBWTtBQUNUOztBQUVBLE1BQUlDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQVc7QUFDckIsU0FBS0MsS0FBTCxHQUFhRixDQUFDLENBQUMsTUFBRCxDQUFkLEVBQ0EsS0FBS0csVUFBTCxHQUFrQkgsQ0FBQyxDQUFDLGFBQUQsQ0FEbkIsRUFFQSxLQUFLSSxTQUFMLEdBQWlCSixDQUFDLENBQUMsb0JBQUQsQ0FGbEIsRUFHQSxLQUFLSyxZQUFMLEdBQW9CTCxDQUFDLENBQUMsWUFBRCxDQUhyQixFQUlBLEtBQUtNLFNBQUwsR0FBaUJOLENBQUMsQ0FBQyxZQUFELENBSmxCO0FBS0gsR0FORDs7QUFRQUMsU0FBTyxDQUFDTSxTQUFSLENBQWtCQyxJQUFsQixHQUF5QixZQUFXO0FBQ2hDLFFBQUlDLFFBQVEsR0FBRyxLQUFLTixVQUFMLENBQWdCTyxHQUFoQixFQUFmO0FBQ0EsUUFBSUMsUUFBUSxHQUFHQyxNQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsTUFBaEIsQ0FBZjs7QUFDQSxRQUFJSixRQUFRLElBQUksRUFBaEIsRUFBb0I7QUFDaEIsV0FBS04sVUFBTCxDQUFnQlcsS0FBaEI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQUhELE1BR087QUFDSGQsT0FBQyxDQUFDLGtIQUFrSFcsUUFBbEgsR0FBNkgsb0ZBQTdILEdBQW9ORixRQUFwTixHQUErTix1QkFBaE8sQ0FBRCxDQUEwUE0sUUFBMVAsQ0FBbVEsb0JBQW5RO0FBQ0EsV0FBS1osVUFBTCxDQUFnQlcsS0FBaEI7QUFDQSxXQUFLVixTQUFMLENBQWVZLE9BQWYsQ0FBdUI7QUFBRUMsaUJBQVMsRUFBRSxLQUFLYixTQUFMLENBQWVjLElBQWYsQ0FBb0IsY0FBcEIsSUFBc0M7QUFBbkQsT0FBdkIsRUFBaUYsSUFBakY7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNKLEdBWkQsQ0FYUyxDQXlCVDs7O0FBQ0FqQixTQUFPLENBQUNNLFNBQVIsQ0FBa0JZLElBQWxCLEdBQXlCLFlBQVk7QUFDakMsUUFBSUMsS0FBSyxHQUFHLElBQVosQ0FEaUMsQ0FFakM7O0FBQ0FBLFNBQUssQ0FBQ2pCLFVBQU4sQ0FBaUJrQixRQUFqQixDQUEwQixVQUFVQyxFQUFWLEVBQWM7QUFDcEMsVUFBSUMsQ0FBQyxHQUFHRCxFQUFFLENBQUNFLEtBQVg7O0FBQ0EsVUFBSUQsQ0FBQyxJQUFJLEVBQVQsRUFBYTtBQUNUSCxhQUFLLENBQUNaLElBQU47QUFDQSxlQUFPLEtBQVA7QUFDSDtBQUNKLEtBTkQsRUFIaUMsQ0FZakM7O0FBQ0FZLFNBQUssQ0FBQ2QsU0FBTixDQUFnQm1CLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLFVBQVVILEVBQVYsRUFBYztBQUN2Q0EsUUFBRSxDQUFDSSxjQUFIO0FBQ0FOLFdBQUssQ0FBQ1osSUFBTjtBQUNBWSxXQUFLLENBQUNqQixVQUFOLENBQWlCTyxHQUFqQixDQUFxQixFQUFyQjtBQUVBaUIsZ0JBQVUsQ0FBQyxZQUFXO0FBQ2xCUCxhQUFLLENBQUNkLFNBQU4sQ0FBZ0JzQixXQUFoQixDQUE0QixlQUE1QjtBQUNILE9BRlMsQ0FBVjtBQUlBLGFBQU8sS0FBUDtBQUNILEtBVkQ7QUFXSCxHQXhCRCxFQXlCQTtBQUNBNUIsR0FBQyxDQUFDQyxPQUFGLEdBQVksSUFBSUEsT0FBSixFQTFCWixFQTBCeUJELENBQUMsQ0FBQ0MsT0FBRixDQUFVNEIsV0FBVixHQUF3QjVCLE9BMUJqRDtBQTRCSCxDQXREQSxDQXNEQzZCLE1BQU0sQ0FBQ0MsTUF0RFIsQ0FBRCxFQXdEQTtBQUNBLFVBQVMvQixDQUFULEVBQVk7QUFDUjs7QUFDQUEsR0FBQyxDQUFDQyxPQUFGLENBQVVrQixJQUFWO0FBQ0gsQ0FIRCxDQUdFVyxNQUFNLENBQUNDLE1BSFQsQ0F6REEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvanF1ZXJ5LmNoYXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxuQXV0aG9yOiBDb2RlclRoZW1lc1xuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxuRmlsZTogQ2hhdCBpbml0IGpzXG4qL1xuXG4hZnVuY3Rpb24oJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIENoYXRBcHAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoXCJib2R5XCIpLFxuICAgICAgICB0aGlzLiRjaGF0SW5wdXQgPSAkKCcuY2hhdC1pbnB1dCcpLFxuICAgICAgICB0aGlzLiRjaGF0TGlzdCA9ICQoJy5jb252ZXJzYXRpb24tbGlzdCcpLFxuICAgICAgICB0aGlzLiRjaGF0U2VuZEJ0biA9ICQoJy5jaGF0LXNlbmQnKSxcbiAgICAgICAgdGhpcy4kY2hhdEZvcm0gPSAkKFwiI2NoYXQtZm9ybVwiKVxuICAgIH07XG5cbiAgICBDaGF0QXBwLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGF0VGV4dCA9IHRoaXMuJGNoYXRJbnB1dC52YWwoKTtcbiAgICAgICAgdmFyIGNoYXRUaW1lID0gbW9tZW50KCkuZm9ybWF0KFwiaDptbVwiKTtcbiAgICAgICAgaWYgKGNoYXRUZXh0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYXRJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnPGxpIGNsYXNzPVwiY2xlYXJmaXggb2RkXCI+PGRpdiBjbGFzcz1cImNoYXQtYXZhdGFyXCI+PGltZyBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL3VzZXJzL3VzZXItMS5qcGdcIiBhbHQ9XCJtYWxlXCI+PGk+JyArIGNoYXRUaW1lICsgJzwvaT48L2Rpdj48ZGl2IGNsYXNzPVwiY29udmVyc2F0aW9uLXRleHRcIj48ZGl2IGNsYXNzPVwiY3RleHQtd3JhcFwiPjxpPkRvbWluaWM8L2k+PHA+JyArIGNoYXRUZXh0ICsgJzwvcD48L2Rpdj48L2Rpdj48L2xpPicpLmFwcGVuZFRvKCcuY29udmVyc2F0aW9uLWxpc3QnKTtcbiAgICAgICAgICAgIHRoaXMuJGNoYXRJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy4kY2hhdExpc3QuYW5pbWF0ZSh7IHNjcm9sbFRvcDogdGhpcy4kY2hhdExpc3QucHJvcChcInNjcm9sbEhlaWdodFwiKSArIDEwMCB9LCAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5pdFxuICAgIENoYXRBcHAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vYmluZGluZyBrZXlwcmVzcyBldmVudCBvbiBjaGF0IGlucHV0IGJveCAtIG9uIGVudGVyIHdlIGFyZSBhZGRpbmcgdGhlIGNoYXQgaW50byBjaGF0IGxpc3QgLSBcbiAgICAgICAgJHRoaXMuJGNoYXRJbnB1dC5rZXlwcmVzcyhmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBwID0gZXYud2hpY2g7XG4gICAgICAgICAgICBpZiAocCA9PSAxMykge1xuICAgICAgICAgICAgICAgICR0aGlzLnNhdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy9iaW5kaW5nIHNlbmQgYnV0dG9uIGNsaWNrXG4gICAgICAgICR0aGlzLiRjaGF0Rm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgJHRoaXMuJGNoYXRJbnB1dC52YWwoJycpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLiRjaGF0Rm9ybS5yZW1vdmVDbGFzcygnd2FzLXZhbGlkYXRlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL2luaXQgQ2hhdEFwcFxuICAgICQuQ2hhdEFwcCA9IG5ldyBDaGF0QXBwLCAkLkNoYXRBcHAuQ29uc3RydWN0b3IgPSBDaGF0QXBwXG4gICAgXG59KHdpbmRvdy5qUXVlcnkpLFxuXG4vL2luaXRpYWxpemluZyBtYWluIGFwcGxpY2F0aW9uIG1vZHVsZVxuZnVuY3Rpb24oJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgICQuQ2hhdEFwcC5pbml0KCk7XG59KHdpbmRvdy5qUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/jquery.chat.js\n");

/***/ }),

/***/ 37:
/*!*************************************************!*\
  !*** multi ./resources/js/pages/jquery.chat.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\ai-attend-sphinx\resources\js\pages\jquery.chat.js */"./resources/js/pages/jquery.chat.js");


/***/ })

/******/ });