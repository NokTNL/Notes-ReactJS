// "index.js "is the FIRST file to execute

// Rendering the page needs 'react-dom' library
import ReactDOM from "react-dom"; // import default from a LIBRARY/PACKAGE. no "./" and ".js"

// Import the root component 'App' that contains all the sub-components
import App from "./App"; // import default from a file. Here no need to include ".js"

// Styling
import "./index.css"; // importing CSS
// It is just to tell React to INCLUDE the file when injecting into the HTML
// React will handle it first so it will not be run by the browser (otherwise will throw error)

// To render the page:
ReactDOM.render(<App />, document.getElementById("root"));
//               ^What      ^which DOM node in public/index.html
//             to inject     to inject into
//             (in JSX)

// See App.js to see the inner structure of a root component
