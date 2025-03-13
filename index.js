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
    "name": "New York City",
    "population": 8419600,
    "country": "United States",
    "landmass": 468.9,
    "landmark": "Statue of Liberty",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Statue_of_Liberty_7.jpg"
  },
  {
    "name": "Los Angeles",
    "population": 3980400,
    "country": "United States",
    "landmass": 503,
    "landmark": "Hollywood Sign",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/4/45/Hollywood_Sign_2015.jpg"
  },
  {
    "name": "Chicago",
    "population": 2716000,
    "country": "United States",
    "landmass": 234,
    "landmark": "Willis Tower",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Willis_Tower_from_the_north_2016.jpg"
  },
  {
    "name": "Houston",
    "population": 2328000,
    "country": "United States",
    "landmass": 637.4,
    "landmark": "Space Center Houston",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Space_Center_Houston_2.jpg"
  },
  {
    "name": "Phoenix",
    "population": 1690000,
    "country": "United States",
    "landmass": 517.6,
    "landmark": "Desert Botanical Garden",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Desert_Botanical_Garden_-_Phoenix%2C_Arizona_%282012%29.jpg"
  },
  {
    "name": "Philadelphia",
    "population": 1584200,
    "country": "United States",
    "landmass": 142.6,
    "landmark": "Liberty Bell",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/0/06/Liberty_Bell_2008.jpg"
  },
  {
    "name": "San Antonio",
    "population": 1547000,
    "country": "United States",
    "landmass": 461.0,
    "landmark": "The Alamo",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/0/02/Alamo_-_San_Antonio.jpg"
  },
  {
    "name": "San Diego",
    "population": 1425000,
    "country": "United States",
    "landmass": 372.4,
    "landmark": "USS Midway Museum",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/0/0e/USS_Midway_Museum_%28San_Diego%29.jpg"
  },
  {
    "name": "Dallas",
    "population": 1341000,
    "country": "United States",
    "landmass": 343.3,
    "landmark": "Dallas Cowboys Stadium",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/d/d3/AT%26T_Stadium_%28January_2013%29.jpg"
  },
  {
    "name": "San Jose",
    "population": 1027000,
    "country": "United States",
    "landmass": 179.97,
    "landmark": "Winchester Mystery House",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Winchester_Mystery_House%2C_San_Jose%2C_CA.jpg"
  },
  {
    "name": "Austin",
    "population": 964000,
    "country": "United States",
    "landmass": 271.8,
    "landmark": "Texas State Capitol",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Texas_State_Capitol_-_Austin%2C_Texas_%282019%29.jpg"
  },
  {
    "name": "Jacksonville",
    "population": 911507,
    "country": "United States",
    "landmass": 874.6,
    "landmark": "Cummer Museum of Art and Gardens",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/4/46/Cummer_Museum_entrance_%28cropped%29.jpg"
  },
  {
    "name": "Fort Worth",
    "population": 918915,
    "country": "United States",
    "landmass": 349.6,
    "landmark": "Fort Worth Stockyards",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/0/01/Fort_Worth_Stockyards_%28fortworth.com%29.jpg"
  },
  {
    "name": "Columbus",
    "population": 909000,
    "country": "United States",
    "landmass": 217.2,
    "landmark": "Ohio Statehouse",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Ohio_Statehouse_Capitol_Building_Columbus.jpg"
  },
  {
    "name": "Indianapolis",
    "population": 876384,
    "country": "United States",
    "landmass": 368.2,
    "landmark": "Indianapolis Motor Speedway",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/4/47/Indianapolis_Motor_Speedway_%28open_oval%29.jpg"
  },
  {
    "name": "Charlotte",
    "population": 885000,
    "country": "United States",
    "landmass": 308.6,
    "landmark": "Carowinds",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Carowinds_entrance.jpg"
  },
  {
    "name": "Seattle",
    "population": 744955,
    "country": "United States",
    "landmass": 83.9,
    "landmark": "Space Needle",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Seattle_Space_Needle_2018.jpg"
  },
  {
    "name": "Denver",
    "population": 715522,
    "country": "United States",
    "landmass": 154.7,
    "landmark": "Red Rocks Amphitheatre",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/9/98/Red_Rocks_Amphitheatre_%28cropped%29.jpg"
  },
  {
    "name": "Washington, D.C.",
    "population": 705749,
    "country": "United States",
    "landmass": 68.3,
    "landmark": "Lincoln Memorial",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Lincoln_Memorial_%28Washington%29.jpg"
  },
  {
    "name": "Boston",
    "population": 692600,
    "country": "United States",
    "landmass": 48.4,
    "landmark": "Fenway Park",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Fenway_Park_2015.jpg"
  }
]
;
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
