import React from 'react'
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'p';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const TextVariants = cva(
  "",
  {
    variants: {
      variant: {
        h1: "text-[40px] font-black text-foreground",
        p: "text-[40px] font-black text-foreground",
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