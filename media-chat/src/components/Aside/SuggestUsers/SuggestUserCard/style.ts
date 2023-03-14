import styled from "styled-components";

export const StyledSuggestUsers = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
  padding: 0rem 1rem;
  box-sizing: border-box;

  h2 {
    font-size: var(--font-size-20);
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    max-width: 15em;

    li {
      min-width: 250px;
      max-width: 300px;
      height: 130px;
      padding: 1rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: var(--color-background);
      border-radius: var(--border-radius-5);

      .user__information {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        img {
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius-50);
        }
      }
      button {
        color: var(--grey-0);
        font-weight: var(--font-weight-700);
        background-color: var(--color-primary-1);
        border: 2px solid transparent;
        width: 40%;
        height: 1.4rem;
        border-radius: var(--border-radius-8);
        transition: 0.5s;

        :hover {
          background-color: transparent;
          border: 3px solid var(--color-primary-1);
          box-shadow: 0px 0px 5px 1px var(--color-primary-1);
        }
      }
    }
  }
  @media (min-width: 1024px) {
    width: 18em;
  }
`;
