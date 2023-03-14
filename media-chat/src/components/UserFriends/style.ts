import styled from "styled-components";

export const StyledUserFriendDiv = styled.div`
  margin-top:100px;
  width: 100%;
  .userFriendsCardList{
   min-width:200px;
   overflow-x:scroll;
  }
  
 .followerTitle {
    font-family: "Inter";
    font-weight: 700;
    font-size: var(--font-size-24);
    color: var(--color-white);
  }

  .emptyText{
    font-size: var(--font-size-16);
      font-family: "Inter";
      font-weight: 700;
      color:var(--color-white);
      margin-top:20px;
  }
`;
