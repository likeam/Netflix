
import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config({
    path: "./.env"
})


const databaseConnecton = () => {
  return (
    mongoose.connect(process.env.MONGO_URL).then(() =>{
        console.log("mongodb connected sucessfully")
    }).catch((error) => {
        console.log(error);
    })
  )
}

export default databaseConnecton