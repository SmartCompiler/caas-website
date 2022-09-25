"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/statics */ \"./utilities/statics.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./components/Header/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/behnam/dev/project/front/caas/components/Header/index.tsx\";\n\n\n\n\nfunction Header() {\n  const {\n    0: selectedSection,\n    1: setSelectedSection\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utilities_statics__WEBPACK_IMPORTED_MODULE_1__.sectionsTitle[0]);\n  const {\n    0: isShow,\n    1: setIsShow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const {\n    0: lastScrollY,\n    1: setLastScrollY\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.addEventListener('scroll', handleScrollWindow);\n    return () => {\n      window.removeEventListener('scroll', handleScrollWindow);\n    };\n  }, [lastScrollY]);\n\n  function handleScrollWindow() {\n    if (window.scrollY > lastScrollY) setIsShow(false);\n    if (window.scrollY <= lastScrollY) setIsShow(true);\n    setLastScrollY(window.scrollY);\n  }\n\n  const buttonItem = _utilities_statics__WEBPACK_IMPORTED_MODULE_1__.sectionsTitle.map((btnTitle, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.HeaderBtnLi, {\n    className: \"ml-4\",\n    selectedSection: selectedSection,\n    itemTitle: btnTitle,\n    onClick: () => setSelectedSection(btnTitle),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n      href: `#${btnTitle}`,\n      className: \"sectionButton\",\n      children: btnTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this)\n  }, `buttonItem_${index}`, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, this));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.HeaderWrapper, {\n    isShowHeader: isShow,\n    className: \"flex justify-between items-center p-6 fixed top-0 left-0 w-full\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n      href: `#${_utilities_statics__WEBPACK_IMPORTED_MODULE_1__.sectionsTitle[0]}`,\n      className: \"mr-auto font-bold\",\n      children: \"SCASS\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"sectionWrapper flex justify-around\",\n      children: buttonItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU00sTUFBVCxHQUFrQjtFQUM3QixNQUFNO0lBQUEsR0FBRUMsZUFBRjtJQUFBLEdBQW1CQztFQUFuQixJQUEwQ04sK0NBQVEsQ0FBK0JDLGdFQUEvQixDQUF4RDtFQUNBLE1BQU07SUFBQSxHQUFFTSxNQUFGO0lBQUEsR0FBVUM7RUFBVixJQUF3QlIsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0VBQ0EsTUFBTTtJQUFBLEdBQUVTLFdBQUY7SUFBQSxHQUFlQztFQUFmLElBQWtDViwrQ0FBUSxDQUFDLENBQUQsQ0FBaEQ7RUFFQUQsZ0RBQVMsQ0FBRSxNQUFNO0lBRWZZLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGtCQUFsQztJQUVBLE9BQVMsTUFBTTtNQUNiRixNQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxrQkFBckM7SUFDRCxDQUZEO0VBR0QsQ0FQUSxFQU9OLENBQUNKLFdBQUQsQ0FQTSxDQUFUOztFQVNBLFNBQVNJLGtCQUFULEdBQThCO0lBRTVCLElBQUlGLE1BQU0sQ0FBQ0ksT0FBUCxHQUFpQk4sV0FBckIsRUFBbUNELFNBQVMsQ0FBQyxLQUFELENBQVQ7SUFDbkMsSUFBSUcsTUFBTSxDQUFDSSxPQUFQLElBQWtCTixXQUF0QixFQUFvQ0QsU0FBUyxDQUFDLElBQUQsQ0FBVDtJQUVwQ0UsY0FBYyxDQUFDQyxNQUFNLENBQUNJLE9BQVIsQ0FBZDtFQUNEOztFQUVELE1BQU1DLFVBQVUsR0FBR2YsaUVBQUEsQ0FBbUIsQ0FBQ2lCLFFBQUQsRUFBV0MsS0FBWCxrQkFDbEMsOERBQUMsK0NBQUQ7SUFDSSxTQUFTLEVBQUMsTUFEZDtJQUdJLGVBQWUsRUFBRWQsZUFIckI7SUFJSSxTQUFTLEVBQUVhLFFBSmY7SUFLSSxPQUFPLEVBQUcsTUFBTVosa0JBQWtCLENBQUNZLFFBQUQsQ0FMdEM7SUFBQSx1QkFPSTtNQUFHLElBQUksRUFBRyxJQUFHQSxRQUFTLEVBQXRCO01BQXlCLFNBQVMsRUFBQyxlQUFuQztNQUFBLFVBQXFEQTtJQUFyRDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBUEosR0FFVSxjQUFhQyxLQUFNLEVBRjdCO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFEZSxDQUFuQjtFQVlGLG9CQUNFLDhEQUFDLGlEQUFEO0lBQWUsWUFBWSxFQUFFWixNQUE3QjtJQUFxQyxTQUFTLEVBQUMsaUVBQS9DO0lBQUEsd0JBQ0k7TUFBRyxJQUFJLEVBQUcsSUFBR04sZ0VBQWlCLEVBQTlCO01BQWlDLFNBQVMsRUFBQyxtQkFBM0M7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQUVJO01BQUksU0FBUyxFQUFDLG9DQUFkO01BQUEsVUFDTWU7SUFETjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhYXMvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2VjdGlvbnNUaXRsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9zdGF0aWNzJ1xuaW1wb3J0IHsgSGVhZGVyQnRuTGksIEhlYWRlcldyYXBwZXIgfSBmcm9tICcuL3N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgY29uc3QgWyBzZWxlY3RlZFNlY3Rpb24sIHNldFNlbGVjdGVkU2VjdGlvbiBdID0gdXNlU3RhdGU8dHlwZW9mIHNlY3Rpb25zVGl0bGVbbnVtYmVyXT4oc2VjdGlvbnNUaXRsZVswXSlcbiAgICBjb25zdCBbIGlzU2hvdywgc2V0SXNTaG93IF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFsgbGFzdFNjcm9sbFksIHNldExhc3RTY3JvbGxZIF0gPSB1c2VTdGF0ZSgwKVxuICAgIFxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICBcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxXaW5kb3cpXG4gIFxuICAgICAgcmV0dXJuICggKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsV2luZG93KVxuICAgICAgfSlcbiAgICB9LCBbbGFzdFNjcm9sbFldKVxuICBcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGxXaW5kb3coKSB7XG4gIFxuICAgICAgaWYoIHdpbmRvdy5zY3JvbGxZID4gbGFzdFNjcm9sbFkgKSBzZXRJc1Nob3coZmFsc2UpXG4gICAgICBpZiggd2luZG93LnNjcm9sbFkgPD0gbGFzdFNjcm9sbFkgKSBzZXRJc1Nob3codHJ1ZSlcbiAgICAgIFxuICAgICAgc2V0TGFzdFNjcm9sbFkod2luZG93LnNjcm9sbFkpXG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uSXRlbSA9IHNlY3Rpb25zVGl0bGUubWFwKCAoYnRuVGl0bGUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxIZWFkZXJCdG5MaSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtNCcgXG4gICAgICAgICAgICBrZXk9e2BidXR0b25JdGVtXyR7aW5kZXh9YH1cbiAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbj17c2VsZWN0ZWRTZWN0aW9ufVxuICAgICAgICAgICAgaXRlbVRpdGxlPXtidG5UaXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBzZXRTZWxlY3RlZFNlY3Rpb24oYnRuVGl0bGUpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8YSBocmVmPXtgIyR7YnRuVGl0bGV9YH0gY2xhc3NOYW1lPVwic2VjdGlvbkJ1dHRvblwiPnsgYnRuVGl0bGUgfTwvYT5cbiAgICAgICAgPC9IZWFkZXJCdG5MaT5cbiAgICApKVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlcldyYXBwZXIgaXNTaG93SGVhZGVyPXtpc1Nob3d9IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtNiBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsJz5cbiAgICAgICAgPGEgaHJlZj17YCMke3NlY3Rpb25zVGl0bGVbMF19YH0gY2xhc3NOYW1lPSdtci1hdXRvIGZvbnQtYm9sZCc+U0NBU1M8L2E+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZWN0aW9uV3JhcHBlciBmbGV4IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICB7IGJ1dHRvbkl0ZW0gfVxuICAgICAgICA8L3VsPlxuICAgIDwvSGVhZGVyV3JhcHBlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzZWN0aW9uc1RpdGxlIiwiSGVhZGVyQnRuTGkiLCJIZWFkZXJXcmFwcGVyIiwiSGVhZGVyIiwic2VsZWN0ZWRTZWN0aW9uIiwic2V0U2VsZWN0ZWRTZWN0aW9uIiwiaXNTaG93Iiwic2V0SXNTaG93IiwibGFzdFNjcm9sbFkiLCJzZXRMYXN0U2Nyb2xsWSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGxXaW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImJ1dHRvbkl0ZW0iLCJtYXAiLCJidG5UaXRsZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ }),

/***/ "./components/Header/style.ts":
/*!************************************!*\
  !*** ./components/Header/style.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderBtnLi\": () => (/* binding */ HeaderBtnLi),\n/* harmony export */   \"HeaderWrapper\": () => (/* binding */ HeaderWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({\n  displayName: \"style__HeaderWrapper\",\n  componentId: \"sc-z5o1rz-0\"\n})([\"transition:all .3s;transform:translateY(\", \");background:linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 100%);\"], props => props.isShowHeader ? '0' : \"-200%\");\nconst HeaderBtnLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({\n  displayName: \"style__HeaderBtnLi\",\n  componentId: \"sc-z5o1rz-1\"\n})([\"position:relative;&::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);height:1px;transition:all .3s;background-color:var(--color-white);width:\", \";}\"], props => props.selectedSection === props.itemTitle ? '100%' : '0');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFNTyxNQUFNQyxhQUFhLEdBQUdELDBFQUFIO0VBQUE7RUFBQTtBQUFBLHdIQUVERyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsWUFBTixHQUFxQixHQUFyQixHQUEyQixPQUZuQyxDQUFuQjtBQVVBLE1BQU1DLFdBQVcsR0FBR0wsc0VBQUg7RUFBQTtFQUFBO0FBQUEsNExBV05HLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxlQUFOLEtBQTBCSixLQUFLLENBQUNLLFNBQWhDLEdBQTRDLE1BQTVDLEdBQXFELEdBWHhELENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fhcy8uL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLnRzPzMxNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHNlY3Rpb25zVGl0bGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvc3RhdGljcydcblxuaW50ZXJmYWNlIEhlYWRlcldyYXBwZXJJbnRlcmZhY2Uge1xuICAgIGlzU2hvd0hlYWRlcjogYm9vbGVhblxufVxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuaGVhZGVyPEhlYWRlcldyYXBwZXJJbnRlcmZhY2U+YFxudHJhbnNpdGlvbjogYWxsIC4zcztcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgkeyBwcm9wcyA9PiBwcm9wcy5pc1Nob3dIZWFkZXIgPyAnMCcgOiBcIi0yMDAlXCJ9KTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAwMDAgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG5gXG5cbmludGVyZmFjZSBIZWFkZXJCdG5MaUludGVyZmFjZSB7XG4gICAgc2VsZWN0ZWRTZWN0aW9uOiB0eXBlb2Ygc2VjdGlvbnNUaXRsZVtudW1iZXJdO1xuICAgIGl0ZW1UaXRsZTogdHlwZW9mIHNlY3Rpb25zVGl0bGVbbnVtYmVyXTtcbn1cbmV4cG9ydCBjb25zdCBIZWFkZXJCdG5MaSA9IHN0eWxlZC5saTxIZWFkZXJCdG5MaUludGVyZmFjZT5gXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgICAgICB3aWR0aDogJHsgcHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWRTZWN0aW9uID09PSBwcm9wcy5pdGVtVGl0bGUgPyAnMTAwJScgOiAnMCd9O1xuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiSGVhZGVyV3JhcHBlciIsImhlYWRlciIsInByb3BzIiwiaXNTaG93SGVhZGVyIiwiSGVhZGVyQnRuTGkiLCJsaSIsInNlbGVjdGVkU2VjdGlvbiIsIml0ZW1UaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/style.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/behnam/dev/project/front/caas/pages/index.tsx\";\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUVBLE1BQU1DLElBQWMsR0FBRyxNQUFNO0VBQ3pCLG9CQUNJO0lBQUEsdUJBQ0ksOERBQUMsMERBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURKLGlCQURKO0FBS0gsQ0FORDs7QUFRQSxpRUFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhYXMvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utilities/statics.ts":
/*!******************************!*\
  !*** ./utilities/statics.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sectionsTitle\": () => (/* binding */ sectionsTitle)\n/* harmony export */ });\nconst sectionsTitle = ['Home', 'Features', 'Vision', 'Contact Us'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXRpZXMvc3RhdGljcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBT08sTUFBTUEsYUFBK0IsR0FBRyxDQUMzQyxNQUQyQyxFQUUzQyxVQUYyQyxFQUczQyxRQUgyQyxFQUkzQyxZQUoyQyxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhYXMvLi91dGlsaXRpZXMvc3RhdGljcy50cz8yOTY4Il0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgc2VjdGlvbnNBcnJheVR5cGUgPSBbXG4gICAgJ0hvbWUnLFxuICAgICdGZWF0dXJlcycsXG4gICAgJ1Zpc2lvbicsXG4gICAgJ0NvbnRhY3QgVXMnXG5dIFxuXG5leHBvcnQgY29uc3Qgc2VjdGlvbnNUaXRsZTpzZWN0aW9uc0FycmF5VHlwZSA9IFtcbiAgICAnSG9tZScsXG4gICAgJ0ZlYXR1cmVzJyxcbiAgICAnVmlzaW9uJyxcbiAgICAnQ29udGFjdCBVcydcbl0gIl0sIm5hbWVzIjpbInNlY3Rpb25zVGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utilities/statics.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();