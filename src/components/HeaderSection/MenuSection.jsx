
const MenuSection = () => {
    return (
        <nav  aria-label="site menu" className={"md:flex hidden items-center gap-10"}>
                <a href={"/"} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Home</a>
                <a href={"/new"} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>New</a>
                <a href={"/popular"} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Popular</a>
                <a href={"/trending"} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Trending</a>
                <a href={"/categories"} className={"text-preset-6 leading-preset-6 text-navy-600 hover:text-red-500 cursor-pointer"}>Categories</a>
        </nav>
    );
};

export default MenuSection;