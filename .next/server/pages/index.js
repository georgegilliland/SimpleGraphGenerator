module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Checkbox/Checkbox.module.css":
/*!*************************************************!*\
  !*** ./components/Checkbox/Checkbox.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5jc3M/Yzk0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja2JveC9DaGVja2JveC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Checkbox/Checkbox.module.css\n");

/***/ }),

/***/ "./components/Checkbox/index.js":
/*!**************************************!*\
  !*** ./components/Checkbox/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.module.css */ \"./components/Checkbox/Checkbox.module.css\");\n/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/georgegilliland/Desktop/Projects/GraphGenerator/components/Checkbox/index.js\";\n\n\n\nconst Checkbox = ({\n  option,\n  handleCheckChildElement\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: option.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 11\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"checkbox\",\n      checked: option.checked,\n      value: option.value,\n      onClick: handleCheckChildElement\n    }, option.value, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkbox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrYm94L2luZGV4LmpzPzEyMzIiXSwibmFtZXMiOlsiQ2hlY2tib3giLCJvcHRpb24iLCJoYW5kbGVDaGVja0NoaWxkRWxlbWVudCIsImxhYmVsIiwiY2hlY2tlZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDLFFBQUQ7QUFBU0M7QUFBVCxDQUFELEtBQXVDO0FBQ3BELHNCQUNJO0FBQUEsNEJBQ0U7QUFBQSxnQkFBTUQsTUFBTSxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFSTtBQUEwQixVQUFJLEVBQUMsVUFBL0I7QUFBMEMsYUFBTyxFQUFFRixNQUFNLENBQUNHLE9BQTFEO0FBQ0ksV0FBSyxFQUFFSCxNQUFNLENBQUNJLEtBRGxCO0FBQ3lCLGFBQU8sRUFBRUg7QUFEbEMsT0FBWUQsTUFBTSxDQUFDSSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FSRDs7QUFVZUwsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrYm94L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0NoZWNrYm94Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDaGVja2JveCA9ICh7b3B0aW9uLCBoYW5kbGVDaGVja0NoaWxkRWxlbWVudH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+e29wdGlvbi5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBrZXk9e29wdGlvbi52YWx1ZX0gdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17b3B0aW9uLmNoZWNrZWR9IFxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9IG9uQ2xpY2s9e2hhbmRsZUNoZWNrQ2hpbGRFbGVtZW50fS8+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Checkbox/index.js\n");

/***/ }),

/***/ "./components/Dropdown/Dropdown.module.css":
/*!*************************************************!*\
  !*** ./components/Dropdown/Dropdown.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"DropdownContainer\": \"Dropdown_DropdownContainer__26Inc\",\n\t\"Dropdown\": \"Dropdown_Dropdown__2ALKu\",\n\t\"Hidden\": \"Dropdown_Hidden__2QwTW\",\n\t\"dropdown-option\": \"Dropdown_dropdown-option__21vNE\",\n\t\"Visible\": \"Dropdown_Visible__3us4S\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZS5jc3M/N2U4NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRHJvcGRvd25Db250YWluZXJcIjogXCJEcm9wZG93bl9Ecm9wZG93bkNvbnRhaW5lcl9fMjZJbmNcIixcblx0XCJEcm9wZG93blwiOiBcIkRyb3Bkb3duX0Ryb3Bkb3duX18yQUxLdVwiLFxuXHRcIkhpZGRlblwiOiBcIkRyb3Bkb3duX0hpZGRlbl9fMlF3VFdcIixcblx0XCJkcm9wZG93bi1vcHRpb25cIjogXCJEcm9wZG93bl9kcm9wZG93bi1vcHRpb25fXzIxdk5FXCIsXG5cdFwiVmlzaWJsZVwiOiBcIkRyb3Bkb3duX1Zpc2libGVfXzN1czRTXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dropdown/Dropdown.module.css\n");

/***/ }),

/***/ "./components/Dropdown/index.js":
/*!**************************************!*\
  !*** ./components/Dropdown/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Checkbox_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Checkbox/index */ \"./components/Checkbox/index.js\");\n/* harmony import */ var _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown.module.css */ \"./components/Dropdown/Dropdown.module.css\");\n/* harmony import */ var _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/georgegilliland/Desktop/Projects/GraphGenerator/components/Dropdown/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst Dropdown = ({\n  data,\n  handleCheckChildElement\n}) => {\n  const {\n    0: stateObj,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    \"active\": false\n  });\n  const mappedDropdownOptions = data.map(option => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Checkbox_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        option: option,\n        handleCheckChildElement: handleCheckChildElement\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false);\n  }); // displays / hides dropdown \n\n  const toggleDropdown = () => {\n    let tmpState = _objectSpread({}, stateObj);\n\n    tmpState.active = !stateObj.active;\n    setState(tmpState);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.DropdownContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Dropdown,\n      onClick: e => toggleDropdown(e),\n      children: \"Graph types\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: stateObj.active ? _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Visible : _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Hidden,\n      children: mappedDropdownOptions\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Ryb3Bkb3duL2luZGV4LmpzP2Y1MjMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkYXRhIiwiaGFuZGxlQ2hlY2tDaGlsZEVsZW1lbnQiLCJzdGF0ZU9iaiIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJtYXBwZWREcm9wZG93bk9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJ0b2dnbGVEcm9wZG93biIsInRtcFN0YXRlIiwiYWN0aXZlIiwic3R5bGUiLCJEcm9wZG93bkNvbnRhaW5lciIsImUiLCJWaXNpYmxlIiwiSGlkZGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0MsTUFBRDtBQUFPQztBQUFQLENBQUQsS0FBcUM7QUFFbEQsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQXVCQyxzREFBUSxDQUFDO0FBQ2xDLGNBQVU7QUFEd0IsR0FBRCxDQUFyQztBQUlBLFFBQU1DLHFCQUFxQixHQUFHTCxJQUFJLENBQUNNLEdBQUwsQ0FBU0MsTUFBTSxJQUFJO0FBQzdDLHdCQUNJO0FBQUEsNkJBQ0kscUVBQUMsdURBQUQ7QUFBVSxjQUFNLEVBQUVBLE1BQWxCO0FBQTBCLCtCQUF1QixFQUFFTjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFLSCxHQU42QixDQUE5QixDQU5rRCxDQWNsRDs7QUFDQSxRQUFNTyxjQUFjLEdBQUcsTUFBTTtBQUN6QixRQUFJQyxRQUFRLHFCQUFPUCxRQUFQLENBQVo7O0FBQ0FPLFlBQVEsQ0FBQ0MsTUFBVCxHQUFrQixDQUFDUixRQUFRLENBQUNRLE1BQTVCO0FBQ0FQLFlBQVEsQ0FBQ00sUUFBRCxDQUFSO0FBQ0gsR0FKRDs7QUFNQSxzQkFBTztBQUFLLGFBQVMsRUFBRUUsMkRBQUssQ0FBQ0MsaUJBQXRCO0FBQUEsNEJBQ0g7QUFBSyxlQUFTLEVBQUVELDJEQUFLLENBQUNaLFFBQXRCO0FBQWdDLGFBQU8sRUFBRWMsQ0FBQyxJQUFJTCxjQUFjLENBQUNLLENBQUQsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSDtBQUFLLGVBQVMsRUFBRVgsUUFBUSxDQUFDUSxNQUFULEdBQWtCQywyREFBSyxDQUFDRyxPQUF4QixHQUFrQ0gsMkRBQUssQ0FBQ0ksTUFBeEQ7QUFBQSxnQkFDS1Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBT0gsQ0E1QkQ7O0FBOEJlTix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJvcGRvd24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL0NoZWNrYm94L2luZGV4XCJcbmltcG9ydCBzdHlsZSBmcm9tICcuL0Ryb3Bkb3duLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBEcm9wZG93biA9ICh7ZGF0YSwgaGFuZGxlQ2hlY2tDaGlsZEVsZW1lbnR9KSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGVPYmosIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgXCJhY3RpdmVcIjogZmFsc2VcbiAgICB9KTsgIFxuXG4gICAgY29uc3QgbWFwcGVkRHJvcGRvd25PcHRpb25zID0gZGF0YS5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IG9wdGlvbj17b3B0aW9ufSBoYW5kbGVDaGVja0NoaWxkRWxlbWVudD17aGFuZGxlQ2hlY2tDaGlsZEVsZW1lbnR9Lz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfSlcblxuICAgIC8vIGRpc3BsYXlzIC8gaGlkZXMgZHJvcGRvd24gXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIGxldCB0bXBTdGF0ZSA9IHsuLi5zdGF0ZU9ian07XG4gICAgICAgIHRtcFN0YXRlLmFjdGl2ZSA9ICFzdGF0ZU9iai5hY3RpdmU7XG4gICAgICAgIHNldFN0YXRlKHRtcFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlLkRyb3Bkb3duQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkRyb3Bkb3dufSBvbkNsaWNrPXtlID0+IHRvZ2dsZURyb3Bkb3duKGUpfT5HcmFwaCB0eXBlczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhdGVPYmouYWN0aXZlID8gc3R5bGUuVmlzaWJsZSA6IHN0eWxlLkhpZGRlbn0+XG4gICAgICAgICAgICB7bWFwcGVkRHJvcGRvd25PcHRpb25zfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dropdown/index.js\n");

/***/ }),

/***/ "./components/FileInput/FileInput.module.css":
/*!***************************************************!*\
  !*** ./components/FileInput/FileInput.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"FileUploadButton\": \"FileInput_FileUploadButton__3YMXC\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVJbnB1dC9GaWxlSW5wdXQubW9kdWxlLmNzcz8xN2ZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaWxlSW5wdXQvRmlsZUlucHV0Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGaWxlVXBsb2FkQnV0dG9uXCI6IFwiRmlsZUlucHV0X0ZpbGVVcGxvYWRCdXR0b25fXzNZTVhDXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FileInput/FileInput.module.css\n");

/***/ }),

/***/ "./components/FileInput/index.js":
/*!***************************************!*\
  !*** ./components/FileInput/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FileInput_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileInput.module.css */ \"./components/FileInput/FileInput.module.css\");\n/* harmony import */ var _FileInput_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FileInput_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/georgegilliland/Desktop/Projects/GraphGenerator/components/FileInput/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst FileInput = ({\n  handleFileRead\n}) => {\n  let fileReader;\n  const {\n    0: stateObj,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    \"file\": false\n  }); // On file input change and succesfull attachment, send back to parent\n\n  const handleFile = file => {\n    if (file[0] instanceof Blob) {\n      fileReader = new FileReader();\n      fileReader.readAsText(file[0]);\n      fileReader.addEventListener('error', e => {\n        console.error(`Error occurred reading file: ${file[0].name}`);\n      });\n      fileReader.addEventListener('load', e => {\n        let tmpStateObj = _objectSpread({}, stateObj);\n\n        tmpStateObj.file = !tmpStateObj.file;\n        setState(tmpStateObj);\n        handleFileRead({\n          \"name\": file[0].name,\n          \"data\": e.target\n        });\n      });\n    }\n  };\n\n  const hiddenFileInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n\n  const handleClick = event => {\n    hiddenFileInput.current.click();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"file\",\n      id: \"file\",\n      className: \"input-file\",\n      accept: \".csv\",\n      onChange: e => handleFile(e.target.files),\n      style: {\n        display: 'none'\n      },\n      ref: hiddenFileInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _FileInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.FileUploadButton,\n        onClick: handleClick,\n        children: stateObj.file === true ? \"Got a file!\" : \"Upload a file\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileInput);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVJbnB1dC9pbmRleC5qcz9jOGRjIl0sIm5hbWVzIjpbIkZpbGVJbnB1dCIsImhhbmRsZUZpbGVSZWFkIiwiZmlsZVJlYWRlciIsInN0YXRlT2JqIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImhhbmRsZUZpbGUiLCJmaWxlIiwiQmxvYiIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJuYW1lIiwidG1wU3RhdGVPYmoiLCJ0YXJnZXQiLCJoaWRkZW5GaWxlSW5wdXQiLCJSZWFjdCIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlcyIsImRpc3BsYXkiLCJzdHlsZSIsIkZpbGVVcGxvYWRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUF3QjtBQUV0QyxNQUFJQyxVQUFKO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQXVCQyxzREFBUSxDQUFDO0FBQ2xDLFlBQVE7QUFEMEIsR0FBRCxDQUFyQyxDQUhzQyxDQU90Qzs7QUFDQSxRQUFNQyxVQUFVLEdBQUlDLElBQUQsSUFBVTtBQUN6QixRQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFKLFlBQW1CQyxJQUF2QixFQUE2QjtBQUN6Qk4sZ0JBQVUsR0FBRyxJQUFJTyxVQUFKLEVBQWI7QUFDQVAsZ0JBQVUsQ0FBQ1EsVUFBWCxDQUFzQkgsSUFBSSxDQUFDLENBQUQsQ0FBMUI7QUFFQUwsZ0JBQVUsQ0FBQ1MsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBc0NDLENBQUQsSUFBTztBQUN4Q0MsZUFBTyxDQUFDQyxLQUFSLENBQWUsZ0NBQStCUCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFRLElBQUssRUFBM0Q7QUFDSCxPQUZEO0FBSUFiLGdCQUFVLENBQUNTLGdCQUFYLENBQTRCLE1BQTVCLEVBQXFDQyxDQUFELElBQU87QUFDdkMsWUFBSUksV0FBVyxxQkFBT2IsUUFBUCxDQUFmOztBQUNBYSxtQkFBVyxDQUFDVCxJQUFaLEdBQW1CLENBQUNTLFdBQVcsQ0FBQ1QsSUFBaEM7QUFDQUgsZ0JBQVEsQ0FBQ1ksV0FBRCxDQUFSO0FBQ0FmLHNCQUFjLENBQUM7QUFBQyxrQkFBUU0sSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRUSxJQUFqQjtBQUF1QixrQkFBUUgsQ0FBQyxDQUFDSztBQUFqQyxTQUFELENBQWQ7QUFDSCxPQUxEO0FBTUg7QUFDSixHQWhCRDs7QUFrQkEsUUFBTUMsZUFBZSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUF4Qjs7QUFFRixRQUFNQyxXQUFXLEdBQUdDLEtBQUssSUFBSTtBQUMzQkosbUJBQWUsQ0FBQ0ssT0FBaEIsQ0FBd0JDLEtBQXhCO0FBQ0QsR0FGRDs7QUFJRSxzQkFBTztBQUFBLDRCQUNIO0FBQ0ksVUFBSSxFQUFDLE1BRFQ7QUFFSSxRQUFFLEVBQUMsTUFGUDtBQUdJLGVBQVMsRUFBQyxZQUhkO0FBSUksWUFBTSxFQUFDLE1BSlg7QUFLSSxjQUFRLEVBQUlaLENBQUMsSUFBSU4sVUFBVSxDQUFDTSxDQUFDLENBQUNLLE1BQUYsQ0FBU1EsS0FBVixDQUwvQjtBQU1JLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQU5YO0FBT0ksU0FBRyxFQUFFUjtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFVSDtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFJQTtBQUFRLGlCQUFTLEVBQUVTLDREQUFLLENBQUNDLGdCQUF6QjtBQUEyQyxlQUFPLEVBQUVQLFdBQXBEO0FBQUEsa0JBQ0tsQixRQUFRLENBQUNJLElBQVQsS0FBa0IsSUFBbEIsR0FBeUIsYUFBekIsR0FBeUM7QUFEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFvQkgsQ0FwREQ7O0FBc0RlUCx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmlsZUlucHV0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vRmlsZUlucHV0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBGaWxlSW5wdXQgPSAoeyBoYW5kbGVGaWxlUmVhZCB9KSA9PiB7XG5cbiAgICBsZXQgZmlsZVJlYWRlcjtcbiAgICBjb25zdCBbc3RhdGVPYmosIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgXCJmaWxlXCI6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAvLyBPbiBmaWxlIGlucHV0IGNoYW5nZSBhbmQgc3VjY2VzZnVsbCBhdHRhY2htZW50LCBzZW5kIGJhY2sgdG8gcGFyZW50XG4gICAgY29uc3QgaGFuZGxlRmlsZSA9IChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlWzBdIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7IFxuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVbMF0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBvY2N1cnJlZCByZWFkaW5nIGZpbGU6ICR7ZmlsZVswXS5uYW1lfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0bXBTdGF0ZU9iaiA9IHsuLi5zdGF0ZU9ian1cbiAgICAgICAgICAgICAgICB0bXBTdGF0ZU9iai5maWxlID0gIXRtcFN0YXRlT2JqLmZpbGU7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUodG1wU3RhdGVPYmopO1xuICAgICAgICAgICAgICAgIGhhbmRsZUZpbGVSZWFkKHtcIm5hbWVcIjogZmlsZVswXS5uYW1lLCBcImRhdGFcIjogZS50YXJnZXR9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZGVuRmlsZUlucHV0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaGlkZGVuRmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcbiAgfTtcbiAgICBcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgaWQ9XCJmaWxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiLmNzdlwiXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IGhhbmRsZUZpbGUoZS50YXJnZXQuZmlsZXMpfVxuICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319XG4gICAgICAgICAgICByZWY9e2hpZGRlbkZpbGVJbnB1dH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLkZpbGVVcGxvYWRCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIHtzdGF0ZU9iai5maWxlID09PSB0cnVlID8gXCJHb3QgYSBmaWxlIVwiIDogXCJVcGxvYWQgYSBmaWxlXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FileInput/index.js\n");

/***/ }),

/***/ "./pages/api/graphTypes.json":
/*!***********************************!*\
  !*** ./pages/api/graphTypes.json ***!
  \***********************************/
/*! exports provided: options, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"options\\\":[{\\\"value\\\":\\\"barchart\\\",\\\"label\\\":\\\"Bar Chart\\\",\\\"checked\\\":false},{\\\"value\\\":\\\"piechart\\\",\\\"label\\\":\\\"Pie Chart\\\",\\\"checked\\\":false}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ncmFwaFR5cGVzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/graphTypes.json\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FileInput */ \"./components/FileInput/index.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dropdown */ \"./components/Dropdown/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_graphTypes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/graphTypes.json */ \"./pages/api/graphTypes.json\");\nvar _api_graphTypes_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./api/graphTypes.json */ \"./pages/api/graphTypes.json\", 1);\n\nvar _jsxFileName = \"/Users/georgegilliland/Desktop/Projects/GraphGenerator/pages/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction HomePage() {\n  console.log(_api_graphTypes_json__WEBPACK_IMPORTED_MODULE_5__);\n  const {\n    0: stateObj,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    \"file\": false,\n    \"redirect\": false,\n    \"data\": \"\",\n    \"options\": _api_graphTypes_json__WEBPACK_IMPORTED_MODULE_5__.options\n  }); // Set file key in state to true if successful upload\n\n  const handleFileRead = e => {\n    let tmpStateObj = _objectSpread({}, stateObj);\n\n    tmpStateObj.file = true;\n    tmpStateObj.data = e.data.result;\n    setState(tmpStateObj);\n    console.log(tmpStateObj.data);\n  };\n\n  const handleCheckChildElement = e => {\n    let tmpStateObj = _objectSpread({}, stateObj);\n\n    tmpStateObj.options.forEach(option => {\n      if (option.value === e.target.value) option.checked = e.target.checked;\n    });\n    setState(tmpStateObj);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.TitlePageMainContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.InnerTitlePageMainContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.TitlePageTitle,\n        children: \"Simple Graphs, Innit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.TitlePageButtonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FileInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          handleFileRead: handleFileRead\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          data: stateObj.options,\n          handleCheckChildElement: handleCheckChildElement\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiY29uc29sZSIsImxvZyIsImdyYXBoVHlwZXMiLCJzdGF0ZU9iaiIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJvcHRpb25zIiwiaGFuZGxlRmlsZVJlYWQiLCJlIiwidG1wU3RhdGVPYmoiLCJmaWxlIiwiZGF0YSIsInJlc3VsdCIsImhhbmRsZUNoZWNrQ2hpbGRFbGVtZW50IiwiZm9yRWFjaCIsIm9wdGlvbiIsInZhbHVlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInN0eWxlIiwiVGl0bGVQYWdlTWFpbkNvbnRhaW5lciIsIklubmVyVGl0bGVQYWdlTWFpbkNvbnRhaW5lciIsIlRpdGxlUGFnZVRpdGxlIiwiVGl0bGVQYWdlQnV0dG9uQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUVoQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLGlEQUFaO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQXVCQyxzREFBUSxDQUFDO0FBQ2xDLFlBQVEsS0FEMEI7QUFFbEMsZ0JBQVksS0FGc0I7QUFHbEMsWUFBUSxFQUgwQjtBQUlsQyxlQUFXSCxpREFBVSxDQUFDSTtBQUpZLEdBQUQsQ0FBckMsQ0FKZ0IsQ0FXaEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFJQyxDQUFELElBQU87QUFDMUIsUUFBSUMsV0FBVyxxQkFBT04sUUFBUCxDQUFmOztBQUNBTSxlQUFXLENBQUNDLElBQVosR0FBbUIsSUFBbkI7QUFDQUQsZUFBVyxDQUFDRSxJQUFaLEdBQW1CSCxDQUFDLENBQUNHLElBQUYsQ0FBT0MsTUFBMUI7QUFDQVIsWUFBUSxDQUFDSyxXQUFELENBQVI7QUFDQVQsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFdBQVcsQ0FBQ0UsSUFBeEI7QUFDSCxHQU5EOztBQVFBLFFBQU1FLHVCQUF1QixHQUFJTCxDQUFELElBQU87QUFDbkMsUUFBSUMsV0FBVyxxQkFBT04sUUFBUCxDQUFmOztBQUNBTSxlQUFXLENBQUNILE9BQVosQ0FBb0JRLE9BQXBCLENBQTRCQyxNQUFNLElBQUk7QUFDbkMsVUFBSUEsTUFBTSxDQUFDQyxLQUFQLEtBQWlCUixDQUFDLENBQUNTLE1BQUYsQ0FBU0QsS0FBOUIsRUFDR0QsTUFBTSxDQUFDRyxPQUFQLEdBQWlCVixDQUFDLENBQUNTLE1BQUYsQ0FBU0MsT0FBMUI7QUFDTCxLQUhEO0FBSUFkLFlBQVEsQ0FBQ0ssV0FBRCxDQUFSO0FBQ0gsR0FQRDs7QUFTQSxzQkFBTztBQUFLLGFBQVMsRUFBRVUsd0RBQUssQ0FBQ0Msc0JBQXRCO0FBQUEsMkJBQ0g7QUFBSyxlQUFTLEVBQUVELHdEQUFLLENBQUNFLDJCQUF0QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUYsd0RBQUssQ0FBQ0csY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUgsd0RBQUssQ0FBQ0ksd0JBQXRCO0FBQUEsZ0NBQ0kscUVBQUMsNkRBQUQ7QUFBVyx3QkFBYyxFQUFFaEI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLDREQUFEO0FBQVUsY0FBSSxFQUFFSixRQUFRLENBQUNHLE9BQXpCO0FBQWtDLGlDQUF1QixFQUFFTztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVNIOztBQUVjZCx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWxlSW5wdXRcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vY29tcG9uZW50cy9Ecm9wZG93blwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBncmFwaFR5cGVzIGZyb20gXCIuL2FwaS9ncmFwaFR5cGVzLmpzb25cIlxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuICAgIGNvbnNvbGUubG9nKGdyYXBoVHlwZXMpXG5cbiAgICBjb25zdCBbc3RhdGVPYmosIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgXCJmaWxlXCI6IGZhbHNlLFxuICAgICAgICBcInJlZGlyZWN0XCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogXCJcIixcbiAgICAgICAgXCJvcHRpb25zXCI6IGdyYXBoVHlwZXMub3B0aW9uc1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGZpbGUga2V5IGluIHN0YXRlIHRvIHRydWUgaWYgc3VjY2Vzc2Z1bCB1cGxvYWRcbiAgICBjb25zdCBoYW5kbGVGaWxlUmVhZCA9IChlKSA9PiB7XG4gICAgICAgIGxldCB0bXBTdGF0ZU9iaiA9IHsuLi5zdGF0ZU9ian07XG4gICAgICAgIHRtcFN0YXRlT2JqLmZpbGUgPSB0cnVlO1xuICAgICAgICB0bXBTdGF0ZU9iai5kYXRhID0gZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgc2V0U3RhdGUodG1wU3RhdGVPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyh0bXBTdGF0ZU9iai5kYXRhKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoZWNrQ2hpbGRFbGVtZW50ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHRtcFN0YXRlT2JqID0gey4uLnN0YXRlT2JqfVxuICAgICAgICB0bXBTdGF0ZU9iai5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIG9wdGlvbi5jaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICB9KVxuICAgICAgICBzZXRTdGF0ZSh0bXBTdGF0ZU9iailcbiAgICB9ICBcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGl0bGVQYWdlTWFpbkNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Jbm5lclRpdGxlUGFnZU1haW5Db250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRpdGxlUGFnZVRpdGxlfT5TaW1wbGUgR3JhcGhzLCBJbm5pdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRpdGxlUGFnZUJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZpbGVJbnB1dCBoYW5kbGVGaWxlUmVhZD17aGFuZGxlRmlsZVJlYWR9Lz5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gZGF0YT17c3RhdGVPYmoub3B0aW9uc30gaGFuZGxlQ2hlY2tDaGlsZEVsZW1lbnQ9e2hhbmRsZUNoZWNrQ2hpbGRFbGVtZW50fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"TitlePageMainContainer\": \"index_TitlePageMainContainer__20WgK\",\n\t\"InnerTitlePageMainContainer\": \"index_InnerTitlePageMainContainer__3VRb-\",\n\t\"TitlePageTitle\": \"index_TitlePageTitle__b4LeK\",\n\t\"TitlePageButtonContainer\": \"index_TitlePageButtonContainer__27041\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzPzE2MzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGl0bGVQYWdlTWFpbkNvbnRhaW5lclwiOiBcImluZGV4X1RpdGxlUGFnZU1haW5Db250YWluZXJfXzIwV2dLXCIsXG5cdFwiSW5uZXJUaXRsZVBhZ2VNYWluQ29udGFpbmVyXCI6IFwiaW5kZXhfSW5uZXJUaXRsZVBhZ2VNYWluQ29udGFpbmVyX18zVlJiLVwiLFxuXHRcIlRpdGxlUGFnZVRpdGxlXCI6IFwiaW5kZXhfVGl0bGVQYWdlVGl0bGVfX2I0TGVLXCIsXG5cdFwiVGl0bGVQYWdlQnV0dG9uQ29udGFpbmVyXCI6IFwiaW5kZXhfVGl0bGVQYWdlQnV0dG9uQ29udGFpbmVyX18yNzA0MVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });