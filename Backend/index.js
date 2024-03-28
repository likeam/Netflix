// step 1 Server creating
import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path:".env"
})

const app = express();

const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`Server listen at Port ${PORT}`)
})