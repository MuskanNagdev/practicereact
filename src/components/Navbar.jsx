import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
       <NavLink to='/'>page one</NavLink>
       <NavLink to='/pagetwo'>page two</NavLink>
       {/* <NavLink to='/'>page one</NavLink> */}
    </div>
  )
}

export default Navbar