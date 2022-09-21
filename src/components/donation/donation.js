import "./donation.css";
import Popup from "../popup/popup";
import React from "react";
import { useState } from "react";
import kids from "../images/kids.jpeg"

const Donation = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div className="photo">
        <h2>Donate</h2>
      </div>
      <div className="contt">
        <h1>Your Donation Will Provide...</h1>
        <div className="flexThree">
          <div className="squade">
            <h1>$50</h1>
            <p>could purchase a winter coat for one scholar</p>
          </div>
          <div className="squade">
            <h1>$150</h1>
            <p>
              could buy a set of school supplies for one scolar for an entire
              year
            </p>
          </div>
          <div className="squade">
            <h1>$250</h1>
            <p>
              would support the cost of academic celebrations, field lessons and
              awards
            </p>
          </div>
        </div>
        <div className="flexTwo">
          <div className="longSquade">
            <h1>$500</h1>
            <p>
              would make it possible to purchase additional ChromeBooks and
              iPads to enhace scholar learning
            </p>
          </div>
          <div className="longSquade">
            <h1>$1000</h1>
            <p>
              could cover the cost of Extended Learning Opportunity for one
              scholar for an entire year
            </p>
          </div>
        </div>
        <div className="select">
          <h2>Select an Amount</h2>
        </div>
        <div className="contCircles">
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>$100</h1>





            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="mainscreen">
      <div className="card">
        <div className="leftside">
          <img
            src={kids}
          />
        </div>
        <div className="rightside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" className="inputbox" placeholder="cardholder name" name="name" required />
            <p>Card Number</p>
            <input type="number" className="inputbox"  placeholder="card number" name="card_number" id="card_number" required />

            <p>Card Type</p>
            <select className="inputbox" name="card_type" placeholder="card type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div className="expcvv">

            <p className="expcvv_text">Expiry</p>
            <input type="date" className="inputbox" placeholder="experation date" name="exp_date" id="exp_date" required />

            <p className="expcvv_text2">CVV</p>
            <input type="password" className="inputbox" placeholder="cvv" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" className="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
</Popup>











          </div>
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>$150</h1>
          </div>
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>$250</h1>
          </div>
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>$500</h1>
          </div>
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>$1,000</h1>
          </div>
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>$5,000</h1>
          </div>
          <div className="circleprice" onClick={() => setButtonPopup(true)}>
            <h1>OTHER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donation;
