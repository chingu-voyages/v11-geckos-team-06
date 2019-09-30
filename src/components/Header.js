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
            <h1 className="foodieFindsH1">FoodieFinds</h1>

            <div className="searchBoxDiv">
              <form onSubmit={this.props.getRecipes}>
                <input
                  type="text"
                  className="searchBox"
                  placeholder="Search millions of recipes ..."
                ></input>
              </form>
            </div>

            <div className="category-main-div">
              <div className="category category-1 wrapthatflex">
                <i className="fas fa-angle-double-down"></i>
                <span>category 1</span>
              </div>
              <div className="category category-2 wrapthatflex">
                <i className="fas fa-angle-double-down"></i>
                <span>category 1</span>
              </div>
              <div className="category category-3 wrapthatflex">
                <i className="fas fa-angle-double-down"></i>
                <span>category 1</span>
              </div>
              <div className="category category-4 wrapthatflex">
                <i className="fas fa-angle-double-down"></i>
                <span>category 1</span>
              </div>
              <div className="category category-5 wrapthatflex">
                <i className="fas fa-angle-double-down"></i>
                <span>category 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
