import React, { Component } from "react";

import Recipe from "./recipe";

import "../styles/main.scss";

class recipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="recipe-list">
        <h2 className="recipe-list-head">Showing 'chicken' recipes</h2>

        <div className="recipe-list-cards">
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </div>
    );
  }
}

export default recipeList;
