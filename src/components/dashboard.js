import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Form, Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import SearchComponent from './searchComponent';
const RecipeDashboard = () => {
    const [searchParams, setSearchParams] = useState({
        app_id: '945be779',
        app_key: 'f99449027a557b2d8d4a1d8d0b0b8523',
        beta: true,
        keyword: '',
        cuisineType: '',
        mealType: '',
        maxTime: '',
        diet:'',
        ingr: ''
    });

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    // Function to handle form submission for searching recipes
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const query = new URLSearchParams(searchParams);
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?${query}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchedRecipes(data);
            console.log("data = "+data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddToFavorites = (recipe) => {
    };

    useEffect(() => {
    }, []);

    return (
        <Container>
            <div className  = 'heading'>
            <h1 className="h3 mb-2 text-gray-800">Recipe Dashboard</h1>
            </div>

            <SearchComponent 
                searchParams = {searchParams} 
                setSearchParams = {setSearchParams}
                handleSearchSubmit = {handleSearchSubmit}
                />

            <Tabs defaultActiveKey="searchedRecipes" id="recipe-tabs">
                <Tab eventKey="searchedRecipes" title="Searched Recipes">
                    <div>
                        {/* Display searched recipes here */}
                    </div>
                </Tab>
                <Tab eventKey="favoriteRecipes" title="Favorite Recipes">
                    <div>
                        {/* Display favorite recipes here */}
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default RecipeDashboard;
