import React, { useContext, createContext, useState } from "react";

const DisplayContext = createContext();

export  const DisplayProvider = ({children}) =>{
    const [display, setDisplay] = useState("stepOne");

    const changeDisplay = (newDisplay) => {
        setDisplay(newDisplay);
    }

    return(
        <DisplayContext.Provider value={{display, changeDisplay}}>
            {children}
        </DisplayContext.Provider>
    )
}

export const useDisplay = () =>{
    return useContext(DisplayContext);
}
