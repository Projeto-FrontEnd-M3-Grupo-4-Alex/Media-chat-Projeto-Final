import styled from "styled-components";

export const StyledRecommendCard = styled.li`
  min-height: 262px;
  width: 90%;
  background-color: var(--color-background);
  border-radius: var(--border-radius-8);
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .post-content__container {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    img {
      height: 179px;
      max-width: 115px;
      border-radius: var(--border-radius-8);
    }

    p {
      color: var(--grey-0);
      font-size: var(--font-size-16);
      line-height: 150%;
      text-align: justify;
    }
  }

  a {
    text-decoration: none;
    text-align: center;
    color: var(--grey-0);
    align-self: flex-end;
    height: 34px;
    width: 93px;
    background-color: var(--color-primary-2);
    border-radius: var(--border-radius-8);
    padding: 0.4rem;
    box-sizing: border-box;
    font-weight: var(--font-weight-700);

    :hover {
      background-color: var(--color-hover);
    }
  }
`;
