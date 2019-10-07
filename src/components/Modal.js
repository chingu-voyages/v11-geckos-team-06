import React, { Component } from "react";
import "../styles/main.scss";
import PropTypes from "prop-types";

class Modal extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>

        <Modal onClose={this.showModal} show={this.state.show}>
          testing heloo helooooo
        </Modal>
      </div>
    );
  }
}

export default Modal;
