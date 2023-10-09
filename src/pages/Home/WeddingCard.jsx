/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const WeddingCard = ({ weddingCard }) => {
    const { eventName, image, price, shortDetails,id } = weddingCard;
    return (
        <div className="card ml-4 lg:w-[370px] md:w-[335px] my-8 items-center bg-gray-300 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="h-[210px]  lg:w-[370px] md:w-[335px] rounded-t-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold lg:text-2xl md:text-xl text-lg">{eventName}</h2>
                <p className="lg:text-base md:text-sm text-sm font-medium">{shortDetails}</p>
                <div className="card-actions justify-end">
                    <Link to={`/event/${id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WeddingCard;