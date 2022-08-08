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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar UserIds = [\n    \"kim\",\n    \"lee\",\n    \"park\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random() * 3)];\n};\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nconsole.log(JSON.stringify(originalMsgs));\nvar MsgList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, msgs[targetIndex]), {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id\n                    }), x.id, false, {\n                        fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbXCJraW1cIiwgXCJsZWVcIiwgXCJwYXJrXCIsIFwiamF5XCJdO1xyXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpXTtcclxuXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gIC5maWxsKDApXHJcbiAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiA1MCAtIGksXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwIC0gaSkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXHJcbiAgfSkpO1xyXG5cclxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSk7XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIH07XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});