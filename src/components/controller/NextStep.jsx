import React, { useEffect, useRef, useState } from 'react';
import './NextStep.css';
import { useDisplay } from '../../DisplayContext';
import { useInput } from '../../HandleInput';
import { usePlan } from '../../HandlePlan';
import { usePickAddOns } from '../../HandlePickAddOns';

export const NextStep = () =>{
    
    const {errorName, errorEmail, errorCpNumber,
           nameElement, emailElement, cpElement} = useInput();

    const {acArcade, acAdvanced, acPro} = usePlan();

    const {display, changeDisplay} = useDisplay();

    const {onService, laStorage, cuProfile} = usePickAddOns();

    const [newDisplay, setNewDisplay] = useState(display);

    const [stepOne, setStepOne] = useState(null);
    const [stepTwo, setStepTwo] = useState(null);
    const [stepThree, setStepThree] = useState(null);
    const [stepFour, setStepFour] = useState(null);

    const [oneDisabled, setOneDisabled] = useState(true);
    const [twoDisabled, setTwoDisabled] = useState(false);
    const [threeDisabled, setThreeDisabled] = useState(false);
    const [fourDisabled, setFourDisabled] = useState(false);

    const displayArray = ["stepOne", "stepTwo", "stepThree", "stepFour", "stepFive"];
    
    const btnNextStep = useRef();

    useEffect(()=>{
        const newIndex = displayArray.findIndex((component) =>
        component === display);
        setNewDisplay(displayArray[newIndex + 1])

    },[display]);

    useEffect(() =>{
        if(nameElement && emailElement && cpElement){
            if(errorName || errorEmail || errorCpNumber || 
                nameElement.value === "" ||
                emailElement.value === "" ||
                cpElement.value === ""){
                setStepOne(false);                
            }else{
                setStepOne(true);
            }
        }
    },[nameElement, emailElement, cpElement, errorName, errorEmail, errorCpNumber]);

    useEffect(() =>{
        if(!acArcade && !acAdvanced && !acPro){
            setStepTwo(false);
        }else{
            setStepTwo(true);
        }
    }, [acArcade, acAdvanced, acPro]);


    useEffect(() =>{
        if(!onService && !laStorage && !cuProfile){
            setStepThree(false);
        }else{
            setStepThree(true);
        }
    }, [onService, laStorage, cuProfile]);

    useEffect(() =>{
        if(display === "stepFour"){
            setStepFour(true);
        }else{
            setStepFour(false);
        }
    }, [display]);

    useEffect(() =>{
        if(oneDisabled){
            if(display === "stepOne" && stepOne){
                btnNextStep.current.disabled = false;
                btnNextStep.current.classList.remove("disabled");
            }else{
                btnNextStep.current.disabled = true;
                btnNextStep.current.classList.add("disabled");
            }
        }
    }, [display, stepOne, oneDisabled]);


    useEffect(() =>{
        if(twoDisabled){
    
            if(display === "stepTwo" && stepTwo){
                btnNextStep.current.disabled = false;
                btnNextStep.current.classList.remove("disabled");
            }else{
                btnNextStep.current.disabled = true;
                btnNextStep.current.classList.add("disabled");
           }
        }
    }, [display,stepTwo, twoDisabled]);

    useEffect(() =>{
        if(threeDisabled){
            if(display ==="stepThree" && stepThree){
                btnNextStep.current.disabled = false;
                btnNextStep.current.classList.remove("disabled");
            }else{
                btnNextStep.current.disabled = true;
                btnNextStep.current.classList.add("disabled");
            }
        }
    }, [display, stepThree, threeDisabled]);

    useEffect(() =>{
        if(fourDisabled){
            if(display === "stepFour" && stepFour){
                btnNextStep.current.disabled = false;
                btnNextStep.current.classList.remove("disabled");
            }else{
                btnNextStep.current.disabled = true;
                btnNextStep.current.classList.add("disabled");
            }
        }
    }, [display, stepFour, fourDisabled]);

    useEffect(() =>{
            switch (display) {

                case "stepOne":
                    setTwoDisabled(false);
                    setThreeDisabled(false);
                    setFourDisabled(false);
                    setOneDisabled(true);
                    break;

                case "stepTwo":
                    setOneDisabled(false);
                    setThreeDisabled(false);
                    setFourDisabled(false);
                    setTwoDisabled(true);
                    break;

                case "stepThree":
                    setOneDisabled(false);
                    setTwoDisabled(false);
                    setFourDisabled(false);
                    setThreeDisabled(true);
                    break;
                case "stepFour":
                    setOneDisabled(false);
                    setTwoDisabled(false);
                    setThreeDisabled(false);
                    setFourDisabled(true)
                    break;
                default:
                    break;
            }

    },[display]);
    
      const handleDisplay = () => {
            changeDisplay(newDisplay);
      };
         
    return(
        <> 
        <button ref={btnNextStep} className={`next-step ${display === "stepFour" ? "confirm" : ""}`} onClick={handleDisplay}>{display === "stepFour" ? "confirm" : "next step"}</button>
        </>
    )
}