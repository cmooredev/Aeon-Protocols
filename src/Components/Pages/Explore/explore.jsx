import { useState } from 'react';
import { Button } from "@material-tailwind/react";
import "./explore.css";
import ExploreGrid from "./exploreGridlayout";
import BreadCrum from './BreadCrum';
import SideBAr from '../../Commons/SideBar/SideBar';

const Explore = () => {
    const [activeTab, setActiveTab] = useState("tab1"); // Default tab

    return (
        <div className="flex justify-between">
            <div className="sm-hidden 2xl:w-[300px] md:w-[19%]">
                <SideBAr />
            </div>
            <div className=" md:w-full lg:w-[81%] 2xl:w-full   h-full sm-w-full">
                <BreadCrum />
                <div className=" p-6 md:px-16 2xl:px-[100px]">
                    <div className="generate-tab">
                        {/* Tab Buttons */}
                        <div className="flex generate-tab-btn justify-center my-6 border-b border-[#D2D2D2] md:w-[280px] 2xl:w-[360px] lg:mb-10 2xl:mb-14  mx-auto "> {/* Center the tabs */}
                            <Button
                                onClick={() => setActiveTab("tab1")}
                                className={`${activeTab === "tab1" ? "active-btn-generate" : "shadow-none"}`}
                            >
                                Explore
                            </Button>
                            <Button
                                onClick={() => setActiveTab("tab2")}
                                className={`${activeTab === "tab2" ? "active-btn-generate" : "shadow-none"}`}
                            >
                                Top Rated
                            </Button>
                        </div>

                        {/* Tab Content */}
                        <div className="tab-content">
                            {activeTab === "tab1" && (
                                <ExploreGrid />
                            )}
                            {activeTab === "tab2" && (
                                <ExploreGrid />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Explore;