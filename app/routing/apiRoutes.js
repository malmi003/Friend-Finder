let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let dogFriends = require("./../data/dogFriends");
let humanFriends = require("./../data/humanFriends");

let app = express();

//Friend finder data
let dogList = dogFriends,
    humanList = humanFriends;

//get route to api/dogList
app.get("/api/fourLeggedFriendList", function (req, res) {
    return res.json(dogList);
});
//get route to api/humanList
app.get("/api/humanFriendList", function (req, res) {
    return res.json(humanList);
});

//post route to api/dog friend list
app.post("/api/fourLeggedFriendList", function (req, res) {
    let newFriend = req.body;
    //put the req object into newFriend and push to dogList array
    dogList.push(newFriend);

    //set variables for comparing to ppl in list
    let currentUserScore = newFriend.score;
    totalDifference = 0,
        currentMatch = 50,
        finalMatch = "";

    //for each human in list
    humanList.forEach((item, index) => {
        //take their score
        item.score.forEach((item, index) => {
            //and add the absolute value of it minus the currentUserScore
            totalDifference += Math.abs(item - currentUserScore[index]);
        });
        //If that difference is less than the current, the current person becomes the new best match
        if (totalDifference < currentMatch) {
            currentMatch = totalDifference;
            finalMatch = item;
        };
        //reset the difference for the next item
        totalDifference = 0;
    });

    //respond with the best match for rendering
    res.json(finalMatch);
});

//post route to api/human friend list
app.post("/api/humanFriendList", function (req, res) {
    let newFriend = req.body;
    //put the req object into newFriend and push to dogList array
    humanList.push(newFriend);

    //set variables for comparing to ppl in list
    let currentUserScore = newFriend.score;
    totalDifference = 0,
        currentMatch = 50,
        finalMatch = "";

    //for each dog in list
    dogList.forEach((item, index) => {
        //take their score
        item.score.forEach((item, index) => {
            //and add the absolute value of it minus the currentUserScore
            totalDifference += Math.abs(item - currentUserScore[index]);
        });
        //If that difference is less than the current, the current person becomes the new best match
        if (totalDifference < currentMatch) {
            currentMatch = totalDifference;
            finalMatch = item;
        };
        //reset the difference for the next item
        totalDifference = 0;
    });

    //respond with the best match for rendering
    res.json(finalMatch);
});

//export to server.js
module.exports = app;