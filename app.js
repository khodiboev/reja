console.log('Web Serverni boshlash');
const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB connection
const db = require("./server");
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
});


//1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Session code

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    console.log('user entered /delete-item');
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectID(id)},
    function(err, data) {
        res.json({state: "success"});
    })
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectID(data.id)},
        {$set: {reja: data.new_input}},
        function(err, data) {
            res.json({state: "success"});
        }
    );
});

app.get("/author", (req, res) => {
    res.render('author', {user: user});
})

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany({}, (err) => {
      if (err) return res.json({ state: "fail" });
      res.json({ state: "success" });
    });
  } else {
    res.json({ state: "fail" });
  }
});


app.get('/', function(req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log("ERROR:", err);
            res.end("Something went wrong.");
        } else {
            res.render('reja', {items: data});
        }
    });
});

module.exports = app;

