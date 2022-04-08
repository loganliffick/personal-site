import React, { useEffect } from 'react';

// const ArrowIcon = () => {
//   return (
//     <>
//       <svg
//         width="13"
//         height="13"
//         viewBox="0 0 13 13"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M1 12L12 1" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M12 11V1H2" stroke="currentColor" strokeWidth="1.5" />
//       </svg>
//     </>
//   );
// };

const ArrowBtn = () => {
  return (
    <>
      <div className="arrow-container">
        <svg
          className="arrow one"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 12L12 1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 11V1H2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg
          className="arrow two"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 12L12 1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 11V1H2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </>
  );
};

const Card = (props) => {
  // useEffect(() => {
  //   const vid = document.querySelector('video');
  //   vid.play();
  //   // vid.addEventListener('mouseover', () => {
  //   //   vid.play();
  //   // });

  //   // vid.addEventListener('mouseleave', () => {
  //   //   vid.pause();
  //   // });
  //   // const cardImage = document.querySelector('.card-img');
  //   // cardImage.style.background = 'url(' + props.src + ')';
  // }, []);

  return (
    <>
      <article className="card-container">
        <div
          {...props}
          className="card-img"
          // style={{
          //   background: 'url(' + props.src + ')',
          // }}
          // alt={props.alt}
        >
          <video autoPlay muted loop>
            <source src="./images/project.webm" type="video/webm"></source>
          </video>
        </div>
        <div className="card-content">
          <h3>{props.title}</h3>
          <ArrowBtn />
        </div>
      </article>
    </>
  );
};

export default Card;
