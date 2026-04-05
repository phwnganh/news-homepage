import logo from '../../assets/logo.svg'
import MenuSection from "./MenuSection.jsx";
const HeaderSection = () => {
    return (
        <header className={"flex items-center justify-between"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={logo} alt="logo" />
            </div>
            <MenuSection/>
        </header>
    );
};

export default HeaderSection;