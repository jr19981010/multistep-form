import './SplitScreen.css';
import React from 'react';
import { useDisplay } from '../../DisplayContext';

export const SplitScreen = ({children}) =>{
    
    const {display} = useDisplay();
    let header = null;
    let main = null;
    let goBack = null;
    let nextStep = null;
    console.log(children, "this is children!")
    React.Children.map(children, (child) =>{
        if( child && child.type && child.type.name){
            if( child.type.name === "Header"){
                header = child;
                console.log("header found!")
                console.log(child.type.name)
            }else if(child.type.name === "PersonalInfo" ||
                     child.type.name === "SelectPlan" ||
                     child.type.name === "PickAddOns" ||
                     child.type.name === "FinishingUp"||
                     child.type.name === "ThankYou"){
                main = child;
                console.log("main found!")

                console.log(child.type.name)

            }else if(child.type.name === "GoBack"){

                goBack = child;
                console.log(child.type.name)
                console.log("goBack found!")

            }else if(child.type.name === "NextStep"){
                nextStep = child;
                console.log(child.type.name)
                console.log("next Step found")
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