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
            <img src={this.props.photo} alt="meal" className="recipe-img" />
          </div>
          <div className="recipe-outline"></div>
        </div>
      );
  }
}

export default recipe;


// render() {
//   const { recipes } = this.props;
//   const singleRecipe = recipes.map(recipe => {
//     return (
//       <div className="recipe" key={recipe.id}>
//         <div className="recipe-text-main">
//           <h3 className="recipe-title">{recipe.title}</h3>
//           <p>
//             <i class="fa fa-history"></i>
//             {recipe.readyInMinutes} minutes
//           </p>
//           <p>
//             <i class="fa fa-male"></i>serves {recipe.servings}
//           </p>
//         </div>
//         <div className="recipe-img-container">
//           <img src={recipe.image} alt="meal" className="recipe-img" />
//         </div>
//         <div className="recipe-outline"></div>
//       </div>
//     );
//   });

//   return <div className="recipe-list-cards">{singleRecipe}</div>;
// }
