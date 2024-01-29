import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import { AuthContext } from "../context/AuthContext";
import LoginInput from "../components/LoginInput";
import "./LogIn.css";

const user = {
  mail: "",
  password: "",
};

function LogIn() {
  const [credentials, setCredentials] = useState(user);
  const [msg, setMsg] = useState("none");
  const { setConnected } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    if (msg !== "none") setMsg("none");
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    try {
      const valid = await connexion.post(`/login`, credentials);
      if (valid) {
        const connectedUser = valid.data.connected;
        if (connectedUser.role === 0) {
          setConnected(valid.data.connected);
          if (!connectedUser.profil) {
            setMsg("firstLogin");
            setTimeout(() => {
              navigate("/inscription-profil");
            }, 2000);
          } else {
            setMsg("valid");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        } else if (connectedUser.role === 1) {
          setConnected(valid.data.connected);
          setMsg("admin");
          setTimeout(() => {
            navigate("/admin");
          }, 2000);
        }
      }
    } catch (error) {
      setMsg("invalid");
      setCredentials(user);
    }
  };

  return (
    <>
      <div className="contain-validation-errorconnexion">
        {msg === "valid" && (
          <p className="validation">
            Vos informations de connexion sont correctes, vous allez être
            redirigé.
          </p>
        )}
        {msg === "invalid" && (
          <p className="errorconnexion">
            Vos informations de connexion sont incorrectes.
          </p>
        )}
      </div>
      <div className="contain-form-login">
        <h2>Connectez-vous</h2>
        <div className="form-container">
          <form onSubmit={handleRequest} className="form-login">
            <div className="contain-input">
              <LoginInput
                type="mail"
                name="mail"
                required
                onChange={handleCredentials}
                value={credentials.mail}
                placeholder="Votre email"
              />
            </div>
            <div className="contain-input">
              <LoginInput
                type="password"
                name="password"
                required
                onChange={handleCredentials}
                value={credentials.password}
                placeholder="Votre mot de passe"
              />
            </div>
            <div className="contain-submit-login">
              <button type="submit" className="button-submit">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
