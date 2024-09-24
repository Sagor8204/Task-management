import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("Login");

  return (
    <div>
      <h1 className="text-3xl text-center py-5">
        You have to Login or Register.
      </h1>
      {activeTab === "Login" ? (
        <Login setActiveTab={setActiveTab} />
      ) : activeTab === "Register" ? (
        <Register setActiveTab={setActiveTab} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Auth;
