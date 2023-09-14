import './PersonalInfo.css';

export const PersonalInfo = () =>{
    return(
        <>
        <form>
        <fieldset>
            <legend>Personal info</legend>
            <p>Please provide your name, email address, and phone number.</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='e.g. Stephen King'/>

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder='e.g. stephenking@lorem.com'/>

            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" id="phone-number" placeholder='phone number'/>
        </fieldset>
        </form>
        </>
    )
}