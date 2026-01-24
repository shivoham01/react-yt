import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Components/Card"

const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)

    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData();
  }, [page])

  let message = <h3 className="absolute top-1/2">Loading...</h3>
  if (data.length > 0) {
    message = data.map((elm, idx) => {
      return <Card key={idx} elm={elm} />
    })
  }

  return (
    <div id="main" className="main">
      <div className="cards m-4 flex flex-wrap justify-center gap-5">
        {message}
      </div>
      <div className="footer absolute justify-center bottom-2 m-auto w-full gap-2 flex items-center">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1)
              setData([])
            }
          }} className="px-3 py-2 cursor-pointer active:scale-95 bg-amber-900 rounded">Prev</button>
        <h3>Page {page} </h3>
        <button onClick={() => {
          setPage(page + 1)
          setData([])
        }} className="px-3 py-2 cursor-pointer active:scale-95 bg-amber-900 rounded">Next</button>
      </div>
    </div >
  )
}

export default App