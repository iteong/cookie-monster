var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
 extended: false
}));

app.use(bodyParser.json());

// set up a URL route for HTTP GET
app.get("/", function (req, res) {
 console.log(req.query);
 res.writeHead(200);
 res.end("Cookie acquired via GET :)\n");
});

// set up a URL route for HTTP POST
app.post("/", function (req, res) {
 console.log(req.body.cookie);
 res.writeHead(200);
 res.end("Cookie acquired via POST :)\n");
});

// bind the app to listen for connections on specified port
var port = process.env.PORT || 9090;
app.listen(port);

// Render some console log output
console.log("Waiting on port " + (process.env.PORT || 9090));