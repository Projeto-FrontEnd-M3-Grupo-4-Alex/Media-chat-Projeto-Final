import styled from "styled-components"

export const InputPasswordStyle = styled.div`


  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  

    border-radius: var(--border-radius-50);
    width: 100%;
    position: relative;
  }

  label {
    color: var(--text-inputs-color);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-400);
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 20px;
  }
`