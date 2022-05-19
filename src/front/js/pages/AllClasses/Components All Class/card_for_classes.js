import React, { useContext } from "react";

import { Context } from "../../../store/appContext";
import "./card_for_classes.css";
import { Link, useParams } from "react-router-dom";

export const CardForClasses = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <>
      {store.AllClasses.map((group) => {
        return (
          <Link to={`/class/${group.id}`}>
          <div key={group.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{group.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Curso</h6>
              <h6 className="card-subtitle mb-2 text-muted">Horario</h6>
            </div>
          </div>
          </Link>
        );
      })}
    </>
  );
};
