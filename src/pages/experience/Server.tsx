import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import server1 from "@/assets/server1.png";
import ReactEDM from "@/assets/ReactEDM.png";
import Poster from "@/assets/NickMPosterFinal.png";
import Slam1 from "@/assets/slam-1.png";
import Slam4 from "@/assets/slam-4.png";
import AreaDetector from "@/assets/beamline.png";
import ADL from "@/assets/ADL.png";
import ADLWorkFlow from "@/assets/ADLWorkflow.png";

function Reactedm() {
  return (
    <>
      <div className="px-4 lg:px-0 2xl:max-w-screen-xl lg:w-9/10 mx-auto flex flex-col items-center lg:block">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              Server
            </Text>
            /Homelab
          </Text>

          <img className="w-4/5 lg:w-1/3 my-8" src={server1}></img>
        </div>
        <div className="mb-8">
          <div className="flex flex-col mb-16">
            <Text>
              Right before graduating college, I bought a mini PC on Facebook
              marketplace with the hopes of one day building a homelab. Around 6
              months later, I finally was able to hunt down other parts to build
              a small homelab, and this article is meant to outline my thought
              process, and the history of building this homelab. But first, what
              is a homelab? <br></br>
              <br></br>
            </Text>

            <Text variant="h2" emphasis className="mb-4">
              What is a Homelab?
            </Text>
            <Text>
              An official definition could be something like: <br></br>A homelab
              is a server typically built by hobbyists for personal use. It is
              often used to deploy services that provide utility to the user,
              and learn more about various subject, such as networks, security,
              and server administration. <br></br>
              <br></br>
              However, in my experience, a homelab typically seems to be a
              Frankenstein's monster of various eBay and Facebook marketplace
              purchases. That could just be because I am a beginner, though.
            </Text>
          </div>

          <Text variant="h2" emphasis className="mb-4">
            Goals & Expectations
          </Text>
          <div className="mb-8">
            <Text>
              Before I started this project, I wanted to lay down some apps &
              components I wanted to have in my homelab, so I made this short
              checklist:
            </Text>
            <ul className="mt-4 list-disc pl-6">
              <li>
                <Text className="inline" variant="h3">
                  Hypervisor
                </Text>{" "}
                <Text className="inline" variant="small">
                  What manages the apps
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h3">
                  Media Server
                </Text>{" "}
                <Text className="inline" variant="small">
                  Netflix for free
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h3">
                  Pi-hole
                </Text>{" "}
                <Text className="inline" variant="small">
                  Network Adblocker
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h3">
                  Ignition
                </Text>{" "}
                <Text className="inline" variant="small">
                  For Home Automation
                </Text>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <Text variant="h3" className="inline" color="primary">
              Hypervisor <Text className="inline" >| Proxmox</Text>
            </Text>
            <Text>
              The hypervisor is the most important part of a homelab, as it is
              what manages all other apps and services. This is the first
              consideration when you begin building a homelab, and is very
              important. This is what you'll need to learn for deploying
              anything in your homelab, so you better choose one that you enjoy
              using. <br></br> <br></br>
              What I decided to go with was Proxmox. I went with this for
              several reasons, namely the fact that it's open source and has a
              lot of support. I often head towards softwares with a big
              community over anything else, as this gives longevity in the
              product. Plus, I am a sucker for web UI's, which proxmox is based
              off of. In all honesty, however, I was recommended this by a
              friend in college, which is probably the real reason I went with
              this hypervisor. So far, I have been loving how easy it is to
              provision things, and monitor my containers/VMs.
            </Text>
          </div>
          <div className="mb-8">
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
              scientist from Berkeley Lab, and Fanny M. Rodolakis, a physicist
              at Argonne National Lab. In these interviews, I got an insight
              into their routine with beamline software, and we identified
              gripes with current software and some wanted features for my
              project.
            </Text>
          </div>
          
          
          
        </div>
        <Button className="align-center" link="/">
          BACK TO HOME
        </Button>
      </div>
    </>
  );
}

export default Reactedm;
