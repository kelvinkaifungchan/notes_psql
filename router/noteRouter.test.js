const NoteRouter = require("noteRouter")

let noteService;
let noteRouter;
let res;

describe("Note router function tests", () => {

    beforeEach(() => {
        noteRouter = new NoteRouter(noteService)
    })
})