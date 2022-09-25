/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/statics */ \"./utilities/statics.ts\");\n/* harmony import */ var _utilities_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_statics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./components/Header/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/behnam/dev/project/front/caas/components/Header/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      lastScrollY = _useState2[0],\n      setLastScrollY = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.addEventListener('scroll', handleScrollWindow);\n    return function () {\n      window.removeEventListener('scroll', handleScrollWindow);\n    };\n  }, [lastScrollY]);\n\n  function handleScrollWindow() {\n    if (window.scrollY > lastScrollY) setIsShow(false);\n    if (window.scrollY <= lastScrollY) setIsShow(true);\n    setLastScrollY(window.scrollY);\n  }\n\n  var buttonItem = _utilities_statics__WEBPACK_IMPORTED_MODULE_1__.sectionsTitle.map(function (btnTitle, index) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n        href: \"#\".concat(btnTitle),\n        className: \"sectionButton\",\n        children: btnTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, _this)\n    }, \"buttonItem_\".concat(index), false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.HeaderWrapper, {\n    isShowHeader: isShow,\n    className: \"flex justify-between items-center p-6 fixed top-0 left-0 w-full\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"mr-auto font-bold\",\n      children: \"SCASS\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"sectionWrapper flex justify-around\",\n      children: buttonItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"2bBPk75CTb5gl68GTgF7m9nkQC4=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssTUFBVCxHQUFrQjtFQUFBOztFQUFBOztFQUU3QixnQkFBOEJILCtDQUFRLENBQUMsSUFBRCxDQUF0QztFQUFBLElBQVFJLE1BQVI7RUFBQSxJQUFnQkMsU0FBaEI7O0VBQ0EsaUJBQXdDTCwrQ0FBUSxDQUFDLENBQUQsQ0FBaEQ7RUFBQSxJQUFRTSxXQUFSO0VBQUEsSUFBcUJDLGNBQXJCOztFQUVBUixnREFBUyxDQUFFLFlBQU07SUFFZlMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0Msa0JBQWxDO0lBRUEsT0FBUyxZQUFNO01BQ2JGLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGtCQUFyQztJQUNELENBRkQ7RUFHRCxDQVBRLEVBT04sQ0FBQ0osV0FBRCxDQVBNLENBQVQ7O0VBU0EsU0FBU0ksa0JBQVQsR0FBOEI7SUFFNUIsSUFBSUYsTUFBTSxDQUFDSSxPQUFQLEdBQWlCTixXQUFyQixFQUFtQ0QsU0FBUyxDQUFDLEtBQUQsQ0FBVDtJQUNuQyxJQUFJRyxNQUFNLENBQUNJLE9BQVAsSUFBa0JOLFdBQXRCLEVBQW9DRCxTQUFTLENBQUMsSUFBRCxDQUFUO0lBRXBDRSxjQUFjLENBQUNDLE1BQU0sQ0FBQ0ksT0FBUixDQUFkO0VBQ0Q7O0VBRUQsSUFBTUMsVUFBVSxHQUFHWixpRUFBQSxDQUFtQixVQUFDYyxRQUFELEVBQVdDLEtBQVg7SUFBQSxvQkFDbEM7TUFBQSx1QkFDSTtRQUFHLElBQUksYUFBTUQsUUFBTixDQUFQO1FBQXlCLFNBQVMsRUFBQyxlQUFuQztRQUFBLFVBQXFEQTtNQUFyRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREosd0JBQXVCQyxLQUF2QjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRGtDO0VBQUEsQ0FBbkIsQ0FBbkI7RUFNRixvQkFDRSw4REFBQyxpREFBRDtJQUFlLFlBQVksRUFBRVosTUFBN0I7SUFBcUMsU0FBUyxFQUFDLGlFQUEvQztJQUFBLHdCQUNJO01BQUssU0FBUyxFQUFDLG1CQUFmO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREosZUFFSTtNQUFJLFNBQVMsRUFBQyxvQ0FBZDtNQUFBLFVBQ01TO0lBRE47TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBUUQ7O0dBcEN1QlY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9mMmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzZWN0aW9uc1RpdGxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3N0YXRpY3MnXG5pbXBvcnQgeyBIZWFkZXJXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gICAgY29uc3QgWyBpc1Nob3csIHNldElzU2hvdyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbIGxhc3RTY3JvbGxZLCBzZXRMYXN0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMClcbiAgICBcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsV2luZG93KVxuICBcbiAgICAgIHJldHVybiAoICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbFdpbmRvdylcbiAgICAgIH0pXG4gICAgfSwgW2xhc3RTY3JvbGxZXSlcbiAgXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsV2luZG93KCkge1xuICBcbiAgICAgIGlmKCB3aW5kb3cuc2Nyb2xsWSA+IGxhc3RTY3JvbGxZICkgc2V0SXNTaG93KGZhbHNlKVxuICAgICAgaWYoIHdpbmRvdy5zY3JvbGxZIDw9IGxhc3RTY3JvbGxZICkgc2V0SXNTaG93KHRydWUpXG4gICAgICBcbiAgICAgIHNldExhc3RTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKVxuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbkl0ZW0gPSBzZWN0aW9uc1RpdGxlLm1hcCggKGJ0blRpdGxlLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtgYnV0dG9uSXRlbV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgPGEgaHJlZj17YCMke2J0blRpdGxlfWB9IGNsYXNzTmFtZT1cInNlY3Rpb25CdXR0b25cIj57IGJ0blRpdGxlIH08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgKSlcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyV3JhcHBlciBpc1Nob3dIZWFkZXI9e2lzU2hvd30gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC02IGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byBmb250LWJvbGQnPlNDQVNTPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZWN0aW9uV3JhcHBlciBmbGV4IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICB7IGJ1dHRvbkl0ZW0gfVxuICAgICAgICA8L3VsPlxuICAgIDwvSGVhZGVyV3JhcHBlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzZWN0aW9uc1RpdGxlIiwiSGVhZGVyV3JhcHBlciIsIkhlYWRlciIsImlzU2hvdyIsInNldElzU2hvdyIsImxhc3RTY3JvbGxZIiwic2V0TGFzdFNjcm9sbFkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsV2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJidXR0b25JdGVtIiwibWFwIiwiYnRuVGl0bGUiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ }),

/***/ "./utilities/statics.ts":
/*!******************************!*\
  !*** ./utilities/statics.ts ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});