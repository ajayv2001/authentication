import {connect} from "../../dbconfig/dbconfig"
import Speed from "@/models/userModels"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody

        const user = await Speed.findOne({email}) 
        if(!user){
            return NextResponse.json({error: "User not found"},{status: 404})
        }
        // check password is correct

        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"},{status: 401})
        }

        //create token data
        const tokenData = {
            id: user._id,
            username:user.username,
            email: user.email
        }

        //create token 
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response = NextResponse.json({
            message:"login success",
            success:true
        })
        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response

        
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500})
        
    }


}