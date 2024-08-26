import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './RecipeCardComponent.css';
import { Link } from 'react-router-dom';
import { FaStar, FaSearch } from 'react-icons/fa';

const RecipeCardComponent = () => {
    const [recipeData, setRecipeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    // const imageUrl = `http://localhost:3500/${recipeData.images[0]}`;

    const getRecipeApi = async () => {
        try {
            const response = await axios.get('https://kitchen-collab-be.vercel.app/api/v1/recipes');
            setRecipeData(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false); 
        }
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

        return recipeData.filter(recipe => {
            
            if (recipe && recipe.recipeName) {
                return recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false; 
        });
    };
    const filteredRecipes = getFilteredRecipes();

    const getImageUrl = (image) => {
        
        if (image.startsWith('http') || image.startsWith('https')) {
            return image; 
        } else {
            return `https://kitchen-collab-be.vercel.app/${image}`; 
        }
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
                {loading ? (
                    <div className="spinner"></div> 
                ) : (
                    filteredRecipes.length > 0 ? (
                    getFilteredRecipes().map((it) => (
                        <Link to={`/recipes/${it.recipeName.toLowerCase()}`} className='recipe_card' key={it._id}>
                            <img src={getImageUrl(it.images[0])} alt={it.recipeName} className='recipe_image' />
                            <p className='recipe_name'>{it.recipeName}</p>
                            <div className='review_container'>
                                <p className='review_stars'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </p>
                                <p className='review_count'>100 REVIEWS</p>
                            </div>
                            <p className='view_recipe'>View Recipe</p>
                        </Link>
                    ))
                ) : (
                    <p className="no_recipes">No recipes found matching your search criteria.</p> // Show this if no recipes found
                )
                )}
            </div>
        </main>
    );
};

export default RecipeCardComponent;
