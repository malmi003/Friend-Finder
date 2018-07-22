// Dependencies
// ==================================================
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser")
let htmlRoutes = require("./app/routing/htmlRoutes.js")
let apiRoutes = require("./app/routing/apiRoutes.js")

//Set up Express App
// ==================================================
const app = express();
const PORT = process.env.PORT || 8080;

//Friend finder data
// ==================================================
let dogList = [],
    humanList = [];

//Routes
// ==================================================
app.use(htmlRoutes);
app.use(apiRoutes);

// Start server
// ==================================================

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});