import { useContext, createContext, useState } from "react";

const PickAddOns = createContext();

export const PickAddOnsProvider = ({children}) =>{
      const [onService, setOnService] = useState(false);
      const [laStorage, setLaStorage] = useState(false);
      const [cuProfile, setCuProfile] = useState(false);

      const handleOnService = (newOnService) =>{
            setOnService(newOnService);
      };

      const handleLaStorage = (newLaStorage) =>{
            setLaStorage(newLaStorage);
      };

      const handleCuProfile = (newCuProfile) =>{
            setCuProfile(newCuProfile);
      };



      return <PickAddOns.Provider value={{onService, laStorage, cuProfile,
                                         handleOnService,
                                         handleLaStorage,
                                         handleCuProfile}}>
                    {children}
             </PickAddOns.Provider>
};

export const usePickAddOns = () =>{
    return useContext(PickAddOns);
}