import "./programs.css";
import dogs from "../images/friends.jpg";
import trash from "../images/мусор.png";
import tree from "../images/tree.webp";
import Popup from "../popup/popup";
import React from "react";
import { useState } from "react";

const Programs = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className="body">
      <div className="kz">
      <h1>Able programs in Kazakhstan:</h1>
      </div>
      <div className="cards">
        <div className="prog prog1">
        <div className="wrapper">
     <button onClick={()=> setButtonPopup(true)} >click me</button>
</div>
<div>
<h1>greening the city</h1>
</div>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
<div className="txt-input">
    <div>
  <h3>leave the data for feedback</h3></div>
  <div className="forms">
  <input type="text" placeholder="your surname"></input>
  <input type="text" placeholder="your name"></input>
  <input type="text" placeholder="your email"></input>
  </div>
  </div>
</Popup>
        </div>
        <div className="prog prog2">
        <div class="wrapper">
        <button onClick={()=> setButtonPopup(true)}>click me</button>
</div>
<h1>cleaning of garbage</h1>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
  <div className="txt-input">
    <div>
  <h3>leave the data for feedback</h3></div>
  <div className="forms">
  <input type="text" placeholder="your surname"></input>
  <input type="text" placeholder="your name"></input>
  <input type="text" placeholder="your email"></input>
  </div>
  </div>
</Popup>
        </div>
        <div className="prog prog3">
        <div className="wrapper">
        <button onClick={()=> setButtonPopup(true)}>click me</button>
</div>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
<div className="txt-input">
    <div>
  <h3>leave the data for feedback</h3></div>
  <div className="forms">
  <input type="text" placeholder="your surname"></input>
  <input type="text" placeholder="your name"></input>
  <input type="text" placeholder="your email"></input>
  </div>
  </div>
</Popup>
          <h1>assistance to animal shelters</h1>
        </div>
      </div> 
    </div>
  );
};

export default Programs;
