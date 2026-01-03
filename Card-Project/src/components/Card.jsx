import "../App.css"
import { Bookmark } from "lucide-react"


const Card = (props) => {
    return (
            <div className="card">
                <div>
                    <div className="top">
                        <img src={props.brandLogo} alt="logo" />
                        <button>Save <Bookmark size={15} /></button>
                    </div>
                    <div className="center">
                        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
                        <h2>{props.post}</h2>
                        <div className="tags">
                            <div className="tag">{props.tag1}</div>
                            <div className="tag">{props.tag2}</div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.pay}</h3>
                        <span>{props.location}</span>
                    </div>
                    <button>Apply now</button>
                </div>
            </div>
    )
}

export default Card
