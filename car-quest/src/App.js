import logo from "./logo.svg";
import "./App.css";
import Bottom from "./components/bottom/Bottom";

function App() {
  return (
    <div className="App">
      <div className="app-top"></div>
      <div className="app-bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default App;
