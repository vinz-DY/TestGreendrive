import DisplayCards from "./components/DisplayCards";
import HeaderHome from "./components/HeaderHome";
import "./App.css";

function App() {
  return (
    <div className="homeContainer">
      <HeaderHome />  
      <DisplayCards basePath="/terminals" />
    </div>
  );
}

export default App;
