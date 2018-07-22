let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

//get route to api/dogList
app.get("/api/fourLeggedFriendList", function (req, res) {
    return res.json(dogList);
});

app.get("/api/humanFriendList", function (req, res) {
    return res.json(humanList);
});

//post route to api/friend list
app.post("/api/fourLeggedFriendList", function (req,res) {
    let newFriend = req.body;
    dogList.push(newFriend);

    res.json(newFriend);
});

app.post("/api/humanFriendList", function (req,res) {
    let newFriend = req.body;
    humanList.push(newFriend);

    res.json(newFriend);
});

//export to server.js
module.exports = app;