import ResultsGrid from "../components/ResultsGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"

const HomePage = () => {
    return (
        <div>
            <SearchBar />
            <Tabs />
            <ResultsGrid />
        </div>
    )
}

export default HomePage