import moment from 'moment';

const Footer = () => (
  <footer>
    <div>
      <p>{moment().format(' dddd, MMMM D')}</p>
      <button
        onClick={() => {
          console.log('does nothing');
        }}
      >
        Contact
      </button>
    </div>
  </footer>
);

export default Footer;
