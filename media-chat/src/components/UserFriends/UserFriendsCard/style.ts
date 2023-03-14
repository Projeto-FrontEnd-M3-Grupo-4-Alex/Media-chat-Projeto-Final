import styled from "styled-components";

export const StyledUserFriendCardDiv = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  background-color: var(--grey-transparent);
  padding: 30px;
  border-radius: var(--border-radius-8);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .userInfoDivision {
    display: flex;
    align-items: center;
    gap: 20px;
    h3 {
      font-family: "Inter";
      font-weight: 700;
      font-size: var(--font-size-24);
      color: var(--color-white);
    }

    .followUserImage {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    h3 {
      font-family: "Inter";
      font-weight: 700;
      font-size: var(--font-size-24);
      color: var(--color-white);
    }
  }
  button {
    width: 10rem;
    height: 2rem;
    background-color: var(--color-primary-1);
    color: var(--color-white);
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--font-size-14);
    border-radius: var(--border-radius-8);
    border: none;
  }
  @media (min-width: 900px) {
    width: 29%;
  }
`;
