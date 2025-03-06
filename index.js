const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5151

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})
app.get("/",(req,res)=>{
    res.send("Hello World")
})
