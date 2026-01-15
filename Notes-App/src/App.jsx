import React from 'react'

const App = () => {
  return (
    <div className='my-12 mx-12'>
      <form className='flex flex-col w-1/2 gap-5'>
        <input type="text" className='px-4 py-2 border-2 rounded-lg' placeholder='Enter Note Heading..' />
        <textarea className='px-4 h-30 py-2 border-2 rounded-lg' placeholder='Enter Details Here..'></textarea>
        <button className='rounded-lg cursor-pointer border-2 bg-black text-white py-2 px-4'>Add Note</button>
      </form>
    </div>
  )
}

export default App