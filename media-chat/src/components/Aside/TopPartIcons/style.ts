import styled from "styled-components";

export const StyledTopAside = styled.div`
  padding: 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--grey-0) 0 5px 5px -5px;
  max-width: 100%;

  img {
    max-width: 216px;
  }

  div {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    width: 8rem;
    height: 2.5rem;
    border-radius: var(--border-radius-8);
    transition: 0.5s;

    h3 {
      color: var(--grey-0);
    }

    svg {
      fill: var(--grey-0);
    }

    :hover {
      background-color: var(--color-primary-2);
    }
  }

  a {
    margin-top: 1.5rem;
    display: flex;
    margin-bottom: 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    width: 8rem;
    height: 2.5rem;
    border-radius: var(--border-radius-8);
    transition: 0.5s;
    :hover {
      background-color: var(--color-primary-2);
    }
    h3 {
      color: var(--grey-0);
    }

    svg {
      fill: var(--grey-0);
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;
