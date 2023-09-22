import './SplitScreen.css';
import React from 'react';
import { useDisplay } from '../../DisplayContext';
import { PersonalInfo } from '../personalInfo/PersonalInfo';
export const SplitScreen = ({children}) =>{
    
    const {display} = useDisplay();
    // let header = null;
    // let main = null;
    // let goBack = null;
    // let nextStep = null;

    children.forEach(child =>{
        // if( child && child.type && child.type.name){
        //     if( child.type.name === "Header"){
        //         header = child;
        //     }else if(child.type.name === "PersonalInfo" ||
        //              child.type.name ==="SelectPlan" ||
        //              child.type.name ==="PickAddOns" ||
        //              child.type.name ==="FinishingUp"||
        //              child.type.name ==="ThankYou"){
        //         main = child;
        //     }else if(child.type.name === "GoBack"){
        //         goBack = child;
        //     }else if(child.type.name === "NextStep"){
        //         nextStep = child;
        //     }
        // }
    })

    return(
        <>

        <div className="container">
            <div className="sidebar">
                {/* {header} */}
                <PersonalInfo />
            </div>
            <div className="main">
            <PersonalInfo />
                <div className={`controller ${display === "stepFive" ? "hide" : ""}`}>
                <PersonalInfo />
                <PersonalInfo />
            </div>
            </div>

        </div>
        
        </>
    )
}