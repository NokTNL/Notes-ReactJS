import React from "react";
import styled from "styled-components";

/* Styling custom components */
// To do this, you create a styled wrapper for the whole component:

const StyledCourseGoalItem = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

// Wrappers' styles can be extended and inherited
// the styled component does not need to be built-in HTML elements and can be ANY components
// This can be done with the styled() constructor:
const UnglyStyledCourseGoalItem = styled(StyledCourseGoalItem)`
  color: #40ff00;
  background-color: #f1f;
`;

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    // Return the styled wrapper at the top level: (styled-components will pass down the props for you as well)
    <UnglyStyledCourseGoalItem onClick={deleteHandler}>
      {props.children}
    </UnglyStyledCourseGoalItem>
  );
};

export default CourseGoalItem;
