import React, { Component } from 'react';

// import Meal from '../images/meal.jpg';
import RecipeList from './recipeList';

import '../styles/main.scss';

class recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { recipes } = this.props;
    const singleRecipe = recipes.map(recipe => {
      return (
        <div className="recipe" key={recipe.id}>
          <div className="recipe-text-main">
            <h3 className="recipe-title">{recipe.title}</h3>
            <p>
              <i class="fa fa-history"></i>
              {recipe.readyInMinutes} minutes
            </p>
            <p>
              <i class="fa fa-male"></i>serves {recipe.servings}
            </p>
          </div>
          <img src={recipe.image} alt="meal" className="recipe-img" />
          <div className="recipe-outline"></div>
        </div>
      );
    });

    return <div className="recipe-list-cards">{singleRecipe}</div>;
  }
}

export default recipe;
