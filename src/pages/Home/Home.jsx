/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Navber from "../Share/Navber/Navber";
import WeddingCard from "./WeddingCard";
import Slider from "../Banner/Slider";
import Footer from "../Footer/Footer";
import Extara1 from "../Extra1/Extara1";
import Extra2 from "../Extra2/Extra2";



const Home = () => {
    const weddingCard = useLoaderData();
    // console.log(weddingCard);
    return (
        <div >
            <Navber></Navber>
                    <h2 className="text-6xl font-bold text-center"><span className="text-red-600">Perfect</span> Weddings <span className="text-red-600">Partner!</span></h2>
            <Slider></Slider>
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-4 lg:text-4xl font-bold text-center">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        weddingCard.map(card =><WeddingCard key={card.id} weddingCard={card}></WeddingCard>)
                    }
                    </div>
                </div>
            </div>
            <Extara1></Extara1>
            <Extra2></Extra2>
            <Footer></Footer>
        </div>
    );
};

export default Home;