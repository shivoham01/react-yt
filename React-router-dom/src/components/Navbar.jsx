import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div id="logo">
                    <h2>Ashutosh.pro</h2>
                </div>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/products'>Products</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar