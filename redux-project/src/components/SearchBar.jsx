import { useState } from "react"
import { useDispatch } from "react-redux"
import {setQuery} from "../redux/features/searchSlice"

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    // OnChange
    const onTextChange = (e) => {   
        setText(e.target.value)
    }

    // OnSubmit
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div className="bg-gray-900 px-2 py-4">
            <form onSubmit={onSubmitHandler} className="flex gap-5">
                <input value={text} onChange={onTextChange} className="px-4 py-2 w-full border-2 text-xl rounded" type="text" placeholder="Inter Your Text.." required />
                <button className="px-4 py-2 border-2 text-xl rounded cursor-pointer active:scale-95">Search</button>
            </form>
        </div>
    )
}

export default SearchBar