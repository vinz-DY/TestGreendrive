import { Link } from "react-router-dom";
import HeaderHome from "./components/HeaderHome";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Greendrive</h1>
    </div>
    <div className="homeContainer">
      <HeaderHome />
      <div className="menuCardCtn">
        <Link to="/map">
          <MenuCard />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;
