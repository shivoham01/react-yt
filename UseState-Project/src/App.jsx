import { useState } from 'react'
import './App.css'

const App = () => {
  const [num, setNum] = useState(0)

  const increaseFunc = () => {
    setNum(num + 1)
  }

  const decreaseFunc = () => {
    setNum(num - 1)
  }

  const increase5 = () => {
    setNum(num + 5)
  }

  return (
    <div>
      <h1>useState Hook</h1>
      <h2 style={{ textAlign: 'center' }}>{num}</h2>
      <div className='buttons'>
        <button onClick={increaseFunc}>Increase</button>
        <button onClick={decreaseFunc}>Decrease</button>
      </div>
      <div className='buttons'>
        <button onClick={increase5}>Increase 5</button>
      </div>
    </div>
  )
}

export default App
