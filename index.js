const express = require('express')
const users = require("./MOCK_DATA.json");
const app = express()

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req,res,next) =>{
    return res.json("hello how are you");
})

app.get('/users', (req, res) =>{
    return res.json(users);
})

app.get('/items', (req, res) =>{
    return res.json("There are n number of items");
})

app.get('/jyoti',(req, res) =>{
    return res.json("Jyoti is item girl")
})

app.listen(PORT, () =>{
    console.log('server started at port '+PORT)
})