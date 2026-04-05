import SidebarArticleCard from "./SidebarArticleCard.jsx";

const SidebarSection = () => {
    const PARTICLEBOARD = [
        {
            title: "Hydrogen VS Electric Cars",
            description: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            title: "The Downsides of AI Artistry",
            description: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            title: "Is VC Funding Drying Up?",
            description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
    ]

    return (
        <aside className={"bg-black py-4 px-6"}>
            <div className={"flex flex-col gap-8"}>
                <h1 className={"text-gold-400 text-preset-3 font-preset-3 leading-preset-3"}>New</h1>
                {PARTICLEBOARD.map((item, index) => (
                        <SidebarArticleCard key={index} title={item.title} description={item.description} />
                ))}

            </div>

        </aside>
    );
};

export default SidebarSection;