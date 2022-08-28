const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(cors());

// data
const Players = {
  neuer: {
    "full name": "Manuel Peter Neuer",
    position: "GK",
    club: "Bayern Munich",
    age: 36,
    number: 1,
  },
  unknown: {
    unknown: "unknown",
  },
};
const url = "https://fantasy.premierleague.com/api/bootstrap-static/";
// express
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/api", (req, res) => {
  res.json(Players);
  // fetch(url)
  //   .then((response) => {
  //     res.json(response);
  //   })
  //   .catch((err) => console.error(err));
});

app.get("/api/:name", (req, res) => {
  const playerName = req.params.name.toLowerCase();
  if (Players[playerName]) {
    res.json(Players[playerName]);
  } else {
    res.json(Players["unknown"]);
  }
});

app.listen(PORT, (_) => {
  console.log(`app running on port: ${PORT}, betta go catch it!`);
});

