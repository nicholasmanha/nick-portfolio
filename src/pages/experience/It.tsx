import HorizontalMasonryGrid from "@/components/HorizontalMasonryGrid";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import leadviver2 from "@/assets/leadviver2.png";
import leadviver3 from "@/assets/leadviver3.png";
import leadviver4 from "@/assets/leadviver4.png";
import leadviver5 from "@/assets/leadviver5.png";

function It() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              IT{" "}
            </Text>
            Intern
          </Text>
          <Text variant="h4">Shasta College</Text>
          <Text>Aug 2023 - Dec 2023</Text>
        </div>
        <div className="mb-16">
          <Text variant="h2" emphasis className="mb-4">
            What I did
          </Text>
          <Text>
            I was the first student IT intern at Shasta College, where I
            conducted audits of campus technology and held meetings to provide
            feedback for unreleased student software.
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
                <Text as="span">Technology auditing and asset management</Text>
              </Text>
              <Text className="font-bold">
                2. <Text as="span">UI/UX testing and feedback</Text>
              </Text>
              <Text className="font-bold">
                3. <Text as="span">Automation audit scripting</Text>
              </Text>
              <Text className="font-bold">
                4. <Text as="span">Communication and reporting</Text>
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
                Technology auditing and asset management
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Conducted a full campus-wide audit of technology assets,
                    logging over 1,500 devices into an inventory system for
                    accurate record-keeping.
                  </Text>
                </li>
                <li>
                  <Text>
                    Collected and verified hardware details, including
                    computers, printers, networking devices, and classroom
                    equipment, to support lifecycle planning and resource
                    allocation.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">UI/UX testing and feedback</Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Tested new student-facing applications by using real
                    workflows and scenarios, identifying usability issues and
                    improvements.
                  </Text>
                </li>
                <li>
                  <Text>
                    Delivered 3 presentations in IT team meetings summarizing UX
                    findings, supported by actionable recommendations to improve
                    app accessibility and functionality.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">Automation audit scripting</Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Wrote Python scripts to scrape and compile faculty and
                    technology information, automating portions of the audit
                    process.
                  </Text>
                </li>
                <li>
                  <Text>
                    Streamlined repetitive tasks by replacing manual data
                    collection with automated scripts, saving significant staff
                    time.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Communication and reporting
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Created slides and reports to present findings on student
                    apps and technology usage.
                  </Text>
                </li>
                <li>
                  <Text>
                    Shared insights with IT staff to align on strategies for
                    improving user experience and optimizing technology
                    resources.
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
              This role gave me the chance to collaborate with the IT department
              in both technical and organizational capacities. I worked
              alongside staff to coordinate a large-scale audit of technology
              resources across campus, where consistency and accuracy was
              important. Through this, I learned how to contribute to a team
              process that required attention to detail and clear communication,
              and I strengthened my ability to work with others on tasks that
              spanned multiple systems and environments.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Speaking with{" "}
              <Text as="span" variant="h4" color="primary">
                Users{" "}
              </Text>
              and
              <Text as="span" variant="h4" color="primary">
                Teams{" "}
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
              Developing{" "}
              <Text as="span" variant="h4" color="primary">
                Feedback
              </Text>
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
              New Technical{" "}
              <Text as="span" variant="h4" color="primary">
                Skills
              </Text>
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

        <Button link="/#experience">BACK TO HOME</Button>
      </div>
    </>
  );
}

export default It;
