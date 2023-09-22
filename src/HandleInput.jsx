import { useState, createContext, useContext } from "react";
import intlTelInput from 'intl-tel-input';


const HandleInput = createContext();

export const HandleInputProvider = ({children}) =>{
    const [fullname, setFullname] = useState("");
    const [errorName, setErrorName] = useState(false);

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);

    const [cpNumber, setCpNumber] = useState("");
    const [errorCpNumber, setErrorCpNumber] = useState(false);

    const [nameElement, setNameElement] = useState(null);
    const [nameElementReady, setNameElementReady] = useState(false);

    const [emailElement, setEmailElement] = useState(null);
    const [emailElementReady, setEmailElementReady] = useState(false);

    const [cpElement, setCpElement] = useState(null);
    const [cpElementReady, setCpElementReady] = useState(false);

    const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    const [errorMsg, setErrorMsg] = useState("");

    const handleNameElement = (element) =>{
          setNameElementReady(true);
          setNameElement(element);
    }

    const handleEmailElement = (element) =>{
          setEmailElementReady(true);
          setEmailElement(element);
    }

    const handleCpElement = (element) =>{
          setCpElementReady(true);
          setCpElement(element);
    }
    
    let phoneInput;

      if (cpElementReady) {
        phoneInput = intlTelInput(cpElement, {
          initialCountry: 'ph',
          placeholderNumberType: 'MOBILE',
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
        });
      }

    




      const handleDataName= (newName) => {
        
        const fullnameRegex = /^[A-Za-z\s'-]+$/;


        if(fullnameRegex.test(newName)){
          setFullname(newName);
          setErrorName(false);
          // console.log("okay name x")
        }else{
          setErrorName(true);
          // console.log("error name /")
        }
      }

      const handleDataEmail = (newEmail) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(emailRegex.test(newEmail)){
          setEmail(newEmail);
          setErrorEmail(false);
          // console.log("okay email x");
        }else{
          setErrorEmail(true);
          // console.log("error email /")
        }

      }

      const handleDataCpNumber = (newCpNumber) => {
        const isValid = phoneInput.isValidNumber();
          if(isValid){
            // console.log("valid");
            setCpNumber(newCpNumber);
            setErrorCpNumber(false); 

          }else{
            const errorCode = phoneInput.getValidationError();
            setErrorMsg(errorMap[errorCode]);
            setErrorCpNumber(true)
            // console.log("error!")
            // console.log(cpElement);
            setTimeout(() => {
              cpElement.focus();
            }, 0);
          }
      }
          
    
      console.log(errorMsg);
      return <HandleInput.Provider value={{fullname, email, cpNumber, handleDataName, handleDataEmail, handleDataCpNumber,handleNameElement, handleEmailElement, handleCpElement, errorName, errorEmail, errorCpNumber, errorMsg,nameElement, emailElement, cpElement, nameElementReady, emailElementReady, cpElementReady }}>
            {children}
      </HandleInput.Provider>
    }
  
export const useInput = () =>{
  return useContext(HandleInput);
}