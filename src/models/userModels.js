import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide password"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const Speed = mongoose.models.Speeds || mongoose.model("Users",userSchema)

export default Speed