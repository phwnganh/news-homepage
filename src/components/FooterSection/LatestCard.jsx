
const LatestCard = ({img, numberOfCard, title, description}) => {
    return (
        <section className={"flex gap-6 min-w-0 flex-1"}>
            <div className={"shrink-0"}>
                <img src={img} alt={title} className={"w-24 h-auto object-cover"} />
            </div>
            <div className={"flex flex-col gap-2 min-w-0"}>
                <h1 className={"text-preset-3 text-red-500 leading-preset-3 font-preset-3"}>{numberOfCard}</h1>
                <h2 className={"text-navy-950 text-preset-5 leading-preset-5 font-preset-5 hover:text-red-500 cursor-pointer"}>{title}</h2>
                <p className={"text-navy-600 text-preset-6 leading-preset-6"}>{description}</p>
            </div>
        </section>
    );
};

export default LatestCard;