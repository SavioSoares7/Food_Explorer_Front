import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.BG_RED};
  }
`;
