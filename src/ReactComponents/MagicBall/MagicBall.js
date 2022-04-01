import React,{useState,useEffect} from "react";
import './MagicBall.css'
import DisplayedText from './DisplayedText'
export default function MagicBall() {
    const [ballAnimateState,setBallAnimateState] = useState(false);
    const [displayState,setDisplayState] = useState(false);
    useEffect(()=>{
        if(ballAnimateState){
            console.log(ballAnimateState);
            setTimeout(setBallAnimateState,1000,false);
            setTimeout(setDisplayState,100,false);
        }
    })
        return(
            <div className={ballAnimateState ? "MagicBall shakeBall" : "MagicBall"} onClick={()=>{setBallAnimateState(!ballAnimateState);setDisplayState(true) }}>
                <img draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Magic_eight_ball.png/480px-Magic_eight_ball.png"></img>
                <DisplayedText disp={displayState} />
            </div>
        )
    
}

/*
                <p className="Response hide">Optional Text</p>

*/