import logo from '../../assets/logo.svg'
import MenuSection from "./MenuSection.jsx";
import HamburgerIcon from '../../assets/icon-menu.svg'
const HeaderSection = () => {
    return (
        <header className={"flex items-center justify-between"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={logo} alt="logo" />
            </div>
            <MenuSection/>
            <div className={"flex items-center justify-center shrink-0 md:hidden"}>
                <img src={HamburgerIcon} alt={"hamburger-icon"}/>
            </div>
        </header>
    );
};

export default HeaderSection;