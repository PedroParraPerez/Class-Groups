import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForSignUp.css";
import { Context } from "../../store/appContext";


export const ModalForSignUp = (props) => {
  const { store, actions } = useContext(Context);
  const [register, setRegister] = useState({})

  return (
    <article className={`modal ${props.stateModal}`}>
      <div className="modal-container">
        <button
          onClick={() => {
            actions.modalSingUp();
          }}
          className="modal-close"
        >
          X
        </button>
        <h4>Registrarse</h4>
        <input 
        onChange={(event) => {
            setRegister({
              ...register,
              [event.target.name]: event.target.value,
            });
          }}
        type="text" name="email" placeholder="Email" />
        <input
        onChange={(event) => {
            setRegister({
              ...register,
              [event.target.name]: event.target.value,
            });
          }}
        type="password" name="password" placeholder="Contraseña" />
        <input
        onChange={(event) => {
            setRegister({
              ...register,
              [event.target.name]: event.target.value,
            });
          }}
        type="password" name="repeatpassword" placeholder="Repetir contraseña" />
        <select name="type" 
        onChange={(event) => {
            setRegister({
              ...register,
              [event.target.name]: event.target.value,
            });
          }}
         >
          <option selected disabled hidden>Tipo de profesor</option>
          <option value="teacher">Profesor Principal</option>
          <option value="teacher assistant">
            Profesor Asistente
          </option>
          
        </select>

        <button
        onClick={() => {
            if (
                register.password ==
                register.repeatpassword
            ) {
            actions.registerTeacher(register);
           
              
            }else{alert("contraseñas no coinciden")}
          }}>Registrarse</button>
      </div>
    </article>
  );
};
ModalForSignUp.propTypes = {
  stateModal: PropTypes.string,
};
