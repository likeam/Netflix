
import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config({
    path: "../.env"
})


const databaseConnecton = () => {
  return (
    mongoose.connect('mongodb+srv://likeam99:milto202@cluster0.eklsauv.mongodb.net/').then(() =>{
        console.log("mongodb connected sucessfully")
    }).catch((error) => {
        console.log(error);
    })
  )
}

export default databaseConnecton