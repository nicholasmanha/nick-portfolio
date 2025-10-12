import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import Text from "./components/ui/Text.tsx";
import Skill from "./components/Skill.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen relative flex justify-center items-center">
        <ProjectCard>
          <Text variant="h1"> Full-Stack Software Engineer</Text>
          <Text className="text-[40px] font-normal"> Full-Stack Software Engineer</Text>
          <Skill>React</Skill>
          <Button variant="default">SEE MORE</Button>
          <Button variant="outline">CODE</Button>
        </ProjectCard>
      </div>
    </>
  );
}

export default App;
