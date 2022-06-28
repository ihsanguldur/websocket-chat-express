const express = require('express');

const app = express();

app.get("/", (req,res)=>{
    return res.send("selam");
});

app.listen("5000", ()=>{
    console.log("server started on 5000");
});
