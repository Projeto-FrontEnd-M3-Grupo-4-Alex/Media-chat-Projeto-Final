import styled from "styled-components";

export const StyledList = styled.li`
  width: 100%;
  height: 280px;
  position: relative;
  background-color: var(--grey-transparent);
  border-radius: var(--border-radius-8);
  padding: 40px;
  margin-top: 40px;

  .userPostDiv {
    display: flex;
    gap: 30px;

    .userAddedImage {
      width: 100px;
      height: 150px;
      border-radius: var(--border-radius-20);
    }

    p {
      font-family: "Inter";
      font-weight: 400;
      font-size: var(--font-size-20);
      color: var(--color-white);
      margin-top: 10px;
    }
  }

  .userPostDeleteBttn {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: var(--grey-transparent);
    border: none;
    color: var(--color-white);
  }
  a {
    background-color: var(--color-primary-2);
    color: var(--color-white);
    border: none;
    border-radius: var(--border-radius-15);
    font-family: "Inter";
    font-weight: 600;
    font-size: var(--fontsize-20);
    text-decoration: none;
    padding: 10px 20px;
    margin-left: 110px;
    margin-top: 20px;
  }

  @media (min-width: 900px) {
    width: 38%;
    a {
      margin-left: 280px;
    }
  }
`;
