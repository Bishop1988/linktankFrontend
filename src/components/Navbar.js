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
                <a className="navbar_button">Sign up</a>
                <a className="navbar_button">Log in</a>
                {/* : */}
                {/* <a className="navbar_button>Account settings</a>"*/}
                {/* <a className="navbar_button">Log out</a>}*/}
                {/* again these will both be for conditional rendering later, need to know how the signing in will work properly first*/}
            </div>
        </div>
    )
}

export default Navbar;