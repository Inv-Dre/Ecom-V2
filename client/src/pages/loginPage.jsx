import { useState } from 'react';

function LoginForm() {
      // State to store user credentials

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

      // Event handler for input changes
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the login submission here
    console.log('Logging in with:', credentials);
    // Reset the form after submission
    setCredentials({
      username: '',
      password: '',
    });
  };
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" value={username} name="username" />
            </form>
        </div>
    )
}