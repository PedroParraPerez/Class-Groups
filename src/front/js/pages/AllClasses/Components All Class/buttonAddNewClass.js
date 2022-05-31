import React, { useContext } from "react";

import { Context } from "../../../store/appContext";
import "./buttonAddNewClass.css";
export const AddNewClass = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <button
        onClick={() => {
          actions.modalAddNewClass();
        }}
      >
        Añadir una clase
      </button>
    </>
  );
};
