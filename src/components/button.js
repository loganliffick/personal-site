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

// const A = styled.a`
//   // border: 1px solid currentColor;
//   border-radius: 100px;
//   //box-shadow: 4px 4px 0px currentColor;
//   font-size: 40px;
//   letter-spacing: 0px;
//   line-height: 40px;
//   padding: 10px 32px;
//   transition: all 0.2s ease;
//   position: relative;

//   &::before {
//     content: '';
//     background: #292e3e;
//     border: 1px solid currentColor;
//     border-radius: 100px;
//     height: 100%;
//     left: 0;
//     position: absolute;
//     top: 0;
//     transition: inherit;
//     width: 100%;
//     z-index: -1;
//   }

//   &::after {
//     content: '';
//     background: currentColor;
//     border: 1px solid currentColor;
//     border-radius: 100px;
//     height: 100%;
//     left: 4px;
//     position: absolute;
//     top: 4px;
//     transition: inherit;
//     width: 100%;
//     z-index: -2;
//   }

//   &:hover {
//     &::before {
//       transform: translate(2px, 2px);
//     }

//     &::after {
//       transform: translate(-2px, -2px);
//     }

//     //box-shadow: 0px 0px 0px currentColor;
//   }

//   @media only screen and (max-width: 560px) {
//     box-shadow: 2px 2px 0px currentColor;
//     font-size: 24px;
//     line-height: 40px;
//     padding: 8px 24px;
//   }
// `;

export default function Button(props) {
  return (
    <A href={props.url} target="_blank" rel="noopener">
      {props.name}
    </A>
  );
}
