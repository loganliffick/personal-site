import moment from 'moment';

const Footer = () => (
  <footer>
    <p>{moment().format(' dddd, MMMM D')}</p>
    <button
      onClick={() => {
        console.log('does nothing');
      }}
    >
      Contact
    </button>
  </footer>
);

export default Footer;
