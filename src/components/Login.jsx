import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.loginAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }



    return (
        <div className='flex items-center justify-center w-full p-8'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
           
            {error && <p className='text-red-500 text-center'>{error}</p>}

            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                        label="Email:"
                        placeholder="Enter your email address"
                        type="email"
                        {...register("email", {
                            required: true,
                        })}
                    />

                    <Input
                        label="Password:"
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 3,
                        })}
                    />
                    <Button
                        type="submit"
                        className='w-full'
                    >Sign In</Button>
                </div>
                <p className="mt-2 text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            </form>

        </div>
    )
}

export default Login