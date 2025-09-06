import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [buttonText, setButtonText] = useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img 
                    className="logo"
                    src={LOGO_URL}
                />  
            </div>
            <div>
                <h1>Rumi's Restaurant</h1>
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="loginBttn" onClick={
                        () => {
                            if(buttonText === "Logout")
                                setButtonText("Login");
                            else
                                setButtonText("Logout");
                        }
                    }>{buttonText}</button>
                </ul> 
            </div>
        </div>
    )
};
export default Header;