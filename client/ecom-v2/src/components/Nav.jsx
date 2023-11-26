import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import "./nav.css";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Nav() {
  return (
    <>
      <NavLinks 
      links={[
        <Link key={1} className="nav-link text-dark" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-dark" to="/profilePage">
          Profile Page
        </Link>,
        <Link key={3} className="nav-link text-dark" to="/login">
        Login/LogOut
      </Link>,
      ]}
    />
    </>
  );
}

export default Nav;