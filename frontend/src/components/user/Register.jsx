import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../store/api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../store/constants'

const Login = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

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
            <div className='w-[80vw] h-full flex'>
                <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
                    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                        <h1 className="text-4xl font-semibold ">Hi There.</h1>
                    </div>
                    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <input
                        className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                        className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
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
                    <input
                        className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                        type="text"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />

              <div className="flex items-center">
                <button 
                  onClick={handleSubmit}
                  type='submit'
                  className="mx-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:scale-105 duration-700 active:scale-90 hover:bg-gray-900" >
                  Join Us
                </button>
              </div>
            </div>
            <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
              <p className="font-semibold text-gray-600 text-sm">
                Do you have an account? 
                <a href="/login" className="ml-2 text-teal-500 hover:underline cursor-pointer">
                  Log in
                </a>
              </p>
            </div>
          </main>
        </div>
    </div>
  )
}

export default Login