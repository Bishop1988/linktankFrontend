import '../styles/userpage.css'

import { useEffect, useState} from 'react'
import { getUser } from '../utils'
import steveGary from '../img/steve-gary-smol.png'


const Userpage=()=>{
    // const {target}=useParams() //this is params for finding the user based on URL, might need renaming  
    // const [profile,setProfile] = useState() //card state starts as null.

    // useEffect(()=>{
    //     getUser(target, setProfile)
    // }, [target]) //basic state changing try/catch to try and get basic data

    const [user, setUser] = useState({})

    useEffect(() => {
        getUser("tod" ,setUser)
    }, [])

    return(
        // <div className="userPage_container">
        //     <div className="spacer"></div>
        //         <h2 className="userPage_header">{target}'s profile</h2>
        //         {profile ? (
        //             profile.socialLinks.map(link=><a key={link.socialName} target='_blank' rel="noreferrer" href={link.url} className="userPage_SocialLink">{link.socialName}</a>)
        //         ):(
        //             "This user has not set up a profile yet!" 
        //         )}
        //         {/* conditional rendering so an unset profile doesn't try to render a profile */}
        //         {user.username===target && <Link className="userPage_edit" to={"/UserProfile"}>Edit your profile</Link>}

        // </div>
        <div className="userPage_container">
            <div className="spacer"></div>
                <div className="userProfile_display-link-container">
                    <div className="userProfile_phone-display-links">
                        <div className="userProfile_phone-display-links--user-profile">
                            <div className="userImage-container">
                                <img src={steveGary} alt="profile" />
                            </div>
                            <p>@{user.username}</p>
                            {<div>{user && user.socialLinks && user.socialLinks.map((item, i) => {
                                console.log(item)
                                return (
                                    <a key={i} className="userProfile_link-mobile-a" href={`http://${item.url}`} target="_blank" rel="noreferrer">
                                        <div className="userProfile_link-mobile-display" >
                                            <p>{item.socialName}</p>
                                        </div>
                                    </a>
                                )
                            })}</div>}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Userpage
