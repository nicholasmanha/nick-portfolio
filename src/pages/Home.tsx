import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import React from "react";

function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-surface mx-auto w-9/10 rounded-lg mb-8 border border-border overflow-hidden">
          <div className="max-w-screen-xl mx-auto pt-16 py-12 flex relative">
            <div className="w-1/2">
              <div className="mb-12">
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
              </div>
              <div className="flex my-6 gap-4">
                <Skill>React</Skill>
                <Skill>TypeScript</Skill>
                <Skill>Next.JS</Skill>
                <Skill>JavaScript</Skill>
                <Skill>Python</Skill>
              </div>
              <div className="flex gap-2">
                <Button variant="default">SEE EXPERIENCE</Button>
                <Button variant="outline">RESUME</Button>
                <Button variant="outline">CONTACT ME</Button>
              </div>
            </div>
            <div className="w-1/2 absolute right-[8%] bottom-0 h-full flex flex-col justify-end">
              <img
                src="src\assets\profile_adjustment.png"
                alt="coding illustration"
                className="max-h-full w-auto ml-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex w-1/2 mx-auto px-16 gap-16 items-center">
          <div className="h-px bg-foreground w-full"></div>
          <div className="flex flex-col items-center gap-6">
            <Text className="whitespace-nowrap">CONNECT WITH ME</Text>
            <div className="flex gap-6 justify-center">
              <Icon variant="ghost" size="medium" icon="GitHub"/>
              <Icon variant="ghost" size="medium" icon="Linkedin"/>
              <Icon variant="ghost" size="medium" icon="StackOverflow"/>
              <Icon variant="ghost" size="medium" icon="Handshake"/>
            </div>
          </div>
          <div className="h-px bg-foreground w-full"></div>
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
