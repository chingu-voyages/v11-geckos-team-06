import React, { Component } from 'react';

import RecipeList from './recipeList';

import '../styles/main.scss';
import { async } from 'q';

<<<<<<< HEAD
//Variable to store API Key for https request
const apiKey = '173d1e55ebd3439797b6b57f7570975e';

//This is temporary. These variables will be selected by user input
const count = 5;
const mealType = 'snack';

class mainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  //Use Async/Await and the fetch method to make call to API
  componentDidMount = async () => {
    const req = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&number=${count}&apiKey=${apiKey}`
    );
    const res = await req.json();

    this.setState({ recipes: res.results });
    console.log(this.state.recipes);
  };

  //Render API data to virtual DOM
  render() {
    const { recipes } = this.state;
    const recipeList = recipes.length ? (
      recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt="" />
=======
class mainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    
    render() {
      return(
          <div className="mainApp-container">
            modal, recipeList, header go here
            <RecipeList />
>>>>>>> f04fb08f811a397ffe9098245a984d2cace5016b
          </div>
        );
      })
    ) : (
      <div>No Matching Recipes!</div>
    );

    return (
      <div>
        modal, recipeList, header go here
        {recipeList}
      </div>
    );
  }
}

export default mainApp;
