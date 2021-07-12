const { test, expect, beforeEach } = require("@jest/globals")
const NoteService = require("./noteService")

describe("Note service tests", ()=>{
    
    test("List note", ()=>{
        const noteService = new NoteService();
        expect(() => noteService.list("John")).toThrow();
    })

    test("If user is defined and there is a note", ()=>{
        const noteService = new NoteService();
        noteService.add("Hi There", "Jack");
        expect(noteService.list("Jack")).toEqual(["Hi There"])
    })

    test("Adding a note does not replace previous notes", ()=>{
        const noteService = new NoteService();
        noteService.add("Hi There", "Jack");
        noteService.add("Second Note", "Jack");
        expect(noteService.list("Jack")).toEqual(["Hi There", "Second Note"])
    })

    test("Editing a note", ()=>{
        const noteService = new NoteService();
        noteService.add("Hi There", "Jack");
        noteService.add("Second Note", "Jack");
        noteService.edit("Edited Note", "Jack", [1]);
        expect(noteService.list("Jack")).toEqual(["Hi There", "Edited Note"])
    })

    test("Deleting a note", ()=>{
        const noteService = new NoteService();
        noteService.add("Hi There", "Jack");
        noteService.add("Second Note", "Jack");
        noteService.delete("Jack", [1]);
        expect(noteService.list("Jack")).toEqual(["Hi There"])
    })

    test("Multiple users and notes", ()=>{
        const noteService = new NoteService();
        noteService.add("Hi There", "Jack");
        noteService.add("Cool Note", "John");
        noteService.add("Second Note", "Jack");
        expect(noteService.list("Jack")).toEqual(["Hi There", "Second Note"]);
        expect(noteService.list("John")).toEqual(["Cool Note"]);
    })
})