import Header from "./components/Header";
import Footer from "./components/Footer";
import SpecialButton from "./components/SpecialButton";
import SpecialButton2 from "./components/SpecialButton2";

// Go to SpecialButton.js (the component using a wrapper) and Button.js (the wrapper)
// Also using styled-components in SpecialButton2.js

function App() {
  return (
    <div className="App">
      <Header />
      <SpecialButton />
      <SpecialButton2 />
      <Footer />
    </div>
  );
}

export default App;
