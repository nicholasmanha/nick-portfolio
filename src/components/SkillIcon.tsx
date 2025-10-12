import React, { useState, useEffect } from 'react';

interface IconProps {
  icon: string;
  size?: 'normal' | 'small';
  className?: string;
}

export function Icon({ icon, size = 'normal', className = '' }: IconProps) {
  const sizeClasses = size === 'small' ? 'w-[25px] h-[25px]' : 'w-[64px] h-[64px]';
  const [iconPath, setIconPath] = useState<string | null>(null);
  
  useEffect(() => {
    const icons = import.meta.glob('@/assets/logos/*.svg', { as: 'url' });
    const loader = icons[`/src/assets/logos/${icon}.svg`];
    
    if (loader) {
      loader().then((module) => {
        setIconPath(module as string);
      });
    } else {
      console.error(`Icon ${icon} not found`);
    }
  }, [icon]);
  
  if (!iconPath) {
    return null;
  }
  
  return (
    <img
      src={iconPath}
      alt={`${icon} icon`}
      className={`${sizeClasses} ${className}`}
    />
  );
}