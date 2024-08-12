import React, { useEffect, useState } from 'react'
import './NavbarComponent.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import RecipeCardComponent from '../RecipeCardComponent/RecipeCardComponent'
import HomePageComponent from '../HomePageComponent/HomePageComponent'
import SpecificRecipeComponent from '../SpecificRecipeComponent/SpecificRecipeComponent'
import SidebarComponent from '../SidebarComponent/SidebarComponent'
import AddRecipesComponent from '../AddRecipesComponent/AddRecipesComponent'

const NavbarComponent = () => {
  const [showSideBarButton, setShowSideBarButton] = useState(false)
  const [renderSideBar , setRenderSideBar] = useState(false)
  
  const handleButtonClick = () => {
    const newState = !renderSideBar;
    setRenderSideBar(newState);
    setShowSideBarButton(newState);
  };

  const handleOverlayClick = () => {
    setRenderSideBar(false);
    setShowSideBarButton(false);
  };

  const handleMenuClick = () => {
    setRenderSideBar(false);
    setShowSideBarButton(false);
  };


  useEffect(() => { 
    if (renderSideBar) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [renderSideBar]);
  return (
    
      <BrowserRouter>
        <div className='navbar'>
            <a href="/" className='brand'>K<span>itc</span>henCo<span>ll</span>ab</a>
            <div className='nav_content'>
                <Link to='/' className='nav_link'>Home</Link>
                <Link to='/recipes' className='nav_link'>Recipies</Link>
                <Link to='/addrecipe' className='nav_link'>Add</Link>
                
            </div>
            <button onClick={handleButtonClick} className={showSideBarButton ? "sidebar-button active" : "sidebar-button"}>
            <div onClick={() => setShowSideBarButton(!showSideBarButton)} >
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div>
            </button>
            
            
            
        </div>
        {renderSideBar && <div className="overlay" onClick={handleOverlayClick}></div>}
            {renderSideBar && <SidebarComponent handleMenuClick={handleMenuClick} />}
        
        
        
        <Routes>
            <Route exact path = '/recipes' element = {<RecipeCardComponent/>}> </Route>
            <Route exact path = '/' element = {<HomePageComponent/>}> </Route>
            <Route exact path = '/recipes/:recipeName' element = {<SpecificRecipeComponent/>}> </Route>
            <Route exact path='/addrecipe' element = {<AddRecipesComponent/>}></Route>
        </Routes>
        
      </BrowserRouter>
      
    
    
  )  
}

export default NavbarComponent