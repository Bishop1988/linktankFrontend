import '../styles/userpage.css'

import {useParams,Link} from 'react-router-dom'
import { useEffect, useState} from 'react'
import {getUser} from '../utils'


const Userpage=({user})=>{
    const {target}=useParams() //this is params for finding the user based on URL, might need renaming  
    const [profile,setProfile] = useState(null) //card state starts as null.
    useEffect(()=>{
        try{
            async function getData(){
                const profileDetails=await getUser(target)
                setProfile(profileDetails)}
            getData()
        }catch(e){console.log(e)}
    }
    ) //basic state changing try/catch to try and get basic data

    return(
        <div className="userPage_container">
                <h2 className="userPage_header">{target}'s profile</h2>
                {profile ? (
                    profile.socialLinks.map(link=><a key={link.socialName} target='_blank' rel="noreferrer" href={link.url} className="userPage_SocialLink">{link.socialName}</a>)
                ):(
                    "This user has not set up a profile yet!" 
                )}
                {/* conditional rendering so an unset profile doesn't try to render a profile */}
                {user.username===target && <Link className="userPage_edit" to={"/edit"}>Edit your profile</Link>}
        </div>
    )
}

export default Userpage
