
import LatestCard from "./LatestCard.jsx";
const FooterSection = () => {
    const LATESTCARDITEM = [
        {
           img: '/image-retro-pcs.jpg',
            title: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?'
        },
        {
            img: '/image-top-laptops.jpg',
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.'
        },
        {
            img: '/image-gaming-growth.jpg',
            title: 'The Growth of Gaming',
            description: 'How the pandemic has sparked fresh opportunities.'
        }
    ]
    return (
        <footer className={"flex flex-col md:flex-row gap-10"}>
            {LATESTCARDITEM.map((item, index) =>
            <LatestCard key={index} img={item.img} numberOfCard={`0${index + 1}`} title={item.title} description={item.description} />)}
        </footer>
    );
};

export default FooterSection;