import { Link } from 'react-router-dom'

const Navbar2 = () => {
    return (
        <div className="categories">
            <div className="categories capitalize flex flex-wrap gap-5 justify-center mb-2">
                <Link className='' to='/'>all</Link>
                <Link to='/sports'>sports</Link>
                <Link to='/entertainment'>entertainment</Link>
            </div>
        </div>
    )
}

export default Navbar2