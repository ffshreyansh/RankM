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
} from "recharts";
import { Day, Week, Month, Year } from '../Data/Modals.js'

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
            <ul className="flex mb-4  flex-wrap text-sm font-medium items-center text-center text-gray-500 dark:text-gray-400 justify-between">
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
            <div className="w-auto h-fit  rounded-xl bg-white sd">
                <div className="flex justify-between">
                    <p className="text-lg font-medium pt-10 pl-8 ">
                        <i className="fa-solid fa-circle text-red-600 mr-2"></i><span className="text-text-gray-2">Lower: $4.895</span>
                    </p>
                    <p className="text-lg font-medium pt-10 pr-8">
                        <i className="fa-solid fa-circle text-green-600 mr-2"></i><span className="text-text-gray-2">Higher: $5.895</span>
                    </p>

                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        data={activePageData}
                        margin={{ top: 20, left: 0, bottom: 0, right: 50 }}
                    >
                        <CartesianGrid strokeDasharray="1 100" />
                       
                        <text x='10%'
                            y='80%'
                           className="text-xl text-black font-bold">
                           <span className=" w-1 h-1 bg-red"></span> 1BTC = $5.543
                        </text>
                        <ZAxis range={[30, 31]} />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#ffc843" strokeWidth={4} fill="#ffeacd" dot={{ strokeWidth: 8, }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Card2;
