import styled from "styled-components";

export const StyledPostDiv = styled.div`
  width: 100%;

  .userPostTitle {
    font-family: "Inter";
    font-weight: 700;
    font-size: var(--font-size-24);
    color: var(--color-white);
    margin-top: 120px;
  }

  h3 {
    font-size: var(--font-size-20);
    font-family: "Inter";
    font-weight: 700;
    color: var(--color-white);
    margin-top: 20px;
  }

  .userPosts {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
  }
`;
