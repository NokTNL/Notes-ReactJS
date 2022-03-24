import Button from "./Button";
import styled from "styled-components";

const StyleButton = styled(Button)`
  height: 300px;
`;

export default function SpecialButton2() {
  return (
    <StyleButton type="submit">
      <a href="#">link</a>
    </StyleButton>
  );
}
