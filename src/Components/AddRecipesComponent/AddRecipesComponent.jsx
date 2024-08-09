import React, { useState } from 'react';
import './AddRecipesComponent.css';
import axios from 'axios';


const AddRecipesComponent = () => {
  
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  
  const [recipeData, setRecipeData] = useState({
    name: '',
    description: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    image: '',
  });
  const [nutritionInfo, setNutritionInfo] = useState({
    calories: '',
    totalCarbohydrate: '',
    totalFat: '',
    transFat: '',
    dietaryFibre: '',
    totalSugar: '',
    cholesterol: '',
    protein: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };
  const handleNutritionInfoChange = (event) => {
    const { name, value } = event.target;
    setNutritionInfo({
      ...nutritionInfo,
      [name]: value,
    });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, '']);
  };

  const addStepField = () => {
    setSteps([...steps, '']);
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRecipe = {
      name: recipeData.name,
      description: recipeData.description,
      ingredients,
      steps,
      prep_time: recipeData.prepTime, 
      cooking_time: recipeData.cookTime, 
      total_time: recipeData.totalTime,
      nutrition_info: {
        per_serving: {
          calories: parseInt(nutritionInfo.calories, 10),
          total_carbohydrate: nutritionInfo.totalCarbohydrate,
          total_fat: nutritionInfo.totalFat,
          trans_fat: nutritionInfo.transFat,
          dietary_fibre: nutritionInfo.dietaryFibre,
          total_sugar: nutritionInfo.totalSugar,
          cholesterol: nutritionInfo.cholesterol,
          protein: nutritionInfo.protein,
        },
      },
      jpg: recipeData.image,
    };

    try {
      const response = await axios.post('https://kitchen-collab-be.vercel.app/api/v1/recipes/addrecipe', newRecipe);
      if (response.status === 201) {
         alert("recipe added successfully.")
          window.location.href='/recipes'
        console.log('Recipe added successfully');
      } else if(response.status === 500){
        alert("Enter the recipe")
        
      }
      else{
        console.error('Error adding recipe');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            name="name"
            value={recipeData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Recipe Description:</label>
          <input
            type="text"
            name="description"
            value={recipeData.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(event) => handleIngredientChange(index, event.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={addIngredientField}>
            + Add Ingredient
          </button>
        </div>

        <div>
          <label>Steps:</label>
          {steps.map((step, index) => (
            <div key={index}>
              <input
                type="text"
                value={step}
                onChange={(event) => handleStepChange(index, event.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={addStepField}>
            + Add Step
          </button>
        </div>

        <div>
          <label>Preparation Time:</label>
          <input
            type="text"
            name="prepTime"
            value={recipeData.prepTime}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Cooking Time:</label>
          <input
            type="text"
            name="cookTime"
            value={recipeData.cookTime}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Total Time:</label>
          <input
            type="text"
            name="totalTime"
            value={recipeData.totalTime}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Nutrition Information:</label>
          <div>
            <label>Calories:</label>
            <input
              type="text"
              name="calories"
              value={nutritionInfo.calories}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Total Carbohydrate:</label>
            <input
              type="text"
              name="totalCarbohydrate"
              value={nutritionInfo.totalCarbohydrate}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Total Fat:</label>
            <input
              type="text"
              name="totalFat"
              value={nutritionInfo.totalFat}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Trans Fat:</label>
            <input
              type="text"
              name="transFat"
              value={nutritionInfo.transFat}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Dietary Fibre:</label>
            <input
              type="text"
              name="dietaryFibre"
              value={nutritionInfo.dietaryFibre}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Total Sugar:</label>
            <input
              type="text"
              name="totalSugar"
              value={nutritionInfo.totalSugar}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Cholesterol:</label>
            <input
              type="text"
              name="cholesterol"
              value={nutritionInfo.cholesterol}
              onChange={handleNutritionInfoChange}
            />
          </div>
          <div>
            <label>Protein:</label>
            <input
              type="text"
              name="protein"
              value={nutritionInfo.protein}
              onChange={handleNutritionInfoChange}
            />
          </div>
        </div>
        <div>
          <label>Recipe Image:</label>
          <input
            type="text"
            name="image"
            value={recipeData.image}
            placeholder='Enter image url'
            onChange={handleInputChange}
          />
        </div>

      

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipesComponent;
