import User from "../models/user.model.js";
import { sign } from "jsonwebtoken"

const maxAge = 3 * 24 * 60 * 60 * 1000

const createToken = (email , userId) => {
    return sign({email,userId} , process.env.JWT_KEY , {expiresIn : maxAge})
}


export const signup = async(req , res , next)=> {
    try {
        const {email , password} = req.body

        if(!email || !password){
            res.json({success : false , message : "Invalid Credentials"})
        }

        const user = await User.create({email , password})

        res.cookie("jet" , createToken(email , user.id),{
            maxAge, 
            secure : true,
            sameSite : "None",
        })

        return res.status(201).json({
            user : {
                id : user.id , 
                email : user.email,
                profileSetup : user.profileSetup,
            }
        })


    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message)
        
    }
}