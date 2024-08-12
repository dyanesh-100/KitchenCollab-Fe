import React, { useEffect, useState } from 'react'
import image from "../../assets/images/butter-chicken.jpg"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './SpecificRecipeComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const SpecificRecipeComponent = () => {
    
    const [showNutrition, setShowNutrition] = useState(false)
    const [recipeData, setRecipeData] = useState({}) 
    const {recipeName} = useParams();
    console.log(recipeName);
    
    const recipename = recipeName.toLocaleUpperCase();

    useEffect(() => {
        getData();
    },[])

    const getData = async() => {
        const response = await axios.get(`https://kitchen-collab-be.vercel.app/api/v1/recipes/${recipeName}`)
        setRecipeData(response.data);
        console.log(response.data);
    }
    const toggleNutrition = () => {
        setShowNutrition(!showNutrition);
    }
  return (
    
    <main className='view_recipe_container'>
        <div className='view_recipe_header'>
            <div className='view_name_description_container'>
                <div className='view_path'>
                    <Link to={`/recipes`} className='view_path_recipe' >RECIPES  </Link>
                    <p className='great'>&gt;</p>
                    <p> {recipename}</p>
                </div>
                
                    <p className='view_recipe_name'>{recipeData.recipeName}  </p>
                    <p className='view_recipe_description'>{recipeData.description}</p>
                <div className='prep_time_container'>
                    <div className='prep_time_icon'><FontAwesomeIcon icon={faClock} / ></div>
                        <div className='prep_time_content'>
                            <div><p className='prep_heading'>PREP:</p><p>{recipeData.prep_time}</p></div>
                            <div><p className='prep_heading'>COOKING TIME:</p><p>{recipeData.cooking_time}</p></div>
                            <div><p className='prep_heading'>TOTAL TIME:</p><p>{recipeData.total_time}</p></div>
                        </div>
                </div>
                
            </div>
        
            <div className='view_image_container'>
                <img src={recipeData.images} alt=""  className='view_recipe_image'/>
            </div>
        </div>
        
        
        <div className='ingredients_methods_container'>
        <div className='ingredients'>
        <p className='view_recipe_ingredients'>Ingredients:</p>
        {
            
                recipeData.ingredients && recipeData.ingredients.map((it , index) => (
                <div className='ingredients_content'>
                    
                    <p >--</p>
                    <p className='list_content'>{it}</p> 
                </div>
            ))
           
            
        }
        </div>
        <div className='methods_container'>
        <p className='view_recipe_methods'>Methods:</p>
        {
            recipeData.steps && recipeData.steps.map((it , index) => (
                <div className='recipe_methods'>
                    
                    <p className='list_numbers'>{index+1}.) </p>
                   <p className='recipe_methods_content'> {it} </p>
                </div>
                
            ))
        }
        </div>
        </div>
        <div className='nutrition_info_button_container'>
        <button className='nutrition_info_button' onClick={toggleNutrition}>Nutrition information</button>

        </div>
        <section className='nutrition_panel'>
        {showNutrition && (
                <div className="modal-overlay" >
                <div className="modal-content">
                    
                    
                    
                
                <div className='nutrition_info_container'>
                <button className="close-button" onClick={toggleNutrition} >X</button>
                
                    <p className='view_recipe_nutrition'>Nutrition Information:</p>
                    <p className='amount_per_serving'>Amount Per Serving:</p>
                    <div className='nutrition_info_content_container'>
                        <div className='nutrition_info_content1'>
                        <p>Calories:</p> <p> {recipeData.nutrition_info?.per_serving?.calories}</p>
                        <p>Dietary Fibre:</p> <p> {recipeData.nutrition_info?.per_serving?.dietary_fibre}</p>
                        <p>Trans Fat:</p> <p> {recipeData.nutrition_info?.per_serving?.trans_fat}</p>
                        <p>Total Fat:</p> <p> {recipeData.nutrition_info?.per_serving?.total_fat}</p>
                        </div>
                        <div className='nutrition_info_content2'>
                        <p>Total Carbohydrate:</p> <p> {recipeData.nutrition_info?.per_serving?.total_carbohydrate}</p>
                        <p>Total Sugar:</p> <p> {recipeData.nutrition_info?.per_serving?.total_sugar}</p>
                        <p>Cholesterol:</p> <p> {recipeData.nutrition_info?.per_serving?.cholesterol}</p>
                        <p>Protein:</p> <p> {recipeData.nutrition_info?.per_serving?.protein}</p>
                        </div>
                        
                        
                    </div>
                </div>
                </div>
                </div>
            )}
        </section>
           
            
        
    </main>
  )
}

export default SpecificRecipeComponent