const path = require("path");

module.exports = (app) => {
  // depending on the path location, load either the notes html or the index (home) html
  app.get("/notes", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
