import Navber from "../Share/Navber/Navber";


const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:space-y-4 md:space-y-6 space-y-5  lg:flex-row ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
                        <form className="card-body">
                            <h2 className="text-xl text-fuchsia-600 font-bold">Send Us a Message</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className=" mt-6">
                                <button className="btn btn-primary">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center  ml-8 lg:text-left">
                        <h1 className="text-5xl mb-4 text-red-400 font-bold">Contact Information</h1>
                        <div className="text-lg space-y-6 font-medium">
                        <p><span className="text-2xl text-fuchsia-600">Telephone:</span> 01722562608</p>
                        <p><span className="text-2xl text-fuchsia-600">Fex:</span> 01722562608</p>
                        <p><span className="text-2xl text-fuchsia-600">Servises help:</span> sohan75632@gmail.com</p>
                        <p><span className="text-2xl text-fuchsia-600">General Inquires:</span> info@monaly.com</p>
                        <p><span className="text-2xl text-fuchsia-600">Address:</span> Mohipur Jamtola, Sherpur, Bogura</p>
                        <p><span className="text-2xl text-fuchsia-600">Hours:</span> Monday - Friday 9am to 5pm EST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;