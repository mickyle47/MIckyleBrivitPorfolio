const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server started on port 3000");
});
