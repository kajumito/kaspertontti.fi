import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body{
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  ::-webkit-scrollbar {
    background:#252525;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: #454545; 
    border-radius: 5px;
  }
`
