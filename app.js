// Setting up modules
const fs = require("fs")

//Setup Express
const express = require("express");
const app = express();
require("dotenv").config();
const handlebars = require("express-handlebars");

//Setup Postgres
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig)

//Set up front end
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Setting up middleware
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(express.static("public"));

//Setup Authentication
const basicAuth = require('express-basic-auth');
const authorizer = require("./authentication")
app.use(basicAuth({
    authorizer: authorizer,
    authorizeAsync: true,
    challenge: true,
}));

//Setup Notes Service and Router
const NoteService = require("./service/noteService")
const noteService = new NoteService(knex)

// Show homepage
app.get("/", (req, res) => {
    console.log("getting homepage")
    noteService.list(req.auth.user).then((data) => {
        console.log(data)
        res.render("index", {
            user: req.auth.user,
            notes: data
        })
    })
})

// //Connect to Note Router
const NoteRouter = require("./router/noteRouter");
app.use("/api/notes", new NoteRouter(noteService).router());

//Setup server
app.listen(8080, function () {
    console.log("Running on port 8080")
})

module.exports = app