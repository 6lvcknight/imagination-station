import Navbar from '@/navigation/Navbar';
import React,{useState} from 'react'
import Transition from '@/Components/TransitionEffect'
import Image from 'next/image';

const Create = () => {

  const [chName, setChName] = useState('lase');
  const [storyLine,setStoryLine] = useState('dragon and prince fighting ')
  const [age, setAge] = useState(12);
  const [genre,setGenre] = useState('comedy')
  const [loading, setLoading] = useState(false);
  const [story,storeStory] = useState('this is a story');
  const [imgUrl,storeImgUrl] = useState('https://via.placeholder.com/600x400');

  
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    storeStory('');
    console.log(JSON.stringify({ storyLine,chName, age, genre }))
    const response = await fetch('/api/Generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ storyLine,chName, age, genre }),
    });
    const resimg = await fetch('/api/ImgGen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ storyLine,chName, age, genre }),
    });
    const data = await response.json();
    const imgdata = await resimg.json();
    storeImgUrl(imgdata.img);

    storeStory(data.story);
    setLoading(false);
  }

  return (
    <div className=" w-full flex-col bg-yellow-200 flex justify-center absolute top-0 items-center">
      <Navbar />
      <Transition />
      <div className="w-[60vw] flex flex-col justify-center items-center h-screen  ">
        <div className="md:text-5xl text-2xl font-mono "> The Story Maker</div>
          <form className='w-full  flex items-center justify-center py-10' onSubmit={handleSubmit} >
            <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
              <label>Story Line</label>
              <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="What kind of story do you want"
                value={storyLine}
                onChange={(e) => setStoryLine(e.target.value)}
              />
               <label>Name</label>
              <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="your name"
                value={chName}
                onChange={(e) => setChName(e.target.value)}
              />
               <label>Age</label>
                <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="number"
                placeholder="Age"
                min={1}
                max={99}
                value={age}
                onChange={(e) => setAge(Number.parseInt(e.target.value))}
              />
               <label>Genre</label>
              <input
                class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
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
          <div>
            {/* <Image 
             alt="Picture of the author"
             width={500}
             height={500} />  */}
            <p>{story}</p>
          </div>
      </div>
    </div>
  );
}

export default Create