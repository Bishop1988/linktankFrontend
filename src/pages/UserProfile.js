import { useEffect, useState } from "react";
import { listUsers } from "../utils";

import "../styles/userProfile.css"

const UserProfile = () => {
    const [links, setLinks] = useState([])
    const [users, setUsers] = useState([])
    const [linkTitle, setLinkTitle] = useState("")
    const [linkAddress, setLinkAddress] = useState("")

    useEffect(() => {
        listUsers(setUsers)
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
        console.log(newLink)
    } 

    const deleteLinkHandler = (id) => {
        const updatedLinks = [...links].filter(link => link.id !== id)
        setLinks(updatedLinks)
    }

    console.log(users)
    
    return ( 
        <div className="userProfile_container">
            <div className="userProfile_display-link-container">
                <div className="userProfile_phone-display-links">
                    <div className="userProfile_phone-display-links--user-profile">
                        <p>user image</p>
                        <p>username</p>
                        {links.map((link, i) => {
                            return (
                                <div onClick={() => deleteLinkHandler(link.id)} className="userProfile_card">
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
                        <div onClick={() => deleteLinkHandler(link.id)} className="userProfile_card">
                            <p>{link.title}</p>
                            <p>{link.address}</p>
                        </div>
                    )
                })}
                {users.map((user, i) => {
                    return (
                        <div key={i}>
                            <p>{user.socialLinks.socialName}</p>
                            <p>{user.socialLinks.url}</p>
                        </div>
                    )
                })}
            </div>
        </div>
     )
}
 
export default UserProfile;