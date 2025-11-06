import Skill from '@/components/Skill';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface ScrollingSkillsProps {
  skills?: string[];
  className?: string;
}

export default function ScrollingSkills({ 
  skills = ['React', 'TypeScript', 'Next.JS', 'JavaScript', 'Python'],
  className
}: ScrollingSkillsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      // Get the width of just the first set of skills
      const firstChild = scrollRef.current.firstElementChild;
      if (firstChild) {
        // Calculate width including the gap after the last item
        const children = Array.from(firstChild.children).slice(0, skills.length);
        const totalWidth = children.reduce((acc, child) => {
          const rect = child.getBoundingClientRect();
          return acc + rect.width;
        }, 0);
        // Add gap widths (16px per gap, skills.length gaps)
        setScrollWidth(totalWidth + (16 * skills.length));
      }
    }
  }, [skills]);

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div 
        className="overflow-hidden w-96"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)'
        }}
      >
        <div ref={scrollRef}>
          <div 
            className="flex gap-4 inline-flex"
            style={{
              animation: scrollWidth ? `scroll ${scrollWidth / 30}s linear infinite` : 'none'
            }}
          >
            {skills.map((skill, index) => (
              <Skill key={`skill-${index}`} variant="small">{skill}</Skill>
            ))}
            {skills.map((skill, index) => (
              <Skill key={`skill-duplicate-${index}`} variant="small">{skill}</Skill>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${scrollWidth}px);
          }
        }
      `}</style>
    </div>
  );
}