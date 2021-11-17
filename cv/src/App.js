import "./App.css";
import User from "./components/User";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
      </div>
      <div className="main">main</div>
    </div>
  );
}

export default App;
