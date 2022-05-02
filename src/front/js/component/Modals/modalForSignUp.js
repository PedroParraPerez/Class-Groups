import React, {useContext} from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForSignUp.css"
import { Context } from "../../store/appContext";

export const ModalForSignUp = (props) => {

   const {store, actions} = useContext(Context)

    return(
        
        <article className={`modal ${props.stateModal}`}>
        <div className="modal-container">
            <button onClick={()=>{actions.modalSingUp()}} className="modal-close">X</button>
            <h4>Registrarse</h4>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Contraseña"/>
     
        <button>Registrarse</button>
        </div>

    </article>
        
    )
}
ModalForSignUp.propTypes = {
	stateModal: PropTypes.string,
};