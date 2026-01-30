const News = (props) => {
  return (
    <>
      <div className="card w-[300px] h-[300px] bg-gray-300 p-2 gap-5 rounded flex flex-col overflow-hidden">
        <h3 className='font-bold'>{props.news.title}</h3>
        <p>{props.news.description}</p>
      </div>
    </>
  )
}

export default News