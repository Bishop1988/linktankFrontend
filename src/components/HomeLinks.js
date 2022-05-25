import { Link } from "react-router-dom";

import "../styles/homelinks.css";

export const HomeLinks = () => {
    return <div className="home_links">
        <div className="home_link">
            <Link to="/login">LOG IN</Link>
            {/* <a href="../pages/login" alt="Log in">LOG IN</a> */}
        </div>
        <div className="home_link">
            <Link to="../pages/signup">SIGN UP</Link>
            {/* <a href="../pages/signup" alt="Sign up">SIGN UP</a> */}
        </div>
    </div>
};