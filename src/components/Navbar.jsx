import React, { useState, useEffect } from "react";
import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";

function Navbar() {

    const [isDark, setIsDark] = useState(false);

   useEffect(() => {
    if (isDark) {
        let body = document.getElementsByTagName("body")[0];
        body.classList.add("dark");
        let darkIcon = document.getElementsByClassName("dark-icon")[0];
        darkIcon.style.display = "none";
        let lightIcon = document.getElementsByClassName("light-icon")[0];
        lightIcon.style.display = "inline-block";

        
    } else {
        let lightIcon = document.getElementsByClassName("light-icon")[0];
        lightIcon.style.display = "none";
        let body = document.getElementsByTagName("body")[0];
        body.classList.remove("dark");
        let darkIcon = document.getElementsByClassName("dark-icon")[0];
        darkIcon.style.display = "inline-block";


        
        
    }
   }, [isDark])

    

    return (
        <div className="navbar">
        
        <h1>devfinder</h1>
        <div className="toggle">
         <p onClick={() => {
            setIsDark(false);
        }} className="light-icon">Light <img src={sunIcon} alt="Sun"/> </p>
        <p onClick={() => {
            setIsDark(true);
        }} className="dark-icon">Dark  <img src={moonIcon} alt="Moon"/></p> 
        
        </div>
        </div>
    )
}

export default Navbar;