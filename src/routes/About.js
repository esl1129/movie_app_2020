import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className = "about__container">
            <span>
                React Movie Web Page
            </span>
            <span>
                - Woogie, 2020,12,10
            </span>
        </div>
    );
}

export default About;