import React, { Component } from 'react';

import RecipeList from './recipeList';

import '../styles/main.scss';

class mainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    
    render() {
      return(
          <div>
            modal, recipeList, header go here
            <RecipeList />
          </div>
      );
    }
  }
  
  export default mainApp;