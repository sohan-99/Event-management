/* eslint-disable react/no-unescaped-entities */


const Extara1 = () => {
    return (
        <div className="lg:flex md:flex flex-row lg:space-x-3 justify-between">
            <div className="lg:w-[50%] md:[45%] md:ml-4 ml-3">
                <img className="lg:w-[500px] md: w-[297px] my-6 " src="https://i.ibb.co/Z8FcND9/categories-logo-img.png" alt="" />
                <h3 className="lg:text-4xl font-extrabold mb-6">Meet Our Creative Event Organizer</h3>
                <h2 className="lg:text-base font-medium w-[280px] my-6">I'd be happy to help you create a brief introduction for your event manager. Please provide me with some information about the event manager and their key qualifications or attributes.</h2>
                <button className=" btn  bg-green-500 text-white  rounded-full">More Details</button>
            </div>
            <div className="md:ml-4 ml-3 my-6 lg:w[50%] md:w-[42%] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div>
                    <img className="w[85%]" src="https://i.ibb.co/XbYbmS1/event-org-img1.png" alt="" />
                    <h1 className="text-xl text-slate-800  text-center font-medium">
                        Alisha Rees
                    </h1>
                </div>
                <div>
                    <img className="w[85%]" src="https://i.ibb.co/x6wzcGC/event-org-img2.png" alt="" />
                    <h1 className="text-xl text-center font-medium">
                    Rhys Carter
                    </h1>
                </div>
                <div>
                    <img className="w[85%]" src="https://i.ibb.co/dLMsvMr/event-org-img3.png" alt="" />
                    <h1 className="text-xl text-center font-medium">
                    Kyle Buckley
                    </h1>
                </div>
                <div>
                    <img className="w[85%]" src="https://i.ibb.co/LtpdW8R/event-org-img4.png" alt="" />
                    <h1 className="text-xl text-slate-800 text-center font-medium">
                    Maisie Walton
                    </h1>
                </div>
                
            </div>
        </div>
    );
};

export default Extara1;