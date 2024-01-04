import { Link } from "react-router-dom";
import DisplayCards from "./components/DisplayCards";
import HeaderHome from "./components/HeaderHome";
import MenuCard from "./components/MenuCard";
import "./App.css";

function App() {
  return (
    <div className="homeContainer">
      <HeaderHome />
      <div className="menuCardCtn">
        <Link to="/map">
          <MenuCard />
        </Link>
      </div>
      <DisplayCards basePath="/terminals" />
    </div>
  );
}

export default App;
