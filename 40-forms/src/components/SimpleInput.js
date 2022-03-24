import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");

  const handleNameInput = (e) => {
    // setEnteredName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onInput={handleNameInput}
          ref={nameInputRef}
          required
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
