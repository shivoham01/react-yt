import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Entertainment from './components/Entertainment'
import Sports from './components/Sports'
import All from './components/All'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/all' element={<All />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/sports' element={<Sports />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App