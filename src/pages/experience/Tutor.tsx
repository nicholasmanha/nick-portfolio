import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";

function Tutor() {
  return (
    <>
      <div className="2xl:max-w-screen-xl lg:w-9/10 mx-auto">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              STEM{" "}
            </Text>
            Tutor
          </Text>
          <Text variant="h4">Shasta College</Text>
          <Text>Aug 2023 - Dec 2023</Text>
        </div>
        <div className="mb-16">
          <Text variant="h2" emphasis className="mb-4">
            What I did
          </Text>
          <Text>
            I provided support to college students on STEM subjects by breaking
            down problems into manageable steps and adjusting my teaching style
            to accommodate each student. Tutoring sessions were both walk-in and
            scheduled meetings, and I provided support in all calculus classes,
            statistics, and programming concepts.
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
                <Text as="span">
                  Provide one-on-one and group tutoring in STEM subjects
                </Text>
              </Text>
              <Text className="font-bold">
                2. <Text as="span">Break down complex concepts</Text>
              </Text>
              <Text className="font-bold">
                3. <Text as="span">Collaborate with other tutors</Text>
              </Text>
              <Text className="font-bold">
                4. <Text as="span">Support student success</Text>
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
                Provide one-on-one and group tutoring in STEM subjects
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Tutored students in Calculus I–III, Statistics, Linear
                    Algebra, and introductory programming.
                  </Text>
                </li>
                <li>
                  <Text>
                    Explained abstract concepts by connecting them to real-world
                    examples and intuitive problem-solving strategies.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Break down complex concepts
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Designed step-by-step explanations to make challenging
                    topics more understandable.
                  </Text>
                </li>
                <li>
                  <Text>
                    Helped students develop problem-solving frameworks to build
                    confidence and independence.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">
                Collaborate with other tutors
              </Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Shared strategies and techniques with peers to improve
                    overall tutoring effectiveness.
                  </Text>
                </li>
                <li>
                  <Text>
                    Worked as part of a team to ensure students received
                    consistent academic support across multiple subjects.
                  </Text>
                </li>
              </ul>
              <Text className="font-bold my-1">Support student success</Text>
              <ul className="list-disc pl-5">
                <li>
                  <Text>
                    Assessed individual student needs and tailored tutoring
                    sessions to their learning styles.
                  </Text>
                </li>
                <li>
                  <Text>
                    Provided encouragement and guided practice to help students
                    master coursework and prepare for exams.
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
              Explaining{" "}
              <Text as="span" variant="h4" color="primary">
                Complex {" "}
              </Text>
              Concepts
            </Text>
            <Text>
              Tutoring required me to take difficult STEM topics, like
              multivariable calculus, statistics, and programming, and break
              them into approachable steps. I learned how to adjust explanations
              on the spot, using analogies or simplified examples to help
              students grasp abstract ideas. This strengthened my ability to
              translate technical knowledge into clear, understandable lessons.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              <Text as="span" variant="h4" color="primary">
                Adapting{" "}
              </Text>
              to Different Learning Styles
            </Text>
            <Text>
              Each student had a unique way of approaching problems, so I
              adapted my teaching methods to fit their needs. Some students
              benefited from visual explanations, others from step-by-step
              problem solving, and others from practice-driven sessions. This
              experience improved my flexibility as a communicator and taught me
              to quickly identify the best way to support different learners.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              Building{" "}
              <Text as="span" variant="h4" color="primary">
                Confidence {" "}
              </Text>
              in Students
            </Text>
            <Text>
              Beyond teaching the material, a large part of tutoring was helping
              students believe they could succeed. By giving constructive
              feedback, celebrating small wins, and showing patience, I helped
              students build confidence in their abilities. This experience
              sharpened my skills in encouragement and mentorship.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              <Text as="span" variant="h4" color="primary">
                Collaboration{" "}
              </Text>
              with Other Tutors
            </Text>
            <Text>
              Working with other tutors gave me the chance to exchange
              strategies and learn new ways to explain concepts. We often shared
              resources and approaches to make tutoring sessions more effective.
              This collaborative environment strengthened my teamwork skills and
              gave me a broader toolkit for supporting students.
            </Text>
          </div>
          <div className="mb-8">
            <Text variant="h4">
              <Text as="span" variant="h4" color="primary">
                Reinforcing{" "}
              </Text>
              My Own Technical Skills
            </Text>
            <Text>
              Explaining material to others deepened my own mastery of STEM
              subjects. Regularly teaching calculus, linear algebra, statistics,
              and programming improved my problem-solving speed and reinforced
              the fundamentals I had learned. This not only made me a better
              tutor but also strengthened my foundation for future technical
              work.
            </Text>
          </div>
        </div>

        <Button link="/#experience">BACK TO HOME</Button>
      </div>
    </>
  );
}

export default Tutor;