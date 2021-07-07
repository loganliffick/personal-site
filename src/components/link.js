import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const ArrowPath = styled.path`
  fill: ${(props) => props.theme.tertiary};
`;

const Svg = styled.svg`
  transition: transform 0.1s ease;
`;

const Container = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: calc(10px + 0.25vw);

  &:hover svg {
    transform: translate3d(10px, -5px, 0);
  }
`;

const P = styled.p`
  margin-right: 12px;
`;

export default function Link(props) {
  return (
    <li>
      <Container href={props.link} target="_blank" rel="noopener">
        <P>{props.name}</P>
        <Svg
          width="calc(13px + 0.3vw)"
          height="calc(13px + 0.3vw)"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ArrowPath
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 0.499999L12.5 0.5L12.5 11H11.5V2.20711L1.35355 12.3536L0.646447 11.6464L10.7929 1.5L2 1.5L2 0.499999Z"
            fill="#3529C0"
          />
        </Svg>
      </Container>
    </li>
  );
}
