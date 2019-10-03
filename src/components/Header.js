import React, { Component } from 'react';
import '../styles/main.scss';

const Header = props => {
  return (
    <div className="overlay">
      <div className="main-top">
        <div className="main-left-design">
          <h6 className="receipe-text">RECEIPE FINDER</h6>
        </div>
        <div className="main-right-design">
          <div className="top-header">
            <div>
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
            </div>

            <div className="category-main-div">
              <div
                className="category category-1 wrapthatflex"
                onClick={props.handleClick}
                title="appetizer"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Appetizers</span>
              </div>
              <div
                className="category category-2 wrapthatflex"
                onClick={props.handleClick}
                title="side dish"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Side Dishes</span>
              </div>
              <div
                className="category category-3 wrapthatflex"
                onClick={props.handleClick}
                title="soup"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Soup</span>
              </div>
              <div
                className="category category-4 wrapthatflex"
                onClick={props.handleClick}
                title="main course"
              >
                <i className="fas fa-angle-double-down"></i>
                <span>Entrees</span>
              </div>
              <div
                className="category category-5 wrapthatflex"
                onClick={props.handleClick}
                title="dessert"
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
