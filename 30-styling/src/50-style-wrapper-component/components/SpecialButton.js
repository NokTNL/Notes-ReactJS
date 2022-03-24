import Button from "./Button";
import cl from "./SpecialButton.module.css";

export default function SpecialButton() {
  return (
    <Button className={`${cl.root} ${cl.modifier}`} type="submit">
      <a href="#">link</a>
    </Button>
  );
}
