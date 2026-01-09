module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/context/ThemeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/ThemeContext.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
}),
"[project]/app/data/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    id: {
        hero: {
            name: "REZA RACHMAN P.",
            email: "rezarachmanp@gmail.com",
            phone: "+62 8123-3675-867",
            address: "Jl. Sunan Muria II no. 7, Malang"
        },
        profile: {
            heading: "Profil",
            description: "Analis Substantif Project lebih dari 5 tahun bekerja di lembaga konsultan sektor publik dan sektor swasta. Memiliki pengalaman beberapa project mengolah data yang berkaitan dengan perilaku konsumen. Seorang yang dapat diandalkan, bertanggung jawab, suka bekerja sama dengan tim, selalu tepat waktu, dan <em>ready to level up</em>.",
            educationHeading: "Pendidikan Terakhir",
            university: "S1 Universitas Brawijaya",
            major: "Administrasi Bisnis"
        },
        skills: {
            heading: "Keahlian",
            responsibilities: [
                "Input data responden",
                "Menyusun dokumen substansi",
                "Menyusun laporan beserta seluruh insights",
                "Analisis data",
                "Media sosial",
                "Mengamati dan mengidentifikasi tren"
            ],
            competencyHeading: "Kompetensi",
            competencies: [
                "Manajemen waktu",
                "Mampu bekerja dalam beberapa project",
                "Memiliki keterampilan kompetensi dasar komputer",
                "Mampu menggunakan Ms. Office",
                "Mampu berkomunikasi dengan baik",
                "Mampu bekerja dalam tim dengan baik"
            ]
        },
        experience: {
            heading: "Pengalaman Project",
            projects: [
                {
                    year: "2016",
                    title: "Analisis Sistem Distribusi Tiket Bus Antar Kota Antar Provinsi (AKAP) dan Peta Jaringan Para Pelakunya Di Provinsi Jawa Timur"
                },
                {
                    year: "2017",
                    title: "Person in Charge Jakarta Marketing Week 2017 oleh Mark Plus Inc. untuk Fakultas Ilmu Administrasi Universitas Brawijaya"
                },
                {
                    year: "2017",
                    title: "Manajemen Akselerasi Pembangunan Kabupaten Gresik"
                },
                {
                    year: "2018",
                    title: "Pendidikan dan Pelatihan Pemasaran dan Promosi Pariwisata Pemerintah Kabupaten Malang"
                },
                {
                    year: "2018",
                    title: "Penyusunan Model BUMDes untuk Jenis Layanan Publik Based on Practice Kerjasama Perguruan Tinggi"
                },
                {
                    year: "2019",
                    title: "Analisa Pasar untuk Promosi dan Pemasaran Obyek Pariwisata Kabupaten Malang"
                },
                {
                    year: "2019",
                    title: "Analisis Pemasaran Kepariwisataan Kabupaten Malang"
                },
                {
                    year: "2019",
                    title: "Model Kolaborasi Lembaga Akademis dan Korporasi dalam Rangka Inkubasi BUMDes"
                },
                {
                    year: "2019",
                    title: "Kajian Kuantitatif dan Calon Ibukota Kabupaten dalam Rangka Pembentukan Calon Kabupaten Lombok Selatan sebagai Pemekaran dari Kabupaten Lombok Timur"
                },
                {
                    year: "2020",
                    title: "Penyusunan Cascading (Manajemen Kinerja) di Lingkungan Badan Narkotika Nasional"
                },
                {
                    year: "2020",
                    title: "Penyusunan Rancangan Peraturan Presiden Badan Narkotika Nasional"
                },
                {
                    year: "2021",
                    title: "Analisis Jabatan di Badan Narkotika Nasional"
                },
                {
                    year: "2022",
                    title: "Analisis Pasar Wisatawan Nusantara di Jawa Timur"
                },
                {
                    year: "2022",
                    title: "Penyusunan Peta Potensi dan Peluang Usaha di Kabupaten Tuban"
                }
            ]
        }
    },
    en: {
        hero: {
            name: "REZA RACHMAN P.",
            email: "rezarachmanp@gmail.com",
            phone: "+62 8123-3675-867",
            address: "Jl. Sunan Muria II no. 7, Malang" // Addresses usually stay same
        },
        profile: {
            heading: "Profile",
            description: "Project Substantive Analyst with over 5 years of experience working in public and private sector consulting agencies. Experienced in several projects processing data related to consumer behavior. Reliable, responsible, team-oriented, always on time, and <em>ready to level up</em>.",
            educationHeading: "Education",
            university: "Bachelors from Brawijaya University",
            major: "Business Administration"
        },
        skills: {
            heading: "Skills",
            responsibilities: [
                "Respondent data entry",
                "Drafting substantive documents",
                "Compiling reports with all insights",
                "Data analysis",
                "Social media",
                "Observing and identifying trends"
            ],
            competencyHeading: "Competencies",
            competencies: [
                "Time management",
                "Able to work on multiple projects",
                "Basic computer competency skills",
                "Proficient in Ms. Office",
                "Good communication skills",
                "Good teamwork skills"
            ]
        },
        experience: {
            heading: "Project Experience",
            projects: [
                {
                    year: "2016",
                    title: "Analysis of Inter-City Inter-Province (AKAP) Bus Ticket Distribution System and Network Map in East Java Province"
                },
                {
                    year: "2017",
                    title: "Person in Charge Jakarta Marketing Week 2017 by Mark Plus Inc. for Faculty of Administrative Science, Brawijaya University"
                },
                {
                    year: "2017",
                    title: "Management of Development Acceleration in Gresik Regency"
                },
                {
                    year: "2018",
                    title: "Education and Training for Tourism Marketing and Promotion, Malang Regency Government"
                },
                {
                    year: "2018",
                    title: "Development of BUMDes Model for Public Service Types Based on Practice of Higher Education Cooperation"
                },
                {
                    year: "2019",
                    title: "Market Analysis for Promotion and Marketing of Tourism Objects in Malang Regency"
                },
                {
                    year: "2019",
                    title: "Tourism Marketing Analysis of Malang Regency"
                },
                {
                    year: "2019",
                    title: "Collaboration Model of Academic Institutions and Corporations in BUMDes Incubation"
                },
                {
                    year: "2019",
                    title: "Quantitative Study and Regency Capital Candidates regarding the Formation of South Lombok Regency Candidates as Expansion from East Lombok Regency"
                },
                {
                    year: "2020",
                    title: "Cascading Preparation (Performance Management) within the National Narcotics Agency"
                },
                {
                    year: "2020",
                    title: "Drafting of Presidential Regulation for the National Narcotics Agency"
                },
                {
                    year: "2021",
                    title: "Job Analysis at the National Narcotics Agency"
                },
                {
                    year: "2022",
                    title: "Analysis of Domestic Tourist Market in East Java"
                },
                {
                    year: "2022",
                    title: "Mapping of Potential and Business Opportunities in Tuban Regency"
                }
            ]
        }
    }
};
}),
"[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("id");
    const t = (key)=>{
        const keys = key.split(".");
        let value = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
        for (const k of keys){
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        return value;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/LanguageContext.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
}),
"[project]/app/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Header() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: "fixed",
            top: 0,
            right: 0,
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            zIndex: 1000
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLanguage(language === "id" ? "en" : "id"),
                style: {
                    background: "var(--secondary)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                },
                "aria-label": "Toggle Language",
                children: language.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleTheme,
                style: {
                    background: "var(--secondary)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    padding: "0.5rem 1rem",
                    borderRadius: "50%",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px"
                },
                "aria-label": "Toggle Theme",
                children: theme === "dark" ? "☀️" : "🌙"
            }, void 0, false, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de2dd40f._.js.map