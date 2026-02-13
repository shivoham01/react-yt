import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionsPage from "./pages/CollectionsPage"

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/collections" element={<CollectionsPage/>} />
      </Routes>
    </div>
  )
}

export default App