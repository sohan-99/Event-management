import { useParams } from "react-router-dom";
import Navber from "../Share/Navber/Navber";


const WeddingDetails = () => {
    const {id} =useParams();
    
    return (
        <div>
            <Navber></Navber>
            <h2>hhhhh</h2>
            <p>{id}</p>
        </div>
    );
};

export default WeddingDetails;