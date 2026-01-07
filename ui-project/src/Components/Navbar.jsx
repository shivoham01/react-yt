import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar p-4 flex justify-between'>
        <div className="button">
            <button className="uppercase bg-black text-white py-2 px-4 rounded-full">Target Audiance</button>
        </div>
        <div className="nav-links">
            <button className='uppercase bg-gray-300 text-black px-4 py-2 rounded-full'>Digital Banking Platform</button>
        </div>
    </div>
  )
}

export default Navbar
