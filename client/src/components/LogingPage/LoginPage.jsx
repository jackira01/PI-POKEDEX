import React from "react";

export default function LoginPage() {
  const googleLogin = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <div>
        <button onClick={googleLogin}>Login Google</button>
      </div>
    </div>
  );
}
