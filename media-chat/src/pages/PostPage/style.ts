import styled from "styled-components";

export const StyledPostPage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  width: 90%;
  padding: 1rem 0;
  box-sizing: border-box;

  a {
    text-decoration: none;
    align-self: flex-start;
    color: var(--grey-0);
    background-color: var(--color-primary-2);
    width: 90px;
    height: 2rem;
    text-align: center;
    padding: 0.4rem;
    box-sizing: border-box;
    border-radius: var(--border-radius-8);
    font-weight: var(--font-weight-700);

    :hover {
      background-color: var(--color-hover);
    }
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;
