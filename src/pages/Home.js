import { Stevegary } from "../components/Stevegary";
import { Link } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
    return (
        <>
            <div className="spacer"></div>
            <div className="home_desktop">
                <div className="home_left">
                <h1 className="calltoaction_text">
                The Only Social Link You Will Ever Need.
                </h1>
                <div className="home_links">
                    <div className="home_link">
                        <Link to="/login">LOG IN</Link>
                    </div>
                    <div className="home_link">
                        <Link to="../pages/signup">SIGN UP</Link>
                    </div>
                </div>        
                </div>
                <Stevegary />
            </div>
        </>
       
    )
};

export default Home;