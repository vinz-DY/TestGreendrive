import { Link } from "react-router-dom";
import HeaderHome from "./components/HeaderHome";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";
import "./App.css";
import MenuCardResa from "./components/MenuCards/MenuCardResa";
import MenuCardFaq from "./components/MenuCards/MenuCardFaq";

function App() {
  return (
    <div className="homeContainer">
      <HeaderHome />
      <div className="menuCardCtn">
        <Link to="/map">
          <MenuCard />
        </Link>
        <Link to="/reservation">
          <MenuCardResa />
        </Link>
        <Link to="/faq">
          <MenuCardFaq />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;
