import React from "react";
import "./popupCard.css"

function PopupCard(props){
    return(props.trigger) ? ( 
    <div className="popup">
        <div className="popup-inner">
        <button className="close-btnCard" onClick={() => props.setTrigger(false)}> Check Out</button>
        {props.children}
        </div>
        </div>
    ) : "";
}
export default PopupCard