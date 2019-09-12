import React, { Component } from "react";

import Meal from "../images/meal.jpg";

import "../styles/main.scss";

class recipe extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {

  //     };
  // }

  render() {
    return (
      <div className="recipe">
        <div className="recipe-text-main">
          <h3 className="recipe-title">Chicken & Rice</h3>
          <p><i class="fa fa-history"></i>20 minutes</p>
          <p><i class="fa fa-male"></i>serves 4</p>
        </div>
        <img src={Meal} alt="meal" className="recipe-img" />
        <div className="recipe-outline"></div>
      </div>
    );
  }
}

export default recipe;
