import { useState } from "react";
import LoginForm from "../components/loginForm";

function LoginPage() {
  return (
    <div>
      <LoginForm />
      {/* <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleInputChange}
          placeholder="Username"
        />  */}
    </div>
  );
}
export default LoginPage;
