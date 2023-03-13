import styled from "styled-components";

export const StyledUserEditDiv = styled.div`
  width: 45%;
  height: 480px;
  border: 1px solid black;
  position: absolute;
  top: 230px;
  left: 375px;
  background-color: rgba(51, 42, 75, 0.7);
  border: none;
  border-radius: var(--border-radius-15);
  padding: 20px;
  h2 {
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--font-size-40);
    color: var(--color-primary-2);
    text-align: center;
  }
  .closeBttn {
    position: absolute;
    top: 28px;
    font-weight: 400;
    font-size: var(--font-size-32);
    background-color: rgba(51, 42, 75, 0%);
    color: var(--color-white);
    border: none;
  }

  form {
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: var(--border-radius-50);
      border: 2px solid var(--text-inputs-color);
      background-color: rgba(51, 42, 75, 0.7);
      color: var(--text-inputs-color);
      font-family: "Inter";
      font-weight: 400;
      font-size: var(--font-size-20);
    }
    p {
      color: red;
      font-size: var(--font-size-12);
      margin-top: 5px;
    }

    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;

      .updateBttn {
        width: 35%;
        height: 50px;
        font-family: "Inter";
        font-weight: 700;
        font-size: var(--font-size-24);
        background-color: var(--color-primary-2);
        border-radius: var(--border-radius-15);
        color: var(--color-white);
        border: none;
      }
      .deleteBttn {
        width: 38%;
        height: 50px;
        font-family: "Inter";
        font-weight: 700;
        font-size: var(--font-size-24);
        background-color: var(--color-primary-1);
        border:none;
        color:var(--color-white);
        border-radius: var(--border-radius-15);
      }
    }
  }

 
`;
