import { fetchGiphy, fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <h1 className="p-5 text-center text-2xl">API STORE</h1>
      <div className="flex justify-center">
        {/* Get Photos */}
        <button className="active:scale-95 cursor-pointer border-2 m-5 p-2 rounded"
          onClick={async () => {
            const data = await fetchPhotos('cat')
            console.log(data.results)
          }}>
          Get Photos</button>

        {/* Get Videos */}
        <button className="active:scale-95 cursor-pointer border-2 m-5 p-2 rounded"
          onClick={async () => {
            const data = await fetchVideos('cat')
            console.log(data.videos)
          }}>
          Get Videos</button>

        {/* Get GIF */}
        <button className="active:scale-95 cursor-pointer border-2 m-5 p-2 rounded"
          onClick={async () => {
            const data = await fetchGiphy('cat')
            console.log(data.data)
          }}>
          Get GIF</button>
      </div>
    </div>
  )
}

export default App