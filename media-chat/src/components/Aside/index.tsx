import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { StyledAside, StyledDivAside } from "./style";
import { SuggestUsersList } from "./SuggestUsers";
import { TopPartIcons } from "./TopPartIcons";

export function Aside() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledDivAside>
      <button className="menu__button" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoMdClose /> : <BiMenu />}
      </button>

      {showMenu ? (
        <StyledAside className="mobile__aside">
          <div>
            <TopPartIcons />
            <SuggestUsersList />
          </div>
        </StyledAside>
      ) : null}

      <div className="aside__container--desktop">
        <StyledAside>
          <div className="desktop__aside">
            <TopPartIcons />
            <SuggestUsersList />
          </div>
        </StyledAside>
      </div>
    </StyledDivAside>
  );
}
