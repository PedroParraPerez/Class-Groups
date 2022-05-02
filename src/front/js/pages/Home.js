import React, { useContext } from "react";

import "../../styles/Home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1 className="text-center mt-5">HOME</h1>
      <h3 className="text-center mt-5">Coming soon...</h3>
      
    </>
  );
};
