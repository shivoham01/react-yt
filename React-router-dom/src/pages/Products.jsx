import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div className='products'>
      <h2><Link to='/products/mens'>Mens</Link></h2>
      <h2><Link to='/products/womens'>Womens</Link></h2>
    </div>
    <Outlet/>
    </>
  )
}

export default Products