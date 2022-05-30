import { useEffect, useState } from "react";
import { getUser, updateUser } from "../utils";

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
    const [user, setUser] = useState([])
    const [linkTitle, setLinkTitle] = useState("")
    const [linkAddress, setLinkAddress] = useState("")

    useEffect(() => {
        getUser("bob" ,setUser)
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

        updateUser("bob", newLink, setUser)
        
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
                
                {/* {links.map((link, i) => {
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
                })} */}
                {<div>{user && user.socialLinks && user.socialLinks.map((item, i) => {
                    console.log(item)
                    return (
                        <div key={i}>
                            <p>{item.socialName}</p>
                            <p>{item.url}</p>
                        </div>
                    )
                })}</div>}
                {/* <p>{user.socialLinks.map((link, i) => {
                    return (
                        <div>
                            <p>{link.socialName}</p>
                        </div>
                    )
                })}</p> */}
                {/* {Object.entries(user).map(([key, value]) => {
                    return (
                        <div key={key.id}>
                            <p>{value}</p>
                            <p>{u.url}</p>
                        </div>
                    )
                })} */}
                {/* {user && 
                    user.socialLinks.map((item, i) => {
                        return (
                            <div>
                                <p>{item.socialName}</p>
                                <p>{item.url}</p>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
     )
}
 
export default UserProfile;