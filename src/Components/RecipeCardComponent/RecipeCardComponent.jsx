import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './RecipeCardComponent.css'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const RecipeCardComponent = () => {

    
    const [recipeData , setRecipeData] =useState([])
    const [recipeName , setRecipeName] = useState('')
    
const HandleRecipeName = async (event) => {
    setRecipeName(event.target.value)
}
  const getsearch = async () => {
  const response = await axios.get(`http://localhost:3500/api/v1/recipes/${recipeName}`)
  setRecipeData(response.data)
}
    useEffect (() => {
        getRecipeApi()
    },[])

    const getRecipeApi = async () => {
        const response = await axios.get("http://localhost:3500/api/v1/recipes")
        setRecipeData(response.data)
    }
    
    

    return (
        <main className='whole_container'>
            <div className='search_box_container'>
                <input type="text" placeholder='Enter the Recipe' className='search_box' onChange={HandleRecipeName}/>
                <Link to={`/recipes/${recipeName}`}><button className='search_box_button'><FaSearch /></button></Link>
            </div>
            
            <div className='recipe_container'>
            {
                recipeData && recipeData.map((it) => (
                    <Link to={`/recipes/${it.name.toLowerCase()}`} className='recipe_card'>
                        
                        <img src={it.jpg} alt="" className='recipe_image' />
                        <p className='recipe_name'>{it.name}</p>
                            <div className='review_container'><p className='review_stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </p><p className='review_count'>100 REVIEWS</p></div>
                        <p className='view_recipe'>View Recipe </p>
                       
                        
                    </Link>
                )) 
            }
            </div>
        </main>
        
    
      )
}


export default RecipeCardComponent