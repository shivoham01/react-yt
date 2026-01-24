const Card = (props) => {
    return (
        <div className="card">
            <img className="h-45" src={props.elm.download_url} alt={props.elm.auther} />
            <h3 className="p2">{props.elm.author}</h3>
        </div>
    )
}

export default Card