webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/ImagesZoom/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/heoseongjin/Desktop/node_bird/prepare/front/components/ImagesZoom/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {}, []);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Overlay\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Global\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"CloseBtn\"], {\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"X\")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"SlickWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    initialSlide: 0,\n    beforeChange: function beforeChange(slide) {\n      return setCurrentSlide(slide);\n    },\n    infinite: true,\n    arrows: false,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, images.map(function (v) {\n    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageWrapper\"], {\n      key: v.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: v.src,\n      alt: v.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }));\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Indicator\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, currentSlide + 1, '', \"/\", images.length)))));\n};\n\n_s(ImagesZoom, \"ENeX91FO6neZAQ4/bvg19JSlEyo=\");\n\n_c = ImagesZoom;\nImagesZoom.propTypes = {\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzPzYxODciXSwibmFtZXMiOlsiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsIm9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsImxlbmd0aCIsInByb3BUeXBlcyIsImltYWdlIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUMxQyxrQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx5REFBVyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUEzQjtBQUNBLFNBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLEVBRUUsTUFBQyxnREFBRDtBQUFVLFdBQU8sRUFBRUwsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLENBRkYsRUFNRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUNFLGdCQUFZLEVBQUUsQ0FEaEI7QUFFRSxnQkFBWSxFQUFFLHNCQUFDTSxLQUFEO0FBQUEsYUFBV0gsZUFBZSxDQUFDRyxLQUFELENBQTFCO0FBQUEsS0FGaEI7QUFHRSxZQUFRLE1BSFY7QUFJRSxVQUFNLEVBQUUsS0FKVjtBQUtFLGdCQUFZLEVBQUUsQ0FMaEI7QUFNRSxrQkFBYyxFQUFFLENBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR1AsTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQ0MsQ0FBRDtBQUFBLFdBQ1YsTUFBQyxvREFBRDtBQUFjLFNBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFU7QUFBQSxHQUFYLENBUkgsQ0FERixFQWVFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsWUFBWSxHQUFHLENBRGxCLEVBRUcsRUFGSCxPQUVRSCxNQUFNLENBQUNXLE1BRmYsQ0FERixDQWZGLENBREYsQ0FORixDQURGO0FBaUNELENBcENEOztHQUFNWixVOztLQUFBQSxVO0FBc0NOQSxVQUFVLENBQUNhLFNBQVgsR0FBdUI7QUFDckJDLE9BQUssRUFBRUMsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRHRCO0FBRXJCaEIsU0FBTyxFQUFFYSxpREFBUyxDQUFDSSxJQUFWLENBQWVEO0FBRkgsQ0FBdkI7QUFLZWxCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xuXG5pbXBvcnQgeyBPdmVybGF5LCBIZWFkZXIsIENsb3NlQnRuLCBTbGlja1dyYXBwZXIsIEltYWdlV3JhcHBlciwgSW5kaWNhdG9yLCBHbG9iYWwgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxPdmVybGF5PlxuICAgICAgPEdsb2JhbCAvPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdG4+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxTbGlja1dyYXBwZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNsaWNrXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cbiAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPEltYWdlV3JhcHBlciBrZXk9e3Yuc3JjfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9IC8+XG4gICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGljaz5cbiAgICAgICAgICA8SW5kaWNhdG9yPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9XG4gICAgICAgICAgICAgIHsnJ30ve2ltYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0luZGljYXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsaWNrV3JhcHBlcj5cbiAgICA8L092ZXJsYXk+XG4gICk7XG59O1xuXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.js\n");

/***/ })

})