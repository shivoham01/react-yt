import { useDispatch } from "react-redux"
import { removeCollection, removeToast } from "../redux/features/collectionSlice"

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeItemFunction = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
    return (
        <div className="w-[18vw] flex flex-col flex-wrap relative bg-black border h-80 border-box rounded-xl overflow-hidden">
            <a href={item.url} target="_blank" className="h-full">
                {item.type == 'photo' ? <img className="rounded h-full w-full object-cover object-center" src={item.src} alt="image" /> : ''}
                {item.type == 'video' ? <video className="rounded h-full w-full object-cover object-center" autoPlay muted loop src={item.src} alt="video"></video> : ''}
                {item.type == 'gif' ? <img className="rounded h-full w-full object-center object-cover" src={item.src} alt="gif" /> : ''}
            </a>
            <div id="card-bottom" className="flex justify-between gap-2 items-center overflow-hidden absolute bottom-0 px-2 py-6 w-full">
                <h2 className="text-white h-12 overflow-hidden text-medium font-semibold capitalize">{item.title}</h2>
                <button onClick={() => removeItemFunction(item)} className="font-medium active:scale-95 rounded bg-indigo-600 text-white px-3 py-1 cursor-pointer">Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard