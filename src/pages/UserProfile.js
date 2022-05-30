import { useEffect, useState } from "react";
import { getUser, updateUser, updateUserLink } from "../utils";
import { v4 as uuidv4 } from 'uuid';
import steveGary from "../img/steve-gary-smol.png"

import "../styles/userProfile.css"

const UserProfile = () => {
    const [user, setUser] = useState({})
    const [linkTitle, setLinkTitle] = useState("")
    const [linkAddress, setLinkAddress] = useState("")
    // const [editLinkTitle, setEditLinkTitle] = useState(linkTitle)
    // const [editLinkAddress, setEditLinkAddress] = useState(linkAddress)



    useEffect(() => {
        getUser("wobwob" ,setUser)
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
            url: linkAddress,
            id: uuidv4()
        }

        setLinkTitle("")
        setLinkAddress("")
        // console.log(newLink)

        updateUser("wobwob", newLink, setUser)
        
    } 

    // const deleteLinkHandler = (id) => {
    //     const updatedLinks = [...links].filter(link => link.id !== id)
    //     setLinks(updatedLinks)
    // }

    const deleteLinkHandler = (id) => {
        console.log(id)
    }

    // const dummyLinkData = {
    //     socialName: "test1",
    //     url: "www.test1.com"
    // }

    const editLinkHandler = (id) => {
        console.log(id)
        // updateUserLink("rob", id, dummyLinkData, setUser)
    }

    // const editNameHandler = () => {
        
    // }

    // const editUrlHandler = () => {

    // }

    console.log(user)
    
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

            <div className="userProfile_add-link-container">
                <form onSubmit={submitHandler} className="userProfile_form">
                    <div className="userProfile_button-container">
                        <button  className="userProfile_button">add new link</button>
                    </div>

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
                            
                        </div>
                    </div>
                </form>
                {<div>{user && user.socialLinks && user.socialLinks.map((item, i) => {
                    console.log(item)
                    return (
                        <div className="userProfile_link-card" key={i}>
                            <div className="userProfile_link-card-name">
                                <p>{item.socialName}</p>
                                {/* <div className="userProfile_link-card-button">
                                    <button>edit</button>
                                </div> */}
                            </div>
                            <div className="userProfile_link-card-url">
                                <p>{item.url}</p>
                                {/* <div className="userProfile_link-card-button">
                                    <button>edit</button>
                                </div> */}
                                <div className="userProfile_link-card-button">
                                    <button onClick={() => deleteLinkHandler(item.id)}>Delete</button>
                                </div>
                                <div className="userProfile_link-card-button">
                                    <button onClick={() => editLinkHandler(item.id)}>Edit</button>
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