import styled from "styled-components"

export const StyledPostComments = styled.div`
 
position: relative;
  background-color: var(--grey-transparent-2);

  border-radius: var(--border-radius-8);

  padding: 1rem;

  width: 100%;

  ul > li {
    div {
      display: flex;
      flex-direction: row;
      gap: 16px;
      img {
        width: 32px;
        height: 32px;
      }
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
