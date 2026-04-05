import MenuCloseIcon from '../../assets/icon-menu-close.svg'
const MenuDrawer = ({onCloseMenuDrawer}) => {
    return (
        <nav role={"menu"} className={"px-9 py-6.75 bg-white ml-auto w-2/3 max-w-xs h-full transition-transform duration-300 translate-x-0"}>
            <div className={"flex flex-col gap-22"}>
                <button type={"button"} onClick={onCloseMenuDrawer} className={"flex justify-end shrink-0"}>
                    <img src={MenuCloseIcon} alt={"menu-close-icon"} />
                </button>
                <ul role={"list"} className={"flex flex-col gap-4"}>
                    <li className={"text-preset-5 leading-preset-5 text-navy-950"}>Home</li>
                    <li className={"text-preset-5 leading-preset-5 text-navy-950"}>New</li>
                    <li className={"text-preset-5 leading-preset-5 text-navy-950"}>Popular</li>
                    <li className={"text-preset-5 leading-preset-5 text-navy-950"}>Trending</li>
                    <li className={"text-preset-5 leading-preset-5 text-navy-950"}>Categories</li>
                </ul>
            </div>

        </nav>
    );
};

export default MenuDrawer;