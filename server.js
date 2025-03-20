const express = require("express");// Import the Express module
const app = express();// Create an Express application instance
const port = 3111;// Defining the port number on which the server will run

app.use(express.static("public"));// Middleware 
app.get("/", (req, res) => {
    res.send("this is directory");//home page route
});

app.get("/connect", (req, res) => {
    res.send("this is connect list page");// connect page route
});

app.get("/team", (req, res) => {
    res.send("this is team page");// team page route
});

app.listen(port, () => {
    console.log(`Server connected at :${port}`);//Start the server
});


