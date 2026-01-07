import Navbar from "./Components/Navbar"
import Sections from "./Components/Sections"

const App = () => {
  const user = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1734545294102-f3885fdeba33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia assumenda."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1764957079531-90d46b0c0d63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia assumenda."
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1767711465780-e3c2bd01a148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia assumenda."
    }
  ]

  return (
    <div className="w-[80%] m-auto">
      <Navbar/>
      <Sections user={user}/>
    </div>
  )
}

export default App
