import '../styles/userpage.css'

import {useParams,Link} from 'react-router-dom'
import { useEffect, useState} from 'react'
import {getUser} from '../utils'


const Userpage=({user})=>{
    const u=useParams() //this is params for finding the user based on URL, might need renaming  
    const [profile,setProfile] = useState(null) //card state starts as null. using local state as context going to be used for the currently logged in user card
    useEffect(()=>{
        try{
            async function getData(){
                profileDetails=await getUser(u)
                setProfile(profileDetails)}
            getData()
        }catch(e){console.log(e)}
    }
    ) //basic state changing try/catch to try and get basic data
    const EditButton=() => {
        if(user.username===u){ //need to propdrill user
            return <Link className="userPage_edit" to={"/edit"}>Edit your profile</Link> //had to put this here for "it won't work otherwise" reasons
        }
    }

    return(
        <div className="userPage_container">
                <h2 className="userPage_header">{u}'s profile</h2>
                {profile ? (
                    profile.socialLinks.map(link=><a key={link.socialName}target='_blank' rel="noreferrer" href={link.url} className="userPage_SocialLink">{link.socialName}</a>)
                ):(
                    "This user has not set up a profile yet!"
                )}
                <EditButton/>
        </div>
    )
}

export default Userpage
