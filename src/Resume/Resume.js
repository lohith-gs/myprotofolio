import React from "react";
import './Resume.css';
import file from './SriLohith_Resume.pdf';
const Resume=()=>{
    return(
        <div className="resume-block">
            <p className="resume-text" style={{paddingTop:"30px",paddingBottom:"10px"}}>Download My Resume</p>
            <p className="resume-text" style={{paddingBottom:"20px"}}>
                <a href={file} download style={{color:"#4a6163"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                </a>
            </p>
        </div>
    );
}

export default Resume;