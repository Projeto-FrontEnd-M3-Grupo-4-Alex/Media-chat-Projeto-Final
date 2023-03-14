import styled from "styled-components";

export const StyledFavoriteCard = styled.li`
  width: 400px;
  min-width: 300px;
  max-width: 90%;
  height: fit-content;
  position: relative;
  background-color: var(--grey-transparent);
  border-radius: var(--border-radius-8);
  padding: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;

  .postInfo {
    display: flex;
    flex-direction: row;
    gap: 20px;
    max-width: 90%;

    img {
      width: 100px;
      height: 150px;
      border-radius: var(--border-radius-20);
    }
    .favoritePostContent {
      display: block;
      font-family: "Inter";
      font-weight: 400;
      font-size: var(--font-size-20);
      color: var(--color-white);
      margin-top: 10px;
      max-width: 50ch;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 150%;
    }
  }
  .postDeleteBttn {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: var(--grey-transparent);
    border: none;
    color: var(--color-white);
  }

  a {
    background-color: var(--color-primary-2);
    color: var(--color-white);
    border: none;
    border-radius: var(--border-radius-15);
    font-family: "Inter";
    font-weight: 600;
    font-size: var(--fontsize-20);
    text-decoration: none;
    width: 7rem;
    height: 2.3rem;
    text-align: center;
    padding: 0.4rem;
  }

  @media (min-width: 900px) {
    width: 38%;
  }
`;
