import styled from "styled-components"

export const StylePostModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: var(--grey-transparent);
  border-radius: var(--border-radius-8);

  padding: 1rem;

  #bttn_close {
    position: absolute;
    right: 10px;
    top: 8px;

    color: var(--grey-5);

    border: none;
    background-color: #2b273d;

    padding: 0.1rem 0.2rem;
    border-radius: var(--border-radius-5);
  }

  h2 {
    color: var(--color-white);
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-700);

    padding: 1rem;

    margin-bottom: 1.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    padding: 1.5rem 1rem;
  }

  input,
  textarea {
    background-color: var(--grey-transparent-2);
  }

  p {
    color: var(--grey-5);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-400);

    margin-top: 0.5rem;
  }

  #bttn_post {
    color: var(--color-white);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-400);

    background-color: var(--color-primary-2);

    width: 100px;

    align-self: flex-end;

    &:hover {
      background-color: var(--color-hover);
    }
  }
`
