(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_80343e._.js", {

"[project]/components/admin/ui/description-form.tsx [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DescriptionForm": (()=>DescriptionForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/textarea.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-edge-ssr] (ecmascript) <export default as Check>");
;
;
;
;
const DescriptionForm = ({ toggleModal, id, setTitle, setDescription, request, onDescriptionUpdate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md bg-card px-4 pb-6 pt-3 font-geistsans",
        onClick: (e)=>e.stopPropagation(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "text-sm",
            onSubmit: async (e)=>{
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const title = formData.get("title");
                const description = formData.get("description");
                if (request === "POST") {
                    const response = await fetch(`/api/descriptions`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title,
                            description
                        })
                    });
                    if (response.ok) {
                        onDescriptionUpdate?.();
                    }
                } else if (request === "PUT") {
                    await fetch(`/api/descriptions`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id,
                            title,
                            description
                        })
                    });
                }
                toggleModal?.();
                onDescriptionUpdate?.();
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                    className: "my-4",
                    name: "title",
                    defaultValue: setTitle,
                    placeholder: "write a title..."
                }, void 0, false, {
                    fileName: "[project]/components/admin/ui/description-form.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                    name: "description",
                    defaultValue: setDescription,
                    placeholder: "write a story..."
                }, void 0, false, {
                    fileName: "[project]/components/admin/ui/description-form.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    className: "mt-3 flex w-full items-center gap-1 text-center",
                    type: "submit",
                    children: [
                        "Rate",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "border-2 border-white/0"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/ui/description-form.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/ui/description-form.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/ui/description-form.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/ui/description-form.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/admin/description-modal.tsx [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DescriptionModal": (()=>DescriptionModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$ui$2f$description$2d$form$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/admin/ui/description-form.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$backdrop$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/backdrop.tsx [app-edge-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const DescriptionModal = ({ children, id, title, description, request, onDescriptionUpdate })=>{
    const [modal, toggleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    if (!isClient) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    const ratingModal = document.getElementById("description-modal") || document.body;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>toggleModal(!modal),
                className: "font-geistsans text-sm",
                variant: "outline",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/admin/description-modal.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$backdrop$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>toggleModal(!modal),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$ui$2f$description$2d$form$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionForm"], {
                    id: id,
                    setTitle: title,
                    setDescription: description,
                    toggleModal: ()=>toggleModal(!modal),
                    request: request,
                    onDescriptionUpdate: onDescriptionUpdate
                }, void 0, false, {
                    fileName: "[project]/components/admin/description-modal.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/description-modal.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, this), ratingModal)
        ]
    }, void 0, true);
};
}}),
"[project]/components/ui/description.tsx [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Description": (()=>Description)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$description$2d$modal$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/admin/description-modal.tsx [app-edge-ssr] (ecmascript)");
"use client";
;
;
;
;
const Description = ({ isAdmin = false, isRoot = false })=>{
    const [descriptionsData, setDescriptionsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchDescriptions = async ()=>{
        const descriptions = await fetch(`/api/descriptions`).then((res)=>res.json());
        descriptions ? setDescriptionsData(descriptions) : [];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDescriptions();
    }, []);
    const deleteDescription = async (id)=>{
        await fetch(`/api/descriptions`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        });
        fetchDescriptions();
    };
    const handleRefreshDescriptions = ()=>{
        fetchDescriptions();
        console.log("fetch description");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$description$2d$modal$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionModal"], {
                onDescriptionUpdate: handleRefreshDescriptions,
                request: "POST",
                children: "Make New Story"
            }, void 0, false, {
                fileName: "[project]/components/ui/description.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            isRoot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: descriptionsData.map(({ id, title, description, createdAt, updatedAt }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-newyear text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/description.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-center font-halimount text-2xl tracking-[.05rem] drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)]",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/description.tsx",
                                    lineNumber: 64,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/description.tsx",
                                lineNumber: 63,
                                columnNumber: 17
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/ui/description.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, this))
            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: descriptionsData.map(({ id, title, description, createdAt, updatedAt }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-t-2 px-8 py-4 font-geistsans text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-1 font-semibold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/description.tsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/ui/description.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-x-2 font-geistsans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$description$2d$modal$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionModal"], {
                                        request: "PUT",
                                        onDescriptionUpdate: handleRefreshDescriptions,
                                        id: id,
                                        title: title,
                                        description: description,
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/description.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>deleteDescription(id),
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/description.tsx",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/description.tsx",
                                lineNumber: 83,
                                columnNumber: 19
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/ui/description.tsx",
                        lineNumber: 76,
                        columnNumber: 15
                    }, this))
            }, void 0, false)
        ]
    }, void 0, true);
};
;
}}),
"[project]/components/ui/user-review.tsx [app-edge-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "UserReview": (()=>UserReview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$star$2d$rating$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/star-rating.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
"use client";
;
;
;
;
const UserReview = ({ id, review, rating, testimonial, img, userName, userEmail, isAdmin, isRoot, onTestimonialToggle })=>{
    const [isTestimonial, setIsTestimonial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(testimonial);
    const setTestimonial = async (newTestimonialStatus, id)=>{
        const response = await fetch(`/api/reviews`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                testimonial: newTestimonialStatus,
                id
            })
        });
        if (response.ok) {
            setIsTestimonial(newTestimonialStatus);
            if (onTestimonialToggle) {
                onTestimonialToggle();
            }
        } else {
            console.error("Failed to update testimonial status");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isRoot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 rounded-lg border-[2.5px] bg-white px-6 py-4 text-black drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "size-12 rounded-full border-[1px]",
                    src: img,
                    alt: "User Profile"
                }, void 0, false, {
                    fileName: "[project]/components/ui/user-review.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-[.05rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-newyear text-lg font-semibold tracking-wide",
                            children: [
                                userName,
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-halimount text-xl tracking-wide opacity-60",
                            children: userEmail
                        }, void 0, false, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "-ml-[.2rem] mt-[.15rem] flex flex-row gap-[0.03rem] text-yellow-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$star$2d$rating$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                                rating: rating ?? 0,
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/ui/user-review.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-halimount mb-[1rem] mt-[.4rem] text-xl leading-5 tracking-wide",
                            children: review
                        }, void 0, false, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                isTestimonial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-[.4rem] mt-[.1rem] leading-5",
                                    children: "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/user-review.tsx",
                                    lineNumber: 71,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-[.4rem] mt-[.1rem] leading-5",
                                    children: "false"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/user-review.tsx",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, this),
                                id !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setTestimonial(!isTestimonial, id),
                                    children: "Testimonial"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/user-review.tsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/user-review.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/user-review.tsx",
            lineNumber: 49,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 border-b-2 px-8 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "size-12 rounded-full border-[3px]",
                    src: img,
                    alt: "User Profile"
                }, void 0, false, {
                    fileName: "[project]/components/ui/user-review.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-[.05rem] font-geistsans text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: userName
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/user-review.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neutral-500",
                                    children: userEmail
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/user-review.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "-ml-[.2rem] mt-[.15rem] flex flex-row gap-[0.03rem] text-yellow-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$star$2d$rating$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                                rating: rating ?? 0,
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/ui/user-review.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-[.5rem] mt-[.1rem] leading-5",
                            children: review
                        }, void 0, false, {
                            fileName: "[project]/components/ui/user-review.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: id !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "ml-auto",
                                onClick: ()=>setTestimonial(!isTestimonial, id),
                                children: "Toggle Testimonial"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/user-review.tsx",
                                lineNumber: 103,
                                columnNumber: 19
                            }, this)
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/user-review.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/user-review.tsx",
            lineNumber: 85,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
;
}}),
"[project]/app/(main)/route/page.tsx [app-edge-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_80343e._.js.map