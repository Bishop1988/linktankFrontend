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

export const getUser = async (username, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/getUser`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
            })
        })
        const data = await response.json()
        setter(data.users)
        console.log(data)
    } catch (err) {
        console.log(err)        
    }
}