import { Link } from 'react-router-dom';
import {Nav, Modal, Tab} from 'react-bootstrap';
import NavLinks from './navLinks';
import { useState } from 'react';
import "./nav.css";
import Auth from '../utils/auth'
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function NavBar() {  

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLinks 
      links={[
        <Link key={1} className="nav-link text-dark" to="/">
          Home
        </Link>,
         Auth.loggedIn (
        <Link key={2} className="nav-link text-dark" to="/profilePage">
          Profile Page
        </Link>
         ),
        <Link key={3} className="nav-link text-dark" onClick={() => setShowModal(true)} >
        Login/LogOut
      </Link>,
      Auth.loggedIn (
      <Link key={4} className="nav-link text-dark" to="/cartPage">
         My Cart 
         </Link>
      ),
      
      ]}
    />
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default NavBar;