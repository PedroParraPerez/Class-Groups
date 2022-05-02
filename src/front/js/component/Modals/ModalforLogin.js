import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForLogin.css"
import { Context } from "../../store/appContext";



export const ModalforLogin = (props) => {

   
    const {store, actions} = useContext(Context)
    const [login, setLogin] = useState({})

    return(
        
        <article className={`modal ${props.stateModal}`}>
            <div className="modal-container">
                <button onClick={()=>{actions.modalLogin()}} className="modal-close">X</button>
                <h4>Login</h4>
            <input
            onChange={(event) => {
                setLogin({
                  ...login,
                  [event.target.name]: event.target.value,
                });
              }} type="text" name="email" placeholder="Email"/>
            <input onChange={(event) => {
                setLogin({
                  ...login,
                  [event.target.name]: event.target.value,
                });
              }} type="password" name="password" placeholder="Contraseña"/>
         
            <button 
            onClick={() => {actions.logIn(login)}}>Iniciar Sesión</button>
            </div>

        </article>
        
    )
}
ModalforLogin.propTypes = {
	stateModal: PropTypes.string,
};