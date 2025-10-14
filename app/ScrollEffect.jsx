// components/ScrollWidthBox.js
import { useEffect, useState } from 'react';

export default function ScrollWidthBox() {
  const [width, setWidth] = useState(100); // initial width in pixels

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newWidth = 100 + scrollY * 0.5; // adjust multiplier as needed
      setWidth(newWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        height: '50px',
        backgroundColor: '#4CAF50',
        width: `${width}px`,
        transition: 'width 0.1s ease-out',
      }}
    >
      Scroll to Grow
    </div>
  );
}
