const express = require('express')
const users = require("./MOCK_DATA.json");
const app = express()

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.get("/", (req,res,next) =>{
    return res.json("hello how are you");
})

app.get('/users', (req, res) =>{
    return res.json(users);
})

app.get('/jyoti',(req, res) =>{
    return res.json("Jyoti is item girl")
})

app.listen(PORT, () =>{
    console.log('server started at port '+PORT)
})