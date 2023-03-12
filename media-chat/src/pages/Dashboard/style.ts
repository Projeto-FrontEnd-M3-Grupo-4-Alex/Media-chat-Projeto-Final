import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
`;

export const StyledUserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1 {
      font-size: 16px;
    }

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
`;
