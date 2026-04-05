
const SidebarArticleCard = ({title, aria_title, aria_description, description, isLast}) => {
    return (
        <div className={"flex flex-col gap-8"}>
            <div className={"flex flex-col gap-2"} aria-labelledby={aria_title} aria-describedby={aria_description}>
                <button type={"button"} aria-expanded={"false"} id={aria_title} className={"text-white text-preset-4 leading-preset-4 font-preset-4 cursor-pointer hover:text-gold-400"}>{title}</button>
                <p id={aria_description} className={"text-gray-300 text-preset-6 leading-preset-6"}>{description}</p>
            </div>
            {!isLast && <hr className={"text-navy-600"}/>}
        </div>

    );
};

export default SidebarArticleCard;