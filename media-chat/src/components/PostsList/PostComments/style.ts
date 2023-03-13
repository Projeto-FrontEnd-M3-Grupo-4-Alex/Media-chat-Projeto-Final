import styled from "styled-components"

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

      gap: 16px;

      img {
        width: 32px;
        height: 32px;

        border-radius: 100%;
      }

      .user_name {
        font-size: var(--font-size-14);
      }
    }

    span {
      color:  var(--color-white);
      font-weight: var(--font-weight-800);
      display: flex;
      gap: 1rem;
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
`
