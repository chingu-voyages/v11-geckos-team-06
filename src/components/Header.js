import React, { Component } from 'react';
import '../styles/main.scss';

function Header() {
  return (
    <div className='overlay'>
      <div className='main-top'>
        <div className='main-left-design'>
          <div className="adjust1"></div>
          <div className="adjust2">
            <h6 className="receipe-text">RECEIPE FINDER</h6>
          </div>
          <div className="adjust3"></div>
        </div>
        <div className='main-right-design'>
          <div className="top-header">
            <div className="foodieFindsH1Div">
              <h1 className="foodieFindsH1">FoodieFinds</h1>
            </div>
            <div className="searchBoxDiv">
              <input type="text" className="searchBox" placeholder="Search millions of recipes ..."></input>
            </div>
          </div>
          <div className="category-btn">
            <div><i class="fas fa-angle-double-down"></i><span>category 1</span></div>
            <div><i class="fas fa-angle-double-down"></i><span>category 1</span></div>
            <div><i class="fas fa-angle-double-down"></i><span>category 1</span></div>
            <div><i class="fas fa-angle-double-down"></i><span>category 1</span></div>
            <div><i class="fas fa-angle-double-down"></i><span>category 1</span></div>
          </div>
        </div>
      </div>
      



    {/* <div className="platform">

    </div> */}
    </div>
  );
}

export default Header;