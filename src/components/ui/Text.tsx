import React from 'react'
import { cn } from "@/lib/utils"
import { cva,  } from "class-variance-authority"

interface TextProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
  variant?: 'h1' | 'p' | 'small';
  color?: 'normal' | 'primary' | 'muted';
  emphasis?: boolean;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const TextVariants = cva(
  "",
  {
    variants: {
      variant: {
        h1: "text-[64px] font-black text-foreground",
        h2: "text-[48px] font-bold text-foreground",
        h3: "text-[40px] font-black text-foreground",
        h4: "text-[24px] font-medium text-foreground",
        p: "text-[16px] font-normal text-foreground",
        small: "text-[12px] text-foreground"
      },
      color: {
        normal: "text-foreground",
        primary: "text-primary",
        muted: "text-muted"
      }
    },
    defaultVariants: {
      variant: "p",
      color: "normal"
    },
  }
)

function Text({
  className,
  variant,
  color,
  as: Component = 'div',
  children,
  ...props
}: TextProps) {
  
  return (
    <Component className={cn(TextVariants({ variant, color, className }))}
          {...props}>
      {children}
    </Component>
  );
};

export default Text;