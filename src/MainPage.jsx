import HeaderSection from "./components/HeaderSection/index.jsx";
import MainSection from "./components/MainSection/index.jsx";
import FooterSection from "./components/FooterSection/FooterSection.jsx";

const MainPage = () => {
    return (
        <div className={"max-w-278 mx-auto min-h-screen"}>
            <div className={"flex flex-col gap-16"}>
                <HeaderSection/>
                <MainSection/>
                <FooterSection/>
            </div>
        </div>
    );
};

export default MainPage;