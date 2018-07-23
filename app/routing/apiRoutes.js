let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let dogFriends = require("./../data/dogFriends");
let humanFriends = require("./../data/humanFriends");
let fs = require("fs");

let app = express();

//also left off here
//Friend finder data
//dummy dogs to start list
let dogList = dogFriends,
    //dummy people to start list
    humanList = humanFriends;

fs.readFile("data/humanFriends.js", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    };
    console.log(data);
});



//get route to api/dogList
app.get("/api/fourLeggedFriendList", function (req, res) {
    return res.json(dogList);
});

app.get("/api/humanFriendList", function (req, res) {
    return res.json(humanList);
});

//post route to api/friend list
app.post("/api/fourLeggedFriendList", function (req, res) {
    let newFriend = req.body;
    dogList.push(newFriend);

    res.json(newFriend);
});

app.post("/api/humanFriendList", function (req, res) {
    let newFriend = req.body;
    humanList.push(newFriend);

    // left off here
    fs.writeFile("./../data/dogFriends", humanList, function (err) {

        if (err) throw err;

        console.log("Content Added!");

    });

    res.json(newFriend);
});

//export to server.js
module.exports = app;