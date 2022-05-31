export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        setter(data.user.username);
        localStorage.setItem("myToken", data.token)
        console.log(data.user.username)
    } catch (err) {
        console.log(err)
    }
}

export const login = async (setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: { Authorization: localStorage.getItem("myToken") }
        })
        const data = await response.json()
        setter(data.user)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

export const loginUP = async (setUser, email, password) => {
    try {
        const response = await fetch(`$(process.env.REACT_APP_REST_API)login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        console.log(data);
        setUser(data);
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (username, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/getUser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
            })
        })
        const data = await response.json()
        setter(data.user)
        console.log(data)
    } catch (err) {
        console.log(err)        
    }
}

export const updateUser = async (username, updateObj, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                updateObj: updateObj
            })
        })
        const data = await response.json()
        setter(data.user)
    } catch (err) {
        console.log(err)
    }
}

export const deleteUserLink = async (username, index, setter) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user/link`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            index: index
        })
    })
    const data = await response.json()
    setter(data.user)
}

export const updateUserLinkSocialName = async (username, socialName, index, setter) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user/linkSocial`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            index: index,
            socialName: socialName
        })
    })
    const data = await response.json()
    setter(data.user)
}

export const updateUserLinkUrl = async (username, url, index, setter) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user/linkUrl`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            index: index,
            url: url
        })
    })
    const data = await response.json()
    setter(data.user)
}

// export const updateUserLink = async (username, linkId, updateObj, setter) => {
//     try {
//         const response = await fetch(`${process.env.REACT_APP_REST_API}user/userLink`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 username: username,
//                 linkId: linkId,
//                 updateObj: updateObj
//             })
//         })
//         const data = await response.json()
//         setter(data.user)
//     } catch (err) {
//         console.log(err)
//     }
// }
