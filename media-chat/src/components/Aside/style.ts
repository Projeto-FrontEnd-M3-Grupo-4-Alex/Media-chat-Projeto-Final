import styled from "styled-components";

export const StyledAside = styled.div`
  background-color: var(--grey-transparent);
  padding: 2rem;
  box-sizing: border-box;
  height: fit-content;
  border-radius: var(--border-radius-8);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: absolute;
  max-width: 90%;

  @media (min-width: 1024px) {
    position: inherit;
    width: 400px;
  }
`;

export const StyledDivAside = styled.div`
  width: 100%;
  .menu__button {
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    position: absolute;
    z-index: 2;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: var(--grey-0);
    }
  }
  .aside__container--desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    .aside__container--desktop {
      display: flex;
      flex-direction: column;
    }
    .menu__button {
      display: none;
    }
    .mobile__aside {
      display: none;
    }
  }
`;
