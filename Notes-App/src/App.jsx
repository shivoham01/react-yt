import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const submitButton = (e) => {
    e.preventDefault();

    setTitle('');
    setDetails('');
  }

  return (
    <div className='h-screen mx-auto lg:flex lg:gap-12 lg:w-full'>
      <div className='h-1/2 lg:w-1/2'>
        <div>
          <h1 className="font-bold text-4xl p-6">Add Notes</h1>
        </div>
        <form onSubmit={(e) => submitButton(e)} className="flex flex-col gap-5 px-6">
          <input type="text" className='px-4 py-2 border-2 rounded-lg' placeholder='Enter Note Heading..' value={title} onChange={(e)=> setTitle(e.target.value)} />
          <textarea className='px-4 h-30 py-2 border-2 rounded-lg' placeholder='Enter Details Here..' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
          <button className='rounded-lg cursor-pointer border-2 bg-white text-black py-2 px-4'>Add Note</button>
        </form>
      </div>
      <div className="lg:border-l-2 lg:w-1/2 my-20 lg:my-0">
        <h1 className="font-bold text-4xl px-12 py-6">Recent Notes</h1>
        <div className="notes flex flex-wrap gap-5 px-12">
          <div className="note h-62 w-50 bg-white border rounded-2xl"></div>
          <div className="note h-62 w-50 bg-white border rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}

export default App