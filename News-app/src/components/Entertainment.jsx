import React from 'react'
import Navbar2 from './Navbar2'

const Entertainment = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5">Entertainment News</h1>
      <Navbar2 />
      {/* Rendering News */}
      <div className="cards flex-wrap flex justify-center my-12 gap-5">
        <h1>No News Available Right Now...</h1>
      </div>

    </div>
  )
}

export default Entertainment