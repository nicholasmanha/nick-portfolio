import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import PLC1 from "@/assets/PLC1.png";
import PLC2 from "@/assets/PLC2.png";
import PLC3 from "@/assets/PLC3.png";
import DellTower from "@/assets/DellTower.png";
import Chenbro from "@/assets/chenbro.jpg";
import HBA_card from "@/assets/hba_card.png";
import RaspberryPi from "@/assets/raspberrypi.jpg";
import slotted_bar from "@/assets/slotted_bar.png";
import server2 from "@/assets/server2.png";
import models from "@/assets/models.png";
import pihole from "@/assets/pihole.png";
import fish_tank from "@/assets/fish_tank.png";

function Reactedm() {
  return (
    <>
      <div className="px-4 lg:px-0 2xl:max-w-screen-xl lg:w-9/10 mx-auto flex flex-col items-center lg:block">
        <div className="flex flex-col items-center">
          <Text className="inline" variant="h1">PLC</Text><Text className="inline" variant="h4">Programmable Logic Controller</Text>

          <img className="w-4/5 lg:w-1/3 my-8" src={PLC3}></img>
        </div>
        <div className="mb-8">
          <div className="flex flex-col mb-16">
            

            <Text variant="h2" emphasis className="mb-4">
              What is a PLC?
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

          <Text variant="h3" className="inline">
            Compute Node{" "}
            <Text className="inline">| Thinkstation P320 Tiny</Text>
          </Text>
          <Text>
            The compute node was actually the first piece of hardware I
            purcahsed for this project, 3 months before I finished. I should
            also mention that many of these components were purchased on
            Facebook Marketplace and eBay, so I often didn't have much choice in
            the particular models. With that being said, I went with the{" "}
            <a
              target="_blank"
              href="https://www.lenovo.com/us/en/p/workstations/thinkstation-p-tiny/thinkstation-p320-tiny/33ts3tp320t"
            >
              <Text className="inline" color="primary">
                ThinkStation P320 Tiny{" "}
              </Text>
            </a>
            for my compute node. I got it for $140, and I picked it up in a
            middle school parking lot. There was a fire across the street as
            well, so the air smelled like smoke. It was a very odd environment
            for a facebook marketplace deal.
          </Text>

        </div>
        <Button className="align-center" link="/">
          BACK TO HOME
        </Button>
      </div>
    </>
  );
}

export default Reactedm;
