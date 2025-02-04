import React, { useState } from "react";
import authService from '../appwrite/auth'
import {login} from "../store/authSlice"
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function SignUp(){
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
                
            }
            
        } catch (error) {
            setError(error.message)
            
        }
    }

    
    return(
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                already have an account?.&nbsp;
                <Link 
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >Sign in</Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form action={handleSubmit(create)}>
                <div className="space-y-5">
                    <Input
                        label = "full name:"
                        placeholder = "enter your full name"
                        {...register("name", {
                            required: true
                        })}
                    />
                    
                    <Input
                        label = "email:"
                        placeholder = "enter your email"
                        type = 'email'
                        {...register("email", {
                            required: true,
                            validate: {
                                        matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "email address must be a valid address"
                                                }
                        })}     
                        />
                        <Input
                            label = "password:"
                            type = "password"
                            placeholder = "enter your password"
                            {...register("password", {
                                required: true
                        })}
                        />
                        <Button
                            type = "submit"
                            className = "w-full"
                        >Create Account</Button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default SignUp