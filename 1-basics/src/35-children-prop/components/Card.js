import "./Card.css";

function Card(props) {
  // To add the custom "card" class together with the received className
  const className = props.className + " card";
  //   props.className = props.className + "card"; // !!! This does NOT work. All React component must
  //                                               as pure functions, i.e. cannot modify its own props
  return (
    /*                 vvvv CSS class can only be set in a real HTML tag */
    <div className={className}>
      {props.children}
      {/* ^^^^ props.children is an array containing each children element as one item
        by doing this all the children elements are rendered as a series of elements inside the Card div */}
    </div>
  );
}

export default Card;
