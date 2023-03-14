import styled from "styled-components";

export const StyledUserFriendCardDiv = styled.div`
  width: 100%;
  height: 163px;
  margin-top: 40px;
  background-color: var(--grey-transparent);
  padding: 30px;
  border-radius: var(--border-radius-8);
  .userInfoDivision {
    display: flex;
    align-items: center;
    gap: 20px;

    .followUserImage {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .nameDivision {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      h3 {
        font-family: "Inter";
        font-weight: 700;
        font-size: var(--font-size-24);
        color: var(--color-white);
      }

      button {
        width: 100%;
        height: 30px;
        background-color: var(--color-primary-1);
        color: var(--color-white);
        font-family: "Inter";
        font-weight: 400;
        font-size: var(--font-size-14);
        border-radius: var(--border-radius-8);
        border: none;
      }
    }
  }

  @media (min-width: 900px) {
    width: 29%;
    .userInfoDivision {
      gap: 40px;
    }
  }
`;
