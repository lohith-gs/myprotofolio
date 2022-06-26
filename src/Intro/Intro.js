import React,{useState,useEffect} from "react";
import Typewriter from "typewriter-effect";

import "./Intro.css"
 const Intro=()=>{
    const text_shuffle=['Namaste!','Hello!','Yo!'];
    const [greet,setGreet]=useState(0);

    useEffect(() => {
        const timer = () => {
          setGreet(prevIndex => {
            if(prevIndex === text_shuffle.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer, 2000);
        
        
        return () => { clearInterval(timer); }
      });

    
    return(
        <div className="intro-main">
            <p className="greet-style">{text_shuffle[greet]}</p>
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