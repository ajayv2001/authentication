"use client"
import Link from "next/link"
import React,{useEffect, useState} from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


export default function LoginPage(){
    const [user,setUser] = useState({
        email:"",
        password:"", 
    })

    const router = useRouter()

    const [loading ,setLoading] = useState(false)
    const [buttonDisabled,setButtonDisabled] = useState(true)

    useEffect(() => {
        if (user.email.length >0 && user.password.length>0) {
          setButtonDisabled(false)
        }else(
        setButtonDisabled(true))
      }, [user])

    const onLogin = async() =>{
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', user)
            console.log(response.data);
            router.push('/profile');

        } catch (error) {
            console.log(error);
            toast.error('User Already exist ❌');
            
        }finally{
            setLoading(false)
        }

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"loading":"login"}</h1>
            <hr />

            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text" 
            id="email" 
            value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})} 
            placeholder="email"/>

            <label htmlFor="password">password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="password" 
            id="password" 
            value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})} 
            placeholder="password"/>

            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>
            {buttonDisabled ? "cant sign up now":"login"}
            </button>
            <Link href='/signup'>visit sign-up page</Link>



        </div>
    )
    
}
