import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import "../../../styles/modalForLogin.css"
import { Context } from "../../store/appContext";


export const ModalforLogin = (props) => {

    const [modalOpen, setModalOpen] = useState(false)
    const {store, actions} = useContext(Context)

    return(
        
        <article className={`modal ${props.stateModal}`}>
            <div className="modal-container">
                <button onClick={()=>{actions.modalLogin()}} className="modal-close">X</button>
                <h4>Login</h4>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Contraseña"/>
         
            <button>Registrarme</button>
            </div>

        </article>
        
    )
}
ModalforLogin.propTypes = {
	stateModal: PropTypes.string,
};

// ((modalOpen || props.stateModal == true) ? `is_open` : "")