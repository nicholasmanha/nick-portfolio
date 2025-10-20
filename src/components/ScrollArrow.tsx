import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh]">
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="animate-bounce">
          <ChevronDown className="w-12 h-12 text-foreground" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}