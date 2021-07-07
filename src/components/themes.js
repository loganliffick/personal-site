import styled, { createGlobalStyle } from 'styled-components';

export const daydream = {
  primary: '#7000FF',
  secondary: '#E8D4CC',
  tertiary: '#1C0846',
};

export const gumtree = {
  primary: '#e654ff',
  secondary: '#00250d',
  tertiary: '#ff5151',
};

export const berry = {
  primary: '#49002C',
  secondary: '#AAA8FF',
  tertiary: '#004D48',
};

export const sorbet = {
  primary: '#00FF75',
  secondary: '#744280',
  tertiary: '#FFC4B7',
};

export const rockyRoad = {
  primary: '#320000',
  secondary: '#C7CFAF',
  tertiary: '#2400FF',
};

export const vineyard = {
  primary: '#A981FF',
  secondary: '#323300',
  tertiary: '#FFAD61',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.secondary};
  }
`;

const Button = styled.button`
  display: flex;
  position: fixed;
  bottom: 64px;
  right: 64px;
  transition: transform 0.1s ease;
  z-index: 10;

  &:hover {
    transform: rotate(45deg);
  }

  &:active {
    // transform: rotate(120deg);
    transform: scale(0.9);
  }

  @media only screen and (max-width: 600px) {
    bottom: 24px;
    right: 24px;
  }
`;

const LeftColor = styled.div`
  display: block;
  position: static;
  width: 24px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 100px 0 0 100px;
  background: ${(props) => props.theme.secondary};
`;

const RightColor = styled(LeftColor)`
  border-radius: 0 100px 100px 0;
  background: ${(props) => props.theme.primary};
`;

export default function Selector(props) {
  return (
    <Button onClick={props.onClick}>
      <LeftColor />
      <RightColor />
    </Button>
  );
}
