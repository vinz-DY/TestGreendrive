import { Link } from "react-router-dom";
import HeaderHome from "./components/HeaderHome";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import "./App.css";
import MenuCardAdmin from "./components/MenuCards/MenuCardAdmin";

function App() {
  return (
    <div className="homeContainer">
      <HeaderHome />
      <div className="menuCardCtn">
        <Link to="/map">
          <MenuCard />
        </Link>
        <Link to="/admin">
          <MenuCardAdmin />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;
