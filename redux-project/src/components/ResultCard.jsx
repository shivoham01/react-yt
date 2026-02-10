const ResultCard = ({ item }) => {
    return (
        <div className="w-[18vw] h-80 bg-white text-black rounded">
            <div className="h-[70%]">
                {item.type == 'photo' ? <img className="h-full w-full object-cover object-center" src={item.src} alt="image" /> : ''}
                {item.type == 'video' ? <video className="h-full w-full object-cover object-center" autoPlay muted loop src={item.src} alt="video"></video> : ''}
                {item.type == 'gif' ? <img className="h-full w-full object-center object-cover" src={item.src} alt="gif" /> : ''}
            </div>
            <h1 className="p-2">{item.title}</h1>
        </div>
    )
}

export default ResultCard