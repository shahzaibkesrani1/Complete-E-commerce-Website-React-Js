import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import "@fontsource/josefin-sans";
import  Router  from "../src/components/header/routes/Router";
function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
