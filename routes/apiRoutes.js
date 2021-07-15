// importing fs
const fs = require("fs");
// pulls the raw unfiltered data
let dataStop1 = fs.readFileSync("./db/db.json", "utf-8");
// parses the data to make it workable
let dataStop2 = JSON.parse(dataStop1);

// function to allow me to add new sets of data to the db so a user will keep their data upon return to the website
function addToNoteList() {
  fs.writeFile("./db/db.json", JSON.stringify(dataStop2), (err) => {
    if (err) throw err;
    return true;
  });
}

module.exports = (app) => {
  // grabs data from the db
  app.get("/api/notes", (req, res) => {
    res.json(dataStop2);
  });
  // grabs note based off of note id
  app.get("/api/notes/:noteId", (req, res) => {
    res.JSON(dataStop2[req.params.noteId]);
  });

  // pushes the new note to the db, which is then grabbed from a get method above
  app.post("/api/notes", (req, res) => {
    dataStop2.push(req.body);
    res.json(true);
    addToNoteList();
  });
};
