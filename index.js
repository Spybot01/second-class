const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5151;
const URI = process.env.uri

mongoose
  .connect(URI)
  .then(() => {
    console.log("lift off'Database neuralink connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
const cities = [
  {
    name: "New York City",
    population: 8419000,
    country: "United States",
    landmass: "468.9 sq mi",
    landmark: "Statue of Liberty",
    picture: "https://example.com/nyc.jpg",
  },
  {
    name: "Los Angeles",
    population: 3980000,
    country: "United States",
    landmass: "503 sq mi",
    landmark: "Hollywood Sign",
    picture: "https://example.com/la.jpg",
  },
  {
    name: "Chicago",
    population: 2716000,
    country: "United States",
    landmass: "234 sq mi",
    landmark: "Willis Tower",
    picture: "https://example.com/chicago.jpg",
  },
  {
    name: "Houston",
    population: 2328000,
    country: "United States",
    landmass: "637 sq mi",
    landmark: "Space Center Houston",
    picture: "https://example.com/houston.jpg",
  },
  {
    name: "Phoenix",
    population: 1690000,
    country: "United States",
    landmass: "517 sq mi",
    landmark: "Desert Botanical Garden",
    picture: "https://example.com/phoenix.jpg",
  },
  {
    name: "Philadelphia",
    population: 1584000,
    country: "United States",
    landmass: "142.7 sq mi",
    landmark: "Liberty Bell",
    picture: "https://example.com/philadelphia.jpg",
  },
  {
    name: "San Antonio",
    population: 1547000,
    country: "United States",
    landmass: "465 sq mi",
    landmark: "The Alamo",
    picture: "https://example.com/sanantonio.jpg",
  },
  {
    name: "San Diego",
    population: 1424000,
    country: "United States",
    landmass: "325 sq mi",
    landmark: "Balboa Park",
    picture: "https://example.com/sandiego.jpg",
  },
  {
    name: "Dallas",
    population: 1341000,
    country: "United States",
    landmass: "340.5 sq mi",
    landmark: "The Sixth Floor Museum",
    picture: "https://example.com/dallas.jpg",
  },
  {
    name: "San Jose",
    population: 1035000,
    country: "United States",
    landmass: "180 sq mi",
    landmark: "Winchester Mystery House",
    picture: "https://example.com/sanjose.jpg",
  },
  {
    name: "Austin",
    population: 993000,
    country: "United States",
    landmass: "305 sq mi",
    landmark: "Texas State Capitol",
    picture: "https://example.com/austin.jpg",
  },
  {
    name: "Jacksonville",
    population: 949000,
    country: "United States",
    landmass: "874 sq mi",
    landmark: "Jacksonville Zoo and Gardens",
    picture: "https://example.com/jacksonville.jpg",
  },
  {
    name: "Fort Worth",
    population: 927000,
    country: "United States",
    landmass: "349 sq mi",
    landmark: "Fort Worth Stockyards",
    picture: "https://example.com/fortworth.jpg",
  },
  {
    name: "Columbus",
    population: 906000,
    country: "United States",
    landmass: "225 sq mi",
    landmark: "Franklin Park Conservatory",
    picture: "https://example.com/columbus.jpg",
  },
  {
    name: "Charlotte",
    population: 885000,
    country: "United States",
    landmass: "308 sq mi",
    landmark: "NASCAR Hall of Fame",
    picture: "https://example.com/charlotte.jpg",
  },
  {
    name: "San Francisco",
    population: 883000,
    country: "United States",
    landmass: "46.9 sq mi",
    landmark: "Golden Gate Bridge",
    picture: "https://example.com/sanfrancisco.jpg",
  },
  {
    name: "Indianapolis",
    population: 867000,
    country: "United States",
    landmass: "368 sq mi",
    landmark: "Indianapolis Motor Speedway",
    picture: "https://example.com/indianapolis.jpg",
  },
  {
    name: "Seattle",
    population: 744000,
    country: "United States",
    landmass: "83.9 sq mi",
    landmark: "Space Needle",
    picture: "https://example.com/seattle.jpg",
  },
  {
    name: "Denver",
    population: 716000,
    country: "United States",
    landmass: "153 sq mi",
    landmark: "Red Rocks Amphitheatre",
    picture: "https://example.com/denver.jpg",
  },
  {
    name: "Washington D.C.",
    population: 705000,
    country: "United States",
    landmass: "68.3 sq mi",
    landmark: "The White House",
    picture: "https://example.com/washingtondc.jpg",
  },
];
console.log(cities);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

app.get("/api", (req, res) => {
  res.send(cities);
});
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
