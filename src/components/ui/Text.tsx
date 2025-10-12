import React from 'react'
import { cn } from "@/lib/utils"
import { cva,  } from "class-variance-authority"

interface TextProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
  variant?: 'h1' | 'p' | 'small';
  className?: string;
}

const TextVariants = cva(
  "",
  {
    variants: {
      variant: {
        h1: "text-[40px] font-black text-foreground",
        p: "text-[40px] font-black text-foreground",
        small: "text-[12px] text-foreground"
      },
      
    },
    defaultVariants: {
      variant: "p",
    },
  }
)

function Text({
  className,
  variant,
  children,
  ...props
}: TextProps) {
  
  return (
    <div className={cn(TextVariants({ variant, className }))}
          {...props}>
      {children}
    </div>
  );
};

export default Text;