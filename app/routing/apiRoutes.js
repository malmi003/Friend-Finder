let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

//Friend finder data
//dummy dogs to start list
let dogList = [
    {
        "name": "Fido",
        "phone": "232-121-1211",
        "imgUrl": "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63de74668d8517b43662a6fcf3870f22&auto=format&fit=crop&w=500&q=60",
        "score": [
            "2",
            "3",
            "4",
            "4",
            "3",
            "2",
            "2",
            "3",
            "4",
            "4"
        ]
    },
    {
        "name": "Pepper",
        "phone": "988-888-7878",
        "imgUrl": "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04b51d28a9300ebdc2aa1cb9fcbdf71b&auto=format&fit=crop&w=500&q=60",
        "score": [
            "1",
            "2",
            "2",
            "1",
            "1",
            "3",
            "3",
            "2",
            "1",
            "1"
        ]
    },
    {
        "name": "Birdie",
        "phone": "344-544-4545",
        "imgUrl": "https://images.unsplash.com/photo-1455757618770-0a58b0b28ebd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=653479d4bc715c52a058e496bd75cf2a&auto=format&fit=crop&w=500&q=60",
        "score": [
            "3",
            "4",
            "5",
            "5",
            "4",
            "3",
            "4",
            "5",
            "4",
            "3"
        ]
    }
],
    //dummy people to start list
    humanList = [
        {
            "name": "Julia",
            "phone": "454-234-2342",
            "imgUrl": "https://images.unsplash.com/photo-1520983563484-68aa32667ee3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2df6d84707983313fdfa075407957c93&auto=format&fit=crop&w=500&q=60",
            "score": [
                "3",
                "4",
                "2",
                "2",
                "3",
                "4",
                "4",
                "3",
                "2",
                "3"
            ]
        },
        {
            "name": "James",
            "phone": "345-343-3433",
            "imgUrl": "https://images.unsplash.com/photo-1519221196580-f58348582a5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=274fc39fb469e406b0cf2828eebaf024&auto=format&fit=crop&w=500&q=60",
            "score": [
                "1",
                "2",
                "2",
                "3",
                "2",
                "2",
                "1",
                "1",
                "2",
                "2"
            ]
        },
        {
            "name": "Stephanie",
            "phone": "322-234-2344",
            "imgUrl": "https://images.unsplash.com/photo-1486322349951-d77344d47581?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d9e1ce6101190b98242b579db60b578&auto=format&fit=crop&w=500&q=60",
            "score": [
                "5",
                "4",
                "4",
                "5",
                "3",
                "4",
                "4",
                "3",
                "4",
                "5"
            ]
        }
    ];

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

    res.json(newFriend);
});

//export to server.js
module.exports = app;