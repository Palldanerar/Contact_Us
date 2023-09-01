import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full h-auto my-4 flex justify-center">
        <Link to="/" className='mr-2'>Home</Link>
        <Link to="/new">New Contact</Link>
    </div>
  )
}

export default Navbar