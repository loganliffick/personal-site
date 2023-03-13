import Link from 'next/link';
import moment from 'moment';
import slugify from 'slugify';
import { useState, useEffect, useRef } from 'react';

const Journal = ({ posts }) => {
  const [toggle, setToggle] = useState(false);
  const journalRef = useRef(null);

  useEffect(() => {
    const journal = journalRef.current;

    if (toggle) {
      journal.style.maxHeight = posts.length * 92 + 172 + 'px';
    } else {
      journal.style.maxHeight = '480px';
    }
  }, [toggle]);

  return (
    <div className="journal_wrapper">
      <div className="journal" data-attribute={toggle} ref={journalRef}>
        <h2 className="title_small">Journal</h2>

        {posts?.map((result) => {
          let publishedTime = result.posted;
          let editedTime = result.edited;
          const dateFormat = (date) => {
            let relTime =
              moment().startOf('year') < moment(date)
                ? moment(date).format('MMMM D')
                : moment(date).format('MMMM D YYYY');

            return relTime;
          };

          return (
            <Link
              key={result.title}
              href={`/${slugify(result.title).toLowerCase()}`}
              className="entry"
            >
              <div className="content">
                <h3 className="title_mono">{result.title}</h3>
                <p>{dateFormat(publishedTime)}</p>
                {editedTime ? (
                  <p className="edit">revised {dateFormat(editedTime)}</p>
                ) : (
                  ''
                )}
              </div>
              <div className="arrows_container">
                <div className="arrow">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.264 11.5459C11.5655 11.8299 12.0401 11.8158 12.3242 11.5143L17.1022 6.44332C17.3772 6.15145 17.374 5.69489 17.0948 5.40696L12.3168 0.478268C12.0285 0.180865 11.5537 0.173495 11.2563 0.461807C10.9589 0.75012 10.9515 1.22494 11.2398 1.52234L14.7847 5.17899H1C0.585786 5.17899 0.25 5.51478 0.25 5.92899C0.25 6.34321 0.585786 6.67899 1 6.67899H14.8192L11.2325 10.4857C10.9484 10.7871 10.9625 11.2618 11.264 11.5459Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="arrow">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.264 11.5459C11.5655 11.8299 12.0401 11.8158 12.3242 11.5143L17.1022 6.44332C17.3772 6.15145 17.374 5.69489 17.0948 5.40696L12.3168 0.478268C12.0285 0.180865 11.5537 0.173495 11.2563 0.461807C10.9589 0.75012 10.9515 1.22494 11.2398 1.52234L14.7847 5.17899H1C0.585786 5.17899 0.25 5.51478 0.25 5.92899C0.25 6.34321 0.585786 6.67899 1 6.67899H14.8192L11.2325 10.4857C10.9484 10.7871 10.9625 11.2618 11.264 11.5459Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button
        data-attribute={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        View {toggle ? 'less' : 'more'}
      </button>
    </div>
  );
};

export default Journal;
