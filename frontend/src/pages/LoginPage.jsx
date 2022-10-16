import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [userInput, setUserInput] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let navigate = useNavigate();

  const mutation = useMutation(
    (body) => axios.post("http://127.0.0.1:8000/api/token/", body),
    {
      onSuccess(data) {
        console.log("Got success from backend", data);
        navigate("/");
      },
      onError(error) {
        alert("Got error from backend", error);
      },
    }
  );

  function callLogin(e) {
    e.preventDefault();
    mutation.mutate({ username: userInput, password: userPassword });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={userInput}
          placeholder="Enter Username"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={userPassword}
          placeholder="Enter Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <input type="submit" onClick={callLogin} />
      </form>
    </div>
  );
};

export default LoginPage;

