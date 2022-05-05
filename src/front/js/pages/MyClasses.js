import React from "react";
import { CardForClasses } from "../component/card_for_classes";


export const MyClasses = () =>{


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