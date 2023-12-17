const Section = (props: { children?: React.ReactNode }) => {
  return (
    <section className="my-32 flex w-full items-center justify-center px-6 text-zinc-800 sm:px-10">
      <div className="w-full max-w-5xl">{props.children}</div>
    </section>
  );
};

export default Section;
