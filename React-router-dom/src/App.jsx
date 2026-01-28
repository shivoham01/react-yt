import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Mens from "./components/Mens"
import Womens from "./components/Womens"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        {/* Products Categories */}
        <Route path='/products/mens' element={<Mens/>} />
        <Route path='/products/womens' element={<Womens/>} />

        {/* Page Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App