import styled from "styled-components";

export const StyledHomePage = styled.div`
  min-width: 375px;

  background-color: var(--color-background);

  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 2rem 0rem;

  .page_navigation,
  .info_page {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
  }

  .page_navigation {
    gap: 2rem;
  }

  #logo {
    width: 250px;
    height: 181px;
  }

  #bttnAboutUs {
    background-color: var(--color-primary-1);
    color: var(--grey-0);

    font-size: var(--font-size-16);
    font-weight: var(--font-weight-800);

    text-decoration: none;
    text-align: center;

    padding: 0.4rem 1rem;

    border: 5px solid var(--color-primary-1);
    border-radius: var(--border-radius-50);

    margin-left: 35%;

    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: var(--color-white);
    }
  }

  #bttnGetStarted {
    background-color: transparent;

    padding: 1.2rem 2rem;

    color: var(--color-primary-2);
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-800);
    text-decoration: none;

    border: 6px solid #e4562c;
    border-radius: var(--border-radius-50);

    box-shadow: 0px 0px 12px 0px;

    cursor: pointer;

    &:hover {
      background-color: #e4562c;
      color: var(--color-white);
    }
  }

  .info_page {
    gap: 1.5rem;

    align-items: center;
    text-align: start;

    width: 200px;
  }

  h2 {
    color: var(--color-primary-2);
    font-size: var(--font-size-24);
    font-weight: var(--font-weight-400);
    width: 100%;
  }

  P {
    color: var(--color-white);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-500);

    line-height: 170%;
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    align-items: center;

    gap: 0rem;

    .page_navigation,
    .info_page {
      justify-content: center;
    }

    .info_page {
      width: 40%;
    }

    h2 {
      font-size: var(--font-size-64);
    }

    P {
      font-size: var(--font-size-32);
    }

    #logo {
      width: 580px;
      height: 362px;
    }

    #bttnAboutUs {
      font-size: var(--font-size-20);
      padding: 1rem 1.8rem;
    }

    #bttnGetStarted {
      font-size: var(--font-size-24);
      padding: 1.8rem 3rem;
    }
  }
`;
