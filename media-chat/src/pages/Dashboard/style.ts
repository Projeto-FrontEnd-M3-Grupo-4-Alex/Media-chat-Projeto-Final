import styled from "styled-components";


export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;

  .aside__dashboard {
    position: absolute;
    z-index: 2;
    width: 90%;
  }

  .main__dashboard {
    width: 75%;
    margin-left: 10%;
  }

  @media (min-width: 1024px) {
    .main__dashboard {
      max-width: 90%;
      margin-left: 0;
    }

    .aside__dashboard {
      position: inherit;
      max-width: 400px;
    }
  }
`;

export const StyledUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.3rem;

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
    cursor: pointer;

    h1 {
      font-size: 16px;
      color: var(--grey-0);
      display: none;
    }

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    @media (min-width: 768px) {
      h1 {
        display: block;
      }
    }
  }
`;
