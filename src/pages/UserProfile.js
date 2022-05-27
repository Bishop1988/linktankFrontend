import { useEffect, useState } from "react";
// import { getUser } from "../utils";

import "../styles/userProfile.css"

const UserProfile = () => {
    const [links, setLinks] = useState([])
    // const [user, setUser] = useState([])
    const [linkTitle, setLinkTitle] = useState("")
    const [linkAddress, setLinkAddress] = useState("")

    // useEffect(() => {
    //     getUser(setUser)
    // }, [])

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

    // console.log(users)
    
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
                {/* {user[0].socialLinks.map((link, i) => {
                    return (
                        <div key={i}>
                            <p>{link.socialName}</p>
                            <p>{link.url}</p>
                        </div>
                    )
                })} */}
            </div>
        </div>
     )
}
 
export default UserProfile;