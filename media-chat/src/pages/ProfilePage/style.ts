import styled from "styled-components";

export const StyledProfileDiv = styled.div`
  .header {
    width: 100%;
    height: 180px;
    background-color: rgba(94, 23, 235, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    .userName {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      h2 {
        color: var(--color-white);
        font-size: 32px;
        font-weight: 700;
        font-family: "Inter";
      }
    }

    .logoutIcon {
      cursor: pointer;
    }
  }

  .mainPageContainer {
    width: 100%;
    margin: 0 auto;
    padding: 55px;
    min-height: 100vh;

    .change {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .inicialPage {
        padding: 7px;
        width: 190px;
        height: 50px;
        background-color: #5e17eb;
        border-radius: var(--border-radius-15);

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          text-decoration: none;
          color: white;
          font-size: var(--font-size-20);
          font-family: "Inter";
          font-weight: 700;
        }
      }

      .editDiv {
        .userEdit {
          width: 180px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background-color: var(--color-primary-2);
          border: none;
          border-radius: var(--border-radius-15);

          p {
            font-size: var(--font-size-20);
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            color: var(--color-white);
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .change {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
