import React, { Component } from "react";

import Recipe from "./recipe";

import "../styles/main.scss";

class recipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { recipes } = this.props;

    return (
      <div className="recipe-list">
        <h2 className="recipe-list-head">Showing 'chicken' recipes</h2>
        <div className="recipe-list-cards">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.id}
              title={recipe.title}
              min={recipe.readyInMinutes}
              servings={recipe.servings}
              photo={recipe.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default recipeList;
