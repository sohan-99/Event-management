import { useEffect, useState } from "react";
import Navber from "../Share/Navber/Navber";
import { Link } from "react-router-dom";

const Allcourse = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('event.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="">
            <Navber></Navber>
            <h1 className="text-6xl font-bold text-center mb-5">
                Our <span className="text-red-600">Services</span>
            </h1>
            {/* <h2 className="lg:text-4xl md:text-2xl text-xl lg:font-semibold md:font-medium font-normal text-center my-4">
                <span className="text-blue-600">All Services : </span>
                {data.length}
            </h2> */}
            <div className="grid grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map(service => (
                    <Link to='/'
                        key={service.id}
                        className="text-center rounded-xl lg:text-3xl md:text-xl text-lg p-6 lg:font-medium md:font-normal font-light bg-gray-300 shadow-md"
                    >
                        
                        <h2 className="card-title mb-4  font-bold lg:text-3xl md:text-xl text-lg">{service.eventName}</h2>
                        <img className="w-full" src={service.image} alt="" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Allcourse;
