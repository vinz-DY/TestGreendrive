import { Link } from "react-router-dom";
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
    </div>
  );
}

export default App;
