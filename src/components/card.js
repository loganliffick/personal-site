const Arrow = (props) => (
  <svg
    className={'arrow ' + props.class}
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 12L12 1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 11V1H2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ArrowBtn = () => (
  <div className="arrow-container">
    <Arrow class="one" />
    <Arrow class="two" />
  </div>
);

const Card = (props) => (
  <>
    <a className="card-container" href={props.link} target="_blank">
      <div {...props} className="card-img">
        <video autoPlay muted loop>
          <source src={props.video + '.webm'} type="video/webm"></source>
          <source src={props.video + '.mp4'} type="video/mp4"></source>
        </video>
      </div>
      <div className="card-content">
        <h3>{props.title}</h3>
        <ArrowBtn />
      </div>
    </a>
  </>
);

export default Card;
