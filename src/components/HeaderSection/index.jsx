import logo from '../../assets/logo.svg'
import MenuSection from "./MenuSection.jsx";
import HamburgerIcon from '../../assets/icon-menu.svg'
import {useState} from "react";
import MenuDrawer from "./MenuDrawer.jsx";
const HeaderSection = () => {
    const [openMenuDrawer, setOpenMenuDrawer] = useState(false)
    const handleOpenMenuDrawer = () => {
        setOpenMenuDrawer(true)
    }
    const handleCloseMenuDrawer = () => {
        setOpenMenuDrawer(false)
    }
    return (
        <header className={"flex items-center justify-between"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={logo} alt="logo" />
            </div>
            <MenuSection/>
            <button type={"button"} onClick={handleOpenMenuDrawer} className={"flex items-center justify-center shrink-0 md:hidden"}>
                <img src={HamburgerIcon} alt={"hamburger-icon"}/>
            </button>
                {openMenuDrawer &&
                <div aria-live={"polite"} className={"fixed inset-0 z-50 flex justify-end"}>
                    <div className={"absolute inset-0 bg-[#979797] opacity-50 transition-opacity duration-300"}></div>
                    <MenuDrawer onCloseMenuDrawer={handleCloseMenuDrawer}/>
                </div>}

        </header>
    );
};

export default HeaderSection;