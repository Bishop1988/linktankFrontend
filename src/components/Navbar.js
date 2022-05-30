import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_leftside">
                <h3 className="navbar_title">Navbar</h3>
                {/* {loggedin && <a className="navbar_mypage">My page</a>} This is for conditional rendering later*/}
            </div>
            <div className="navbar_rightside">
                {/* {loggedin ? */}


                <Link className="navbar_links" to="/">Home</Link>
                <Link className="navbar_links" to="/signup">Sign up</Link>
                <Link className="navbar_links" to="/login">Log in</Link>
                <Link className="navbar_links" to="/edit">Edit</Link>
                <Link className="navbar_links" to="/userProfile">User Profile</Link>
                <Link className="navbar_links" to="/userPage">User Page</Link>


                {/* : */}
                {/* <a className="navbar_button>Account settings</a>"*/}
                {/* <a className="navbar_button">Log out</a>}*/}
                {/* again these will both be for conditional rendering later, need to know how the signing in will work properly first*/}
            </div>
        </div>
    )
}

export default Navbar;