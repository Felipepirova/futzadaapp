import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --green: rgb(1, 248, 84);
    --grey-dark: rgb(61, 61, 53);
  }
`
