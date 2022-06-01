import { Stevegary } from "../components/Stevegary";
import { Link } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
    return (
        <>
            <div className="spacer"></div>
            <div className="hero">
                <h1 className="calltoaction_text">
                The Only Social Link You Will Ever Need.
                </h1>
              
                     
               
                <Stevegary />
            </div>
        </>
       
    )
};

export default Home;