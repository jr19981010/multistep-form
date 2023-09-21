import React from 'react';
import { Header } from './components/header/Header';
import { PersonalInfo } from './components/personalInfo/PersonalInfo';
import { SelectPlan } from './components/SelectPlan/SelectPlan';
import { PickAddOns } from './components/PickAddOns/PickAddOns';
import { FinishingUp } from './components/FinishingUp/FinishingUp';
import { ThankYou } from './components/ThankYou/ThankYou';
import { SplitScreen } from './components/SplitScreen/SplitScreen';
import { NextStep } from './components/controller/NextStep';
import { GoBack } from './components/controller/GoBack';
import { useDisplay } from './DisplayContext';
function App() {
  const {display} = useDisplay();
  console.log(display)
  return (   
      <>
          <SplitScreen>
              <Header/>
              {console.log(display)}
              { display === "stepOne" && <PersonalInfo /> }
              { display === "stepTwo" && <SelectPlan /> }
              { display === "stepThree" && <PickAddOns /> }
              { display === "stepFour" && <FinishingUp /> }
              { display === "stepFive" && <ThankYou /> }
              
              {display !== "stepOne" && <GoBack />}
              <NextStep />
          </SplitScreen>
      </>
  );
}

export default App;
