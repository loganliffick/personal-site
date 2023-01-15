import Link from 'next/link';
import moment from 'moment';

const Navigation = (props) => {
  return (
    <nav>
      <p>
        Designer and creative engineer working with{' '}
        <Link
          href="https://digitalocean.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          DigitalOcean
        </Link>{' '}
        helping to bring life to brands, systems, and products. Previously with{' '}
        <Link
          href="https://zondahome.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zonda
        </Link>{' '}
        and{' '}
        <Link
          href="https://purplerockscissors.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          PRPL
        </Link>
        .
      </p>
      <p>Partly cloudy, chance of afternoon showers.</p>
      <p>{moment().format('MMMM D, YYYY')}</p>
    </nav>
  );
};

export default Navigation;
