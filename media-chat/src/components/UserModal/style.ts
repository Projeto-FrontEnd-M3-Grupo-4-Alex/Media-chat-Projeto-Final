import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  top: 74px;
  right: 350px;
  background-color: rgba(233, 236, 239, 0.05);
  border: none;
  border-radius: var(--border-radius-8);

  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
      font-family: "Inter";
      font-weight: 500;
      font-size: var(--font-size-16);
      color: var(--color-white);
    }

    .userImg {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }

  .userInfo {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .profileDiv {
      a {
        display: flex;
        align-items: center;
        gap: 20px;
        font-family: "Inter";
        font-weight: 600;
        font-size: 11px;
        color: var(--color-white);
        text-decoration: none;
      }
    }

    .logoutDiv {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;

      p {

        font-family: "Inter";
        font-weight: 600;
        font-size: 11px;
        color: var(--color-white);
      }
    }
  }
`;
