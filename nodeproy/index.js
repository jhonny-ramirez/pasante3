const express = require("express");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("This is the backend with NodeJs!");
});

app.listen(3005, () => console.log('Server started'));

