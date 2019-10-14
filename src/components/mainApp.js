import React, { Component } from 'react';

import Header from './Header';
import RecipeList from './recipeList';

import '../styles/main.scss';

//Variable to store API Key for https request
const apiKey = '173d1e55ebd3439797b6b57f7570975e';

//This is temporary. These variables will be selected by user input
const count = 15;
const mealType = 'dinner';

class mainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      query: 'most popular'
    };
  }

  handleSearch = async e => {
    const recipeFilter = e.target.elements.recipeFilter.value;
    e.preventDefault();
    const req = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${recipeFilter}&number=${count}&sort=popularity&addRecipeInformation=true&fillIngredients=true&apiKey=${apiKey}`
    );
    const res = await req.json();
    this.setState({ recipes: res.results, query: recipeFilter });
    
  };

  handleClick = async e => {
    const category = e.target.parentElement.title;
    
    e.preventDefault();
    const req = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?type=${category}&number=${count}&sort=popularity&addRecipeInformation=true&fillIngredients=true&apiKey=${apiKey}`
    );
    const res = await req.json();
    this.setState({ recipes: res.results, query: category });
  };

  //Use Async/Await and the fetch method to make call to API
  componentDidMount = async () => {
    const req = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&number=${count}&sort=popularity&addRecipeInformation=true&fillIngredients=true&apiKey=${apiKey}`
    );
    const res = await req.json();

    this.setState({ recipes: res.results });
    console.log(this.state.recipes);
  };

  //Render API data to virtual DOM
  render() {
    return (
      <div className="mainApp-container">
        <Header
          recipes={this.state.recipes}
          handleSearch={this.handleSearch}
          handleClick={this.handleClick}

        />
        <RecipeList 
        recipes={this.state.recipes}
        query={this.state.query}
         />
      </div>
    );
  }
}

export default mainApp;
