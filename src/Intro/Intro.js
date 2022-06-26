import React from "react";
import Typewriter from "typewriter-effect";

import "./Intro.css"
 const Intro=()=>{
    
    return(
        <div className="intro-main">
            <p className="greet-style">Hello!</p>
            <p className="name-style">I'm Lohith GS.</p>
            <div className="description">
                <Typewriter
                    options={{
                        strings: ['(dy/dx) to UI/UX', 'Full Stack Web Developer','Meme Creator'],
                        autoStart: true,
                        loop: true,
                      }}
                />
            </div>
        </div>
    )
 }

 export default Intro;