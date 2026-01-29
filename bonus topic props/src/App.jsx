import { useState } from 'react'
import ChangeTheme from './components/ChangeTheme'

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <div>
      <h1>The Theme is {theme}</h1>

      <ChangeTheme theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App