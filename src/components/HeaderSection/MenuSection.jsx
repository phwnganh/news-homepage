
const MenuSection = () => {
    return (
        <nav role={"menu"}>
            <ul role={"list"} className={"md:flex hidden items-center gap-10"}>
                <li className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Home</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>New</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Popular</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Trending</li>
                <li className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Categories</li>
            </ul>
        </nav>
    );
};

export default MenuSection;