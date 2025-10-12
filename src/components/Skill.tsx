import React from 'react'
import Text from './ui/Text'
interface SkillProps {
  children: React.ReactNode;
  className?: string;
}

function Skill({
  className,
  children,
}: SkillProps) {
  return (
    <div className="inline-block border border-foreground bg-transparent rounded-full px-3 py-1">
        <Text variant="small">{children}</Text>
    </div>
  )
}

export default Skill