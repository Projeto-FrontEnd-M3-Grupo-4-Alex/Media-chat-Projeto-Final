import styled from "styled-components"


export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  position: relative;



  .aside__dashboard {
    position: absolute;
    z-index: 2;
    width: 400px;
    max-width: 100%;
  }

  .main__dashboard {
    width: 90%;
    margin-left: 10%;
  }

  .profile_post {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;

    padding: 1.5rem 1.8rem;

    margin-bottom: 2rem;

    border-radius: var(--border-radius-8);
    background-color: var(--grey-transparent);
  }

  #userImage {
    width: 50px;
    height: 50px;

    border-radius: 100%;
  }

  #bttn_post {
    color: var(--color-white);
    text-align: center;

    font-size: var(--font-size-16);
    font-weight: var(--font-weight-600);

    padding: 0.8rem 1rem;

    border: none;
    border-radius: var(--border-radius-20);

    background-color: var(--color-primary-2);

    &:hover {
      background-color: var(--color-hover);
    }
  }

  @media (min-width: 1024px) {
    padding-right: 10%;

    .main__dashboard {
      max-width: 80%;
      margin-left: 0;
    }

    .aside__dashboard {
      position: inherit;
      max-width: 400px;
    }
  }
`

export const StyledUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.3rem;
  width: 100%;

  .ContainerProfile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-family: "Inter";
      font-weight: 500;
      font-size: var( --font-size-16);
      color:var(--color-white);
    }

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
    }
    cursor: pointer;

    h1 {
      font-size: 16px;
      color: var(--grey-0);
      display: none;
    }

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .Profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .userInfo {
      background-color: var(--grey-transparent);
      width: 130px;
      height: fit-content;
      position: absolute;
      top: 120%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      box-sizing: border-box;

      div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        color: var(--grey-0);

        a {
          text-decoration: none;
          color: var(--grey-0);

          :hover {
            color: var(--grey-4);
          }
        }

        :hover {
          color: var(--grey-4);
        }
      }
    }

    @media (min-width: 768px) {
      h1 {
        display: block;
      }
    }
  }
`

export const StyledCreatePost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 2.3rem;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  button {
    height: 32px;
    border: none;
    border-radius: 8px;
    padding: 4px 16px;
    background-color: var(--color-primary-2);
    color: var(--grey-0);
  }
`
