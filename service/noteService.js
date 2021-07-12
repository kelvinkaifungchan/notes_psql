const fs = require("fs");

class NoteService {
    constructor(file) {
        this.file = file
        this.notes = this.readNotes(this.file);
    }

    // Function to add a note
    add(note, user) {
        // if the user does not exist
        if (this.notes[user] === undefined) {
            this.notes[user] = [note]
        }
        // if the user already exists
        else {
            this.notes[user].push(note);
        }
        this.writeNotes();
        console.log("Add note done ", this.notes[user])
    }

    edit(note, user, index) {
        this.notes[user][index] = note;
        this.writeNotes();
        console.log("Edit note done ", this.notes[user]);
    }

    delete(user, index) {
        this.notes[user].splice(index, 1);
        this.writeNotes();
        console.log("Delete note done ", this.notes[user]);
    }

    list(user) {
        if (this.notes[user] === undefined) {
            throw new Error("User not found");
        } else {
            return this.notes[user];
        }
    }

    writeNotes() {
        console.log("Writing notes in storage");
        return new Promise((resolve, reject) => {
            let data = JSON.stringify(this.notes);
            fs.writeFile(__dirname + '/../storage/notes.json', data, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve(this.notes)
            })
        })
    }

    readNotes(file) {
        console.log("Reading notes in storage");
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err,data) => {
                if(err) {
                    reject (err);
                } else {
                    resolve(data);
                }
            })
        })
    }

}

module.exports = NoteService;

// const testNote = new NoteService
// testNote.add("First Note", "User1");
// testNote.add("Second Note", "User1");
// testNote.add("Hi There", "User2");
// testNote.delete("User1", 0);
// testNote.edit("Changed it", "User2", 0);
// console.log(testNote.list("User1"));
// console.log(testNote.list("User2"));