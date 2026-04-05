import heroBanner from '../../../assets/image-web-3-desktop.jpg'
import MainArticleSection from "./MainArticleSection.jsx";
const HeroSection = () => {
    return (
        <section className={"flex flex-col gap-6"}>
            <div className={"flex items-center justify-center shrink-0"}>
                <img src={heroBanner} alt="hero-banner" />
            </div>
            <MainArticleSection/>
        </section>
    );
};

export default HeroSection;