import React, { useState } from "react";
import './Art.css';
import Img1 from './IMG1.jpg'
import Img2 from './IMG2.jpg'
import Img3 from './IMG3.jpg'
import Img4 from './IMG4.jpg'
import Img5 from './IMG5.jpg'
const Art=()=>{
    const imgs=[Img1,Img2,Img3,Img4,Img5];
    const [index,setIndex]=useState(0);

    const nextClick=()=>{
        
            if(index===4){
                setIndex(0);
            }
            else{
                setIndex(index+1);
            }
        
    }

    const prevClick=()=>{
        if(index===0){
            setIndex(4);
        }
        else{
            setIndex(index-1);
        }
    }
    return(
        <div className="art-block">
            <p style={{paddingTop:"35px"}}>Some of my sketches...(okay, my only sketches)</p>
            <div className="slides-block">
                <p style={{alignSelf:"center",marginRight:"120px"}} onClick={()=>nextClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </p>
                <img src={imgs[index]} className="art-img-style" alt="sketches"/>
                <p style={{alignSelf:"center",marginLeft:"120px"}} onClick={()=>prevClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </p>

            </div>
        </div>
    );
}

export default Art;