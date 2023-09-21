import React, {useState, createContext, useContext, useEffect} from "react";
import { usePickAddOns } from "./HandlePickAddOns";
const HandlePlan = createContext();

export const HandlePlanProvider = ({children}) => {
    const [status, setStatus] = useState(false);

    const [acArcade, setAcArcade] = useState(false);
    const [acAdvanced, setAcAdvanced] = useState(false);
    const [acPro, setAcPro] = useState(false);

    const [monYr, setMonYr] = useState("mo");

    const [arAmount, setArAmount] = useState(9);
    const [adAmount, setAdAmount] = useState(12);
    const [proAmount, setProAmount] = useState(15);




    const handleArcade = (newArcade) => {
        setAcArcade(newArcade);
        if (newArcade) {
          setAcAdvanced(false);
          setAcPro(false);
        }
    };
      
      
      const handleAdvanced = (newAdvanced) => {
        setAcAdvanced(newAdvanced);
        if (newAdvanced) {
          setAcArcade(false);
          setAcPro(false);
        }
    };

        const handlePro = (newPro) => {
        setAcPro(newPro);
        if (newPro) {
          setAcArcade(false);
          setAcAdvanced(false);
        }
    };
    
    const {handleOnService, 
           handleLaStorage, 
           handleCuProfile} = usePickAddOns();


    useEffect(() =>{
        
        if(status){
            setMonYr("yr");

            setArAmount(90);
            setAdAmount(120);
            setProAmount(150);

            handleOnService(false);
            handleLaStorage(false);
            handleCuProfile(false);

        }else{
            setMonYr("mo");

            setArAmount(9);
            setAdAmount(12);
            setProAmount(15);

            handleOnService(false);
            handleLaStorage(false);
            handleCuProfile(false);


        }

    },[status]);

    const handleCheckStatus = (newCheckStatus) =>{
        setStatus(newCheckStatus);
    }

    return <HandlePlan.Provider value={{
                                        status,
                                        handleCheckStatus, 
                                        monYr,
                                        arAmount,
                                        adAmount,
                                        proAmount,
                                        acArcade, acAdvanced, acPro,
                                        handleArcade,handleAdvanced,
                                        handlePro
                                        }}>
                {children}
           </HandlePlan.Provider>
}
export const usePlan = () =>{
    return useContext(HandlePlan);
}