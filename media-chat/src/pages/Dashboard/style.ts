import styled from "styled-components";

export const StyledUserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 25px;

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1 {
      font-family: "Inter";
      font-weight: 500;
      font-size: var( --font-size-16);
      color:var(--color-white);
    }

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
