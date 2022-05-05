import React, { useContext } from "react";
import {} from "react/cjs/react.production.min";
import { Context } from "../store/appContext";
import "../../styles/card_for_classes.css";

export const CardForClasses = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.MyClasses.map((group, index) => {
        return (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{group.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Curso</h6>
              <h6 className="card-subtitle mb-2 text-muted">Horario</h6>
            </div>
          </div>
        );
      })}
    </>
  );
};
