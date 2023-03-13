import styled from "styled-components"

export const StyleCommentForm = styled.form`
  align-items: center;
  background-color: #353146;

  padding: 1rem;

  border-radius: var(--border-radius-8);

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }

  input {
    background-color: #353146;
    width: 100%;
    border: none;
  }

  button {
    border: none;
    padding: 2px;
    border-radius: 5px;

  }
`
