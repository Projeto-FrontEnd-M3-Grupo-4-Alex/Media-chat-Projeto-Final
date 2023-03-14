import styled from "styled-components";

export const StyledFavoritePostDiv = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
  overflow-x: scroll;

  li {
    width: 100%;
    height: 260px;
    position: relative;
    background-color: var(--grey-transparent);
    border-radius: var(--border-radius-8);
    padding: 30px;

    .postInfo {
      display: flex;
      gap: 20px;

      img {
        width: 100px;
        height: 150px;
        border-radius: var(--border-radius-20);
      }
      .favoritePostContent {
        font-family: "Inter";
        font-weight: 400;
        font-size: var(--font-size-16);
        color: var(--color-white);
        margin-top: 20px;
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
      font-size: var(--fontsize-14);
      margin-left: 115px;
      text-decoration: none;
      padding: 10px 20px;
      margin-top: 20px;
    }
  }

  @media (min-width: 900px) {
    li {
      .postInfo {
        gap: 40px;
        img {
          width: 130px;
          height: 180px;
        }
      }

      width: 38%;
      a {
        margin-left: 280px;
      }
    }
  }
`;
