import React from 'react';
import HeroSection from "./HeroSection/index.jsx";
import SidebarSection from "./SidebarSection/index.jsx";

const MainSection = () => {
    return (
        <main className={"flex flex-col md:flex-row gap-8"}>
            <div className={"flex-2"}>
                <HeroSection/>
            </div>
            <div className={"flex-1"}>
                <SidebarSection/>
            </div>
        </main>
    );
};

export default MainSection;