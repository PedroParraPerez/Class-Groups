import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Cardfor2person = () => {
  
  const {store, actions} = useContext(Context)
  
  class Group {
    constructor(id, group, student1, student2, student3){
      this.id = id;
      this.group = group;
      this.student1 = student1;
      this.student2 = student2;
    }
  }
 
  let randomNumber = []
  let groupFinal = [];

  const generateTwoRandomNumbersDifferent = () => {
    while (randomNumber.length < store.STUDENTS.length) {
      let r = Math.floor(Math.random() * store.STUDENTS.length);
      randomNumber.indexOf(r) === -1 ? randomNumber.push(r) : "";
    }
    return randomNumber;
  };


  const GenerateRandomGroups = (randomNumber) => {
    generateTwoRandomNumbersDifferent();

    let i = 0;
    let j = 1;
    let sum = 2;
    for (let z = 0; z < store.STUDENTS.length / store.numPersonPerGroup2; z++) {
      let group = new Group(
        z + 1,
        `Sala ${z + 1}`,
        store.STUDENTS[randomNumber[i]],
        store.STUDENTS[randomNumber[j]],
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
                <div key={index} className="card col-sm m-2 p-2 cardgroup">
                  <h5 className="card-title fw-bold">
                    {group.student2 ? group.group : ""}
                  </h5>
                  <p className="card-text fw-bold">{group.student1}</p>
                  <p className="card-text fw-bold">
                    {group.student2
                      ? group.student2
                       : `Vas a la sala ${Math.floor(Math.random() * store.STUDENTS.length/store.numPersonPerGroup2) + 1 }`}
                      
                  </p>
                </div>
              );
            })}
    </>
  );
};
