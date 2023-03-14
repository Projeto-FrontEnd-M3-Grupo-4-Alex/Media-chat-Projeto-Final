import styled from "styled-components";

export const StyledLikeButton = styled.button`
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    width: 3rem;
    font-size: var(--font-size-16);
    svg {
      height: 2rem;
      width: 1.5rem;
    }
  }
`;
