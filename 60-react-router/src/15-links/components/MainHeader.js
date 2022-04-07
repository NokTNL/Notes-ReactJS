import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* If we use <a> here, it will send new HTTP request every time you click the link and will get a brand new HTML file in return. ...
            ... This is not good as all app states will be lost */}
            {/* To avoid that, we can write our own code to add eventlisteners to clicks and prevent default ...
             ... Or, use the <Link> component provided by react-router-dom (wll still render an <a> tag) */}
            {/* !! use RELATIVE LINKS here */}
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
