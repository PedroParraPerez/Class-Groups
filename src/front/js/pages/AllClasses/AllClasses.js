import React, {useEffect, useContext} from "react";

import { CardForClasses } from "./Components All Class/card_for_classes";
import { Context } from "../../store/appContext";
import { AddNewClass } from "./Components All Class/buttonAddNewClass";
import { ModalAddNewClass } from "./Components All Class/Modals/modalAddNewClass";


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
                    <AddNewClass/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <CardForClasses/>
                </div>
            </div>
        </div>
        {store.modalAddNewClass ? <ModalAddNewClass stateModal="is_open" /> : ""}
        </>
    );

}