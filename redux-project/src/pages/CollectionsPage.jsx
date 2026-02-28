import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection, clearCollectionToast } from "../redux/features/collectionSlice";

const CollectionsPage = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch();

  const clearCollectionFunc = () => {
    dispatch(clearCollection());
    dispatch(clearCollectionToast())
  }

  return (
    <div className="overflow-hidden p-2">
      {collection.length > 0 ?
        <div className="flex justify-between pt-2 pb-6 px-8">
          <h2 className="text-lg font-medium">Your Collections</h2>
          <button onClick={() => { clearCollectionFunc() }} className="bg-red-600 text-base cursor-pointer active:scale-95 px-4 py-2 rounded">Clear Collections</button>
        </div>
        : <h2 className="text-2xl font-medium text-center py-5">Collection is empty</h2>
      }
      <div className="flex gap-6 items-center justify-center  flex-wrap">
        {collection.map((item, idx) => {
          return <CollectionCard key={idx} item={item} />
        })}
      </div>
    </div>
  )
}

export default CollectionsPage