
const MenuSection = () => {
    return (
        <nav role={"menu"} aria-label="menu" className={"md:flex hidden items-center gap-10"}>
                <button role={"menuitem"} tabIndex={0} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Home</button>
                <button role={"menuitem"} tabIndex={0} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>New</button>
                <button role={"menuitem"} tabIndex={0} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Popular</button>
                <button role={"menuitem"} tabIndex={0} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Trending</button>
                <button role={"menuitem"} tabIndex={0} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Categories</button>
        </nav>
    );
};

export default MenuSection;