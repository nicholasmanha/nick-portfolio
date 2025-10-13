import React, { useState, useEffect } from "react";

interface IconProps {
  icon: string;
  size?: "normal" | "small";
  variant?: "normal" | "ghost" | "ghost-muted";
  className?: string;
}

export function Icon({
  icon,
  size = "normal",
  variant = "normal",
  className = "",
}: IconProps) {
  const maxSize = size === "small" ? 25 : 64;

  // define different styles based on variant prop
  const getVariantClasses = () => {
    switch (variant) {
      case "ghost":
        return "brightness-0 invert";
      case "ghost-muted":
        return "brightness-0 invert opacity-50";
      default:
        return "";
    }
  };

  const variantClasses = getVariantClasses();
  const [iconPath, setIconPath] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // runs wheneever icon of maxSize changes
  useEffect(() => {
    const icons = import.meta.glob("@/assets/logos/*.svg", { as: "url" }); // a map of all svg paths in logos folder
    const loader = icons[`/src/assets/logos/${icon}.svg`]; // gets the specific logo based on icons map

    // if icon exists
    if (loader) {
      // dynamically import svg path (async)
      loader().then((module) => {
        // stores svg url into state
        const path = module as string;
        setIconPath(path);

        // fetches actual SVG and converts it to text
        fetch(path)
          .then((res) => res.text())

          // conversions for getting width and height 
          .then((svgText) => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
            const svgElement = svgDoc.querySelector("svg");

            if (svgElement) {
              const viewBox = svgElement.getAttribute("viewBox");
              let width = parseFloat(svgElement.getAttribute("width") || "0");
              let height = parseFloat(svgElement.getAttribute("height") || "0");

              if ((!width || !height) && viewBox) {
                const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
                width = vbWidth;
                height = vbHeight;
              }

              if (width && height) {
                const maxDim = Math.max(width, height);
                const scale = maxSize / maxDim;
                setDimensions({
                  width: Math.round(width * scale),
                  height: Math.round(height * scale),
                });
              }
            }
          })
          .catch((err) => console.error("Error loading SVG dimensions:", err));
      });
    } else {
      console.error(`Icon ${icon} not found`);
    }
  }, [icon, maxSize]);

  // don't render anything until we have the icon URL and calculated dimensions 
  if (!iconPath || !dimensions) {
    return null;
  }

  return (
    <img
      src={iconPath}
      alt={`${icon} icon`}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
      className={`${variantClasses} ${className}`}
    />
  );
}
