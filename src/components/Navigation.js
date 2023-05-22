import Link from 'next/link';
import Section from './Section';

const Navigation = ({ children }) => {
  return (
    <Section type="headline">
      <h1 className="title">
        <Link href="/">Logan Liffick</Link> {children}
      </h1>
    </Section>
  );
};

export default Navigation;
