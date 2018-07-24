let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/dogSurvey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dogSurvey.html"));
});
app.get("/humanSurvey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/humanSurvey.html"));
});
//for my stylesheet
app.get("styles/main.css", function (req, res) {
    res.sendFile(path.join(__dirname, "styles/main.css"));
});
//catch-all route to direct any other page to homepage
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//export to server.js
module.exports = app;