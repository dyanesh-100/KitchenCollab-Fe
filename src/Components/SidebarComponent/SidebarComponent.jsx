import React from 'react'
import './SidebarComponent.scss'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const SidebarComponent = () => {
  return (
    <div className='sidebar_container'>
        <div className='sidebar_link'>
        <Link to='/' className='nav_link'><FaHome /> Home</Link>
        <Link to='/recipes' className='nav_link'><MdFastfood />Recipies</Link>
        </div>

    </div>
  )
}

export default SidebarComponent