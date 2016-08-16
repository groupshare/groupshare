var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", function(req, res) {
	res.render("pages/index", { title: "Index Page", message: "Hello, app!" });
});
app.listen(3000, function() {
	console.log("groupol listening on port 3000!");
});
