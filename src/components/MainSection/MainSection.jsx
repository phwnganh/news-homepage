import React from 'react';
import HeroSection from "./HeroSection/index.jsx";
import SidebarSection from "./SidebarSection/SidebarSection.jsx";

const MainSection = () => {
    return (
        <main className={"flex gap-8"}>
            <HeroSection/>
            <SidebarSection/>
        </main>
    );
};

export default MainSection;