import { motion } from "framer-motion";
import { useState } from "react";

interface HoverPopupProps {
  text: string;
  children?: React.ReactNode;
}

const HoverPopup: React.FC<HoverPopupProps> = ({ text, children }) => {
  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPopup({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setPopup(null);
  };

  return (
    <span
      className={`relative inline-block ${children ? 'cursor-none' : 'cursor-text'} text-neutral-800 dark:text-orange-100`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {popup && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            top: popup.y,
            left: popup.x,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </span>
  );
};

export default HoverPopup;