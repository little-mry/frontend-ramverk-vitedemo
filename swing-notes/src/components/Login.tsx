import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setLoginUser, setUsername}: {setLoginUser: React.Dispatch<React.SetStateAction<boolean>>; setUsername: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();

  function userInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
    
  }

  function login(e: React.FormEvent) {
    e.preventDefault()
    setLoginUser(true);
    navigate("/overview");
  }

  return (
    <>
      <form className="username-login__form" onSubmit={login}>
        <input
          type="text"
          className="username__input"
          placeholder="Fyll i användarnamn"
          onChange={userInput}
        />
        <button className="username__btn" type="submit">
          Logga in
        </button>
      </form>
    </>
  );
};

export default Login;
