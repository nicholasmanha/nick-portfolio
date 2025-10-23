import Text from './ui/Text'

interface SkillProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'small' | 'normal';
}

function Skill({
  children,
  variant = 'normal',
}: SkillProps) {
  return (
    <div className="inline-block border border-foreground bg-transparent rounded-full px-3 py-1">
        <Text variant={variant === 'small' ? 'small' : 'p'}>{children}</Text>
    </div>
  )
}

export default Skill