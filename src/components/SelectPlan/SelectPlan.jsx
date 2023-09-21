import { useRef, useEffect } from "react";
import { usePlan } from "../../HandlePlan";
import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";
import './SelectPlan.css';

export const SelectPlan = () =>{

    const { status,
            handleCheckStatus,
            monYr,
            arAmount,
            adAmount,
            proAmount,
            acArcade, acAdvanced, acPro,
            handleArcade,handleAdvanced,
            handlePro
}  = usePlan();
     
    const setStatus = () =>{
        handleCheckStatus(!status);
    }

    const arMonth = useRef();
    const adMonth = useRef();
    const proMonth = useRef();

    const activeMonth = useRef();
    const activeYear = useRef();

    useEffect(() =>{

        arMonth.current.style.display = status ? "block" : "none";
        adMonth.current.style.display = status ? "block" : "none";
        proMonth.current.style.display = status ? "block" : "none";

        activeMonth.current.style.color = status ? "#9699AB" : "#02295A";
        activeYear.current.style.color = status ? "#02295A" : "#9699AB";
 
    }, [status]);

    const arcadePlan = useRef();
    const advancedPlan = useRef();
    const proPlan = useRef();

    const arcadeSelect = () =>{
        handleArcade(!acArcade);
    }

    const advanceSelect = () =>{
        handleAdvanced(!acAdvanced);
    }
  
    const proSelect = () =>{
        handlePro(!acPro);
    }

    return(
        <>
        
        <form className="select-plan">
        <fieldset className="select-plan">
            <legend>Select your plan</legend>
            <p>You have the option of monthly and yearly billing.</p>
            <div className="select-plan ">
            <div ref={arcadePlan} 
                 className={`arcade ${acArcade && !acAdvanced && !acPro ? "active" : ""}`}
                 onClick={arcadeSelect}>
                <img src={arcade} alt="arcade" />
                <div>

                <p>Arcade</p>
                <p>${arAmount}/{monYr}</p>
                <p ref={arMonth}>2 months free</p>
                </div>
            </div>
            <div ref={advancedPlan}
                 className={`advanced ${acAdvanced && !acArcade && !acPro ? "active" : ""}`}
                 onClick={advanceSelect}>
                <img src={advanced} alt="advanced" />
                <div>
                <p>Advanced</p>
                <p>${adAmount}/{monYr}</p>
                <p ref={adMonth}>2 months free</p>
                </div>
            </div>
            <div ref={proPlan} 
                 className={`pro ${acPro && !acArcade && !acAdvanced ? "active" : ""}`}
                 onClick={proSelect}>
                <img src={pro} alt="pro" />
                <div>
                <p>Pro</p>
                <p>${proAmount}/{monYr}</p>
                <p ref={proMonth}>2 months free</p>
                </div>
            </div>
            </div>
     
            <div className="month-year">
            <span ref={activeMonth}>monthly</span>
            <label class="switch">
            <input type="checkbox" onChange={setStatus} checked ={status} />
            <span class="slider round"></span>
            </label>
            <span ref={activeYear}>Yearly</span>
            </div>
        </fieldset>
        </form>

        </>
    )
}