import React from 'react'
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children, className = '' }) => {
  return (
    <div className={cn("bg-surface rounded-xl p-16", className)}>
      {children}
    </div>
  );
};

export default ProjectCard;