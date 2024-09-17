const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({username: ["sam", "ruth", "susan"]});
});
app.listen(8080, () => {
    console.log("Server listening on port 8080");
});