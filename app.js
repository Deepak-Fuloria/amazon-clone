const express=require("express")
const env=require("dotenv").config();
const db=require("./db/conn")
const app=express()
const products=require("./models/producstsSchema")
const defaultData=require("./defaultData")
const cors=require("cors")
const router=require("./routes/router")
const cookieParser = require("cookie-parser");
const path=require("path")








app.use(express.json());
app.use(cookieParser());
  
app.use(
  cors()
  )

app.use(router)
app.use(express.static(path.join(__dirname,"./client/build")))


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})



const PORT=process.env.PORT || 5000;

app.listen( PORT,()=>{
    console.log(`app is runing on ${PORT}`)
})


defaultData();









