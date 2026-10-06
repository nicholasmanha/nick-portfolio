import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import server1 from "@/assets/server1.png";
import ThinkStation from "@/assets/thinkstation.png";
import Fire from "@/assets/fire.png";
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

          <div className="mb-16">
            <Text variant="h2" emphasis className="mb-4">
              Hardware Checklist
            </Text>
            <div className="mb-8">
              <Text>
                Every Server needs its hardware! Here is what I needed for my
                applications.
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
                    Houses the storage
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
            <div className="mb-8">
              <Text variant="h3" className="mb-1">
                Compute Node{" "}
                <Text className="inline">| Thinkstation P320 Tiny</Text>
              </Text>
              <Text>
                The compute node was actually the first piece of hardware I
                purchased for this project, 3 months before I finished. I should
                also mention that many of these components were purchased on
                Facebook Marketplace and eBay, so I often didn't have much
                choice in the particular models. With that being said, I went
                with the{" "}
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
                well, so the air smelled like smoke. It was a very odd
                environment for a facebook marketplace deal.
              </Text>
              <img className="lg:w-1/2" src={ThinkStation}></img>
              <img className="lg:w-1/4" src={Fire}></img>
            </div>
            <div className="mb-8">
              <Text variant="h3" className="mb-1">
                NAS Node{" "}
                <Text className="inline">| Dell Optiplex 5050 Mini Tower</Text>
              </Text>
              <Text>
                For this part of the hardware, I didn't really have any
                requirements. For my purposes, the NAS node didn't need to be
                particularly beefy, it just needed to be a computer, and work
                properly. For this, I went with the cheapest option on Facebook
                marketplace that had a reasonable amount of DDR4 RAM, and went
                on my mary way. The model I bought was the{" "}
                <a
                  target="_blank"
                  href="https://www.dell.com/support/manuals/en-us/optiplex-5050-micro/optiplex-5050-desktop-micro-owners-manual/product-specifications"
                >
                  <Text className="inline" color="primary">
                    Dell Optiplex 5050 Mini Tower
                  </Text>
                </a>
                . I actually end up regretting this, as this computer is a pain
                to modify due to its non-modular power supply, and it's quite
                large, making it difficult to fit with standard server racks.{" "}
                <br></br>
                <br></br>
                This deal was done at night in a sketchy parking lot.
                Thankfully, the seller was very nice and didn't try to kill me.
              </Text>
              <img className="lg:w-1/4" src={DellTower}></img>
            </div>
            <div className="mb-8">
              <Text variant="h3" className="mb-1">
                Hot Swappable Cage
              </Text>
              <Text>
                A hot swappable NAS allows you to swap out hard drives without
                turning off the NAS, making it very easy to add or remove
                storage. In this case, a NAS "cage" is just a hot-swappable bay
                that fits into a tower. This was the second item I bought for my
                server build, and I honestly just wanted one because they look
                really cool. I found the cheapest one I could find on eBay,
                which was this{" "}
                <a target="_blank" href="https://www.ebay.com/itm/324907509905">
                  <Text className="inline" color="primary">
                    Chenbro
                  </Text>
                </a>{" "}
                one, and I was off. <br></br>
                This hasty decision bit me in a couple of ways. For one, the
                backplane of this NAS uses SFF-8087, which is a type of SAS
                port. This isn't necessarily a bad thing, as this connector is
                pretty common, but it was definitely more overhead than I
                thought would be necessary. This also meant that I would need an
                HBA card, which I didn't even know existed before starting this
                project. <br></br>
                Another reason why this purchase wasn't the best was the fact
                that this NAS cage was meant to fit into a tower. At the time, I
                thought this was meant to fit on a server rack, however it was
                immediately obvious that this wasn't the case when it arrived.
                This is actually meant to go inside a standard NAS desktop,
                which made it awkward to fit with other components. <br></br>
                Lastly, this cage uses 2.5in drives instead of the more common
                3.5in. I guess this makes it easy to salvage old laptops, but I
                definitely would have preferred to use 3.5in drives, as I have
                more of these.
              </Text>
              <img className="lg:w-1/3" src={Chenbro}></img>
            </div>
            <div className="mb-8">
              <Text variant="h3" className="mb-1">
                HBA Card <Text className="inline">| LSI 9200-8E</Text>
              </Text>
              <Text>
                I learned that I needed one of these after purchasing my NAS
                cage. This allows you to read from multiple drives with one
                cable, and plugs in via PCIe slot. I originally had the LSI
                SAS9200-8E, however I was having issues with this device not
                booting correctly every so often. So far, my newest card has
                been doing great, and it transfers data at 6Gb/s, which is
                plenty for my applications. It's also been tested with TrueNAS,
                so that's good enough for me.
              </Text>
              <img className="lg:w-1/2" src={HBA_card}></img>
            </div>
            <div className="mb-8">
              <Text variant="h3" className="mb-1">
                Raspberry Pi <Text className="inline">| Pi 3 Model B</Text>
              </Text>
              <Text>
                Not much to say here, I got this model for Christmas and it's
                plenty for Pi-hole.
              </Text>
              <img className="lg:w-1/2" src={RaspberryPi}></img>
            </div>
          </div>
          <div className="mb-16">
            <Text variant="h2" emphasis className="mb-4">
              The Build Process
            </Text>
            <Text>
              During my research for this project, I knew that I would need some
              sort of custom setup due to the wacky dimensions of my components.
              In hindsight, I definitely went a little too custom, and this
              caused a lot of headache. Ideally, what I should have done was buy
              already-built Server racks that adhere to the EIA-310
              specification, but I unfortunately did not do this. Instead, I
              took a trip to my local home depot, and bought slotted Zinc
              bars... which is for furniture... <br></br>
              <img className="lg:w-1/3" src={slotted_bar}></img> <br></br>
              As you can imagine, this was a major pain, because I had to create
              a custom fitting for virtually all of my parts. I did have a
              couple of reasons for doing this though:
              <ul className="list-disc pl-5">
                <li>
                  <Text>To save Money</Text>
                </li>
                <li>
                  <Text>
                    I had a tower that would not fit in a standard server rack
                  </Text>
                </li>
                <li>
                  <Text>I wanted an excuse to use my 3D printer</Text>
                </li>
              </ul>
              <br></br>
              With this, I went ahead and began designing several brackets and
              adapters for my components. Here are a few:
              <img className="lg:w-1/2" src={models}></img>
              <br></br>
              After several days of tinkering, a powersupply, fans, and random
              cables later, I finished constructing my server. Here it is next
              to a Cinemark Extra Large popcorn bucket for size.
              <img className="lg:w-1/2" src={server2}></img>
            </Text>
          </div>
          <Text variant="h2" emphasis className="mb-4">
            Apps & Software
          </Text>
          <div className="mb-8">
            <Text>
              Now that we have a physical server to play with, I wanted to lay
              down some apps & components I wanted to have in my homelab, so I
              made this short checklist:
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
                  NAS OS
                </Text>{" "}
                <Text className="inline" variant="small">
                  To manage your NAS
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
              Hypervisor <Text className="inline">| Proxmox</Text>
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
              lot of support. I often lean towards softwares with a big
              community over anything else, as this gives longevity in the
              product. Plus, I am a sucker for web UI's, which proxmox is based
              off of. In all honesty, however, I was recommended this by a
              friend in college, which is probably the real reason I went with
              this hypervisor. So far, I have been loving how easy it is to
              provision things, and monitor my containers/VMs.
            </Text>
            <br></br>
            <Text>Some tutorials I used:</Text>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=lFzWDJcRsqo"
            >
              <Text color="primary">Beginners Guide to Proxmox</Text>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=h8qEXBp--WU"
            >
              <Text color="primary">Creating Containers in Proxmox</Text>
            </a>
          </div>
          <div className="mb-8">
            <Text variant="h3" className="inline" color="primary">
              NAS OS <Text className="inline">| TrueNAS</Text>
            </Text>
            <Text>
              TrueNAS seems to be the one everyone uses. I didn't really have
              any rhyme or reason to use this particular OS other than the
              support it has from its community.
            </Text>
            <br></br>
            <Text>Some tutorials I used:</Text>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=BbXtAuWEx2w"
            >
              <Text color="primary">
                Creating a bootable drive of TrueNAS with Rufus
              </Text>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=67KtKoW4IM0"
            >
              <Text color="primary">TrueNAS setup guide</Text>
            </a>
          </div>
          <div className="mb-8">
            <Text variant="h3" className="inline" color="primary">
              Media Server <Text className="inline">| Jellyfin</Text>
            </Text>
            <Text>
              The Media Server in this project will allow me to stream any
              videos on my NAS from any device with a browser. Typically, the
              choice usually comes down to Plex and Jellyfin. This is not the
              place to really weigh the benefits between the two, but I went
              with Jellyfin because Plex has paid tiers, and I don't like the
              direction they're heading in with regards to paid plans. Jellyfin
              is something that will always be open source and free. As long as
              I own my software, I am happy. Also, Jellyfish are pretty cool.
            </Text>
            <br></br>
            <Text>Some tutorials I used:</Text>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=uu9PvIBYrWk"
            >
              <Text color="primary">Jellyfin Setup for Proxmox</Text>{" "}
              <Text>
                This tutorial also covers how to connect your NAS to host your
                videos.
              </Text>
            </a>
          </div>

          <div className="mb-8">
            <Text variant="h3" className="inline" color="primary">
              Pi-hole
            </Text>
            <Text>
              Pi-hole is a staple in many homelabs. This is a software that runs
              on a raspberry pi that acts as a DNS proxy. Basically, whenever a
              request for a site comes in, it will first reach my raspberry pi.
              This pi has several{" "}
              <a
                target="_blank"
                href="https://www.reddit.com/r/pihole/comments/1qfu3o8/updated_blocklist_advice_for_2026/
"
              >
                <Text className="inline" color="primary">
                  "blocked" lists
                </Text>
              </a>{" "}
              of domains that contain trackers and ads. If the domain that your
              device is requesting, then my raspberry pi throws that request
              into the void. If the domain is not blocked, then it gets
              forwarded to an actual DNS, like 8.8.8.8. You can even set up your
              own DNS server through Pi-hole for extra anonymity.
              <br></br>
              <br></br>
              "But how do your devices know to use your Pi as your DNS?"{" "}
              <br></br>
              This is a setting you can change in most consumer routers. When
              your device connects to a router, it will ask a bunch of
              questions, including what DNS server to use. Your router responds
              with a DHCP packet, which we can change what DNS server it will
              respond with in this packet. Simply use the IP for your raspberry
              pi, and bob's your uncle.
            </Text>
            <img className="lg:w-1/2" src={pihole}></img>
            <br></br>

            <Text>
              The unfortunate part about all of this is that it works at the
              network level. This means that if a site serves its ads on its own
              domain (Youtube, Netflix, etc.), it cannot block it. <br></br>{" "}
              <br></br>
            </Text>
            <Text>Some tutorials I used:</Text>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=cE21YjuaB6o"
            >
              <Text color="primary">Pi-hole tutorial</Text>
            </a>
          </div>

          <div className="mb-8">
            <Text variant="h3" className="inline" color="primary">
              Ignition
            </Text>
            <Text>
              In case you're new to{" "}
              <a
                target="_blank"
                href="https://www.docs.inductiveautomation.com/"
              >
                <Text className="inline" color="primary">
                  Ignition
                </Text>
              </a>
              , it's a SCADA platform that allows you to talk to several PLC's
              and do cool things with their data. In this case, I had a PLC that
              I made (read more about that{" "}
              <a target="_blank" href="/#/PLC">
                <Text className="inline" color="primary">
                  here
                </Text>
              </a>
              ) , and I wanted to connect it to an Igntiion gateway. To do this,
              I set up a simple Linux container, and installed Ignition 8.3 with
              very minimal resources, and it's been running great so far. It
              communicates to my PLC via Modbus, and is historizing its values
              via an internal SQLite database. Currently, I only have it
              measuring the temperature of my fish tank, and displaying the
              history on a Perspective project. It even uses my email account to
              notify me if the temperature gets too high or low.
            </Text>
            <img className="lg:w-1/2" src={fish_tank}></img>
          </div>
        </div>
        <Text>And that's my homelab! Thanks for reading.</Text>
        <br></br> <br></br>
        <Button className="align-center" link="/">
          BACK TO HOME
        </Button>
      </div>
    </>
  );
}

export default Reactedm;
