import { User } from "../models/useModel.js";
import  bcryptjs  from "bcrypt"

export const Login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message: "Invalid data",
                success: false
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success: false
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message: "Invalid email Or password",
                success: false
            })
        }
         
    } catch (error) {
        
    }
}

export const Register = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message: "Invalid data",
                sucess:false
            })
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message: "This email is alrady used",
                sucess:false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message: "Account Created Sucessfully."
        })
    } catch (error) {
        console.log(error);
    }
}