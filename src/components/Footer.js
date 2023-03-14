import Link from 'next/link';
import moment from 'moment';
import { useEffect, useState, useRef } from 'react';

const Footer = () => {
  const [toggle, setToggle] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const button = buttonRef.current;

    const handleClick = (e) => {
      if (modal.contains(e.target) || button.contains(e.target)) {
      } else {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [toggle]);

  return (
    <footer>
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          ref={buttonRef}
        >
          Contact
        </button>
        <p>{moment().format(' dddd, MMMM D')}</p>
        <div className="modal" data-attribute={toggle} ref={modalRef}>
          <Link
            href="https://twitter.com/logan_liffick"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/loganliffick"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://read.cv/loganliffick"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read CV
          </Link>
          <Link
            href="mailto:hello@loganliffick.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
