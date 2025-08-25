import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const isLoggedin=useSelector((state)=>state.isLoggedin.value)
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Luna</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {isLoggedin
      ?<li><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div></div></li>
        :<li><Link to="/login">Login</Link></li>
      }
    </ul>
  </div>
</div>
  )
}

export default Header