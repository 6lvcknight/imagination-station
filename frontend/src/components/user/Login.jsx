import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../store/api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../store/constants'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleCheckboxChange = (event) => {
        setRememberMe(event.target.checked);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('logged')
        try {
            const response = await api.post('user/token/', { email, password })
            localStorage.setItem(ACCESS_TOKEN, response.data.access)
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
            navigate('/')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center mt-[-2rem]'>
            <div className='w-[80vw] h-full flex '>
                <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
                    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                        <h1 className="text-4xl font-semibold ">Welcome back.</h1>
                    </div>
                    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                        <input
                            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex items-center">
                            <div className="w-1/2 flex items-center">
                                <input 
                                    type="checkbox" 
                                    className="mt-1 mr-2" 
                                    checked={rememberMe}
                                    onChange={handleCheckboxChange}/>
                                <label htmlFor="remember-me">Remember me!</label>
                                </div>
                                <button 
                                onClick={handleSubmit}
                                type='submit'
                                className="mx-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:scale-105 duration-700 active:scale-90 hover:bg-gray-900" >
                                Log In
                                </button>
                            </div>
                        </div>
                    <div className="text-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                        <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer">Forgot your password?</a>
                    </div>
                    <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
                        <p className="font-semibold text-gray-600 text-sm">
                            Don't have an account? 
                            <a href="/register" className="ml-2 text-teal-500 hover:underline cursor-pointer">
                                Sign up
                            </a>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login