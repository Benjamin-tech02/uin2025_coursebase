import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import "./styles/layout.scss";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={signedIn ? <Welcome /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;