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
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "../node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!********************************************************************!*\
  !*** ../node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz8zMjJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "../node_modules/next/dist/pages/_error.js":
/*!*************************************************!*\
  !*** ../node_modules/next/dist/pages/_error.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"../node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"0 23px 0 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"49px\",\n        margin: 0,\n        padding: 0\n    }\n};\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNIRCxrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlHLHdCQUF3QixHQUFHQyxvSkFBK0Q7QUFDOUYsSUFBSUMsTUFBTSxHQUFHRix3QkFBd0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDdkQsSUFBSUUsS0FBSyxHQUFHSCx3QkFBd0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4Q0FBb0IsQ0FBQyxDQUFDO0FBQ25FLE1BQU1HLFdBQVcsR0FBRztBQUNoQixPQUFHLEVBQUUsYUFBYTtBQUNsQixPQUFHLEVBQUUsOEJBQThCO0FBQ25DLE9BQUcsRUFBRSxvQkFBb0I7QUFDekIsT0FBRyxFQUFFLHVCQUF1QjtDQUMvQjtBQUNELFNBQVNDLGdCQUFnQixDQUFDLEVBQUVDLEdBQUcsR0FBR0MsR0FBRyxHQUFHLEVBQUU7SUFDdEMsTUFBTUMsVUFBVSxHQUFHRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRixHQUFHLENBQUNFLFVBQVUsR0FBR0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFVBQVUsR0FBRyxHQUFHO0lBQ3RGLE9BQU87UUFDSEEsVUFBVTtLQUNiLENBQUM7Q0FDTDtBQUNELElBQUlDLFVBQVU7QUFDZCxNQUFNQyxLQUFLLFNBQVMsQ0FBQ0QsVUFBVSxHQUFHUCxNQUFNLENBQUNILE9BQU8sQ0FBQ1ksU0FBUyxDQUFDO0lBQ3ZEQyxNQUFNLEdBQUc7UUFDTCxNQUFNLEVBQUVKLFVBQVUsR0FBR0ssWUFBWSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUN2RCxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUssSUFBSVgsV0FBVyxDQUFDSSxVQUFVLENBQUMsSUFB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SUFDRFosRUFBRSxFQUFFO1FBQ0FpQixRQUFRLEVBQUUsTUFBTTtRQUNoQkMsVUFBVSxFQUFFLFFBQVE7UUFDcEJOLFVBQVUsRUFBRSxNQUFNO1FBQ2xCRSxNQUFNLEVBQUUsQ0FBQztRQUNURSxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0o7QUFDRDVDLGtCQUFlLEdBQUdhLEtBQUssQ0FBQyxDQUV4QixrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MDQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanNcIikuZGVmYXVsdDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xuICAgIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcidcbn07XG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZVxuICAgIH07XG59XG52YXIgX0NvbXBvbmVudDtcbmNsYXNzIEVycm9yIGV4dGVuZHMgKF9Db21wb25lbnQgPSBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAsIHdpdGhEYXJrTW9kZSA9dHJ1ZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICR7d2l0aERhcmtNb2RlID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YCA6ICcnfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKTtcbiAgICB9XG59XG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGVycm9yOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcGFkZGluZzogJzAgMjNweCAwIDAnLFxuICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiX0NvbXBvbmVudCIsIkVycm9yIiwiQ29tcG9uZW50IiwicmVuZGVyIiwid2l0aERhcmtNb2RlIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJoMSIsImRlc2MiLCJoMiIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();