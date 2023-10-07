/* eslint-disable react/no-unknown-property */
// import React from 'react';

import { useEffect, useState } from "react";
import Navber from "../Share/Navber/Navber";
import { Link } from "react-router-dom";

const Allcourse = () => {
    const [deta, setDeta] = useState([]);

    useEffect(() => {
        fetch('event.json ')
            .then(res => res.json())
            .then(data => setDeta(data))
    }, [])
    return (
        <div classNameName="">
            <Navber></Navber>
            <h1 className="text-6xl font-bold text-center">Our <span className="text-red-600">Servies</span> </h1>
            <h2 className="lg:text-4xl md:text-2xl text-xl  lg:font-semibold md:font-medium font-normal text-center my-4"><span className="text-blue-600">All Services : </span>{deta.length}</h2>
            {
                deta.map(title => <Link
                    key={title.id} className="  text-center rounded-xl  lg:text-3xl md:text-xl text-lg p-6  lg:font-medium md:font-normal font-light">
                    <div className="">

                        <button
                            className="btn btn-primary text-center">{title.id}:{title.eventName}
                        </button>

                        <img className="w-96 " src={title.image} alt="" />

                    </div>
                </Link>)
            }
        </div>
    );
};

export default Allcourse;