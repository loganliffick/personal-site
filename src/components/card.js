const ArrowIcon = () => {
  return (
    <>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 12L12 1" stroke="currentColor" stroke-width="1.5" />
        <path d="M12 11V1H2" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <article className="card-container">
        <div
          {...props}
          className="card-img"
          style={{
            background: 'url(' + props.src + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          alt={props.alt}
        ></div>
        <div className="card-content">
          <p className="large">{props.title}</p>
          <ArrowIcon />
        </div>
      </article>
    </>
  );
};

export default Card;
