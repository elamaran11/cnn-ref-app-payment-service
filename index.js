var express = require("express");
var cors = require("cors");
var app = express();
const uuid = require('uuid/v4');

app.use(cors());

app.listen(50051, () => {
 console.log("Server running on port 50051");
});


app.get("/payment", (req, res, next) => {
	 res.json([uuid()]);
	});