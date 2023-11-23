import { useState } from "react";

function LoginForm() {
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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          value={password}
          name="password"
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
