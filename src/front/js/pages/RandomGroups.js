import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/RandomGroups.css";
import { Cardfor2person } from "../component/cardfor2person";
import { Cardfor3person } from "../component/cardfor3person";

export const RandomGroups = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {/* Render Students of my class START */}
      <div className="container m-0 p-0 m-auto">
        <div className="text-center mt-5 p-3 students ">
          <h3 className="fw-bold mb-3">Estudiantes</h3>
          <ol>
            {store.STUDENTS.map((student, index) => {
              return (
                <li className="mb-2" key={index}>
                  {student}
                </li>
              );
            })}
          </ol>
        </div>
        {/* Render Students of my class END */}
        {/* Buttons for pills START */}
        <div className="d-flex justify-content-center mt-4">
          <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active buttonspills"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
              >
                Grupos de 2 personas
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link buttonspills"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
              >
                {" "}
                Grupos de 3 personas
              </button>
            </li>
          </ul>
        </div>
        {/* Buttons for pills END */}

        {/* RENDER for ALL  PILLS START */}
        <div className="tab-content" id="pills-tabContent">
          {/* RENDER CARD 2 PEOPLE PER GROUP START */}
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row listgroups">
                <Cardfor2person />
            </div>
          </div>
          {/* RENDER 2 PEOPLE PER GROUP END */}

          {/* RENDER 3 PEOPLE PER GROUP START */}
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row listgroups">
            <Cardfor3person />
            </div>
          </div>

          {/* RENDER 3 PEOPLE PER GROUP END */}
        </div>
        {/* RENDER for ALL  PILLS END */}
      </div>
    </>
  );
};
