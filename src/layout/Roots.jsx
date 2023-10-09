import { Outlet } from "react-router-dom";


const Roots = () => {
    return (
        <div className="max-w-full mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;