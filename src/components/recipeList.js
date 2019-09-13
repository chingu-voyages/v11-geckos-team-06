import React, { Component } from 'react';

import Recipe from './recipe';

import '../styles/main.scss';

class recipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { recipes } = this.props;
    const recipeList = recipes.length ? (
      recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt="" />
          </div>
        );
      })
    ) : (
      <div>No Matching Recipes!</div>
    );

    return (
      <div className="recipe-list">
        <h2 className="recipe-list-head">Showing 'chicken' recipes</h2>

        <div className="recipe-list-cards">
          {recipeList}
          <Recipe recipeList={recipeList} />
          <Recipe />
          <Recipe />
        </div>
      </div>
    );
  }
}

export default recipeList;
