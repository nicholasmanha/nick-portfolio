import React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon"; // Adjust the import path as needed
import Text from "./ui/Text";
import { Button } from "./ui/button";
import Skill from "./Skill";

interface ProjectCardProps {
  title: string;
  location: string;
  date: string;
  skills: string[];
  seeMore?: string;
  docs?: string;
  code?: string;
  children: React.ReactNode;
  className?: string;
}

interface ProjectCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface ProjectCardImageProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> & {
  Description: React.FC<ProjectCardDescriptionProps>;
  Image: React.FC<ProjectCardImageProps>;
} = ({
  title,
  location,
  date,
  skills,
  seeMore,
  docs,
  code,
  children,
  className = "",
}) => {
  // Extract Image and Description from children
  const childrenArray = React.Children.toArray(children);
  const imageComponent = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === Image
  );
  const otherChildren = childrenArray.filter(
    (child) => !(React.isValidElement(child) && child.type === Image)
  );

  return (
    <div className={cn("bg-surface rounded-card p-16 my-8", className)}>
      <div className="flex gap-8">
        {/* Left side - content */}
        <div className="flex-1">
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <Text variant="h3">{title}</Text>
              <Text variant="p">{location}</Text>
              <Text variant="p">{date}</Text>

              <div className="flex flex-wrap gap-3 my-4 items-center">
                {skills.map((skill, index) => {
                  const icons = import.meta.glob("@/assets/logos/*.svg", {
                    as: "url",
                  });
                  const iconExists = !!icons[`/src/assets/logos/${skill}.svg`];

                  return iconExists ? (
                    <Icon key={index} icon={skill} size="small" />
                  ) : (
                    <Skill key={index}>{skill}</Skill>
                  );
                })}
              </div>

              {otherChildren}
            </div>
            <div className="flex gap-4 mt-6">
              {seeMore && <Button link={seeMore}>SEE MORE</Button>}
              {docs && (
                <Button link={docs} newTab variant="outline">
                  DOCS
                </Button>
              )}
              {code && (
                <Button link={code} newTab variant="outline">
                  CODE
                </Button>
              )}
            </div>
          </div>
        </div>

        {imageComponent && <div className="flex-1">{imageComponent}</div>}
      </div>
    </div>
  );
};

const Description: React.FC<ProjectCardDescriptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("text-foreground mb-4", className)}>{children}</div>
  );
};

const Image: React.FC<ProjectCardImageProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("w-full h-full flex justify-center items-center", className)}>
      {children}
    </div>
  );
};

ProjectCard.Description = Description;
ProjectCard.Image = Image;

export default ProjectCard;
