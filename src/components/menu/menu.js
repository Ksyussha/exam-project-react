import { useState, useRef } from "react";
const Menu = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
  };
  return (
    <>
      <div className="menu">
        <ul>
          <li onClick={onButtonClick}>about us |</li>
          <li onClick={onButtonClick}> programs |</li>
          <li onClick={onButtonClick}> donation </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
