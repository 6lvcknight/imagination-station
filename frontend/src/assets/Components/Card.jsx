import React from 'react'

const Card = () => {
  return (
    <div><div class="shadow-lg bg-white rounded-md overflow-hidden max-w-xs mx-auto">
    {/* <img class="w-full h-52 object-cover" src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Hotel Room"> */}
    <div class="py-7 px-6">
    <div class="flex justify-between items-end">
      <span>Story Genre</span>
      <button class="text-blue-500 capitalize border border-gray-300 rounded-md py-1 px-3">view poster</button>
    </div>
      <h1 class="text-2xl font-bold text-gray-800">Story Name</h1>
      <hr class="mt-3 mb-5" />
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...</p>
      <span class="text-gray-400 text-sm mt-2.5 mb-6 block">Posted 2 hrs ago <span></span>New Chicago, ON</span>
      <div>
        <button class="capitalize bg-blue-500 rounded-md pt-1 pb-1.5 px-3.5 text-white">view Story</button>
        <button class="text-gray-500 ml-2 border px-4 rounded py-1">similar stories</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Card