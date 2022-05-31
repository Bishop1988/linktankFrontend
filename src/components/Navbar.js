import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = ({user, setUser}) => {
    return (
        <div className="navbar_container">
            {/* <div className="navbar_leftside">
                <Link to={'/'} className="navbar_title">Linktank</Link>
                {user && <Link to={`u/${user}`} className="navbar_mypage">My page</Link>} 
                if there is a user (which should mean logged in) then this shows
            </div>
            <div className="navbar_rightside">
                {!user ?
                    (<>
                    <Link to={"/signup"} className="navbar_button">Sign up</Link>
                    <Link to={'/login'}className="navbar_button">Log in</Link>
                    </>)
                    :
                    (<>
                    <Link to={'/Login'} className="navbar_button">Account settings</Link>
                    <Link to={'/'} onClick={() =>setUser("")} className="navbar_button">Log out</Link>
                    </>)
                }
            </div> */}

            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/signup">Signup</Link>
            <Link className="navbar-link" to="/edit">edit</Link>
            <Link className="navbar-link" to="/userProfile">user profile</Link>
            <Link className="navbar-link" to="/userPage">userpage</Link>
        </div>
    )
}

export default Navbar;