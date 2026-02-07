import ResultsGrid from "./components/ResultsGrid"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <SearchBar/>      
      <Tabs/>
      <ResultsGrid/>
    </div>
  )
}

export default App