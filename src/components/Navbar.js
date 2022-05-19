import "../styles/navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar_container">
            <div className="navbar_leftside">
                <h1 className="navbar_title">Linktank</h1>
                {/* {loggedin && <button className="navbar_mypage">My page</button>} This is for conditional rendering later*/}
            </div>
            <div className="navbar_rightside">
                {/* {loggedin ? */}
                <button className="navbar_button">Sign up</button>
                <button className="navbar_button">Log in</button>
                {/* : */}
                {/* <button className="navbar_button>Account settings</button>"*/}
                {/* <button className="navbar_button">Log out</button>*/}
                {/* again these will both be for conditional rendering later, need to know how the signing in will work properly first*/}
            </div>
        </div>
     )
}
 
export default Navbar;