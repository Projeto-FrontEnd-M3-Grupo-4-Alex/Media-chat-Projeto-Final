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
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.3rem;

  .ContainerProfile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
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
    .Profile {
      display: flex;
      flex.direction: row;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    @media (min-width: 768px) {
      h1 {
        display: block;
      }
    }
  }
`;

export const StyledCreatePost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 2.3rem;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  button {
    height: 32px;
    border: none;
    border-radius: 8px;
    padding: 4px 16px;
    background-color: var(--color-primary-2);
    color: var(--grey-0);
  }
`;
