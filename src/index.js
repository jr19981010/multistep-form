import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DisplayProvider } from './DisplayContext';
import { HandleInputProvider } from './HandleInput';
import { HandlePlanProvider } from './HandlePlan';
import { PickAddOnsProvider } from './HandlePickAddOns';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <PickAddOnsProvider>
  <HandlePlanProvider>
  <HandleInputProvider>
      <DisplayProvider>
          <React.StrictMode>
                <App />
          </React.StrictMode>
      </DisplayProvider>
  </HandleInputProvider>
  </HandlePlanProvider>
  </PickAddOnsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
