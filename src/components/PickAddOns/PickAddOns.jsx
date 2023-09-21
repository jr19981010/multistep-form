import { usePlan } from '../../HandlePlan';
import { usePickAddOns } from '../../HandlePickAddOns';
import './PickAddOns.css';

export const PickAddOns = () =>{
    const {monYr} = usePlan();
    const {onService, laStorage, cuProfile,
           handleOnService,
           handleLaStorage,
           handleCuProfile } = usePickAddOns();

           const setOnService = () =>{
            handleOnService(!onService);
        }
    
        const setLaStorage = () =>{
            handleLaStorage(!laStorage);
        }
    
        const setCuProfile = () =>{
            handleCuProfile(!cuProfile);
        }
    
return(
        <>
        
        <form className="pick-addons">
        <fieldset className="pick-addons">
            <legend>Pick add-ons</legend>
            <p>Add-ons help enhance your gaming experience</p>

            <div 
            className={`on-service item ${onService ? "active-addons" : ""}`}  
            onClick={setOnService}>
                <div>
                    <div>
                        <input 
                        type="checkbox" 
                        name="" 
                        id="" 
                        checked={onService}
                        onChange={setOnService} />
                    </div>
                    <div>
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                </div>
                <div>
                    <p>+${monYr === "mo" ? 1 : 10}/{monYr}</p>
                </div>
            </div>

            <div 
            className={`lar-storage item ${laStorage ? "active-addons" : ""}`} 
            onClick={setLaStorage}>
                <div>
                    <div>
                        <input 
                              type="checkbox" 
                              name="" 
                              id="" 
                              checked={laStorage}
                              onChange={setLaStorage} />
                    </div>
                    <div>
                        <p>Large storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                </div>
                <div>
                    <p>+${monYr === "mo" ? 2 : 20}/{monYr}</p>
                </div>
            </div>

            <div 
            className={`cus-profile item ${cuProfile ? "active-addons" : ""}`} 
            onClick={setCuProfile}>
                <div>
                    <div>
                        <input 
                              type="checkbox" 
                              name="" 
                              id="" 
                              checked={cuProfile}
                              onChange={setCuProfile} />
                    </div>
                    <div>
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                </div>
                <div>
                    <p>+${monYr === "mo" ? 2 : 20}/{monYr}</p>
                </div>
            </div>
           
        </fieldset>
        </form>
        
        </>
    )
}