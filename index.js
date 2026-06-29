const express = require("express");
const pool = require("./database.js");

const app = express();

app.get("/", async (req, res) => {
    
   try{
     const [rows] = await pool.query("select * from features");
     res.json({
       message:"Database connected",
       rows
     })
   }
   catch{
    //    console.log(err);

        res.status(500).json({
            message:"Database Connection Failed"
        });
   }
    
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});