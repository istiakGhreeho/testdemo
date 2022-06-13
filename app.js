const express = require("express");

const app = express();


app.get("/", async (req, res, next) => {
    try {
        console.log('Hey there.')
        res.send("Hey There.")
               
    } catch (error) {
        res.send(error.message);
    }
});


app.listen(3000, () => console.log("🚀 on port 3000"));