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
    return (
      <div className="recipe">
        <div className="recipe-text-main">
          <h3 className="recipe-title">{this.props.title}</h3>
          <p>
            <i className="fa fa-history"></i>
            {this.props.min} minutes
          </p>
          <p>
            <i className="fa fa-male"></i>serves {this.props.servings}
          </p>
        </div>
        <div className="recipe-img-container">
          <img src={this.props.photo} alt="Meal" className="recipe-img" />
        </div>
        <a href={this.props.link} target="_blank"><button className="recipe-btn">Full Recipe</button></a>
        <div className="recipe-outline"></div>
      </div>
    );
  }
}

export default recipe;
