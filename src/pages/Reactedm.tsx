import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import ALS from "@/assets/ALS.png";
import ReactEDM from "@/assets/ReactEDM.png";
import Poster from "@/assets/NickMPosterFinal.png";
import Slam1 from "@/assets/slam-1.png";
import Slam4 from "@/assets/slam-4.png";
import AreaDetector from "@/assets/beamline.png";

function Reactedm() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              Software Engineer{" "}
            </Text>
            Intern
          </Text>
          <Text variant="h4">Lawrence Berkeley National Lab</Text>
          <Text>May 2017 - Dec 2025</Text>
          <div className="flex">
            <Button
              link={
                "https://blueskyproject.io/finch/?path=/docs/bluesky-components-reactedm--docs"
              }
              newTab
              variant="outline"
            >
              DOCS
            </Button>
            <Button
              link={"https://github.com/bluesky/finch"}
              newTab
              variant="outline"
            >
              CODE
            </Button>
          </div>
          <img src={ALS}></img>
        </div>
        <div className="flex flex-col">
          <Text variant="h2" emphasis>
            TLDR & Demo
          </Text>
          <Text>
            During my 10 week internship at Lawrence Berkeley National
            Laboratory, I was tasked with creating software in React to manage
            area detector controls for beamlines. I made React Extensible
            Display Manager (ReactEDM), which was built to be future proof with
            a modular design. I got experience of working with a mentor, as well
            as public speaking and working alongside end-users. At the end of
            the internship, I got to give a pitch and present a poster I made
            that gave a summary of my project. I won 3rd place in the pitch, and
            overall learned a lot. See demo below to see what I made.
          </Text>
          <div className="w-full flex justify-center">
            <img src={ReactEDM}></img>
          </div>
          <Text variant="h2" emphasis>
            My Project
          </Text>
          <Text variant="h4">
            Some{" "}
            <Text as="span" variant="h4" color="primary">
              Definitions
            </Text>
          </Text>

          <Text>
            <div
              className="float-right ml-6 mb-4 max-w-xl"
              style={{ shapeOutside: `url(${AreaDetector})`, shapeMargin: "0.5rem" }}
            >
              <img
                src={AreaDetector}
                alt="Beamline area detector"
                className="w-full"
              />
              <Text variant="small" className="text-center mt-2">
                Figure 1 - Example of a beamline w/ an area detector
              </Text>
            </div>
            This article is going to use some jargon that you may not be aware
            of, so here are some terms and what they mean.{" "}
            <br className="mb-1" />
            <strong>Beamline</strong> - An end-station for a particle accelerator. It takes the
            beam output from the accelerator and focuses it on a particular
            experiment setup. To the right is an example of a beamline.{" "}
            <br className="mb-1" />
            <strong>MEDM</strong> - Motif editor and display manager, legacy software that
            manages and displays control screens for an area detector.{" "}
            <br className="mb-1" />
            <strong>Control Screen</strong> - Panel used to control parameters of a scientific
            instrument<sup>1</sup>. <br className="mb-1" />
            <strong>Area Detector</strong> - Think of it as a camera for a particle accelerator.{" "}
            <br className="mb-1" />
            <strong>EPICS</strong> - Experimental Physics and Industrial Control System, the
            software that is used to controlcomplex scientific instruments.{" "}
            <br className="mb-1" />
            <strong>PV</strong> - Process variable, a variable that corresponds to a parameter on
            some machine.{" "}
          </Text>
          <Text variant="h4">
            The{" "}
            <Text as="span" variant="h4" color="primary">
              Problem
            </Text>
          </Text>
          <Text>
            Current beamlines commonly use a software called MEDM to control
            area detectors, which is no longer maintained and incredibly
            difficult to build from source. Additionally, new beamlines at the
            ALS are moving towards web based controls for ease of use, however,
            MEDM has remained entrenched in existing workflows, causing
            headaches when using beamlines. With this, there needed to be a way
            to use control screens on the web.
          </Text>
          <Text variant="h4">
            How does{" "}
            <Text as="span" variant="h4" color="primary">
              MEDM{" "}
            </Text>
            Work?
          </Text>
          <Text>
            MEDM displays GUI’s based on ADL files, which are files that simply
            contain UI data, like buttons, words, colors etc. In order to use
            it, you tell MEDM what ADL file to render, and a GUI opens up, with
            each PV connecting to an EPICS server. This allows for beamline
            scientists to create their own custom GUI’s for their own setups,
            however 99% of the time, scientists use prebuilt GUI’s for various
            instruments for simplicity.
          </Text>
          <Text variant="h4">
            ADL{" "}
            <Text as="span" variant="h4" color="primary">
              Files
            </Text>
          </Text>
          <Text>
            These files are structured very similarly to JSON, with some missing
            syntax. They contain widgets, or UI elements, along with any
            metadata for those elements, like position and size. The example to
            the right defines a text widget, which is located at (58, 286) and
            is 100 pixels wide and 20 pixels tall2. It is aligned right, and
            says “Connection”. MEDM supports 25 different widgets, some more
            complicated than others.
          </Text>
          <Text variant="h4">
            <Text as="span" variant="h4" color="primary">
              My{" "}
            </Text>
            Solution
          </Text>
          <Text>
            The technology I used was React, along with Ophyd Websocket (Python)
            to communicate to EPICS. I wanted my software to be future proof, so
            I decided to design it in two main parts, the parser and the display
            manager. The parser’s job was to take the ADL file and reorganize it
            into a data structure that my display manager can work with. The
            display manager’s job was to take that organized data structure and
            turn it into React components so it could be rendered onto a web
            browser. Doing it like this allowed for future support for otherUI
            file types. The only thing that needed to be added was a different
            parser for whatever file format you’d liketo support. In the case of
            ADL files, I designed the simple workflow below3.
          </Text>
          <Text>
            I ended up calling this software React Extensible Display Manager
            (ReactEDM). Not only does this get rid of one more headache when
            working with beamlines, but it also allows for a unified display
            manager that can support any file type imaginable. UI files have
            always been a burden when working with scientific instruments, but
            ReactEDM is a unified solution that anyone can use. My code
            currently lives in the Finch github repo (A UI library for
            beamlines), and includes documentation on my project w/ storybook,
            as well as a live demo.
          </Text>
          <Text variant="h2" emphasis>
            My Experience
          </Text>
          <Text variant="h4">
            Working{" "}
            <Text as="span" variant="h4" color="primary">
              With{" "}
            </Text>
            a Mentor
          </Text>
          <Text>
            I had a great experience at my 10-week internship. Not only did it
            give me technical experience in writing software, but it also gave
            me experience in the dynamic of a mentor-based program, as I got to
            work with computer systems engineer, Seij De Leon. To effectively
            work my mentor, I kept in touch with him every day, and met with him
            on a weekly bases to plan sprints and discuss the scope of my
            project and its direction.
          </Text>
          <Text variant="h4">
            <Text as="span" variant="h4" color="primary">
              Public{" "}
            </Text>
            Speaking
          </Text>
          <Text>
            Additionally, every week I got to present my progress to the group I
            worked with, which was a team of ~15. Doing public speaking every
            week got me really comfortable with talking in front of a crowd,
            which is a skill I like to use quite a bit. At the end of the
            internship, we had to make a poster4 that summarized our studies in
            a digestible format. This gave me experience in communicating
            complex ideas to a broader audience. In addition to this, we also
            got to present minute long pitches in a poster slam5. Despite this
            being a little nerve racking, I managed to give a concise pitch to a
            crowd of people, and I even ended up winning the third best pitch
            prize6.
          </Text>
          <Text variant="h4">
            <Text as="span" variant="h4" color="primary">
              Developing{" "}
            </Text>
            Feedback
          </Text>
          <Text>
            One more thing that this experience gave me was working directly
            with end-users for my software. My tool was to be used by actual
            scientists not just at Berkeley Lab, but others, like the Argonne
            National Laboratory in Illinois. I interviewed several scientists
            throughout my internship, namely Antoine Wojdyla, a research
            scientist from Berkeley Lab, and Fanny M. Rodolakis, a physicist at
            Argonne National Lab. In these interviews, I got an insight into
            their routine with beamline software, and we identified gripes with
            current software and some wanted features for my project.
          </Text>
          <img src={Poster}></img>
          <div className="bg-surface rounded-xl">
            <div className="flex">
              <div className="flex-1">
                <img src={Slam1}></img>
              </div>

              <div className="flex-1">
                <img src={Slam4}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reactedm;
