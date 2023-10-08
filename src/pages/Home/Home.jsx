import { useLoaderData } from "react-router-dom";
import Navber from "../Share/Navber/Navber";
import WeddingCard from "./WeddingCard";


const Home = () => {
    const weddingCard = useLoaderData();
    console.log(weddingCard);
    return (
        <div >
            <Navber></Navber>
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-4 border lg:text-4xl font-bold text-center">
                    <h2>Perfect Weddings Partner!</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        weddingCard.map(card =><WeddingCard key={card.id} weddingCard={card}></WeddingCard>)
                    }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;