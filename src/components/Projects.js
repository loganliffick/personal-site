import Link from 'next/link';

const Projects = () => (
  <div className="projects_grid">
    <Link
      href="https://makelog.com"
      target="_blank"
      rel="noopener noreferrer"
      className="a"
    >
      <h3 className="title_mono">Makelog</h3>
      <p>Your new changelog</p>
    </Link>
    <Link
      href="https://hacktoberfest.com"
      target="_blank"
      rel="noopener noreferrer"
      className="b"
    >
      <h3 className="title_mono">Hacktoberfest</h3>
      <p>Open source to the stars</p>
    </Link>
    <Link
      href="https://keyboredjs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="c"
    >
      <h3 className="title_mono">Keybored</h3>
      <p>Keyboard UI for react</p>
    </Link>
    <Link
      href="https://spltjs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="d"
    >
      <h3 className="title_mono">splt.js</h3>
      <p>Keyboard UI for react</p>
    </Link>
    <Link
      href="https://spltjs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="e"
    >
      <h3 className="title_mono">DigitalOcean</h3>
      <p>
        The <span>community-first</span> cloud
      </p>
    </Link>
  </div>
);

export default Projects;
