import { Link } from 'react-router-dom';
import NavLinks from './navLinks';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Nav() {
  return (
    <>
      <NavLinks
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Mariah Wear
        </Link>,
        <Link key={2} className="nav-link text-light" to="/slideShow">
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/login">
        Login
      </Link>,
      ]}
    />
    </>
  );
}

export default Nav;