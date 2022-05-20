import ProfilePic from "../img/steve-gary-smol.png";
import "../styles/stevegary.css";

export const Stevegary = () => {
    return (
        <div className="stevegary_container">
            <img className="stevegary_profile_pic" src={ProfilePic} alt="Steve Gary" />
            <p className="stevegary_user_name">Steve Gary</p>
            <p className="stevegary_user_title">Software Engineer</p>
            <div className="stevegary_social_icons">
                <i class="fab fa-github" />
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <i class="fab fa-twitter" />
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <i class="fab fa-instagram" />
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <i class="fab fa-facebook" />
                <i class="fa-regular fa-distribute-spacing-horizontal"></i>
                <i class="fab fa-linkedin-in" />
            </div>
            <p className="stevegary_user_bio">A responsible developer who loves try-catch blocks, unit-testing, movie databases and async-await puns.</p>
            <div className="stevegary_link">RESUME</div>
            <div className="stevegary_link">EMAIL</div>
            <div className="stevegary_link">PORTFOLIO</div>
        </div>
    )
}