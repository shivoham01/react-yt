import { useContext } from 'react'
import News from '../components/News'
import { newsDataContext } from '../context/NewsContext'
import Navbar2 from '../components/Navbar2';

const Home = () => {
  const [news, setNews] = useContext(newsDataContext);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5">All News</h1>
      <Navbar2 />
      {/* Rendering News */}
      <div className="cards flex-wrap flex justify-center my-12 gap-5">
        {news.map((elm, id) => {
          return <News key={id} news={elm} />
        })
        }
      </div>

    </div>
  )
}

export default Home