import React from "react";
import PropTypes from "prop-types";
import "./Inscription.css";

function LoginInput({ type, name, value, onChange, placeholder }) {
  return (
    <div>
      <input
        className="inscriptionInput loginInput"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default LoginInput;
