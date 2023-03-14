import styled from "styled-components";

export const StyledPostCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 2rem;

  padding: 1.5rem 1.8rem 2rem 1.8rem;

  border-radius: var(--border-radius-8);
  background-color: var(--grey-transparent);

  .ContainerInfoUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      img {
        width: 42px;
        height: 42px;

        border-radius: 100%;
      }

      h2 {
        color: var(--color-white);
        font-size: var(--font-size-16);
        font-weight: var(--font-weight-500);
      }

      span {
        z-index: -1;
      }
    }

    .edit_post-button {
      height: 2rem;
      background-color: transparent;
      border: none;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--grey-0);
      }
    }
  }

  .info_post {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--grey-0);
    h2 {
      color: var(--color-white);
      text-transform: capitalize;
      font-size: var(--font-size-24);
      max-width: 90%;
    }

    p {
      color: var(--color-white);
      font-size: var(--font-size-18);
      font-weight: var(--font-weight-400);
      max-width: 90%;
      line-height: 150%;

      margin-bottom: 0.5rem;

      span {
        font-weight: var(--font-weight-700);
      }
    }
  }

  .ContainerInfoPost {
    display: flex;
    flex-direction: column;
    gap: 16px;

    img {
      width: 100%;
      border-radius: var(--border-radius-20);
    }
  }

  .ContainerButtonsPost {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    button {
      width: 2rem;
      height: 2rem;
      color: var(--grey-0);
      background-color: transparent;
      border: none;

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }

  @media (min-width: 1200px) {
    .ContainerInfoPost {
      flex-direction: row;

      img {
        width: 30%;
        border-radius: var(--border-radius-20);
      }
    }
  }
`;
