import "../styles/homelinks.css";

export const HomeLinks = () => {
    return <div className="home_links">
        <div className="home_link">
            <a href="../pages/login" alt="Log in">LOG IN</a>
        </div>
        <div className="home_link">
            <a href="../pages/signup" alt="Sign up">SIGN UP</a>
        </div>
    </div>
};