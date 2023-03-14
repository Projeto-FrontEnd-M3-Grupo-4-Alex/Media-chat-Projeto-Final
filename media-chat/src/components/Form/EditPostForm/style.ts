import styled from "styled-components";

export const StyledEditPostForm = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  top: 0;
  right: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  div {
    background-color: var(--color-background);

    border-radius: var(--border-radius-8);
    max-width: 90%;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    position: relative;

    .edit-button-close_modal {
      position: absolute;
      top: 1%;
      right: 3%;
      width: 2rem;
      height: 2rem;
      font-size: var(--font-size-20);
      color: var(--grey-5);
      background-color: transparent;
      border: none;
    }

    h2 {
      margin-top: 2rem;
      color: var(--grey-0);
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      input {
        align-self: center;
      }

      legend {
        align-self: flex-start;
        margin-left: 3.7rem;
        color: var(--grey-0);
      }

      .buttons__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        button {
          width: 6rem;
          height: 2rem;
          border: none;
          border-radius: var(--border-radius-5);
          color: var(--grey-0);
          background-color: var(--color-primary-2);
          font-size: var(--font-size-16);
          font-weight: var(--font-weight-700);
        }

        .delete_post {
          background-color: var(--color-primary-1);
        }
      }
    }
  }
`;
