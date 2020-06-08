import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Cards";
import WorldTable from "./components/Worldtable";

export default function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <WorldTable />
    </div>
  );
}
