import React, { useState,  useContext } from "react";
import { Context } from "../store/appContext";

export const Cardfor3person = () => {
  function Group(id, group, student1, student2, student3) {
    this.id = id;
    this.group = group;
    this.student1 = student1;
    this.student2 = student2;
    this.student3 = student3;
  }
  const { store, actions } = useContext(Context);
  const [randomNumber, setRandomNumber] = useState([]);


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
    let x = 2;
    let sum = 3;
    for (let z = 0; z < store.STUDENTS.length / store.numPersonPerGroup3; z++) {
      let group = new Group(
        z + 1,
        `Sala ${z + 1}`,
        store.STUDENTS[randomNumber[i]],
        store.STUDENTS[randomNumber[j]],
        store.STUDENTS[randomNumber[x]]
      );
      groupFinal.push(group);
      i = i + sum;
      j = j + sum;
      x = x + sum;
    }

    return groupFinal;
  };

  GenerateRandomGroups(randomNumber);

  let randomNumberForPersonWithoutGroup = []
  const generateTwoRandomNumbersDifferentForPersonWithoutGroup = () => {
    while (randomNumberForPersonWithoutGroup.length < 2) {
      let r = Math.floor(Math.random() * store.STUDENTS.length/4) +1;
      randomNumberForPersonWithoutGroup.indexOf(r) === -1 ? randomNumberForPersonWithoutGroup.push(r) : "";
      
    }
    return randomNumberForPersonWithoutGroup;
  };

  generateTwoRandomNumbersDifferentForPersonWithoutGroup()
  return (
    <>
      {groupFinal.map((group, index) => {
        return (
          <div key={index} className="card d-flex w-25 m-2 p-2 cardgroup">
            <h5 className="card-title fw-bold">
              {group.student3 ? group.group : ""}
            </h5>
           {group.student3 ? 
           <p className="card-text fw-bold">{group.student3}</p> : 
           <>
            <p className="card-text fw-bold mt-4">{group.student1} va a la Sala {randomNumberForPersonWithoutGroup[0]}</p>
            <p className="card-text fw-bold">{group.student2} va a la Sala {randomNumberForPersonWithoutGroup[1]}</p>
           </>}




            
            <p className="card-text fw-bold">{group.student3 ? group.student1 : ""}</p>
            <p className="card-text fw-bold">{group.student3 ? group.student2 : ""}</p>
          </div>
        );
      })}
    </>
  );
};
