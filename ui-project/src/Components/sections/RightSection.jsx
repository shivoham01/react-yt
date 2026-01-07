import { ArrowRight } from "lucide-react"

const RightSection = (props) => {
    return (
        <div className="my-6 mx-2 relative">
            <div className="image w-[250px]">
                <img className="rounded-3xl h-[500px] object-cover" src={props.elm.img} alt="employee" />
            </div>
            <div className="absolute top-0 left-0 px-4 py-4">
                <h1 className="bg-white rounded-full px-3 py-1 font-bold">{props.elm.id }</h1>
            </div>
            <div className="bottom absolute bottom-0 px-4">
                <p className="text-white">{props.elm.desc}</p>
                <div className="buttons text-white mt-6 flex items-center justify-between">
                    <button className="px-2 py-2 rounded-full bg-blue-900">Underbarked</button>
                    <ArrowRight className="mr-4" size={30}/>
                </div>
            </div>
        </div>
    )
}

export default RightSection
