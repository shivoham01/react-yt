import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState([])

  const submitButton = (e) => {
    e.preventDefault();

    const copyNotes = [...notes]
    copyNotes.push({ title, details });
    setNotes(copyNotes);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx)=>{
    const copyNotes = [...notes]
    copyNotes.splice(idx, 1)
    setNotes(copyNotes)
  }

  return (
    <div className='h-screen mx-auto lg:flex lg:gap-2 lg:w-full'>
      <div className='h-1/2 lg:w-1/2'>
        <div>
          <h1 className="font-bold text-4xl p-6">Add Notes</h1>
        </div>
        <form onSubmit={(e) => submitButton(e)} className="flex flex-col gap-5 px-6">
          <input type="text" className='px-4 py-2 border-2 rounded-lg' placeholder='Enter Note Heading..' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className='px-4 h-30 py-2 border-2 rounded-lg' placeholder='Enter Details Here..' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
          <button className='active:bg-gray-300 active:scale-99 rounded-lg cursor-pointer border-2 bg-white text-black py-2 px-4'>Add Note</button>
        </form>
      </div>
      <div className="lg:border-l-2 lg:w-1/2 my-20 lg:my-0">
        <h1 className="font-bold text-4xl px-12 py-6">Recent Notes</h1>
        <div className="notes flex flex-wrap gap-5 px-12">
          {notes.map((elm, idx) => {
            return <div key={idx} className="h-70 w-51 relative wrap-break-word p-4 bg-cover border text-black rounded-2xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIX451GUb3G28PTYuBx3Wg6TW16WDgnfi0m3-sujcVA&s)]">
              <h2 className="font-bold text-2xl pb-4">{elm.title}</h2>
              <p className="text-gray-700">{elm.details}</p>
              <button
               onClick={()=>{deleteNote(idx)}} className="bg-red-500 w-1/2 py-2 px-4 absolute bottom-4 left-12 text-sm active:scale-95 cursor-pointer text-white rounded-lg">Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App