import Link from 'next/link';
import moment from 'moment';
import slugify from 'slugify';

const Journal = ({ posts }) => (
  <div>
    {posts?.map((result) => {
      let publishedTime = result.posted;
      let editedTime = result.edited;
      const dateFormat = (props) => {
        let relTime =
          moment().subtract(7, 'day').dayOfYear() < moment(props).dayOfYear()
            ? moment(props).fromNow()
            : moment(props).format('LL');

        return relTime;
      };

      return (
        <div key={result.title}>
          <Link href={`/${slugify(result.title).toLowerCase()}`}>
            {result.title}
          </Link>
          <p>{dateFormat(publishedTime)}</p>
          <p>{editedTime ? 'edited ' + dateFormat(editedTime) : ''}</p>
        </div>
      );
    })}
  </div>
);

export default Journal;
