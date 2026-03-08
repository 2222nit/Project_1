import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";

export default function App() {
  return (
    <div className="bg-black">
     <Navbar />
      <Hero />
      <Section1 />
    </div>
  );
}
