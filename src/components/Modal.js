import React, { Component } from "react";
import "../styles/main.scss";
import PropTypes from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.props.showModal();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal-text-main">
          <h3 className="modal-title">title</h3>
          
          
          
        </div>

        <div className="modal-img-container">
          <img src="" alt="meal" className="modal-img" />
        </div>

        <button onClick={this.handleClose}>close</button>
        
        <div className="modal-outline"></div>
        
      </div>
    );
  }
}

export default Modal;

// style={{ display: this.props.show ? 'block' : 'none' }}

// <ul>
//           <li>{this.props.ingredients[0].original}</li>
//           </ul>

// map((ingredient, i) => 
//               <li>{ingredient[i].originalString}</li>
//             )


// key={recipe.id}
//               title={recipe.title}
//               min={recipe.readyInMinutes}
//               servings={recipe.servings}

//               ingredients={recipe.missedIngredients}
//               photo={recipe.image}



// <div className="App">
//         <button
//           class="toggle-button"
//           id="centered-toggle-button"
//           onClick={e => {
//             this.showModal(e);
//           }}
//         >
//           {" "}
//           show Modal{" "}
//         </button>

//         <Modal onClose={this.showModal} show={this.state.show}>
//           testing heloo helooooo
//         </Modal>
//       </div>
