import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
    const navigate = useNavigate();

    return (
        <div className="nav-2">
            <button onClick={()=>{navigate('/')}}>Back to Home</button>
            <button onClick={()=>{navigate(-1)}}>Back</button>
            <button onClick={()=>{navigate(+1)}}>Next</button>
        </div>
    )
}

export default Navbar2;