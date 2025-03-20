const express = require("express");
const app = express();
const port = 3111;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("this is directory");
});


app.get("/connect", (req, res) => {
    res.send("this is connect list page");
});


app.get("/team", (req, res) => {
    res.send("this is team page");
});
app.listen(port, () => {
    console.log(`Server connected at :${port}`);
});


