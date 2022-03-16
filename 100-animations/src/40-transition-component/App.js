// See this andc components/Modal for react-transition-group

import React, { Component } from "react";
// Default import the Transition component
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
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
        {/* !!! Note: the toggle box uses CSS transition (instead of animation) so inherently it does not transiton IN well:
          entering: opacity = 0 (wait for one second, no transition yet) <-- problematic; if set directly opacity = 1 here will instantly show and have no transition as well
          entered: opacity = 1 (transition goes for 1 sec)
          exiting: opacity = 0 (transitioning now)
          exited: opacity = 0 (transition finished, unmounted on exit)
        */}
        {/* Use the Transition component to wrap anything you want to animate */}
        <Transition
          /* "in" Prop: a boolean for toggling the element;
            - if true, transition to "entering" state then "entered state"
            - if toggled to false, enetering "exiting" then "exited" state
            - "timeout" is the duration between entering/exiting and entered/exited
          */
          in={this.state.showBlock}
          timeout={1000}
          // The component will stay there, similar to switch between display: none & block
          // Unmout on exit to remove the element from the DOM
          unmountOnExit
        >
          {/* We can access the Transition "state" inside our comoponent so we can render it responsivly */}
          {/* {(state) => <p>{state}</p>;} */}
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                // This will make the box resposive to toggling
                opacity: state === "entered" ? 1 : 0,
                // This will smooth out the in-out transition
                transition: "opacity 1s ease-out",
              }}
            />
          )}
        </Transition>
        {/* Also do this to the Modal */}
        <Transition in={this.state.modalIsOpen} timeout={300} unmountOnExit>
          {(state) => <Modal state={state} closed={this.closeModal} />}
        </Transition>

        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
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
