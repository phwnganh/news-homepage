
const SidebarArticleCard = ({title, description, isLast}) => {
    return (
        <div className={"flex flex-col gap-8"}>
            <div className={"flex flex-col gap-2"} aria-labelledby={title} aria-describedby={description}>
                <h2 id={title} className={"text-white text-preset-4 leading-preset-4 font-preset-4 cursor-pointer hover:text-gold-400"}>{title}</h2>
                <h3 id={description} className={"text-gray-300 text-preset-6 leading-preset-6"}>{description}</h3>
            </div>
            {!isLast && <hr className={"text-navy-600"}/>}
        </div>

    );
};

export default SidebarArticleCard;