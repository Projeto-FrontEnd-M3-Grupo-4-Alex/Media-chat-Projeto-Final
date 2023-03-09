import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  padding: 10px;
  position:absolute;
  top:55px;
  right:480px;

  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
      font-size: 16px;
    }

    .userImg {
      width: 42px;
      height: 42px;
    }
  }

  .userInfo {
    padding: 20px;
    display:flex;
    flex-direction:column;
    gap:20px;
    .profileDiv {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .logoutDiv {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`;
