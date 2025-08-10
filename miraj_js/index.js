require('dotenv').config()

const express = require("express");
const app = express(); // create express app

app.get("/", (req, res) => { // API(GET method )(/)-> endpoint
    res.json({ message: "hello my app is running." });  //READ
});



app.get("/intpoint1", (req, res) => { // API(GET method )(/)-> endpoint
    res.json({ message: "hello get" });  //READ
});

app.put("/intpoint2", (req, res) => { // API(GET method )(/)-> endpoint
    res.json({ message: "hello put " });  //UPDATE
});

app.post("/intpoint3", (req, res) => { // API(GET method )(/)-> endpoint
    res.json({ message: "hello post " });  //CREATE
});
 
app.patch("/intpoint4", (req, res) => { // API(GET method )(/)-> endpoint
    res.json({ message: "hello patch" });  //UPDATE
});

app.delete("/intpoint5", (req, res) => { // API(GET method )(/)-> endpoint
    res.json({ message: "hello delete" });  //DELETE
});


const port = process.env.PORT
app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}/`);
});

