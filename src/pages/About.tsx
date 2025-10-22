import React from "react";
import profile from "@/assets/portfolio_profile.png";
import Text from "@/components/ui/Text";
import Skill from "@/components/Skill";

function About() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-32">
          <div className="flex gap-32">
            <div className="flex-1 min-w-0">
              <div className="pr-16">
                <img src={profile} className="w-full object-cover" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <Text variant="h1" className="">
                <Text variant="h1" color="primary" as="span">
                  Hi!
                </Text>{" "}
                I'm Nicholas
              </Text>
              <Text variant="h4" className="">
                Here’s a little bit about me
              </Text>
              <Text variant="p" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                fringilla libero ut nibh semper, at bibendum diam porttitor. Sed
                venenatis egestas luctus. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Morbi auctor eu odio non condimentum.
                Quisque tincidunt lorem at turpis vulputate aliquam. Ut sed ex
                quis tortor egestas placerat. Sed at vehicula est, id venenatis
                felis. <br />
                <br /> Morbi quis bibendum quam, eu ornare turpis. Fusce id
                turpis consequat, luctus felis sed, varius mi. Nullam ut nibh
                eget enim sagittis blandit a sit amet enim. Nullam viverra, urna
                non dignissim dapibus, erat lorem eleifend eros, eget
                sollicitudin augue ligula eget elit. Phasellus et quam nisi.
                Curabitur scelerisque id ante in commodo. Praesent quis mollis
                augue.{" "}
              </Text>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex-1 min-w-0">
              <Text variant="h2" emphasis className="">
                My Career So Far
              </Text>
              <Text variant="p" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                fringilla libero ut nibh semper, at bibendum diam porttitor. Sed
                venenatis egestas luctus. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Morbi auctor eu odio non condimentum.
                Quisque tincidunt lorem at turpis vulputate aliquam. Ut sed ex
                quis tortor egestas placerat. Sed at vehicula est, id venenatis
                felis. <br />
                <br /> Morbi quis bibendum quam, eu ornare turpis. Fusce id
                turpis consequat, luctus felis sed, varius mi. Nullam ut nibh
                eget enim sagittis blandit a sit amet enim. Nullam viverra, urna
                non dignissim dapibus, erat lorem eleifend eros, eget
                sollicitudin augue ligula eget elit. Phasellus et quam nisi.
                Curabitur scelerisque id ante in commodo. Praesent quis mollis
                augue.{" "}
              </Text>
            </div>

            <div className="flex-1 min-w-0 flex items-center">
              <div className="flex min-w-0 items-start content-start flex-wrap gap-4">
                <Skill>Public Speaking</Skill>
                <Skill>Communication</Skill>
                <Skill>HTML/CSS</Skill>
                <Skill>JavaScript</Skill>
                <Skill>Public Speaking</Skill>
                <Skill>Communication</Skill>
                <Skill>HTML/CSS</Skill>
                <Skill>JavaScript</Skill>
                <Skill>Public Speaking</Skill>
                <Skill>Communication</Skill>
                <Skill>HTML/CSS</Skill>
                <Skill>JavaScript</Skill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
