import reactSVG from "../assets/react.svg"
import "../App.css"
import { Bookmark } from "lucide-react"

const Card = () => {
    return (
            <div className="card">
                <div>
                    <div className="top">
                        <img src={reactSVG} alt="logo" />
                        <button>Save <Bookmark size={15} /></button>
                    </div>
                    <div className="center">
                        <h3>Google <span>30 days ago</span></h3>
                        <h2>Senior UI/UX Designer</h2>
                        <div className="tags">
                            <div className="tag">Part-time</div>
                            <div className="tag">Senior level</div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>$120/hr</h3>
                        <span>San Francisco, CA</span>
                    </div>
                    <button>Apply now</button>
                </div>
            </div>
    )
}

export default Card
