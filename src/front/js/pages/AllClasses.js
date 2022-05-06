import React, {useEffect, useContext} from "react";

import { CardForClasses } from "../component/card_for_classes";
import { Context } from "../store/appContext";


export const AllClasses = () =>{

    const {store, actions} = useContext(Context)
    useEffect(() => {
        actions.getAllClasses();
      },[]);
      
    return(
        <>
        <div className="container-fluid pt-5 d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-12">
                    <CardForClasses/>
                </div>
            </div>
        </div>
        </>
    );

}