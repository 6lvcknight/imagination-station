import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[80vw] h-full flex '>
<main
  class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700"
>
  <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
    <h1 class="text-4xl font-semibold ">Welcome back.</h1>
  </div>
  <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
    <input
      class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
      type="text"
      placeholder="Email"
    />
    <input
      class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
      type="text"
      placeholder="Password"
    />

    <div class="flex items-center">
      <div class="w-1/2 flex items-center">
        <input id="remember-me" type="checkbox" class="mt-1 mr-2" />
        <label for="remember-me">Remember me!</label>
      </div>
      <Link href="/Home"
        className="mx-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:scale-105 duration-700 active:scale-90 hover:bg-gray-900" >
        Log In
      </Link>
    </div>
  </div>
  <div class="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
    <a class="text-sm font-bold text-teal-500 hover:underline cursor-pointer"
      >Forgot your password?</a
    >
  </div>
  <div
    class="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
  >
    <p class="font-semibold text-gray-600 text-sm">
      Ei prima conclusionemque eum. Porro vivendum eum in, eam ex homero
      deserunt, ius ut dolorem iracundia.
    </p>
  </div>
</main>


        </div>
    </div>
  )
}

export default Login