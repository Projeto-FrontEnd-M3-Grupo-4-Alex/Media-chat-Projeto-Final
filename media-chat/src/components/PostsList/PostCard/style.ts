import styled from "styled-components";

export const StyledPostCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 28px;

  .ContainerInfoUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    img {
      width: 42px;
      height: 42px;
    }
  }
  .ContainerInfoPost {
    img {
      width: 50%;
    }
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .ContainerButtonsPost {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;
