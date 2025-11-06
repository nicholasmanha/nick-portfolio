import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";

function Tutor() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              Banking{" "}
            </Text>
            Software
          </Text>
          <Text variant="h4">Software Engineering @ CSU East Bay</Text>
          <Text>Aug 2024 - Dec 2024</Text>
          <div className="flex mt-4 gap-4">
            <Button
              link={"https://github.com/NFerreira98/Banking-System"}
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
            I was a part of a 4 person team that worked on a semester long
            software engineering project in which we built a banking application
            in Java. We started with developing a requirements document,
            ensuring that the project had definable features to mark progress.
            We then designed the software using UML class diagrams and use case
            documents showcasing how classes would mesh together for common
            tasks. I was in charge of team orchestration and building the Server
            and Client objects, as well as a custom request class for sending
            structured messages between server and client.
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
                1.{" "}
                <Text as="span"> Requirements gathering and documentation</Text>
              </Text>
              <Text className="font-bold">
                2. <Text as="span"> Software design and use case analysis</Text>
              </Text>
              <Text className="font-bold">
                3. <Text as="span">Team orchestration and coordination</Text>
              </Text>
              <Text className="font-bold">
                4. <Text as="span">Server–client implementation in Java</Text>
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
              <Text className="font-bold my-1">
                Requirements gathering and documentation
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Collaborated with the team to draft a requirements document
                    outlining core features and deliverables.
                  </Text>
                </li>
                <li>
                  <Text>
                    Defined measurable milestones to ensure steady progress and
                    clarity of scope.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Software design and use case analysis
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Designed UML class diagrams to map object relationships and
                    responsibilities. workflows and scenarios, identifying
                    usability issues and improvements.
                  </Text>
                </li>
                <li>
                  <Text>
                    Developed use case documents to demonstrate how the
                    application would handle common banking operations.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Team orchestration and coordination
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Organized tasks for the 4-person team, helping assign
                    responsibilities and track progress throughout the semester.
                  </Text>
                </li>
                <li>
                  <Text>
                    Facilitated communication and ensured alignment between
                    individual contributions and overall project goals.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Server–client implementation in Java
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Built the Server and Client objects, establishing a
                    communication loop for message exchange.
                  </Text>
                </li>
                <li>
                  <Text>
                    Designed a custom Request class to standardize structured
                    messages between client and server, supporting operations
                    like account creation, deposits, withdrawals, and transfers.
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
              Learning{" "}
              <Text as="span" variant="h4" color="primary">
                Formal{" "}
              </Text>
              Software Engineering Practices
            </Text>
            <Text>
              This was one of my first experiences following the structured
              software engineering lifecycle. Starting with requirements and
              design before implementation taught me the importance of planning
              ahead and creating documentation that could guide development
              decisions.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Team Leadership and Coordination{" "}
              <Text as="span" variant="h4" color="primary">
                Coordination
              </Text>
            </Text>
            <Text>
              A key part of my role involved gathering feedback on new student
              applications. I met with users and the IT team to review app
              functionality, identify usability issues, and suggest
              improvements. Delivering findings through presentations helped me
              practice explaining technical insights in a clear and accessible
              way. This strengthened my ability to bridge the gap between
              technical teams and end users.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Deepening{" "}
              <Text as="span" variant="h4" color="primary">
                Technical{" "}
              </Text>
              Skills in Java
            </Text>
            <Text>
              As I tested student applications, I learned to structure my
              feedback into actionable insights and present my feedback to a
              team of roughly 6 people. My presentations not only highlighted
              usability challenges but also offered potential solutions to guide
              future iterations of the apps. By framing feedback in a way that
              was constructive and solution-oriented, I helped the IT team
              refine the user experience while also improving my own
              communication skills.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              <Text as="span" variant="h4" color="primary">
                Collaboration{" "}
              </Text>
              Collaboration and Problem-Solving
            </Text>
            <Text>
              During this internship, I developed new technical skills that
              broadened my toolkit. I wrote Python scripts to automate data
              scraping, which I applied in conducting a comprehensive technology
              and faculty audit. I also gained experience with large-scale
              device logging and asset tracking, cataloging over 1,500 devices
              across campus. These experiences taught me how to apply automation
              to real organizational needs, manage large datasets, and think
              critically about how to optimize IT processes.
            </Text>
          </div>
        </div>
        <div className="mb-8">
          <Text variant="h4">
            Seeing a Project Through from Start to{" "}
            <Text as="span" variant="h4" color="primary">
              Finish
            </Text>
          </Text>
          <Text>
            The semester-long scope of the project showed me what it’s like to
            take software from concept to completion. It strengthened my
            understanding of project phases, from documentation and design to
            coding and testing, and gave me confidence in managing the full
            development cycle.
          </Text>
        </div>

        <Button link="/">BACK TO HOME</Button>
      </div>
    </>
  );
}

export default Tutor;
