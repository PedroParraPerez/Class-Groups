import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Cardfor2person = (props) => {

  function Group(id, group, student1, student2, student3) {

    this.id = id;
    this.group = group;
    this.student1 = student1;
    this.student2 = student2;
    this.student3 = student3;
  }
  const {store, actions} = useContext(Context)
  const [randomNumber, setRandomNumber] = useState([]);
  const [numperson, setNumperson] = useState(2);

  const generateTwoRandomNumbersDifferent = () => {
    while (randomNumber.length < store.STUDENTS.length) {
      let r = Math.floor(Math.random() * store.STUDENTS.length);
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
    for (let z = 0; z < store.STUDENTS.length / numperson; z++) {
      let group = new Group(
        z + 1,
        `Sala ${z + 1}`,
        store.STUDENTS[randomNumber[i]],
        store.STUDENTS[randomNumber[j]],
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
      {groupFinal.map((group, index) => {
              return (
                <div key={index} className="card d-flex w-25 m-2 p-2 cardgroup">
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
    </>
  );
};
