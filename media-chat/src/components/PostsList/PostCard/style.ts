import styled from "styled-components"

export const StyledPostCard = styled.li`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  padding: 1.5rem 1.8rem 2rem 1.8rem;

  border-radius: var(--border-radius-8);
  background-color: var(--grey-transparent);

  .ContainerInfoUser {
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
  }

  .info_post {
    h2 {
      color: var(--color-white);
      text-transform: capitalize;

      margin-bottom: 1.5rem;


    }

    p {
      color: var(--color-white);
      font-size: var(--font-size-24);
      font-weight: var(--font-weight-400);

      margin-bottom: 0.5rem;
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
    gap: 16px;
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
`
