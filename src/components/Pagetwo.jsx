import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Pagetwo() {
  return (
    <div>
        <h1>page two</h1>
        <NavLink to='nestedcom'>Nested com</NavLink>
        
        <Outlet/>
    </div>
  )
}

export default Pagetwo