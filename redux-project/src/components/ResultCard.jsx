const ResultCard = ({ item }) => {
    return (
        <div className="w-[18vw] flex flex-col bg-black border h-80 border-box rounded">
            <div className="h-full">
                {item.type == 'photo' ? <img className="rounded h-full w-full object-cover object-center" src={item.src} alt="image" /> : ''}
                {item.type == 'video' ? <video className="rounded h-full w-full object-cover object-center" autoPlay muted loop src={item.src} alt="video"></video> : ''}
                {item.type == 'gif' ? <img className="rounded h-full w-full object-center object-cover" src={item.src} alt="gif" /> : ''}
            </div>
            <div id="card-bottom h-[30%] overflow-hidden absolute bottom-2 left-2 py-6 px-10">
                <h2 className="text-red-500 text-xl font-semibold capitalize">{item.title}</h2>
            </div>
        </div>
    )
}

export default ResultCard