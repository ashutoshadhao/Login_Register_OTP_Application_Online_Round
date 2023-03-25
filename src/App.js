import React from "react";
import Otp from "./components/otp/Otp";
import Home from "./components/home/Home";
import SignUp from "./components/sign_up/SignUp";
import { Route, Routes } from "react-router";
import Error from "./components/error/Error";
import Success from "./components/success/Success";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
