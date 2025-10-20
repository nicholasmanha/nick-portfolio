import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import React from "react";
import ScrollArrow from "@/components/ScrollArrow";
import ReactEDM from "@/assets/ReactEDM.png";

function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-surface mx-auto w-9/10 rounded-lg mb-16 border border-border overflow-hidden">
          <div className="max-w-screen-xl mx-auto pt-16 py-12 flex relative">
            <div className="w-1/2">
              <div className="mb-8">
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
              <Icon variant="ghost" size="medium" icon="GitHub" />
              <Icon variant="ghost" size="medium" icon="Linkedin" />
              <Icon variant="ghost" size="medium" icon="StackOverflow" />
              <Icon variant="ghost" size="medium" icon="Handshake" />
            </div>
          </div>
          <div className="h-px bg-foreground w-full"></div>
        </div>
        <ScrollArrow />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <Text variant="h2" emphasis className="mx-4">
          Experience
        </Text>
        <ProjectCard
          title="Software Engineer Intern"
          location="Lawrence Berkeley National Lab"
          date="June 2025 - Aug 2025"
          skills={[
            "TypeScript",
            "React",
            "JavaScript",
            "Python",
            "Figma",
            "Tailwind",
          ]}
          seeMore="https://example.com"
        >
          <ProjectCard.Image>
            <img
              src={ReactEDM}
              alt="Project screenshot"
              className="rounded-lg"
            />
          </ProjectCard.Image>
          <ProjectCard.Description>
            <div className="mb-4">
              <Text variant="h4">
                What I Made{" "}
                <Text variant="small" as="span">
                  see demo →
                </Text>
              </Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pretium vel sapien ut convallis. Sed vel ligula in nisl accumsan
              vestibulum. Sed maximus lectus sit amet quam scelerisque molestie.
              Pellentesque non lorem nibh. Donec in fermentum ligula. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Maecenas feugiat libero eget ex mollis
              viverra. Quisque mi purus, venenatis lobortis lorem nibh. Donec in
              fermentum ligula. Class aptent taciti
            </div>
            <Text variant="h4">What I Learned </Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
            vel sapien ut convallis. Sed vel ligula in nisl accumsan vestibulum.
            Sed maximus lectus sit amet quam scelerisque molestie. Pellentesque
            non lorem nibh. Donec in fermentum ligula. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Maecenas feugiat libero eget ex mollis vive.
          </ProjectCard.Description>
        </ProjectCard>
      </div>
    </>
  );
}

export default Home;
