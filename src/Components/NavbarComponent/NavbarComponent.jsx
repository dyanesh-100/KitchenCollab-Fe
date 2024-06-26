import React, { useState } from 'react'
import './NavbarComponent.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import RecipeCardComponent from '../RecipeCardComponent/RecipeCardComponent'
import HomePageComponent from '../HomePageComponent/HomePageComponent'
import SpecificRecipeComponent from '../SpecificRecipeComponent/SpecificRecipeComponent'
import Sidebar from '../Sidebar/Sidebar'

const NavbarComponent = () => {
  const [showSideBarButton, setShowSideBarButton] = useState(false)
  const [renderSideBar , setRenderSideBar] = useState(false)
  const handleButtonClick = () => {
    setRenderSideBar(prevState => !prevState);
  };
  
  return (
    
      <BrowserRouter>
        <div className='navbar'>
            <a href="/" className='brand'>K<span>itc</span>henCo<span>ll</span>ab</a>
            <div className='nav_content'>
                <Link to='/' className='nav_link'>Home</Link>
                <Link to='/recipes' className='nav_link'>Recipies</Link>
                
            </div>
            <button onClick={handleButtonClick} className={showSideBarButton ? "sidebar-button active" : "sidebar-button"}>
            <div onClick={() => setShowSideBarButton(!showSideBarButton)} >
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div>
            </button>
            
            
        </div>
        {renderSideBar && <Sidebar/>}
        
        
        <Routes>
            <Route exact path = '/recipes' element = {<RecipeCardComponent/>}> </Route>
            <Route exact path = '/' element = {<HomePageComponent/>}> </Route>
            <Route exact path = '/recipes/:name' element = {<SpecificRecipeComponent/>}> </Route>
        </Routes>
        
      </BrowserRouter>
      
    
    
  )  
}

export default NavbarComponent