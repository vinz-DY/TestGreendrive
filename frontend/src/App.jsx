import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import HeaderHome from "./components/HeaderHome";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";
import MenuCardResa from "./components/MenuCards/MenuCardResa";
import MenuResa from "./assets/menuReservation.jpg";
import MenuFaq from "./assets/menuFaqPic.jpg";
import "./App.css";

function App() {
  const { connected } = useContext(AuthContext);
  return (
    <div className="homeContainer">
      <HeaderHome />
      <div className="menuCardCtn">
        <Link to="/map">
          <MenuCard />
        </Link>
        {connected && connected.connected.role === 0 && (
          <>
            <Link to="/reservation">
              <MenuCardResa
                title="Réservations"
                img={MenuResa}
                alt="menu des reservations"
              />
            </Link>
            <Link to="/faq">
              <MenuCardResa
                title="Informations"
                img={MenuFaq}
                alt="menu informations"
              />
            </Link>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
