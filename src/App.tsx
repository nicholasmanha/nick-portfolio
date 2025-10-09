import { useState } from "react";
import "./App.css";
import { CardDemo } from "./components/card-demo.tsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen relative flex justify-center items-center">
        <Button variant="default" >
          SEE MORE

        </Button>
        <Button variant="outline" >
          CODE

        </Button>
      </div>
    </>
  );
}

export default App;
