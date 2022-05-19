import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForSignUp.css";
import { Context } from "../../store/appContext";

export const ModalForSignUp = (props) => {
  const { store, actions } = useContext(Context);
  const [register, setRegister] = useState({});

  return (
    <article className={`modal ${props.stateModal}`}>
      <div className="modal-container">
        <button
          onClick={() => {
            actions.modalSingUp();
          }}
          className=" modalclose btn-close  p-2 "
        ></button>
        <h4>Registrarse</h4>
        <div className="row mt-3">
          <div className="col-12">
            <input
              onChange={(event) => {
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                });
              }}
              type="text"
              name="email"
              className="w-75"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
              className="w-75"
              onChange={(event) => {
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                });
              }}
              type="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
              onChange={(event) => {
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                });
              }}
              type="password"
              className="w-75"
              name="repeatpassword"
              placeholder="Repetir contraseña"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <select
              name="type"
              onChange={(event) => {
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                });
              }}
            >
              <option selected disabled hidden>
                Tipo de profesor
              </option>
              <option value="teacher">Profesor Principal</option>
              <option value="teacher assistant">Profesor Asistente</option>
            </select>
          </div>
        </div>
        
          <div className="d-flex justify-content-end ">
        <button
          onClick={() => {
            if (register.password == register.repeatpassword) {
              actions.registerTeacher(register);
            } else {
              alert("contraseñas no coinciden");
            }
          }}
        >
          Registrarse
        </button>
      </div>
      
      </div>
    </article>
  );
};
ModalForSignUp.propTypes = {
  stateModal: PropTypes.string,
};
