import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

function SignUpForm() {
    // State to store user credentials
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  // Event handler for input changes
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

       // Based on the input type, we set the state of either email, username, and password
       if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'username') {
        setUserName(inputValue);
      } else {
        setPassword(inputValue);
      }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
   if (!validateEmail(email) || !username) {
    setErrorMessage('Email or username is invalid');
    // We want to exit out of this code block if something is wrong so that the user can correct it
    return;
    // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  }
  if (!checkPassword(password)) {
    setErrorMessage(
      `Choose a more secure password for the account: ${username}`
    );
    return;
  }
  alert(`Hello ${username}`);
   // If everything goes according to plan, we want to clear out the input after a successful registration.
   setUserName('');
   setPassword('');
   setEmail('');
    };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInputChange} name="email"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
          name="password"
          onChange={handleInputChange}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remeber Me" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUpForm;