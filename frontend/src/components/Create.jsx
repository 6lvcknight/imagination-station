import React, { useState } from 'react'
import instance from '../store/axios'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
  // Basic story data
  const [chName, setChName] = useState('John Doe')
  const [storyLine, setStoryLine] = useState('Dragon and Prince fighting')
  const [age, setAge] = useState(12)
  const [genre, setGenre] = useState('Romance')

  // Additional story details
  const [narrativeStructure, setNarrativeStructure] = useState('')
  const [pointOfView, setPointOfView] = useState('')
  const [writingStyle, setWritingStyle] = useState('')

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    const payload = {
      storyLine,
      chName,
      age,
      genre,
      narrativeStructure,
      pointOfView,
      writingStyle,
    }
    console.log(JSON.stringify(payload))
    instance.post('/api/generator/', payload)
      .then((response) => {
        console.log(response)
        setLoading(false)
        navigate('/board')
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }

  return (
    <div className="w-full flex-col bg-yellow-200 flex justify-center absolute top-0 items-center">
      <div className="w-[60vw] flex flex-col justify-center items-center h-screen">
        <div className="md:text-5xl text-2xl font-mono">The Story Maker</div>
        <form
          className="w-full flex flex-col items-center py-10 gap-8"
          onSubmit={handleSubmit}
        >
          {/* Container for the two columns */}
          <div className="flex flex-row gap-8 w-full justify-center">
            {/* Left Column: Basic Data */}
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
              <label>Story Line</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="What kind of story do you want"
                value={storyLine}
                onChange={(e) => setStoryLine(e.target.value)}
              />
              <label>Name</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Your name"
                value={chName}
                onChange={(e) => setChName(e.target.value)}
              />
              <label>Age</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="number"
                placeholder="Age"
                min={1}
                max={99}
                value={age}
                onChange={(e) => setAge(Number.parseInt(e.target.value))}
              />
              <label>Genre</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
              <label>Narrative Structure</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Narrative Structure"
                value={narrativeStructure}
                onChange={(e) => setNarrativeStructure(e.target.value)}
              />
              <label>Point of View</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Point of View"
                value={pointOfView}
                onChange={(e) => setPointOfView(e.target.value)}
              />
              <label>Writing Style</label>
              <input
                className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                type="text"
                placeholder="Writing Style"
                value={writingStyle}
                onChange={(e) => setWritingStyle(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="rounded shadow-lg bg-slate-400 py-1 px-4 hover:scale-105 active:scale-90 duration-700"
              type="submit"
            >
              Make your dream come true
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
