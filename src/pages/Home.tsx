import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import { Icon } from "@/components/SkillIcon";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import React from "react";

function Home() {
  return (
    <>
      <ProjectCard>
        <Icon icon="Amazon" size="small" />
        <Icon icon="TypeScript" />
        <Text variant="h1"> Full-Stack Software Engineer</Text>
        <Text className="text-[40px] font-normal">
          {" "}
          Full-Stack Software Engineer
        </Text>
        <Skill>React</Skill>
        <Button variant="default">SEE MORE</Button>
        <Button variant="outline">CODE</Button>
      </ProjectCard>
    </>
  );
}

export default Home;
