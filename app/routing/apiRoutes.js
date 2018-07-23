let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let dogFriends = require("./../data/dogFriends");
let humanFriends = require("./../data/humanFriends");
let fs = require("fs");

let app = express();

//Friend finder data
//dummy dogs to start list
let dogList = dogFriends,
    //dummy people to start list
    humanList = humanFriends;

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

    //this is the score comparison logic
    //need to determine current users score then compare with doggos
    let currentUserScore = newFriend.score;
        totalDifference = 0,
        currentMatch = 50,
        finalMatch = "";


    dogList.forEach((item, index) => {
        item.score.forEach((item, index) => {
            totalDifference += Math.abs(item - currentUserScore[index]);
        });
        if (totalDifference < currentMatch) {
            currentMatch = totalDifference;
            finalMatch = item;
        };
        totalDifference = 0;
    });
    console.log(finalMatch);

    res.json(newFriend);
});

//export to server.js
module.exports = app;