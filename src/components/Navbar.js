import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = ({user, setUser}) => {
    return (
        <div className="navbar_container">
            <div className="navbar_leftside">
                <Link to={'/'} className="navbar-link linktank-main">Linktank</Link>
                {user && <Link to={`u/${user}`} className="navbar-link">My page</Link>} 
                {/* if there is a user (which should mean logged in) then this shows */}
            </div>
            <div className="navbar_rightside">
                {!user ?
                    (<>
                    <Link to={"/signup"} className="navbar-link">Sign up</Link>
                    <Link to={'/login'}className="navbar-link">Log in</Link>
                    </>)
                    :
                    (<>
                    <Link to={'/UserProfile'} className="navbar-link">Edit Profile</Link>
                    <Link to={'/'} onClick={() =>setUser("")} className="navbar-link">Log out</Link>
                    </>)
                }
            </div>

            {/* <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/signup">Signup</Link>
            <Link className="navbar-link" to="/edit">edit</Link>
            <Link className="navbar-link" to="/userProfile">user profile</Link>
            <Link className="navbar-link" to="/userPage">userpage</Link> */}
        </div>
    )
}

export default Navbar;