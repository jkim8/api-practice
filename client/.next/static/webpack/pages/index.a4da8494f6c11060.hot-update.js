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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar MsgList = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query;\n    var userId = query.userId || query.userid || \"\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), hasNext = ref2[0], setHasNext = ref2[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fetchMoreEl);\n    var onCreate = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"post\", \"/messages\", {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error(\"Something Wrong\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onUpdate = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error(\"something wrong\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + \"\";\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(msgs);\n                            newMsgs.splice(targetIndex, 1);\n                            return newMsgs;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, newMsgs;\n            return C_Users_junhokim_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\", {\n                            params: {\n                                cursor: ((ref = msgs[msgs.length - 1]) === null || ref === void 0 ? void 0 : ref.id) || \"\"\n                            }\n                        });\n                    case 3:\n                        newMsgs = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(msgs).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(newMsgs));\n                        });\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (intersecting) getMessages();\n    }, [\n        intersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 64,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junhokim\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"ZDG4Ap4k5dO2Piw3+uAj26I99KI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFBb0Q7QUFDWjtBQUNSO0FBQ0U7QUFDRDtBQUMwQjtBQUUzRCxJQUFNUSxPQUFPLEdBQUcsV0FBTTs7SUFDcEIsSUFBTSxLQUFPLEdBQUtMLHNEQUFTLEVBQUUsQ0FBckJNLEtBQUs7SUFDYixJQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTSxJQUFJRCxLQUFLLENBQUNFLE1BQU0sSUFBSSxFQUFFO0lBQ2pELElBQXdCVixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCVyxJQUFJLEdBQWFYLEdBQVksR0FBekIsRUFBRVksT0FBTyxHQUFJWixHQUFZLEdBQWhCO0lBQ3BCLElBQWtDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDYSxTQUFTLEdBQWtCYixJQUFjLEdBQWhDLEVBQUVjLFlBQVksR0FBSWQsSUFBYyxHQUFsQjtJQUM5QixJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUFyQ2UsT0FBTyxHQUFnQmYsSUFBYyxHQUE5QixFQUFFZ0IsVUFBVSxHQUFJaEIsSUFBYyxHQUFsQjtJQUMxQixJQUFNaUIsV0FBVyxHQUFHaEIsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBTWlCLFlBQVksR0FBR1osb0VBQWlCLENBQUNXLFdBQVcsQ0FBQztJQUVuRCxJQUFNRSxRQUFRO21CQUFHLDJPQUFPQyxJQUFJLEVBQUs7Z0JBQ3pCQyxNQUFNOzs7OzsrQkFBU2hCLG9EQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTs0QkFBRWUsSUFBSSxFQUFKQSxJQUFJOzRCQUFFWCxNQUFNLEVBQU5BLE1BQU07eUJBQUUsQ0FBQzs7d0JBQTdEWSxNQUFNLFlBQXVEOzRCQUM5REEsTUFBTTs7Ozt3QkFBRSxNQUFNQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7d0JBQzVDVixPQUFPLENBQUMsU0FBQ0QsSUFBSTttQ0FBSztnQ0FBQ1UsTUFBTTs2QkFBVSxDQUFqQixNQUFpQixDQUFSLHFGQUFHVixJQUFJLENBQUpBLENBQUs7eUJBQUEsQ0FBQyxDQUFDOzs7Ozs7U0FDdEM7d0JBSktRLFFBQVEsQ0FBVUMsSUFBSTs7O09BSTNCO0lBRUQsSUFBTUcsUUFBUTttQkFBRywyT0FBT0gsSUFBSSxFQUFFSSxFQUFFLEVBQUs7Z0JBQzdCSCxNQUFNOzs7OzsrQkFBU2hCLG9EQUFPLENBQUMsS0FBSyxFQUFFLFlBQVcsQ0FBSyxPQUFIbUIsRUFBRSxDQUFFLEVBQUU7NEJBQUVKLElBQUksRUFBSkEsSUFBSTs0QkFBRVgsTUFBTSxFQUFOQSxNQUFNO3lCQUFFLENBQUM7O3dCQUFsRVksTUFBTSxZQUE0RDs0QkFDbkVBLE1BQU07Ozs7d0JBQUUsTUFBTUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O3dCQUM1Q1YsT0FBTyxDQUFDLFNBQUNELElBQUksRUFBSzs0QkFDaEIsSUFBTWMsV0FBVyxHQUFHZCxJQUFJLENBQUNlLFNBQVMsQ0FBQyxTQUFDQyxHQUFHO3VDQUFLQSxHQUFHLENBQUNILEVBQUUsS0FBS0EsRUFBRTs2QkFBQSxDQUFDOzRCQUMxRCxJQUFJQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLE9BQU9kLElBQUksQ0FBQzs0QkFDakMsSUFBTWlCLE9BQU8sR0FBSSxxRkFBR2pCLElBQUksQ0FBSkE7NEJBQ3BCaUIsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLEVBQUVKLE1BQU0sQ0FBQyxDQUFDOzRCQUN2QyxPQUFPTyxPQUFPLENBQUM7eUJBQ2hCLENBQUMsQ0FBQzt3QkFDSEUsUUFBUSxFQUFFLENBQUM7Ozs7OztTQUNaO3dCQVhLUCxRQUFRLENBQVVILElBQUksRUFBRUksRUFBRTs7O09BVy9CO0lBRUQsSUFBTU8sUUFBUTttQkFBRywyT0FBT1AsRUFBRSxFQUFLO2dCQUN2QlEsVUFBVTs7Ozs7K0JBQVMzQixvREFBTyxDQUFDLFFBQVEsRUFBRSxZQUFXLENBQUssT0FBSG1CLEVBQUUsQ0FBRSxFQUFFOzRCQUM1RFMsTUFBTSxFQUFFO2dDQUFFeEIsTUFBTSxFQUFOQSxNQUFNOzZCQUFFO3lCQUNuQixDQUFDOzt3QkFGSXVCLFVBQVUsWUFFZDt3QkFDRnBCLE9BQU8sQ0FBQyxTQUFDRCxJQUFJLEVBQUs7NEJBQ2hCLElBQU1jLFdBQVcsR0FBR2QsSUFBSSxDQUFDZSxTQUFTLENBQUMsU0FBQ0MsR0FBRzt1Q0FBS0EsR0FBRyxDQUFDSCxFQUFFLEtBQUtRLFVBQVUsR0FBRyxFQUFFOzZCQUFBLENBQUM7NEJBQ3ZFLElBQUlQLFdBQVcsR0FBRyxDQUFDLEVBQUUsT0FBT2QsSUFBSSxDQUFDOzRCQUNqQyxJQUFNaUIsT0FBTyxHQUFJLHFGQUFHakIsSUFBSSxDQUFKQTs0QkFDcEJpQixPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMvQixPQUFPRyxPQUFPLENBQUM7eUJBQ2hCLENBQUMsQ0FBQzs7Ozs7O1NBQ0o7d0JBWEtHLFFBQVEsQ0FBVVAsRUFBRTs7O09BV3pCO0lBRUQsSUFBTU0sUUFBUSxHQUFHO2VBQU1oQixZQUFZLENBQUMsSUFBSSxDQUFDO0tBQUE7SUFFekMsSUFBTW9CLFdBQVc7bUJBQUcsNk9BQVk7Z0JBRVZ2QixHQUFxQixFQURuQ2lCLE9BQU87Ozs7OzsrQkFBU3ZCLG9EQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRTs0QkFDaEQ0QixNQUFNLEVBQUU7Z0NBQUVFLE1BQU0sRUFBRXhCLENBQUFBLENBQUFBLEdBQXFCLEdBQXJCQSxJQUFJLENBQUNBLElBQUksQ0FBQ3lCLE1BQU0sR0FBRyxDQUFDLENBQUMsY0FBckJ6QixHQUFxQixXQUFJLEdBQXpCQSxLQUFBQSxDQUF5QixHQUF6QkEsR0FBcUIsQ0FBRWEsRUFBRSxLQUFJLEVBQUU7NkJBQUU7eUJBQ3BELENBQUM7O3dCQUZJSSxPQUFPLFlBRVg7d0JBQ0ZoQixPQUFPLENBQUMsU0FBQ0QsSUFBSTttQ0FBSyxxRkFBSUEsSUFBSSxDQUFKQSxRQUFNLHFGQUFHaUIsT0FBTyxDQUFQQSxDQUFRO3lCQUFBLENBQUMsQ0FBQzs7Ozs7O1NBQzFDO3dCQUxLTSxXQUFXOzs7T0FLaEI7SUFFRG5DLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUltQixZQUFZLEVBQUVnQixXQUFXLEVBQUUsQ0FBQztLQUNqQyxFQUFFO1FBQUNoQixZQUFZO0tBQUMsQ0FBQyxDQUFDO0lBRW5CLHFCQUNFOztZQUNHVCxNQUFNLGtCQUFJLDhEQUFDTCxpREFBUTtnQkFBQ2lDLE1BQU0sRUFBRWxCLFFBQVE7Ozs7O3FCQUFJOzBCQUN6Qyw4REFBQ21CLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUNyQjVCLElBQUksQ0FBQzZCLEdBQUcsQ0FBQyxTQUFDQyxDQUFDO3lDQUNWLDhEQUFDdEMsZ0RBQU8sNEtBRUZzQyxDQUFDO3dCQUNMbEIsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQlEsUUFBUSxFQUFFO21DQUFNQSxRQUFRLENBQUNVLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBQzt5QkFBQTt3QkFDOUJrQixTQUFTLEVBQUU7bUNBQU01QixZQUFZLENBQUMyQixDQUFDLENBQUNqQixFQUFFLENBQUM7eUJBQUE7d0JBQ25DbUIsU0FBUyxFQUFFOUIsU0FBUyxLQUFLNEIsQ0FBQyxDQUFDakIsRUFBRTt3QkFDN0JvQixJQUFJLEVBQUVuQyxNQUFNO3dCQU5QZ0MsQ0FBQyxDQUFDakIsRUFBRTs7Ozs2QkFPVDtpQkFDSCxDQUFDOzs7OztxQkFDQzswQkFDTCw4REFBQ3FCLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRTdCLFdBQVc7Ozs7O3FCQUFJOztvQkFDeEIsQ0FDSDtDQUNIO0dBekVLVixPQUFPOztRQUNPTCxrREFBUztRQU1OSSxnRUFBaUI7OztBQVBsQ0MsS0FBQUEsT0FBTztBQTJFYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbFwiO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8IFwiXCI7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwb3N0XCIsIFwiL21lc3NhZ2VzXCIsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwiU29tZXRoaW5nIFdyb25nXCIpO1xyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicHV0XCIsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoXCJkZWxldGVcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcclxuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgXCJcIik7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIiwge1xyXG4gICAgICBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8IFwiXCIgfSxcclxuICAgIH0pO1xyXG4gICAgc2V0TXNncygobXNncykgPT4gWy4uLm1zZ3MsIC4uLm5ld01zZ3NdKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGludGVyc2VjdGluZykgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbaW50ZXJzZWN0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});