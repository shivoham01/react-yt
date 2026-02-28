import { useSelector } from "react-redux"
import ResultsGrid from "../components/ResultsGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"

const HomePage = () => {
    const { query } = useSelector((store) => store.search);

    return (
        <div>
            <SearchBar />
            {query != '' ? <div><Tabs /><ResultsGrid /></div> : ''}
        </div>
    )
}

export default HomePage