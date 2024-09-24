import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = ({ setActiveTab }) => {
  const { login, googleUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;

    if (email && password) {
      login(email, password)
        .then((res) => {
          console.log("login success");
        })
        .catch((err) => console.log("login failed"));
    }
  };

  return (
    <div className="py-20">
      <h1 className="text-4xl text-center">Login</h1>

      <div className="max-w-[500px] mx-auto">
        <form onSubmit={handleSubmit}>
          <label className="text-sm mb-1">Email:</label>
          <input
            className="w-full border border-gray-500 outline-none p-2 rounded-md focus:border-blue-500 mb-2"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label className="text-sm mb-1 ">Password:</label>
          <input
            className="w-full border border-gray-500 outline-none p-2 mb-5 rounded-md focus:border-blue-500"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <button className="bg-blue-500 text-white w-full py-2 rounded-md my-2">
            Submit
          </button>
        </form>
        <button
          onClick={() => googleUser()}
          className="bg-blue-500 text-white w-full py-2 rounded-md my-2"
        >
          Sign In With Google
        </button>
        <span className="text-sm text-center my-3 block">
          Or If you have no Account? <br /> You can Sign Up with below button.
        </span>
        <button
          onClick={() => setActiveTab("Register")}
          className="bg-red-500 text-white rounded-md w-full py-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
