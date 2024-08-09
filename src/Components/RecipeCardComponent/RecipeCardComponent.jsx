import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './RecipeCardComponent.css';
import { Link } from 'react-router-dom';
import { FaStar, FaSearch } from 'react-icons/fa';

const RecipeCardComponent = () => {
    const [recipeData, setRecipeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getRecipeApi = async () => {
        const response = await axios.get('http://localhost:3500/api/v1/recipes');
        setRecipeData(response.data);
    };

    useEffect(() => {
        getRecipeApi();
    }, []);

    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    
    const getFilteredRecipes = () => {
        if (!searchTerm) {
            return recipeData;
        }

        return recipeData.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <main className='whole_container'>
            <div className='search_box_container'>
                <input 
                    type="text" 
                    placeholder='Enter the Recipe' 
                    className='search_box' 
                    value={searchTerm} 
                    onChange={handleSearch}
                />
                <button className='search_box_button'>
                    <FaSearch />
                </button>
            </div>

            <div className='recipe_container'>
                {getFilteredRecipes().map((it) => (
                    <Link to={`/recipes/${it.name.toLowerCase()}`} className='recipe_card' key={it._id}>
                        <img src={it.jpg} alt={it.name} className='recipe_image' />
                        <p className='recipe_name'>{it.name}</p>
                        <div className='review_container'>
                            <p className='review_stars'>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </p>
                            <p className='review_count'>100 REVIEWS</p>
                        </div>
                        <p className='view_recipe'>View Recipe</p>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default RecipeCardComponent;
