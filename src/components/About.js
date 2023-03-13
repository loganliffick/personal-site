import Link from 'next/link';

const About = () => (
  <>
    <p>
      Hey I’m Logan. Designer, builder, all-around creative. I’m the head of
      product and design at{' '}
      <Link
        href="https://makelog.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Makelog
      </Link>
      , previously{' '}
      <Link
        href="https://digitalocean.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        DigitalOcean
      </Link>
      ,{' '}
      <Link
        href="https://zondahome.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zonda
      </Link>
      , and{' '}
      <Link
        href="https://purplerockscissors.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        PRPL
      </Link>
      .
      <br />
      <br />I like to do all sorts of fun things. Thanks for stopping by!
    </p>
  </>
);

export default About;
