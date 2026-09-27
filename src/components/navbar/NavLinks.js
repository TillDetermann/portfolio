import { BiEnvelope } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <Link
          to="//www.linkedin.com/in/till-determann-394230368"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="//github.com/TillDetermann"
          target="_blank"
          className="nav-link"
        >
          <BsGithub />
        </Link>
      </li>
      <li onClick={handleNav}>
        <a
          href="mailto:contact@till.determann.info"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
