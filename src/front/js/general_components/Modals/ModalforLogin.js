import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForLogin.css";
import { Context } from "../../store/appContext";

export const ModalforLogin = (props) => {
  const { store, actions } = useContext(Context);
  const [login, setLogin] = useState({});

  return (
    <article className={`modal ${props.stateModal}`}>
      <div className="modal-container container">
        <h4>Login</h4>
        <button
         onClick={() => {
          actions.modalLogin();
        }}
        className=" modalclose btn-close  p-2 "
        type="button"  aria-label="Close"></button>
        <div className="row mt-3">
          <div className="col-12">
            <input
            className="w-75"
              onChange={(event) => {
                setLogin({
                  ...login,
                  [event.target.name]: event.target.value,
                });
              }}
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
             className="w-75"
              onChange={(event) => {
                setLogin({
                  ...login,
                  [event.target.name]: event.target.value,
                });
              }}
              type="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="mt-2">
          <div className="d-flex justify-content-end">
        <button
          onClick={() => {
            actions.logIn(login);
          }}
        >
          Iniciar Sesión
        </button>
        </div>
        </div>
      </div>
    </article>
  );
};
ModalforLogin.propTypes = {
  stateModal: PropTypes.string,
};
