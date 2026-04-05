
const MenuSection = () => {
    return (
        <nav role={"menu"}>
            <ul role={"list"} className={"flex items-center gap-10"}>
                <li className={"text-preset-6 leading-preset-6 text-navy-600"}>Home</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600"}>New</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600"}>Popular</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600"}>Trending</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600"}>Categories</li>
            </ul>
        </nav>
    );
};

export default MenuSection;