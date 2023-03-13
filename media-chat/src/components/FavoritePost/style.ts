import styled from "styled-components";

export const StyledFavoritePostDiv = styled.div`
  width: 40%;
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-top:40px;
  gap:20px;
 
  li {
    width: 90%;
    height: 320px;
    position: relative;
    background-color:var(--grey-transparent);
    border-radius: var(--border-radius-8);
    padding:40px;
   
   .postInfo{
    display:flex;
    gap:30px;
   
   }
    img {
      width: 40%;
      height: 80%;
      border-radius:var(--border-radius-20);
    }
    .favoritePostContent {
      font-family: "Inter";
      font-weight: 400;
      font-size: var(--font-size-20);
      color:var(--color-white);
      margin-top:10px;
    }
    .postDeleteBttn {
      position: absolute;
      top: 8px;
      right: 20px;
      background-color:var(--grey-transparent);
      border:none;
      color:var(--color-white);
    }
    .moreAboutBttn {
      width: 130px;
      height: 48px;
      background-color: var(--color-primary-2);
      color: var(--color-white);
      border: none;
      border-radius: var(--border-radius-15);
      font-family: "Inter";
      font-weight: 600;
      font-size: var(--fontsize-20);
      margin-left:250px;
     
    }
  }
`;
