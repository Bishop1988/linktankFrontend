import "../styles/navbar.css"
import{Link} from 'react-router-dom'

const Navbar = ({user, setUser}) => {
    return (
        <div className="navbar_container">
            <div className="navbar_leftside">
                <Link to={'/'} className="navbar_title">Linktank</Link>
                {user && <Link to={`u/${user}`} className="navbar_mypage">My page</Link>} 
                {/* if there is a user (which should mean logged in) then this shows */}
            </div>
            <div className="navbar_rightside">
                {!user?
                    <>
                    <Link to={"/Signup"} className="navbar_button">Sign up</Link>
                    <Link to={'/Login'}className="navbar_button">Log in</Link>
                    </>
                    :
                    <>
                    <Link to={'/Login'} className="navbar_button">Account settings</Link>
                    <Link to={'/'} onClick={() =>setUser("")} className="navbar_button">Log out</Link></>}
                    {/* again, conditional rendering based onif there is a logged in user */}
            </div>
        </div>
    )
}

export default Navbar;