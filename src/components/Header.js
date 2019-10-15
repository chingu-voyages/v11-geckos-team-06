import React, { Component } from 'react';
import '../styles/main.scss';

const Header = props => {
  return (
    <div className="overlay">
      <div className="main-top">
        <div className="main-left-design">
          <h6 className="recipe-text">RECIPE FINDER</h6>
        </div>
        <div className="main-right-design">
          <div className="top-header">
            
              <h1 className="foodieFindsH1">FoodieFinds</h1>
              <div className="searchBoxDiv">
                <form onSubmit={props.handleSearch}>
                  <input
                    type="text"
                    className="searchBox"
                    placeholder="Search millions of recipes ..."
                    name="recipeFilter"
                  ></input>
                </form>
              </div>
            

            <div className="category-main-div">
              <div
                className="category category-1 wrapthatflex"
                onClick={props.handleClick}
                title="appetizer"
                name="appetizer"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Appetizers</span>
              </div>
              <div
                className="category category-2 wrapthatflex"
                onClick={props.handleClick}
                title="side dish"
                name="side dish"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Side Dishes</span>
              </div>
              <div
                className="category category-3 wrapthatflex"
                onClick={props.handleClick}
                title="soup"
                name="soup"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Soup</span>
              </div>
              <div
                className="category category-4 wrapthatflex"
                onClick={props.handleClick}
                title="main course"
                name="entree"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Entrees</span>
              </div>
              <div
                className="category category-5 wrapthatflex"
                onClick={props.handleClick}
                title="dessert"
                name="dessert"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Dessert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
