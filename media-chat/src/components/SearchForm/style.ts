import styled from "styled-components";

export const StyledForm = styled.form`
  width: 60%;
  align-items: center;
  position: relative;

  input {
    height: 46px;
    width: 60%;
    background-color: var(--grey-transparent);
    border: 2px solid transparent;
    padding: 0rem 1rem;
    box-sizing: border-box;
    outline: none;
    color: var(--grey-0);
    border-radius: var(--border-radius-8);

    :focus {
      border: 2px solid var(--grey-0);
    }
  }
  button {
    position: absolute;
    width: 46px;
    height: 46px;
    background-color: transparent;
    border: none;
    top: 5%;
    right: 41%;
    svg {
      width: 2rem;
      height: 2rem;
      background-color: transparent;
      fill: var(--grey-0);
    }
  }
`;
