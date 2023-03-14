import styled from "styled-components";

export const StyleCommentForm = styled.form`
  align-items: center;
  background-color: #353146;

  padding: 1rem;

  border-radius: var(--border-radius-8);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  input {
    background-color: #353146;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: var(--grey-0);
  }

  button {
    border: none;
    padding: 2px;
    border-radius: 5px;
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    svg {
      fill: var(--grey-0);
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
