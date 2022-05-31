import { useEffect, useState } from "react";
import { getUser, updateUser, updateUserLinkUrl, deleteUserLink, updateUserLinkSocialName } from "../utils";
import steveGary from "../img/steve-gary-smol.png"

import "../styles/userProfile.css"

const UserProfile = ({loggedIn}) => {
    const [user, setUser] = useState({})
    const [linkTitle, setLinkTitle] = useState("")
    const [linkAddress, setLinkAddress] = useState("")
    const [linkTitleEditing, setLinkTitleEditing] = useState(null)
    const [linkUrlEditing, setLinkUrlEditing] = useState(null)
    const [editLinkTitle, setEditLinkTitle] = useState("")
    const [editLinkUrl, setEditLinkUrl] = useState("")

    if(loggedIn) {console.log(loggedIn)}

    useEffect(() => {
        getUser("testsignuplol" ,setUser)
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

        setLinkTitle("")
        setLinkAddress("")
        // console.log(newLink)

        updateUser("testsignuplol", newLink, setUser)
        
    } 

    const deleteLinkHandler = (id) => {
        console.log(id)
    }

    const editLinkHandler = (id) => {
        console.log(id)
    }

    const editNameHandler = (e) => {
        setEditLinkTitle(e.target.value)
    }

    const editUrlHandler = (e) => {
        setEditLinkUrl(e.target.value)
    }

    // console.log(user)
    
    return ( 
        <div className="userProfile_container">
            <div className="spacer"></div>
            <div className="userProfile_display-link-container">
                <div className="userProfile_phone-display-links">
                    <div className="userProfile_phone-display-links--user-profile">
                        <div className="userImage-container">
                            <img src={steveGary} alt="profile" />
                        </div>
                        <p>@{user.username}</p>
                        {<div>{user && user.socialLinks && user.socialLinks.map((item, i) => {
                            // console.log(item)
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

            <div className="userProfile_add-link-container">
                <form onSubmit={submitHandler} className="userProfile_form">
                    <div className="userProfile_cards-container">
                        <div className="userProfile_inputs">
                            <div className="userProfile_input-container">
                                <label for="inputLinkTitle">Social Name</label>
                                <input required id="inputLinkTitle" onChange={inputLinkTitleHandler} className="userProfile_input" type="text" value={linkTitle} />
                            </div>
                            <div className="userProfile_input-container">
                                <label for="inputLinkUrl">Social URL</label>
                                <input required id="inputLinkUrl" onChange={inputLinkAddressHandler} className="userProfile_input" type="text" value={linkAddress} />
                            </div>
                            <div className="userProfile_button-container">
                        <button  className="userProfile_button">add new link</button>
                    </div>
                        </div>
                    </div>
                </form>
                {<div>{user && user.socialLinks && user.socialLinks.map((item, i) => {
                    // console.log(item)
                    return (
                        <div className="userProfile_link-card" key={i}>
                            <div className="userProfile_link-card-name">
                                {linkTitleEditing === i ? (
                                    <input  
                                        type="text"
                                        onChange={editNameHandler}
                                        // value={user.socialLinks[i].socialName}
                                    />
                                ) : (
                                    <p className="userProfile_link-socialName">{item.socialName}</p>
                                )}
                                <div className="userProfile_link-card-button">
                                    {linkTitleEditing === i ? (
                                        <button className="userProfile_update-button" onClick={() => {
                                            updateUserLinkSocialName(user.username, editLinkTitle, i, setUser)
                                            setLinkTitleEditing(null)
                                        }}>Update</button>
                                    ) : (
                                        <button className="userProfile_edit-button" onClick={() => {
                                            setLinkTitleEditing(i)
                                        }}>Edit</button>
                                    )}
                                </div>
                            </div>
                            <div className="userProfile_link-card-url">
                            {linkUrlEditing === i ? (
                                    <input  
                                        type="text"
                                        onChange={editUrlHandler}
                                    />
                                ) : (
                                    <p className="userProfile_link-url">{item.url}</p>
                                )}
                                <div className="userProfile_link-card-button">
                                {linkUrlEditing === i ? (
                                        <button className="userProfile_update-button" onClick={() => {
                                            updateUserLinkUrl(user.username, editLinkUrl, i, setUser)
                                            setLinkUrlEditing(null)
                                        }}>Update</button>
                                    ) : (
                                        <button className="userProfile_edit-button" onClick={() => {
                                            setLinkUrlEditing(i)
                                        }}>Edit</button>
                                    )}
                                </div>
                                <div className="userProfile_link-card-button">
                                    <button className="userProfile_edit-button" onClick={() => deleteUserLink(user.username, i, setUser)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}</div>}
            </div>
        </div>
     )
}
 
export default UserProfile;