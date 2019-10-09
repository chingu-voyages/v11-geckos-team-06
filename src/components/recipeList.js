import React, { Component } from "react";

import Recipe from "./recipe";
import Modal from "./Modal";

import "../styles/main.scss";

class recipeList extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { recipes } = this.props;

    return (
      <div className="recipe-list">
        {this.state.show ? (
          <Modal recipes={recipes} showModal={this.showModal} />
        ) : (
          ""
        )}

        <h2 className="recipe-list-head">Showing 'chicken' recipes</h2>
        <div className="recipe-list-cards">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.id}
              title={recipe.title}
              min={recipe.readyInMinutes}
              servings={recipe.servings}
              photo={recipe.image}
              onClick={this.showModal}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default recipeList;

// {this.state.show ?
//   <Modal
//       recipes={recipes}
//       showModal={this.showModal}
//   />
//   : ""}

// {this.state.show ?

//   (recipes.map(recipe => (
//   <Modal
//       key={recipe.id}
//       title={recipe.title}
//       min={recipe.readyInMinutes}
//       servings={recipe.servings}

//       ingredients={recipe.missedIngredients}
//       photo={recipe.image}

//       showModal={this.showModal}
//   /> )))

//   : ""}
