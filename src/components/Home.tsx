import React from "react";
import logo from "../logo.svg";

export default function Home() {
  return (
    <div>
      <h2>Everest</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Applications</h3>
      <p>DeFi</p>
      <h3>Infrastructure</h3>
      <h3>Services</h3>
      <h3>Content</h3>
    </div>
  );
}
