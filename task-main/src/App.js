import "./App.css";
import React from "react";
import Hero from "./components/hero/hero";
import Header from "./components/header/header";
import NewCollection from "./components/new-collection/new-collection";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NewCollection />
    </div>
  );
}

export default App;
