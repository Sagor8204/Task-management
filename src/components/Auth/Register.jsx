import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Register = ({ setActiveTab }) => {
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const email = data.email.value;
    const password = data.password.value;
    const phoneNumber = data.phone.value;

    if ((email, password, name, phoneNumber)) {
      createUser(email, password, name, phoneNumber)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="py-20">
      <h1 className="text-4xl text-center">Register</h1>

      <form className="max-w-[500px] mx-auto" onSubmit={handleSubmit}>
        <label className="text-sm mb-1">Name:</label>
        <input
          className="w-full border border-gray-500 outline-none p-2 rounded-md focus:border-blue-500 mb-2"
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <label className="text-sm mb-1">Email:</label>
        <input
          className="w-full border border-gray-500 outline-none p-2 rounded-md focus:border-blue-500 mb-2"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <label className="text-sm mb-1">Password:</label>
        <input
          className="w-full border border-gray-500 outline-none p-2 rounded-md focus:border-blue-500 mb-2"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <label className="text-sm mb-1">Contact Number:</label>
        <input
          className="w-full border border-gray-500 outline-none p-2 rounded-md focus:border-blue-500 mb-2"
          type="text"
          placeholder="Enter your number"
          name="phone"
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded-md my-2">
          Submit
        </button>

        <span className="text-sm text-center my-3 block">
          If you have an account? You can Logn the below button.
        </span>
        <button
          onClick={() => setActiveTab("Login")}
          className="bg-red-500 text-white w-full py-2 rounded-md my-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
