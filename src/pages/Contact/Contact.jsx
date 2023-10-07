import Navber from "../Share/Navber/Navber";


const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col  lg:flex-row ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
                        <form className="card-body">
                            <h2 className="text-xl font-semibold">Send Us a Message</h2>
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
                    <div className="text-center ml-8 lg:text-left">
                        <h1 className="text-5xl font-bold">Contact Information</h1>
                        <div className="text-xl font-medium">
                        <p>Telephone: 01722562608</p>
                        <p>Fex: 01722562608</p>
                        <p>Servises help: sohan75632@gmail.com</p>
                        <p>General Inquires: info@monaly.com</p>
                        <p>Address: Mohipur Jamtola, Sherpur, Bogura</p>
                        <p> Hours: Monday - Friday 9am to 5pm EST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;