import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
      className=
      "navbar flex flex-col items-center justify-between px-4 py-2 bg-amber-500 sm:flex-row">
      <Link to='/' className='active:scale-95'>
        <h2 id="logo" className='font-bold pb-1 text-xl'>All News</h2>
      </Link>
      <div className="nav-links flex gap-10 text-md">
        <Link className="active:scale-95" to='/'>Home</Link>
        <Link className="active:scale-95" to='/about'>About</Link>
        <Link className="active:scale-95" to='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar