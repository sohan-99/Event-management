/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Navber from "../Share/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handRegister = e =>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email,photo,name,password);

// create user
 createUser(email,password)
 .then(result=>{
    // console.log(result.user);
    toast.success("Successfully Register !");

 })
 .catch(error=>{
    // console.log(error);
    toast.error("Register Unsuccessful!");
 })






    }
    return (
        <div>
            <Navber></Navber>
            <div className="mt-14 mb-9 flex flex-col items-center justify-center">
                <div className="bg-gray-300 w-full max-w-md p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
                        Register an Account
                    </h1>
                    <form onSubmit={handRegister} className="space-y-4">
                        <div>
                            <label className="block text-black text-base font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black text-base font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-black text-base font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black text-base font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-3 px-6 rounded-full transition duration-300 w-full">
                                Register
                            </button>
                        </div>
                    </form>
                    <p className="text-center mt-4 text-black text-base font-medium">
                        Already have an account?{" "}
                        <Link className="text-blue-600 font-semibold text-lg" to="/login">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;
