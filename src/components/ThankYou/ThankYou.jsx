import  "./ThankYou.css";
import thanYouImage from "../../images/icon-thank-you.svg";

export const ThankYou = () =>{
    return(
        <div className="thank-you">
            <img src={thanYouImage} alt="Thank You!" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}