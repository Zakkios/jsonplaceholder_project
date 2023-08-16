import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="bg-gray-900 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        <NavLink 
          to={'/'} 
          className={({ isActive }) =>
          isActive ? "block py-2 pl-3 pr-4 text-blue-400 hover:text-blue-500" : 
          "block py-2 pl-3 pr-4 text-white hover:text-blue-500"
        }>
              Home
        </NavLink>
        <NavLink 
          to={'/about'} 
          className={({ isActive }) =>
          isActive ? "block py-2 pl-3 pr-4 text-blue-400 hover:text-blue-500" : 
          "block py-2 pl-3 pr-4 text-white hover:text-blue-500"
        }>
              About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar