import React, {useState} from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForSignUp.css"

export const ModalForSignUp = (props) => {

    const [modalOpen, setModalOpen] = useState(false)

    return(
        
        <article className={`modal ${props.stateModal + ((modalOpen || props.stateModal == true) ? `is_open` : "")}`}>
            <div className="modal-container">
                <button onClick={()=>{setModalOpen(!modalOpen)}} className="modal-close">X</button>
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