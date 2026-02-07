import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
    const tabs = ["photos", "videos", "gif"];

    const dispatch = useDispatch();
    const activeTab = useSelector((state)=> state.search.activeTab);

    return (
        <div className="flex justify-center gap-5 p-10">
            {tabs.map((elm, idx) => {
                return (
                    <button key={idx} onClick={()=> dispatch(setActiveTab(elm))}
                        className={`${activeTab==elm? 'bg-blue-500': 'bg-gray-500'} px-5 py-2 transition rounded cursor-pointer active:scale-95 uppercase`}>{elm}</button>
                )
            })}
        </div>
    )
}

export default Tabs