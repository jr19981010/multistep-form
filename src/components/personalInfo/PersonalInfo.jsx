import { useInput } from '../../HandleInput';
import { useEffect, useRef } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import './PersonalInfo.css';

export const PersonalInfo = () => {
  const { fullname, email, cpNumber,handleDataName, handleDataEmail, handleDataCpNumber, handleNameElement, handleEmailElement, handleCpElement, errorName, errorEmail, errorCpNumber, errorMsg } = useInput();

  const nameInput = useRef();
  const emailInput = useRef();
  const cpNumberInput = useRef();

  useEffect(() => {
    handleNameElement(nameInput.current);
    handleEmailElement(emailInput.current);
    handleCpElement(cpNumberInput.current);

    nameInput.current.value = fullname;
    emailInput.current.value = email;
    cpNumberInput.current.value = cpNumber;
  }, [fullname, email, cpNumber]);

  return (
    <>
      <form className='personal-info'>
        <fieldset className='personal-info'>
          <legend>Personal info</legend>
          <p>Please provide your name, email address, and phone number.</p>
          <label htmlFor="name">Name {errorName && <span className='error'>Error</span>}</label>
          <input
            ref={nameInput}
            type="text"
            id="name"
            placeholder='e.g. Stephen King'
            onChange={(e) => handleDataName(e.target.value)}
          />

          <label htmlFor="email">Email Address{errorEmail && <span className="error">Error</span>}</label>
          <input
            ref={emailInput}
            type="email"
            id="email"
            placeholder='e.g. stephenking@lorem.com'
            onChange={(e) => handleDataEmail(e.target.value)}
          />

          <label htmlFor="phone-number">Phone Number{errorCpNumber && <span className="error">{errorMsg}</span>}</label>
          <input
            ref={cpNumberInput}
            className="phone-number"
            type="tel"
            id="phone-number"
            onChange={(e) => handleDataCpNumber(e.target.value)}
          />
        </fieldset>
      </form>
    </>
  );
};
