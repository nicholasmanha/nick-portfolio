import profile from "@/assets/portfolio_profile.png";
import Text from "@/components/ui/Text";
import Skill from "@/components/Skill";

function About() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-32">
          <div className="flex gap-32">
            <div className="flex-1 min-w-0">
              <div className="pr-16">
                <img src={profile} className="w-full object-cover" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <Text variant="h1" className="">
                <Text variant="h1" color="primary" as="span">
                  Hi!
                </Text>{" "}
                I'm Nicholas
              </Text>
              <Text variant="h4" className="">
                Here’s a little bit about me
              </Text>
              <Text variant="p" className="">
                I am a computer science student with experience in software development, STEM education, and IT support. I have worked on a variety of projects ranging from web-based control systems for scientific instruments to full-stack applications for real estate and banking. My technical skills include Java, Python, JavaScript, TypeScript, React, Next.js, Tailwind, and AWS, and I have hands-on experience with both frontend and backend development, as well as serverless architecture and database management. <br />
                <br /> My background combines academic and professional experience in technology and education. I have tutored students in STEM subjects, helped manage campus IT systems at Shasta College, and completed internships where I collaborated with mentors and stakeholders to build user-focused software. These experiences have strengthened my problem-solving, communication, and teamwork skills, allowing me to develop technical solutions that meet real-world needs.{" "}
              </Text>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex-1 min-w-0">
              <Text variant="h2" emphasis className="mb-6">
                My Career So Far
              </Text>
              <Text variant="p" className="">
                So far in my career, I have focused on building practical experience through internships, academic projects, and leadership roles in software development. I have served as a lead developer on projects ranging from CRM platforms for real estate investors to web-based control systems for scientific instruments, gaining hands-on experience with full-stack development, cloud infrastructure, and scalable system design. These roles have allowed me to take projects from concept to completion, managing both technical implementation and collaboration with teams and stakeholders. <br />
                <br /> I have also gained experience in education and user support, tutoring students in STEM subjects and providing IT assistance at Shasta College. These roles have strengthened my ability to communicate complex technical concepts clearly, adapt to user needs, and ensure that technology solutions are both effective and accessible. Overall, my career so far has been a balance of technical development, user-focused problem solving, and collaborative teamwork.{" "}
              </Text>
            </div>

            <div className="flex-1 min-w-0 flex items-center">
              <div className="flex min-w-0 items-start content-start flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
