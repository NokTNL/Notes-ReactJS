import "./Card.css";

function Card(props) {
  // To add the custom "card" class together with the received className
  const className = props.className + " card";
  //   props.className = props.className + "card"; // !!! This does NOT work. All React component must
  //                                               as pure functions, i.e. cannot modify input.
  return (
    /*                 vvvv CSS class can only be set in a real HTML tag */
    <div className={className}>
      {props.children}
      {/* ^^^^ so all the children elements are wrapped inside the Card component */}
    </div>
  );
}

export default Card;
