// step 1 Server creating
import express from "express";
import dotenv from "dotenv";
import databaseConnecton from "./utils/database.js";
import cookieParser from "cookie-parser";
import  userRoute  from "./routes/userRoute.js"


databaseConnecton();

dotenv.config({
    path:".env"
})

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
{/*const corsOptons = {
    origin: 'http://localhost:3000',
    Credential: true
}
app.use(cors(corsOptons));
app.use("/api/v1/user", userRoute); */}
app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Hello i am commning from Backend",
        success:true
    })
})


app.use("api/v1/user", userRoute);



app.listen(process.env.PORT, () =>{
    console.log(`Server listen at Port ${process.env.PORT}`)
})