import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
  const STUDENTS = [
    "Miguel Ángel Padilla",
     "Alicia Garrote",
     "Andrés Hermelo",
    "Carlos Pérez",
    "Jessica Rojas ",
    "Jesús Robles",
    "Joel Font",
    "Jonathan Díaz",
    "José Ignacio Casanova",
    "José Javier Bustillo",
    "Juan Enrique Arés",
    "Mateo Gómez",
    "Miguel Ángel Jurado",
    "Sergio Mendoza",

  ];

  function Group(id, group, student1, student2, student3) {
    this.id = id;
    this.group = group;
    this.student1 = student1;
    this.student2 = student2;
    this.student3 = student3;
  }

  const [randomNumber, setRandomNumber] = useState([]);
  const [numperson, setNumperson] = useState(2);

  const generateTwoRandomNumbersDifferent = () => {
    while (randomNumber.length < STUDENTS.length) {
      let r = Math.floor(Math.random() * STUDENTS.length);
      randomNumber.indexOf(r) === -1 ? randomNumber.push(r) : "";
    }
    return randomNumber;
  };

  let groupFinal = [];

  const GenerateRandomGroups = (randomNumber) => {
    generateTwoRandomNumbersDifferent();

    let i = 0;
    let j = 1;
    let sum = 2;
    for (let z = 0; z < STUDENTS.length / numperson; z++) {
      let group = new Group(
        z + 1,
        `Sala ${z + 1}`,
        STUDENTS[randomNumber[i]],
        STUDENTS[randomNumber[j]],
        null
      );
      groupFinal.push(group);
      i = i + sum;
      j = j + sum;
    }

    return groupFinal;
  };

  GenerateRandomGroups(randomNumber);

  return (
    <>
      <div className="text-center mt-5 p-3 students ">
        <h3 className="fw-bold mb-3">Estudiantes</h3>
        <ol>
          {STUDENTS.map((student, index) => {
            return (
              <li className="mb-2" key={index}>
                {student}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Buttons for pills START */}
      <div className="d-flex justify-content-center mt-4">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
          <div className="listgroup d-flex w-75 m-auto ">
            {groupFinal.map((group, index) => {
              return (
                <div key={index} className="card d-flex m-2 p-2 cardgroup">
                  <h5 className="card-title fw-bold">
                    {group.student2 ? group.group : ""}
                  </h5>
                  <p className="card-text fw-bold">{group.student1}</p>
                  <p className="card-text fw-bold">
                    {group.student2
                      ? group.student2
                      : `Vas a la sala ${randomNumber[0] != 0 ? randomNumber[0] : randomNumber[1]}`}
                  </p>
                </div>
              );
            })}
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
          <h3 className="text-center mt-4">IN COMMING...</h3>
        </div>
        {/* RENDER 3 PEOPLE PER GROUP END */}

      </div>
      {/* RENDER for ALL  PILLS END */}

    </>
  );
};
