const Section = ({ children, type }) => {
  return (
    <section className={type}>
      <div>{children}</div>
    </section>
  );
};

export default Section;
