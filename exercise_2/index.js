const express = require("express");
const app = express();
var city = port (5501);
var movies = port (5502);


const city = [
    { cityName: "Chicago", continent: "North America" },
    { cityName: "Atlanta", continent: "North America" },
    { cityName: "Bogota", continent: "South America" },
    { cityName: "Brazil", continent: "South America" },
    { cityName: "Lagos", continent: "Africa" },
    { cityName: "Cairo", continent: "Africa" },
    { cityName: "Tokyo", continent: "Asia" },
    { cityName: "Seoul", continent: "Asia" },
    { cityName: "Düsseldorf", continent: "Europe" },
    { cityName: "Berchtesgaden", continent: "Europe" },
]

const aboutMe = [
{ name: "Pamela", city: "Duluth", state: "GA" },];

const movies = [
    { movieName: "Gladiator", poster: "https://images.app.goo.gl/S3wA3r6KP54yc2VQ6"},
    { movieName: "The Fifth Element", poster: "https://images.app.goo.gl/Sdj3n37ZbhkRmGXMA"},
    { movieName: "Love & Basketball", poster: "https://images.app.goo.gl/DZsHwK8YotRzfYGq5"},
    { movieName: "The Chronicles of Riddick", poster: "https://images.app.goo.gl/uDg25Ye6FG5SnHsS8"},
    { movieName: "Spanglish", poster: "https://images.app.goo.gl/c1QPgyxqfQeQpuGc6"},
]
// Write your routes between the ***

// ***
city_app.get("/", (req,res)=> {
    res.send(console.log("Node and express are just lovely"));
})
city_app.get("/", (req, res)=> {
    res.send(console.log("This is an invalid route"));
})

city_app.get("/",(req, res) => {
    res.render("city", {
    locals: {
        cityName,
        continent,
    }
})
});

city_app.get("/",(req, res) => {
    res.render("About Me", {
        aboutMe: {
            myName,
            city,
            state
        }
    })
});


movies_app.get("/",(req, res) => {
    res.render("Movies", {
        movies: {
            movieName,
            moviePoster
        }
    })
});
// ***


const es6Renderer = require("");
app.engine('html', es6Renderer),
app.set('views', 'templates'),
app.set('view engine', 'html'),



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});