import LeftSideNav from "../LeftSideNav/LeftSideNav";
// import Header from "../Share/Header/Header";
import Navber from "../Share/Navber/Navber";


const Home = () => {
    return (
        <div >
            {/* <Header></Header> */}
            <Navber></Navber>
            
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-3 border text-3xl font-bold text-center">
                    <h2>Present Online Courses</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;