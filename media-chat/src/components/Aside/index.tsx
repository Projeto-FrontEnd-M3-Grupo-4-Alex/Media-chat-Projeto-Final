import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { TopPartIcons } from "./TopPartIcons";

export function Aside() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="aside__container">
      <button className="menu__button" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoMdClose /> : <BiMenu />}
      </button>
      {showMenu ? (
        <div>
          <TopPartIcons />
        </div>
      ) : null}
      <TopPartIcons />
    </div>
  );
}
