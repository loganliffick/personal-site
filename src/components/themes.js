import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  primary: '#0D0E2C',
  secondary: '#F1F1F1',
  tertiary: '#4F56FF',
};

export const darkTheme = {
  primary: '#BEC4D9',
  secondary: '#292E3E',
  tertiary: '#8489FF',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.secondary};
  }
`;
