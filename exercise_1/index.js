const PORT = 5501
const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    res.send(console.log("Why hello there!"));
})

app.get("/", (req, res) => {
    res.send(console.log("🥭 is 🔥"));
})

app.get("/", (req, res) => {
    res.send(console.log("I wonder what's wrong with this route 🤔?"));
})

app.get("/", (req, res) => {
    res.send(console.log("Happy 🐶 loves yummy dog food!"));
})

app.post("/fruitsmoothe",(req, res) => {
    res.send(console.log("A 🥭, 🍍, 🍓 make a wonderful smoothie!"));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});