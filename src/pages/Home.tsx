import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import ScrollArrow from "@/components/ScrollArrow";
import ReactEDM from "@/assets/ReactEDM.png";
import LeadViver from "@/assets/leadviver1.png";
import Banking from "@/assets/banking.png";
import experienceData from "@/assets/experience.json";
import projectsData from "@/assets/projects.json";
import Profile from "@/assets/profile_adjustment.webp";
import profile_compressed from "@/assets/profile_adjustment_compressed.webp";
import ScrollingSkills from "@/components/ScrollingSkills";

const imageMap: Record<string, string> = {
  ReactEDM: ReactEDM,
  LeadViver: LeadViver,
  Banking: Banking,
};

function Home() {
  return (
    <>
      {/* container for screen */}
      <div className="lg:h-screen">
        {/* greeting card */}
        <div className="bg-surface w-full lg:mx-auto lg:rounded-lg mb-8 lg:w-9/10 lg:mb-8 2xl:mb-16 lg:border border-border overflow-hidden">
          {/* greeting card content */}
          <div className="max-w-screen-xl w-full lg:w-9/10 mx-auto pt-10 lg:pt-16 pb-10 lg:py-12 px-6 lg:px-0 flex flex-col lg:flex-row relative">
            <div className="w-full lg:w-2/3 2xl:w-1/2">
              {/* title stuff */}
              <div className="mb-8 mt-4 lg:mt-0 text-center lg:text-left">
                <Text className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal">
                  Nicholas Manha
                </Text>
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
              <ScrollingSkills
                className="my-6"
                skills={[
                  "React",
                  "TypeScript",
                  "Next.JS",
                  "JavaScript",
                  "Python",
                ]}
              />
              <div className="justify-center lg:justify-start flex flex-wrap gap-2">
                <Button
                  onClick={() =>
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  variant="default"
                >
                  SEE EXPERIENCE{" "}
                </Button>
                {/* <Button variant="outline">RESUME</Button> */}
                <Button link="/contact" variant="outline">
                  CONTACT ME
                </Button>
              </div>
            </div>
            {/* Profile image: hidden on mobile/tablet, only shown lg and up */}
            <div className="flex w-full px-10 lg:px-0 lg:w-1/2 lg:absolute lg:right-[0%] 2xl:right-[6%] lg:bottom-0 lg:h-full flex-col justify-end order-first lg:order-none">
              <img
                src={Profile}
                alt={profile_compressed}
                className="max-h-full w-auto ml-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex w-4/5 lg:w-1/2 mx-auto px-0 sm:px-8 lg:px-16 sm:gap-8 gap-8 lg:gap-16 items-center">
          <div className="h-px bg-foreground w-full"></div>
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <Text className="whitespace-nowrap text-sm sm:text-base">
              CONNECT WITH ME
            </Text>
            <div className="flex gap-4 sm:gap-6 justify-center">
              <a
                className="flex-shrink-0"
                target="_blank"
                href="https://github.com/nicholasmanha"
              >
                <Icon variant="ghost" size="medium" icon="GitHub" />
              </a>
              <a
                className="flex-shrink-0"
                target="_blank"
                href="https://www.linkedin.com/in/nicholas-manha/"
              >
                <Icon variant="ghost" size="medium" icon="Linkedin" />
              </a>
              <a
                className="flex-shrink-0"
                target="_blank"
                href="https://stackoverflow.com/users/14644022/nicholasm"
              >
                <Icon variant="ghost" size="medium" icon="StackOverflow" />
              </a>
              <a
                className="flex-shrink-0"
                target="_blank"
                href="https://app.joinhandshake.com/profiles/nctxta"
              >
                <Icon variant="ghost" size="medium" icon="Handshake" />
              </a>
            </div>
          </div>
          <div className="h-px bg-foreground w-full"></div>
        </div>
        <ScrollArrow />
      </div>

      <div
        id="experience"
        className="w-full lg:w-9/10 2xl:max-w-screen-xl mx-auto px-4 lg:px-0"
      >
        <Text variant="h2" emphasis className="mx-0 sm:mx-4">
          Experience
        </Text>

        {experienceData.map((experience, index) => (
          <ProjectCard
            key={index}
            title={experience.title}
            location={experience.location}
            date={experience.date}
            skills={experience.skills}
            seeMore={experience.seeMore}
            docs={experience.docs}
            code={experience.code}
          >
            {experience.image && (
              <ProjectCard.Image>
                <img
                  src={imageMap[experience.image as keyof typeof imageMap]}
                  alt={`${experience.title} screenshot`}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </ProjectCard.Image>
            )}
            <ProjectCard.Description>
              {experience.description.whatIMade && (
                <div className="mb-4">
                  <Text variant="h4">
                    What I Made{" "}
                    {experience.description.showDemo && (
                      <Text variant="small" as="span">
                        see demo →
                      </Text>
                    )}
                  </Text>
                  {experience.description.whatIMade}
                </div>
              )}
              {experience.description.whatIDid && (
                <div className="mb-4">
                  <Text variant="h4">What I Did </Text>
                  {experience.description.whatIDid}
                </div>
              )}
              <Text variant="h4">What I Learned </Text>
              {experience.description.whatILearned}
            </ProjectCard.Description>
          </ProjectCard>
        ))}

        <Text variant="h2" emphasis className="mx-0 sm:mx-4 mt-12 lg:mt-20">
          Projects
        </Text>

        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            location={project.location}
            date={project.date}
            skills={project.skills}
            seeMore={project.seeMore}
            // docs={project.docs}
            code={project.code}
          >
            {project.image && (
              <ProjectCard.Image>
                <img
                  src={imageMap[project.image as keyof typeof imageMap]}
                  alt={`${project.title} screenshot`}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </ProjectCard.Image>
            )}
            <ProjectCard.Description>
              {project.description.whatIMade && (
                <div className="mb-4">
                  <Text variant="h4">
                    What I Made{" "}
                    {project.description.showDemo && (
                      <Text variant="small" as="span">
                        see demo →
                      </Text>
                    )}
                  </Text>
                  {project.description.whatIMade}
                </div>
              )}
              {/* {project.description.whatIDid && (
                <div className="mb-4">
                  <Text variant="h4">What I Did </Text>
                  {project.description.whatIDid}
                </div>
              )} */}
              <Text variant="h4">What I Learned </Text>
              {project.description.whatILearned}
            </ProjectCard.Description>
          </ProjectCard>
        ))}

        <Text variant="h2" emphasis className="mt-12 lg:mt-20">
          Skills & Frameworks
        </Text>
        <div className="flex gap-3 sm:gap-6 my-8 items-center min-w-0 content-start flex-wrap">
          <Icon icon="TypeScript" />
          <Icon icon="React" />
          <Icon icon="JavaScript" />
          <Icon icon="Python" />
          <Icon icon="Tailwind" />
          <Icon icon="ExpressJS" />
          <Icon icon="Java" />
          <Icon icon="Figma" />
          <Icon icon="Amazon" />
          <Icon icon="Aurora" />
          <Skill>Public Speaking</Skill>
          <Skill>Communication</Skill>
          <Skill>Problem Solving</Skill>
          <Skill>Customer Service</Skill>
          <Skill>CI/CD</Skill>
          <Skill>MongoDB</Skill>
          <Skill>SQL</Skill>
          <Skill>NextJS</Skill>
          <Skill>AWS</Skill>
          <Skill>Django</Skill>
          <Skill>NodeJS</Skill>
          <Skill>Git</Skill>
          <Skill>Kubernetes</Skill>
          <Skill>Docker</Skill>
          <Skill>Linux</Skill>
          <Skill>HTML/CSS</Skill>
        </div>
      </div>
    </>
  );
}

export default Home;