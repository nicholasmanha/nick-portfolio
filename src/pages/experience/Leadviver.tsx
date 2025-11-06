import HorizontalMasonryGrid from "@/components/HorizontalMasonryGrid";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import leadviver2 from "@/assets/leadviver2.png";
import leadviver3 from "@/assets/leadviver3.png";
import leadviver4 from "@/assets/leadviver4.png";
import leadviver5 from "@/assets/leadviver5.png";

function Leadviver() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              Web{" "}
            </Text>
            Software Engineer
          </Text>
          <Text variant="h4">Terence Davis & Associates</Text>
          <Text>May 2024 - Aug 2024</Text>
          <div className="flex mt-4 gap-4">
            <Button
              link={"https://github.com/nicholasmanha/leadviver"}
              newTab
              variant="outline"
            >
              CODE
            </Button>
          </div>
        </div>
        <div className="mb-16">
          <Text variant="h2" emphasis className="mb-4">
            What I did
          </Text>
          <Text>
            I was a lead developer on a CRM software/platform for real estate
            investors to purchase “dead” leads from sellers & for lead owners to
            sell to investors.
          </Text>
          <div className="mb-8"></div>
          <div className="mb-8">
            <Text variant="h4">
              Primary{" "}
              <Text as="span" variant="h4" color="primary">
                Duties
              </Text>
            </Text>
            <div className="pl-2">
              <Text className="font-bold">
                1. <Text as="span">Requirements gathering</Text>
              </Text>
              <Text className="font-bold">
                2. <Text as="span">UI Design & architecture design</Text>
              </Text>
              <Text className="font-bold">
                3. <Text as="span">Frontend Development</Text>
              </Text>
              <Text className="font-bold">
                4. <Text as="span">Backend and database implementation</Text>
              </Text>
            </div>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Tasks{" "}
              <Text as="span" variant="h4" color="primary">
                Performed
              </Text>
            </Text>
            <div className="">
              <Text className="font-bold my-1">Requirements gathering</Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Gather end-user insights through interviews to identify
                    desired features and develop solid requirements for breaking
                    down development into discrete goals.
                  </Text>
                </li>
                <li>
                  <Text>
                    Document requirements into a structured document with common
                    Product Requirements Document (PRD) elements for a record of
                    software goals and scope.
                  </Text>
                </li>
                <li>
                  <Text>
                    Continually meet with end users via weekly discussions to
                    ensure project scope stays aligned with higher-level goals.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                UI Design & architecture design
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Design prototypes for UI using Figma for common user
                    roadmaps to eventually make the final GUI before
                    implementing it.
                  </Text>
                </li>
                <li>
                  <Text>
                    Discuss potential technologies to use for different
                    components with the team via research on common tools so
                    that the final product will mesh well together and will be
                    easily maintained.
                  </Text>
                </li>
                <li>
                  <Text>
                    Create a design document with architecture diagrams in Figma
                    to illustrate data flow and technology roles for a
                    high-level view of the software for adaptability to future
                    changes.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">Frontend Development</Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Develop a unified system for styling implementation using a
                    Tailwind theme framework for ease of consistent component
                    styling across multiple pages.
                  </Text>
                </li>
                <li>
                  <Text>
                    Make 12 custom GUI layout components using React and
                    Tailwind to fit the product UI requirements and support
                    modular design.
                  </Text>
                </li>
                <li>
                  <Text>
                    Connect functionality of frontend-facing components to
                    Amazon Web Services (AWS) backend by use of API calls with
                    NextJS and TypeScript to have backend functionality for
                    users.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Backend and database implementation
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Develop microservices for common tasks by creating
                    individual AWS Lambda functions for frontend and backend
                    services to use for modularity and scalability.
                  </Text>
                </li>
                <li>
                  <Text>
                    Provision three databases in various availability zones
                    using AWS Aurora for high availability and fault tolerance
                    for reliable data access.
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <Text variant="h2" emphasis className="mb-4">
            The Experience
          </Text>
          <div className="mb-8"></div>
          <div className="mb-8">
            <Text variant="h4">
              Technical{" "}
              <Text as="span" variant="h4" color="primary">
                Collaboration
              </Text>
            </Text>
            <Text>
              This experience allowed me to work with a small team in a technical way. It one of the first times I had been on a team where each had a strong background in development. I got to learn what it was like to use efficient continuous development and share ideas of the project architecture and design. It strengthened my ability to work with others on a complicated project, where collaboration and version control isn’t as simple as working alone. I learned to integrate other’s ideas and deliver feedback to others as well in order to drive towards a polished product. 
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Speaking{" "}
              <Text as="span" variant="h4" color="primary">
                with{" "}
              </Text>
              Stakeholders
            </Text>
            <Text>
              The project required that I meet with the stakeholder & founder of the project to determine requirements for the finished product. We met on a weekly basis for status reports on the development as well as to resolve any questions on features and implementation details. This experience strengthened my ability to communicate effectively with stakeholders, gather clear requirements, and adapt development decisions to align with project goals.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Developing{" "}
              <Text as="span" variant="h4" color="primary">
                Feedback
              </Text>
            </Text>
            <Text>
              Throughout the project, I also had the opportunity to develop and deliver feedback in a structured way. After each milestone, I prepared updates that highlighted both the progress made and areas where challenges arose. By presenting potential solutions alongside the issues, I was able to engage the stakeholder in collaborative problem-solving and ensure that expectations stayed aligned. This process helped me improve my ability to frame constructive feedback, balance technical details with clarity, and maintain open communication that supported the project’s overall success.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              New Technical{" "}
              <Text as="span" variant="h4" color="primary">
                Skills
              </Text>
            </Text>
            <Text>
              During the course of the project, I gained hands-on experience with several new technical tools and frameworks that expanded my skill set. I learned how to build scalable web applications using Next.js and styled them effectively through Tailwind theming. On the backend, I worked with AWS SAM to manage infrastructure as code and deployed serverless applications through Lambda functions. I also integrated authentication with AWS Cognito and implemented database solutions using AWS Aurora. These experiences not only gave me practical proficiency with modern development technologies but also taught me how to adapt quickly to new tools and apply them to solve real project requirements.
            </Text>
          </div>
          
            
          
        </div>
        <HorizontalMasonryGrid
          images={[
            { src: leadviver2}, // Shift up
            { src: leadviver3 }, // Custom position
            { src: leadviver4 }, // Default center
            { src: leadviver5 },
          ]}
        />
      </div>
    </>
  );
}

export default Leadviver;
