import { useState, useEffect} from 'react';
import { useDisplay } from '../../DisplayContext';

import './GoBack.css'

export const GoBack =() =>{

    const {display, changeDisplay} = useDisplay();

    const [newDisplay, setNewDisplay] = useState(display);

    const displayArray = ["stepOne", "stepTwo", "stepThree", "stepFour"];
 
    useEffect(()=>{
        const newIndex = displayArray.findIndex((component) =>
        component === display);
        setNewDisplay(displayArray[newIndex - 1])
// eslint-disable-next-line
    },[display]);

      const handleDisplay = () => {

            changeDisplay(newDisplay);
      };

    return(
        <>
        
        <button className="go-back" onClick={handleDisplay}>Go Back</button>

        </>
    )
}