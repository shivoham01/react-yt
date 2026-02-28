import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionsPage from "./pages/CollectionsPage"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
      
      <ToastContainer />
    </div>
  )
}

export default App