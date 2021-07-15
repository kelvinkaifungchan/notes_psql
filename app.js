// Setting up modules
const fs = require("fs")

const express = require("express");
const app = express();
const basicAuth = require('express-basic-auth');
const handlebars = require("express-handlebars");

const NoteService = require("./service/noteService")
const NoteRouter = require("./router/noteRouter");
const myAuthorizer = require("./authentication")

// Set up front end
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Setting up middleware
app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
}));

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use(express.static("public"));



//Create note
const noteService = new NoteService(__dirname + "/storage/notes.json")

// Show homepage
app.get("/", (req, res) => {
    console.log("getting homepage")
    noteService.list(req.auth.user).then((data) => {
        res.render("index", {
            user: req.auth.user,
            notes: data
        })
    })
})

// //Connect to noteService router
app.use("/api/notes", new NoteRouter(noteService).router());

//Setup server
app.listen(8080, function () {
    console.log("Running on port 8080")
})

module.exports = app