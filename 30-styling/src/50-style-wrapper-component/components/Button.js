import "./Button.css";

export default function Button({ children, className, ...extraAttr }) {
  return (
    <button className={`button ${className}`} {...extraAttr}>
      {children}
    </button>
  );
}
