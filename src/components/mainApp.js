import React, { Component } from 'react';
import Header from './Header';
import RecipeList from './recipeList';
import Recipe from './recipe';
import Modal from "./Modal";

import '../styles/main.scss';

//Variable to store API Key for https request
const apiKey = '173d1e55ebd3439797b6b57f7570975e';

//This is temporary. These variables will be selected by user input
const count = 10;
const mealType = 'dinner';

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
      `https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&number=${count}&addRecipeInformation=true&fillIngredients=true&apiKey=${apiKey}`
    );
    const res = await req.json();

    this.setState({ recipes: res.results });
    console.log(this.state.recipes);
  };

  //Modal
    state = {
      show: false
    };
    showModal = e => {
      this.setState({
        show: !this.state.show
      });
    };

  //Render API data to virtual DOM
  render() {
    return (
      <div className="mainApp-container">
        <Modal />
        <Header />
        <RecipeList recipes={this.state.recipes} />

      </div>
    );
  }
}

export default mainApp;
