import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [user, setuser] = useState(false);
  const [email, setemail] = useState(false);
  const [password, setpassword] = useState(false);

  async function getinfo(e) {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    const json = await axios.post("http://localhost:3001/signup", payload);
    setuser(json.data);
  }

  const handleUser = () => {
    console.log(user);
  };

  const handleChangeEmail = (e) => {
    setemail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setpassword(e.target.value);
  };

  return (
    <>
      {!user ? (
        <>
          <form id="create-user" onSubmit={(e) => getinfo(e)}>
            <input
              onChange={handleChangeEmail}
              type="email"
              name="email"
              placeholder="insert email"
            />
            <input
              onChange={handleChangePassword}
              type="password"
              name="password"
              placeholder="insert password"
            />
            <button type="submit">SIGN IN </button>
          </form>
        </>
      ) : user === "exist" ? (
        <>
          <form id="create-user" onSubmit={(e) => getinfo(e)}>
            <input
              onChange={handleChangeEmail}
              type="email"
              name="email"
              placeholder="insert email"
            />
            <input
              onChange={handleChangePassword}
              type="password"
              name="password"
              placeholder="insert password"
            />
            <button type="submit">SIGN UP</button>
          </form>
          <h1>USER EXIST. SIGN UP PLEASE </h1>
        </>
      ) : (
        <>
          <h1>welcome {user.email}</h1>
          <button onClick={handleUser}>user</button>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </>
      )}
    </>
  );
}
