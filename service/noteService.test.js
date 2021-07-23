const NoteService = require("./noteService");
const knex = require("knex")({
  client: 'postgresql',
  connection: {
    database: 'notestest',
    user: 'postgres',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  }
});

describe("Note service tests", () => {
  beforeAll(done => {
    done()
  })
  
  beforeEach(() => {
    jest.setTimeout(2000);
  })

  afterAll(done => {
    done()
  })
  
  test("If user is defined and there is a note", async () => {
    const noteService = new NoteService(knex);
    return noteService
      .add("Hi There", "Test")
      .then(() => noteService.list("Test"))
      .then((data) => {
        expect(data).toEqual([{
          id: 1,
          body: "Hi There",
        }]);
      });
  });

  test("Editing a note", async () => {
    const noteService = new NoteService(knex);
    return noteService
      .edit("Edited Note", 1)
      .then(() => noteService.list("Test"))
      .then((data) => {
        expect(data).toEqual([{
          id: 1,
          body: "Edited Note"
        }])
      })
  });

  test("Deleting a note", async () => {
    const noteService = new NoteService(knex);
    return noteService
      .delete(1)
      .then(() => noteService.list("Test"))
      .then((data) => {
        expect(data).toEqual([])
      })
  });
});