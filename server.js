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

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
// ==================================================
app.use(apiRoutes);
app.use(htmlRoutes);

// Start our server so that it can begin listening to client requests
// ==================================================
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});