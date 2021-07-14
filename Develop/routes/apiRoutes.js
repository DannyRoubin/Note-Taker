const fs = require("fs");
let dataStop1 = fs.readFileSync("./db/db.json", "utf-8");
let dataStop2 = JSON.parse(dataStop1);

function addToNoteList() {
  fs.writeFile("./db/db.json", JSON, stringify(dataStop2), (err) => {
    if (err) console.log(err);
  });
}

module.exports = (app) => {
  app.get("/api/notesDB", (req, res) => {
    res.json(dataStop2);
  });

  app.post("/api/notesDB", (req, res) => {
    dataStop2.push(req.body);
    res.json(true);
    addToNoteList();
  });
};
