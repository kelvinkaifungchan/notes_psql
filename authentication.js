// Users
const users = [
    {
        "username": "Kelvin",
        "password": "Password"
    }
]

// User authorisation
function myAuthorizer(username, password) {
    console.log()
    return users.some((user)=> {
        return user.username == username && user.password == password
    })
}

module.exports = myAuthorizer;