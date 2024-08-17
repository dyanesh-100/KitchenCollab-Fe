import React, { useState } from 'react';
import './AddRecipesComponent.css';
import axios from 'axios';



const AddRecipesComponent = () => {
  
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [caloriesError, setCaloriesError] = useState('');
  
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    description: '',
    prep_time: '',
    cooking_time: '',
    total_time: '',
    images: [],
    nutrition_info: {
        per_serving:{
        calories: 0,
        total_carbohydrate: '',
        total_fat: '',
        trans_fat: '',
        dietary_fibre: '',
        total_sugar: '',
        cholesterol: '',
        protein: '',
        }
    },
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

      setRecipeData({
        ...recipeData,
        [name]: value,
      });
    
  };
  const handleNutritionInfoChange = (event,field) => {
    const { value } = event.target;
    if (field === 'calories') {
      if (isNaN(value)) {
        setCaloriesError('*Please enter a valid number for calories.');
      } else {
        setCaloriesError('');
      }
    }
    
    setRecipeData((prevData) => ({
      ...prevData,
      nutrition_info: {
        ...prevData.nutrition_info,
        per_serving: {
          ...prevData.nutrition_info.per_serving,
          [field]: value,
        },
      },
    }));
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

  const handleImageChange = (event) => {
    setRecipeData((prev) => ({
      ...prev,
      images: Array.from(event.target.files),
    }));
  };

  const formData = new FormData()
  formData.append('recipeName', recipeData.recipeName);
  formData.append('description' , recipeData.description);
  formData.append('prep_time',recipeData.prep_time);
  formData.append('cooking_time',recipeData.cooking_time);
  formData.append('total_time',recipeData.total_time);

  formData.append('nutrition_info[per_serving][calories]', recipeData.nutrition_info.per_serving.calories);
  formData.append('nutrition_info[per_serving][total_carbohydrate]', recipeData.nutrition_info.per_serving.total_carbohydrate);
  formData.append('nutrition_info[per_serving][total_fat]', recipeData.nutrition_info.per_serving.total_fat);
  formData.append('nutrition_info[per_serving][trans_fat]', recipeData.nutrition_info.per_serving.trans_fat);
  formData.append('nutrition_info[per_serving][dietary_fibre]', recipeData.nutrition_info.per_serving.dietary_fibre);
  formData.append('nutrition_info[per_serving][total_sugar]', recipeData.nutrition_info.per_serving.total_sugar);
  formData.append('nutrition_info[per_serving][cholesterol]', recipeData.nutrition_info.per_serving.cholesterol);
  formData.append('nutrition_info[per_serving][protein]', recipeData.nutrition_info.per_serving.protein);

  recipeData.images.forEach((image) => {
    formData.append('images',image)
  })

  ingredients.forEach((ingredient) => {
    formData.append('ingredients',ingredient)
  })

  steps.forEach((step) => {
    formData.append('steps',step)

  })

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const calories = parseFloat(recipeData.nutrition_info.per_serving.calories);
    
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
  }

    try {
      // https://kitchen-collab-be.vercel.app/api/v1/recipes/addrecip
      const response = await axios.post('https://kitchen-collab-be.vercel.app/api/v1/recipes/addrecipe', formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      if(response.status === 201){
        alert("Recipe added successfully")
        setTimeout(() => {
            window.location.href = "/recipes"
        },3000)
    }
    else{
        alert(`Error ${response.status}:Error adding recipe`)
        alert(`${response.message}`)
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2 className='add_recipe'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            name="recipeName"
            value={recipeData.recipeName}
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
            name="prep_time"
            value={recipeData.prep_time}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Cooking Time:</label>
          <input
            type="text"
            name="cooking_time"
            value={recipeData.cooking_time}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Total Time:</label>
          <input
            type="text"
            name="total_time"
            value={recipeData.total_time}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label  >Nutrition Information:</label>
          <div className='nutrition_info_calories'>
            <label>Calories:</label>
            <input
              type="text"
              name="calories"
              value={recipeData.nutrition_info.per_serving.calories}
              onChange={(e) => handleNutritionInfoChange(e, 'calories')}
            />
            {caloriesError && <div className="error-message">{caloriesError}</div>}
          </div>
          
          <div className='nutrition_info'>
            <label>Total Carbohydrate:</label>
            <input
              type="text"
              name="total_carbohydrate"
              value={recipeData.nutrition_info.per_serving.total_carbohydrate}
              onChange={(e) => handleNutritionInfoChange(e, 'total_carbohydrate')}
              
            />
          </div>
          <div className='nutrition_info'>
            <label>Total Fat:</label>
            <input
              type="text"
              name="total_fat"
              value={recipeData.nutrition_info.per_serving.total_fat}
              onChange={(e) => handleNutritionInfoChange(e, 'total_fat')}
            />
          </div>
          <div className='nutrition_info'>
            <label>Trans Fat:</label>
            <input
              type="text"
              name="trans_fat"
              value={recipeData.nutrition_info.per_serving.trans_fat}
              onChange={(e) => handleNutritionInfoChange(e, 'trans_fat')}
            />
          </div>
          <div className='nutrition_info'>
            <label>Dietary Fibre:</label>
            <input
              type="text"
              name="dietary_fibre"
              value={recipeData.nutrition_info.per_serving.dietary_fibre}
              onChange={(e) => handleNutritionInfoChange(e, 'dietary_fibre')}
            />
          </div>
          <div className='nutrition_info'>
            <label>Total Sugar:</label>
            <input
              type="text"
              name="total_sugar"
              value={recipeData.nutrition_info.per_serving.total_sugar}
              onChange={(e) => handleNutritionInfoChange(e, 'total_sugar')}
            />
          </div>
          <div className='nutrition_info'>
            <label>Cholesterol:</label>
            <input
              type="text"
              name="cholesterol"
              value={recipeData.nutrition_info.per_serving.cholesterol}
              onChange={(e) => handleNutritionInfoChange(e, 'cholesterol')}
            />
          </div>
          <div >
            <label>Protein:</label>
            <input
              type="text"
              name="protein"
              value={recipeData.nutrition_info.per_serving.protein}
              onChange={(e) => handleNutritionInfoChange(e, 'protein')}
            />
          </div>
        </div>

        <div >
          <label>Upload Images:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className='image_upload'
          />
        </div>

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipesComponent;
