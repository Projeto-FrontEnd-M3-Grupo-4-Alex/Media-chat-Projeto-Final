import styled from "styled-components"

export const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;
  padding: 0 2rem;

  min-height: 90vh;
  min-width: 375px;

  background-color: var(--color-background);

  .loginContainer,
  .registerContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 2rem;

    background-color: var(--grey-transparent);

    border-radius: var(--border-radius-8);
  }

  img {
    margin: 0 auto;
    width: 250px;
    height: 181px;
  }

  h2 {
    color: var(--color-primary-2);
    font-size: var(--font-size-36);
    font-weight: var(--font-weight-400);
  }

  p {
    text-align: center;

    color: var(--color-white);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-400);
  }

  a {
    text-align: center;
    text-decoration: none;

    padding: 8px 12px;

    border-radius: var(--border-radius-50);
    border: 1px solid var(--color-primary-2);
    background-color: transparent;

    color: var(--color-white);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-600);

    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-2);
    }
  }

  @media (min-width: 1200px) {
    .loginContainer,
    .registerContainer {
      padding: 0rem 5.5rem 2rem 5.5rem;
      width: 600px;
    }

    img {
      width: 310px;
      height: 218px;
    }
  }
  @media (min-width: 1400px) {
    .loginContainer,
    .registerContainer {
      padding: 1rem 5.5rem 2rem 5.5rem;
      width: 600px;
    }
    img {
      width: 380px;
      height: 218px;
    }
  }
`
