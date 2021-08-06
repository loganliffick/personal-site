import styled from 'styled-components';

const A = styled.a`
  border: 1px solid currentColor;
  border-radius: 100px;
  box-shadow: 3px 3px 0px currentColor;
  font-size: 40px;
  letter-spacing: 0px;
  line-height: 40px;
  padding: 10px 32px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 0px currentColor;
  }

  @media only screen and (max-width: 560px) {
    box-shadow: 2px 2px 0px currentColor;
    font-size: 24px;
    line-height: 40px;
    padding: 8px 24px;
  }
`;

export default function Link(props) {
  return (
    <A href={props.url} target="_blank" rel="noopener">
      {props.name}
    </A>
  );
}
