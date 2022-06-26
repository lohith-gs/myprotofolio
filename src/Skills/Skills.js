import React from "react";
import skills from './skills.jpg';
import './skills.css'
const Skills=()=>{
    const languages=["JavaScript","Java","Python","C/C++","SQL","GraphQL"];
    const libs=["React JS","Spring Boot","Flask"];
    const others=["Git","VScode","IntelliJ Idea"];
    return(
        <div className="skills-block">
            <div className="skills-text">
                    <p style={{fontSize:"25px",fontWeight:'600'}}>Skills</p>
                    <p className="skills-sub-text1">Programming languages</p>
                    <div className="skills-group">
                        {languages.map((item)=>{
                        return(
                            <p className="skills-sub-text2">{item}</p>
                        );
                        }       
                        )}
                </div>
                <p className="skills-sub-text1">Libraries/Frameworks</p>
                <div className="skills-group">
                        {libs.map((item)=>{
                        return(
                            <p className="skills-sub-text2">{item}</p>
                        );
                        }       
                        )}
                </div>
                <p className="skills-sub-text1">Version control/IDE's</p>
                <div className="skills-group">
                        {others.map((item)=>{
                        return(
                            <p className="skills-sub-text2">{item}</p>
                        );
                        }       
                        )}
                </div>
            </div>
            <img src={skills} className="skills-img" alt="skills"/>
        </div>
    );
}

export default Skills;