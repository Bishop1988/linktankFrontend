import ProfilePic from "../img/steve-gary-smol.png";
import { Link } from "react-router-dom";
import "../styles/stevegary.css";

export const Stevegary = () => {
    return (
        <div className="stevegary_container">
            <img className="stevegary_profile_pic" src={ProfilePic} alt="Steve Gary" />
            <p className="stevegary_user_name">Steve Gary</p>
            <p className="stevegary_user_title">Software Engineer</p>
            <div className="stevegary_custom_links">
                <div className="stevegary_link">
                    <Link to="/UserProfile">PORTFOLIO</Link>
                </div>
                <div className="stevegary_link">
                    <a href="#" alt="dummy resume link">RESUME</a>
                </div>
                <div className="stevegary_link">
                    <a href="#" alt="dummy email link">EMAIL</a>
                </div>
            </div>
            <div className="stevegary_social_icons">
                <a href="#" alt="dummy github icon">
                    <i class="fab fa-github" />
                </a>
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <a href="#" alt="dummy twitter icon">
                    <i class="fab fa-twitter" />
                </a>
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <a href="#" alt="dummy instagram icon">
                    <i class="fab fa-instagram" />
                </a>
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <a href="#" alt="dummy facebook icon">
                    <i class="fab fa-facebook" />
                </a>
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <a href="#" alt="dummy linkedin icon">
                    <i class="fab fa-linkedin-in" />
                </a>
            </div>
        </div>
    )
}