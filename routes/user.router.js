const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const users = require("../model/userModels"); // Fixed import

// Signup GET
router.get("/signup", (req, res) => {
  res.render("pages/signup", { error: null });
});

// Signup POST
router.post("/signup", async (req, res) => {
  const { name, email, age, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new users({ name, email, age, password: hashedPassword });
    await newUser.save();
    res.redirect("/user/signin");
  } catch (err) {
    console.log(err);
    res.status(500).render("pages/signup", { error: "Signup failed" });
  }
});

// Signin GET
router.get("/signin", (req, res) => {
  res.render("pages/signin", { error: null });
});

// Signin POST
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).render("pages/signin", { error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).render("pages/signin", { error: "Invalid password" });
    }
    // If using sessions, set session here (e.g., req.session.userId = user._id)
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).render("pages/signin", { error: "Server error" });
  }
});


//Dashboard
router.get('/dashboard',(req,res) => {
  fetch('https://second-class.vercel.app/api')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    res.render('pages/dashboard', {data})
  })
  .catch(err => console.log(err))
})
module.exports = router;