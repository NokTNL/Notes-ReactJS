import styled from "styled-components";

// Styled components: creating your own style wrappers

/* Tagged template */
// if a function precedes a template literal, it is called a "tagged template"
// The preceding function is called with a list of strings and arguments parsed from the template:
// template`I'm ${'name'}. I'm almost ${'age'} years old.` === template(["I'm ", ". I'm almost ", " years old."], "name", "age");

// styled-components have "methods" for all HTML coomponents
// e.g. styled.button --> a methods for <button>, and will return you a wrapper component like:
/* <button 
    className="sc-some-hashed-class-names" <--- this is what styled-component adds
   >
    {props.children}
   </button>
*/
// ... and then create a custom css file specific for that class name

const Button = styled.button`
  /* put the main CSS class here */
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  /* "&" for selectors dependent on the main class */
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

/* const Button = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
 */
export default Button;
