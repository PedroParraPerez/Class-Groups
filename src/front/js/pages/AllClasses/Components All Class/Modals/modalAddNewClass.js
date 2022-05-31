import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../../../../store/appContext";



export const ModalAddNewClass = (props) => {
  const { store, actions } = useContext(Context);
  const [newclass, setNewclass] = useState({});

  return (
    <article className={`modal ${props.stateModal}`}>
      <div className="modal-container container">
        <h4>Añadir una clase</h4>
        <button
         onClick={() => {
          actions.modalAddNewClass();
        }}
        className=" modalclose btn-close  p-2 "
        type="button"  aria-label="Close"></button>
        <div className="row mt-3">
          <div className="col-12">
            <input
            className="w-75"
              onChange={(event) => {
                setNewclass({
                  ...newclass,
                  [event.target.name]: event.target.value,
                });
              }}
              type="text"
              name="name"
              placeholder="Nombre de la clase"
            />
          </div>
        </div>
        
        <div className="mt-2">
          <div className="d-flex justify-content-end">
        <button
          onClick={() => {
            actions.AddNewClass(newclass)
            
          }}
        >
          Crear Clase
        </button>
        </div>
        </div>
      </div>
    </article>
  );
};
ModalAddNewClass.propTypes = {
  stateModal: PropTypes.string,
};
