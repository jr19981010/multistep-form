import { useEffect, useState } from 'react';
import { usePickAddOns } from '../../HandlePickAddOns';
import { usePlan } from '../../HandlePlan';
import { useDisplay } from '../../DisplayContext';
import './FinishingUp.css';

export const FinishingUp = () => {
  const {changeDisplay} = useDisplay();
  const { monYr, acArcade, acAdvanced, acPro,
          arAmount, adAmount, proAmount } = usePlan();
  const { onService, laStorage, cuProfile } = usePickAddOns();
  const [addOnsSet, setAddOnsSet] = useState([]);
  const [price, setPrice] = useState([]);
  useEffect(() => {
    const updateAddonSet = [];
    const updatePrice = [];
    if(onService) updateAddonSet.push("Online Service");
    if(onService) updatePrice.push(monYr === "mo" ? 1 : 10);

    if(laStorage) updateAddonSet.push("Large Storage");
    if(laStorage) updatePrice.push(monYr === "mo" ? 2 : 20);

    if(cuProfile) updateAddonSet.push("Customizable profile");
    if(cuProfile) updatePrice.push(monYr === "mo" ? 2 : 20);

    setAddOnsSet(updateAddonSet);
    setPrice(updatePrice);
    
  }, [onService, laStorage, cuProfile]);

  let totalPrice = 0;
  for(let i=0; i<price.length; i++){
    totalPrice += price[i]
  }

  return (
    <form className="finishing-up">
      <fieldset className="finishing-up">
        <legend>Finishing up</legend>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="summary">
          <div>
            <div>
              <p>
                {acArcade ? "Arcade" : ""}
                {acAdvanced ? "Advanced" : ""}
                {acPro ? "Pro" : ""} ({monYr === "mo" ? "monthly" : "yearly"})
              </p>
              <p onClick={() => changeDisplay("stepTwo")}>change</p>
            </div>
            <div>
              <p>${acArcade ? arAmount : acAdvanced ? adAmount : acPro ? proAmount : ''}/{monYr}</p>
            </div>
          </div>

                {addOnsSet.map((item, index) =>{
                    return(
                    <div key={index}>
                        <p>
                            {item}
                        </p>
                        <p>+${price[index]}/{monYr}</p>
                    </div>  
                    )  
                })}
        </div>
        <div className="summary-total">
          <p>Total (per {monYr === "mo" ? "month" : "year"})</p>
          <p>${totalPrice + (acArcade ? arAmount : acAdvanced ? adAmount : acPro ? proAmount : '')}/{monYr}</p>
        </div>
      </fieldset>
    </form>
  );
};
