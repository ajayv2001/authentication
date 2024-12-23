import {connect} from "../../dbconfig/dbconfig"
import Speed from "@/models/userModels"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {username,email, password} = reqBody

        //check if user already exist
        const user = await Speed.findOne({email})
        if(user){
            return NextResponse.json({error:"User Already exists"},{status:400})
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //create new user
        const newUser = new Speed({
            username,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save() 

        return NextResponse.json({message:"User created successfully",success:true,savedUser})

    } catch (error:any) {
        return NextResponse.json({error:error.message}),{status:500}
    }
}