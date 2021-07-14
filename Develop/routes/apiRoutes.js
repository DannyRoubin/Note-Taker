const fs = require("fs");
let dataStop1 = fs.readFileSync("./db/db.json", "utf-8");
let dataStop2 = JSON.parse(dataStop1);

function addToNoteList() {
  fs.writeFile("./db/db.json", JSON, stringify(dataStop2), (err) => {
    if (err) console.log(err);
  });
}

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(dataStop2);
  });

  app.get("/api/notes/:noteId", (req, res) => {
    res.JSON(dataStop2[req.params.noteId]);
  });

  app.post("/api/notes", (req, res) => {
    dataStop2.push(req.body);
    res.json(true);
    addToNoteList();
  });
};
