import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import React from "react";

function Home() {
  return (
    <>
      <div className="bg-surface mx-auto w-9/10 rounded-lg mb-8">
        <div className="max-w-screen-xl mx-auto py-20">
          <div className="w-1/2">
            <Text className="text-[40px] font-normal">Nicholas Manha</Text>
            <Text variant="h1">
              {" "}
              Software Engineer{" "}
              <Text variant="h1" color="primary" as="span">
                & Web Developer
              </Text>
            </Text>
            <Text variant="p">
              Experienced in building products from start to finish
            </Text>
            <div className="flex">
              <Skill>React</Skill>
              <Skill>TypeScript</Skill>
              <Skill>Next.JS</Skill>
              <Skill>JavaScript</Skill>
              <Skill>Python</Skill>
            </div>
            <div className="flex">
                <Button variant="default">SEE EXPERIENCE</Button>
                <Button variant="outline">RESUME</Button>
                <Button variant="outline">CONTACT ME</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProjectCard>
          <Icon icon="Python" variant="ghost" size="small" />
          <Icon icon="Handshake" variant="ghost-muted" size="small" />
          <Icon icon="Amazon" size="small" />
          <Icon icon="TypeScript" />
          <Text variant="h1">
            {" "}
            Full-Stack{" "}
            <Text variant="h1" color="primary" as="span">
              Software
            </Text>{" "}
            Engineer
          </Text>
          <Text className="text-[40px] font-normal"> Full-Stack Engineer</Text>
          <Skill>React</Skill>
          <Button variant="default">SEE MORE</Button>
          <Button variant="outline">CODE</Button>
        </ProjectCard>
      </div>
    </>
  );
}

export default Home;
