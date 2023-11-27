import { Link } from 'react-router-dom';
import NavLinks from './navLinks';
import "./nav.css";
import Auth from '../utils/auth'
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
      Auth.loggedIn (
      <Link key={4} className="nav-link text-dark" to="/cartPage">
         My Cart 
         </Link>
      ),
      ]}
    />
    </>
  );
}

export default Nav;