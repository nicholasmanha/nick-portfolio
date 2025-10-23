import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import ScrollArrow from "@/components/ScrollArrow";
import ReactEDM from "@/assets/ReactEDM.png";
import LeadViver from "@/assets/leadviver.png";
import Banking from "@/assets/banking.png";
import experienceData from "@/assets/experience.json";
import projectsData from "@/assets/projects.json";
import Profile from "@/assets/profile_adjustment.png"

const imageMap: Record<string, string> = {
  ReactEDM: ReactEDM,
  LeadViver: LeadViver,
  Banking: Banking,
};

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
                <Skill variant="small">React</Skill>
                <Skill variant="small">TypeScript</Skill>
                <Skill variant="small">Next.JS</Skill>
                <Skill variant="small">JavaScript</Skill>
                <Skill variant="small">Python</Skill>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
  variant="default">SEE EXPERIENCE </Button>
                {/* <Button variant="outline">RESUME</Button> */}
                <Button link="/contact" variant="outline">CONTACT ME</Button>
              </div>
            </div>
            <div className="w-1/2 absolute right-[8%] bottom-0 h-full flex flex-col justify-end">
              <img
                src={Profile}
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
              <a className="flex-shrink-0" target="_blank" href="https://github.com/nicholasmanha"><Icon variant="ghost" size="medium" icon="GitHub" /></a>
              <a className="flex-shrink-0" target="_blank" href="https://www.linkedin.com/in/nicholas-manha/"><Icon variant="ghost" size="medium" icon="Linkedin" /></a>
              <a className="flex-shrink-0" target="_blank" href="https://stackoverflow.com/users/14644022/nicholasm"><Icon variant="ghost" size="medium" icon="StackOverflow" /></a>
              <a className="flex-shrink-0" target="_blank" href="https://app.joinhandshake.com/profiles/nctxta"><Icon variant="ghost" size="medium" icon="Handshake" /></a>
            </div>
          </div>
          <div className="h-px bg-foreground w-full"></div>
        </div>
        <ScrollArrow />
      </div>

      <div id="experience" className="max-w-screen-xl mx-auto">
        <Text variant="h2" emphasis className="mx-4">
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
                  className="rounded-lg"
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

        <Text variant="h2" emphasis className="mx-4 mt-20">
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
                  className="rounded-lg"
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

        <Text variant="h2" emphasis className="mt-20">
          Skills & Frameworks
        </Text>
        <div className="flex gap-6 my-8 items-center min-w-0 content-start flex-wrap">
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
