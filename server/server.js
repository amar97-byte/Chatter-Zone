import express from "express"
import 'dotenv/config'
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"




const app = express()

// MIDDLEWARES
app.use(cors({
    origin : [process.env.ORIGIN],
    methods : ["GET" ,"POST" ,"PUT", "PATCH" , "DELETE"],
    credentials : true,
}))

app.use(express.json())
app.use(cookieParser())

await connectDB()



// ROUTES
app.get("/" , (req,res)=> {
    res.send("Api is working")
})



const PORT = 3000 || process.env.PORT

 app.listen(PORT , ()=> {
    console.log("Server is Running on PORT : " + PORT);
    
})