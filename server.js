// =========== REQUIRE MODULES ==============
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Points to the angular file to server the index.html
app.use(express.static(__dirname + '/public/dist/public'));

// =========== LISTEN PORT ===========
app.listen(port, function () {
    console.log("You are listening on port 5000")
})

// =========== ROUTES ===========

app.get('/', function (req, res) {
    res.json({ message: "you made it to the root route" })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});