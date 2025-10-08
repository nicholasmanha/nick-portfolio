import { useState } from "react";
import "./App.css";
import { CardDemo } from "./components/card-demo.tsx";
import { Card } from "./components/ui/card.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#161414] relative">
        <CardDemo />
      </div>
    </>
  );
}

export default App;
