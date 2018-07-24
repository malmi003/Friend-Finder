let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

//get route to / that displays home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
//get route to /survey that displays survey
app.get("/dogSurvey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dogSurvey.html"));
});
app.get("/humanSurvey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/humanSurvey.html"));
});
app.get("styles/main.css", function (req, res) {
    res.sendFile(path.join(__dirname, "styles/main.css"));
});
//catch-all route to direct any other page to homepage
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//export to server.js
module.exports = app;