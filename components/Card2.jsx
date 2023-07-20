"use client";
import React, { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ZAxis,
    Circle,
} from "recharts";
import { Day, Week, Month, Year } from '../Data/Modals.js'
const gradientId = 'linearGradientId';
const gradientDotId = 'radialGradientId';
const GradientDot = (props) => {
    const { cx, cy, fill } = props;
    return (
        <svg className="cdd">
            <defs>

                <linearGradient id={gradientDotId} x1="0%" x2="0%" y1="100%" y2="0%">
                    <stop offset="0%" stop-color="rgb(255,200,67)" stop-opacity="1" />
                    <stop offset="100%" stop-color="rgb(255,143,23)" stop-opacity="1" />
                </linearGradient>
            </defs>
            <circle cx={cx} cy={cy} fill={`url(#${gradientDotId})`} r={8} />
        </svg>
    );
};


const Card2 = () => {



    const [activePage, setActivePage] = useState("Day");

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    const getDataForActivePage = () => {
        switch (activePage) {
            case "Day":
                return Day;
            case "Week":
                return Week;
            case "Month":
                return Month;
            case "Year":
                return Year;
            default:
                return Day;
        }
    };

    const activePageData = getDataForActivePage();


    return (
        <div className="mt-4">
            <ul className="flex mb-4  flex-wrap text-sm font-medium items-center text-center justify-between" style={{ color: "#aeb8c4" }}>
                <li className="mr-2">
                    <a
                        href="#"
                        onClick={() => handlePageClick("Day")}
                        className={`inline-block px-4 py-1 rounded-full ${activePage === "Day" ? "bg-gray-400 text-white" : ""
                            }`}
                    >
                        Day
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        href="#"
                        onClick={() => handlePageClick("Week")}
                        className={`inline-block px-4 py-1 rounded-full ${activePage === "Week" ? "bg-gray-400 text-white" : ""
                            }`}
                    >
                        Week
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        href="#"
                        onClick={() => handlePageClick("Month")}
                        className={`inline-block px-4 py-1 rounded-full ${activePage === "Month" ? "bg-gray-400 text-white" : ""
                            }`}
                    >
                        Month
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        href="#"
                        onClick={() => handlePageClick("Year")}
                        className={`inline-block px-4 py-1 rounded-full ${activePage === "Year" ? "bg-gray-400 text-white" : ""
                            }`}
                    >
                        Year
                    </a>
                </li>
            </ul>
            <div className="w-auto h-fit relative  rounded-2xl bg-white sd">
                <div className="flex justify-between">
                    <p className="text-sm font-medium pt-10 pl-8 ">
                        <i className="fa-solid fa-circle text-red-600 mr-2"></i><span className="text-text-gray-2">Lower: $4.895</span>
                    </p>
                    <p className="text-sm font-medium pt-10 pr-8">
                        <i className="fa-solid fa-circle text-green-600 mr-2"></i><span className="text-text-gray-2">Higher: $5.895</span>
                    </p>

                </div>
                <div className="text-md text-gray-600 font-bold flex items-center absolute gap-2 rr bottom-4 pl-8">
                    <span className="text-5xl leading-0 rdf" style={{ color: "#ffc843", marginTop: "-6px" }}>•</span>
                    1 BTC = $5.543
                </div>
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart
                        data={activePageData}
                        margin={{ top: 20, left: -10, bottom: 0, right: 50 }}
                    >
                        <CartesianGrid strokeDasharray="1 100" />
                        <defs>
                            <linearGradient id={gradientId} x1="1" y1="0" x2="0" y2="0">
                                <stop offset="0%" stopColor="#ffc843" stopOpacity={1} />
                                <stop offset="100%" stopColor="#ff8f17" stopOpacity={1} />
                            </linearGradient>
                        </defs>

                        <ZAxis range={[30, 31]} />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke={`url(#${gradientId})`} fillOpacity={0.8} strokeWidth={6} fill="#fdf6e4" dot={<GradientDot />} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Card2;
