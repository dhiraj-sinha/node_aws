const express = require("express");
const app = express();
app.get("/",(req,res)=> {
    res.send("Node on AWS");
});
app.listen("3000",()=>{
    console.log("Server is running at 3000 port")
})