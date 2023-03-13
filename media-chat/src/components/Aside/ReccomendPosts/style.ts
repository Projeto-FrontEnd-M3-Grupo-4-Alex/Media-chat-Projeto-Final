import styled from "styled-components";

export const StyledRecommendPosts = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  box-shadow: var(--grey-0) 0 5px 5px -5px;

  h2 {
    font-size: var(--font-size-20);
    color: var(--grey-0);
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-height: 538px;
    overflow-y: auto;
    margin-bottom: 3rem;
  }

  h3 {
    color: var(--grey-4);
    width: 90%;
    line-height: 150%;
    font-weight: var(--font-weight-500);
    font-size: var(--font-size-16);
    margin-bottom: 3rem;
  }
`;
