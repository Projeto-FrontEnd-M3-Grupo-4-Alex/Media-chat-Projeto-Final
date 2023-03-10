import styled from "styled-components";

export const StyledProfileDiv = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    .userName {
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }
      h2 {
        font-size: 16px;
      }
    }
  }

  p {
    cursor: pointer;
  }

  .change {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .inicialPage {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .userEdit {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
`;
