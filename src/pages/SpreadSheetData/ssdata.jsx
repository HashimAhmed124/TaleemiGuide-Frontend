import React, { useState, useEffect } from "react";
import {
    Home,
    Folder,
    FileText,
    ChevronDown,
    Search,
    ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ProgramTable = ({ rows, searchTerm, activeTable }) => {
    const showQualification = activeTable === "bs";
    const showStandard = activeTable === "bs" || activeTable === "ms";

    return (
        <table className="w-full text-left">
            <thead className="bg-[#0B1C3C] text-gray-400 text-sm">
                <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">University</th>
                    <th className="px-6 py-4">Program</th>
                    {showStandard && <th className="px-6 py-4">Standard Nomenclature</th>}
                    {showQualification && <th className="px-6 py-4">Qualification</th>}
                </tr>
            </thead>
            <tbody>
                {rows.map((item, idx) => {
                    const isMatch = searchTerm
                        ? Object.values(item)
                            .filter(Boolean)
                            .some((val) =>
                                val.toString().toLowerCase().includes(searchTerm.toLowerCase())
                            )
                        : false;

                    return (
                        <tr
                            key={item.id || idx}
                            className={`border-t border-[#1E3A5F] hover:bg-white hover:text-black ${isMatch ? "bg-orange-500 text-white" : "bg-[#0B1C3C] text-white"
                                }`}
                        >
                            <td className="px-6 py-4">{item.id}</td>
                            <td className="px-6 py-4">{item.university || "-"}</td>
                            <td className="px-6 py-4">{item.program || "-"}</td>
                            {showStandard && (
                                <td className="px-6 py-4">{item.standardNomenclature || "-"}</td>
                            )}
                            {showQualification && (
                                <td className="px-6 py-4">{item.qualification || "-"}</td>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const sidebarItems = [
    {
        title: "Bachelors Programs",
        icon: <Home size={18} className="text-orange-500" />,
        subItems: ["Computer Science", "Mathematics", "Engineering", "Business", "Arts"],
        type: "bs",
    },
    {
        title: "MS/M.Phil Programs",
        icon: <Folder size={18} className="text-orange-500" />,
        subItems: ["Computer Science", "Mathematics", "Engineering", "Business", "Arts"],
        type: "ms",
    },
    {
        title: "PhD Programs",
        icon: <FileText size={18} className="text-orange-500" />,
        subItems: ["Computer Science", "Mathematics", "Engineering", "Business", "Arts"],
        type: "phd",
    },
];

const SpreadSheetData = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [activeTable, setActiveTable] = useState("bs");
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchHint, setShowSearchHint] = useState(false);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const Heading = {
        bs: "Bachelors Programs",
        ms: "MS/M.Phil Programs",
        phd: "PhD Programs",
    };

    useEffect(() => {
        if (showSearchHint) {
            const timer = setTimeout(() => setShowSearchHint(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showSearchHint]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPrograms = async () => {
            try {
                setLoading(true);
                setError("");

                const baseUrl = "http://localhost:5000/api/v1/programs";
                const url = `${baseUrl}/${activeTable}?search=${encodeURIComponent(searchTerm)}`;

                const response = await fetch(url, { signal: controller.signal });
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed to fetch programs");
                }

                setRows(result.data || []);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
        return () => controller.abort();
    }, [activeTable, searchTerm]);

    return (
        <main>
            <div className="flex h-screen bg-gray-100">
                <aside className="w-64 bg-[#0B1C3C] text-white flex flex-col">
                    <div className="px-6 py-6 border-b border-[#1E3A5F]">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>

                    <nav className="flex flex-col mt-6 gap-2 px-4">
                        {sidebarItems.map((item, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-[#FF6900]/30">
                                    <div
                                        className="flex items-center gap-3 cursor-pointer"
                                        onClick={() => item.type && setActiveTable(item.type)}
                                    >
                                        {item.icon}
                                        {item.title}
                                    </div>

                                    {item.subItems.length > 0 && (
                                        <ChevronDown
                                            size={18}
                                            onClick={() => setOpenMenu(openMenu === index ? null : index)}
                                            className={`cursor-pointer transition-transform ${openMenu === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </div>

                                {openMenu === index && (
                                    <div className="ml-6 mt-2">
                                        <div className="relative flex flex-col space-y-2">
                                            <div className="absolute left-[8px] top-0 bottom-2 w-[2px] bg-gray-600"></div>
                                            {item.subItems.map((sub, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="group flex h-[30px] items-center gap-1 pl-8 pr-4 py-1 text-sm text-gray-300 hover:bg-[#FF6900]/30 relative rounded-lg cursor-pointer"
                                                    onClick={() => setSearchTerm(sub)}
                                                >
                                                    <span className="absolute left-[4px] w-3 h-3 bg-gray-400 rounded-full border-2 border-[#0B1C3C] group-hover:bg-orange-500"></span>
                                                    {sub}
                                                </div>
                                            ))}
                                        </div>

                                        <p
                                            className="flex text-xs text-orange-500 -mt-1 ml-28 italic hover:underline cursor-pointer"
                                            onClick={() => {
                                                setOpenMenu(index);
                                                setShowSearchHint(true);
                                            }}
                                        >
                                            Show more
                                            <ChevronRight size={14} />
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </aside>

                <section className="flex-1 flex flex-col bg-[#0B1C3C]/95 text-white">
                    <div className="flex justify-between items-center px-8 py-5 border-b border-[#1E3A5F]">
                        <div>
                            <h1 className="text-xl font-semibold w-[300px]">
                                {Heading[activeTable] || "University Programs"}
                            </h1>
                            <p className="text-sm text-gray-400">Program directory</p>
                        </div>

                        <div className="relative w-full flex justify-end">
                            <motion.input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search programs..."
                                className="px-4 py-2 text-sm bg-[#0B1C3C] text-white placeholder:text-gray-400 rounded-xl w-1/3 outline-none border border-gray-600"
                                animate={
                                    showSearchHint
                                        ? {
                                            scale: [1, 1.05, 1],
                                            boxShadow: [
                                                "0 0 0px #FF6900",
                                                "0 0 12px #FF6900",
                                                "0 0 0px #FF6900",
                                            ],
                                        }
                                        : {}
                                }
                                transition={{ duration: 1, repeat: 3 }}
                            />
                            <Search className="absolute right-4 top-2 text-gray-500" />
                        </div>
                    </div>

                    <div className="p-8 overflow-auto">
                        <div className="bg-[#0B1C3C] border border-[#1E3A5F] rounded-xl overflow-hidden">
                            {loading ? (
                                <div className="p-6 text-white">Loading programs...</div>
                            ) : error ? (
                                <div className="p-6 text-red-400">{error}</div>
                            ) : (
                                <ProgramTable
                                    rows={rows}
                                    searchTerm={searchTerm}
                                    activeTable={activeTable}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SpreadSheetData;