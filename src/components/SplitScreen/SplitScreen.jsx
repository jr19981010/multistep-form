import './SplitScreen.css';
import React from 'react';
import { useDisplay } from '../../DisplayContext';

export const SplitScreen = ({children}) =>{
    
    const {display} = useDisplay();
    let header = null;
    let main = null;
    let goBack = null;
    let nextStep = null;

    React.Children.map(children, (child) =>{
        if( child){
            if( child.type.name === "Header"){
                header = child;
            }else if(child.type.name === "PersonalInfo" ||
                     child.type.name ==="SelectPlan" ||
                     child.type.name ==="PickAddOns" ||
                     child.type.name ==="FinishingUp"||
                     child.type.name ==="ThankYou"){
                main = child;
            }else if(child.type.name === "GoBack"){
                goBack = child;
            }else if(child.type.name === "NextStep"){
                nextStep = child;
            }
        }
    })

    return(
        <>

        <div className="container">
            <div className="sidebar">
                {header}
            </div>
            <div className="main">
            {main}
                <div className={`controller ${display === "stepFive" ? "hide" : ""}`}>
               {goBack}
                {nextStep}
            </div>
            </div>

        </div>
        
        </>
    )
}