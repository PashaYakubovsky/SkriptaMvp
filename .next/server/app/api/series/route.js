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
exports.id = "app/api/series/route";
exports.ids = ["app/api/series/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fseries%2Froute&page=%2Fapi%2Fseries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fseries%2Froute.ts&appDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fseries%2Froute&page=%2Fapi%2Fseries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fseries%2Froute.ts&appDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pashayakubovsky_Desktop_skripta_src_app_api_series_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/series/route.ts */ \"(rsc)/./src/app/api/series/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/series/route\",\n        pathname: \"/api/series\",\n        filename: \"route\",\n        bundlePath: \"app/api/series/route\"\n    },\n    resolvedPagePath: \"/Users/pashayakubovsky/Desktop/skripta/src/app/api/series/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pashayakubovsky_Desktop_skripta_src_app_api_series_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/series/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZXJpZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlcmllcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlcmllcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnBhc2hheWFrdWJvdnNreSUyRkRlc2t0b3AlMkZza3JpcHRhJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnBhc2hheWFrdWJvdnNreSUyRkRlc2t0b3AlMkZza3JpcHRhJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNrQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3NrcmlwdGEvP2I0YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3Bhc2hheWFrdWJvdnNreS9EZXNrdG9wL3NrcmlwdGEvc3JjL2FwcC9hcGkvc2VyaWVzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZXJpZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZXJpZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Nlcmllcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9wYXNoYXlha3Vib3Zza3kvRGVza3RvcC9za3JpcHRhL3NyYy9hcHAvYXBpL3Nlcmllcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VyaWVzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fseries%2Froute&page=%2Fapi%2Fseries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fseries%2Froute.ts&appDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/series/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/series/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_Series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Series */ \"(rsc)/./src/models/Series.ts\");\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/connectMongo */ \"(rsc)/./src/utils/connectMongo.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const body = await req.json();\n        const series = await _models_Series__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            data: series,\n            message: \"Your Series created\"\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.Created\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: error\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    }\n}\nasync function GET(req) {\n    try {\n        const queryParams = new URLSearchParams(req.url.split(\"?\")[1]);\n        const userId = queryParams.get(\"userId\");\n        await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const series = await _models_Series__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n            userId\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            data: series\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: error\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZXJpZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ1c7QUFDVDtBQUVpQjtBQUVqRCxlQUFlSSxLQUFLQyxHQUFnQjtJQUN2QyxJQUFJO1FBQ0EsTUFBTUosK0RBQVlBO1FBQ2xCLE1BQU1LLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUUzQixNQUFNQyxTQUFTLE1BQU1SLHNEQUFNQSxDQUFDUyxNQUFNLENBQUNIO1FBRW5DLE9BQU9ILHFEQUFZQSxDQUFDSSxJQUFJLENBQ3BCO1lBQUVHLE1BQU1GO1lBQVFHLFNBQVM7UUFBc0IsR0FDL0M7WUFBRUMsUUFBUVYsaURBQWNBLENBQUNXLE9BQU87UUFBQztJQUV6QyxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPWCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVJLFNBQVNHO1FBQU0sR0FBRztZQUFFRixRQUFRVixpREFBY0EsQ0FBQ2EsVUFBVTtRQUFDO0lBQ3JGO0FBQ0o7QUFFTyxlQUFlQyxJQUFJWCxHQUFnQjtJQUN0QyxJQUFJO1FBQ0EsTUFBTVksY0FBYyxJQUFJQyxnQkFBZ0JiLElBQUljLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdELE1BQU1DLFNBQVNKLFlBQVlLLEdBQUcsQ0FBQztRQUUvQixNQUFNckIsK0RBQVlBO1FBQ2xCLE1BQU1PLFNBQVMsTUFBTVIsc0RBQU1BLENBQUN1QixJQUFJLENBQUM7WUFDN0JGO1FBQ0o7UUFFQSxPQUFPbEIscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFRyxNQUFNRjtRQUFPO0lBQzVDLEVBQUUsT0FBT00sT0FBTztRQUNaLE9BQU9YLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUksU0FBU0c7UUFBTSxHQUFHO1lBQUVGLFFBQVFWLGlEQUFjQSxDQUFDYSxVQUFVO1FBQUM7SUFDckY7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NrcmlwdGEvLi9zcmMvYXBwL2FwaS9zZXJpZXMvcm91dGUudHM/OTRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VyaWVzIGZyb20gXCJAL21vZGVscy9TZXJpZXNcIjtcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcIkAvdXRpbHMvY29ubmVjdE1vbmdvXCI7XG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZSB9IGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb25uZWN0TW9uZ28oKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgY29uc3Qgc2VyaWVzID0gYXdhaXQgU2VyaWVzLmNyZWF0ZShib2R5KTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgICB7IGRhdGE6IHNlcmllcywgbWVzc2FnZTogXCJZb3VyIFNlcmllcyBjcmVhdGVkXCIgfSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiBIdHRwU3RhdHVzQ29kZS5DcmVhdGVkIH1cbiAgICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBlcnJvciB9LCB7IHN0YXR1czogSHR0cFN0YXR1c0NvZGUuQmFkUmVxdWVzdCB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhyZXEudXJsLnNwbGl0KFwiP1wiKVsxXSk7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5UGFyYW1zLmdldChcInVzZXJJZFwiKTtcblxuICAgICAgICBhd2FpdCBjb25uZWN0TW9uZ28oKTtcbiAgICAgICAgY29uc3Qgc2VyaWVzID0gYXdhaXQgU2VyaWVzLmZpbmQoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBkYXRhOiBzZXJpZXMgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogZXJyb3IgfSwgeyBzdGF0dXM6IEh0dHBTdGF0dXNDb2RlLkJhZFJlcXVlc3QgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcmllcyIsImNvbm5lY3RNb25nbyIsIkh0dHBTdGF0dXNDb2RlIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwic2VyaWVzIiwiY3JlYXRlIiwiZGF0YSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJDcmVhdGVkIiwiZXJyb3IiLCJCYWRSZXF1ZXN0IiwiR0VUIiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ1cmwiLCJzcGxpdCIsInVzZXJJZCIsImdldCIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/series/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Series.ts":
/*!******************************!*\
  !*** ./src/models/Series.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SeriesSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    filmScriptId: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    userId: {\n        type: String,\n        required: true\n    },\n    history: {\n        type: JSON,\n        required: true\n    },\n    name: {\n        type: String,\n        required: false\n    }\n}, {\n    timestamps: true,\n    toJSON: {\n        versionKey: false,\n        virtuals: true,\n        transform: (_, ret)=>{\n            delete ret._id;\n        }\n    }\n});\nconst Series = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Series || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Series\", SeriesSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Series);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Nlcmllcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFXakQsTUFBTUcsZUFBZSxJQUFJRCw0Q0FBTUEsQ0FDM0I7SUFDSUUsY0FBYztRQUNWQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBQyxRQUFRO1FBQ0pKLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBRyxTQUFTO1FBQ0xMLE1BQU1NO1FBQ05KLFVBQVU7SUFDZDtJQUNBSyxNQUFNO1FBQ0ZQLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtBQUNKLEdBQ0E7SUFDSU0sWUFBWTtJQUNaQyxRQUFRO1FBQ0pDLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxXQUFXLENBQUNDLEdBQUdDO1lBQ1gsT0FBT0EsSUFBSUMsR0FBRztRQUNsQjtJQUNKO0FBQ0o7QUFFSixNQUFNQyxTQUFTcEIsNENBQU1BLENBQUNvQixNQUFNLElBQUlyQiwrQ0FBS0EsQ0FBQyxVQUFVRztBQUNoRCxpRUFBZWtCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za3JpcHRhLy4vc3JjL21vZGVscy9TZXJpZXMudHM/NzYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VyaWVzIHtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBmaWxtU2NyaXB0SWQ6IHN0cmluZztcbiAgICBoaXN0b3J5OiBKU09OO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbn1cbmNvbnN0IFNlcmllc1NjaGVtYSA9IG5ldyBTY2hlbWE8SVNlcmllcz4oXG4gICAge1xuICAgICAgICBmaWxtU2NyaXB0SWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcklkOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgICAgdHlwZTogSlNPTixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgIHRvSlNPTjoge1xuICAgICAgICAgICAgdmVyc2lvbktleTogZmFsc2UsXG4gICAgICAgICAgICB2aXJ0dWFsczogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogKF8sIHJldCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXQuX2lkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG4pO1xuY29uc3QgU2VyaWVzID0gbW9kZWxzLlNlcmllcyB8fCBtb2RlbChcIlNlcmllc1wiLCBTZXJpZXNTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgU2VyaWVzO1xuIl0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiU2VyaWVzU2NoZW1hIiwiZmlsbVNjcmlwdElkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwidXNlcklkIiwiaGlzdG9yeSIsIkpTT04iLCJuYW1lIiwidGltZXN0YW1wcyIsInRvSlNPTiIsInZlcnNpb25LZXkiLCJ2aXJ0dWFscyIsInRyYW5zZm9ybSIsIl8iLCJyZXQiLCJfaWQiLCJTZXJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Series.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/connectMongo.ts":
/*!***********************************!*\
  !*** ./src/utils/connectMongo.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nconst cached = {};\nasync function connectMongo() {\n    if (!MONGO_URI) {\n        throw new Error(\"Please define the MONGO_URI environment variable inside .env.local\");\n    }\n    if (cached.connection) {\n        return cached.connection;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, opts);\n    }\n    try {\n        cached.connection = await cached.promise;\n    } catch (e) {\n        cached.promise = undefined;\n        throw e;\n    }\n    return cached.connection;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvY29ubmVjdE1vbmdvLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFDdkMsTUFBTUcsU0FBK0UsQ0FBQztBQUN0RixlQUFlQztJQUNYLElBQUksQ0FBQ0osV0FBVztRQUNaLE1BQU0sSUFBSUssTUFBTTtJQUNwQjtJQUNBLElBQUlGLE9BQU9HLFVBQVUsRUFBRTtRQUNuQixPQUFPSCxPQUFPRyxVQUFVO0lBQzVCO0lBQ0EsSUFBSSxDQUFDSCxPQUFPSSxPQUFPLEVBQUU7UUFDakIsTUFBTUMsT0FBTztZQUNUQyxnQkFBZ0I7UUFDcEI7UUFDQU4sT0FBT0ksT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsV0FBV1E7SUFDakQ7SUFDQSxJQUFJO1FBQ0FMLE9BQU9HLFVBQVUsR0FBRyxNQUFNSCxPQUFPSSxPQUFPO0lBQzVDLEVBQUUsT0FBT0ksR0FBRztRQUNSUixPQUFPSSxPQUFPLEdBQUdLO1FBQ2pCLE1BQU1EO0lBQ1Y7SUFDQSxPQUFPUixPQUFPRyxVQUFVO0FBQzVCO0FBQ0EsaUVBQWVGLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za3JpcHRhLy4vc3JjL3V0aWxzL2Nvbm5lY3RNb25nby50cz9hYWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09fVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJO1xuY29uc3QgY2FjaGVkOiB7IGNvbm5lY3Rpb24/OiB0eXBlb2YgbW9uZ29vc2U7IHByb21pc2U/OiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gY29ubmVjdE1vbmdvKCkge1xuICAgIGlmICghTU9OR09fVVJJKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiKTtcbiAgICB9XG4gICAgaWYgKGNhY2hlZC5jb25uZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ubmVjdGlvbjtcbiAgICB9XG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJLCBvcHRzKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkLmNvbm5lY3Rpb24gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkLmNvbm5lY3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ287XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiY2FjaGVkIiwiY29ubmVjdE1vbmdvIiwiRXJyb3IiLCJjb25uZWN0aW9uIiwicHJvbWlzZSIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJlIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/connectMongo.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fseries%2Froute&page=%2Fapi%2Fseries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fseries%2Froute.ts&appDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashayakubovsky%2FDesktop%2Fskripta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();