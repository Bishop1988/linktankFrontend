import { useEffect, useState } from "react";
import { getUser } from "../utils";

import "../styles/userProfile.css"

const data = [
    { socialName: "facebook", url: "www.facebook.com" },
    { socialName: "instagram", url: "www.instagram.com" },
    { socialName: "tiktok", url: "www.tiktok.com" },
    { socialName: "snapchat", url: "www.snapchat.com" },
    { socialName: "pintrest", url: "www.pintrest.com" },
]

const UserProfile = () => {
    const [links, setLinks] = useState([])
    const [user, setUser] = useState("")
    const [linkTitle, setLinkTitle] = useState("")
    const [linkAddress, setLinkAddress] = useState("")

    useEffect(() => {
        getUser("michael" ,setUser)
    }, [])

    const inputLinkTitleHandler = (e) => {
        setLinkTitle(e.target.value)
    }

    const inputLinkAddressHandler = (e) => {
        setLinkAddress(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const newLink = {
            socialName: linkTitle,
            url: linkAddress
        }

        setLinks([...links].concat(newLink))
        setLinkTitle("")
        setLinkAddress("")
        // console.log(newLink)
    } 

    const deleteLinkHandler = (id) => {
        const updatedLinks = [...links].filter(link => link.id !== id)
        setLinks(updatedLinks)
    }

    console.log(user)
    
    return ( 
        <div className="userProfile_container">
            <div className="userProfile_display-link-container">
                <div className="userProfile_phone-display-links">
                    <div className="userProfile_phone-display-links--user-profile">
                        <p>user image</p>
                        <p>username</p>
                        {links.map((link, i) => {
                            return (
                                <div key={i} onClick={() => deleteLinkHandler(link.id)} className="userProfile_card">
                                    <p>{link.socialName}</p>
                                    <p>{link.url}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="userProfile_add-link-container">
                <form onSubmit={submitHandler} className="userProfile_form">
                    <div className="userProfile_button-container">
                        <button  className="userProfile_button-left">add new link</button>
                    </div>

                    <div className="userProfile_cards-container">
                        <div className="userProfile_inputs">
                            <input onChange={inputLinkTitleHandler} className="userProfile_input" type="text" value={linkTitle} />
                            <input onChange={inputLinkAddressHandler} className="userProfile_input" type="text" value={linkAddress} />
                        </div>
                    </div>
                </form>
                
                {links.map((link, i) => {
                    return (
                        <div key={i} onClick={() => deleteLinkHandler(link.id)} className="userProfile_card">
                            <p>{link.socialName}</p>
                            <p>{link.url}</p>
                        </div>
                    )
                })}
                {data.map((link, i) => {
                    return (
                        <div className="userProfile_edit-link" key={i}>
                            <p>{link.socialName}</p>
                            <p>{link.url}</p>
                        </div>
                    )
                })}
                {/* {Object.keys(user).map((item, i) => {
                    return (
                        <div key={i}>
                            <p>{user[item].socialName}</p>
                            <p>{u.url}</p>
                        </div>
                    )
                })} */}
                {user && 
                    user.socialLinks.map((item, i) => {
                        return (
                            <div>
                                <p>{item.socialName}</p>
                                <p>{item.url}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     )
}
 
export default UserProfile;