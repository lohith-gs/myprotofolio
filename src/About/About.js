import React from "react";
import './About.css';
import profile from './profle.webp';
const About=()=>{
    return(
        <div className="about-block">
            <img src={profile} className="img-style" alt="lohith"/>
            <div className='about-text'>
                <p style={{fontSize:"25px",fontWeight:'600'}}> About me </p>
                <p style={{fontSize:"20px",fontWeight:'400'}}> Hi I am Lohith, a 23 year old Web developer, and a meme creator living in Hyderabad, India. I am a Computer Science Engineer, currently working with TCS. </p>
            </div>
        </div>
    );
}

export default About;