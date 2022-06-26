import React from "react";
import './Projects.css';
const Projects=()=>{
    return(
        <div className="projects-block">
            <p className="projects-text">Personal Projects</p>
            <div className="projects-item">
                <p className="project-text1">Multi-label image classification model in Python</p>
                <p className="project-text2" style={{paddingLeft:"10px"}}>A classification model that predicts the movie
                        genres based on a movie poster given as input.</p>
                <p className="project-text2" style={{paddingBottom:"10px",paddingLeft:"10px"}}> Technologies: Python3.7, Keras, Pandas,Scikit-learn, Numpy.</p>
            </div>
            <div className="projects-item">
                <p className="project-text1">Research Paper</p>
                <p className="project-text2" style={{paddingBottom:"10px",paddingLeft:"10px"}}>I co-authored a paper in IEEE-ICNTET with the
title Attainment of course outcomes by using a
Python Tool for Outcome
Based Education
(APTOBE)" on September 7th and 8th, 2018 at
GRT Institute of Engineering & Technology 
Tiruttani
(TamilNadu).</p>
            </div>
            <div className="projects-item">
                <p className="project-text1">Ofcourse, this portofolio website</p>
            </div>

        </div>
    );
}

export default Projects;