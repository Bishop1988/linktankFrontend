import { Stevegary } from "../components/Stevegary";
import { Link } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
    return (
      <div className="home_desktop">
        <div className="home_left">
        <h1 className="calltoaction_text">
        The Only Social Link You Will Ever Need.
    </h1>
    <div className="home_links">
        <div className="home_link">
            <Link to="/login">LOG IN</Link>
            {/* <a href="../pages/login" alt="Log in">LOG IN</a> */}
        </div>
        <div className="home_link">
            <Link to="../pages/signup">SIGN UP</Link>
            {/* <a href="../pages/signup" alt="Sign up">SIGN UP</a> */}
        </div>
    </div>        
    </div>
        <Stevegary />
      </div>
    )
};

export default Home;