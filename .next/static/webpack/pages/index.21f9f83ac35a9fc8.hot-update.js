"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/statics */ \"./utilities/statics.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./components/Header/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/behnam/dev/project/front/caas/components/Header/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utilities_statics__WEBPACK_IMPORTED_MODULE_1__.sectionsTitle[0]),\n      selectedSection = _useState[0],\n      setSelectedSection = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isShow = _useState2[0],\n      setIsShow = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      lastScrollY = _useState3[0],\n      setLastScrollY = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.addEventListener('scroll', handleScrollWindow);\n    return function () {\n      window.removeEventListener('scroll', handleScrollWindow);\n    };\n  }, [lastScrollY]);\n\n  function handleScrollWindow() {\n    if (window.scrollY > lastScrollY) setIsShow(false);\n    if (window.scrollY <= lastScrollY) setIsShow(true);\n    setLastScrollY(window.scrollY);\n  }\n\n  var buttonItem = _utilities_statics__WEBPACK_IMPORTED_MODULE_1__.sectionsTitle.map(function (btnTitle, index) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.HeaderBtnLi, {\n      className: \"ml-4\",\n      onClick: function onClick() {\n        return setSelectedSection(btnTitle);\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n        href: \"#\".concat(btnTitle),\n        className: \"sectionButton\",\n        children: btnTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, _this)\n    }, \"buttonItem_\".concat(index), false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.HeaderWrapper, {\n    isShowHeader: isShow,\n    className: \"flex justify-between items-center p-6 fixed top-0 left-0 w-full\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"mr-auto font-bold\",\n      children: \"SCASS\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"sectionWrapper flex justify-around\",\n      children: buttonItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"J0q+7QNrFnMDBfKn4Bk6dOKH2PM=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTSxNQUFULEdBQWtCO0VBQUE7O0VBQUE7O0VBQzdCLGdCQUFnREosK0NBQVEsQ0FBK0JDLGdFQUEvQixDQUF4RDtFQUFBLElBQVFJLGVBQVI7RUFBQSxJQUF5QkMsa0JBQXpCOztFQUNBLGlCQUE4Qk4sK0NBQVEsQ0FBQyxJQUFELENBQXRDO0VBQUEsSUFBUU8sTUFBUjtFQUFBLElBQWdCQyxTQUFoQjs7RUFDQSxpQkFBd0NSLCtDQUFRLENBQUMsQ0FBRCxDQUFoRDtFQUFBLElBQVFTLFdBQVI7RUFBQSxJQUFxQkMsY0FBckI7O0VBRUFYLGdEQUFTLENBQUUsWUFBTTtJQUVmWSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxrQkFBbEM7SUFFQSxPQUFTLFlBQU07TUFDYkYsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0Qsa0JBQXJDO0lBQ0QsQ0FGRDtFQUdELENBUFEsRUFPTixDQUFDSixXQUFELENBUE0sQ0FBVDs7RUFTQSxTQUFTSSxrQkFBVCxHQUE4QjtJQUU1QixJQUFJRixNQUFNLENBQUNJLE9BQVAsR0FBaUJOLFdBQXJCLEVBQW1DRCxTQUFTLENBQUMsS0FBRCxDQUFUO0lBQ25DLElBQUlHLE1BQU0sQ0FBQ0ksT0FBUCxJQUFrQk4sV0FBdEIsRUFBb0NELFNBQVMsQ0FBQyxJQUFELENBQVQ7SUFFcENFLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDSSxPQUFSLENBQWQ7RUFDRDs7RUFFRCxJQUFNQyxVQUFVLEdBQUdmLGlFQUFBLENBQW1CLFVBQUNpQixRQUFELEVBQVdDLEtBQVg7SUFBQSxvQkFDbEMsOERBQUMsK0NBQUQ7TUFDSSxTQUFTLEVBQUMsTUFEZDtNQUdJLE9BQU8sRUFBRztRQUFBLE9BQU1iLGtCQUFrQixDQUFDWSxRQUFELENBQXhCO01BQUEsQ0FIZDtNQUFBLHVCQUtJO1FBQUcsSUFBSSxhQUFNQSxRQUFOLENBQVA7UUFBeUIsU0FBUyxFQUFDLGVBQW5DO1FBQUEsVUFBcURBO01BQXJEO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFMSix3QkFFdUJDLEtBRnZCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FEa0M7RUFBQSxDQUFuQixDQUFuQjtFQVVGLG9CQUNFLDhEQUFDLGlEQUFEO0lBQWUsWUFBWSxFQUFFWixNQUE3QjtJQUFxQyxTQUFTLEVBQUMsaUVBQS9DO0lBQUEsd0JBQ0k7TUFBSyxTQUFTLEVBQUMsbUJBQWY7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQUVJO01BQUksU0FBUyxFQUFDLG9DQUFkO01BQUEsVUFDTVM7SUFETjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFRRDs7R0F4Q3VCWjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2YyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNlY3Rpb25zVGl0bGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvc3RhdGljcydcbmltcG9ydCB7IEhlYWRlckJ0bkxpLCBIZWFkZXJXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIGNvbnN0IFsgc2VsZWN0ZWRTZWN0aW9uLCBzZXRTZWxlY3RlZFNlY3Rpb24gXSA9IHVzZVN0YXRlPHR5cGVvZiBzZWN0aW9uc1RpdGxlW251bWJlcl0+KHNlY3Rpb25zVGl0bGVbMF0pXG4gICAgY29uc3QgWyBpc1Nob3csIHNldElzU2hvdyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbIGxhc3RTY3JvbGxZLCBzZXRMYXN0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMClcbiAgICBcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsV2luZG93KVxuICBcbiAgICAgIHJldHVybiAoICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbFdpbmRvdylcbiAgICAgIH0pXG4gICAgfSwgW2xhc3RTY3JvbGxZXSlcbiAgXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsV2luZG93KCkge1xuICBcbiAgICAgIGlmKCB3aW5kb3cuc2Nyb2xsWSA+IGxhc3RTY3JvbGxZICkgc2V0SXNTaG93KGZhbHNlKVxuICAgICAgaWYoIHdpbmRvdy5zY3JvbGxZIDw9IGxhc3RTY3JvbGxZICkgc2V0SXNTaG93KHRydWUpXG4gICAgICBcbiAgICAgIHNldExhc3RTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKVxuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbkl0ZW0gPSBzZWN0aW9uc1RpdGxlLm1hcCggKGJ0blRpdGxlLCBpbmRleCkgPT4gKFxuICAgICAgICA8SGVhZGVyQnRuTGkgXG4gICAgICAgICAgICBjbGFzc05hbWU9J21sLTQnIFxuICAgICAgICAgICAga2V5PXtgYnV0dG9uSXRlbV8ke2luZGV4fWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gc2V0U2VsZWN0ZWRTZWN0aW9uKGJ0blRpdGxlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGEgaHJlZj17YCMke2J0blRpdGxlfWB9IGNsYXNzTmFtZT1cInNlY3Rpb25CdXR0b25cIj57IGJ0blRpdGxlIH08L2E+XG4gICAgICAgIDwvSGVhZGVyQnRuTGk+XG4gICAgKSlcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXJXcmFwcGVyIGlzU2hvd0hlYWRlcj17aXNTaG93fSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTYgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvIGZvbnQtYm9sZCc+U0NBU1M8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlY3Rpb25XcmFwcGVyIGZsZXgganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgIHsgYnV0dG9uSXRlbSB9XG4gICAgICAgIDwvdWw+XG4gICAgPC9IZWFkZXJXcmFwcGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNlY3Rpb25zVGl0bGUiLCJIZWFkZXJCdG5MaSIsIkhlYWRlcldyYXBwZXIiLCJIZWFkZXIiLCJzZWxlY3RlZFNlY3Rpb24iLCJzZXRTZWxlY3RlZFNlY3Rpb24iLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJsYXN0U2Nyb2xsWSIsInNldExhc3RTY3JvbGxZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbFdpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiYnV0dG9uSXRlbSIsIm1hcCIsImJ0blRpdGxlIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ }),

/***/ "./components/Header/style.ts":
/*!************************************!*\
  !*** ./components/Header/style.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderBtnLi\": function() { return /* binding */ HeaderBtnLi; },\n/* harmony export */   \"HeaderWrapper\": function() { return /* binding */ HeaderWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header.withConfig({\n  displayName: \"style__HeaderWrapper\",\n  componentId: \"sc-z5o1rz-0\"\n})([\"transition:all .3s;transform:translateY(\", \");background:linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 100%);\"], function (props) {\n  return props.isShowHeader ? '0' : \"-200%\";\n});\nvar HeaderBtnLi = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li.withConfig({\n  displayName: \"style__HeaderBtnLi\",\n  componentId: \"sc-z5o1rz-1\"\n})([\"position:relative;&::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);height:1px;background-color:var(--color-white);width:100%;}\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUtPLElBQU1DLGFBQWEsR0FBR0QsMkVBQUg7RUFBQTtFQUFBO0FBQUEsd0hBRUQsVUFBQUcsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsWUFBTixHQUFxQixHQUFyQixHQUEyQixPQUEvQjtBQUFBLENBRkosQ0FBbkI7QUFNQSxJQUFNQyxXQUFXLEdBQUdMLHVFQUFIO0VBQUE7RUFBQTtBQUFBLHdLQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZS50cz8zMTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBIZWFkZXJXcmFwcGVySW50ZXJmYWNlIHtcbiAgICBpc1Nob3dIZWFkZXI6IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmhlYWRlcjxIZWFkZXJXcmFwcGVySW50ZXJmYWNlPmBcbnRyYW5zaXRpb246IGFsbCAuM3M7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHsgcHJvcHMgPT4gcHJvcHMuaXNTaG93SGVhZGVyID8gJzAnIDogXCItMjAwJVwifSk7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAwMDAwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyQnRuTGkgPSBzdHlsZWQubGlgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIkhlYWRlcldyYXBwZXIiLCJoZWFkZXIiLCJwcm9wcyIsImlzU2hvd0hlYWRlciIsIkhlYWRlckJ0bkxpIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/style.ts\n"));

/***/ }),

/***/ "./utilities/statics.ts":
/*!******************************!*\
  !*** ./utilities/statics.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sectionsTitle\": function() { return /* binding */ sectionsTitle; }\n/* harmony export */ });\nvar sectionsTitle = ['Home', 'Features', 'Vision', 'Contact Us'];\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXRpZXMvc3RhdGljcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBT08sSUFBTUEsYUFBK0IsR0FBRyxDQUMzQyxNQUQyQyxFQUUzQyxVQUYyQyxFQUczQyxRQUgyQyxFQUkzQyxZQUoyQyxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlsaXRpZXMvc3RhdGljcy50cz8yOTY4Il0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgc2VjdGlvbnNBcnJheVR5cGUgPSBbXG4gICAgJ0hvbWUnLFxuICAgICdGZWF0dXJlcycsXG4gICAgJ1Zpc2lvbicsXG4gICAgJ0NvbnRhY3QgVXMnXG5dIFxuXG5leHBvcnQgY29uc3Qgc2VjdGlvbnNUaXRsZTpzZWN0aW9uc0FycmF5VHlwZSA9IFtcbiAgICAnSG9tZScsXG4gICAgJ0ZlYXR1cmVzJyxcbiAgICAnVmlzaW9uJyxcbiAgICAnQ29udGFjdCBVcydcbl0gIl0sIm5hbWVzIjpbInNlY3Rpb25zVGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utilities/statics.ts\n"));

/***/ })

});