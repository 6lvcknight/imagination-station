import React,{useState} from 'react'

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
    <div className='h-screen w-full bg-yellow-200 flex justify-center items-center'>
            <div className='w-[60vw] flex flex-col justify-center items-center '>
                <div className='md:text-5xl text-2xl font-mono'> The Story Maker</div>
                <div className='w-full p-5'>
                    <form onSubmit={handleSubmit}>
                    <input placeholder='What kind of story do you want'
                     name='prompt' rows={1} cols="1" className='w-full'
                     value={prompt} onChange={(e)=> storePrompt(e.target.value) }>
                    </input>
                    <button className='rounded shadow-lg bg-slate-400 py-1 px-4 hover:scale-105 active:scale-90 duration-700'  type='submit'> Submit your idea </button>
                    </form>
                
                </div>


              <div></div>
            </div>
    
    </div>
  )
}

export default Create