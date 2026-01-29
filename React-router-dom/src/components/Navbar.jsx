import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div id="logo">
                    <Link to='/'>
                        <h2>Ashutosh.pro</h2>
                    </Link>
                </div>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/products'>Products</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar