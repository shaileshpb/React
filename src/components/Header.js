import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [buttonText, setButtonText] = useState("Login");
    return (
        <div className="header flex justify-between bg-amber-400 shadow-lg">
            <div className="logoContainer w-80">
                <img 
                    className="logo"
                    src={LOGO_URL}
                />  
            </div>
            <div>
                <h1>Rumi's Restaurant</h1>
            </div>
            <div className="navItems flex items-center ">
                <ul className="flex p-5 m-5">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4" >Contact</li>
                    <li className="px-4">Cart</li>
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