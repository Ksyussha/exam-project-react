import "./programs.css";
import dogs from "../images/friends.jpg";
import trash from "../images/мусор.png";
import tree from "../images/tree.webp";

import React from "react";

const Programs = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="body">
      <h1>Able programs in Kazakhstan:</h1>
      <div className="wrapper">
        <div className="media">
          <div className="layer">
            <h1>очистка города</h1>
            <div className="App">
              <button onClick={() => setOpen(true)} className="open-modal-btn">
                {" "}
                записаться
              </button>
           
            </div>
            {open && (
                <div className="overlay animated">
                <div  className="modal">
                  <div className="column">
                  <h1 onClick={() => setOpen(false)} className={` overlay animated ${open ? 'show' : ''} `}>оставьте данные для обратной связи</h1>
                  <div>
                  <input type="text" placeholder="your surname" ></input>
                    <input type="text" placeholder="your name"></input>
                    <input type="text" placeholder="your email"></input>
                    <button className="sign"> записаться </button>
                    </div>
                    </div>
                </div>
              </div>
              )}
          </div>
          <img src={trash} />
        </div>
        <div className="media">
          <div className="layer">
            <h1>помощь приюту</h1>
            <div className="App">
              <button onClick={() => setOpen(true)} className="open-modal-btn">
                {" "}
                записаться
              </button>
            </div>
            {open && (
              <div className="overlay animated">
                <div  className="modal">
                  <div className="column">
                  <h1 onClick={() => setOpen(false)}>оставьте данные для обратной связи</h1>
                  <div>
                  <input type="text" placeholder="your surname" ></input>
                    <input type="text" placeholder="your name"></input>
                    <input type="text" placeholder="your email"></input>
                    <button className="sign"> записаться </button>
                    </div>
                    </div>
                </div>
              </div>
            )}
          </div>
          <img src={dogs} alt="" />
        </div>
        <div className="media">
          <div className="layer">
            <h1>озеленение участка</h1>
            <div className="App">
              <button onClick={() => setOpen(true)} className="open-modal-btn">
                {" "}
                записаться
              </button>
            </div>
            {open && (
              <div className="overlay animated">
              <div  className="modal">
                <div className="column">
                <h1 onClick={() => setOpen(false)}>оставьте данные для обратной связи</h1>
                <div>
                <input type="text" placeholder="your surname" ></input>
                  <input type="text" placeholder="your name"></input>
                  <input type="text" placeholder="your email"></input>
                  <button className="sign"> записаться </button>
                  </div>
                  </div>
              </div>
            </div>
            )}
          </div>
          <img src={tree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
