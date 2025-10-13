import React, { useState, useEffect } from 'react';

interface IconProps {
  icon: string;
  size?: 'normal' | 'small';
  variant?: 'normal' | 'ghost';
  className?: string;
}

export function Icon({ icon, size = 'normal', variant = 'normal', className = '' }: IconProps) {
  const maxSize = size === 'small' ? 25 : 64;
  const variantClasses = variant === 'ghost' ? 'brightness-0 invert' : '';
  const [iconPath, setIconPath] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  
  useEffect(() => {
    const icons = import.meta.glob('@/assets/logos/*.svg', { as: 'url' });
    const loader = icons[`/src/assets/logos/${icon}.svg`];
    
    if (loader) {
      loader().then((module) => {
        const path = module as string;
        setIconPath(path);
        
        // Fetch SVG to get dimensions
        fetch(path)
          .then(res => res.text())
          .then(svgText => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            const svgElement = svgDoc.querySelector('svg');
            
            if (svgElement) {
              const viewBox = svgElement.getAttribute('viewBox');
              let width = parseFloat(svgElement.getAttribute('width') || '0');
              let height = parseFloat(svgElement.getAttribute('height') || '0');
              
              if ((!width || !height) && viewBox) {
                const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
                width = vbWidth;
                height = vbHeight;
              }
              
              if (width && height) {
                const maxDim = Math.max(width, height);
                const scale = maxSize / maxDim;
                setDimensions({
                  width: Math.round(width * scale),
                  height: Math.round(height * scale)
                });
              }
            }
          })
          .catch(err => console.error('Error loading SVG dimensions:', err));
      });
    } else {
      console.error(`Icon ${icon} not found`);
    }
  }, [icon, maxSize]);
  
  if (!iconPath || !dimensions) {
    return null;
  }
  
  return (
    <img
      src={iconPath}
      alt={`${icon} icon`}
      style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
      className={`${variantClasses} ${className}`}
    />
  );
}