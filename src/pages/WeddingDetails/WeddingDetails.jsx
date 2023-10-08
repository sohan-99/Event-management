/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Share/Navber/Navber";

const WeddingDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = services.find(service => service.id == id);

    const handlePurchase = () => {
        // Trigger a success toast when the button is clicked
        toast.success("Purchase Done!");
    };

    return (
        <div>
            <Navber></Navber>
            <h1 className="text-6xl font-bold text-center">
                Services <span className="text-red-600">Details !</span> 
            </h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="w-[650px]" src={service.image} alt="" />
                    <div>
                        <h1 className="lg:text-5xl md:text-2xl text-xl font-bold">{service.eventName}</h1>
                        <h2 className="mt-4 lg:text-base md:text-sm text-sm font-medium">{service.detailEvent}</h2>
                        <button onClick={handlePurchase} className="mt-4 btn btn-primary">Purchase {service.price}</button>
                    </div>
                </div>
            </div>
            {/* Add the ToastContainer to display toasts */}
            <ToastContainer />
        </div>
    );
};

export default WeddingDetails;
