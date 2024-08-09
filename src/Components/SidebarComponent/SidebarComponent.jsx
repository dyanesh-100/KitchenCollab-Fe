import React from 'react'
import './SidebarComponent.scss'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdAdd } from "react-icons/md";


const SidebarComponent = ({ handleMenuClick }) => {
  
  return (
    <div className='sidebar_container'>
        <div className='sidebar_link'>
        <Link to='/' className='nav_link' onClick={handleMenuClick}><FaHome className='sidebar_menu_icon' /> 
           <p className='sidebar_menu'>Home</p>
        </Link>
        <Link to='/recipes' className='nav_link' onClick={handleMenuClick}><MdFastfood className='sidebar_menu_icon'  />
          <p className='sidebar_menu'>Recipies</p>
        </Link>
        <Link to='/addrecipe' className='nav_link' onClick={handleMenuClick}><MdAdd  className='sidebar_menu_icon' />
          <p className='sidebar_menu'>Add recipe</p>
        </Link>
        </div>

    </div>
  )
}

export default SidebarComponent