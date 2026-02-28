import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-blue-900 px-10 py-4">
            <Link to='/'>
                <h2 className='text-xl font-bold'>MediaSearch</h2>
            </Link>
            <div className="flex gap-5 text-xl">
                <Link to='/' className='bg-white scale-95 px-4 py-1 rounded text-black'>Search</Link>
                <Link to='/collections' className='bg-white scale-95 px-4 py-1 rounded text-black'>Collections</Link>
            </div>
        </div>
    )
}

export default Navbar