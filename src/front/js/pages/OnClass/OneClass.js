import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./OneClass.css"
import { RandomGroups } from "../RandomGroups";
export const OneClass = () => {
  const id = useParams().id;
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getClassInfo(id);
  }, []);
 
  return (
    <>
      <div className="container-fluid text-center mt-5">
        <h2>{store.oneClassInfo.name}</h2>
        <nav className="d-flex justify-content-center">
          <div className="nav nav-tabs myclass_buttons" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-student-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-student"
              type="button"
              role="tab"
              aria-controls="nav-student"
              aria-selected="true"
            >
              Alumnos
            </button>
            <button
              className="nav-link"
              id="nav-attendancy-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-attendancy"
              type="button"
              role="tab"
              aria-controls="nav-attendancy"
              aria-selected="false"
            >
             Asistencia
            </button>
            <button
              className="nav-link"
              id="nav-workdone-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-workdone"
              type="button"
              role="tab"
              aria-controls="nav-workdone"
              aria-selected="false"
            >
              Trabajos Hechos
            </button>
            <button
              className="nav-link"
              id="nav-project-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-project"
              type="button"
              role="tab"
              aria-controls="nav-project"
              aria-selected="false"
            >
              Proyectos
            </button>
            <button
              className="nav-link"
              id="nav-randomgroups-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-randomgroups"
              type="button"
              role="tab"
              aria-controls="nav-randomgroups"
              aria-selected="false"
            >
              Grupos Aleatorios
            </button>
          </div>
        </nav>
        <div className="tab-content mt-3" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-student"
            role="tabpanel"
            aria-labelledby="nav-student-tab"
          >
            <span>Alumnos</span>
          </div>
          <div
            className="tab-pane fade"
            id="nav-attendancy"
            role="tabpanel"
            aria-labelledby="nav-attendancy-tab"
          >
            Asistencia
          </div>
          <div
            className="tab-pane fade"
            id="nav-workdone"
            role="tabpanel"
            aria-labelledby="nav-workdone-tab"
          >
            Proyectos Hechos
          </div>
          <div
            className="tab-pane fade"
            id="nav-project"
            role="tabpanel"
            aria-labelledby="nav-project-tab"
          >
            Proyectos
          </div>
          <div
            className="tab-pane fade"
            id="nav-randomgroups"
            role="tabpanel"
            aria-labelledby="nav-randomgroups-tab"
          >
           <RandomGroups/>
          </div>
        </div>
      </div>
    </>
  );
};
