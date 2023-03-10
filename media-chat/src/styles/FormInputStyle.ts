import styled from "styled-components";

export const FormInputStyle = styled.form`

display: flex;
flex-direction: column;
gap: 1rem;

input{
  
}

input{
    padding: 12px 0px;
    align-items: center;
}

#bttn_submit{
    background-color: var(--color-primary-2);
 

    color: var(--color-white);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-600);

    padding: 12px;

    border: 1px solid var(--color-primary-2);
    border-radius: var(--border-radius-50);


&:hover{
  
    background-color: transparent;
}
}
`