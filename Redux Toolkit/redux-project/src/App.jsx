import { fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <h1 className="p-5">I am Ashutosh</h1>
      <button className="active:scale-95 cursor-pointer border-2 m-5 p-2 rounded"
        onClick={async () => {
          const data = await fetchPhotos('cat')
          console.log(data.results)
        }}>
        Get Photos</button>
      <button className="active:scale-95 cursor-pointer border-2 m-5 p-2 rounded"
        onClick={async () => {
          const data = await fetchVideos('cat')
          console.log(data.videos)
        }}>
        Get Videos</button>
    </div>
  )
}

export default App