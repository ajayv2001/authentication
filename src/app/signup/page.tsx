"use client"
import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/navigation"
import {axios} from "axios"

export default function SignupPage(){
    const [user,setUser] = useState({
        email:"",
        password:"",
        username:"",        
    })
    const [buttonDisabled,setButtonDisabled] = useState(false)

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }

    },[user])




    const onSignup = async() =>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup Page</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text" 
            id="username" 
            value={user.username} 
            onChange={(e)=>setUser({...user,username:e.target.value})} 
            placeholder="username"/>

            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="text" 
            id="email" 
            value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})} 
            placeholder="email"/>

            <label htmlFor="password">password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="password" 
            id="password" 
            value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})} 
            placeholder="password"/>

            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>
                {buttonDisabled ? "disabled":"signup"}
            </button>
            <Link href='/login'>visit login page</Link>



        </div>
    )
    
}
