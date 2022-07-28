import { Link, NavLink, Redirect } from "react-router-dom";

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
          <li>
            {/* NavLink's are same as Link except you can specify an "active" class 
            so that the link will have that class when the page shown corresponds to that Navlink ("active") */}
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
          {/* When rendered, <Redirect> force navigates to a new URL. Can be useful e.g. after an async operation */}
          <Redirect to="/login" />
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
