import mongoose from "mongoose"
import { genSalt } from "bcrypt"


const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true , "Email is Required"],
        unique : true
    },
    password : {
        type : String,
        required : [true , "Password is Required"],
    },
    firstName : {
        type : String,
        required : false
    },
    lastName : {
        type : String,
        required : false
    },
    image : {
        type : String,
        required : false
    },
    color : {
        type : Number,
        required : false
    },
    profileSetup : {
        type : Boolean,
       default : false
    },
})

userSchema.pre("save" , async(next)=>{
    const salt = await genSalt()
    this.password = await hash(this.password , salt)
})

const User = mongoose.model("user" , userSchema)

export default User