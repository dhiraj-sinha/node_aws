const express = require("express");
const app = express();
app.get("/",(req,res)=> {
    res.send("Node on AWS");
});
const port = process.env.port || 3000 ;
app.listen(port,()=>{
    console.log("Server is running at 3000 port")
})