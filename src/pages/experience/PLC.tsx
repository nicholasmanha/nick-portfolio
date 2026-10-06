import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import PLC1 from "@/assets/PLC1.png";
import PLC2 from "@/assets/PLC2.png";
import PLC3 from "@/assets/PLC3.png";
import PLC4 from "@/assets/PLC4.png";
import ladder_logic from "@/assets/ladder_logic.png";
import plc_example from "@/assets/plc_example.jpg";
import plc_input from "@/assets/PLC_input.png";
import plc_output from "@/assets/plc_output.png";
import plc_bottom from "@/assets/PLC_bottom.png";
import fish_tank from "@/assets/fish_tank.png";
import plc_top from "@/assets/PLC_top.png";

function Reactedm() {
  return (
    <>
      <div className="px-4 lg:px-0 2xl:max-w-screen-xl lg:w-9/10 mx-auto flex flex-col items-center lg:block">
        <div className="flex flex-col items-center">
          <Text className="inline" variant="h1">
            PLC
          </Text>
          <Text className="inline" variant="h4">
            Programmable Logic Controller
          </Text>

          <img className="w-4/5 lg:w-1/3 my-8" src={PLC3}></img>
        </div>
        <div className="mb-8">
          <div className="flex flex-col mb-16">
            <Text variant="h2" emphasis className="mb-4">
              What is a PLC?
            </Text>
            <Text>
              I like to think of a PLC as something like a microcontroller, or a
              tiny computer that is built with manufacturing processes in mind.
              This loosely means that it is tolerant to its environment (handles
              vibration, low/high temperatures, electromagnetic interference,
              etc.), is isolated from the voltages of the device it's
              controlling, and can easily communicate with sensors and a control
              system. Although not required, something that is also paired with
              PLC's is the use of ladder logic for programming. Ladder logic is
              a graphical language that is built to resemble relay logic, which
              is how industrial automation was done a long time ago. In this
              project however, I end up using regular code to program my PLC.
            </Text>
            <img className="lg:w-1/4" src={ladder_logic}></img>
            <Text>
              <br></br>
            </Text>
            <Text>Example of a compact PLC:</Text>
            <img className="lg:w-1/4" src={plc_example}></img>
          </div>

          <div className="flex flex-col mb-16">
            <Text variant="h2" emphasis className="mb-4">
              Build Process
            </Text>
            <div className="mb-8">
              <Text>
                (For this build, I used this{" "}
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=6aNna-Cfzyg"
                >
                  <Text className="inline" color="primary">
                    tutorial
                  </Text>
                </a>{" "}
                for the electronics by Kiyani's Lab) <br></br> <br></br>
              </Text>
              <Text>
                When I first learned about PLC's, I thought to myself "how hard
                would it be to make one?" It actually isn't too difficult to
                make a basic one. I didn't really have an application for this
                yet, but I knew that I wanted to do something with my fish tank.
                Something I've always been concerned with is if I forget to turn
                on my tank's heater and turning it off for cleaning, so my PLC
                can help measure the temperature and let me know if it's too
                cold/hot. With this, I found a tutorial that contained a
                schematic of a simple PLC design, and I was off. Here is an
                outline of the steps I took to create mine.
              </Text>
            </div>
            <div className="mb-8">
              <Text variant="h4" className="inline">
                PCB Design
              </Text>
              <Text>
                I do not have a degree in computer engineering, so I have a
                pretty basic understanding of the electronics behind this. For
                more detail, be sure to check out the video by Kiyani's Lab.{" "}
                <br></br>
                <br></br>
                With that being said, this PLC uses an ESP32 as its brain, which
                is convenient for me because I often use the ESP32 for projects
                that require a microcontroller, so I had a lot of them. Usually
                PLC's have used Relays to control high-powered devices, however
                those can be quite large and expensive for a compact PLC. In
                place of this, our build uses optocouplers to isolate each
                circuit. This isn't to say that optocouplers can replace relays,
                because they often can't handle high currents, but this build is
                meant to handle 5v AC with low current, so this should be fine
                for my applications.
                <br></br>
                <br></br>
                This PLC has 5 digital inputs, and 5 digital AC outputs. (You
                may be asking how I am going to be using a temperature gauge
                with only digital inputs and outputs, more on that later). Here
                is the schematic for each input. It's a pretty simple circuit,
                where the inputs to the 817 optocoupler power LED's, and the
                output of the opto are the collector & emitter of its
                phototransistor, which bring the I/O pin on the ESP32 high or
                low, depending on the input voltage.
                <img className="lg:w-1/2" src={plc_input}></img> <br></br>
                And this is each output. This uses a Triac-based optocoupler and
                a transistor to control the output. Read more about the
                particular one this build uses here:{" "}
                <a
                  target="_blank"
                  href="https://microcontrollerslab.com/moc3021-pinout-examples-datasheet-working-applications/"
                >
                  <Text className="inline" color="primary">
                    MOC3021
                  </Text>
                </a>
                <img className="lg:w-1/2" src={plc_output}></img> <br></br>
              </Text>
              <Text>
                Here is what that looks like when this is repeated 5 times for
                each input and output:
              </Text>
              <img className="lg:w-1/2" src={PLC1}></img> <br></br>
              After ordering several components, and a lot of amateur soldering
              later, I had this:
              <img className="lg:w-1/2" src={PLC4}></img>
            </div>
            <div className="mb-8">
              <Text variant="h3" className="inline">
                Case & Temperature gauge
              </Text>
              <Text>
                It was at this point in the project that I realized my inputs
                were all digital, meaning we couldn't use an analog sensor, like
                a temperature gauge. At this point, I couldn't do any major
                changes to the build, so I opted for simply using analog pins
                directly on the ESP32. I'm justifying this with the fact that
                the PLC isn't currently handling any AC circuits, so this is a
                perfectly fine use case here. <br></br>
                <br></br>I bought an I2C board to connect the sensor to the
                ESP32, and some waterproof temperature sensor probes, and I was
                off.
                <br></br>
                <br></br>
                Now it was time to model the case for the PLC. I'm not
                particularly good at CAD modeling, but this is definitely the
                most complicated part I've modeled yet. Here is what it ended up
                looking like:
              </Text>
              <div className="flex flex-col lg:flex-row">
                <img className="lg:w-1/2" src={plc_bottom}></img>
                <img className="lg:w-1/2" src={plc_top}></img>
              </div>

              <Text>
                <br></br>Here is the finished product:
              </Text>
              <img className="lg:w-1/2" src={PLC3}></img>
              <img className="lg:w-1/2" src={PLC2}></img>
            </div>
            <Text variant="h2" className="inline">
              Application
            </Text>
            <Text>
              Like I said, I wanted to use this for my fish tank, so I dropped
              the temperature probe (they were very curious with what this was)
              into the fish tank. I set up the ESP32 to connect to my home
              network on an IOT SSID, and had it communicate its temperature
              reading via Modbus over TCP. From there, I connected the device to
              my local Ignition Server (read more about this{" "}
              <a target="_blank" href="/#/server">
                <Text className="inline" color="primary">
                  here
                </Text>
              </a>
              ), and started historizing my data. I used an old Surface Pro to
              connect to my Perspective application, and I could see a live
              graph of the temperature. I even set it up to email me if it got
              too hot or cold.
            </Text>
            <img className="lg:w-1/2" src={fish_tank}></img>
            <Text>
              <br></br>And that's my PLC! Thanks for reading.
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
