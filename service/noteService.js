const fs = require("fs");

class NoteService {
    constructor(knex) {
        this.knex = knex
    }

    // Method to add a note
    add(note, user) {
        console.log("Adding a new note");
        return this.knex("users")
        .where({username: user})
        .then((user) => {
            return this.knex
            .insert({body: note, user_id: user[0].id})
            .into("notes");
        })
        .then(() => {
            return 
        })
    }

    // Method to update a note
    edit(note, index) {
        console.log("editing note")
        return this.knex("notes").where("id", index).update({body:note})
    }

    //Method to delete a note
    delete(index) {
        console.log("deleting a note")
       return this.knex("notes").where("id", index).del();
    }

    //Method to show notes
    list(user) {
        console.log("listing notes")
        return this.knex
        .select("notes.id", "notes.body")
        .from('notes')
        .innerJoin("users", "notes.user_id", "users.id")
        .where("users.username", user)
        .orderBy("notes.id", "desc")
        .then((notes) => {
            return notes.map((note) => { return ({id:note.id, body: note.body})})
        })
    }
}

module.exports = NoteService;