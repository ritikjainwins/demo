require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./src/routes/userRourtes")

app.use(express.json());
app.use(router);

const start = () =>{
    try {
        app.listen(PORT,()=>{
            console.log(`I am live in localhost : ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();