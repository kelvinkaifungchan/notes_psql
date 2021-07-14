// Users
const users = [
    {
        "username": "Kelvin",
        "password": "Password"
    },
    {
        "username": "Sam",
        "password": "Password"
    },
    {
        "username": "Clement",
        "password": "Password"
    }
]

// User authorisation
function myAuthorizer(username, password) {
    console.log(username, password)
    return users.some((user)=> {
        return user.username == username && user.password == password
    })
}

module.exports = myAuthorizer;