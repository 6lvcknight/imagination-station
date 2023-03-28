import Navbar from '@/Components/Navbar';
import React,{useState} from 'react'
import Transition from '@/Components/TransitionEffect'

const Create = () => {

    const [prompt,storePrompt] = useState("");
    const [story,storeStory] = useState([]);

    async function handleSubmit(e){
      e.preventDefault();
      storeStory([...story, { user:"me" , message: `${prompt}` }])
      storePrompt ("");
      console.log('submit')
      }
  return (
    <div className=" w-full flex-col bg-yellow-200 flex justify-center items-center">
      <Navbar />
      <Transition />
      <div className="w-[60vw] flex flex-col justify-center items-center h-screen  ">
        <div className="md:text-5xl text-2xl font-mono "> The Story Maker</div>
          <form className='w-full  flex items-center justify-center py-10' onSubmit={handleSubmit} >
            <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
              <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="What kind of story do you want"
              />
              <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="your name"
              />
              <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Password"
              />
              <button
                className="rounded shadow-lg bg-slate-400 py-1 px-4 hover:scale-105 active:scale-90 duration-700"
                type="submit"
              >
                {" "}
                Make your dream come true{" "}
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Create