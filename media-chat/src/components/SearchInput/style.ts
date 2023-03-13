import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  width: 35%;
  border-radius: 8px;
  background-color: rgba(233, 236, 239, 0.05);

  input {
    width: 100%;
    border: none;
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--font-size-16);
    background-color: rgba(233, 236, 239, 0);
  }
  input:focus {
    outline: none;
  }

  :has(input:focus) {
    border: 2px solid  rgba(233, 236, 239, 0.05);
  }
`;
