const express = require('express');

class NoteRouter {
    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        let router = express.Router();

        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));
        router.put("/:id", this.put.bind(this));
        router.delete("/:id", this.delete.bind(this));

        return router;
    }

    get(req, res) {
        let user = req.auth.user
        return this.noteService.list(user).then((notes) => {
            res.json(notes)
        }).catch((err) => {
            throw new Error(err)
        })
    }

    post(req, res) {
        let user = req.auth.user;
        
    }

    put() {

    }

    delete() {
        
    }
}