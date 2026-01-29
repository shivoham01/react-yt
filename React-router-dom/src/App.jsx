import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Mens from "./pages/Mens"
import Womens from "./pages/Womens"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import Course from "./pages/Course"
import CourseDetails from "./pages/CourseDetails"
import Navbar2 from "./components/Navbar2"

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />}>
          <Route path='mens' element={<Mens />} />
          <Route path='womens' element={<Womens />} />
        </Route>

        {/* Course Section */}
        <Route path='/courses' element={<Course />} />
        <Route path='/courses/:id' element={<CourseDetails />} />

        {/* Page Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App