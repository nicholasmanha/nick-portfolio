import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import server1 from "@/assets/server1.png";
import ThinkStation from "@/assets/thinkstation.png"
import Fire from "@/assets/fire.png"
import DellTower from "@/assets/DellTower.png"
import Chenbro from "@/assets/chenbro.jpg"


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
            Hardware Checklist
          </Text>
          <div className="mb-8">
            <Text>
              Every Server needs its hardware! Here is what I needed for my applications.
            </Text>
            <ul className="mt-4 list-disc pl-6">
              <li>
                <Text className="inline" variant="h4">
                  Compute Node
                </Text>{" "}
                <Text className="inline" variant="small">
                  Hosts the hypervisor
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
                  NAS Node
                </Text>{" "}
                <Text className="inline" variant="small">
                  Hosts the NAS OS
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
                  Hot Swappable Cage
                </Text>{" "}
                <Text className="inline" variant="small">
                  For the storage
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
                  HBA Card
                </Text>{" "}
                <Text className="inline" variant="small">
                  To interface with the NAS cage
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
                  Raspberry Pi
                </Text>{" "}
                <Text className="inline" variant="small">
                  For Pi-hole
                </Text>
              </li>
            </ul>
          </div>
          <Text variant="h3" className="inline">
            Compute Node <Text className="inline" >| Thinkstation P320 Tiny</Text>
          </Text>
          <Text>
            The compute node was actually the first piece of hardware I purcahsed for this project, 3 months before I finished. I should also mention that many of these components were purchased on Facebook Marketplace and eBay, so I often didn't have much choice in the particular models. With that being said, I went with the <a target="_blank" href="https://www.lenovo.com/us/en/p/workstations/thinkstation-p-tiny/thinkstation-p320-tiny/33ts3tp320t"><Text className="inline" color="primary">ThinkStation P320 Tiny </Text></a>for my compute node. I got it for $140, and I picked it up in a middle school parking lot. There was a fire across the street as well, so the air smelled like smoke. It was a very odd environment for a facebook marketplace deal.

          </Text>
          <img src={ThinkStation}></img>
          <img src={Fire}></img>

          <Text variant="h3" className="inline">
            NAS Node <Text className="inline" >| Dell Optiplex 5050 Mini Tower</Text>
          </Text>
          <Text>
            For this part of the hardware, I didn't really have any requirements. For my purposes, the NAS node didn't need to be particularly beefy, it just needed to be a computer, and work. For this, I went with the cheapest option on Facebook marketplace that had a reasonable amount of DDR4 RAM, and went on my mary way. The model I bought was the <a target="_blank" href="https://www.dell.com/support/manuals/en-us/optiplex-5050-micro/optiplex-5050-desktop-micro-owners-manual/product-specifications
"><Text className="inline" color="primary">Dell Optiplex 5050 Mini Tower</Text></a>. I actually end up regretting this, as this computer is a pain to modify due to its non-modular power supply, and its quite large, making it difficult to fit with standard server racks. <br></br>
            This deal was done at night in a sketchy parking lot. Thankfully, the seller was very nice and didn't try to kill me.
          </Text>
          <img src={DellTower}></img>

          <Text variant="h3" className="inline">
            Hot Swappable Cage
          </Text>
          <Text>
            A hot swappable NAS allows you to swap out hard drives without turning off the NAS. It makes it very easy to add or remove storage, In this case, a NAS "cage" is just a hot-swappable bay that fits into a tower. This was the second item I bought for my server buikd, and I honestly just wanted one because they look really cool. I found the cheapest one I could find on eBay, which was this  <a target="_blank" href="https://www.ebay.com/itm/324907509905
"><Text className="inline" color="primary">Chenbro</Text></a> one, and I was off. <br></br>

            This hasty decision bit me in a couple of ways. For one, the backplane of this NAS uses SFF-8087, which is a type of SAS port. This isn't necessarily a bad thing, as this connector is pretty common, but it was definitely more overhead than I thought would be necessary. This also meant that I would need an HBA card, which I didn't even know existed before starting this project. <br></br>
            Another reason why this purchase wasn't the best was the fact that this NAS cage was meant to fit into a tower. At the time, I thought this was meant to fit on a server rack, however it was immediately obvious that this wasn't the case when it arrived. This is actually meant to go inside a standard NAS desktop, which made it awkward to fit with other components. <br></br>
            Lastly, this cage uses 2.5in drives instead of the more common 3.5in. I guess this makes it easy to salvage old laptops, but I definitely would have preferred to use 3.5in drives, as I have more of these. 
          </Text>
          <img className="w-[300px]" src={Chenbro}></img>


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
                <Text className="inline" variant="h4">
                  Hypervisor
                </Text>{" "}
                <Text className="inline" variant="small">
                  What manages the apps
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
                  Media Server
                </Text>{" "}
                <Text className="inline" variant="small">
                  Netflix for free
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
                  Pi-hole
                </Text>{" "}
                <Text className="inline" variant="small">
                  Network Adblocker
                </Text>
              </li>
              <li>
                <Text className="inline" variant="h4">
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
