import MenuList from "./Menu-list";
import { useState } from "react";

export default function MenuItem({ item = [] }) {
  const [Display, setDisplay] = useState({});
// Function to handle toggling the submenu visibility
function handleTogglesubMenu(getCurrentname) {
  setDisplay(prevDisplay => ({
    ...prevDisplay,
    [getCurrentname]: !prevDisplay[getCurrentname],  // Toggle the visibility state for the given menu item
  }));
}
  console.log(Display);
  

  return (
    <li>
      <div>
        <p> {item.name} </p>
        {item && item.subMenu && item.subMenu.length ? (
          <span onClick={()=>handleTogglesubMenu(item.name)}>  { Display[item.name]?'-':'+'}</span>
        ) : null}
      </div>

      {item && item.subMenu && item.subMenu.length && Display[item.name]> 0 ? (
        <MenuList list={item.subMenu} />
      ) : null}
    </li>
  );
}


