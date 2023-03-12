import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root{
  --toastify-color-dark: #343B41;
  --toastify-icon-color-error:#E83F5B;
  --toastify-icon-color-success:#3FE864;
  --toastify-color-progress-success:#3FE864;
  --toastify-color-progress-error: #E83F5B;
 
  --color-primary-1:#5E17EB;
  --color-primary-2:#FE754D;
  --color-hover:#A94B30;
  --color-background:#16122A;
  --grey-transparent: #211D34;
  --text-inputs-color: #DEE2E6;

  --color-white: #ffffff;
  --grey-0:#F8F9FA;
  --grey-1:#F1F3F5;
  --grey-2:#E9ECEF;
  --grey-3:#DEE2E6;
  --grey-4:#CED4DA;
  --grey-5:#ADB5BD;
  --grey-6:#343A40;
  --grey-7:#212529;

  --font-size-10: 0.625rem;
  --font-size-12: 0.75rem;
  --font-size-14: 0.875rem;
  --font-size-16: 1rem;
  --font-size-18: 1.125rem;
  --font-size-20: 1.25rem;
  --font-size-22: 1.375rem;
  --font-size-24: 1.5rem;
  --font-size-26: 1.625rem;
  --font-size-30: 1.875rem;
  --font-size-32: 2rem;
  --font-size-36: 2.25rem;
  --font-size-38: 2.375rem;
  --font-size-40: 2.5rem;
  --font-size-42: 2.625rem;
  --font-size-64: 4rem;
  --font-size-80: 5rem;
  
  --font-weight-400: 400;
  --font-weight-500: 500;
  --font-weight-600: 600;
  --font-weight-700: 700;
  --font-weight-800: 800;
  
  --border-radius-4: 4px;
  --border-radius-5: 5px;
  --border-radius-8: 8px;
  --border-radius-50: 50px;
}

button{
    cursor: pointer;
  
}

body{
  font-family: 'Inter', sans-serif;
  background-color: var(--color-background);
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 30px;

}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-2);
    border-radius: 30px;

    :hover {
      background-color: var(--color-hover);
    }
}
`;
