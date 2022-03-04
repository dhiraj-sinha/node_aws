const express = require("express");
const app = express();
app.get("/",(req,res)=> {
    res.send("Node on AWS");
});
const port = process.env.port || 8081 ;
app.listen(port,()=>{
    console.log("Server is running at 8081 port")
})