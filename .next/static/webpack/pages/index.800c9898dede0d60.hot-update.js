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

/***/ "./components/cell.js":
/*!****************************!*\
  !*** ./components/cell.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cell\": function() { return /* binding */ Cell; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cell_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell.module.css */ \"./components/cell.module.css\");\n/* harmony import */ var _cell_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cell_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Cell(props1) {\n    var handleChange = function handleChange(e, props) {\n        console.log(\"yo\", props);\n    // e.value = !e.value;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        className: (_cell_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"switch\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: props1.value,\n                className: (_cell_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox),\n                onClick: props1.onClick,\n                onChange: handleChange(props1)\n            }, void 0, false, {\n                fileName: \"D:\\\\CodeStuff\\\\Website\\\\lostarkchecklist3\\\\components\\\\cell.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_cell_module_css__WEBPACK_IMPORTED_MODULE_2___default().slider)\n            }, void 0, false, {\n                fileName: \"D:\\\\CodeStuff\\\\Website\\\\lostarkchecklist3\\\\components\\\\cell.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CodeStuff\\\\Website\\\\lostarkchecklist3\\\\components\\\\cell.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Cell;\nvar _c;\n$RefreshReg$(_c, \"Cell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NlbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ2E7QUFFL0IsU0FBU0UsSUFBSSxDQUFDQyxNQUFLLEVBQUU7UUFFZkMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBRUYsS0FBSyxFQUFHO1FBQzdCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUNKLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLHNCQUFzQjtLQUN6QjtJQUVELHFCQUVJLDhEQUFDSyxPQUFLO1FBQUNDLFNBQVMsRUFBR1IsbUVBQWE7OzBCQUM1Qiw4REFBQ1UsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLFVBQVU7Z0JBQ2xCQyxPQUFPLEVBQUVWLE1BQUssQ0FBQ1csS0FBSztnQkFDcEJMLFNBQVMsRUFBR1Isa0VBQWU7Z0JBQzNCZSxPQUFPLEVBQUdiLE1BQUssQ0FBQ2EsT0FBTztnQkFDdkJDLFFBQVEsRUFBR2IsWUFBWSxDQUFDRCxNQUFLLENBQUM7Ozs7O29CQUUxQjswQkFDUiw4REFBQ2UsTUFBSTtnQkFBQ1QsU0FBUyxFQUFHUixnRUFBYTs7Ozs7b0JBQVU7Ozs7OztZQUVyQyxDQUNYO0NBQ0o7QUFyQmVDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jZWxsLmpzP2Q2NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NlbGwubW9kdWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2VsbChwcm9wcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlLCBwcm9wcykgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygneW8nLHByb3BzKTtcclxuICAgICAgICAvLyBlLnZhbHVlID0gIWUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsgc3R5bGVzLnN3aXRjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLmNoZWNrYm94IH0gXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DbGljayB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZUNoYW5nZShwcm9wcyl9PlxyXG4gICAgICAgICAgICB7Lyoge3Byb3BzLnZhbHVlfSAqL31cclxuICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgc3R5bGVzLnNsaWRlciB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkNlbGwiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJjbGFzc05hbWUiLCJzd2l0Y2giLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJjaGVja2JveCIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsInNwYW4iLCJzbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cell.js\n");

/***/ })

});