import React, { useContext } from "react";
import imagen from "../../img/prueba.png"
import "../../styles/Home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1 className="text-center mt-5">HOME</h1>
      <h3 className="text-center mt-5">Coming soon...</h3>
      <div className="d-flex justify-content-end ">
      <img src={imagen} className="w-50 h-50"/></div>

    </>
  );
};
