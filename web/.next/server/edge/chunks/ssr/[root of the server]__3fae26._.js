(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/[root of the server]__3fae26._.js", {

"[project]/db/env.ts [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-edge-ssr] (ecmascript)");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {
        DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().url(),
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().min(1)
    },
    runtimeEnv: {
        NODE_ENV: ("TURBOPACK compile-time value", "development"),
        DATABASE_URL: process.env.DATABASE_URL
    }
});
}}),
"[externals]/ [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer");

module.exports = mod;
}}),
"[externals]/ [external] (node:events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:events");

module.exports = mod;
}}),
"[externals]/ [external] (node:util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:util");

module.exports = mod;
}}),
"[project]/db/index.ts [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "connection": (()=>connection),
    "database": (()=>database)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$env$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/db/env.ts [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mysql2/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql2$2f$driver$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/drizzle-orm/mysql2/driver.js [app-edge-ssr] (ecmascript) <locals>");
;
;
;
let database;
let connection;
if (__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$env$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "production") {
    connection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"].createConnection(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$env$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["env"].DATABASE_URL);
    database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql2$2f$driver$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["drizzle"])(connection);
} else {
    if (!global.database) {
        connection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"].createConnection(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$env$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["env"].DATABASE_URL);
        global.database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql2$2f$driver$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["drizzle"])(connection);
    }
    database = global.database;
}
;
}}),
"[project]/db/schema.ts [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "comments": (()=>comments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/drizzle-orm/mysql-core/table.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/drizzle-orm/mysql-core/columns/serial.js [app-edge-ssr] (ecmascript)");
;
const comments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["mysqlTable"])("comments_table", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["serial"])().primaryKey()
});
}}),
"[project]/app/(main)/route/page.tsx [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "runtime": (()=>runtime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
"use client";
;
const runtime = "edge";
const DrizzlePage = ()=>{
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch("/api/comments", {
            method: "POST"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "grid h-[100svh] items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "comment",
                        type: "text",
                        placeholder: "comment"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/route/page.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "comment"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/route/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/route/page.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(main)/route/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(main)/route/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DrizzlePage;
}}),
"[project]/app/(main)/route/page.tsx [app-edge-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3fae26._.js.map