import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
    // For controlling closing animations
    isAnimationClosing: false,
  };

  showModal = () => {
    this.setState({ isAnimationClosing: false });
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // For controlling closing animations
  closeAnimation = () => {
    this.setState({ isAnimationClosing: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            />
          )}
        </Transition>
        {this.state.modalIsOpen ? (
          <Modal
            closed={this.closeModal}
            isAnimationClosing={this.state.isAnimationClosing}
            closeAnimation={this.closeAnimation}
          />
        ) : null}
        {this.state.modalIsOpen ? (
          <Backdrop
            closed={this.closeModal}
            isAnimationClosing={this.state.isAnimationClosing}
          />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
