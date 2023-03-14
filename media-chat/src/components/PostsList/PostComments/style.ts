import styled from "styled-components";

export const StyledPostComments = styled.div`
  position: relative;
  background-color: var(--grey-transparent-2);

  border-radius: var(--border-radius-8);

  padding: 1rem;

  width: 100%;

  ul {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    gap: 1rem;
  }

  ul > li {
    padding: 1rem;
    background-color: #353146;
    border-radius: var(--border-radius-8);

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      .user_name {
        font-size: var(--font-size-16);
        font-weight: var(--font-weight-700);
      }
    }

    span {
      color: var(--color-white);
      font-weight: var(--font-weight-800);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      .comment-button-like {
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border: none;

        svg {
          height: 1.5rem;
          width: 1.5rem;
          fill: var(--grey-0);
        }
      }
    }

    p {
      color: var(--color-white);
      font-size: var(--font-size-16);
      font-weight: var(--font-weight-400);
    }
  }

  .bttn_close {
    position: absolute;
    right: 5px;
    top: 2px;

    color: var(--grey-5);

    border: none;
    background-color: transparent;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;
