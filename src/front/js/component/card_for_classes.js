import React from "react";
import "../../styles/card_for_classes.css"

export const CardForClasses = () => {
  return (
    <>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Nombre de la clase</h5>
          <h6 className="card-subtitle mb-2 text-muted">Curso</h6>
          <h6 className="card-subtitle mb-2 text-muted">Horario</h6>
        </div>
      </div>
    </>
  );
};
