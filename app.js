// require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const md5 = require('md5');

const app = express();

app.use(express.static("public"));
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

var armySize = 500;
var bon1, bon2, bon3;
var silven,
  etherion,
  arthora,
  danera,
  miorbmark,
  idzora,
  wrafuthen,
  gorene,
  yitanada,
  qaevia;
const country = {
  mapNames: function () {
    return [
      { name: "etherion", size: 900, ans: 49.5 },
      { name: "siven", size: 1000, ans: 49.5 },
      { name: "gorene", size: 400, ans: 49.5 },
      { name: "yitanada", size: 800, ans: 49.5 },
      { name: "danera", size: 300, ans: 49.5 },
      { name: "arthora", size: 500, ans: 49.5 },
      { name: "miorbmark", size: 1000, ans: 49.5 },
      { name: "idzora", size: 1000, ans: 49.5 },
      { name: "qaevia", size: 700, ans: 49.5 },
      { name: "wrafuthen", size: 600, ans: 49.5 },
    ];
  },
};

// db
const db = "mongodb://localhost:27017/userDB";
// const db = require('./config/key').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(console.log("MongoDb connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  armySize: {
    type: Number,
    default: 500,
  },
  countries: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// plugin

const User = mongoose.model("User", userSchema);
// capital U in User model

//Homepage
app.get("/", (req, res) => res.render("homepage"));
app.get("/about", (req, res) => res.render("aboutpage"));
app.get("/hinstruction", (req, res) => res.render("instructionpage"));
app.get("/ginstruction", (req, res) => res.render("gameinstructionpage"));

app.get("/login", (req, res) => {
  res.render("loginpage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) console.log(err);
    else {
      if (foundUser) res.send("Already Registered!!!! Kindly Login");
      else {
        //creating a new user
        // we picked the username and password from buttons name in register file.
        const newUser = new User({
          username: req.body.username,
          password: req.body.password,
        });
        //saving to db
        //if there weren't any error we gonna render the file
        newUser.save((err) => {
          if (err) console.log(err);
          else res.render("loginpage");
        });
      }
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }, (err, foundUser) => {
    if (err) console.log(err);
    else {
      if (foundUser) {
        if (foundUser.password == password)
          res.render("game", {
            bon1: "visible",
            bon2: "visible",
            bon3: "visible",
            username: username,
            armySize: foundUser.armySize,
            silven: silven,
            etherion: etherion,
            arthora: arthora,
            danera: danera,
            miorbmark: miorbmark,
            idzora: idzora,
            wrafuthen: wrafuthen,
            gorene: gorene,
            yitanada: yitanada,
            qaevia: qaevia,
          });
        else res.send("Incorrect Password!!!");
      } else res.send("User not registered!Kindly register");
    }
  });
});

app.get("/game", (req, res) => {
  const username = req.body.username;
  // const armySize = req.body.armySize;
  User.findOne({ username: username }, (err, army) => {
    if (err) throw err;
    else {
      console.log(army.armySize);
      res.render("game", {
        bon1: bon1,
        bon2: bon2,
        bon3: bon3,
        username: username,
        armySizedb: army.armySize,
        armySize: armySize,
        silven: silven,
        etherion: etherion,
        arthora: arthora,
        danera: danera,
        miorbmark: miorbmark,
        idzora: idzora,
        wrafuthen: wrafuthen,
        gorene: gorene,
        yitanada: yitanada,
        qaevia: qaevia,
      });
    }
  });
});

// bonuses
app.post("/bonus1", (req, res) => {
  const username = req.body.username;
  var bonus1 = req.body.bonus1;
  // var bonus1=4;
  if (bonus1 == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate(
    { username: username },
    { armySize: armySize },
    { new: true }
  );
  // Model.findOneAndUpdate(
  //   { id: id_var },
  //   { $set: { name: name_var } },
  //   {new: true, passRawResult: true},
  //   (err, doc, raw) => { /*Do something here*/ })
  // doc is the record (document)
  bon1 = "bon1";
  if (bon2 == "bon2") bon2 = bon2;
  res.redirect("/game");
});

app.post("/bonus2", (req, res) => {
  const username = req.body.username;
  var bonus2 = req.body.bonus2;
  if (bonus2 == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });

  bon2 = "bon2";
  if (bon1 == "bon1") bon1 = bon1;
  if (bon3 == "bon3") bon3 = bon3;
  res.redirect("/game");
});

app.post("/bonus3", (req, res) => {
  const username = req.body.username;
  var bonus3 = req.body.bonus3;
  if (bonus3 == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });

  bon3 = "bon3";
  if (bon2 == "bon2") bon2 = bon2;
  if (bon1 == "bon1") bon1 = bon1;
  res.redirect("/game");
});

app.post("/etherion", (req, res) => {
  const username = req.body.username;
  var etherion = req.body.etherion;
  if (etherion == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = "etherion";
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/silven", (req, res) => {
  const username = req.body.username;
  var silven = req.body.silven;
  if (silven == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = "silven";
  etherion = etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/gorene", (req, res) => {
  const username = req.body.username;
  var gorene = req.body.gorene;
  if (gorene == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = "gorene";
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/yitanada", (req, res) => {
  const username = req.body.username;
  var yitanada = req.body.yitanada;
  if (yitanada == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = "yitanada";
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/danera", (req, res) => {
  const username = req.body.username;
  var danera = req.body.danera;
  if (danera == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = arthora;
  danera = "danera";
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/arthora", (req, res) => {
  const username = req.body.username;
  var arthora = req.body.arthora;
  if (arthora == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = "arthora";
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/miorbmark", (req, res) => {
  const username = req.body.username;
  var miorbmark = req.body.miorbmark;
  if (miorbmark == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = "miorbmark";
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/idzora", (req, res) => {
  const username = req.body.username;
  var idzora = req.body.idzora;
  if (idzora == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion =etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = "idzora";
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

app.post("/qaevia", (req, res) => {
  const username = req.body.username;
  var qaevia = req.body.qaevia;
  if (qaevia == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = wrafuthen;
  gorene = gorene;
  yitanada = yitanada;
  qaevia = "qaevia";
  res.redirect("/game");
});

app.post("/wrafuthen", (req, res) => {
  const username = req.body.username;
  var wrafuthen = req.body.wrafuthen;
  if (wrafuthen == 4) {
    armySize = armySize + 100;
    console.log("chalgya");
  }
  console.log("yeh wala " + armySize);

  User.findOneAndUpdate({ username: username }, { armySize: armySize });
  silven = silven;
  etherion = etherion;
  arthora = arthora;
  danera = danera;
  miorbmark = miorbmark;
  idzora = idzora;
  wrafuthen = "wrafuthen";
  gorene = gorene;
  yitanada = yitanada;
  qaevia = qaevia;
  res.redirect("/game");
});

// Logout
app.get("/endpage", (req, res) => {
  res.render("endpage");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`set up at ${PORT}`);
});
