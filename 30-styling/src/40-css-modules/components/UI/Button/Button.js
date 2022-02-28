// Default import from your CSS module
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    // need to add classes dynamically
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
