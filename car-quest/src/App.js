import logo from "./logo.svg";
import "./App.css";
import Bottom from "./components/bottom/Bottom";
import AppNavbar from "./components/navbar/AppNavbar";

function App() {
  return (
    <div className="App">
      <div className="app-top">
        <AppNavbar></AppNavbar>
      </div>
      <div className="app-bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default App;
