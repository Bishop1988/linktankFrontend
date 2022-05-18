export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json()
        setter(data.user)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

export const listUsers = async (setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`)
        const data = await response.json()
        setter(data.users)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}