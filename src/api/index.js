const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

const listUsers = () => fetch(`${process.env.REACT_APP_API_URL}/userlist`).then(response => {
    return response.json()
})

const createUser = (user) => fetch(`${process.env.REACT_APP_API_URL}/user`, {
    method: 'POST',
    headers,
    json: JSON.stringify(user)
})

export default {
    listUsers,
    createUser
}