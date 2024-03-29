import { User } from "../models/useModel";

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
        await User.create({
            fullName,
            email,
            password
        });

        return res.status(201).json({
            message: "Account Created Sucessfully."
        })
    } catch (error) {
        console.log(error);
    }
}