const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()


const port = 5895

app.use(cors())
app.use(express.json())


app.get('/',(req,res) =>{
res.json("server is running ")
})


app.listen(port, function () {
    console.log("app server : " + `http://localhost:${port}`);
})